export default function useTransactionInvoiceVm() {

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
        columns,


    }
}