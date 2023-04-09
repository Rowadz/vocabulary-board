import { memo, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { DefinitionAPIResponse } from '../../../services/types'
import { selectAllTags, Tag } from '../../tags/tagsSlice'
import { selectWordsDefinitions } from '../wordCardsSlice'
import { WordCard } from './WordCard'

const intersectingKeys = (...objects: Record<string, boolean | Tag>[]) => {
  return !!objects
    .map((object) => Object.keys(object || {}))
    .sort((a, b) => a.length - b.length)
    .reduce((a, b) => a.filter((key) => b.includes(key))).length
}

export const ViewByTag = memo(() => {
  const [selectedTags, setSelectedTags] = useState<Record<string, true>>({})
  const tags: Tag[] = [
    ...useSelector(selectAllTags),
    { tagId: 'No Tags!', title: 'No Tags!' },
  ]

  const definitions: DefinitionAPIResponse[] = useSelector(
    selectWordsDefinitions
  )
  return (
    <>
      <div className="tabs tabs-boxed">
        {tags.map((t: Tag) => (
          <div
            key={t.tagId}
            onClick={() => {
              if (selectedTags[t.tagId]) {
                setSelectedTags((state) => {
                  const newObj = { ...state }
                  delete newObj[t.tagId]
                  return newObj
                })
              } else {
                setSelectedTags((state) => ({ ...state, [t.tagId]: true }))
              }
            }}
          >
            <span
              className={cx('tab tab-bordered m-4', {
                'tab-active': !!selectedTags[t.tagId],
              })}
            >
              {t.title}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly	flex-wrap ">
        {definitions
          .filter((d) => {
            if (
              selectedTags['No Tags!'] &&
              Object.keys(d.tagIds || {}).length === 0
            ) {
              // don't filter the definition if No Tags! is selected
              // and there are no tags attached to it
              return true
            }
            return intersectingKeys(d.tagIds, selectedTags)
          })
          .map((d) => (
            <WordCard key={d.id} definition={d} mode="BY TAG" />
          ))}
      </div>
    </>
  )
})
