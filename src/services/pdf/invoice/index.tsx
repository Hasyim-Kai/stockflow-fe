import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { formatToIdrCurrency } from 'src/utils/helper/currency';
import { formatDate } from 'src/utils/helper/date';

const InvoicePdf = ({ invoiceData }: { invoiceData: any }) => {
    const styles = StyleSheet.create({
        page: { fontSize: 11, paddingTop: 20, paddingLeft: 40, paddingRight: 40, lineHeight: 1.5, display: 'flex', flexDirection: 'column' },

        logo: { width: 90, height: 90 },

        spaceBetween: { display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: "#3E3E3E" },

        titleContainer: { display: 'flex', flexDirection: 'row', marginTop: 16 },

        reportTitle: { fontSize: 24, textAlign: 'center' },

        addressTitle: { fontSize: 16, fontStyle: 'bold' },

        invoice: { fontWeight: 'bold', fontSize: 20 },

        invoiceNumber: { fontSize: 11, fontWeight: 'bold' },

        address: { fontSize: 16, fontWeight: 400, },

        theader: {
            fontSize: 8, fontStyle: 'bold', padding: 6, flex: 1, backgroundColor: '#DEDEDE',
            border: '1px solid', borderColor: 'whitesmoke', borderRightWidth: 1, borderBottomWidth: 1
        },

        theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

        tbody: {
            fontSize: 8, paddingTop: 4, paddingLeft: 7, flex: 1,
            border: '1px solid', borderColor: 'whitesmoke', borderRightWidth: 1, borderBottomWidth: 1
        },

        total: {
            fontSize: 8, paddingTop: 4, paddingLeft: 7, flex: 1.5,
            border: '1px solid', borderColor: 'whitesmoke', borderBottomWidth: 1
        },

        tbody2: { flex: 2, borderRightWidth: 1, },

        divider: { width: '100%', height: 2, backgroundColor: '#DEDEDE', marginTop: 15, marginBottom: 15 },

    });

    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                {/* <Image style={styles.logo} src={SentiumLogo} /> */}
                <Text style={styles.reportTitle}>Sentium</Text>
                <Text style={styles.reportTitle}>Konsinyasi Distributor</Text>
            </View>
        </View>
    );

    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                <Text style={styles.invoice}>Invoice </Text>
                <Text style={styles.invoiceNumber}>Invoice number: {invoiceData.id} </Text>
            </View>
        </View>
    );

    const UserAddress = () => <><View style={styles.titleContainer}>
        <View style={styles.spaceBetween}>
            <View style={{ maxWidth: 400 }}>
                <Text style={styles.addressTitle}>Bill to </Text>
                <Text style={styles.address}>
                    {invoiceData.outlet.name} - {invoiceData.outlet.address}
                </Text>
            </View>
            <Text style={styles.addressTitle}>{formatDate(invoiceData.createdAt)}</Text>
        </View>
    </View>
        <View style={styles.divider}></View>
    </>

    const GrandTotalPrice = () => <View style={{ marginTop: 20 }}>
        <View style={styles.reportTitle}><Text>Grand Total : {formatToIdrCurrency(invoiceData?.invoiceGrandTotalPrice)}</Text></View>
    </View>

    const Table = ({ transactionItem }: any) => <>
        <View style={{ width: '100%' }}>
            <View style={{ fontSize: 8, display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10 }}>
                <Text >Transaction Id : {transactionItem?.id}</Text>
                <Text >Date : - {formatDate(transactionItem?.createdAt)}</Text>
            </View>
            <View style={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
                <View style={styles.theader}>
                    <Text >Name</Text>
                </View>
                <View style={styles.theader}>
                    <Text>Product Code</Text>
                </View>
                <View style={styles.theader}>
                    <Text>Price</Text>
                </View>
                <View style={styles.theader}>
                    <Text>Quantity</Text>
                </View>
                <View style={styles.theader}>
                    <Text>Sum Price</Text>
                </View>
            </View>
        </View>

        {transactionItem?.transactionProducts.map((transactionProductItem: any) =>
            <View style={{ display: 'flex', width: '100%', flexDirection: 'row' }} key={transactionProductItem?.id}>
                <View style={styles.tbody}>
                    <Text >{transactionProductItem?.product.name}</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{transactionProductItem?.product.productCode} </Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{transactionProductItem?.product.price}</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{transactionProductItem?.quantity}</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{formatToIdrCurrency(transactionProductItem?.sumPrice)}</Text>
                </View>
            </View>)}

        <View style={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
            <View style={styles.tbody}><Text></Text></View>
            <View style={styles.tbody}><Text></Text></View>
            <View style={styles.tbody}><Text></Text></View>
            <View style={styles.tbody}>
                <Text>Total</Text>
            </View>
            <View style={styles.tbody}>
                <Text>
                    {formatToIdrCurrency(transactionItem?.totalPrice)}
                </Text>
            </View>
        </View>
    </>;

    return <Document>
        <Page size="A4" style={styles.page}>
            <InvoiceTitle />
            <Address />
            <UserAddress />
            {invoiceData.transaction.map((transactionItem: any) =>
                <Table transactionItem={transactionItem} key={transactionItem.id} />)}
            <GrandTotalPrice />
        </Page>
    </Document>
}

export default InvoicePdf
