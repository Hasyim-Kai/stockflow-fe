import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CRow } from '@coreui/react-pro'
import { Formik } from 'formik'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import Loading from 'src/components/global/loading/loading'
import useEditOutletVm from './edit-outlet-vm'

export default function MasterDataEditOutletPage() {
    const vm = useEditOutletVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Edit Outlet</CCardTitle>
                </CCol>
                <CCol xs="auto" className="ms-auto">
                    <BackBtn />
                </CCol>
            </CRow>
        </CCardHeader>

        <CCardBody>
            {vm.isLoadingOutlet ? <Loading />
                : <Formik onSubmit={vm.handleFormSubmit}
                    initialValues={vm.initialValues}
                    validationSchema={vm.loginSchema}
                    enableReinitialize>
                    {({ values, errors, handleChange, handleSubmit }) => (<>
                        {vm.isLoadingOutlet ? <Loading />
                            : <CForm onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                                <div className="">
                                    <InputField label='Name' type="name" name='name' placeholder="John Wick"
                                        error={errors.name} onChange={handleChange} value={values.name} />
                                </div>
                                <div className="">
                                    <InputField label='Address' type="text" name='address' placeholder="Northgard Avenue St. 123"
                                        error={errors.address} onChange={handleChange} value={values.address} />
                                </div>

                                {vm.isLoadingEdit ? <Loading />
                                    : <CButton type="submit" color="primary" className="px-4 mt-3">
                                        Submit
                                    </CButton>}
                            </CForm>}
                    </>)}
                </Formik>}
        </CCardBody>
    </CCard>
}