'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

export default function OurInitiativesPage() {
  const t = useTranslations();
  const [expandedInitiative, setExpandedInitiative] = useState<string | null>(null);

  const initiatives = [
    {
      id: 'education',
      title: t.ourInitiatives.initiatives.education.title,
      description: t.ourInitiatives.initiatives.education.description,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.education.programs.scholarship,
        t.ourInitiatives.initiatives.education.programs.infrastructure,
        t.ourInitiatives.initiatives.education.programs.teacherTraining,
        t.ourInitiatives.initiatives.education.programs.digitalLearning,
        t.ourInitiatives.initiatives.education.programs.vocational,
      ],
      impact: t.ourInitiatives.initiatives.education.impact,
    },
    {
      id: 'health',
      title: t.ourInitiatives.initiatives.health.title,
      description: t.ourInitiatives.initiatives.health.description,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.health.programs.clinics,
        t.ourInitiatives.initiatives.health.programs.nutrition,
        t.ourInitiatives.initiatives.health.programs.maternalChild,
        t.ourInitiatives.initiatives.health.programs.education,
      ],
      impact: t.ourInitiatives.initiatives.health.impact,
    },
    {
      id: 'wash',
      title: t.ourInitiatives.initiatives.wash.title,
      description: t.ourInitiatives.initiatives.wash.description,
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.wash.programs.wells,
        t.ourInitiatives.initiatives.wash.programs.sanitation,
        t.ourInitiatives.initiatives.wash.programs.hygiene,
        t.ourInitiatives.initiatives.wash.programs.monitoring,
      ],
      impact: t.ourInitiatives.initiatives.wash.impact,
    },
    {
      id: 'disaster',
      title: t.ourInitiatives.initiatives.disaster.title,
      description: t.ourInitiatives.initiatives.disaster.description,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.disaster.programs.relief,
        t.ourInitiatives.initiatives.disaster.programs.shelter,
        t.ourInitiatives.initiatives.disaster.programs.food,
        t.ourInitiatives.initiatives.disaster.programs.recovery,
      ],
      impact: t.ourInitiatives.initiatives.disaster.impact,
    },
    {
      id: 'youth',
      title: t.ourInitiatives.initiatives.youth.title,
      description: t.ourInitiatives.initiatives.youth.description,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.youth.programs.leadership,
        t.ourInitiatives.initiatives.youth.programs.entrepreneurship,
        t.ourInitiatives.initiatives.youth.programs.mentorship,
        t.ourInitiatives.initiatives.youth.programs.career,
      ],
      impact: t.ourInitiatives.initiatives.youth.impact,
    },
    {
      id: 'advocacy',
      title: t.ourInitiatives.initiatives.advocacy.title,
      description: t.ourInitiatives.initiatives.advocacy.description,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      programs: [
        t.ourInitiatives.initiatives.advocacy.programs.research,
        t.ourInitiatives.initiatives.advocacy.programs.mobilization,
        t.ourInitiatives.initiatives.advocacy.programs.engagement,
        t.ourInitiatives.initiatives.advocacy.programs.campaigns,
        t.ourInitiatives.initiatives.advocacy.programs.legal,
        t.ourInitiatives.initiatives.advocacy.programs.rights,
      ],
      impact: t.ourInitiatives.initiatives.advocacy.impact,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Initiatives"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t.ourInitiatives.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t.ourInitiatives.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives List */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto space-y-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {initiative.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-[#0B334A] font-semibold mb-2">{t.ourInitiatives.impact}: {initiative.impact}</p>
                    </div>
                    <button
                      onClick={() => setExpandedInitiative(expandedInitiative === initiative.id ? null : initiative.id)}
                      className="text-[#0B334A] hover:text-[#082530] font-semibold flex items-center"
                    >
                      {expandedInitiative === initiative.id ? t.ourInitiatives.hidePrograms : t.ourInitiatives.viewPrograms}
                      <svg
                        className={`ml-2 w-5 h-5 transform transition-transform ${expandedInitiative === initiative.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedInitiative === initiative.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 pt-6 border-t border-gray-200"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.ourInitiatives.programs}:</h3>
                        <ul className="space-y-2">
                          {initiative.programs.map((program, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#0B334A] mr-2">✓</span>
                              <span className="text-gray-700">{program}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A] text-white">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.ourInitiatives.cta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t.ourInitiatives.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/make-a-gift"
                className="px-8 py-4 bg-white text-[#0B334A] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                {t.ourInitiatives.cta.donate}
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                {t.ourInitiatives.cta.getInvolved}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



