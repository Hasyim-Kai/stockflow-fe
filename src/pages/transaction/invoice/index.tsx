import { cilFindInPage, cilMinus, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCol, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import { formatDate } from 'src/utils/helper/date'
import useTransactionInvoiceVm from './invoice-list-vm'
import { useGetAllTransactionInvoiceQuery } from 'src/api/domain/transaction/invoice'

export default function TransactionInvoicePage() {
    const vm = useTransactionInvoiceVm()
    const { isLoading, isError, data } = useGetAllTransactionInvoiceQuery()

    return <ContentCardLayout title='Invoice Transactions' isLoading={isLoading} isError={isError}>
        <CSmartTable
            columns={vm.columns}
            items={data}
            itemsPerPage={10}
            scopedColumns={{
                createdAt: (item: any) => <td className=''>{formatDate(item.createdAt)}</td>,
                actions: (item: any) => <td>
                    <CCol className="py-2 d-flex gap-3">
                        <Link to={`detail/${item.id}`}>
                            <CButton color="primary" variant="outline" shape="square" size="sm">
                                <CIcon icon={cilFindInPage} />
                            </CButton>
                        </Link>
                    </CCol>
                </td>,
            }}
            tableProps={{
                className: 'add-this-class',
                responsive: true,
                striped: true,
                hover: true,
            }}
            tableBodyProps={{
                className: 'align-middle'
            }}
            pagination
            columnFilter
            columnSorter
            footer
            itemsPerPageSelect
            activePage={1}
            cleaner
            clickableRows
            tableFilter
        />
    </ContentCardLayout>
}