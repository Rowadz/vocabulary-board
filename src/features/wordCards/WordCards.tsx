import { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { DefinitionAPIResponse } from '../../services/types'
import { selectTotalTags } from '../tags/tagsSlice'
import { ViewByTag } from './components/ViewByTag'
import { ViewChanger } from './components/ViewChanger'
import { WordCard } from './components/WordCard'
import { selectWordsDefinitions, selectWordsViewMode } from './wordCardsSlice'

export const WordCards = memo(() => {
  const words: DefinitionAPIResponse[] = useSelector(
    selectWordsDefinitions,
    shallowEqual
  )
  const tagsCount = useSelector(selectTotalTags)
  const mode = useSelector(selectWordsViewMode)
  if (!words.length) {
    return null
  }

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Controls</div>
        <ViewChanger />
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total definitions</div>
            <div className="stat-value">{words.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Total tags</div>
            <div className="stat-value">{tagsCount}</div>
          </div>
        </div>
        <div className="divider">
          {mode === 'BY TAG' ? 'Words by Tag' : 'Words'}
        </div>
        {mode !== 'BY TAG' && (
          <div className="flex justify-evenly	flex-wrap ">
            {words.map((definition: DefinitionAPIResponse, i: number) => {
              return <WordCard mode={mode} definition={definition} key={i} />
            })}
          </div>
        )}
        {mode === 'BY TAG' && <ViewByTag />}
      </div>
    </>
  )
})
