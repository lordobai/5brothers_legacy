'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const updates = [
  {
    title: 'New School Opens in Rural Community',
    excerpt: 'We are thrilled to announce the opening of our new primary school, providing quality education to over 200 children.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    date: 'March 15, 2024',
    category: 'Education',
    link: '/updates/new-school-opens',
  },
  {
    title: 'Health Clinic Expansion Project',
    excerpt: 'Our health clinic expansion is now complete, offering comprehensive healthcare services to 5,000+ community members.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    date: 'March 10, 2024',
    category: 'Health',
    link: '/updates/health-clinic-expansion',
  },
  {
    title: 'Clean Water Initiative Success',
    excerpt: 'We have successfully installed 10 new water wells, bringing clean water access to 3,000 people in remote villages.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    date: 'March 5, 2024',
    category: 'WASH',
    link: '/updates/clean-water-initiative',
  },
];

export const LatestUpdates = () => {
  return (
    <section className="section-padding bg-slate-100">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-900 mb-4">
            Latest Updates & Events
          </h2>
          <p className="text-xl lg:text-2xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
            Stay informed about our latest projects and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={update.link}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {update.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-sm text-slate-600 mb-2">{update.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {update.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {update.excerpt}
                    </p>
                    <span className="text-indigo-600 font-semibold group-hover:underline inline-flex items-center">
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
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
          <Link href="/updates-events">
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all">
              View All Updates
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

