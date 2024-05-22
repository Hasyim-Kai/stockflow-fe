import React, { lazy } from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons/LoadingButtons'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const DatePicker = React.lazy(() => import('./views/forms/date-picker/DatePicker'))
const DateRangePicker = React.lazy(() => import('./views/forms/date-range-picker/DateRangePicker'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const MultiSelect = React.lazy(() => import('./views/forms/multi-select/MultiSelect'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const TimePicker = React.lazy(() => import('./views/forms/time-picker/TimePicker'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const SmartTable = React.lazy(() => import('./views/smart-table/SmartTable'))

// Plugins
const Calendar = React.lazy(() => import('./views/plugins/calendar/Calendar'))
const Charts = React.lazy(() => import('./views/plugins/charts/Charts'))
const GoogleMaps = React.lazy(() => import('./views/plugins/google-maps/GoogleMaps'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Invoice = React.lazy(() => import('./views/apps/invoicing/Invoice'))

// PAGES
// MASTER-DATA USER
const MasterDataUserPage = React.lazy(() => import('src/pages/master-data/user'))
const MasterDataAddUserPage = React.lazy(() => import('src/pages/master-data/user/add'))
const MasterDataEditUserPage = React.lazy(() => import('src/pages/master-data/user/edit'))
// MASTER-DATA OUTLET
const MasterDataOutletPage = React.lazy(() => import('src/pages/master-data/outlet'))
const MasterDataAddOutletPage = React.lazy(() => import('src/pages/master-data/outlet/add'))
const MasterDataEditOutletPage = React.lazy(() => import('src/pages/master-data/outlet/edit'))
// MASTER-DATA PRODUCT
const MasterDataProductPage = React.lazy(() => import('src/pages/master-data/product'))
const MasterDataAddProductPage = React.lazy(() => import('src/pages/master-data/product/add'))
const MasterDataEditProductPage = React.lazy(() => import('src/pages/master-data/product/edit'))


const routes = [
  // MASTER-DATA USER
  { path: '/master-data/user', name: 'User', element: MasterDataUserPage },
  { path: '/master-data/user/add', name: 'Add User', element: MasterDataAddUserPage },
  { path: '/master-data/user/edit/:id', name: 'Edit User', element: MasterDataEditUserPage },
  // MASTER-DATA PRODUCT
  { path: '/master-data/outlet', name: 'Outlet', element: MasterDataOutletPage },
  { path: '/master-data/outlet/add', name: 'Add Outlet', element: MasterDataAddOutletPage },
  { path: '/master-data/outlet/edit/:id', name: 'Edit Outlet', element: MasterDataEditOutletPage },
  // MASTER-DATA PRODUCT
  { path: '/master-data/product', name: 'Product', element: MasterDataProductPage },
  { path: '/master-data/product/add', name: 'Add Product', element: MasterDataAddProductPage },
  { path: '/master-data/product/edit/:id', name: 'Edit Product', element: MasterDataEditProductPage },
  // TRANSACTION PRODUCT
  { path: '/transaction/product', name: 'Transaction Product', element: lazy(() => import('src/pages/transaction/product')) },
  { path: '/transaction/product/in', name: 'Transaction In Product', element: lazy(() => import('src/pages/transaction/product/in')) },
  { path: '/transaction/product/out/:id', name: 'Transaction Out Product', element: lazy(() => import('src/pages/transaction/product/out')) },
]

export const employeeRoutes = [
  // MASTER-DATA PRODUCT
  { path: '/master-data/product', name: 'Product', element: MasterDataProductPage },
  { path: '/master-data/product/add', name: 'Add Product', element: MasterDataAddProductPage },
  { path: '/master-data/product/edit/:id', name: 'Edit Product', element: MasterDataEditProductPage },
  // TRANSACTION PRODUCT
  { path: '/transaction/product', name: 'Transaction Product', element: lazy(() => import('src/pages/transaction/product')) },
  { path: '/transaction/product/in', name: 'Transaction In Product', element: lazy(() => import('src/pages/transaction/product/in')) },
  { path: '/transaction/product/out', name: 'Transaction Out Product', element: lazy(() => import('src/pages/transaction/product/out')) },
  { path: '/transaction/product/detail/:id', name: 'Detail Transaction Product', element: lazy(() => import('src/pages/transaction/product/detail')) },
]

export const ownerRoutes = employeeRoutes.concat([
  // MASTER-DATA USER
  { path: '/master-data/user', name: 'User', element: MasterDataUserPage },
  { path: '/master-data/user/add', name: 'Add User', element: MasterDataAddUserPage },
  { path: '/master-data/user/edit/:id', name: 'Edit User', element: MasterDataEditUserPage },
  // TRANSACTION INVOICE
  { path: '/transaction/invoice', name: 'Transaction Invoice', element: lazy(() => import('src/pages/transaction/invoice')) },
  { path: '/transaction/invoice/detail/:id', name: 'Detail Transaction Invoice', element: lazy(() => import('src/pages/transaction/invoice/detail')) },
  // SECURITY-CCTV
  { path: '/security/cctv', name: 'CCTV', element: lazy(() => import('src/pages/security/cctv')) },
  { path: '/security/cctv/add', name: 'Add CCTV', element: lazy(() => import('src/pages/security/cctv/add')) },
  { path: '/security/cctv/edit/:id', name: 'Edit CCTV', element: lazy(() => import('src/pages/security/cctv/edit')) },
  { path: '/security/cctv/detail/:id', name: 'Detail CCTV', element: lazy(() => import('src/pages/security/cctv/detail')) },
])

export const adminRoutes = ownerRoutes.concat([
  // MASTER-DATA PRODUCT
  { path: '/master-data/outlet', name: 'Outlet', element: MasterDataOutletPage },
  { path: '/master-data/outlet/add', name: 'Add Outlet', element: MasterDataAddOutletPage },
  { path: '/master-data/outlet/edit/:id', name: 'Edit Outlet', element: MasterDataEditOutletPage },
])

export const coreUiFeatures = [
  { path: 'core-ui-features/master-data/user', name: 'User', element: MasterDataUserPage },
  { path: 'core-ui-features/master-data/user/add', name: 'Add User', element: MasterDataAddUserPage },
  { path: 'core-ui-features/master-data/user/edit/:id', name: 'Edit User', element: MasterDataEditUserPage },
  { path: 'core-ui-features/', exact: true, name: 'Home' },
  { path: 'core-ui-features/dashboard', name: 'Dashboard', element: Dashboard },
  { path: 'core-ui-features/theme', name: 'Theme', element: Colors, exact: true },
  { path: 'core-ui-features/theme/colors', name: 'Colors', element: Colors },
  { path: 'core-ui-features/theme/typography', name: 'Typography', element: Typography },
  { path: 'core-ui-features/base', name: 'Base', element: Cards, exact: true },
  { path: 'core-ui-features/base/accordion', name: 'Accordion', element: Accordion },
  { path: 'core-ui-features/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: 'core-ui-features/base/cards', name: 'Cards', element: Cards },
  { path: 'core-ui-features/base/carousels', name: 'Carousel', element: Carousels },
  { path: 'core-ui-features/base/collapses', name: 'Collapse', element: Collapses },
  { path: 'core-ui-features/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: 'core-ui-features/base/navs', name: 'Navs', element: Navs },
  { path: 'core-ui-features/base/paginations', name: 'Paginations', element: Paginations },
  { path: 'core-ui-features/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: 'core-ui-features/base/popovers', name: 'Popovers', element: Popovers },
  { path: 'core-ui-features/base/progress', name: 'Progress', element: Progress },
  { path: 'core-ui-features/base/spinners', name: 'Spinners', element: Spinners },
  { path: 'core-ui-features/base/tables', name: 'Tables', element: Tables },
  { path: 'core-ui-features/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: 'core-ui-features/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: 'core-ui-features/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: 'core-ui-features/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: 'core-ui-features/buttons/loading-buttons', name: 'Loading Buttons', element: LoadingButtons },
  { path: 'core-ui-features/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: 'core-ui-features/forms', name: 'Forms', element: FormControl, exact: true },
  { path: 'core-ui-features/forms/form-control', name: 'Form Control', element: FormControl },
  { path: 'core-ui-features/forms/select', name: 'Select', element: Select },
  { path: 'core-ui-features/forms/multi-select', name: 'Multi Select', element: MultiSelect },
  { path: 'core-ui-features/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: 'core-ui-features/forms/range', name: 'Range', element: Range },
  { path: 'core-ui-features/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: 'core-ui-features/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: 'core-ui-features/forms/date-picker', name: 'Date Picker', element: DatePicker },
  { path: 'core-ui-features/forms/date-range-picker', name: 'Date Range Picker', element: DateRangePicker },
  { path: 'core-ui-features/forms/time-picker', name: 'Time Picker', element: TimePicker },
  { path: 'core-ui-features/forms/layout', name: 'Layout', element: Layout },
  { path: 'core-ui-features/forms/validation', name: 'Validation', element: Validation },
  { path: 'core-ui-features/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: 'core-ui-features/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: 'core-ui-features/icons/flags', name: 'Flags', element: Flags },
  { path: 'core-ui-features/icons/brands', name: 'Brands', element: Brands },
  { path: 'core-ui-features/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: 'core-ui-features/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: 'core-ui-features/notifications/badges', name: 'Badges', element: Badges },
  { path: 'core-ui-features/notifications/modals', name: 'Modals', element: Modals },
  { path: 'core-ui-features/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: 'core-ui-features/plugins', name: 'Plugins', element: Calendar, exact: true },
  { path: 'core-ui-features/plugins/calendar', name: 'Calendar', element: Calendar },
  { path: 'core-ui-features/plugins/charts', name: 'Charts', element: Charts },
  { path: 'core-ui-features/plugins/google-maps', name: 'GoogleMaps', element: GoogleMaps },
  { path: 'core-ui-features/smart-table', name: 'Smart Table', element: SmartTable },
  { path: 'core-ui-features/widgets', name: 'Widgets', element: Widgets },
  { path: 'core-ui-features/apps', name: 'Apps', element: Invoice, exact: true },
  { path: 'core-ui-features/apps/invoicing', name: 'Invoice', element: Invoice, exact: true },
  { path: 'core-ui-features/apps/invoicing/invoice', name: 'Invoice', element: Invoice },
  { path: 'core-ui-features/apps/email', name: 'Email', exact: true },
  { path: 'core-ui-features/apps/email/inbox', name: 'Inbox', exact: true },
  { path: 'core-ui-features/apps/email/compose', name: 'Compose', exact: true },
  { path: 'core-ui-features/apps/email/message', name: 'Message', exact: true },
]

export default routes
