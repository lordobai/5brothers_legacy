'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function GetInvolvedPage() {
  const [activeForm, setActiveForm] = useState<string | null>('volunteer')

  const options = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      subtitle: 'Step In, Stand Up',
      description: 'Join our team of dedicated volunteers and make a difference on the ground. Your time and skills can transform lives.',
      formTitle: 'Volunteer - Step In, Stand Up',
      formDescription: 'Join our team of dedicated volunteers and make a difference on the ground. Your time and skills can transform lives.',
    },
    {
      id: 'partner',
      title: 'Partner',
      subtitle: 'Building a Better Future, Side by Side',
      description: 'Collaborate with us to amplify our impact. Together, we can reach more communities and create lasting change.',
      formTitle: 'Partner - Building a Better Future, Side by Side',
      formDescription: 'Collaborate with us to amplify our impact. Together, we can reach more communities and create lasting change.',
    },
    {
      id: 'advocate',
      title: 'Advocate',
      subtitle: 'Stand, Speak, Inspire',
      description: 'Use your voice to raise awareness and advocate for vulnerable communities. Be a champion for change.',
      formTitle: 'Advocate - Stand, Speak, Inspire',
      formDescription: 'Use your voice to raise awareness and advocate for vulnerable communities. Be a champion for change.',
    },
  ]

  const handleCardClick = (id: string) => {
    setActiveForm(activeForm === id ? null : id)
  }

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault()
    // Handle form submission here
    console.log(`Submitting ${formType} form`)
    // You can add API call here
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
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
                  key={option.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleCardClick(option.id)}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 cursor-pointer ${
                    activeForm === option.id ? 'border-[#0B334A]' : 'border-gray-100'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.title}</h3>
                  {option.subtitle && (
                    <p className="text-lg text-[#0B334A] font-semibold mb-4">{option.subtitle}</p>
                  )}
                  <p className="text-slate-600 leading-relaxed">{option.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Form Section - Centered and Full Width */}
            <AnimatePresence>
              {activeForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#0B334A]">
                    {activeForm && (
                      <>
                        <div className="mb-8">
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            {options.find(opt => opt.id === activeForm)?.formTitle}
                          </h3>
                          <p className="text-lg text-slate-700 leading-relaxed">
                            {options.find(opt => opt.id === activeForm)?.formDescription}
                          </p>
                        </div>
                        {activeForm === 'volunteer' && (
                          <form onSubmit={(e) => handleSubmit(e, 'volunteer')} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="availability" className="block text-sm font-semibold text-slate-900 mb-2">
                            Availability
                          </label>
                          <p className="text-sm text-slate-600 mb-2">When are you available to volunteer?</p>
                          <textarea
                            id="availability"
                            name="availability"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="skills" className="block text-sm font-semibold text-slate-900 mb-2">
                            Skills & Interests
                          </label>
                          <p className="text-sm text-slate-600 mb-2">Tell us about your skills and what areas interest you</p>
                          <textarea
                            id="skills"
                            name="skills"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                            Message
                          </label>
                          <p className="text-sm text-slate-600 mb-2">Tell us more about how you&apos;d like to get involved</p>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Submit
                        </button>
                      </form>
                        )}
                        {activeForm === 'partner' && (
                      <form onSubmit={(e) => handleSubmit(e, 'partner')} className="space-y-6">
                        <div>
                          <label htmlFor="partner-name" className="block text-sm font-semibold text-slate-900 mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="partner-name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="partner-email" className="block text-sm font-semibold text-slate-900 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="partner-email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="partner-phone" className="block text-sm font-semibold text-slate-900 mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="partner-phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="organization" className="block text-sm font-semibold text-slate-900 mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="partnership-type" className="block text-sm font-semibold text-slate-900 mb-2">
                            Partnership Type
                          </label>
                          <select
                            id="partnership-type"
                            name="partnershipType"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          >
                            <option value="">Select partnership type</option>
                            <option value="financial-support">Financial Support</option>
                            <option value="in-kind">In-Kind Support</option>
                            <option value="program-partnership">Program Partnership</option>
                            <option value="strategic-partnership">Strategic Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="partner-message" className="block text-sm font-semibold text-slate-900 mb-2">
                            Message
                          </label>
                          <p className="text-sm text-slate-600 mb-2">Tell us more about how you&apos;d like to get involved</p>
                          <textarea
                            id="partner-message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Submit
                        </button>
                      </form>
                        )}
                        {activeForm === 'advocate' && (
                      <form onSubmit={(e) => handleSubmit(e, 'advocate')} className="space-y-6">
                        <div>
                          <label htmlFor="advocate-name" className="block text-sm font-semibold text-slate-900 mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="advocate-name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="advocate-email" className="block text-sm font-semibold text-slate-900 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="advocate-email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="advocate-phone" className="block text-sm font-semibold text-slate-900 mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="advocate-phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="platform" className="block text-sm font-semibold text-slate-900 mb-2">
                            Platform
                          </label>
                          <p className="text-sm text-slate-600 mb-2">Social media, blog, community, etc.</p>
                          <input
                            type="text"
                            id="platform"
                            name="platform"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="advocate-message" className="block text-sm font-semibold text-slate-900 mb-2">
                            Message
                          </label>
                          <p className="text-sm text-slate-600 mb-2">Tell us more about how you&apos;d like to get involved</p>
                          <textarea
                            id="advocate-message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Submit
                        </button>
                      </form>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}
