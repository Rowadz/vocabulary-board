import { useSelector } from 'react-redux'
import cx from 'classnames'
import { selectAllTags, Tag } from './tagsSlice'
import { selectEditorDefinition } from '../editor/editorSlice'
import {
  addTagToDefinition,
  ramoveTagToDefinition,
  selectDefinitionById,
} from '../wordCards'
import { RootState } from '../../app/store'
import { DefinitionAPIResponse } from '../../services/types'
import { useAppDispatch } from '../../app/hooks'

type TagsRendererProps = {
  mode?: 'Editor' | 'Specific'
}

export const TagsRenderer = ({ mode = 'Editor' }: TagsRendererProps) => {
  const dispatch = useAppDispatch()
  const allTags: Tag[] = useSelector(selectAllTags)
  const editorDefinition = useSelector(selectEditorDefinition)
  const definition: DefinitionAPIResponse = useSelector((state: RootState) =>
    selectDefinitionById(state, editorDefinition.id)
  ) as DefinitionAPIResponse

  return (
    <section>
      <div className="btn-group flex justify-evenly	flex-wrap">
        {allTags.map((tag: Tag) => (
          <button
            onClick={() => {
              const argsObj = { definitionId: definition.id, tagId: tag.tagId }
              if (definition.tagIds[tag.tagId]) {
                dispatch(ramoveTagToDefinition(argsObj))
              } else {
                dispatch(addTagToDefinition(argsObj))
              }
            }}
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
