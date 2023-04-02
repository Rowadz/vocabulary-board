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

export type WordsState = DefinitionAPIResponse[]

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (definitionAPIResponse: DefinitionAPIResponse) => {
    wordsApi.deleteDefinition(definitionAPIResponse)
  }
)

const initialState: WordsState = []

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<WordsState>) => {
    builder.addCase(deleteWord.fulfilled, (state: WordsState, a) => {
      const wordToDelete = a.meta.arg.word
      return state.filter((d: DefinitionAPIResponse) => d.word !== wordToDelete)
    })
    builder.addMatcher(
      defentionSearchApi.endpoints.getDefinition.matchFulfilled,
      (
        state: WordsState,
        { payload }: PayloadAction<DefinitionAPIResponseTranformed>
      ) => {
        state.push(...payload.response)
      }
    )
  },
})

export const selectWords = (state: RootState) => state.words

export default wordsSlice.reducer
