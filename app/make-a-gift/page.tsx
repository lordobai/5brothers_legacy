'use client'

import { motion } from 'framer-motion'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { useState } from 'react'
import { Check, Shield } from 'lucide-react'
import { Spinner } from '@/components/ui/Spinner'

export default function MakeAGiftPage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [currency, setCurrency] = useState('USD')
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const presetAmounts = ['5000', '10000', '25000', '50000', '100000']

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      // Validate amount
      const amountValue = selectedAmount || customAmount
      if (!amountValue || parseFloat(amountValue) <= 0) {
        setError('Please select or enter a valid donation amount')
        setIsSubmitting(false)
        return
      }

      const amount = parseFloat(amountValue)

      // Call payment API
      const response = await fetch('/api/donations/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donorName: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          amount,
          currency,
          donationType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        const message =
          typeof data.details === 'string' ? data.details : data.error || data.details || 'Failed to initialize payment'
        throw new Error(message)
      }

      if (data.authorizationUrl) {
        // Redirect to Flutterwave payment page
        window.location.href = data.authorizationUrl
      } else {
        throw new Error('Payment URL not received')
      }
    } catch (err: any) {
      console.error('Payment error:', err)
      setError(err.message || 'An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  const formatCurrency = (amount: string) => {
    const numAmount = parseFloat(amount)
    if (currency === 'USD') {
      return `$${numAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return `₦${numAmount.toLocaleString('en-US')}`
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSectionClient
        title="Make a Gift"
        subtitle="Your donation helps us create lasting change in communities across Africa"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Make a Gift"
      />

      {/* Impact Examples Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Your Gift Makes a Difference
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200"
              >
                <div className="text-4xl font-bold text-emerald-700 mb-4">
                  25 - 50 USD
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Provides school supplies for 1 child
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200"
              >
                <div className="text-4xl font-bold text-blue-700 mb-4">
                  20 USD
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Supports a family with clean drinking water for a month
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200"
              >
                <div className="text-4xl font-bold text-purple-700 mb-4">
                  18 - 50 USD
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Supports a mother with primary healthcare costs
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Donation Form - Left Side */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Donation Details
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Donation Type Toggle */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Donation Type
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setDonationType('one-time')}
                          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                            donationType === 'one-time'
                              ? 'bg-[#0B334A] text-white shadow-md'
                              : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                          }`}
                        >
                          One-Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonationType('monthly')}
                          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                            donationType === 'monthly'
                              ? 'bg-[#0B334A] text-white shadow-md'
                              : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                          }`}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Currency Selection */}
                    <div>
                      <label htmlFor="currency" className="block text-sm font-semibold text-slate-900 mb-3">
                        Currency
                      </label>
                      <div className="relative">
                        <select
                          id="currency"
                          value={currency}
                          onChange={(e) => { setCurrency(e.target.value); setSelectedAmount(null); setCustomAmount(''); }}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all appearance-none bg-white cursor-pointer"
                        >
                          <option value="USD">USD - US Dollar</option>
                          <option value="NGN">NGN - Nigerian Naira</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-500">
                        Donations are accepted in USD and Nigerian Naira (NGN).
                      </p>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Amount
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                        {(currency === 'NGN' ? presetAmounts : ['50', '100', '200', '500', '1000']).map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleAmountSelect(amount)}
                            className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? 'bg-[#0B334A] text-white shadow-md'
                                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                            }`}
                          >
                            {formatCurrency(amount)}
                          </button>
                        ))}
                      </div>
                      <div>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder={`Or enter custom amount (${currency})`}
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                        />
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm font-medium">{error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner size="sm" className="text-white" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        'Proceed to Payment'
                      )}
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Information Sidebar - Right Side */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Why Donate Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Donate?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">100% of donations go directly to programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">Transparent financial reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">Tax-deductible receipts provided</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">Secure payment processing</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Privacy & Security Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gray-100 rounded-2xl p-6 border-2 border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Shield size={24} className="text-[#0B334A]" />
                      <h3 className="text-xl font-bold text-slate-900">Privacy & Security</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      Your donation information is secure and confidential. We use industry-standard encryption to protect your personal and payment information. We never share your details with third parties.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
