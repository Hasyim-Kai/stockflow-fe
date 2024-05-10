// @ts-ignore
import { api } from 'src/store/api.js';

const productApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllProduct: builder.query<any, void>({
            query: () => `product`,
            providesTags: ['Product'],
        }),
        getProduct: builder.query<any, string>({
            query: (id: string) => `product/${id}`,
            providesTags: ['Product'],
        }),
        createProduct: builder.mutation({
            query: (values: any) => ({
                url: 'product',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: [`Product`]
        }),
        editProduct: builder.mutation({
            query: (params: { id: string, values: any }) => ({
                url: `product/${params.id}`,
                method: 'PATCH',
                body: params.values,
            }),
            invalidatesTags: [`Product`]
        }),
        openProductSeal: builder.mutation({
            query: (params: { id: string }) => ({
                url: `product/${params.id}`,
                method: 'PATCH',
            }),
            invalidatesTags: [`Product`]
        }),
        delProduct: builder.mutation({
            query: (params: { id: string }) => ({
                url: `product/${params.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [`Product`]
        }),
    })
})

export const {
    useGetAllProductQuery,
    useGetProductQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useOpenProductSealMutation,
    useDelProductMutation,
} = productApi