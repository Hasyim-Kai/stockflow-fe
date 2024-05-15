import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#414346'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 101,
    fontSize: 9,
    borderWidth: 1,
    borderColor: '#414346',
    marginBottom: -1,
    marginRight: -1,
    marginLeft: -1,
  },
  description: {
    width: 394,
    flexDirection: 'column',
    height: 100,
    justifyContent: 'center',
    textAlign: 'center',
    paddingRight: 8,
    paddingTop: 10,
    paddingLeft: 3,
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  label: {
    width: 84.5,
    flexDirection: 'column',
    height: 100,
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  childLabel: {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  childLabelLight: {
    fontFamily: 'Times-Roman',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  value: {
    width: 111.5,
    flexDirection: 'column',
    height: 100,
    textAlign: 'right',
  },
  textRed: {
    color: 'red',
  },
})

const InvoiceTableFooter = ({ invoice }) => {
  function formatRupiah(angka, prefix) {
    var number_string = angka
      .toString()
      .replace('.', ',')
      .replace(/[^,\d]/g, ''),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi)

    if (ribuan) {
      const separator = sisa ? '.' : ''
      rupiah += separator + ribuan.join('.')
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
    return prefix === undefined ? rupiah : rupiah ? 'Rp ' + rupiah : ''
  }

  let subTotal = 0
  let total = 0
  let ppn = 0
  let grandTotal = 0

  subTotal = invoice.totalPriceIdrInternal
  total = Math.round(invoice.totalPriceIdrInternal - invoice.discountIdr)
  grandTotal = invoice.grandTotalInternalIdr

  return (
    <View style={styles.row}>
      <Text style={styles.description}>
        {`* Pembayaran dinyatakan sah apabila melalui \n no rekening BCA : `}{' '}
        <Text style={styles.textRed}>363-776-6778</Text>
        {` a/n `}
        <Text style={styles.textRed}>ANDRIS HARIYANTO</Text>
        {`\n * Barang yang dikirim bersifat TITIPAN/KONSINYASI, kecuali telah melunasi sesuai\n nominal yang tertera dalam invoice ini`}
      </Text>
      <View style={styles.label}>
        <Text style={styles.childLabel}>SUB TOTAL</Text>
        <Text style={styles.childLabelLight}>DISKON</Text>
        <Text style={styles.childLabelLight}>PPN 11%</Text>
        <Text style={styles.childLabel}>TOTAL</Text>
        <Text style={styles.childLabelLight}>ONGKOS KIRIM</Text>
        <Text style={styles.childLabelLight}>PACKING KAYU</Text>
        <Text style={styles.childLabel}>GRAND TOTAL</Text>
      </View>
      <View style={styles.value}>
        <Text style={styles.childLabel}>{formatRupiah(subTotal, 'Rp ')}</Text>
        <Text style={styles.childLabelLight}>
          {formatRupiah(invoice.discountIdr ? invoice.discountIdr : 0, 'Rp ')}
        </Text>
        <Text style={styles.childLabelLight}>{formatRupiah(ppn, 'Rp ')}</Text>
        <Text style={styles.childLabel}>{formatRupiah(total, 'Rp ')}</Text>
        <Text style={styles.childLabelLight}>
          {formatRupiah(invoice.shippingCostIdr ? invoice.shippingCostIdr : 0, 'Rp ')}
        </Text>
        <Text style={styles.childLabelLight}>
          {formatRupiah(invoice.timberPackingIdr ? invoice.timberPackingIdr : 0, 'Rp ')}
        </Text>
        <Text style={styles.childLabel}>{formatRupiah(grandTotal, 'Rp ')}</Text>
      </View>
    </View>
  )
}

export default InvoiceTableFooter
