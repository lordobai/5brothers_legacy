'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';

export default function OurTeamPage() {
  const t = useTranslations();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Dr. John Okonkwo',
      role: t.ourTeam.roles.executiveDirector,
      bio: t.ourTeam.bios.john,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      email: 'john@5brotherslegacy.org',
    },
    {
      name: 'Sarah Adebayo',
      role: t.ourTeam.roles.programDirector,
      bio: t.ourTeam.bios.sarah,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      email: 'sarah@5brotherslegacy.org',
    },
    {
      name: 'Michael Chukwu',
      role: t.ourTeam.roles.financeDirector,
      bio: t.ourTeam.bios.michael,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      email: 'michael@5brotherslegacy.org',
    },
    {
      name: 'Amina Hassan',
      role: t.ourTeam.roles.educationCoordinator,
      bio: t.ourTeam.bios.amina,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      email: 'amina@5brotherslegacy.org',
    },
    {
      name: 'Scott Murphree',
      role: t.ourTeam.roles.educationProgramLead,
      bio: t.ourTeam.bios.scott,
      image: '/images/better.png',
      email: 'scott@5brotherslegacy.org',
    },
    {
      name: 'David Okafor',
      role: t.ourTeam.roles.healthProgramsManager,
      bio: t.ourTeam.bios.david,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      email: 'david@5brotherslegacy.org',
    },
    {
      name: 'Grace Nwosu',
      role: t.ourTeam.roles.communityOutreachCoordinator,
      bio: t.ourTeam.bios.grace,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      email: 'grace@5brotherslegacy.org',
    },
  ];

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
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t.ourTeam.hero.subtitle}
            </p>
          </motion.div>
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
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
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


