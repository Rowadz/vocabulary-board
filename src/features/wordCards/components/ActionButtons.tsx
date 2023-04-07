import { memo } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { deleteWord, saveDefinition } from '../wordCardsSlice'

export const ActionButtons = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    const dispatch = useAppDispatch()
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
        <button
          onClick={() => {
            dispatch(deleteWord(definition))
          }}
          className="btn btn-error btn-sm"
        >
          Delete
        </button>
      </>
    )
  }
)
