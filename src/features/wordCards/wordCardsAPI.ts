import { v4 as uuidv4 } from 'uuid'
import { DefinitionAPIResponse } from '../../services/types'
import { ViewMode } from './wordCardsSlice'

const KEY_WORDS = 'vocabulary-board-words'
const KEY_VIEW_MODE = 'vocabulary-board-view-mode'

export const saveDefinition = async (
  definitionAPIResponse: DefinitionAPIResponse
): Promise<DefinitionAPIResponse> => {
  const data: DefinitionAPIResponse = {
    ...definitionAPIResponse,
    savedUnixTimestamp: definitionAPIResponse.savedUnixTimestamp || Date.now(),
    id: definitionAPIResponse.id || uuidv4(),
    tagIds: definitionAPIResponse.tagIds || {},
  }

  const oldData = getParsedDefinitions()
  const isAlreadySaved = oldData.find(
    (def) => def.id === definitionAPIResponse.id
  )

  if (isAlreadySaved) {
    // override
    localStorage.setItem(
      KEY_WORDS,
      JSON.stringify(
        oldData.map((d) => (d.id === definitionAPIResponse.id ? data : d))
      )
    )
    return data
  }

  localStorage.setItem(KEY_WORDS, JSON.stringify([data, ...oldData]))
  return data
}

export const deleteDefinition = async ({
  word: wordToDelete,
}: DefinitionAPIResponse) => {
  localStorage.setItem(
    KEY_WORDS,
    JSON.stringify(
      getParsedDefinitions().filter(
        ({ word }: DefinitionAPIResponse) => word !== wordToDelete
      )
    )
  )
}

export const getDefinition = (): string => {
  return localStorage.getItem(KEY_WORDS) || '[]'
}

export const getViewMode = (): ViewMode | null => {
  return localStorage.getItem(KEY_VIEW_MODE) as ViewMode
}

export const setViewMode = async (viewMode: ViewMode): Promise<void> => {
  localStorage.setItem(KEY_VIEW_MODE, viewMode)
}

export const getParsedDefinitions = (): DefinitionAPIResponse[] => {
  const savedData: DefinitionAPIResponse[] = JSON.parse(getDefinition())
  return savedData
}
