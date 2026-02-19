import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

/**
 * File Upload Handler for Career Applications
 * 
 * Uses Cloudinary for file uploads.
 * Files are stored in a dedicated folder with unique names.
 */

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed' },
        { status: 400 }
      )
    }

    // Check if Cloudinary credentials are set
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.error('Cloudinary credentials are not set')
      return NextResponse.json(
        {
          error: 'File storage is not configured. Please set Cloudinary environment variables.',
          details: 'CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are required.',
        },
        { status: 500 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename to prevent conflicts
    const timestamp = Date.now()
    const randomSuffix = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const uniqueFileName = `career-applications/${timestamp}-${randomSuffix}.${fileExtension}`

    // Upload to Cloudinary
    const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw', // For PDFs and documents (not images)
          folder: 'career-applications',
          public_id: `${timestamp}-${randomSuffix}`, // Unique identifier
          overwrite: false, // Prevent overwriting
        },
        (error, result) => {
          if (error) {
            reject(error)
          } else if (result) {
            resolve(result)
          } else {
            reject(new Error('Upload failed: No result returned'))
          }
        }
      ).end(buffer)
    })

    return NextResponse.json(
      {
        success: true,
        url: result.secure_url,
        fileName: file.name,
        fileSize: file.size,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error uploading file:', error)
    
    // Handle Cloudinary-specific errors
    if (error.message?.includes('Cloudinary') || error.message?.includes('CLOUDINARY')) {
      return NextResponse.json(
        {
          error: 'File storage configuration error. Please check Cloudinary credentials.',
          details: error.message || 'Cloudinary configuration issue.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        error: 'Failed to upload file',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

