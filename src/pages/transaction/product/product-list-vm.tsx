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
            key: 'updatedAt',
            label: `Update Date`
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
        columns,


    }
}