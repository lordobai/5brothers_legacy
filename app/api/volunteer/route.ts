import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const volunteerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  availability: z.string().optional(),
  skills: z.string().optional(),
  interests: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = volunteerSchema.parse(body)

    // Create volunteer application
    const application = await prisma.volunteerApplication.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        availability: validatedData.availability,
        skills: validatedData.skills,
        interests: validatedData.interests,
        additionalInfo: validatedData.additionalInfo,
        status: 'pending',
      },
    })

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to volunteer

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest in volunteering! We will review your application and get back to you soon.',
        id: application.id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error submitting volunteer application:', error)

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
        error: 'Failed to submit volunteer application',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

