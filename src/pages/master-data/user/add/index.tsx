import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormLabel, CFormSelect, CRow } from '@coreui/react-pro'
// import CIcon from '@coreui/icons-react'
import { Formik } from 'formik'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import Loading from 'src/components/global/loading/loading'
import { userRoleList } from 'src/utils/constant/user-role'
import useAddUserVm from './add-user-vm'
import { convertSelectOptions } from 'src/utils/helper/selectDataConverter'

export default function MasterDataAddUserPage() {
    const vm = useAddUserVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Add User</CCardTitle>
                </CCol>
                <CCol xs="auto" className="ms-auto">
                    <BackBtn />
                </CCol>
            </CRow>
        </CCardHeader>

        <CCardBody>
            <Formik onSubmit={vm.handleFormSubmit}
                initialValues={vm.initialValues}
                validationSchema={vm.loginSchema}>
                {({ values, errors, handleChange, handleSubmit }) => (
                    <CForm onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <div className="">
                            <InputField label='Name' type="name" name='name' placeholder="John Wick"
                                error={errors.name} onChange={handleChange} value={values.name} />
                        </div>
                        <div className="">
                            <InputField label='Email' type="email" name='email' placeholder="name@example.com"
                                error={errors.email} onChange={handleChange} value={values.email} />
                        </div>
                        <div className="">
                            <InputField label='password' type="password" name='password'
                                error={errors.password} onChange={handleChange} value={values.password} />
                        </div>
                        {/* THIS ONLY FOR ADMIN ROLE */}
                        {vm.userRole === `ADMIN` && <>
                            <div>
                                <CFormLabel >Role</CFormLabel>
                                <CFormSelect name='role' options={userRoleList}
                                    onChange={handleChange} value={values.role} />
                            </div>

                            <div>
                                <CFormLabel >Outlet</CFormLabel>
                                <CFormSelect name='outletId' options={convertSelectOptions(vm.dataOutlet)}
                                    onChange={handleChange} value={values.outletId} />
                            </div>
                        </>}

                        {vm.isLoading ? <Loading />
                            : <CButton type="submit" color="primary" className="px-4 mt-3">
                                Submit
                            </CButton>}
                    </CForm>
                )}
            </Formik>
        </CCardBody>
    </CCard>
}