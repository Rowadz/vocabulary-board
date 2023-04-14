import { useRef } from 'react'
import cx from 'classnames'
import { useLazyGetDefinitionQuery } from '../../services/defentionSearchService'

export const DefentionSearch = ({
  fullWidth = true,
  fun,
}: {
  fun?: React.Dispatch<React.SetStateAction<boolean>>
  fullWidth?: boolean
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [triggerSearchCall] = useLazyGetDefinitionQuery()
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const word: string | undefined = inputRef.current?.value
      if (word) {
        !!fun && fun(false)
        triggerSearchCall(word)
      }
    }
  }

  return (
    <>
      <div className={cx('form-control', { 'w-full': !!fullWidth })}>
        <div className="flex">
          <input
            ref={inputRef}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Type a word here"
            className="input input-bordered input-lg w-full max-w-xs outline-none mx-1"
          />
          <button
            className="btn btn-active btn-lg ml-3"
            onClick={() => {
              const word: string | undefined = inputRef.current?.value
              if (word) {
                !!fun && fun(false)
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
