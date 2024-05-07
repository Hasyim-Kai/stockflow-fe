import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().global.user?.access_token || null
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  reducerPath: 'api',
  tagTypes: [
    'User',
    'Products',
    'ProductStocks',
    'ProductStockMutation',
  ],
  endpoints: (build) => ({
    getMaterial: build.query({
      query: (id) => `api/material/${id}`,
      transformResponse: (rawResult, meta) => {
        return rawResult.data
      },
      providesTags: ['Material'],
    }),
  }),
})

export const {
  useGetMaterialQuery,
} = api
