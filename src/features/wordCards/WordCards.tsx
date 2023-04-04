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

  return (
    <>
      <ViewChanger />
      <div className="flex justify-evenly	flex-wrap ">
        {words.map((definition: DefinitionAPIResponse, i: number) => {
          return <WordCard mode={mode} definition={definition} key={i} />
        })}
      </div>
    </>
  )
})
