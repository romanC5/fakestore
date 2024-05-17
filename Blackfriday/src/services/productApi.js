// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/products`,
      method: 'GET'
    }),
    getPokemonById: builder.query({
      query: (id) => `/products/${id}`,
      method: 'GET'
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery } = productApi