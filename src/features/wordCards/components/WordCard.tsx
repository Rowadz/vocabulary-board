import { memo } from 'react'
import cx from 'classnames'
import { DefinitionAPIResponse } from '../../../services/types'
import { ViewMode } from '../wordCardsSlice'
import { ActionButtons } from './ActionButtons'
import { Meanings } from './Meanings'
import { SoundPlayer } from './SoundPlayer'

export const WordCard = memo(
  ({
    definition,
    mode,
  }: {
    mode: ViewMode
    definition: DefinitionAPIResponse
  }) => {
    return (
      <div
        className={cx(
          'border-2 card overflow-auto w-96 bg-base-100 shadow-xl my-1',
          {
            'h-96': mode === 'VARBOSE',
          }
        )}
      >
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

          {mode === 'VARBOSE' && <Meanings meanings={definition.meanings} />}
        </div>
      </div>
    )
  }
)
