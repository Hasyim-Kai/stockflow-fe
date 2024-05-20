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
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]

    return {
        columns,


    }
}