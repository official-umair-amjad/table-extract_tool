// In-memory store for demo purposes
const jobStore = new Map()

export function storeJob(job) {
  jobStore.set(job.jobId, job)
}

export function getJob(jobId) {
  return jobStore.get(jobId)
}

export function generateMockTable(fileType) {
  if (fileType.startsWith('image/')) {
    // Mock table for images (receipts, invoices, etc.)
    return [
      ['Item', 'Qty', 'Price', 'Tax', 'Total'],
      ['Coffee', '2', '$4.50', '$0.36', '$4.86'],
      ['Sandwich', '1', '$8.95', '$0.72', '$9.67'],
      ['Pastry', '1', '$3.25', '$0.26', '$3.51'],
      ['Subtotal', '', '', '$1.34', '$17.04'],
      ['Total', '', '', '', '$18.38']
    ]
  } else if (fileType === 'application/pdf') {
    // Mock table for PDFs - simulate multiple tables
    return [
      ['Date', 'Description', 'Amount', 'Balance'],
      ['2023-12-01', 'Opening Balance', '', '$1,250.00'],
      ['2023-12-03', 'Direct Deposit', '$2,500.00', '$3,750.00'],
      ['2023-12-05', 'Online Purchase', '-$85.43', '$3,664.57'],
      ['2023-12-07', 'ATM Withdrawal', '-$100.00', '$3,564.57'],
      ['2023-12-10', 'Check Deposit', '$750.00', '$4,314.57'],
      ['2023-12-15', 'Monthly Fee', '-$12.00', '$4,302.57']
    ]
  }
  
  // Default fallback table
  return [
    ['Column 1', 'Column 2', 'Column 3'],
    ['Row 1 Data', 'Row 1 Data', 'Row 1 Data'],
    ['Row 2 Data', 'Row 2 Data', 'Row 2 Data'],
    ['Row 3 Data', 'Row 3 Data', 'Row 3 Data']
  ]
}
