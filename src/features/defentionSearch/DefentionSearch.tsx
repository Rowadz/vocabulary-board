import { useRef } from 'react'
import { useLazyGetDefinitionQuery } from '../../services/defentionSearchService'

export const DefentionSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [triggerSearchCall] = useLazyGetDefinitionQuery()

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-xs"
      />
      <button
        className="btn btn-active"
        onClick={() => {
          const word: string | undefined = inputRef.current?.value
          if (word) {
            triggerSearchCall(word)
          }
        }}
      >
        Button
      </button>
    </>
  )
}
