import { useParams } from "react-router-dom";

export default function useDetailTransactionInvoiceVm() {
    const { id } = useParams();
    // const { isLoading, isError, data } = useGetTransactionInvoiceQuery(id || `1`)


    // const onOpenSeal = (id: string) => {
    //     ISwalConfirm(() => {
    //         openInvoiceSeal({ id: id || `` }).unwrap().then(() => ISwalSuccess())
    //             .catch(() => ISwalFail())
    //     })
    // }

    // const onDel = (id: string) => {
    //     ISwalConfirm(() => {
    //         delInvoice({ id: id || `` }).unwrap().then(() => ISwalSuccess())
    //             .catch(() => ISwalFail())
    //     })
    // }

    return {
        // isLoading, isError, data,


    }
}