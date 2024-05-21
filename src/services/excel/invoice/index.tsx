import { cilCloudDownload } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton } from '@coreui/react-pro';
import { useCallback } from 'react';
// import { formatToIdrCurrency } from 'src/utils/helper/currency';
import { formatDate } from 'src/utils/helper/date';
import XLSX from "xlsx-js-style";

const InvoiceExcel = ({ invoiceData }: { invoiceData: any }) => {
    const exportFile = useCallback(() => {
        const titleStyle = {
            font: {
                bold: true,
                sz: 20,

            },
            fill: {
                fgColor: {
                    rgb: "DCDCDC"
                }
            }
        }
        const tableHead = {
            fill: {
                fgColor: {
                    rgb: "DCDCDC"
                }
            }
        }
        const tableBody = {
            fill: {
                fgColor: {
                    rgb: "F5F5F5"
                }
            },
            alignment: {
                left: true,
            }
        }


        const dataExcel = [
            [{ v: "Sentium", t: "s", s: titleStyle }, { v: "Konsinyasi", t: "s", s: titleStyle }, { v: "Distributor", t: "s", s: titleStyle },],
            [""],
            [{ v: "Date", t: "s", s: tableHead }, { v: "Invoice ID", t: "s", s: tableHead }, { v: "Bill To", t: "s", s: tableHead },],
            [{ v: formatDate(invoiceData.createdAt), t: "s", s: tableBody }, { v: invoiceData.id, t: "s", s: tableBody }, { v: `${invoiceData.outlet.name} - ${invoiceData.outlet.address}`, t: "s", s: tableBody },],
            [""],
        ]
        invoiceData.transaction.forEach((transactionItem: any) => {
            const transactionProductItemArr = [
                ["Transaction ID", "Date",],
                [transactionItem?.id, formatDate(transactionItem?.createdAt),],
            ]
            transactionItem?.transactionProducts.forEach((transactionProductItem: any) => (
                transactionProductItemArr.push(
                    [
                        { v: "Name", t: "s", s: tableHead },
                        { v: "Product Code", t: "s", s: tableHead },
                        { v: "Price", t: "s", s: tableHead },
                        { v: "Quantity", t: "s", s: tableHead },
                        { v: "Sum Price", t: "s", s: tableHead },
                    ],
                    [
                        { v: transactionProductItem?.product.name, t: "s", s: tableBody },
                        { v: transactionProductItem?.product.productCode, t: "s", s: tableBody },
                        { v: transactionProductItem?.product.price, t: "s", s: tableBody },
                        { v: transactionProductItem?.quantity, t: "s", s: tableBody },
                        { v: transactionProductItem?.sumPrice, t: "s", s: tableBody },
                    ],
                )
            ))
            transactionProductItemArr.push(["", "", "", { v: "Total", t: "s", s: tableHead }, { v: transactionItem.totalPrice, t: "s", s: tableHead },],)
            transactionProductItemArr.push([""],)
            dataExcel.push(...transactionProductItemArr)
        })
        dataExcel.push([{ v: "Grand Total", t: "s", s: tableHead }, { v: invoiceData.invoiceGrandTotalPrice, t: "s", s: tableHead },],)

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(dataExcel);
        ws["!cols"] = [{ wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 18 }];
        ws["!rows"] = [{ hpt: 40 }];
        XLSX.utils.book_append_sheet(wb, ws, "Data");
        XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
    }, [invoiceData]);

    return <div>
        <CButton color="primary" className='h-auto' onClick={exportFile}>
            <CIcon className='' icon={cilCloudDownload} />
            Download Excel
        </CButton>
    </div>
}

export default InvoiceExcel
