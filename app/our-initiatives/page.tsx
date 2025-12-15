'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const initiatives = [
  {
    id: 'education',
    title: 'Education Programs',
    description: 'Empowering children and youth through quality education and skill development',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    programs: [
      'Scholarship Programs',
      'School Infrastructure Development',
      'Teacher Training & Support',
      'Digital Learning Initiatives',
      'Vocational Skills Training',
    ],
    impact: '12,500+ students supported',
  },
  {
    id: 'health',
    title: 'Health & Nutrition Programs',
    description: 'Improving healthcare access and nutrition for vulnerable communities',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    programs: [
      'Community Health Clinics',
      'Nutrition Programs',
      'Maternal & Child Health',
      'Health Education & Awareness',
    ],
    impact: '30+ health facilities established',
  },
  {
    id: 'wash',
    title: 'WASH (Clean Water, Better Lives)',
    description: 'Providing clean water, sanitation, and hygiene solutions',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
    programs: [
      'Water Well Installation',
      'Sanitation Facilities',
      'Hygiene Education',
      'Water Quality Monitoring',
    ],
    impact: '50,000+ people with clean water access',
  },
  {
    id: 'disaster',
    title: 'Disaster Response',
    description: 'Rapid response and recovery support for communities affected by disasters',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    programs: [
      'Emergency Relief',
      'Shelter & Housing',
      'Food Security',
      'Recovery & Rebuilding',
    ],
    impact: '15,000+ families assisted',
  },
  {
    id: 'youth',
    title: 'Youth Empowerment',
    description: 'Empowering young people with skills, opportunities, and mentorship',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    programs: [
      'Leadership Training',
      'Entrepreneurship Programs',
      'Mentorship Networks',
      'Career Development',
    ],
    impact: '5,000+ youth empowered',
  },
  {
    id: 'advocacy',
    title: 'Advocacy & Policy Influence',
    description: 'Advocating for policies that support vulnerable communities',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    programs: [
      'Policy Research',
      'Community Mobilization',
      'Stakeholder Engagement',
      'Awareness Campaigns',
      'Legal Support',
      'Rights Education',
    ],
    impact: '10+ policy changes influenced',
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Evaluation',
    description: 'Ensuring program effectiveness and continuous improvement',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    programs: [
      'Impact Assessment',
      'Data Collection & Analysis',
      'Program Evaluation',
      'Learning & Adaptation',
    ],
    impact: '100% program accountability',
  },
];

export default function OurInitiativesPage() {
  const [expandedInitiative, setExpandedInitiative] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
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
              Our Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive programs designed to create sustainable impact in communities
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
                      <p className="text-blue-600 font-semibold mb-2">Impact: {initiative.impact}</p>
                    </div>
                    <button
                      onClick={() => setExpandedInitiative(expandedInitiative === initiative.id ? null : initiative.id)}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      {expandedInitiative === initiative.id ? 'Hide' : 'View'} Programs
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Programs:</h3>
                        <ul className="space-y-2">
                          {initiative.programs.map((program, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2">✓</span>
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
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Support Our Initiatives
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Your support helps us expand our programs and reach more communities in need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/make-a-gift"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


