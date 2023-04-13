import { useSelector } from 'react-redux'
import { ThemeSelector } from './components/ThemeSelector'
import { DefentionSearch, WordCards } from './features'
import { Editor } from './features/editor/Editor'
import { selectIsEditorOpen } from './features/editor/editorSlice'

function App() {
  const isEditorOpen = useSelector(selectIsEditorOpen)
  return (
    <main className="m-10">
      <div className="navbar bg-base-100">
        Bookmark and search words to remember
      </div>
      <ThemeSelector />
      {isEditorOpen ? (
        <Editor />
      ) : (
        <>
          <DefentionSearch />
          <WordCards />
        </>
      )}
    </main>
  )
}

export default App
