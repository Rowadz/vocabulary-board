import { DefinitionAPIResponse } from '../../services/types'

const KEY = 'vocabulary-board-words'

export const saveDefinition = async (
  definitionAPIResponse: DefinitionAPIResponse
) => {
  localStorage.setItem(
    KEY,
    JSON.stringify([...getParsedDefinitions(), definitionAPIResponse])
  )
}

export const getDefinition = (): string => {
  return localStorage.getItem(KEY) || '[]'
}

export const getParsedDefinitions = (): DefinitionAPIResponse[] => {
  const savedData: DefinitionAPIResponse[] = JSON.parse(getDefinition())
  return savedData
}
