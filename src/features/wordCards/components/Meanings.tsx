import cx from 'classnames'
import { Definition, Meaning } from '../../../services/types'

export const Meanings = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <>
      {meanings.map((m: Meaning, i: number) => {
        return (
          <div key={i}>
            {m.definitions.map((d: Definition, j: number) => {
              return (
                <div
                  className={cx('chat', {
                    'chat-end': j % 2 === 0,
                    'chat-start': j % 2 !== 0,
                  })}
                  key={`${j}-${d.definition}`}
                >
                  <div className="chat-bubble chat-bubble-info">
                    {d.definition}
                  </div>
                </div>
              )
            })}

            <div className="divider" />
          </div>
        )
      })}
    </>
  )
}
