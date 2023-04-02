import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { defentionSearchApi } from '../../services/defentionSearchService'
import {
  DefinitionAPIResponse,
  DefinitionAPIResponseTranformed,
} from '../../services/types'
import { getParsedDefinitions } from './wordCardsAPI'

export type WordsState = DefinitionAPIResponse[]

const initialState: WordsState = getParsedDefinitions()

export const wordsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<WordsState>) => {
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
