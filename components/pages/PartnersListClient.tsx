'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'
import { blocksToText } from '@/lib/utils'
import type { SanityImageSource } from '@/lib/sanity/client'

interface Partner {
  _id: string
  organizationName: string
  logo: SanityImageSource | null
  website: string
  partnerType?: string
  description?: any // Portable Text from Sanity
}

interface PartnersListClientProps {
  partners: Partner[]
}

export function PartnersListClient({ partners }: PartnersListClientProps) {
  return (
    <section className="pt-16 pb-0 bg-white">
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
              Trusted Partnerships
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              We collaborate with organizations, governments, and communities to amplify our impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                {partner.logo ? (
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={urlFor(partner.logo).width(600).fit('max').auto('format').url()}
                      alt={partner.organizationName}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] flex items-center justify-center">
                    <span className="text-6xl">🤝</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{partner.organizationName}</h3>
                  {partner.partnerType && (
                    <p className="text-[#0B334A] font-semibold mb-3 capitalize">{partner.partnerType}</p>
                  )}
                  {partner.description && (
                    <p className="text-slate-600">
                      {typeof partner.description === 'string' 
                        ? partner.description 
                        : blocksToText(partner.description)}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner Section - Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full bg-gradient-to-br from-primary-100 to-accent-100 pt-16 pb-16"
      >
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">Become a Partner</h3>
            <p className="text-xl text-neutral-700 mb-8">
              Join us in creating lasting change. We welcome partnerships with organizations that share our vision
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

