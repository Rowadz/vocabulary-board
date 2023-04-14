import { Definition, Meaning } from '../../../services/types'

export const Meanings = ({ meanings }: { meanings: Meaning[] }) => {
  return (
    <>
      {meanings.map((m: Meaning, i: number) => {
        return (
          <ul className="steps steps-vertical" key={i}>
            {m.definitions.map((d: Definition, j: number) => {
              return (
                <div className="step step-primary" key={`${j}-${d.definition}`}>
                  {d.definition}
                </div>
              )
            })}

            <div className="divider" />
          </ul>
        )
      })}
    </>
  )
}
