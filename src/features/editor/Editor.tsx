import { useSelector } from 'react-redux'
import { selectWordsViewMode } from '../wordCards'
import { WordCard } from '../wordCards/components/WordCard'
import { selectEditorDefinition } from './editorSlice'
import { TagsAdder } from '../tags/TagsAdder'
import { TagsRenderer } from '../tags/TagsRenderer'

export const Editor = () => {
  const definition = useSelector(selectEditorDefinition)
  const mode = useSelector(selectWordsViewMode)

  return (
    <div>
      <WordCard
        editorRenderer={() => (
          <>
            <TagsAdder />
            <TagsRenderer />
          </>
        )}
        mode={mode}
        definition={definition!}
      />
    </div>
  )
}
