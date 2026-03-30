import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const partnerSchema = z.object({
  organizationName: z.string().min(1, 'Organization name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  organizationType: z.string().optional(),
  partnershipInterest: z.string().optional(),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  additionalInfo: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = partnerSchema.parse(body)

    // Create partner application
    const application = await prisma.partnerApplication.create({
      data: {
        organizationName: validatedData.organizationName,
        contactName: validatedData.contactName,
        email: validatedData.email,
        phone: validatedData.phone,
        organizationType: validatedData.organizationType,
        partnershipInterest: validatedData.partnershipInterest,
        website: validatedData.website || undefined,
        additionalInfo: validatedData.additionalInfo,
        status: 'pending',
      },
    })

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to partner

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your partnership interest! We will review your application and get back to you soon.',
        id: application.id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error submitting partner application:', error)

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
        error: 'Failed to submit partner application',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

