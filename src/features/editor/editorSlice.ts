import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { DefinitionAPIResponse } from '../../services/types'

export type EditorState = {
  definition: DefinitionAPIResponse | null
  isOpen: boolean
}

const initialState: EditorState = {
  definition: null,
  isOpen: false,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    toggleEditor(
      state: EditorState,
      { payload }: PayloadAction<DefinitionAPIResponse | null>
    ) {
      state.isOpen = !state.isOpen
      state.definition = payload
    },
  },
})

export const selectEditorDefinition = (state: RootState) =>
  state.editor.definition
export const selectIsEditorOpen = (state: RootState) => state.editor.isOpen

export const { toggleEditor } = editorSlice.actions

export default editorSlice.reducer
