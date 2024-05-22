import { CCol, CRow, CSmartTable } from '@coreui/react-pro'
import BackBtn from 'src/components/global/button/back-btn'
import ContentCardLayout from 'src/layout/ContentCardLayout'
import { formatDate } from 'src/utils/helper/date'
import { formatToIdrCurrency } from 'src/utils/helper/currency'
import useDetailSecurityCctvVm from './cctv-detail-vm'
import ReactPlayer from 'react-player/lazy'

export default function DetailSecurityCctvPage() {
    const vm = useDetailSecurityCctvVm()

    const header = <CCol xs={`auto`} className='ms-auto'><BackBtn /></CCol>

    return <ContentCardLayout title={`CCTV Detail ${vm.id}`} topRightSection={header} isLoading={false} isError={false}>
        {/* return <ContentCardLayout title='CCTV Detail' topRightSection={header} isLoading={vm.isLoading} isError={vm.isError}> */}
        <section className=''>
            <iframe src="https://drive.google.com/file/d/1tvz5yPP8Popap4Twz5zXeO6UVA_rAaCd/preview"
                width="800" height="450"></iframe>
        </section>
    </ContentCardLayout>
}