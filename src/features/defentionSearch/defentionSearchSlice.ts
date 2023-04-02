import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { defentionSearchApi } from '../../services/defentionSearchService'
import {
  DefinitionAPIResponse,
  DefinitionAPIResponseTranformed,
} from '../../services/types'

export interface SearchState extends Record<string, DefinitionAPIResponse[]> {}

const initialState: SearchState = {}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<SearchState>) => {
    builder.addMatcher(
      defentionSearchApi.endpoints.getDefinition.matchFulfilled,
      (
        state: SearchState,
        { payload }: PayloadAction<DefinitionAPIResponseTranformed>
      ) => {
        // TODO:: remove this...
        // TODO:: worry about caching in the future.
        state[payload.word] = payload.response
      }
    )
  },
})

export default searchSlice.reducer
