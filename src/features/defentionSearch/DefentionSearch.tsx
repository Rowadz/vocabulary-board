import { useRef } from 'react'
import { useLazyGetDefinitionQuery } from '../../services/defentionSearchService'

export const DefentionSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [triggerSearchCall] = useLazyGetDefinitionQuery()
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const word: string | undefined = inputRef.current?.value
      if (word) {
        triggerSearchCall(word)
      }
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
            className="input input-bordered input-lg w-full max-w-xs outline-none mx-1"
          />
          <button
            className="btn btn-active btn-lg"
            onClick={() => {
              const word: string | undefined = inputRef.current?.value
              if (word) {
                triggerSearchCall(word)
              }
            }}
          >
            Search!
          </button>
        </div>
        <label className="label">
          <span className="label-text-alt">💡 Hit enter to search</span>
        </label>
      </div>
    </>
  )
}
