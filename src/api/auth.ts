// @ts-ignore
import { api } from 'src/store/api.js';

const authApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (build: any) => ({
        login: build.mutation({
            query: (values: any) => ({
                url: '/auth/signin',
                method: 'POST',
                body: values,
            }),
            // transformResponse: (rawResult: any, meta: any) => {
            //     return rawResult.data
            // },
            invalidatesTags: [`Auth`, `Product`, `Outlet`, 'Product', 'TransactionProduct'],
        }),
    })
})

export const { useLoginMutation } = authApi