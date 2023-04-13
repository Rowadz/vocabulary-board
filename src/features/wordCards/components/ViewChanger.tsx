import { memo } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { changeMode, selectWordsViewMode, ViewMode } from '../wordCardsSlice'
import { useAppDispatch } from '../../../app/hooks'

export const ViewChanger = memo(() => {
  const mode = useSelector(selectWordsViewMode)
  const dispatch = useAppDispatch()
  const toggleMode = (viewMode: ViewMode) => {
    dispatch(changeMode(viewMode))
  }
  return (
    <>
      <div className="flex justify-end">
        <div className="btn-group">
          <button
            onClick={() => {
              toggleMode('VARBOSE')
            }}
            className={cx('btn btn-sm', { 'btn-active': mode === 'VARBOSE' })}
          >
            Varbose
          </button>
          <button
            onClick={() => {
              toggleMode('COMPACT')
            }}
            className={cx('btn btn-sm', { 'btn-active': mode === 'COMPACT' })}
          >
            Compact
          </button>
          <button
            onClick={() => {
              toggleMode('BY TAG')
            }}
            className={cx('btn btn-sm', { 'btn-active': mode === 'BY TAG' })}
          >
            By tag
          </button>
        </div>
      </div>
    </>
  )
})
