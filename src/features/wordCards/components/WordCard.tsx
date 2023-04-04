import { memo } from 'react'
import { DefinitionAPIResponse } from '../../../services/types'
import { ActionButtons } from './ActionButtons'
import { Meanings } from './Meanings'
import { SoundPlayer } from './SoundPlayer'

export const WordCard = memo(
  ({ definition }: { definition: DefinitionAPIResponse }) => {
    return (
      <div className="card overflow-auto h-96 w-96 bg-base-100 shadow-xl my-1">
        <div className="card-body">
          <div className="flex sticky border-b-2 border-indigo-500 top-0 bg-base-100 z-50">
            <h2 className="card-title flex-1">
              <SoundPlayer phonetics={definition.phonetics} />
              {definition.word}
            </h2>
            <div className="card-actions justify-end my-5">
              <ActionButtons definition={definition} />
            </div>
          </div>
          <p>{definition.origin}</p>
          <Meanings meanings={definition.meanings} />
        </div>
      </div>
    )
  }
)
