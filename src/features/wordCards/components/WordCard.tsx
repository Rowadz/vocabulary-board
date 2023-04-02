import { DefinitionAPIResponse } from '../../../services/types'
import { Meanings } from './Meanings'

export const WordCard = ({
  definition,
}: {
  definition: DefinitionAPIResponse
}) => {
  return (
    <div className="card w-96 bg-base-200 shadow-xl my-1">
      <div className="card-body">
        <h2 className="card-title">{definition.word}</h2>
        <p>{definition.origin}</p>
        <Meanings meanings={definition.meanings} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Save!</button>
        </div>
      </div>
    </div>
  )
}
