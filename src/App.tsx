import { DefentionSearch, WordCards } from './features'

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <button className="btn btn-ghost normal-case text-xl">
          Vocabulary Board
        </button>
      </div>
      <DefentionSearch />
      <WordCards />
    </>
  )
}

export default App
