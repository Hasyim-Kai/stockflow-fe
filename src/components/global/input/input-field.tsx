import { CFormInput, CAlert } from "@coreui/react-pro"
import { ChangeEventHandler } from "react"

type Props = {
    label: string
    name: string
    type: string
    placeholder?: string
    error?: string | undefined
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
    step?: number
    disabled?: boolean
    min?: number
    max?: number
}

export default function InputField(props: Props) {
    return <>
        <CFormInput placeholder={props.placeholder} {...props}
            className={`${props.error ? 'border border-danger' : ''}`}
            value={props.value} />
        {props.error && <CAlert className="mt-3 p-2" color="danger">{props.error}</CAlert>}
    </>
}