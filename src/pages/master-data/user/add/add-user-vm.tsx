// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useCreateUserMutation } from 'src/api/domain/master-data/user'
import useStoreHelper from 'src/store/helper'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useAddUserVm() {
    const { userRole } = useStoreHelper()
    const [createUser, { isLoading }] = useCreateUserMutation()
    const nav = useNavigate()

    const loginSchema = object().shape({
        name: string().required('Nama wajib diisi!'),
        email: string().required('Email wajib diisi!'),
        password: string().required('Password wajib diisi!'),
        role: string(),
    })

    const initialValues = {
        name: '',
        email: '',
        password: '',
        role: 'EMPLOYEE',
    }

    const handleFormSubmit = (values: any) => {
        createUser(values).unwrap().then(() => {
            ISwalSuccess()
            nav(-1)
        }).catch((error) => {
            ISwalFail(handleErrMsg(error))
        })
    }

    return {
        loginSchema, initialValues, handleFormSubmit,
        userRole,
        isLoading,

    }
}