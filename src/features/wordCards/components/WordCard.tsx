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
    <div className="card overflow-auto h-96 w-96 bg-base-100 shadow-xl my-1">
      <div className="card-body">
        <div className="flex sticky border-b-2 border-indigo-500 top-0 bg-base-100 z-50">
          <h2 className="card-title flex-1">{definition.word}</h2>
          <div className="card-actions justify-end my-5">
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
          </div>
        </div>
        <p>{definition.origin}</p>
        <Meanings meanings={definition.meanings} />
      </div>
    </div>
  )
}
