// @ts-ignore
import { api } from 'src/store/api.js';

const productApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllProduct: builder.query<any, void>({
            query: () => `product`,
            providesTags: ['Product'],
        }),
        getTop5SoldProduct: builder.query<any, void>({
            query: () => `product/top-5`,
            providesTags: ['Product'],
        }),
        getAllProductOptionList: builder.query<any, void>({
            query: () => `product`,
            providesTags: ['Product'],
            transformResponse: (rawResult: any[]) => {
                return rawResult.filter((product) => product.sealedQuantity > 0)
            }
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
    useGetTop5SoldProductQuery,
    useGetAllProductOptionListQuery,
    useGetProductQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useDelProductMutation,
} = productApi