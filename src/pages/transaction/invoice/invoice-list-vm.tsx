import { useGenerateTransactionInvoiceMutation } from "src/api/domain/transaction/invoice"
import { handleErrMsg } from "src/utils/helper/error-handler"
import { ISwalConfirm, ISwalSuccess, ISwalFail } from "src/utils/helper/swal"

export default function useTransactionInvoiceVm() {
    const columns = [
        {
            key: 'id',
            _style: { width: '10%' }
        },
        {
            key: 'createdAt',
            label: `Invoice Date`
        },
        {
            key: 'invoiceGrandTotalPrice',
            label: `Grand Total Price`
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]

    const [generateTransactionInvoice, { isLoading: isSubmitLoading }] = useGenerateTransactionInvoiceMutation()
    const onGenerateTransactionInvoice = () => {
        ISwalConfirm(() => {
            generateTransactionInvoice().unwrap().then(() => { ISwalSuccess() })
                .catch((err) => ISwalFail(handleErrMsg(err)))
        })
    }

    return {
        columns,
        onGenerateTransactionInvoice,

    }
}