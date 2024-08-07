import { cilDollar, cilDrink, cilPuzzle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export const employeeNav = [
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
        ],
    },
]