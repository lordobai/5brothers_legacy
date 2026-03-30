import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('verif-hash')

    // Verify webhook signature
    if (!process.env.FLW_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Flutterwave secret key not configured' },
        { status: 500 }
      )
    }

    // Flutterwave webhook verification
    // The signature should match the secret hash set in Flutterwave dashboard
    const secretHash = process.env.FLW_WEBHOOK_HASH
    if (secretHash && signature !== secretHash) {
      console.error('Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const event = JSON.parse(body)

    // Handle successful payment
    if (event.event === 'charge.completed' && event.data.status === 'successful') {
      const { tx_ref, amount, currency, customer, created_at } = event.data

      // Find donation by payment reference
      const donation = await prisma.donation.findUnique({
        where: { paymentReference: tx_ref },
      })

      if (!donation) {
        console.error(`Donation not found for reference: ${tx_ref}`)
        return NextResponse.json(
          { error: 'Donation not found' },
          { status: 404 }
        )
      }

      // Update donation status to completed
      await prisma.donation.update({
        where: { id: donation.id },
        data: {
          status: 'completed',
          receiptSent: false,
          metadata: {
            ...(donation.metadata as any),
            flutterwaveEvent: event.event,
            flutterwaveData: {
              amount: amount,
              currency,
              customer,
              paidAt: created_at,
              transactionId: event.data.id,
              flwRef: event.data.flw_ref,
            },
          },
        },
      })

      // TODO: Send receipt email here
      // You can integrate with Resend or another email service
      console.log(`Payment successful for donation ${donation.id}`)
    }

    // Handle failed payment
    if (event.event === 'charge.completed' && event.data.status === 'failed') {
      const { tx_ref } = event.data

      const donation = await prisma.donation.findUnique({
        where: { paymentReference: tx_ref },
      })

      if (donation) {
        await prisma.donation.update({
          where: { id: donation.id },
          data: {
            status: 'failed',
            metadata: {
              ...(donation.metadata as any),
              flutterwaveEvent: event.event,
              failureReason: event.data.processor_response || 'Payment failed',
            },
          },
        })

        console.log(`Payment failed for donation ${donation.id}`)
      }
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      {
        error: 'Webhook processing failed',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}

