'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const donationAmounts = [5000, 10000, 25000, 50000, 100000];
const currencies = ['NGN', 'USD'];

export default function MakeAGiftPage() {
  const [amount, setAmount] = useState<number | string>('');
  const [currency, setCurrency] = useState('NGN');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    alert('Donation form submitted! (Payment integration to be implemented)');
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
            alt="Donation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Make a Gift
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your donation helps us create lasting change in communities across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Gift Makes a Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">₦5,000</div>
                <p className="text-gray-600">Provides school supplies for 5 children</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">₦25,000</div>
                <p className="text-gray-600">Supports a family with clean water for a month</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">₦100,000</div>
                <p className="text-gray-600">Funds healthcare services for 50 people</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-10"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Donation Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Type</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                          donationType === 'one-time'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType('monthly')}
                        className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                          donationType === 'monthly'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {donationAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            amount === amt
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {currency === 'NGN' ? `₦${amt.toLocaleString()}` : `$${(amt / 750).toFixed(0)}`}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Personal Info */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Donate?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>100% of donations go directly to programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Transparent financial reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Tax-deductible receipts provided</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Secure payment processing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your donation information is secure and confidential. We use industry-standard encryption 
                    to protect your personal and payment information. We never share your details with third parties.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


