import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DefinitionAPIResponse, DefinitionAPIResponseTranformed } from './types'

const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`

// Define a service using a base URL and expected endpoints
export const defentionSearchApi = createApi({
  reducerPath: 'defentionSearch',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getDefinition: builder.query<DefinitionAPIResponseTranformed, string>({
      query: (word: string) => `${word}`,
      transformResponse: async (
        res: DefinitionAPIResponse[],
        _,
        word: string
      ) => ({
        response: res.map((d) => ({
          ...d,
          tagIds: {},
          id: 'NOT_SAVED',
          savedUnixTimestamp: 0,
        })),
        word,
      }),
    }),
  }),
})

export const { useGetDefinitionQuery, useLazyGetDefinitionQuery } =
  defentionSearchApi
