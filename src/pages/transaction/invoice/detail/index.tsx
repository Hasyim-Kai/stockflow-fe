import { cilCloudDownload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import { PDFDownloadLink } from '@react-pdf/renderer'
import BackBtn from 'src/components/global/button/back-btn'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import InvoicePdf from 'src/services/pdf/invoice'
import { formatToIdrCurrency } from 'src/utils/helper/currency'
import { formatDate } from 'src/utils/helper/date'
import useDetailTransactionInvoiceVm from './invoice-detail-vm'
import InvoiceExcel from 'src/services/excel/invoice'

export default function DetailTransactionInvoicePage() {
    const vm = useDetailTransactionInvoiceVm()

    const header = <CCol xs={`auto`} className='ms-auto d-flex gap-3'>
        <BackBtn />
    </CCol>

    return <ContentCardLayout title='Invoice Transactions Detail' topRightSection={header} isLoading={vm.isLoading} isError={vm.isError}>
        <CRow className='my-3'>
            <CCol sm={`auto`}>
                <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Grand Total Price</div>
                    <div className="fs-5 fw-semibold">{formatToIdrCurrency(vm.data?.invoiceGrandTotalPrice)}</div>
                </div>
            </CCol>
            <CCol sm={`auto`}>
                <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">Created At</div>
                    <div className="fs-5 fw-semibold">{formatDate(vm.data?.createdAt)}</div>
                </div>
            </CCol>
            {vm.isSuccess && <CCol xs={`auto`} className='ms-auto d-flex gap-3'>
                <PDFDownloadLink document={<InvoicePdf invoiceData={vm.data} />}
                    fileName={`Transaction Invoice - ${formatDate(vm.data?.createdAt)} - ID ${vm.data?.id}.pdf`}>
                    <CButton color="primary">
                        <CIcon className='me-2' icon={cilCloudDownload} />
                        Download PDF
                    </CButton>
                </PDFDownloadLink>

                <InvoiceExcel invoiceData={vm.data} />
            </CCol>}
        </CRow>


        {vm.data?.transaction.map((transactionItem: any) => <ContentCardLayout title={`Transactions Detail - ${transactionItem?.id}`} key={transactionItem?.id} smallTitle>
            <CRow>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Is Invoiced</div>
                        <div className="fs-5 fw-semibold">{transactionItem?.isInvoiced}</div>
                    </div>
                </CCol>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Transaction Type</div>
                        <div className="fs-5 fw-semibold">{transactionItem?.type}</div>
                    </div>
                </CCol>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Created At</div>
                        <div className="fs-5 fw-semibold">{formatDate(transactionItem?.createdAt)}</div>
                    </div>
                </CCol>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Updated At</div>
                        <div className="fs-5 fw-semibold">{formatDate(transactionItem?.updatedAt)}</div>
                    </div>
                </CCol>
            </CRow>

            <CRow>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Input By</div>
                        <div className="fs-5 fw-semibold">{transactionItem?.user.name}</div>
                    </div>
                </CCol>
                <CCol sm={3}>
                    <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Price</div>
                        <div className="fs-5 fw-semibold">{formatToIdrCurrency(transactionItem?.totalPrice)}</div>
                    </div>
                </CCol>
            </CRow>
            <hr className='mb-4' />

            <section>
                <h3 className=''>Products In Transaction</h3>
                <CSmartTable
                    columns={vm.columns}
                    items={transactionItem?.transactionProducts}
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
        </ContentCardLayout>)}
    </ContentCardLayout>
}