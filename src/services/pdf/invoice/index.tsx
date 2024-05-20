import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import InvoiceItemsTable from './InvoiceItemsTable'

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Times-Bold',
        fontSize: 9,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 1.5,
        flexDirection: 'column',
        display: 'flex',
    },
    header: {
        fontSize: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
        textDecoration: 'underline',
    },
    label: {
        flexDirection: 'column',
        textAlign: 'left',
        width: 70,
    },
    headerContent: {
        flexDirection: 'column',
        width: 180,
    },
    headerContentRight: {
        flexDirection: 'column',
        width: 260,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 150,
        justifyContent: 'flex-start',
    },
    billTo: {
        paddingBottom: 1,
    },
    signature: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    signatureSign: {
        marginTop: 5,
        marginBottom: 25,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    signatureTextA: {
        flexDirection: 'column',
        textAlign: 'left',
        // marginLeft: 77,
        width: 440,
    },
    signatureTextA2: {
        flexDirection: 'column',
        textAlign: 'left',
        // marginLeft: 70,
        width: 360,
    },

    signatureTextB: {
        flexDirection: 'column',
        width: 220,
    },
    signatureTextB2: {
        flexDirection: 'column',
        width: 200,
    },
})

const InvoicePreview = ({ invoice, displayKurs = false }: any) => {

    return (
        <Document>
            <Page size="FOLIO" style={styles.page}>
                <Text style={styles.header}>FAKTUR PENJUALAN</Text>
                <View style={styles.headerContainer}>
                    <View style={styles.signature}>
                        <Text style={styles.label}>NOMOR </Text>
                        <Text style={styles.headerContent}>: 1</Text>
                    </View>
                    <View style={styles.signature}>
                        <Text style={styles.label}>NAMA </Text>
                        <Text style={styles.headerContentRight}>: Sugiono</Text>
                    </View>
                </View>

                <View style={styles.headerContainer}>
                    <View style={styles.signature}>
                        <Text style={styles.label}>TANGGAL </Text>
                        <Text style={styles.headerContent}>
                            {/* : {format(new Date(invoice.dateShipped), 'dd/MM/yyyy')} */}
                        </Text>
                    </View>
                    <View style={styles.signature}>
                        <Text style={styles.label}>ALAMAT </Text>
                        {/* <Text style={styles.headerContentRight}>{`: ${invoice?.shippedAddress}`}</Text> */}
                    </View>
                </View>

                {/* <InvoiceItemsTable invoice={invoice} /> */}

                <View style={styles.signatureSign}>
                    <Text style={styles.signatureTextA}>Hormat Kami</Text>
                </View>
                <View style={styles.signatureSign}>
                    <Text style={styles.signatureTextA2}>(.............................)</Text>
                    <Text style={styles.signatureTextB2}>(.............................)</Text>
                </View>
            </Page>
        </Document>
    )
}

export default InvoicePreview
