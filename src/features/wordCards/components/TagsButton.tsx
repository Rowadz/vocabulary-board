import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { selectIsEditorOpen, toggleEditor } from '../../editor/editorSlice'

export const TagButton = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    const dispatch = useAppDispatch()
    const isEditorOpen = useSelector(selectIsEditorOpen)
    if (isEditorOpen) {
      return null
    }
    return (
      <>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">
            {Object.keys(definition.tagIds).length}
          </span>
          <button
            onClick={() => {
              dispatch(toggleEditor(definition))
            }}
            className="btn btn-xs"
          >
            Tags
          </button>
        </div>
      </>
    )
  }
)
