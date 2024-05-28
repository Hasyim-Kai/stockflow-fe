import { cilFindInPage, cilMinus, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCol, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import { useGetAllTransactionProductQuery } from 'src/api/domain/transaction/product'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import { formatDate } from 'src/utils/helper/date'
import useTransactionProductVm from './product-list-vm'
import { formatToIdrCurrency } from 'src/utils/helper/currency'
import ExperimentalBanner from 'src/components/global/banner/experimental-banner'
import InputField from 'src/components/global/input/input-field'

export default function TransactionProductPage() {
    const vm = useTransactionProductVm()
    const { isLoading, isError, data } = useGetAllTransactionProductQuery()

    const header = <>
        <CCol xs='auto' className='ms-auto text-center d-flex gap-3'>
            <Link to={`out`}>
                <CButton color="primary">
                    <CIcon icon={cilMinus} /> Out Stock
                </CButton>
            </Link>

        </CCol>
    </>

    return <ContentCardLayout title='Product Transactions' topRightSection={header} isLoading={isLoading} isError={isError}>
        <ExperimentalBanner>
            <InputField label='Admin Number' name='whatsappNumber' placeholder='0896xxxxxxx' type='number' onChange={vm.handleChangeWhatsappNumber} />
            <CButton className='mt-3' color="primary" variant="outline" onClick={vm.onNotifyAdminOutletWithNoTransaction}>
                Notify Admin Outlet With No Transactions
            </CButton>
            <hr />
            <h3>Navigate to Stock In Page</h3>
            <Link to={`in`}>
                <CButton color="primary">
                    <CIcon icon={cilPlus} /> In Stock
                </CButton>
            </Link>
        </ExperimentalBanner>

        <CSmartTable
            columns={vm.columns}
            items={data}
            itemsPerPage={10}
            scopedColumns={{
                type: (item: any) => <td className='text-center'>
                    <CBadge className='fs-6' color={item.type === `IN` ? 'success' : item.type === `ADJUSTMENT` ? 'info' : 'warning'}>{item.type}</CBadge></td>,
                inputBy: (item: any) => <td className=''>{item.user.name}</td>,
                totalPrice: (item: any) => <td className=''>{formatToIdrCurrency(item.totalPrice)}</td>,
                createdAt: (item: any) => <td className=''>{formatDate(item.createdAt)}</td>,
                updatedAt: (item: any) => <td className=''>{formatDate(item.updatedAt)}</td>,
                isInvoiced: (item: any) => <td className='text-center'>
                    <CBadge className='fs-6' color={item.isInvoiced === `YES` ? 'success' : 'warning'}>{item.isInvoiced}</CBadge></td>,
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