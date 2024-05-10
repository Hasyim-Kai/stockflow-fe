import { CAlert, CCard, CCardBody, CCardHeader } from "@coreui/react-pro"
import Loading from "src/components/global/loading/loading"

type Props = {
    // isPadding?: boolean
    header?: React.ReactNode
    children?: React.ReactNode
    isLoading?: boolean
    isError?: boolean
}

export default function ContentFetchingLayout({
    // isPadding=true,
    header,
    children,
    isLoading = false,
    isError = false
}: Props) {

    return <CCard className="mb-4">
        <CCardHeader>
            {header}
        </CCardHeader>

        <CCardBody>
            {isLoading
                ? <Loading />
                : isError ? <CAlert className="fs-4 mt-3 p-3" color="danger">{`Something went wrong. Please try again later`}</CAlert> : children}
        </CCardBody>
    </CCard>
}