import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectWordsViewMode } from '../wordCards'
import { WordCard } from '../wordCards/components/WordCard'
import { selectEditorDefinition, toggleEditor } from './editorSlice'
import { TagsAdder } from '../tags/TagsAdder'
import { TagsRenderer } from '../tags/TagsRenderer'
import { useAppDispatch } from '../../app/hooks'

export const Editor = () => {
  const dispatch = useAppDispatch()
  const definition = useSelector(selectEditorDefinition)
  const mode = useSelector(selectWordsViewMode)
  const closeEditor = useCallback(
    ({ key }: KeyboardEvent) =>
      key === 'Escape' && dispatch(toggleEditor(null)),
    [dispatch]
  )

  useEffect(() => {
    document.addEventListener('keydown', closeEditor, false)
    return () => document.removeEventListener('keydown', closeEditor, false)
  }, [closeEditor])

  return (
    <div>
      <WordCard
        editorRenderer={() => (
          <>
            <TagsAdder />
            <TagsRenderer />
            <span className="label-text-alt">
              💡 Press <b>escape</b> to close this window
            </span>
          </>
        )}
        mode={mode}
        definition={definition!}
      />
    </div>
  )
}
