import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormLabel, CFormSelect, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import InputField from 'src/components/global/input/input-field'
import { userRoleList } from 'src/utils/constant/user-role'
import useEditUserVm from './edit-user-vm'
import { cilArrowLeft } from '@coreui/icons'

export default function MasterDataEditUserPage() {
    const vm = useEditUserVm()
    const nav = useNavigate()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Edit User</CCardTitle>
                </CCol>
                <CCol xs="auto" className="ms-auto">
                    <CButton color="secondary" onClick={() => nav(-1)}>
                        <CIcon className='me-2' icon={cilArrowLeft} />
                        Back
                    </CButton>
                </CCol>
            </CRow>
        </CCardHeader>

        <CCardBody>
            <Formik onSubmit={vm.handleFormSubmit}
                initialValues={vm.initialValues}
                validationSchema={vm.loginSchema}>
                {({ isSubmitting, values, errors, handleChange, handleSubmit }) => (
                    <CForm onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <div className="">
                            <InputField label='Nameame' type="name" name='name' placeholder="John Wick"
                                error={errors.name} onChangeValue={handleChange} value={values.name} />
                        </div>
                        <div className="">
                            <InputField label='Email' type="email" name='email' placeholder="name@example.com"
                                error={errors.email} onChangeValue={handleChange} value={values.email} />
                        </div>
                        <div className="">
                            <InputField label='password' type="password" name='password'
                                error={errors.password} onChangeValue={handleChange} value={values.password} />
                        </div>
                        <div>
                            <CFormLabel >Role</CFormLabel>
                            <CFormSelect name='role' options={userRoleList}
                                onChange={handleChange} value={values.role} />
                        </div>

                        {/* {isLoading ? loadingComponent
                                    : <CButton type="submit" color="primary" className="px-4">
                                      Login
                                    </CButton>} */}

                        <CButton disabled={isSubmitting} type="submit" color="primary" className="px-4 mt-3">
                            Submit
                        </CButton>
                    </CForm>
                )}
            </Formik>
        </CCardBody>
    </CCard>
}