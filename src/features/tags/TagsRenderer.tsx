import { useSelector } from 'react-redux'
import cx from 'classnames'
import { selectAllTags, Tag } from './tagsSlice'
import { selectEditorDefinition } from '../editor/editorSlice'
import { selectDefinitionById } from '../wordCards'
import { RootState } from '../../app/store'
import { DefinitionAPIResponse } from '../../services/types'

type TagsRendererProps = {
  mode?: 'Editor' | 'Specific'
}

export const TagsRenderer = ({ mode = 'Editor' }: TagsRendererProps) => {
  const allTags: Tag[] = useSelector(selectAllTags)
  const editorDefinition = useSelector(selectEditorDefinition)
  const definition: Required<DefinitionAPIResponse> = useSelector(
    (state: RootState) => selectDefinitionById(state, editorDefinition.id)
  ) as Required<DefinitionAPIResponse>

  return (
    <section>
      <div className="btn-group flex justify-evenly	flex-wrap">
        {allTags.map((tag: Tag) => (
          <button
            className={cx('btn my-1', {
              'btn-active': definition.tagIds[tag.tagId],
            })}
            key={tag.tagId}
          >
            {tag.title}
          </button>
        ))}
      </div>
    </section>
  )
}
