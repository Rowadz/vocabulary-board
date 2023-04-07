import { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { DefinitionAPIResponse } from '../../services/types'
import { ViewChanger } from './components/ViewChanger'
import { WordCard } from './components/WordCard'
import { selectWordsDefinitions, selectWordsViewMode } from './wordCardsSlice'

export const WordCards = memo(() => {
  const words: DefinitionAPIResponse[] = useSelector(
    selectWordsDefinitions,
    shallowEqual
  )
  const mode = useSelector(selectWordsViewMode)
  if (!words.length) {
    return null
  }

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">View Controls</div>
        <ViewChanger />
        <div className="divider">Words</div>
        <div className="flex justify-evenly	flex-wrap ">
          {words.map((definition: DefinitionAPIResponse, i: number) => {
            return <WordCard mode={mode} definition={definition} key={i} />
          })}
        </div>
      </div>
    </>
  )
})
