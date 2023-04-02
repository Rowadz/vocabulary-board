export interface DefinitionAPIResponseTranformed {
  response: DefinitionAPIResponse[]
  word: string
}

export interface DefinitionAPIResponse {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: Meaning[]
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

interface Definition {
  definition: string
  example: string
  synonyms: any[]
  antonyms: any[]
}

interface Phonetic {
  text: string
  audio?: string
}
