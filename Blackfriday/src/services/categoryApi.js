// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getCategoryByName: builder.query({
      query: () => `/categories`,
      method: 'GET'
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoryByNameQuery } = categoryApi