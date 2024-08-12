import { CAlert, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CRow } from "@coreui/react-pro"
import Loading from "src/components/global/loading/loading"

type Props = {
    // isPadding?: boolean
    title?: string
    topRightSection?: React.ReactNode
    children?: React.ReactNode
    isLoading?: boolean
    isError?: boolean
    smallTitle?: boolean
}

export default function ContentCardLayout({
    title,
    topRightSection,
    children,
    isLoading = false,
    isError = false,
    smallTitle = false
}: Props) {

    return <CCard className="mb-4">
        <CCardHeader>
            <CRow className='p-2'>
                <CCol>
                    <CCardTitle className={`${smallTitle ? '' : 'fs-3'} fw-semibold`}>{title}</CCardTitle>
                </CCol>
                <CCol xs="4" className="ms-auto">
                    <CRow className=''>{topRightSection}</CRow>
                </CCol>
            </CRow>
        </CCardHeader>

        <CCardBody>
            {isLoading
                ? <Loading />
                : isError ? <CAlert className="fs-4 mt-3 p-3" color="danger">{`Something went wrong. Please try again later`}</CAlert> : children}
        </CCardBody>
    </CCard>
}