import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema
const donationSchema = z.object({
  donorName: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  amount: z.number().positive('Amount must be greater than 0'),
  currency: z.enum(['NGN', 'USD'], {
    errorMap: () => ({ message: 'Currency must be NGN or USD' }),
  }),
  donationType: z.enum(['one-time', 'monthly']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Check if Flutterwave is configured
    const secretKey = process.env.FLW_SECRET_KEY
    const publicKey = process.env.FLW_PUBLIC_KEY
    if (!secretKey) {
      console.error('FLW_SECRET_KEY is not set in environment variables')
      return NextResponse.json(
        {
          error: 'Payment gateway is not configured',
          details: 'FLW_SECRET_KEY is missing. Please configure Flutterwave in your environment variables.',
        },
        { status: 500 }
      )
    }

    // Verify API key format
    if (!secretKey.startsWith('FLWSECK_TEST_') && !secretKey.startsWith('FLWSECK_')) {
      console.warn('FLW_SECRET_KEY format may be incorrect. Expected FLWSECK_TEST_ or FLWSECK_ prefix.')
    }

    const body = await request.json()

    // Validate input
    const validationResult = donationSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.errors,
        },
        { status: 400 }
      )
    }

    const { donorName, email, phone, amount, currency, donationType } = validationResult.data

    // Convert amount to smallest currency unit (kobo for NGN, cents for USD)
    const amountInSmallestUnit = Math.round(amount * 100)

    console.log('Initializing Flutterwave payment:', {
      email,
      amount: amountInSmallestUnit,
      currency: currency.toUpperCase(),
      hasSecretKey: !!process.env.FLW_SECRET_KEY,
      secretKeyPrefix: process.env.FLW_SECRET_KEY?.substring(0, 10),
    })

    // Generate unique transaction reference
    const txRef = `DONATION-${Date.now()}-${Math.random().toString(36).substring(7)}`

    // Initialize payment with Flutterwave using direct API call
    const paymentData = {
      tx_ref: txRef,
      amount: amount,
      currency: currency.toUpperCase(),
      redirect_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/donation/success`,
      payment_options: 'card',
      customer: {
        email,
        name: donorName,
        phone_number: phone || '',
      },
      customizations: {
        title: '5Brothers Legacy Donation',
        description: `${donationType === 'monthly' ? 'Monthly' : 'One-time'} donation`,
        logo: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/logo.png`,
      },
      meta: {
        donorName,
        phone: phone || '',
        donationType: donationType || 'one-time',
      },
    }

    // Make direct HTTP request to Flutterwave API
    const flutterwaveResponse = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })

    const payment = await flutterwaveResponse.json()

    // Log the full Flutterwave response for debugging
    console.log('Flutterwave response received:', {
      status: payment?.status,
      message: payment?.message,
      hasData: !!payment?.data,
      dataKeys: payment?.data ? Object.keys(payment.data) : [],
      fullResponse: JSON.stringify(payment, null, 2),
    })

    // Check if Flutterwave response is valid
    if (!flutterwaveResponse.ok || !payment || payment.status !== 'success' || !payment.data) {
      console.error('Invalid Flutterwave response:', JSON.stringify(payment, null, 2))

      // User-friendly message for unsupported currency
      const isUnsupportedCurrency =
        payment?.message?.toLowerCase().includes('currency') ||
        payment?.data?.message?.toLowerCase().includes('currency') ||
        (payment as { code?: string })?.code === 'INVALID_CURRENCY'
      if (isUnsupportedCurrency) {
        return NextResponse.json(
          {
            error: 'Currency not supported',
            details:
              'We currently accept donations in Nigerian Naira (NGN) and US Dollars (USD). Please select a supported currency.',
          },
          { status: 400 }
        )
      }

      return NextResponse.json(
        {
          error: 'Payment initialization failed',
          details: payment?.message || payment?.data?.message || 'Invalid response from payment gateway. Please check your Flutterwave API keys.',
        },
        { status: flutterwaveResponse.status || 500 }
      )
    }

    // Create donation record in database (pending status)
    const donation = await prisma.donation.create({
      data: {
        donorName,
        email,
        phone: phone || null,
        amount: amount, // Decimal type in Prisma
        currency: currency.toUpperCase(),
        paymentMethod: 'card',
        paymentReference: txRef,
        status: 'pending',
        metadata: {
          donationType: donationType || 'one-time',
          flutterwaveReference: txRef,
          authorizationUrl: payment.data.link,
        },
      },
    })

    return NextResponse.json(
      {
        success: true,
        authorizationUrl: payment.data.link,
        reference: txRef,
        donationId: donation.id,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error initializing payment:', error)
    console.error('Error details:', {
      message: error.message,
      response: error.response,
      body: error.response?.body,
      stack: error.stack,
    })

    // Handle Flutterwave-specific errors
    if (error.response?.body) {
      return NextResponse.json(
        {
          error: 'Payment initialization failed',
          details: error.response.body.message || error.message,
        },
        { status: 400 }
      )
    }

    // Handle authentication errors (invalid API key)
    if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
      return NextResponse.json(
        {
          error: 'Payment gateway authentication failed',
          details: 'Invalid Flutterwave API key. Please check your FLW_SECRET_KEY in environment variables.',
        },
        { status: 401 }
      )
    }

    return NextResponse.json(
      {
        error: 'Failed to initialize payment',
        details: error.message || 'Unknown error occurred. Please check your Flutterwave API keys and try again.',
      },
      { status: 500 }
    )
  }
}

