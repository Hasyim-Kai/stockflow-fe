// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useGetAllOutletQuery } from 'src/api/domain/master-data/outlet'
import { useCreateUserMutation } from 'src/api/domain/master-data/user'
import useStoreHelper from 'src/store/helper'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useAddSecurityCctvVm() {
    const { userRole } = useStoreHelper()
    const [createUser, { isLoading }] = useCreateUserMutation()
    const { isLoading: isLoadingOutlet, data: dataOutlet } = useGetAllOutletQuery()
    const nav = useNavigate()

    const loginSchema = object().shape({
        name: string().required('Nama wajib diisi!'),
        link: string().required('Link wajib diisi!'),
    })

    const initialValues = {
        name: '',
        link: '',
    }

    const handleFormSubmit = (values: any) => {
        values.outletId = Number(values.outletId)
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
        isLoadingOutlet, dataOutlet,
    }
}