'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Partner {
  _id: string
  organizationName: string
  logo: SanityImageSource | null
  website: string
  partnerType?: string
  description?: string
}

interface PartnersListClientProps {
  partners: Partner[]
}

export function PartnersListClient({ partners }: PartnersListClientProps) {
  return (
    <section className="section-padding bg-white">
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
              Working Together for Greater Impact
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our partnerships are the foundation of our success. We collaborate with organizations, corporations, foundations, and individuals who share our commitment to creating positive change.
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                {partner.logo ? (
                  <div className="w-20 h-20 mb-6 relative">
                    <Image
                      src={urlFor(partner.logo).width(200).height(200).auto('format').url()}
                      alt={partner.organizationName}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-xl flex items-center justify-center mb-6">
                    <span className="text-4xl">🤝</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{partner.organizationName}</h3>
                {partner.partnerType && (
                  <p className="text-[#0B334A] font-semibold mb-3 capitalize">{partner.partnerType}</p>
                )}
                {partner.description && (
                  <p className="text-slate-600">{partner.description}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Join us in creating lasting change. Whether you're a corporation, NGO, foundation, or individual, we'd love to explore how we can work together.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0B334A] font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Partner With Us
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

