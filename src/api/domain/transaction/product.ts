// @ts-ignore
import { api } from 'src/store/api.js';

const transactionProductApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllTransactionProduct: builder.query<any, void>({
            query: () => `transaction/product`,
            providesTags: ['TransactionProduct'],
        }),
        getTransactionProduct: builder.query<any, string>({
            query: (id: string) => `transaction/product/${id}`,
            providesTags: ['TransactionProduct'],
        }),
        createTransactionProduct: builder.mutation({
            query: (values: any) => ({
                url: 'transaction/product',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: [`TransactionProduct`, `Product`]
        }),
        editTransactionProduct: builder.mutation({
            query: (params: { id: string, values: any }) => ({
                url: `transaction/product/${params.id}`,
                method: 'PATCH',
                body: params.values,
            }),
            invalidatesTags: [`TransactionProduct`, `Product`]
        }),
        notifyAdminOutletWithNoTransaction: builder.mutation<void, any>({
            query: (values: { whatsappNumber: number }) => ({
                url: 'wa/experimental',
                method: 'POST',
                body: values
            }),
            invalidatesTags: [`TransactionProduct`,]
        }),
    })
})

export const {
    useGetAllTransactionProductQuery,
    useGetTransactionProductQuery,
    useCreateTransactionProductMutation,
    useEditTransactionProductMutation,
    useNotifyAdminOutletWithNoTransactionMutation,
} = transactionProductApi