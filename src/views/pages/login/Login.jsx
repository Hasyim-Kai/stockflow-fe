import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { Formik } from 'formik'
import { setLogin } from 'src/store/index.tsx'
import { useLoginMutation } from 'src/api/auth.ts'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, CAlert, } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Loading from "src/components/global/loading/loading"

const loginSchema = yup.object().shape({
  email: yup.string().required('Email wajib diisi!'),
  password: yup.string().required('Password wajib diisi!'),
})

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading, isError, error, data }] = useLoginMutation()

  const handleFormSubmit = async (values,) => {
    try {
      const res = await login(values)
      if (res.data) {
        navigate(`/master-data/user`)
        dispatch(setLogin(res.data))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                  >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                      <CForm onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-medium-emphasis">Sign In to your account</p>
                        {isError && <CAlert color="danger">{error.data?.message}</CAlert>}
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            onChange={handleChange}
                            value={values.email}
                          />
                        </CInputGroup>
                        {Boolean(touched.email) && Boolean(errors.email) && (
                          <CAlert color="danger">{errors.email}</CAlert>
                        )}
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            value={values.password}
                          />
                        </CInputGroup>
                        {Boolean(touched.password) && Boolean(errors.password) && (
                          <CAlert color="danger">{errors.password}</CAlert>
                        )}
                        <CRow>
                          <CCol xs={6}>
                            {isLoading ? <Loading />
                              : <CButton type="submit" color="primary" className="px-4">
                                Login
                              </CButton>}
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center"></CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
