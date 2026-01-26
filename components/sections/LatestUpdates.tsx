'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Post {
  _id: string
  title: string
  subtitle?: string
  excerpt?: string
  slug: { current: string }
  featuredImage?: SanityImageSource
  publishedAt: string
  category?: string
  ctaLink?: string
  ctaText?: string
}

interface LatestUpdatesProps {
  posts?: Post[]
}

// Fallback placeholder data
const fallbackUpdates = [
  {
    title: 'Community Impact Story',
    excerpt: 'Learn how our programs are making a difference in local communities across Africa. Read about the transformative journey of families and children.',
    date: '2025-01-10',
    href: '/updates-events',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  },
  {
    title: 'New Initiative Launch',
    excerpt: 'We\'re excited to announce our latest program focusing on education and youth empowerment. Join us in this mission.',
    date: '2025-01-05',
    href: '/updates-events',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    title: 'Upcoming Community Event',
    excerpt: 'Join us for our upcoming community event where we\'ll celebrate our achievements and share plans for the future.',
    date: '2025-01-15',
    href: '/updates-events',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  },
]

export const LatestUpdates = ({ posts = [] }: LatestUpdatesProps) => {
  // Use CMS data if available, otherwise use fallback
  const updates = posts.length > 0
    ? posts.slice(0, 3).map((post) => ({
        title: post.title,
        excerpt: post.excerpt || post.subtitle || '',
        date: post.publishedAt,
        href: post.ctaLink || `/updates-events/${post.slug?.current || '#'}`,
        image: post.featuredImage
          ? urlFor(post.featuredImage).width(800).height(600).auto('format').url()
          : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
        ctaText: post.ctaText,
      }))
    : fallbackUpdates
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Latest Updates & Events
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Stay informed about our latest projects and community impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {updates.map((update, index) => {
              const isExternalLink = update.href.startsWith('http')
              
              const cardContent = (
                <>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-white/90 mb-2 font-medium">
                        {new Date(update.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                        {update.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {update.excerpt && update.excerpt.trim() && (
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {update.excerpt.length > 100 
                          ? `${update.excerpt.substring(0, 100).trim()}...` 
                          : update.excerpt}
                      </p>
                    )}
                    <div className="text-[#0B334A] font-semibold group-hover:underline inline-flex items-center">
                      {update.ctaText || 'Read More'}
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </>
              )
              
              return (
                <motion.div
                  key={update.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {isExternalLink ? (
                    <a
                      href={update.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      href={update.href}
                      className="block overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                    >
                      {cardContent}
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/updates-events"
              className="inline-flex items-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Updates & Events
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
