import { useDelUserMutation } from 'src/api/domain/master-data/user';
import { handleErrMsg } from 'src/utils/helper/error-handler';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';

export default function useUserVm() {
    // const { userRole } = useStoreHelper()
    const [delUser, { }] = useDelUserMutation()

    const columns = [
        {
            key: 'name',
        },
        {
            key: 'email',
        },
        {
            key: 'role',
        },
        {
            key: 'outlet',
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]

    const onDel = (id: string) => {
        ISwalConfirm(() => {
            delUser({ id: id || `` }).unwrap().then(() => ISwalSuccess())
                .catch((error) => ISwalFail(handleErrMsg(error)))
        })
    }

    return {
        onDel, columns,


    }
}