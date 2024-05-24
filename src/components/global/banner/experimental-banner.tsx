import { CAlert } from "@coreui/react-pro"

type Props = {
    title?: string
    subtitle?: string
    children?: React.ReactNode
}

export default function ExperimentalBanner({ title = `Experimental Alert`, subtitle, children }: Props) {
    return <CAlert className="p-4 border-2" color="warning">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {children}
    </CAlert>
}