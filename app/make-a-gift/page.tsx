'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/contexts/LanguageContext';

const donationAmounts = [5000, 10000, 25000, 50000, 100000];
const currencies = ['NGN', 'USD'];

export default function MakeAGiftPage() {
  const t = useTranslations();
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
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
              {t.makeAGift.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.makeAGift.hero.subtitle}
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
              {t.makeAGift.yourGift.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0B334A] mb-2">₦5,000</div>
                <p className="text-gray-600">{t.makeAGift.impact.schoolSupplies}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0B334A] mb-2">₦25,000</div>
                <p className="text-gray-600">{t.makeAGift.impact.cleanWater}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0B334A] mb-2">₦100,000</div>
                <p className="text-gray-600">{t.makeAGift.impact.healthcare}</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.makeAGift.form.donationDetails}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">{t.makeAGift.form.donationType}</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                          donationType === 'one-time'
                            ? 'bg-[#0B334A] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {t.makeAGift.form.oneTime}
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType('monthly')}
                        className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                          donationType === 'monthly'
                            ? 'bg-[#0B334A] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {t.makeAGift.form.monthly}
                      </button>
                    </div>
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.makeAGift.form.currency}</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.makeAGift.form.amount}</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {donationAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            amount === amt
                              ? 'bg-[#0B334A] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {currency === 'NGN' ? `₦${amt.toLocaleString()}` : `$${(amt / 750).toFixed(0)}`}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder={t.makeAGift.form.customAmount}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A]"
                    />
                  </div>

                  {/* Personal Info */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.makeAGift.form.name} *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.makeAGift.form.email} *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.makeAGift.form.phone}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0B334A] to-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    {t.makeAGift.form.proceedToPayment}
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
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.makeAGift.whyDonate.title}</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#0B334A] mr-2">✓</span>
                      <span>{t.makeAGift.whyDonate.directToPrograms}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0B334A] mr-2">✓</span>
                      <span>{t.makeAGift.whyDonate.transparentReporting}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0B334A] mr-2">✓</span>
                      <span>{t.makeAGift.whyDonate.taxDeductible}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0B334A] mr-2">✓</span>
                      <span>{t.makeAGift.whyDonate.securePayment}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.makeAGift.privacy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.makeAGift.privacy.description}
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


