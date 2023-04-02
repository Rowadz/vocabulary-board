import { DefinitionAPIResponse } from '../../../services/types'
import { saveDefinition } from '../wordCardsAPI'
import { Meanings } from './Meanings'

export const WordCard = ({
  definition,
}: {
  definition: DefinitionAPIResponse
}) => {
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
        </div>
      </div>
    </div>
  )
}
