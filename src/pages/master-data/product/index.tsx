import { cilCheck, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCardTitle, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import ContentFetchingLayout from 'src/layout/ContentFetchingLayout'
import { formatToIdrCurrency } from 'src/utils/helper/currency'
import useProductVm from './product-list-vm'

export default function MasterDataProductPage() {
    const vm = useProductVm()

    const header = <CRow className='p-2'>
        <CCol>
            <CCardTitle className="fs-3 fw-semibold">Product List</CCardTitle>
        </CCol>
        <CCol xs="auto" className="ms-auto d-flex gap-3">
            <div className="d-flex gap-1">
                <CButton color="primary" variant={`outline`} onClick={vm.handleToggleSold}>{vm.isSoldActive && <CIcon icon={cilCheck} />} Sold</CButton>
                <CButton color="primary" variant={`outline`} onClick={vm.handleToggleNotSold}>{vm.isNotSoldActive && <CIcon icon={cilCheck} />} Not Sold</CButton>
            </div>
            <Link to={`add`}>
                <CButton color="primary">
                    + Add New Data
                </CButton>
            </Link>
        </CCol>
    </CRow>

    return <ContentFetchingLayout header={header} isLoading={vm.isLoading} isError={vm.isError}>
        <CSmartTable
            columns={vm.columns}
            items={vm.filterSoldOrNotSold()}
            itemsPerPage={10}
            scopedColumns={{
                price: (item: any) => <td className=''>{formatToIdrCurrency(item.price)}</td>,
                actions: (item: any) => {
                    return <td>
                        <CCol className="py-2 d-flex gap-3">
                            {/* <Link to={`detail/${item.id}`}>
                                    <CButton color="primary" variant="outline" shape="square" size="sm">
                                        <CIcon icon={cilFindInPage} />
                                    </CButton>
                                </Link> */}
                            <Link to={`edit/${item.id}`}>
                                <CButton color="warning" variant="outline" shape="square" size="sm">
                                    <CIcon icon={cilPencil} />
                                </CButton>
                            </Link>
                            <CButton color="danger" variant="outline" shape="square" size="sm"
                                onClick={() => vm.onDel(item.id)}>
                                <CIcon icon={cilTrash} />
                            </CButton>
                        </CCol>
                    </td>

                },
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
    </ContentFetchingLayout>
}