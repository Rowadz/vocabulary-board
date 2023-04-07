import { DefentionSearch, WordCards } from './features'

function App() {
  return (
    <main className="m-10">
      <div className="navbar bg-base-100">
        Bookmark and search words to remember
      </div>
      <DefentionSearch />
      <WordCards />
    </main>
  )
}

export default App
