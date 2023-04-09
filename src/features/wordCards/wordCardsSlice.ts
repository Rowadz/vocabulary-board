import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { defentionSearchApi } from '../../services/defentionSearchService'
import {
  DefinitionAPIResponse,
  DefinitionAPIResponseTranformed,
} from '../../services/types'
import * as wordsApi from './wordCardsAPI'

export type ViewMode = 'VARBOSE' | 'COMPACT' | 'BY TAG'

export type WordsState = {
  definitions: DefinitionAPIResponse[]
  viewMode: ViewMode
}

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (definitionAPIResponse: DefinitionAPIResponse) => {
    wordsApi.deleteDefinition(definitionAPIResponse)
  }
)
export const saveDefinition = createAsyncThunk(
  'words/saveDefinition',
  async (definitionAPIResponse: DefinitionAPIResponse) => {
    return wordsApi.saveDefinition(definitionAPIResponse)
  }
)

const initialState: WordsState = {
  definitions: wordsApi.getParsedDefinitions(),
  viewMode: wordsApi.getViewMode() || 'VARBOSE',
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    changeMode(state: WordsState, { payload: mode }: PayloadAction<ViewMode>) {
      state.viewMode = mode
      wordsApi.setViewMode(mode)
    },
    addTagToDefinition(
      state: WordsState,
      {
        payload: { definitionId, tagId },
      }: PayloadAction<{ tagId: string; definitionId: string }>
    ) {
      state.definitions = state.definitions.map((d) => {
        if (d.id === definitionId) {
          const newDef = { ...d, tagIds: { ...d.tagIds, [tagId]: true } }
          wordsApi.saveDefinition(newDef)
          return newDef
        }
        return d
      })
    },
    ramoveTagToDefinition(
      state: WordsState,
      {
        payload: { definitionId, tagId },
      }: PayloadAction<{ tagId: string; definitionId: string }>
    ) {
      state.definitions = state.definitions.map((d) => {
        if (d.id === definitionId) {
          delete d.tagIds[tagId]
          wordsApi.saveDefinition(d)
        }
        return d
      })
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<WordsState>) => {
    builder.addCase(deleteWord.fulfilled, (state: WordsState, a) => {
      const wordToDelete = a.meta.arg.word
      state.definitions = state.definitions.filter(
        (d: DefinitionAPIResponse) => d.word !== wordToDelete
      )
    })
    builder.addCase(saveDefinition.fulfilled, (state: WordsState, a) => {
      const newDef = a.payload

      state.definitions = state.definitions.map((d: DefinitionAPIResponse) => {
        if (d.word === newDef.word) {
          return newDef
        }
        return d
      })
    })
    builder.addMatcher(
      defentionSearchApi.endpoints.getDefinition.matchFulfilled,
      (
        state: WordsState,
        { payload }: PayloadAction<DefinitionAPIResponseTranformed>
      ) => {
        state.definitions.unshift(...payload.response)
      }
    )
  },
})

export const selectWordsDefinitions = (state: RootState) =>
  state.words.definitions

const selectDefinitions = (state: RootState) => state.words.definitions
const selectDefinitionId = (state: RootState, definitionId: string) =>
  definitionId

// TODO:: use entity adapter
export const selectDefinitionById = createSelector(
  [selectDefinitions, selectDefinitionId],
  (definitions: DefinitionAPIResponse[], definitionId: string) =>
    definitions.find((d) => d.id === definitionId)
)

export const selectWordsViewMode = (state: RootState) => state.words.viewMode

export const { changeMode, addTagToDefinition, ramoveTagToDefinition } =
  wordsSlice.actions

export default wordsSlice.reducer
