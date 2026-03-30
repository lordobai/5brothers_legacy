'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

function DonationResult() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const reference = searchParams.get('reference')
    const trxref = searchParams.get('trxref')

    if (reference || trxref) {
      setStatus('success')
      setMessage('Thank you for your donation! Your payment was successful.')
    } else {
      const error = searchParams.get('error')
      if (error) {
        setStatus('failed')
        setMessage('Payment was not completed. Please try again.')
      } else {
        setStatus('success')
        setMessage('Thank you for your donation!')
      }
    }
  }, [searchParams])

  return (
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
  )
}

function LoadingFallback() {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
      <Loader2 className="w-16 h-16 text-[#0B334A] animate-spin mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Processing...</h1>
      <p className="text-slate-600">Please wait while we confirm your payment.</p>
    </div>
  )
}

export default function DonationSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Suspense fallback={<LoadingFallback />}>
        <DonationResult />
      </Suspense>
    </main>
  )
}
