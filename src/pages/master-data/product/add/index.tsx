import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react-pro'
import { Formik } from 'formik'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import { quantityUnitOptions } from 'src/utils/constant/QuantityUnit'
import useAddProductVm from './add-product-vm'
import Loading from 'src/components/global/loading/loading'

export default function MasterDataAddProductPage() {
    const vm = useAddProductVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className="fs-3 fw-semibold">Add Product</CCardTitle>
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
                            <InputField label='Name' type="text" name='name' placeholder="Enter Item Here"
                                error={errors.name} onChange={handleChange} value={values.name} />
                        </div>
                        <div className="">
                            <InputField label='Product Code' type="text" name='productCode' placeholder="name@example.com"
                                error={errors.productCode} onChange={handleChange} value={values.productCode} />
                        </div>
                        <div className="">
                            <InputField label='Price' type="number" step={0.01} name='price' placeholder="0.00"
                                error={errors.price} onChange={handleChange} value={String(values.price)} />
                        </div>
                        <div className="">
                            <CFormLabel ></CFormLabel>
                            <CFormSelect name='quantityUnit' options={quantityUnitOptions} label='Quantity Unit'
                                onChange={handleChange} value={values.quantityUnit} />
                        </div>
                        <div className="">
                            <CFormTextarea name="description" label="Description" rows={4}
                                onChange={handleChange} value={values.description}
                            ></CFormTextarea>
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