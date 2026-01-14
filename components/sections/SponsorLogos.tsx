'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Partner {
  _id: string
  organizationName: string
  logo: SanityImageSource
  website: string
  displayOrder?: number
}

interface SponsorLogosProps {
  partners?: Partner[]
}

// Fallback placeholder sponsors if no CMS data
const fallbackSponsors = [
  { name: 'Partner 1', logo: 'https://placehold.co/200x100/0B334A/FFFFFF?text=Partner+1', url: '#' },
  { name: 'Partner 2', logo: 'https://placehold.co/200x100/0F4A6A/FFFFFF?text=Partner+2', url: '#' },
  { name: 'Partner 3', logo: 'https://placehold.co/200x100/0B334A/FFFFFF?text=Partner+3', url: '#' },
  { name: 'Partner 4', logo: 'https://placehold.co/200x100/0F4A6A/FFFFFF?text=Partner+4', url: '#' },
  { name: 'Partner 5', logo: 'https://placehold.co/200x100/0B334A/FFFFFF?text=Partner+5', url: '#' },
  { name: 'Partner 6', logo: 'https://placehold.co/200x100/0F4A6A/FFFFFF?text=Partner+6', url: '#' },
]

export const SponsorLogos = ({ partners = [] }: SponsorLogosProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Use CMS data if available, otherwise use fallback
  const sponsors = partners.length > 0
    ? partners
        .filter((partner) => partner.logo) // Only include partners with logos
        .map((partner) => ({
          name: partner.organizationName,
          logo: urlFor(partner.logo).width(200).height(100).auto('format').url(),
          url: partner.website || '#',
        }))
    : fallbackSponsors

  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Together, we're creating lasting impact in communities across Africa
            </p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Content */}
            <div className="overflow-x-auto scrollbar-hide smooth-scroll pb-4 -mx-4 px-4">
              <div 
                className={`flex gap-6 lg:gap-8 ${isClient ? 'animate-scroll-horizontal' : ''}`}
                style={{
                  width: 'max-content',
                }}
              >
                {duplicatedSponsors.map((sponsor, index) => (
                  <motion.div
                    key={`${sponsor.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <Link
                      href={sponsor.url}
                      className="block p-6 lg:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 min-w-[200px] lg:min-w-[240px] h-[140px] lg:h-[160px] flex items-center justify-center group"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
