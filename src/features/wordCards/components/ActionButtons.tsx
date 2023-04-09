import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { selectIsEditorOpen } from '../../editor/editorSlice'
import { deleteWord, saveDefinition } from '../wordCardsSlice'

export const ActionButtons = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    const dispatch = useAppDispatch()
    const isEditorOpen = useSelector(selectIsEditorOpen)
    return (
      <>
        {!!!definition.savedUnixTimestamp && (
          <button
            onClick={() => {
              dispatch(saveDefinition(definition))
            }}
            className="btn btn-primary btn-sm"
          >
            Save!
          </button>
        )}
        {!isEditorOpen && (
          <button
            onClick={() => {
              dispatch(deleteWord(definition))
            }}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>
        )}
      </>
    )
  }
)
