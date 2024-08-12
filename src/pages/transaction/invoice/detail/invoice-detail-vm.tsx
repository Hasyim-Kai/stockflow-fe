import { useParams } from "react-router-dom";
import { useGetTransactionInvoiceQuery } from "src/api/domain/transaction/invoice";

export default function useDetailTransactionInvoiceVm() {
    const columns = [
        {
            key: 'productId',
            label: `ID`
        },
        {
            key: 'name',
        },
        {
            key: 'productCode',
        },
        {
            key: 'price',
        },
        {
            key: 'quantity',
        },
        {
            key: 'sumPrice',
            label: `Sum Price`
        },
    ]
    const { id } = useParams();
    const { isLoading, isError, data, isSuccess } = useGetTransactionInvoiceQuery(id || `1`)

    return {
        columns, isLoading, isError, isSuccess, data,


    }
}