// @ts-ignore
import { api } from 'src/store/api.js';

const userApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllUser: builder.query<any, void>({
            query: () => `user`,
            providesTags: ['User'],
            transformResponse: (response: any[]) => {
                return response.map((item: any) => {
                    return {
                        ...item,
                        outlet: item.outlet.name,
                    }

                })
            },
        }),
        getUser: builder.query<any, string>({
            query: (id: string) => `user/${id}`,
            providesTags: ['User'],
        }),
        createUser: builder.mutation({
            query: (values: any) => ({
                url: 'user',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: [`User`]
        }),
        editUser: builder.mutation({
            query: (params: { id: string, values: any }) => ({
                url: `user/${params.id}`,
                method: 'PATCH',
                body: params.values,
            }),
            invalidatesTags: [`User`]
        }),
        delUser: builder.mutation({
            query: (params: { id: string }) => ({
                url: `user/${params.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [`User`]
        }),
    })
})

export const {
    useGetAllUserQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useEditUserMutation,
    useDelUserMutation,
} = userApi