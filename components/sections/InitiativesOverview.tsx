'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

export const InitiativesOverview = () => {
  const t = useTranslations();
  
  const initiatives = [
    {
      title: t.home.initiatives.educationTitle,
      description: t.home.initiatives.educationDescription,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      link: '/our-initiatives#education',
      color: 'from-[#0B334A] to-[#0F4A6A]',
    },
    {
      title: t.home.initiatives.healthTitle,
      description: t.home.initiatives.healthDescription,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
      link: '/our-initiatives#health',
      color: 'from-green-500 to-green-600',
    },
    {
      title: t.home.initiatives.washTitle,
      description: t.home.initiatives.washDescription,
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
      link: '/our-initiatives#wash',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-900 mb-4">
            {t.home.initiatives.title}
          </h2>
          <p className="text-xl lg:text-2xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
            {t.home.initiatives.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={initiative.link}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0B334A] transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <span className="text-[#0B334A] font-semibold group-hover:underline inline-flex items-center">
                      {t.common.learnMore}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
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
          <Link href="/our-initiatives">
            <button className="px-8 py-3 bg-gradient-to-r from-[#0B334A] to-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              {t.home.initiatives.viewAll}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

