import { useDelOutletMutation } from 'src/api/domain/master-data/outlet';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';

export default function useOutletVm() {
    // const { outletRole } = useStoreHelper()
    const [delOutlet, { }] = useDelOutletMutation()

    const columns = [
        {
            key: 'name',
        },
        {
            key: 'address',
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]

    const onDel = (id: string) => {
        ISwalConfirm(() => {
            delOutlet({ id: id || `` }).unwrap().then(() => ISwalSuccess())
                .catch(() => ISwalFail())
        })
    }

    return {
        onDel, columns,


    }
}