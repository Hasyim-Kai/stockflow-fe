import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#414346'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    fontStyle: 'bold',
    marginBottom: -1,
    marginRight: -1,
  },
  no: {
    width: '5%',
    height: 20,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: 8,
    paddingTop: 3,
  },
  title: {
    width: '40%',
    height: 20,
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingTop: 3,
  },
  qty: {
    width: '10%',
    height: 20,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
    paddingTop: 3,
  },
  kurs: {
    width: '15%',
    height: 20,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
    paddingTop: 3,
  },
  total: {
    width: '20%',
    height: 20,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
    paddingTop: 3,
  },
})

const InvoiceTableRow = ({ products, ppn }) => {
  function formatRupiah(angka, prefix) {
    var number_string = angka
      .replace('.', ',')
      .replace(/[^,\d]/g, '')
      .toString(),
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

  const rows2 = products.map((item, index) => {
    let priceUsd = item.priceUsd
    let priceIdr = parseFloat(item.priceIdr)

    return (
      <View style={styles.row} key={`productsIndex${index}`}>
        <Text style={styles.no}>{index + 1}</Text>
        <Text style={styles.title}>{item.productName}</Text>
        <Text style={styles.qty}>
          {item.product.unit === 'PCS' ? parseInt(item.qty) : item.qty} {item.product.unit}
        </Text>
        <Text style={styles.kurs}>$ {priceUsd.toFixed(2)}</Text>
        <Text style={styles.kurs}>{formatRupiah(priceIdr.toFixed(2), 'Rp ')}</Text>
        <Text style={styles.total}>{formatRupiah(parseFloat(item.netto).toFixed(0), 'Rp ')}</Text>
      </View>
    )
  })

  if (rows2.length < 10) {
    for (let i = rows2.length; i < 10; i++) {
      rows2.push(
        <View style={styles.row} key={`productsIndex${i}`}>
          <Text style={styles.no}></Text>
          <Text style={styles.title}></Text>
          <Text style={styles.qty}></Text>
          <Text style={styles.kurs}></Text>
          <Text style={styles.kurs}></Text>
          <Text style={styles.total}></Text>
        </View>,
      )
    }
  }

  return <View>{rows2}</View>
}

export default InvoiceTableRow
