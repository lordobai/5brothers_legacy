'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WaysToSupportPage() {
  const ways = [
    {
      title: 'Financial Donations',
      description: 'Your monetary contribution directly supports our programs and helps us reach more communities.',
      icon: '💝',
    },
    {
      title: 'In-Kind Donations',
      description: 'Donate supplies, equipment, or resources that can support our programs on the ground.',
      icon: '📦',
    },
    {
      title: 'Corporate Partnerships',
      description: 'Partner with us through corporate social responsibility initiatives and employee engagement programs.',
      icon: '🏢',
    },
    {
      title: 'Fundraising Events',
      description: 'Organize or participate in fundraising events to raise awareness and support for our cause.',
      icon: '🎉',
    },
    {
      title: 'Sponsor a Program',
      description: 'Directly sponsor a specific program or initiative and see the impact of your support.',
      icon: '🎯',
    },
    {
      title: 'Legacy Giving',
      description: 'Include us in your estate planning to create a lasting legacy of positive change.',
      icon: '📜',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
            alt="Ways to Support"
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
              Ways to Support
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              There are many ways to make a difference. Choose what works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {ways.map((way, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="text-5xl mb-4">{way.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{way.title}</h3>
                  <p className="text-slate-600">{way.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
                Every contribution, no matter the size, helps us create lasting change in communities across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/make-a-gift"
                  className="px-8 py-4 bg-white text-[#0B334A] font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Donate Now
                </Link>
                <Link
                  href="/contact-us"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
