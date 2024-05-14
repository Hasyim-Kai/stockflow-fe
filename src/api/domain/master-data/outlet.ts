// @ts-ignore
import { api } from 'src/store/api.js';

const outletApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllOutlet: builder.query<any, void>({
            query: () => `outlet`,
            providesTags: ['Outlet'],
        }),
        getOutlet: builder.query<any, string>({
            query: (id: string) => `outlet/${id}`,
            providesTags: ['Outlet'],
        }),
        createOutlet: builder.mutation({
            query: (values: any) => ({
                url: 'outlet',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: [`Outlet`]
        }),
        editOutlet: builder.mutation({
            query: (params: { id: string, values: any }) => ({
                url: `outlet/${params.id}`,
                method: 'PATCH',
                body: params.values,
            }),
            invalidatesTags: [`Outlet`]
        }),
        delOutlet: builder.mutation({
            query: (params: { id: string }) => ({
                url: `outlet/${params.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [`Outlet`]
        }),
    })
})

export const {
    useGetAllOutletQuery,
    useGetOutletQuery,
    useCreateOutletMutation,
    useEditOutletMutation,
    useDelOutletMutation,
} = outletApi