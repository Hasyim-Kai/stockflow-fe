import { cilBell, cilCalculator, cilCalendar, cilChartPie, cilCursor, cilDrop, cilEnvelopeOpen, cilGrid, cilLayers, cilMap, cilNotes, cilPencil, cilPuzzle, cilSpeedometer, cilSpreadsheet, cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export const coreuiFeaturesNav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: 'core-ui-features/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        badge: {
            color: 'info-gradient',
            text: 'NEW',
        },
    },
    {
        component: CNavTitle,
        name: 'Theme',
    },
    {
        component: CNavItem,
        name: 'Colors',
        to: 'core-ui-features/theme/colors',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Typography',
        to: 'core-ui-features/theme/typography',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Components',
    },
    {
        component: CNavGroup,
        name: 'Base',
        to: 'core-ui-features/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Accordion',
                to: 'core-ui-features/base/accordion',
            },
            {
                component: CNavItem,
                name: 'Breadcrumb',
                to: 'core-ui-features/base/breadcrumbs',
            },
            {
                component: CNavItem,
                name: 'Cards',
                to: 'core-ui-features/base/cards',
            },
            {
                component: CNavItem,
                name: 'Carousel',
                to: 'core-ui-features/base/carousels',
            },
            {
                component: CNavItem,
                name: 'Collapse',
                to: 'core-ui-features/base/collapses',
            },
            {
                component: CNavItem,
                name: 'List group',
                to: 'core-ui-features/base/list-groups',
            },
            {
                component: CNavItem,
                name: 'Navs & Tabs',
                to: 'core-ui-features/base/navs',
            },
            {
                component: CNavItem,
                name: 'Pagination',
                to: 'core-ui-features/base/paginations',
            },
            {
                component: CNavItem,
                name: 'Placeholders',
                to: 'core-ui-features/base/placeholders',
            },
            {
                component: CNavItem,
                name: 'Popovers',
                to: 'core-ui-features/base/popovers',
            },
            {
                component: CNavItem,
                name: 'Progress',
                to: 'core-ui-features/base/progress',
            },
            {
                component: CNavItem,
                name: 'Spinners',
                to: 'core-ui-features/base/spinners',
            },
            {
                component: CNavItem,
                name: 'Tables',
                to: 'core-ui-features/base/tables',
            },
            {
                component: CNavItem,
                name: 'Tooltips',
                to: 'core-ui-features/base/tooltips',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Buttons',
        to: 'core-ui-features/buttons',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Buttons',
                to: 'core-ui-features/buttons/buttons',
            },
            {
                component: CNavItem,
                name: 'Buttons groups',
                to: 'core-ui-features/buttons/button-groups',
            },
            {
                component: CNavItem,
                name: 'Dropdowns',
                to: 'core-ui-features/buttons/dropdowns',
            },
            {
                component: CNavItem,
                name: 'Loading Buttons',
                to: 'core-ui-features/buttons/loading-buttons',
                badge: {
                    color: 'danger-gradient',
                    text: 'PRO',
                },
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Forms',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Form Control',
                to: 'core-ui-features/forms/form-control',
            },
            {
                component: CNavItem,
                name: 'Select',
                to: 'core-ui-features/forms/select',
            },
            {
                component: CNavItem,
                name: 'Multi Select',
                to: 'core-ui-features/forms/multi-select',
                badge: {
                    color: 'danger-gradient',
                    text: 'PRO',
                },
            },
            {
                component: CNavItem,
                name: 'Checks & Radios',
                to: 'core-ui-features/forms/checks-radios',
            },
            {
                component: CNavItem,
                name: 'Range',
                to: 'core-ui-features/forms/range',
            },
            {
                component: CNavItem,
                name: 'Input Group',
                to: 'core-ui-features/forms/input-group',
            },
            {
                component: CNavItem,
                name: 'Floating Labels',
                to: 'core-ui-features/forms/floating-labels',
            },
            {
                component: CNavItem,
                name: 'Date Picker',
                to: 'core-ui-features/forms/date-picker',
                badge: {
                    color: 'danger-gradient',
                    text: 'PRO',
                },
            },
            {
                component: CNavItem,
                name: 'Date Range Picker',
                to: 'core-ui-features/forms/date-range-picker',
                badge: {
                    color: 'danger-gradient',
                    text: 'PRO',
                },
            },
            {
                component: CNavItem,
                name: 'Time Picker',
                to: 'core-ui-features/forms/time-picker',
                badge: {
                    color: 'danger-gradient',
                    text: 'PRO',
                },
            },
            {
                component: CNavItem,
                name: 'Layout',
                to: 'core-ui-features/forms/layout',
            },
            {
                component: CNavItem,
                name: 'Validation',
                to: 'core-ui-features/forms/validation',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Icons',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'CoreUI Free',
                to: 'core-ui-features/icons/coreui-icons',
                badge: {
                    color: 'success-gradient',
                    text: 'FREE',
                },
            },
            {
                component: CNavItem,
                name: 'CoreUI Flags',
                to: 'core-ui-features/icons/flags',
            },
            {
                component: CNavItem,
                name: 'CoreUI Brands',
                to: 'core-ui-features/icons/brands',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Notifications',
        icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Alerts',
                to: 'core-ui-features/notifications/alerts',
            },
            {
                component: CNavItem,
                name: 'Badges',
                to: 'core-ui-features/notifications/badges',
            },
            {
                component: CNavItem,
                name: 'Modal',
                to: 'core-ui-features/notifications/modals',
            },
            {
                component: CNavItem,
                name: 'Toasts',
                to: 'core-ui-features/notifications/toasts',
            },
        ],
    },
    {
        component: CNavItem,
        name: 'Widgets',
        to: 'core-ui-features/widgets',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
        badge: {
            color: 'info-gradient',
            text: 'NEW',
        },
    },
    {
        component: CNavItem,
        name: 'Smart Table',
        icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
        badge: {
            color: 'danger-gradient',
            text: 'PRO',
        },
        to: 'core-ui-features/smart-table',
    },
    {
        component: CNavTitle,
        name: 'Plugins',
    },
    {
        component: CNavItem,
        name: 'Calendar',
        icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
        badge: {
            color: 'danger-gradient',
            text: 'PRO',
        },
        to: 'core-ui-features/plugins/calendar',
    },
    {
        component: CNavItem,
        name: 'Charts',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
        to: 'core-ui-features/plugins/charts',
    },
    {
        component: CNavItem,
        name: 'Google Maps',
        icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
        badge: {
            color: 'danger-gradient',
            text: 'PRO',
        },
        to: 'core-ui-features/plugins/google-maps',
    },
    {
        component: CNavTitle,
        name: 'Extras',
    },
    {
        component: CNavGroup,
        name: 'Pages',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Login',
                to: 'core-ui-features/login',
            },
            {
                component: CNavItem,
                name: 'Register',
                to: 'core-ui-features/register',
            },
            {
                component: CNavItem,
                name: 'Error 404',
                to: 'core-ui-features/404',
            },
            {
                component: CNavItem,
                name: 'Error 500',
                to: 'core-ui-features/500',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Apps',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
        items: [
            {
                component: CNavGroup,
                name: 'Invoicing',
                icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
                to: 'core-ui-features/apps/invoicing',
                items: [
                    {
                        component: CNavItem,
                        name: 'Invoice',
                        badge: {
                            color: 'danger-gradient',
                            text: 'PRO',
                        },
                        to: 'core-ui-features/apps/invoicing/invoice',
                    },
                ],
            },
            {
                component: CNavGroup,
                name: 'Email',
                to: 'core-ui-features/apps/email',
                icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
                items: [
                    {
                        component: CNavItem,
                        name: 'Inbox',
                        badge: {
                            color: 'danger-gradient',
                            text: 'PRO',
                        },
                        to: 'core-ui-features/apps/email/inbox',
                    },
                    {
                        component: CNavItem,
                        name: 'Message',
                        badge: {
                            color: 'danger-gradient',
                            text: 'PRO',
                        },
                        to: 'core-ui-features/apps/email/message',
                    },
                    {
                        component: CNavItem,
                        name: 'Compose',
                        badge: {
                            color: 'danger-gradient',
                            text: 'PRO',
                        },
                        to: 'core-ui-features/apps/email/compose',
                    },
                ],
            },
        ],
    },
]