'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const values = [
  {
    icon: 'target' as const,
    title: 'Our Mission',
    description: 'Hope for sustainable lives through education, healthcare, and empowerment',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: 'sparkles' as const,
    title: 'Our Vision',
    description: 'Thriving communities built on safety, equality, and opportunity for all',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: 'trendingUp' as const,
    title: 'Our Impact',
    description: 'Creating lasting positive change in vulnerable communities across Africa',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
  },
];

export const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto"
        >
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-900 mb-4">
              About 5Brothers Legacy Initiative
            </h2>
            <p className="text-xl lg:text-2xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
              We are dedicated to empowering vulnerable communities with equal opportunities, 
              safe lives, quality education, better health, and clean water.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`${value.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-transparent hover:border-gray-200`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-md`}>
                    <Icon name={value.icon} size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link 
              href="/who-we-are" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg group"
            >
              Learn More About Us
              <Icon name="arrowRight" size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

