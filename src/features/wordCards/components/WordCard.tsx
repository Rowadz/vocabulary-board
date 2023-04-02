import { useAppDispatch } from '../../../app/hooks'
import { DefinitionAPIResponse } from '../../../services/types'
import { deleteDefinition, saveDefinition } from '../wordCardsAPI'
import { deleteWord } from '../wordCardsSlice'
import { Meanings } from './Meanings'

export const WordCard = ({
  definition,
}: {
  definition: DefinitionAPIResponse
}) => {
  const dispatch = useAppDispatch()
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-1">
      <div className="card-body">
        <h2 className="card-title">{definition.word}</h2>
        <p>{definition.origin}</p>
        <Meanings meanings={definition.meanings} />
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              saveDefinition(definition)
            }}
            className="btn btn-primary"
          >
            Save!
          </button>
          <button
            onClick={() => {
              deleteDefinition(definition).then(() => {
                dispatch(deleteWord(definition))
              })
            }}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
