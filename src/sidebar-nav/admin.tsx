import { cilCamera, cilDollar, cilDrink, cilInstitution, cilPuzzle, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export const adminNav = [
    {
        component: CNavTitle,
        name: 'SockFlow App',
    },
    {
        component: CNavGroup,
        name: 'Master Data',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'User',
                to: '/master-data/user',
                icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Outlet',
                to: '/master-data/outlet',
                icon: <CIcon icon={cilInstitution} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Product',
                to: '/master-data/product',
                icon: <CIcon icon={cilDrink} customClassName="nav-icon" />,
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Transactions',
        icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Product',
                to: '/transaction/product',
                icon: <CIcon icon={cilDrink} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Invoice',
                to: '/transaction/invoice',
                icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
            },
        ],
    },
    {
        component: CNavTitle,
        name: 'Security',
    },
    {
        component: CNavItem,
        name: 'CCTV',
        to: 'security/cctv',
        icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
    },
]