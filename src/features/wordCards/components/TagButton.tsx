import { memo } from 'react'

export const TagButton = memo(() => {
  return (
    <>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">1</span>
        <button className="btn btn-xs">Tags</button>
      </div>
    </>
  )
})
