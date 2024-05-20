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

    return {
        columns,


    }
}