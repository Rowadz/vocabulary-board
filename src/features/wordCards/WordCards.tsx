import { memo } from 'react'
import { useSelector } from 'react-redux'
import { DefinitionAPIResponse } from '../../services/types'
import { WordCard } from './components/WordCard'
import { selectWords, WordsState } from './wordCardsSlice'

export const WordCards = memo(() => {
  const words: WordsState = useSelector(selectWords)
  console.log({ words })

  return (
    <div className="flex justify-evenly	flex-wrap ">
      {words.map((definition: DefinitionAPIResponse, i: number) => {
        return <WordCard definition={definition} key={i} />
      })}
    </div>
  )
})
