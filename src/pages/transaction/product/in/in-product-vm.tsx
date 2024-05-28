// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useGetAllProductQuery } from 'src/api/domain/master-data/product'
import { useCreateTransactionProductMutation } from 'src/api/domain/transaction/product'
import useStoreHelper from 'src/store/helper'
import { TransactionProductEnum } from 'src/utils/constant/general'
import { handleErrMsg } from 'src/utils/helper/error-handler'
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal'
import { array, number, object, string } from 'yup'

interface TransactionProductDynamicFormType {
    productId: string
    quantity: number
    sumPrice: number
}

export default function useTransactionInProductVm() {
    const { userInfo } = useStoreHelper()
    // use All Product options
    const { isLoading, data, isSuccess } = useGetAllProductQuery()
    const [createTransactionProduct, { isLoading: isSubmitLoading }] = useCreateTransactionProductMutation()
    const nav = useNavigate()

    const loginSchema = object().shape({
        productList: array().of(
            object().shape({
                productId: string().required('ProductId wajib diisi!'),
                quantity: number().required('Quantity wajib diisi!'),
                sumPrice: number(),
            })
        )
    })

    const defaultFormValue = {
        productId: '',
        quantity: 0,
        sumPrice: 0,
    }

    const initialValues: { productList: TransactionProductDynamicFormType[] } = {
        productList: [
            defaultFormValue
        ]
    }
    const handleFormSubmit = async (values: any) => {
        const copiedValues = await { ...values }
        await values.productList.forEach((formItem: any, formItemIndex: number) => {
            const selectedProduct = data?.find((prodcut: any) => {
                return prodcut.id === formItem?.productId
            })
            // Assign the sumPrice
            copiedValues.productList[formItemIndex].sumPrice = selectedProduct?.price * formItem?.quantity
        })
        const dto = {
            type: TransactionProductEnum.IN,
            products: copiedValues.productList
        }
        ISwalConfirm(() => {
            createTransactionProduct(dto).unwrap().then(() => { ISwalSuccess(); nav(-1) })
                .catch((err) => ISwalFail(handleErrMsg(err)))
        })
    }

    const calculateSumPrice = (data: any[], currentFormItem: any): number => {
        const selectedProduct = data?.find((prodcut) => {
            return prodcut.id === currentFormItem?.productId
        })
        const sumPrice = selectedProduct?.price * currentFormItem?.quantity
        return isNaN(sumPrice) ? 0 : sumPrice
    }

    return {
        loginSchema, initialValues, defaultFormValue, handleFormSubmit,
        isLoading, data, isSuccess,
        calculateSumPrice,
        isSubmitLoading, createTransactionProduct,


    }
}