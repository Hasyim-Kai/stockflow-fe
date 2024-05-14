import { useDelProductMutation, } from 'src/api/domain/master-data/product';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';

export default function useProductVm() {
    const [delProduct, { }] = useDelProductMutation()

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

    const onDel = (id: string) => {
        ISwalConfirm(() => {
            delProduct({ id: id || `` }).unwrap().then(() => ISwalSuccess())
                .catch(() => ISwalFail())
        })
    }

    return {
        onDel, columns,


    }
}