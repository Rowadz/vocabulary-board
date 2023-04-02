import { DefinitionAPIResponse } from '../../services/types'

// A mock function to mimic making an async request for data
export async function saveSearchResult(
  word: string,
  definition: DefinitionAPIResponse
) {
  // TODO:: make this under a namespace so we can get the whole saved words
  // TODO:: in the future this should be moved to indexDB
  localStorage.setItem(word, JSON.stringify(definition))
}
