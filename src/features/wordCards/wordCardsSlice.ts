import {
  ActionReducerMapBuilder,
  createAsyncThunk,
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

export type ViewMode = 'VARBOSE' | 'COMPACT'

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

const initialState: WordsState = {
  definitions: wordsApi.getParsedDefinitions(),
  viewMode: wordsApi.getViewMode() || 'COMPACT',
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    changeMode(state: WordsState, { payload: mode }: PayloadAction<ViewMode>) {
      state.viewMode = mode
      wordsApi.setViewMode(mode)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<WordsState>) => {
    builder.addCase(deleteWord.fulfilled, (state: WordsState, a) => {
      const wordToDelete = a.meta.arg.word
      state.definitions = state.definitions.filter(
        (d: DefinitionAPIResponse) => d.word !== wordToDelete
      )
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
export const selectWordsViewMode = (state: RootState) => state.words.viewMode

export const { changeMode } = wordsSlice.actions

export default wordsSlice.reducer
