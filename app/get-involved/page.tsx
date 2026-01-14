'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function GetInvolvedPage() {
  const options = [
    {
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a difference on the ground. Your time and skills can transform lives.',
      icon: '🤝',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      href: '/contact-us',
    },
    {
      title: 'Partner',
      description: 'Collaborate with us to amplify our impact and reach more communities. Together we can achieve more.',
      icon: '🏢',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      href: '/contact-us',
    },
    {
      title: 'Advocate',
      description: 'Use your voice to raise awareness and support for our cause. Help us spread the word about our mission.',
      icon: '📢',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      href: '/contact-us',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
            alt="Get Involved"
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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              Join us in creating positive change. Every action counts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {options.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={option.href}
                    className="block p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-xl transition-all group h-full"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 text-3xl`}>
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0B334A] transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-slate-700 mb-4">{option.description}</p>
                    <span className="text-[#0B334A] font-semibold group-hover:underline">
                      Get Started →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Additional Ways to Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Link
                href="/ways-to-support"
                className="block p-8 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-2xl text-white hover:shadow-2xl transition-all group"
              >
                <h3 className="text-3xl font-bold mb-4">Ways to Support</h3>
                <p className="text-slate-100 mb-6">
                  Discover various ways you can contribute to our mission and make a lasting impact.
                </p>
                <span className="font-semibold group-hover:underline inline-flex items-center">
                  Learn More
                  <span className="ml-2">→</span>
                </span>
              </Link>

              <Link
                href="/make-a-gift"
                className="block p-8 bg-white border-2 border-[#0B334A] rounded-2xl hover:shadow-2xl transition-all group"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Make a Gift</h3>
                <p className="text-slate-700 mb-6">
                  Your contribution helps us reach more communities and create lasting impact.
                </p>
                <span className="text-[#0B334A] font-semibold group-hover:underline inline-flex items-center">
                  Donate Now
                  <span className="ml-2">→</span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
