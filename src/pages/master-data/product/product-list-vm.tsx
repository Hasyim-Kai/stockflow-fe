import { useDelProductMutation } from 'src/api/domain/product';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';

export default function useProductVm() {
    const [delProduct, { }] = useDelProductMutation()

    const columns = [
        {
            key: 'isSealOpened',
            label: `Seal Status`
        },
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
            key: 'quantity',
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