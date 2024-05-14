// import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditOutletMutation, useGetOutletQuery } from 'src/api/domain/master-data/outlet'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useEditOutletVm() {
    const { id } = useParams();
    const nav = useNavigate()
    const { isLoading: isLoadingOutlet, data, } = useGetOutletQuery(id || `1`)
    const [eidtOutlet, { isLoading: isLoadingEdit }] = useEditOutletMutation()

    const loginSchema = object().shape({
        name: string().required('Nama wajib diisi!'),
        address: string().required('Address wajib diisi!'),
    })

    const initialValues: Record<string, string> = {
        name: data?.name || ``,
        address: data?.address || ``,
    }

    const handleFormSubmit = async (values: any) => {
        eidtOutlet({ id: id || `1`, values }).unwrap().then(() => {
            ISwalSuccess()
            nav(-1)
        }).catch((error) => {
            ISwalFail(handleErrMsg(error))
        })
    }

    return {
        isLoadingEdit, isLoadingOutlet,
        loginSchema, initialValues, handleFormSubmit,


    }
}