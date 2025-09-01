import Papa from 'papaparse'
import * as XLSX from 'xlsx'

export function downloadCSV(rows, filename = 'table.csv') {
  const csv = Papa.unparse(rows)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  downloadFile(blob, filename)
}

export function downloadXLSX(rows, filename = 'table.xlsx', sheetName = 'Sheet1') {
  const worksheet = XLSX.utils.aoa_to_sheet(rows)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
  
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  downloadFile(blob, filename)
}

export function copyToClipboard(rows) {
  const csv = Papa.unparse(rows)
  navigator.clipboard.writeText(csv).catch((err) => {
    console.error('Failed to copy to clipboard:', err)
  })
}

function downloadFile(blob, filename) {
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
