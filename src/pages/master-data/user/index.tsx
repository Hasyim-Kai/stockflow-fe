import { cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import { Link } from 'react-router-dom'
import useUserVm from './user-list-vm'

export default function MasterDataUserPage() {
    const vm = useUserVm()
    const columns = [
        {
            key: 'name',
            // _style: { width: '20%' },
        },
        'registered',
        {
            key: 'role',
        },
        {
            key: 'status',
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]
    const usersData = [
        {
            id: 1,
            name: 'Samppa Nori',
            avatar: '1.jpg',
            registered: '2022/01/01',
            role: 'Member',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Estavan Lykos',
            avatar: '2.jpg',
            registered: '2022/02/07',
            role: 'Staff',
            status: 'Banned',
        },
        {
            id: 3,
            name: 'Chetan Mohamed',
            avatar: '3.jpg',
            registered: '2022/02/07',
            role: 'Admin',
            status: 'Inactive',
            _selected: true,
        },
        {
            id: 4,
            name: 'Derick Maximinus',
            avatar: '4.jpg',
            registered: '2022/03/19',
            role: 'Member',
            status: 'Pending',
        },
        {
            id: 5,
            name: 'Friderik Dávid',
            avatar: '5.jpg',
            registered: '2022/01/21',
            role: 'Staff',
            status: 'Active'
        },
        {
            id: 6,
            name: 'Yiorgos Avraamu',
            avatar: '6.jpg',
            registered: '2022/01/01',
            role: 'Member',
            status: 'Active'
        },
        {
            id: 7,
            name: 'Avram Tarasios',
            avatar: '7.jpg',
            registered: '2022/02/07',
            role: 'Staff',
            status: 'Banned',
            _selected: true,
        },
        {
            id: 8,
            name: 'Quintin Ed',
            avatar: '8.jpg',
            registered: '2022/02/07',
            role: 'Admin',
            status: 'Inactive'
        },
        {
            id: 9,
            name: 'Enéas Kwadwo',
            avatar: '9.jpg',
            registered: '2022/03/19',
            role: 'Member',
            status: 'Pending'
        },
        {
            id: 10,
            name: 'Agapetus Tadeáš',
            avatar: '10.jpg',
            registered: '2022/01/21',
            role: 'Staff',
            status: 'Active'
        },
        {
            id: 11,
            name: 'Carwyn Fachtna',
            avatar: '11.jpg',
            registered: '2022/01/01',
            role: 'Member',
            status: 'Active'
        },
        {
            id: 12,
            name: 'Nehemiah Tatius',
            avatar: '12.jpg',
            registered: '2022/02/07',
            role: 'Staff',
            status: 'Banned',
            _selected: true,
        },
        {
            id: 13,
            name: 'Ebbe Gemariah',
            avatar: '13.jpg',
            registered: '2022/02/07',
            role: 'Admin',
            status: 'Inactive'
        },
        {
            id: 14,
            name: 'Eustorgios Amulius',
            avatar: '14.jpg',
            registered: '2022/03/19',
            role: 'Member',
            status: 'Pending',
        },
        {
            id: 15,
            name: 'Leopold Gáspár',
            avatar: '15.jpg',
            registered: '2022/01/21',
            role: 'Staff',
            status: 'Active'
        },
    ]

    const getBadge = (status: string) => {
        switch (status) {
            case 'Active':
                return 'success'
            case 'Inactive':
                return 'secondary'
            case 'Pending':
                return 'warning'
            case 'Banned':
                return 'danger'
            default:
                return 'primary'
        }
    }

    return <>
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardHeader>
                    <CRow className='p-2'>
                        <CCol>
                            <CCardTitle className="fs-3 fw-semibold">User List</CCardTitle>
                        </CCol>
                        <CCol xs="auto" className="ms-auto">
                            <Link to={`add`}>
                                <CButton color="secondary">
                                    + Add New Data
                                </CButton>
                            </Link>
                        </CCol>
                    </CRow>
                </CCardHeader>

                <CCardBody>
                    <CSmartTable
                        activePage={1}
                        cleaner
                        clickableRows
                        columns={columns}
                        items={usersData}
                        columnFilter
                        columnSorter
                        footer
                        itemsPerPageSelect
                        itemsPerPage={10}
                        pagination
                        onFilteredItemsChange={(items) => {
                            console.log(items)
                        }}
                        onSelectedItemsChange={(items) => {
                            console.log(items)
                        }}
                        scopedColumns={{
                            status: (item: any) => (
                                <td>
                                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                                </td>
                            ),
                            actions: (item: any) => {
                                return <CCol className="py-2 d-flex gap-3">
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

                            },
                        }}
                        tableFilter
                        tableProps={{
                            className: 'add-this-class',
                            responsive: true,
                            striped: true,
                            hover: true,
                        }}
                        tableBodyProps={{
                            className: 'align-middle'
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    </>
}