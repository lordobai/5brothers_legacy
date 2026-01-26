'use client'

import { motion } from 'framer-motion'
import { blocksToText } from '@/lib/utils'

interface Testimonial {
  _id: string
  name?: string
  role?: string
  organization?: string
  quote?: any[] // Block array from Sanity
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  // Format attribution: "Role, Organization" or just "Role" or "Organization"
  const formatAttribution = (testimonial: Testimonial) => {
    const parts: string[] = []
    if (testimonial.role) parts.push(testimonial.role)
    if (testimonial.organization) parts.push(testimonial.organization)
    return parts.length > 0 ? parts.join(', ') : testimonial.name || ''
  }

  // Extract quote text from block array
  const getQuoteText = (quote: any[]): string => {
    if (!quote || !Array.isArray(quote)) return ''
    return blocksToText(quote)
  }

  // Use fallback testimonials if CMS is empty
  const displayTestimonials = testimonials.length > 0
    ? testimonials.slice(0, 3) // Show max 3 testimonials
    : [
        {
          _id: 'fallback-1',
          quote: [{ _type: 'block', children: [{ text: "Your donations helped build our new school. Our children now have access to quality education." }] }],
          role: 'Community Leader',
          organization: 'Imo State',
        },
        {
          _id: 'fallback-2',
          quote: [{ _type: 'block', children: [{ text: "The health clinic you supported saved my daughter's life. Thank you for making healthcare accessible." }] }],
          role: 'Mother',
          organization: 'Rural Community',
        },
        {
          _id: 'fallback-3',
          quote: [{ _type: 'block', children: [{ text: "Clean water changed everything for our village. We're healthier and more productive now." }] }],
          role: 'Village Elder',
          organization: 'Enugu State',
        },
      ]

  return (
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
        {displayTestimonials.map((testimonial, index) => {
          const quoteText = getQuoteText(testimonial.quote || [])
          const attribution = formatAttribution(testimonial)
          
          return (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                &quot;{quoteText}&quot;
              </p>
              <p className="text-slate-600 font-semibold">
                — {attribution}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

