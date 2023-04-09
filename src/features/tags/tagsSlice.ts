import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type Tag = { tagId: string; title: string }

const KEY = 'vocabulary-board-tags'
const tagsAdapter = createEntityAdapter<Tag>({
  selectId: (book) => book.tagId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const tagsSlice = createSlice({
  name: 'tags',
  initialState: tagsAdapter.getInitialState(
    JSON.parse(localStorage.getItem(KEY) || '{}') as EntityState<Tag>
  ),
  reducers: {
    addTag: (
      state: EntityState<Tag>,
      { payload: { tagId, title } }: PayloadAction<Tag>
    ) => {
      tagsAdapter.addOne(state, { tagId, title })
      localStorage.setItem(KEY, JSON.stringify(state))
    },
  },
})

export const { addTag } = tagsSlice.actions

const { selectAll, selectTotal } = tagsAdapter.getSelectors<RootState>(
  (state) => state.tags
)

export const selectAllTags = selectAll
export const selectTotalTags = selectTotal

export default tagsSlice.reducer
