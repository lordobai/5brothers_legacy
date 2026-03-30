'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function DonationSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const reference = searchParams.get('reference')
    const trxref = searchParams.get('trxref')

    if (reference || trxref) {
      // Payment was successful (Paystack redirects with reference)
      setStatus('success')
      setMessage('Thank you for your donation! Your payment was successful.')
    } else {
      // Check if there's an error
      const error = searchParams.get('error')
      if (error) {
        setStatus('failed')
        setMessage('Payment was not completed. Please try again.')
      } else {
        // No reference, might be direct access
        setStatus('success')
        setMessage('Thank you for your donation!')
      }
    }
  }, [searchParams])

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        {status === 'loading' && (
          <>
            <Loader2 className="w-16 h-16 text-[#0B334A] animate-spin mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Processing...</h1>
            <p className="text-slate-600">Please wait while we confirm your payment.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h1>
            <p className="text-slate-600 mb-6">{message}</p>
            <p className="text-sm text-slate-500 mb-6">
              A receipt has been sent to your email address.
            </p>
            <div className="space-y-3">
              <Link
                href="/"
                className="block w-full px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all"
              >
                Return to Home
              </Link>
              <Link
                href="/make-a-gift"
                className="block w-full px-6 py-3 bg-gray-100 text-slate-700 font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                Make Another Donation
              </Link>
            </div>
          </>
        )}

        {status === 'failed' && (
          <>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Failed</h1>
            <p className="text-slate-600 mb-6">{message}</p>
            <div className="space-y-3">
              <Link
                href="/make-a-gift"
                className="block w-full px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all"
              >
                Try Again
              </Link>
              <Link
                href="/"
                className="block w-full px-6 py-3 bg-gray-100 text-slate-700 font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                Return to Home
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </main>
  )
}

