// import * as yup from 'yup'
// import { useSelector, useDispatch } from 'react-redux'
// import { GlobalStateType } from 'src/store'
// import { toggleConfirmModal } from 'src/store/index'
import Swal from 'sweetalert2'

export default function useUserVm() {
    //   const [login, { isLoading, isError, error }] = useLoginMutation()
    const onDel = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!" + id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6", // blue
            cancelButtonColor: "#d33", // red
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return {
        onDel,


    }
}