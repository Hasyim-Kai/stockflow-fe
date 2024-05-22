import { useParams } from "react-router-dom";
import { useGetTransactionProductQuery } from "src/api/domain/transaction/product";

export default function useDetailSecurityCctvVm() {
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
    const { isLoading, isError, data } = useGetTransactionProductQuery(id || `1`)


    // const onOpenSeal = (id: string) => {
    //     ISwalConfirm(() => {
    //         openProductSeal({ id: id || `` }).unwrap().then(() => ISwalSuccess())
    //             .catch(() => ISwalFail())
    //     })
    // }

    // const onDel = (id: string) => {
    //     ISwalConfirm(() => {
    //         delProduct({ id: id || `` }).unwrap().then(() => ISwalSuccess())
    //             .catch(() => ISwalFail())
    //     })
    // }

    return {
        id,
        columns,
        isLoading, isError, data,


    }
}