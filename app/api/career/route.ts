import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const careerApplicationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  address: z.string().optional(),
  position: z.string().min(1, 'Position is required'),
  coverLetter: z.string().optional(), // Text cover letter
  resumeUrl: z.string().url('Invalid resume URL').optional().or(z.literal('')),
  coverLetterUrl: z.string().url('Invalid cover letter URL').optional().or(z.literal('')),
  additionalDocs: z.array(z.string().url()).optional(), // Array of file URLs
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = careerApplicationSchema.parse(body)

    // Create career application
    const application = await prisma.careerApplication.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address,
        position: validatedData.position,
        coverLetter: validatedData.coverLetter,
        resumeUrl: validatedData.resumeUrl || undefined,
        coverLetterUrl: validatedData.coverLetterUrl || undefined,
        additionalDocs: validatedData.additionalDocs || undefined,
        status: 'pending',
      },
    })

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to applicant

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your application! We will review it and get back to you soon.',
        id: application.id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error submitting career application:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        error: 'Failed to submit career application',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

