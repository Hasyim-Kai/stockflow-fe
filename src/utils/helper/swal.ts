import Swal from "sweetalert2"

export type SwalIconType = `warning` | `info` | `success` | `error` | `question`

interface ConfirmProps {
    title?: string
    text?: string
    icon?: SwalIconType
    showCancelButton?: boolean
    confirmButtonText?: string
}

const initialConfirmValue: ConfirmProps = {
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, confirm it!",
}

export const ISwalConfirm = (cb: () => void = () => { }, props: ConfirmProps = initialConfirmValue,) => {
    Swal.fire({
        title: props.title,
        text: props.text,
        icon: props.icon,
        showCancelButton: props.showCancelButton,
        confirmButtonText: props.confirmButtonText,
        confirmButtonColor: "#3085d6", // blue
        cancelButtonColor: "#d33", // red
    }).then((result) => {
        Swal.showLoading()
        if (result.isConfirmed) cb()
    });
}

export const ISwalSuccess = () => {
    Swal.fire({
        title: "Action Success!",
        icon: "success"
    });
}

export const ISwalFail = (err: string = `Something went wrong`) => {
    Swal.fire({
        title: "Error!",
        text: err,
        icon: "error"
    });
}