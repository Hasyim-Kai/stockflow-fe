import { cilArrowLeft } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CButton } from "@coreui/react-pro"
import { useNavigate } from "react-router-dom"

export default function BackBtn() {
    const nav = useNavigate()
    return <CButton color="primary" onClick={() => nav(-1)}>
        <CIcon className='me-2' icon={cilArrowLeft} />
        Back
    </CButton>
}