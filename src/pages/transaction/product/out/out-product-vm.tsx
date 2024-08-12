// import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useGetAllProductOptionListQuery } from 'src/api/domain/master-data/product'
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

export default function useTransactionOutProductVm() {
    const { userInfo } = useStoreHelper()
    // use Product options where the sealedQuantity more than 0
    const { isLoading, data, isSuccess } = useGetAllProductOptionListQuery()
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
    const getThisProductMaxQty = (formItem: any): number => {
        const selectedProduct = data?.find((prodcut: any) => {
            return prodcut.id === formItem?.productId
        })
        return selectedProduct?.sealedQuantity
    }
    const handleFormSubmit = async (values: any) => {
        try {
            const copiedValues = await { ...values }
            await values.productList.forEach((formItem: any, formItemIndex: number) => {
                const selectedProduct = data?.find((prodcut: any) => {
                    return prodcut.id === formItem?.productId
                })
                // Assign the sumPrice
                copiedValues.productList[formItemIndex].sumPrice = selectedProduct?.price * formItem?.quantity
            })
            const dto = {
                type: TransactionProductEnum.OUT,
                products: copiedValues.productList
            }
            ISwalConfirm(() => {
                createTransactionProduct(dto).unwrap().then(() => { ISwalSuccess(); nav(-1) })
                    .catch((err) => ISwalFail(handleErrMsg(err)))
            })
        } catch (error) {
            ISwalFail(handleErrMsg(error))
        }
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
        calculateSumPrice, getThisProductMaxQty,
        isSubmitLoading, createTransactionProduct,


    }
}