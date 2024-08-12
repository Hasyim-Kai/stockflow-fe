import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react-pro'
import { Formik } from 'formik'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import Loading from 'src/components/global/loading/loading'
import useEditProductVm from './edit-product-vm'
import { quantityUnitOptions } from 'src/utils/constant/QuantityUnit'

export default function MasterDataEditProductPage() {
    const vm = useEditProductVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Edit Product</CCardTitle>
                </CCol>
                <CCol xs="auto" className="ms-auto">
                    <BackBtn />
                </CCol>
            </CRow>
        </CCardHeader>

        <CCardBody>
            {vm.isLoadingProduct ? <Loading />
                : <Formik onSubmit={vm.handleFormSubmit}
                    initialValues={vm.initialValues}
                    validationSchema={vm.loginSchema}
                    enableReinitialize>
                    {({ values, errors, handleChange, handleSubmit }) => (<>
                        {vm.isLoadingProduct ? <Loading />
                            : <CForm onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                                <div className="">
                                    <InputField label='Name' type="text" name='name' placeholder="Enter Item Here"
                                        error={errors.name} onChange={handleChange} value={values.name} />
                                </div>
                                <div className="">
                                    <InputField label='Product Code' type="text" name='productCode' placeholder="name@example.com"
                                        error={errors.productCode} onChange={handleChange} value={values.productCode} />
                                </div>
                                <div className="">
                                    <InputField label='Price' type="number" name='price' placeholder="0.00"
                                        error={errors.price} onChange={handleChange} value={values.price} />
                                </div>
                                <div className="">
                                    <CFormLabel >Quantity Unit</CFormLabel>
                                    <CFormSelect name='quantityUnit' options={quantityUnitOptions}
                                        onChange={handleChange} value={values.quantityUnit} />
                                </div>
                                <div className="">
                                    <CFormTextarea
                                        name="description"
                                        label="Description"
                                        rows={4}
                                        onChange={handleChange} value={values.description}
                                    ></CFormTextarea>
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