import { useState } from "react"
import { useNotifyAdminOutletWithNoTransactionMutation } from "src/api/domain/transaction/product"
import { handleErrMsg } from "src/utils/helper/error-handler"
import { ISwalConfirm, ISwalFail, ISwalSuccess } from "src/utils/helper/swal"

export default function useTransactionProductVm() {
    const columns = [
        {
            key: 'type',
        },
        {
            key: 'totalPrice',
            label: `Total Price`
        },
        {
            key: 'inputBy',
            label: `Input By`
        },
        {
            key: 'createdAt',
            label: `Transaction Date`
        },
        {
            key: 'isInvoiced',
            label: `Is Invoiced`
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]

    const [whatsappNumber, setWhatsappNumber] = useState<number>()
    const handleChangeWhatsappNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWhatsappNumber(Number(event.target.value))
    }

    const [notifyAdminOutletWithNoTransaction, { isLoading: isSubmitLoading }] = useNotifyAdminOutletWithNoTransactionMutation()
    const onNotifyAdminOutletWithNoTransaction = () => {
        ISwalConfirm(() => {
            notifyAdminOutletWithNoTransaction(String(whatsappNumber)).unwrap().then(() => { ISwalSuccess() })
                .catch((err) => ISwalFail(handleErrMsg(err)))
        })
    }

    // const onDel = (id: string) => {
    //     ISwalConfirm(() => {
    //         delProduct({ id: id || `` }).unwrap().then(() => ISwalSuccess())
    //             .catch(() => ISwalFail())
    //     })
    // }

    return {
        columns,
        onNotifyAdminOutletWithNoTransaction,
        handleChangeWhatsappNumber,

    }
}