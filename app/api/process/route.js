import { NextRequest, NextResponse } from 'next/server'
import { generateRandomId, sleepTime } from '@/lib/utils'
import { generateMockTable, storeJob } from '@/lib/mock-db'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload JPG, PNG, or PDF files.' },
        { status: 400 }
      )
    }

    // Validate file size (15MB limit)
    const maxSize = 15 * 1024 * 1024 // 15MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 15MB.' },
        { status: 400 }
      )
    }

    const jobId = generateRandomId()

    // Simulate processing time
    await sleepTime(1500 + Math.random() * 500) // 1.5-2.0 seconds

    // Generate mock table data based on file type
    const rows = generateMockTable(file.type)

    const job = {
      jobId,
      filename: file.name,
      mimetype: file.type,
      status: 'completed',
      rows,
    }

    // Store job in mock database
    storeJob(job)

    return NextResponse.json(job)
  } catch (error) {
    console.error('Processing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
