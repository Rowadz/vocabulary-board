import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DefentionSearch, WordCards } from './features'
import { Editor } from './features/editor/Editor'
import { selectIsEditorOpen } from './features/editor/editorSlice'

function App() {
  const [show, setShow] = useState<boolean>(true)

  // useEffect(() => {
  //   const theme = localStorage.getItem(KEY) || 'night'
  //   const html = document.getElementsByTagName('html').item(0)
  //   html?.setAttribute('data-theme', theme)
  // }, [])

  const isEditorOpen = useSelector(selectIsEditorOpen)
  if (show) {
    return (
      <div className="flex justify-center h-screen items-center flex-col p-5">
        <h1 className="text-2xl mb-12">
          Supercharge your vocabulary with VocabVault
        </h1>
        <DefentionSearch fullWidth={false} fun={setShow} />
      </div>
    )
  }
  return (
    <main className="m-10">
      <div className="navbar bg-base-100">
        Bookmark and search words to remember
      </div>
      {/* <ThemeSelector /> */}
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
