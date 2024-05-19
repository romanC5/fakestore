// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (param) => `/products/${param}`,
      method: 'GET'
    }),
    getPokemonById: builder.query({
      query: (id) => `/products/${id}`,
      method: 'GET'
    }),
    formpost: builder.mutation({
      query: (formData) => `/products`,
      method: 'POST',
      body: 'formData'
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery, useFormpostMutation  } = productApi