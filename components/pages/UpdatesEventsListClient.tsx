'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Update {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  href: string
}

interface UpdatesEventsListClientProps {
  updates: Update[]
}

export function UpdatesEventsListClient({ updates }: UpdatesEventsListClientProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <Link href={update.href}>
                  <div className="relative h-64">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    {update.date && (
                      <div className="text-xs text-[#0B334A] font-semibold mb-2">
                        {new Date(update.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{update.title}</h3>
                    {update.excerpt && (
                      <p className="text-slate-600 mb-4">{update.excerpt}</p>
                    )}
                    <div className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                      Read More
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

