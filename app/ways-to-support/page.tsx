'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/contexts/LanguageContext';

export default function WaysToSupportPage() {
  const t = useTranslations();
  const supportMethods = [
    {
      id: 'fund',
      title: t.waysToSupport.methods.fund.title,
      description: t.waysToSupport.methods.fund.description,
      icon: '💰',
      action: t.waysToSupport.methods.fund.action,
      link: '/make-a-gift',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'voice',
      title: t.waysToSupport.methods.voice.title,
      description: t.waysToSupport.methods.voice.description,
      icon: '📢',
      action: t.waysToSupport.methods.voice.action,
      link: '/get-involved',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'project',
      title: t.waysToSupport.methods.project.title,
      description: t.waysToSupport.methods.project.description,
      icon: '🎯',
      action: t.waysToSupport.methods.project.action,
      link: '/our-initiatives',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'collaborate',
      title: t.waysToSupport.methods.collaborate.title,
      description: t.waysToSupport.methods.collaborate.description,
      icon: '🤝',
      action: t.waysToSupport.methods.collaborate.action,
      link: '/get-involved',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'products',
      title: t.waysToSupport.methods.products.title,
      description: t.waysToSupport.methods.products.description,
      icon: '🛍️',
      action: t.waysToSupport.methods.products.action,
      link: '/make-a-gift',
      color: 'from-pink-500 to-rose-500',
    },
  ];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t.waysToSupport.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.waysToSupport.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {supportMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${method.color}`} />
                <div className="p-8">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
                  <Link
                    href={method.link}
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all`}
                  >
                    {method.action}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.waysToSupport.impactStories.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.waysToSupport.impactStories.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { quote: t.waysToSupport.stories.story1.quote, author: t.waysToSupport.stories.story1.author },
              { quote: t.waysToSupport.stories.story2.quote, author: t.waysToSupport.stories.story2.author },
              { quote: t.waysToSupport.stories.story3.quote, author: t.waysToSupport.stories.story3.author },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;{story.quote}&rdquo;</p>
                <p className="text-gray-600 font-semibold">— {story.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


