'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function MakeAGiftPage() {
  const impactAreas = [
    {
      title: 'Education',
      description: 'Support scholarships, school infrastructure, and educational resources.',
      amount: '$50',
      impact: 'Provides school supplies for 10 students',
    },
    {
      title: 'Healthcare',
      description: 'Fund mobile clinics, health programs, and medical supplies.',
      amount: '$100',
      impact: 'Covers healthcare services for 5 families',
    },
    {
      title: 'WASH Programs',
      description: 'Help build wells and provide clean water access.',
      amount: '$200',
      impact: 'Provides clean water for 20 people',
    },
    {
      title: 'General Support',
      description: 'Support our overall mission and programs.',
      amount: 'Any Amount',
      impact: 'Every dollar makes a difference',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
            alt="Make a Gift"
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
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              Your contribution helps us reach more communities and create lasting impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Options Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Choose Your Impact
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Direct your donation to the area that matters most to you, or support our overall mission.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600 mb-4">{area.description}</p>
                  <div className="text-3xl font-bold text-[#0B334A] mb-2">{area.amount}</div>
                  <p className="text-sm text-slate-500">{area.impact}</p>
                </motion.div>
              ))}
            </div>

            {/* Donation Form Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6 text-center">Make Your Donation</h3>
              <p className="text-slate-100 mb-8 text-center">
                For payment processing, please contact us directly or use the information below.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold mb-2">Email:</p>
                  <a href="mailto:info@5brotherslegacy.org" className="text-slate-100 hover:text-white underline">
                    info@5brotherslegacy.org
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phone:</p>
                  <a href="tel:+2348036775776" className="text-slate-100 hover:text-white underline">
                    +234 803 677 5776
                  </a>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0B334A] font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Contact Us to Donate
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
