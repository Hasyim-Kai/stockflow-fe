import { CFormLabel, CFormInput, CAlert } from "@coreui/react-pro"
import { ChangeEventHandler } from "react"

type Props = {
    label: string
    name: string
    type: string
    placeholder?: string
    error: string | undefined
    onChangeValue: ChangeEventHandler<HTMLInputElement>
    value: string
}

export default function InputField({ label, name, type, placeholder = 'Input Here', error, onChangeValue, value, }: Props) {
    return <>
        <CFormLabel >{label}</CFormLabel>
        <CFormInput type={type} name={name} placeholder={placeholder}
            className={`${error ? 'border border-danger' : ''}`}
            onChange={onChangeValue} value={value} />
        {error && <CAlert className="mt-3 p-2" color="danger">{error}</CAlert>}
    </>
}