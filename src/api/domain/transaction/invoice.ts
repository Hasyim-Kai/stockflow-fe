// @ts-ignore
import { api } from 'src/store/api.js';

const transactionInvoiceApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllTransactionInvoice: builder.query<any, void>({
            query: () => `transaction/Invoice`,
            providesTags: ['TransactionInvoice'],
        }),
        getTransactionInvoice: builder.query<any, string>({
            query: (id: string) => `transaction/Invoice/${id}`,
            providesTags: ['TransactionInvoice'],
        }),
        generateTransactionInvoice: builder.mutation<void, void>({
            query: () => ({
                url: 'transaction/Invoice/experimental',
                method: 'POST',
            }),
            invalidatesTags: [`TransactionInvoice`,]
        }),
    })
})

export const {
    useGetAllTransactionInvoiceQuery,
    useGetTransactionInvoiceQuery,
    useGenerateTransactionInvoiceMutation,
} = transactionInvoiceApi