// import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetAllOutletQuery } from 'src/api/domain/master-data/outlet'
import { useEditUserMutation, useGetUserQuery } from 'src/api/domain/master-data/user'
import useStoreHelper from 'src/store/helper'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalSuccess, ISwalFail } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useEditSecurityCctvVm() {
    const { id } = useParams();
    const nav = useNavigate()
    const { userRole } = useStoreHelper()
    const { isLoading: isLoadingUser, data, } = useGetUserQuery(id || `1`)
    const [eidtUser, { isLoading: isLoadingEdit }] = useEditUserMutation()
    const { isLoading: isLoadingOutlet, data: dataOutlet } = useGetAllOutletQuery()

    const loginSchema = object().shape({
        name: string().required('Nama wajib diisi!'),
        link: string().required('Link wajib diisi!'),
    })

    const initialValues: Record<string, string> = {
        name: data?.name || ``,
        link: data?.link || ``,
    }

    const handleFormSubmit = async (values: any) => {
        eidtUser({ id: id || `1`, values }).unwrap().then(() => {
            ISwalSuccess()
            nav(-1)
        }).catch((error) => {
            ISwalFail(handleErrMsg(error))
        })
    }

    return {
        isLoadingEdit, isLoadingUser,
        loginSchema, initialValues, handleFormSubmit,
        userRole,
        isLoadingOutlet, dataOutlet,


    }
}