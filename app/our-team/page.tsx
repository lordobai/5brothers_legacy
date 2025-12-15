'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Dr. John Okonkwo',
    role: 'Executive Director',
    bio: 'With over 15 years of experience in community development, Dr. Okonkwo leads our organization with passion and dedication.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    email: 'john@5brotherslegacy.org',
  },
  {
    name: 'Sarah Adebayo',
    role: 'Program Director',
    bio: 'Sarah oversees all program implementation and ensures our initiatives create lasting impact in communities.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    email: 'sarah@5brotherslegacy.org',
  },
  {
    name: 'Michael Chukwu',
    role: 'Finance Director',
    bio: 'Michael manages our financial operations and ensures transparency and accountability in all our activities.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    email: 'michael@5brotherslegacy.org',
  },
  {
    name: 'Amina Hassan',
    role: 'Education Coordinator',
    bio: 'Amina designs and implements our education programs, bringing quality learning opportunities to underserved communities.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    email: 'amina@5brotherslegacy.org',
  },
  {
    name: 'David Okafor',
    role: 'Health Programs Manager',
    bio: 'David leads our health and nutrition initiatives, working to improve healthcare access across rural communities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: 'david@5brotherslegacy.org',
  },
  {
    name: 'Grace Nwosu',
    role: 'Community Outreach Coordinator',
    bio: 'Grace builds relationships with communities and ensures our programs meet local needs and priorities.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    email: 'grace@5brotherslegacy.org',
  },
];

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated professionals working tirelessly to create positive change
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise, passion, and commitment to drive our mission forward
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
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  {selectedMember === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-600 leading-relaxed"
                    >
                      <p className="mb-4">{member.bio}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Contact →
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
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re always looking for passionate individuals who share our vision of creating lasting change
            </p>
            <a
              href="/career"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


