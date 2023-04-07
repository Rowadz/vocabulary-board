import { memo } from 'react'
import cx from 'classnames'
import { DefinitionAPIResponse } from '../../../services/types'
import { ViewMode } from '../wordCardsSlice'
import { ActionButtons } from './ActionButtons'
import { Meanings } from './Meanings'
import { SoundPlayer } from './SoundPlayer'
import { TagButton } from './TagsButton'
import { TagsRenderer } from './TagsRenderer'
import { useSelector } from 'react-redux'
import { selectIsEditorOpen } from '../../editor/editorSlice'

type WordCardProps = {
  mode: ViewMode
  definition: DefinitionAPIResponse
}

export const WordCard = memo(({ definition, mode }: WordCardProps) => {
  const isEditorOpen = useSelector(selectIsEditorOpen)
  return (
    <div
      className={cx(
        'border-2 card w-96 overflow-auto bg-base-100 shadow-xl my-1',
        {
          'h-96': mode === 'VARBOSE',
          'w-96': !isEditorOpen,
          'w-full': isEditorOpen,
        }
      )}
    >
      <div className="card-body">
        <div className="flex sticky border-b-2 border-indigo-500 top-0 bg-base-100 z-50">
          <h2 className="card-title flex-1">
            <SoundPlayer phonetics={definition.phonetics} />
            {definition.word}
            <TagButton definition={definition} />
          </h2>
          <div className="card-actions justify-end my-5">
            {<ActionButtons definition={definition} />}
          </div>
        </div>
        <div className="border-b-2 border-indigo-500 p-2">
          <TagsRenderer />
        </div>

        {mode === 'VARBOSE' && <Meanings meanings={definition.meanings} />}
      </div>
    </div>
  )
})
