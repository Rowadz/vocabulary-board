import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { selectIsEditorOpen, toggleEditor } from '../../editor/editorSlice'

export const TagButton = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    const dispatch = useAppDispatch()
    const isEditorOpen = useSelector(selectIsEditorOpen)
    return (
      <>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">1</span>
          <button
            onClick={() => {
              dispatch(toggleEditor(isEditorOpen ? null : definition))
            }}
            className="btn btn-xs"
          >
            {isEditorOpen ? 'Close tags editor' : 'Tags'}
          </button>
        </div>
      </>
    )
  }
)
