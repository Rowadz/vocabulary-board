import { memo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { selectEditorDefinition } from '../editor/editorSlice'
import { addTagToDefinition } from '../wordCards'
import { addTag } from './tagsSlice'

export const TagsAdder = memo(() => {
  const dispatch = useAppDispatch()
  const definition = useSelector(selectEditorDefinition)
  const inputRef = useRef<HTMLInputElement>(null)

  const addTagAndAttachToDefinition = () => {
    const tagTitle: string | undefined = inputRef.current?.value
    if (!tagTitle) {
      return tagTitle
    }
    const tagId = uuid()
    dispatch(addTag({ tagId, title: tagTitle }))
    dispatch(addTagToDefinition({ definitionId: definition?.id, tagId }))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTagAndAttachToDefinition()
    }
  }

  return (
    <>
      <div className="form-control w-full ">
        <div className="flex">
          <input
            ref={inputRef}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Type a word here"
            className="input input-bordered  w-full max-w-xs outline-none mx-1"
          />
          <button
            className="btn btn-active "
            onClick={addTagAndAttachToDefinition}
          >
            Add
          </button>
        </div>
        <label className="label">
          <span className="label-text-alt">💡 Hit enter to search</span>
        </label>
      </div>
    </>
  )
})
