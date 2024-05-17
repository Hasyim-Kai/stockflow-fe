import { CCol, CRow, CSmartTable } from '@coreui/react-pro'
import BackBtn from 'src/components/global/button/back-btn'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import { formatDate } from 'src/utils/helper/date'
import useDetailTransactionProductVm from './product-detail-vm'
import { formatToIdrCurrency } from 'src/utils/helper/currency'

export default function DetailTransactionProductPage() {
    const vm = useDetailTransactionProductVm()

    const header = <CCol xs={`auto`} className='ms-auto'><BackBtn /></CCol>

    return <ContentCardLayout title='Product Transactions Detail' topRightSection={header} isLoading={vm.isLoading} isError={vm.isError}>
        <CRow>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Is Invoiced</div>
                    <div className="fs-5 fw-semibold">{vm.data?.isInvoiced}</div>
                </div>
            </CCol>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Transaction Type</div>
                    <div className="fs-5 fw-semibold">{vm.data?.type}</div>
                </div>
            </CCol>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Created At</div>
                    <div className="fs-5 fw-semibold">{formatDate(vm.data?.createdAt)}</div>
                </div>
            </CCol>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Updated At</div>
                    <div className="fs-5 fw-semibold">{formatDate(vm.data?.updatedAt)}</div>
                </div>
            </CCol>
        </CRow>

        <CRow>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Input By</div>
                    <div className="fs-5 fw-semibold">{vm.data?.user.name}</div>
                </div>
            </CCol>
            <CCol sm={3}>
                <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Total Price</div>
                    <div className="fs-5 fw-semibold">{formatToIdrCurrency(vm.data?.totalPrice)}</div>
                </div>
            </CCol>
        </CRow>
        <hr className='mb-4' />

        <section>
            <h3 className=''>Products In Transaction</h3>
            <CSmartTable
                columns={vm.columns}
                items={vm.data?.transactionProducts}
                scopedColumns={{
                    name: (item: any) => <td className=''>{item.product.name}</td>,
                    productCode: (item: any) => <td className=''>{item.product.productCode}</td>,
                    price: (item: any) => <td className=''>{formatToIdrCurrency(item.product.price)}</td>,
                    sumPrice: (item: any) => <td className=''>{formatToIdrCurrency(item.sumPrice)}</td>,
                }}
                tableProps={{
                    className: 'add-this-class',
                    responsive: true,
                    striped: true,
                    hover: true,
                }}
            />
        </section>
    </ContentCardLayout>
}