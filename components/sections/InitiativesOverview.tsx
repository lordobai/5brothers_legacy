'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Program {
  _id: string
  title: string
  description?: string
  slug: { current: string }
  featuredImage?: SanityImageSource
  category?: string
}

interface InitiativesOverviewProps {
  programs?: Program[]
}

// Fallback initiatives
const fallbackInitiatives = [
  {
    title: 'Education Programs',
    description: 'Empowering children and youth through quality education and skill development',
    href: '/our-initiatives',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    title: 'Health & Nutrition',
    description: 'Improving healthcare access and nutrition for vulnerable communities',
    href: '/our-initiatives',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    title: 'WASH Programs',
    description: 'Providing clean water, sanitation, and hygiene solutions',
    href: '/our-initiatives',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
  },
]

export const InitiativesOverview = ({ programs = [] }: InitiativesOverviewProps) => {
  // Use CMS data if available, otherwise use fallback
  const initiatives = programs.length > 0
    ? programs.slice(0, 3).map((program) => ({
        title: program.title,
        description: program.description || '',
        href: `/our-initiatives/${program.slug?.current || '#'}`,
        image: program.featuredImage
          ? urlFor(program.featuredImage).width(800).height(600).auto('format').url()
          : 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      }))
    : fallbackInitiatives
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Our Initiatives
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive programs designed to create sustainable impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={initiative.href}
                  className="block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {initiative.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed">{initiative.description}</p>
                    <div className="mt-4 text-[#0B334A] font-semibold group-hover:underline inline-flex items-center">
                      Learn More
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/our-initiatives"
              className="inline-flex items-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Initiatives
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
