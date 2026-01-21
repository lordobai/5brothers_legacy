'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Update {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  href: string
}

interface Event extends Update {
  location?: string
}

interface UpdatesEventsListClientProps {
  posts: Update[]
  events: Event[]
}

export function UpdatesEventsListClient({ posts, events }: UpdatesEventsListClientProps) {
  const [visiblePostsCount, setVisiblePostsCount] = useState(6)
  const [visibleEventsCount, setVisibleEventsCount] = useState(6)
  const itemsPerPage = 6

  const visiblePosts = posts.slice(0, visiblePostsCount)
  const visibleEvents = events.slice(0, visibleEventsCount)
  const hasMorePosts = posts.length > visiblePostsCount
  const hasMoreEvents = events.length > visibleEventsCount

  const loadMorePosts = () => {
    setVisiblePostsCount((prev) => Math.min(prev + itemsPerPage, posts.length))
  }

  const loadMoreEvents = () => {
    setVisibleEventsCount((prev) => Math.min(prev + itemsPerPage, events.length))
  }

  return (
    <>
      {/* Updates Section */}
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
                Latest Updates
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Stay informed about our latest projects, stories, and community impact
              </p>
            </motion.div>

            {visiblePosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {visiblePosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      <Link href={post.href}>
                        <div className="relative h-64">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          {post.date && (
                            <div className="text-xs text-[#0B334A] font-semibold mb-2">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </div>
                          )}
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{post.title}</h3>
                          {post.excerpt && (
                            <p className="text-slate-600 mb-4">{post.excerpt}</p>
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

                {hasMorePosts && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-8"
                  >
                    <button
                      onClick={loadMorePosts}
                      className="px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Load More Updates
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <p>No updates available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
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
                Upcoming Events
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Join us for upcoming events, workshops, and community gatherings
              </p>
            </motion.div>

            {visibleEvents.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {visibleEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      <Link href={event.href}>
                        <div className="relative h-64">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          {event.date && (
                            <div className="text-xs text-[#0B334A] font-semibold mb-2">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </div>
                          )}
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
                          {event.location && (
                            <div className="text-sm text-slate-600 mb-2 flex items-center">
                              <span className="mr-2">📍</span>
                              {event.location}
                            </div>
                          )}
                          {event.excerpt && (
                            <p className="text-slate-600 mb-4">{event.excerpt}</p>
                          )}
                          <div className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                            Learn More
                            <span className="ml-2">→</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {hasMoreEvents && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-8"
                  >
                    <button
                      onClick={loadMoreEvents}
                      className="px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Load More Events
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <p>No upcoming events at this time. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
