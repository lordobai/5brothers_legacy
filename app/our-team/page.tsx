'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';

export default function OurTeamPage() {
  const t = useTranslations();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = useMemo(() => [
    {
      name: 'Dr. Peter Okorie',
      role: t.ourTeam.roles.coFounder,
      bio: t.ourTeam.bios.peter,
      image: '/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG',
      email: 'peter@5brotherslegacy.org',
    },
    {
      name: 'Dr. Uwalaka Chiamaka',
      role: t.ourTeam.roles.programsManager,
      bio: t.ourTeam.bios.uwalaka,
      image: '/images/0ea2b0a7-24f7-41d0-a0b9-d90f846495bc.JPG',
      email: 'uwalaka@5brotherslegacy.org',
    },
    {
      name: 'Kalu Eke',
      role: t.ourTeam.roles.operationsManager,
      bio: t.ourTeam.bios.kalu,
      image: '/images/1b36139e-8638-46b1-8024-110cadd97814.JPG',
      email: 'kalu@5brotherslegacy.org',
    },
    {
      name: 'Kenneth Nwakwuo',
      role: t.ourTeam.roles.financeManager,
      bio: t.ourTeam.bios.kenneth,
      image: '/images/01ba7ad0-1e18-4c30-818d-60445cce4c60.JPG',
      email: 'kenneth@5brotherslegacy.org',
    },
    {
      name: 'Umeh Chukwunonso, MPH',
      role: t.ourTeam.roles.publicHealthSupplyChainAdvisor,
      bio: t.ourTeam.bios.umeh,
      image: '/images/ef91a549-c1c2-4a63-a8de-2269389d6a85.JPG',
      email: 'umeh@5brotherslegacy.org',
    },
    {
      name: 'Oyeniyi Sodimu, LLM',
      role: t.ourTeam.roles.legalAdvisor,
      bio: t.ourTeam.bios.oyeniyi,
      image: '/images/e4bad332-757a-43e8-8ebf-5b74f1d12d42.JPG',
      email: 'oyeniyi@5brotherslegacy.org',
    },
    {
      name: 'Geraldine Chinonso Mbagwu, MPH',
      role: t.ourTeam.roles.mealAdvisor,
      bio: t.ourTeam.bios.geraldine,
      image: '/images/18531ccf-8229-466f-9ba4-0b08cf871a72.JPG',
      email: 'geraldine@5brotherslegacy.org',
    },
    {
      name: 'Nkachukwu Abanobi',
      role: t.ourTeam.roles.programOfficer,
      bio: t.ourTeam.bios.nkachukwu,
      image: '/images/61c635a0-5f6a-41aa-ab9f-bc8c6d2d8ab9.JPG',
      email: 'nkachukwu@5brotherslegacy.org',
    },
  ], [t]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
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
              {t.ourTeam.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.ourTeam.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t.ourTeam.structure.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#0B334A]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t.ourTeam.structure.leadership.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.ourTeam.structure.leadership.description}
              </p>
              <ul className="space-y-3">
                {t.ourTeam.structure.leadership.roles.map((role, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0B334A] mr-3 mt-1">•</span>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Management */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#DE3C3A]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#DE3C3A] to-[#E85A5A] flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t.ourTeam.structure.management.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.ourTeam.structure.management.description}
              </p>
              <ul className="space-y-3">
                {t.ourTeam.structure.management.roles.map((role, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#DE3C3A] mr-3 mt-1">•</span>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t.ourTeam.leadership.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.ourTeam.leadership.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#0B334A] font-semibold mb-4">{member.role}</p>
                  {selectedMember === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-600 leading-relaxed"
                    >
                      <p className="mb-4">{member.bio}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#0B334A] hover:text-[#082530] font-semibold"
                      >
                        {t.ourTeam.contact} →
                      </a>
                    </motion.div>
                  ) : (
                    <p className="text-gray-600 line-clamp-2">{member.bio}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.ourTeam.joinTeam.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.ourTeam.joinTeam.subtitle}
            </p>
            <a
              href="/career"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#0B334A] to-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {t.ourTeam.joinTeam.viewPositions}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


