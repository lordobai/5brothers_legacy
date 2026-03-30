'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Way {
  title: string
  description: string
  icon: string
  buttonText: string
  buttonLink: string
}

interface WaysToSupportClientProps {
  ways: Way[]
}

export function WaysToSupportClient({ ways }: WaysToSupportClientProps) {
  return (
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
  )
}

