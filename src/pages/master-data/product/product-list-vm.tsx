import { useState } from 'react';
import { useDelProductMutation, useGetAllProductQuery, } from 'src/api/domain/master-data/product';
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
    const { isLoading, isError, data } = useGetAllProductQuery()
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
            return data.filter((product: any) => product.openedQuantity > 0)
        } else if (isNotSoldActive) {
            return data.filter((product: any) => product.openedQuantity === 0)
        } else {
            return data
        }
    }

    const onDel = (id: string) => {
        ISwalConfirm(() => {
            delProduct({ id: id || `` }).unwrap().then(() => ISwalSuccess())
                .catch(() => ISwalFail())
        })
    }

    return {
        onDel, columns,
        isSoldActive, handleToggleSold, isNotSoldActive, handleToggleNotSold,
        isLoading, isError, data,
        filterSoldOrNotSold,



    }
}