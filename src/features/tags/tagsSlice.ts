import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type Tag = { tagId: string; title: string }

const tagsAdapter = createEntityAdapter<Tag>({
  selectId: (book) => book.tagId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const tagsSlice = createSlice({
  name: 'tags',
  initialState: tagsAdapter.getInitialState(),
  reducers: {
    addTag: tagsAdapter.addOne,
  },
})

export const { addTag } = tagsSlice.actions

const { selectAll, selectTotal } = tagsAdapter.getSelectors<RootState>(
  (state) => state.tags
)

export const selectAllTags = selectAll
export const selectTotalTags = selectTotal

export default tagsSlice.reducer
