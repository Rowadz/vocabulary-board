import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { defentionSearchApi } from '../services/defentionSearchService'
import searchReducer from '../features/defentionSearch/defentionSearchSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [defentionSearchApi.reducerPath]: defentionSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(defentionSearchApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
