import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CFormLabel, CRow } from '@coreui/react-pro'
import { ErrorMessage, FieldArray, Form, Formik } from 'formik'
import Select from 'react-select'
import BackBtn from 'src/components/global/button/back-btn'
import InputField from 'src/components/global/input/input-field'
import Loading from 'src/components/global/loading/loading'
import { convertSelectOptions } from 'src/utils/helper/selectDataConverter'
import useTransactionOutProductVm from './out-product-vm'
import { formatToIdrCurrency } from 'src/utils/helper/currency'

export default function TransactionOutProductPage() {
    const vm = useTransactionOutProductVm()

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol xs="auto" >
                    <CCardTitle className="fs-3 fw-semibold">Out Product</CCardTitle>
                </CCol>
                <CCol xs="auto" className="">
                    <CAlert className="px-3 py-2" color="danger">Harap tidak memilih Produk yang sama dalam 1 form</CAlert>
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
                {({ values, handleSubmit, setFieldValue }) => (
                    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <CCard className="mb-4">
                            <CCardBody>
                                <FieldArray name="productList"
                                    render={(arrayHelpers) => {
                                        return <>
                                            {values.productList.length > 0 &&
                                                values.productList.map((formItem, index) =>
                                                    <CRow key={index}>
                                                        <CCol xs={`11`} className='d-flex flex-column gap-3'>
                                                            <div>
                                                                <CFormLabel htmlFor={`productList.${index}.productId`}>Product</CFormLabel>
                                                                <Select
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    name={`productList.${index}.productId`}
                                                                    isClearable={true}
                                                                    isSearchable={true}
                                                                    // options={quantityUnitOptions}
                                                                    onChange={(option: any) => setFieldValue(`productList.${index}.productId`, option.value,)}
                                                                    isLoading={vm.isLoading}
                                                                    isDisabled={vm.isLoading}
                                                                    options={convertSelectOptions(vm.data)}
                                                                />
                                                                <ErrorMessage name={`productList.${index}.productId`} component="div" className="field-error mt-1 text-danger" />
                                                            </div>
                                                            <div className=''>
                                                                <InputField label={`Quantity`} type="number" name={`productList.${index}.quantity`} placeholder="000"
                                                                    onChange={arrayHelpers.form.handleChange} min={0} max={vm.getThisProductMaxQty(formItem)} />
                                                                <span className="text-danger">Max Quantity : {vm.getThisProductMaxQty(formItem) || 0}</span>
                                                            </div>
                                                            <div className='mb-3'>
                                                                <InputField label='Sum Price' type="text" name={`productList.${index}.sumPrice`} placeholder="000" disabled
                                                                    value={vm.isSuccess ? String(formatToIdrCurrency(vm.calculateSumPrice(vm.data, formItem))) : `0`} />
                                                            </div>
                                                            {/* <h5 className='mb-3'>{isSuccess && `Sum Price : ${vm.calculateSumPrice(data, arrayHelpers, index)}`}</h5> */}
                                                        </CCol>
                                                        <CCol>

                                                            {/* RMEOVE FORM BTN */}
                                                            <CButton type="button" color="warning" variant="outline" onClick={() => arrayHelpers.remove(index)}>
                                                                X
                                                            </CButton>
                                                        </CCol>
                                                        <hr />
                                                    </CRow>
                                                )}

                                            {/* ADD FORM BTN */}
                                            <CButton type="button" color="secondary" className="w-100 mt-3"
                                                onClick={() => arrayHelpers.push(vm.defaultFormValue)}>
                                                Add Form
                                            </CButton>
                                        </>
                                    }} />
                            </CCardBody>
                        </CCard>

                        {vm.isLoading ? <Loading />
                            : <CButton type="submit" color="primary" className="fs-3">
                                Submit
                            </CButton>}
                    </Form>
                )}
            </Formik>
        </CCardBody>
    </CCard>
}