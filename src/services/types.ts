export interface DefinitionAPIResponseTranformed {
  response: DefinitionAPIResponse[]
  word: string
}

// these are added to the definition after saving it
export interface DefinitionMetaData {
  id: string
  savedUnixTimestamp: number
}

export interface DefinitionAPIResponse extends Partial<DefinitionMetaData> {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: Meaning[]
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

export interface Definition {
  definition: string
  example: string
  synonyms: any[]
  antonyms: any[]
}

export interface Phonetic {
  text: string
  audio?: string
}
