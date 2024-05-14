// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useCreateProductMutation } from 'src/api/domain/master-data/product'
import { quantityUnitOptions } from 'src/utils/constant/QuantityUnit'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { object, string, number } from 'yup'

export default function useAddProductVm() {
    const [createProduct, { isLoading }] = useCreateProductMutation()
    const nav = useNavigate()

    const loginSchema = object().shape({
        name: string().required('Name wajib diisi!'),
        productCode: string().required('Productcode wajib diisi!'),
        price: number().required('Price wajib diisi!'),
        quantityUnit: string().required('Quantity Unit wajib diisi!'),
        description: string().required('Description wajib diisi!'),
    })

    const initialValues = {
        name: '',
        productCode: '',
        price: 0,
        quantityUnit: quantityUnitOptions[0].value,
        description: '',
    }

    const handleFormSubmit = (values: any) => {
        createProduct(values).unwrap().then(() => {
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