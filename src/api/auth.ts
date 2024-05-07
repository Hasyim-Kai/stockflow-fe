// @ts-ignore
import { api } from 'src/store/api.jsx';

const authApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (build: any) => ({
        login: build.mutation({
            query: (values: any) => ({
                url: '/auth/signin',
                method: 'POST',
                body: values,
            }),
            transformResponse: (rawResult: any) => {
                return rawResult.data
            },
            invalidatesTags: [`User`]
        }),
    })
})

export const { useLoginMutation } = authApi