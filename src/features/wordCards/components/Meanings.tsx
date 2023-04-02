import { Definition, Meaning } from '../../../services/types'

export const Meanings = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <>
      {meanings.map((m: Meaning, i: number) => {
        return (
          <div key={i}>
            <ul className="steps steps-vertical">
              {m.definitions.map((d: Definition, j: number) => {
                return (
                  <li
                    key={`${j}-${d.definition}`}
                    className="step step-primary"
                  >
                    {d.definition}
                  </li>
                )
              })}
            </ul>
            <div className="divider" />
          </div>
        )
      })}
    </>
  )
}
