// import * as yup from 'yup'
import { object, string } from 'yup'

export default function useAddUserVm() {
    //   const [login, { isLoading, isError, error }] = useLoginMutation()
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

    const handleFormSubmit = async (values: any) => {
        try {
            console.log(values)
        } catch (error) {
        }
    }

    return {
        loginSchema, initialValues, handleFormSubmit,

    }
}