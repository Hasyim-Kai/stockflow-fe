import { cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCardTitle, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import { useGetAllOutletQuery } from 'src/api/domain/master-data/outlet'
import ContentFetchingLayout from 'src/layout/ContentFetchingLayout'
import useOutletVm from './outlet-list-vm'

export default function MasterDataOutletPage() {
    const vm = useOutletVm()
    const { isLoading, isError, data } = useGetAllOutletQuery()

    const header = <CRow className='p-2'>
        <CCol>
            <CCardTitle className="fs-3 fw-semibold">Outlet List</CCardTitle>
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