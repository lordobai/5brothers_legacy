import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const advocateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  platform: z.string().optional(),
  advocacyInterest: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = advocateSchema.parse(body)

    // Create advocate signup
    const signup = await prisma.advocateSignup.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        platform: validatedData.platform,
        advocacyInterest: validatedData.advocacyInterest,
        additionalInfo: validatedData.additionalInfo,
        status: 'pending',
      },
    })

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to advocate

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for becoming an advocate! We will be in touch with resources and opportunities.',
        id: signup.id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error submitting advocate signup:', error)

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
        error: 'Failed to submit advocate signup',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

