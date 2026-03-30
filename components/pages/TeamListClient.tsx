'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'
import { blocksToText } from '@/lib/utils'
import type { SanityImageSource } from '@/lib/sanity/client'

interface TeamMember {
  _id: string
  name: string
  role: string
  department?: string
  photo?: SanityImageSource
  bio?: any // Portable Text from Sanity
  email?: string
}

interface TeamListClientProps {
  teamMembers: TeamMember[]
}

export function TeamListClient({ teamMembers }: TeamListClientProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center overflow-hidden"
              >
                {member.photo ? (
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={urlFor(member.photo).width(600).fit('max').auto('format').url()}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] flex items-center justify-center">
                    <span className="text-6xl text-white font-bold">
                      {member.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-[#0B334A] font-semibold mb-4">{member.role}</p>
                  {member.bio && (
                    <p className="text-slate-600 text-sm mb-4">
                      {typeof member.bio === 'string' 
                        ? member.bio 
                        : blocksToText(member.bio)}
                    </p>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-[#0B334A] hover:underline"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


