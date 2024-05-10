import { cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCardTitle, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import { useGetAllProductQuery } from 'src/api/domain/product'
import ContentFetchingLayout from 'src/layout/ContentFetchingLayout'
import useProductVm from './product-list-vm'

export default function MasterDataProductPage() {
    const vm = useProductVm()
    const { isLoading, isError, data } = useGetAllProductQuery()

    const header = <CRow className='p-2'>
        <CCol>
            <CCardTitle className="fs-3 fw-semibold">Product List</CCardTitle>
        </CCol>
        <CCol xs="auto" className="ms-auto">
            <Link to={`add`}>
                <CButton color="primary">
                    + Add New Data
                </CButton>
            </Link>
        </CCol>
    </CRow>

    return <ContentFetchingLayout header={header} isLoading={isLoading} isError={isError}>
        <CSmartTable
            columns={vm.columns}
            items={data}
            itemsPerPage={10}
            scopedColumns={{
                isSealOpened: (item: any) => {
                    return <td className='text-center'>
                        <CBadge className='fs-6' color={item.isSealOpened ? 'success' : 'warning'}>{item.isSealOpened ? 'Open' : 'Sealed'}</CBadge>
                    </td>
                },
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