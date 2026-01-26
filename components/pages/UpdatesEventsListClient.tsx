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
  category?: string
  ctaText?: string
}

interface Event extends Update {
  location?: string
  eventType?: string
  status?: string
  isInternal?: boolean
}

interface UpdatesEventsListClientProps {
  posts: Update[]
  events: Event[]
}

export function UpdatesEventsListClient({ posts, events }: UpdatesEventsListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<string>('All')
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('All')
  const [visiblePostsCount, setVisiblePostsCount] = useState(6)
  const [visibleEventsCount, setVisibleEventsCount] = useState(6)
  const itemsPerPage = 6

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => 
        post.category?.toLowerCase() === selectedCategory.toLowerCase()
      )

  // Filter events by time and type
  const now = new Date()
  const filteredEvents = events.filter(event => {
    // Time filter
    if (selectedTimeFilter !== 'All') {
      if (!event.date) return false
      const eventDate = new Date(event.date)
      if (selectedTimeFilter === 'Upcoming' && eventDate < now) return false
      if (selectedTimeFilter === 'Past' && eventDate >= now) return false
    }
    
    // Type filter
    if (selectedTypeFilter !== 'All') {
      if (selectedTypeFilter === 'Internal' && !event.isInternal) return false
      if (selectedTypeFilter === 'External' && event.isInternal) return false
    }
    
    return true
  })

  const visiblePosts = filteredPosts.slice(0, visiblePostsCount)
  const visibleEvents = filteredEvents.slice(0, visibleEventsCount)
  const hasMorePosts = filteredPosts.length > visiblePostsCount
  const hasMoreEvents = filteredEvents.length > visibleEventsCount

  // Reset visible count when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisiblePostsCount(6) // Reset to initial count
  }

  // Reset visible count when event filters change
  const handleTimeFilterChange = (filter: string) => {
    setSelectedTimeFilter(filter)
    setVisibleEventsCount(6) // Reset to initial count
  }

  const handleTypeFilterChange = (filter: string) => {
    setSelectedTypeFilter(filter)
    setVisibleEventsCount(6) // Reset to initial count
  }

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
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
                Stay informed about our latest projects, stories, and community impact
              </p>
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['All', 'Education', 'Health', 'WASH', 'Disaster', 'Youth', 'Advocacy'].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-[#0B334A] text-white shadow-lg'
                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#0B334A] hover:text-[#0B334A]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
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
                      {post.href.startsWith('http') ? (
                        <a
                          href={post.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
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
                            {post.excerpt && post.excerpt.trim() && (
                              <p className="text-slate-600 mb-4 line-clamp-3">
                                {post.excerpt.length > 150 
                                  ? `${post.excerpt.substring(0, 150).trim()}...` 
                                  : post.excerpt}
                              </p>
                            )}
                            <div className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                              {post.ctaText || 'Read More'}
                              <span className="ml-2">→</span>
                            </div>
                          </div>
                        </a>
                      ) : (
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
                            {post.excerpt && post.excerpt.trim() && (
                              <p className="text-slate-600 mb-4 line-clamp-3">
                                {post.excerpt.length > 150 
                                  ? `${post.excerpt.substring(0, 150).trim()}...` 
                                  : post.excerpt}
                              </p>
                            )}
                            <div className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                              {post.ctaText || 'Read More'}
                              <span className="ml-2">→</span>
                            </div>
                          </div>
                        </Link>
                      )}
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
                <p>
                  {selectedCategory === 'All'
                    ? 'No updates available at this time.'
                    : `No ${selectedCategory} updates available at this time.`}
                </p>
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
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Events
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
                Upcoming and past events relevant to our community
              </p>
              
              {/* Event Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {/* Time Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="text-sm font-semibold text-slate-700 self-center">Time:</span>
                  {['All', 'Upcoming', 'Past'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleTimeFilterChange(filter)}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                        selectedTimeFilter === filter
                          ? 'bg-[#0B334A] text-white shadow-lg'
                          : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#0B334A] hover:text-[#0B334A]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                
                {/* Type Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="text-sm font-semibold text-slate-700 self-center">Type:</span>
                  {['All', 'Internal', 'External'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleTypeFilterChange(filter)}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                        selectedTypeFilter === filter
                          ? 'bg-[#0B334A] text-white shadow-lg'
                          : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#0B334A] hover:text-[#0B334A]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {filteredEvents.length > 0 ? (
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
                            <p className="text-slate-600 mb-4 line-clamp-3">
                              {event.excerpt.length > 150 
                                ? `${event.excerpt.substring(0, 150).trim()}...` 
                                : event.excerpt}
                            </p>
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
                <p>
                  {selectedTimeFilter === 'All' && selectedTypeFilter === 'All'
                    ? 'No events available at this time. Check back soon!'
                    : `No events match the selected filters.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Photo Gallery Section */}
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
                Event Photo Gallery
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Capturing memorable moments from our events and community engagements
              </p>
            </motion.div>

            {/* Photo Gallery Grid */}
            {events.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {events.slice(0, 8).map((event, index) => (
                  <motion.div
                    key={`gallery-${event.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-semibold line-clamp-2">{event.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">📸</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">No Event Photos Available</h3>
                <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                  We are currently preparing our event photo gallery. Please check back soon for photos from our events and community engagements.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
