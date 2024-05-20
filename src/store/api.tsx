import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().global.user?.token || null
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  reducerPath: 'api',
  tagTypes: [
    'Auth',
    'User',
    `Outlet`,
    'Product',
    'TransactionProduct',
    'TransactionInvoice', 'Invoice',

  ],
  endpoints: (build: any) => ({
    //   getMaterial: build.query({
    //     query: (id) => `api/material/${id}`,
    //     transformResponse: (rawResult, meta) => {
    //       return rawResult.data
    //     },
    //     providesTags: ['Material'],
    //   }),
  }),
})
