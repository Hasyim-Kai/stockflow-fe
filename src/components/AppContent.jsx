import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react-pro'
import { AppBreadcrumb } from 'src/components/index'
import useStoreHelper from 'src/store/helper'
import { UserRoleEnum } from 'src/utils/constant/user-role.ts'

// routes config
import routes, { employeeRoutes, ownerRoutes, adminRoutes, coreUiFeatures } from 'src/routes'

const AppContent = () => {
  const { userRole } = useStoreHelper()

  const authorizationNav = () => {
    // return coreUiFeatures
    if (userRole === UserRoleEnum.ADMIN) { return adminRoutes }
    else if (userRole === UserRoleEnum.OUTLET_OWNER) { return ownerRoutes }
    else if (userRole === UserRoleEnum.EMPLOYEE) { return employeeRoutes }
    else { return adminRoutes }
  }

  return (
    <CContainer lg>
      <div className="mb-4"><AppBreadcrumb /></div>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {authorizationNav().map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
