import { memo } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { deleteDefinition, saveDefinition } from '../wordCardsAPI'
import { deleteWord } from '../wordCardsSlice'

export const ActionButtons = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    const dispatch = useAppDispatch()
    return (
      <>
        <button
          onClick={() => {
            saveDefinition(definition)
          }}
          className="btn btn-primary btn-sm"
        >
          Save!
        </button>
        <button
          onClick={() => {
            deleteDefinition(definition).then(() => {
              dispatch(deleteWord(definition))
            })
          }}
          className="btn btn-error btn-sm"
        >
          Delete
        </button>
      </>
    )
  }
)
