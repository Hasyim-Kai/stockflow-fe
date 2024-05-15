import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableFooter from './InvoiceTableFooter'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#414346',
  },
})

const InvoiceItemsTable = ({ invoice }) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow
        products={invoice?.productOrder?.ProductOrdersOnProducts}
        ppn={invoice?.productOrder?.ppn}
      />
      <InvoiceTableFooter invoice={invoice} />
    </View>
  )
}

export default InvoiceItemsTable
