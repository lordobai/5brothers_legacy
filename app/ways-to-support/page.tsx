'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WaysToSupportPage() {
  const ways = [
    {
      title: 'Make a Financial Donation',
      description: 'Your financial donation directly supports our programs and operations, allowing us to serve communities, expand access to essential resources, and sustain long-term impact. Every gift—large or small—helps us continue this work with accountability and purpose.',
      icon: '📢',
      buttonText: 'Donate Now',
      buttonLink: '/make-a-gift',
    },
    {
      title: 'Lend Your Voice',
      description: 'Advocate for our cause and help raise awareness about the challenges facing vulnerable communities.',
      icon: '🎯',
      buttonText: 'Become an Advocate',
      buttonLink: '/get-involved',
    },
    {
      title: 'Support Our Project',
      description: 'Choose a specific project or program to support and see your impact in action.',
      icon: '🤝',
      buttonText: 'View Projects',
      buttonLink: '/our-initiatives',
    },
    {
      title: 'Collaborate',
      description: 'Partner with us to amplify our impact through organizational partnerships and collaborations.',
      icon: '🛍️',
      buttonText: 'Partner With Us',
      buttonLink: '/get-involved',
    },
    {
      title: 'Support Our Mission',
      description: 'Support our work by purchasing our branded items. Each item represents a contribution toward our programs, and 100% of net proceeds directly fund our community initiatives.',
      icon: '💝',
      buttonText: 'Learn More',
      buttonLink: '/make-a-gift',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
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
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
                >
                  <div className="text-5xl mb-4">{way.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{way.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{way.description}</p>
                  <Link
                    href={way.buttonLink}
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-md hover:shadow-lg transform hover:scale-105 mt-auto"
                  >
                    {way.buttonText}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Your Support Makes a Difference
                </h2>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                  See how your contributions are transforming lives in communities across Africa
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "Your donations helped build our new school. Our children now have access to quality education."
                  </p>
                  <p className="text-slate-600 font-semibold">
                    — Community Leader, Imo State
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "The health clinic you supported saved my daughter's life. Thank you for making healthcare accessible."
                  </p>
                  <p className="text-slate-600 font-semibold">
                    — Mother, Rural Community
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "Clean water changed everything for our village. We're healthier and more productive now."
                  </p>
                  <p className="text-slate-600 font-semibold">
                    — Village Elder, Enugu State
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
