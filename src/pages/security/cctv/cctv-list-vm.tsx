import { useDelUserMutation } from 'src/api/domain/master-data/user';
import { handleErrMsg } from 'src/utils/helper/error-handler';
import { ISwalConfirm, ISwalFail, ISwalSuccess } from 'src/utils/helper/swal';
import { date } from 'yup';

export default function useSecurityCctvVm() {
    const columns = [
        {
            key: 'name',
        },
        {
            key: 'date',
        },
        {
            key: 'actions',
            filter: false,
            sorter: false,
        },
    ]
    const dummy = [
        {
            id: 1,
            name: 'CCTV 1',
            date: new Date(),
        },
        {
            id: 2,
            name: 'CCTV 2',
            date: new Date(),
        },
    ]
    // const { userRole } = useStoreHelper()
    // const [delUser, { }] = useDelUserMutation()
    // const { isLoading, isError, data } = useSecurityCctvVm()



    const onDel = (id: string) => {
        // ISwalConfirm(() => {
        //     delUser({ id: id || `` }).unwrap().then(() => ISwalSuccess())
        //         .catch((error) => ISwalFail(handleErrMsg(error)))
        // })
    }

    return {
        onDel, columns, dummy,



    }
}