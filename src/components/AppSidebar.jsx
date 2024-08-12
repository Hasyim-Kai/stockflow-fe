import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import SentiumLogo from 'src/assets/brand/sentium_logo.png'
import useStoreHelper from 'src/store/helper'
import { UserRoleEnum } from 'src/utils/constant/user-role.ts'

// sidebar nav config
import { adminNav } from 'src/sidebar-nav/admin.tsx'
import { ownerNav } from 'src/sidebar-nav/owner.tsx'
import { employeeNav } from 'src/sidebar-nav/employee.tsx'
import { coreuiFeaturesNav } from 'src/sidebar-nav/core-ui-features.tsx'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const { userRole } = useStoreHelper()
  const sidebarShow = useSelector((state) => state.global.sidebarShow)

  const authorizationNav = () => {
    // return <AppSidebarNav items={coreuiFeaturesNav} />
    if (userRole === UserRoleEnum.ADMIN) { return <AppSidebarNav items={adminNav} /> }
    else if (userRole === UserRoleEnum.OUTLET_OWNER) { return <AppSidebarNav items={ownerNav} /> }
    else if (userRole === UserRoleEnum.EMPLOYEE) { return <AppSidebarNav items={employeeNav} /> }
    else { return <AppSidebarNav items={adminNav} /> }
  }

  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {/* <img alt="logo" src={SentiumLogo} height={40} /> */}
        <h2>Logo</h2>
        {/* <p>{userRole}-{UserRoleEnum.ADMIN}</p> */}
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {authorizationNav()}
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
