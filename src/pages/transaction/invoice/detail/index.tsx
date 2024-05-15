import BackBtn from 'src/components/global/button/back-btn'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import useDetailTransactionInvoiceVm from './invoice-detail-vm'
import { CCol } from '@coreui/react-pro'
import { formatDate } from 'src/utils/helper/date'

export default function DetailTransactionInvoicePage() {
    const vm = useDetailTransactionInvoiceVm()

    const header = <CCol xs={`auto`} className='ms-auto'><BackBtn /></CCol>

    return <ContentCardLayout title='Invoice Transactions Detail' topRightSection={header} isLoading={vm.isLoading} isError={vm.isError}>
        {/* <h3>isInvoiced:{vm.data?.isInvoiced}</h3>
        <h3>createdAt:{formatDate(vm.data?.createdAt)}</h3>
        <h3>updatedAt:{formatDate(vm.data?.updatedAt)}</h3>
        <h3>type:{vm.data?.type}</h3>
        <h3>totalPrice:{vm.data?.totalPrice}</h3>

        <h3>product: {vm.data?.user.name}</h3>
        <h3>transactionInvoices:{vm.data?.transactionInvoices.map((product: any) =>
            <div key={product.productId}>product: {product.quantity},{product.sumPrice},{product.product.name},{product.product.price},{product.product.productCode},</div>)}</h3> */}
    </ContentCardLayout>
}