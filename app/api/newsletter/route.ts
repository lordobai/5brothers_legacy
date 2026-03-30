import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = newsletterSchema.parse(body)

    // Check if email already exists
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email: validatedData.email },
    })

    if (existing) {
      if (existing.status === 'active') {
        return NextResponse.json(
          {
            success: true,
            message: 'You are already subscribed to our newsletter!',
          },
          { status: 200 }
        )
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscription.update({
          where: { email: validatedData.email },
          data: {
            status: 'active',
            name: validatedData.name || existing.name,
            source: validatedData.source || existing.source,
            unsubscribedAt: null,
          },
        })

        return NextResponse.json(
          {
            success: true,
            message: 'Welcome back! You have been resubscribed to our newsletter.',
          },
          { status: 200 }
        )
      }
    }

    // Create new subscription
    const subscription = await prisma.newsletterSubscription.create({
      data: {
        email: validatedData.email,
        name: validatedData.name,
        source: validatedData.source || 'website',
        status: 'active',
      },
    })

    // TODO: Send welcome email
    // TODO: Add to email marketing service (Mailchimp, etc.)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to our newsletter!',
        id: subscription.id,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error)

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
        error: 'Failed to subscribe to newsletter',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Update subscription status
    await prisma.newsletterSubscription.update({
      where: { email },
      data: {
        status: 'unsubscribed',
        unsubscribedAt: new Date(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'You have been unsubscribed from our newsletter.',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error unsubscribing from newsletter:', error)

    return NextResponse.json(
      {
        error: 'Failed to unsubscribe',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

