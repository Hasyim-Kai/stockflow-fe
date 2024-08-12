// import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditProductMutation, useGetProductQuery } from 'src/api/domain/master-data/product'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string } from 'yup'

export default function useEditProductVm() {
    const { id } = useParams();
    const nav = useNavigate()
    const { isLoading: isLoadingProduct, data, } = useGetProductQuery(id || `1`)
    const [eidtProduct, { isLoading: isLoadingEdit }] = useEditProductMutation()

    const loginSchema = object().shape({
        productCode: string().required('Productcode wajib diisi!'),
        name: string().required('Name wajib diisi!'),
        price: string().required('Price wajib diisi!'),
        quantityUnit: string().required('Quantity Unit wajib diisi!'),
        description: string().required('Description wajib diisi!'),
    })

    const initialValues: Record<string, string> = {
        productCode: data?.productCode || ``,
        name: data?.name || ``,
        price: data?.price || ``,
        quantityUnit: data?.quantityUnit || ``,
        description: data?.description || ``,
    }

    const handleFormSubmit = async (values: any) => {
        eidtProduct({ id: id || `1`, values }).unwrap().then(() => {
            ISwalSuccess()
            nav(-1)
        }).catch((error) => {
            ISwalFail(handleErrMsg(error))
        })
    }

    return {
        isLoadingEdit, isLoadingProduct,
        loginSchema, initialValues, handleFormSubmit,


    }
}