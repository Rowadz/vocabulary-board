import { useSelector } from 'react-redux'
import { selectWordsViewMode } from '../wordCards'
import { WordCard } from '../wordCards/components/WordCard'
import { selectEditorDefinition } from './editorSlice'

export const Editor = () => {
  const definition = useSelector(selectEditorDefinition)
  const mode = useSelector(selectWordsViewMode)

  return (
    <div>
      <WordCard mode={mode} definition={definition!} />
    </div>
  )
}
