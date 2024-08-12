import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormLabel, CFormSelect, CRow } from '@coreui/react-pro'
// import CIcon from '@coreui/icons-react'
import { Formik } from 'formik'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import Loading from 'src/components/global/loading/loading'
import { userRoleList } from 'src/utils/constant/user-role'
import { convertSelectOptions } from 'src/utils/helper/selectDataConverter'
import useAddSecurityCctvVm from './add-cctv-vm'

export default function SecurityCctvAddPage() {
    const vm = useAddSecurityCctvVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Add CCTV</CCardTitle>
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
                            <InputField label='Link' type="text" name='link' placeholder="https://example.com"
                                error={errors.link} onChange={handleChange} value={values.link} />
                        </div>

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