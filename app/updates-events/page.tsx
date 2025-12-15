'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const updates = [
  {
    id: 1,
    title: 'New School Opens in Rural Community',
    category: 'Education',
    date: 'March 15, 2024',
    excerpt: 'We are thrilled to announce the opening of our new primary school, providing quality education to over 200 children in a remote community.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    content: 'Full article content here...',
  },
  {
    id: 2,
    title: 'Health Clinic Expansion Project Complete',
    category: 'Health',
    date: 'March 10, 2024',
    excerpt: 'Our health clinic expansion is now complete, offering comprehensive healthcare services to 5,000+ community members.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: 'Full article content here...',
  },
  {
    id: 3,
    title: 'Clean Water Initiative Success',
    category: 'WASH',
    date: 'March 5, 2024',
    excerpt: 'We have successfully installed 10 new water wells, bringing clean water access to 3,000 people in remote villages.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    content: 'Full article content here...',
  },
  {
    id: 4,
    title: 'Youth Empowerment Program Launch',
    category: 'Youth',
    date: 'February 28, 2024',
    excerpt: 'Launching our new youth empowerment program to train 1,000 young people in entrepreneurship and leadership skills.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    content: 'Full article content here...',
  },
];

export default function UpdatesEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Education', 'Health', 'WASH', 'Youth', 'Events'];

  const filteredUpdates = selectedCategory === 'All'
    ? updates
    : updates.filter(update => update.category === selectedCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Updates & Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about our latest projects, events, and community impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredUpdates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Link href={`/updates-events/${update.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {update.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{update.title}</h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{update.excerpt}</p>
                    <span className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


