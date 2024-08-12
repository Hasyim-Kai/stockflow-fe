import { useState } from 'react';
import { useDelProductMutation, useGetAllProductQuery, useGetTop5SoldProductQuery, } from 'src/api/domain/master-data/product';
import { handleErrMsg } from 'src/utils/helper/error-handler';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';

export default function useProductVm() {
    const columns = [
        {
            key: 'name',
        },
        {
            key: 'productCode',
            label: `Code`
        },
        {
            key: 'price',
            label: `Price`
        },
        {
            key: 'sealedQuantity',
            label: `Sealed`,
        },
        {
            key: 'openedQuantity',
            label: `Opened`,
        },
        {
            key: 'quantityUnit',
            label: `Unit`
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]
    const { isLoading: isLoadingTop5SoldProduct, isError: isErrorTop5SoldProduct, data: dataTop5SoldProduct } = useGetTop5SoldProductQuery()
    const { isLoading: isLoadingAllProduct, isError: isErrorAllProduct, data: dataAllProduct } = useGetAllProductQuery()
    const [delProduct, { }] = useDelProductMutation()
    const [isSoldActive, setIsSoldActive] = useState(false)
    const handleToggleSold = () => {
        setIsSoldActive((prev) => !prev)
        setIsNotSoldActive(false)
    }
    const [isNotSoldActive, setIsNotSoldActive] = useState(false)
    const handleToggleNotSold = () => {
        setIsSoldActive(false)
        setIsNotSoldActive((prev) => !prev)
    }

    function filterSoldOrNotSold(): any[] {
        if (isSoldActive) {
            return dataAllProduct.filter((product: any) => product.openedQuantity > 0)
        } else if (isNotSoldActive) {
            return dataAllProduct.filter((product: any) => product.openedQuantity === 0)
        } else {
            return dataAllProduct
        }
    }

    function convertTop5SoldProductDataToChartDataInput() {
        const labels: string[] = []
        const data: number[] = []

        dataTop5SoldProduct?.forEach((product: any) => {
            labels.push(product.name)
            data.push(product.openedQuantity)
        });

        return {
            labels, datasets: [
                {
                    label: 'Most Sold Product',
                    backgroundColor: '#2b7cff',
                    data,
                },
            ],
        }
    }

    const onDel = (id: string) => {
        ISwalConfirm(() => {
            delProduct({ id: id || `` }).unwrap().then(() => ISwalSuccess())
                .catch((error) => ISwalFail(handleErrMsg(error)))
        })
    }

    return {
        onDel, columns,
        isSoldActive, handleToggleSold, isNotSoldActive, handleToggleNotSold,
        isLoadingTop5SoldProduct, isErrorTop5SoldProduct, dataTop5SoldProduct,
        isLoadingAllProduct, isErrorAllProduct, dataAllProduct,
        filterSoldOrNotSold, convertTop5SoldProductDataToChartDataInput



    }
}