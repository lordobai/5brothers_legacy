'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const involvementTypes = [
  {
    id: 'volunteer',
    title: 'Volunteer',
    subtitle: 'Step In, Stand Up',
    description: 'Join our team of dedicated volunteers and make a difference on the ground. Your time and skills can transform lives.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    fields: ['name', 'email', 'phone', 'availability', 'skills', 'interests'],
  },
  {
    id: 'partner',
    title: 'Partner',
    subtitle: 'Building a Better Future, Side by Side',
    description: 'Collaborate with us to amplify our impact. Together, we can reach more communities and create lasting change.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    fields: ['name', 'email', 'phone', 'organization', 'partnershipType', 'message'],
  },
  {
    id: 'advocate',
    title: 'Advocate',
    subtitle: 'Stand, Speak, Inspire',
    description: 'Use your voice to raise awareness and advocate for vulnerable communities. Be a champion for change.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    fields: ['name', 'email', 'phone', 'platform', 'message'],
  },
];

export default function GetInvolvedPage() {
  const [selectedType, setSelectedType] = useState<string>('volunteer');
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const currentType = involvementTypes.find(t => t.id === selectedType)!;

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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join us in creating positive change. Every action counts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Involvement Types */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {involvementTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedType(type.id)}
                className={`text-left p-6 rounded-2xl transition-all ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-xl'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-sm opacity-80 mb-4">{type.subtitle}</p>
                <p className={selectedType === type.id ? 'text-blue-50' : 'text-gray-600'}>
                  {type.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentType.title} - {currentType.subtitle}
                </h2>
                <p className="text-gray-600">{currentType.description}</p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-semibold">Thank you! We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {selectedType === 'volunteer' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="When are you available to volunteer?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Skills & Interests</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell us about your skills and what areas interest you"
                        />
                      </div>
                    </>
                  )}
                  {selectedType === 'partner' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option>Financial Support</option>
                          <option>Program Collaboration</option>
                          <option>Resource Sharing</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </>
                  )}
                  {selectedType === 'advocate' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Social media, blog, community, etc."
                        />
                      </div>
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us more about how you'd like to get involved"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    Submit
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


