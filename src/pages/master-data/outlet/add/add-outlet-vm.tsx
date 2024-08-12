// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useCreateOutletMutation } from 'src/api/domain/master-data/outlet'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useAddOutletVm() {
    const [createOutlet, { isLoading }] = useCreateOutletMutation()
    const nav = useNavigate()

    const loginSchema = object().shape({
        name: string().required('Nama wajib diisi!'),
        address: string().required('Address wajib diisi!'),
    })

    const initialValues = {
        name: '',
        address: '',
    }

    const handleFormSubmit = (values: any) => {
        createOutlet(values).unwrap().then(() => {
            ISwalSuccess()
            nav(-1)
        }).catch((error) => {
            ISwalFail(handleErrMsg(error))
        })
    }

    return {
        loginSchema, initialValues, handleFormSubmit,
        isLoading,

    }
}