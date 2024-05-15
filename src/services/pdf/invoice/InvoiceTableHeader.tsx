import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#414346'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#414346',
    borderBottomWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'bold',
    marginRight: -1,
  },
  title: {
    width: '40%',
    justifyContent: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 3,
  },
  no: {
    width: '5%',
    justifyContent: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 3,
  },
  qty: {
    width: '10%',
    justifyContent: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 3,
  },
  kurs: {
    width: '15%',
    justifyContent: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 3,
  },
  total: {
    width: '20%',
    justifyContent: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 3,
  },
})

const InvoiceTableHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.no}>NO</Text>
      <Text style={styles.title}>NAMA BARANG</Text>
      <Text style={styles.qty}>QTY</Text>
      <Text style={styles.kurs}>HARGA ($)</Text>
      <Text style={styles.kurs}>HARGA (Rp)</Text>
      <Text style={styles.total}>JUMLAH</Text>
    </View>
  )
}

export default InvoiceTableHeader
