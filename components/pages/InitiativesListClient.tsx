'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Initiative {
  id: string
  title: string
  description: string
  image: string
  programs: string[]
  impact: string
  slug?: string
}

interface InitiativesListClientProps {
  initiatives: Initiative[]
}

export function InitiativesListClient({ initiatives }: InitiativesListClientProps) {
  const [expandedPrograms, setExpandedPrograms] = useState<Record<string, boolean>>({})

  const togglePrograms = (id: string) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <>
      {/* Initiatives List */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto space-y-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {initiative.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>
                    {initiative.impact && (
                      <div className="mb-6">
                        <p className="text-[#0B334A] font-semibold mb-2">Impact: {initiative.impact}</p>
                      </div>
                    )}
                    {initiative.programs.length > 0 && (
                      <div className="mb-6">
                        <button
                          onClick={() => togglePrograms(initiative.id)}
                          className="flex items-center justify-between w-full text-xl font-semibold text-gray-900 mb-4 hover:text-[#0B334A] transition-colors"
                        >
                          <span>Programs:</span>
                          <span className="text-sm font-normal text-gray-600 flex items-center gap-1">
                            {expandedPrograms[initiative.id] ? 'Hide Programs' : 'Show Programs'}
                            {expandedPrograms[initiative.id] ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </span>
                        </button>
                        {expandedPrograms[initiative.id] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2"
                          >
                            {initiative.programs.map((program, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-[#0B334A] mr-2">✓</span>
                                <span className="text-gray-700">{program}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Our Initiatives Section */}
      <section className="section-padding bg-gradient-to-br from-primary-100 to-accent-100">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Our Initiatives
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your support helps us expand our programs and reach more communities in need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/make-a-gift"
                className="px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

