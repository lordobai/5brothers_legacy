'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/contexts/LanguageContext';

export default function GetInvolvedPage() {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>('volunteer');
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const involvementTypes = [
    {
      id: 'volunteer',
      title: t.getInvolved.types.volunteer.title,
      subtitle: t.getInvolved.types.volunteer.subtitle,
      description: t.getInvolved.types.volunteer.description,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      fields: ['name', 'email', 'phone', 'availability', 'skills', 'interests'],
    },
    {
      id: 'partner',
      title: t.getInvolved.types.partner.title,
      subtitle: t.getInvolved.types.partner.subtitle,
      description: t.getInvolved.types.partner.description,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      fields: ['name', 'email', 'phone', 'organization', 'partnershipType', 'message'],
    },
    {
      id: 'advocate',
      title: t.getInvolved.types.advocate.title,
      subtitle: t.getInvolved.types.advocate.subtitle,
      description: t.getInvolved.types.advocate.description,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      fields: ['name', 'email', 'phone', 'platform', 'message'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const currentType = involvementTypes.find(t => t.id === selectedType)!;

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
              {t.getInvolved.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t.getInvolved.hero.subtitle}
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
                    ? 'bg-[#0B334A] text-white shadow-xl'
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
                  <p className="text-green-800 font-semibold">{t.getInvolved.form.success}</p>
                  <p className="text-green-700 mt-2">{t.getInvolved.form.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.name} *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.email} *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.phone} *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {selectedType === 'volunteer' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.availability}</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder={t.getInvolved.form.availabilityPlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.skillsInterests}</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder={t.getInvolved.form.skillsPlaceholder}
                        />
                      </div>
                    </>
                  )}
                  {selectedType === 'partner' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.organization}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.partnershipType}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option>{t.getInvolved.form.partnershipOptions.financial}</option>
                          <option>{t.getInvolved.form.partnershipOptions.collaboration}</option>
                          <option>{t.getInvolved.form.partnershipOptions.resources}</option>
                          <option>{t.getInvolved.form.partnershipOptions.other}</option>
                        </select>
                      </div>
                    </>
                  )}
                  {selectedType === 'advocate' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.platform}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder={t.getInvolved.form.platformPlaceholder}
                        />
                      </div>
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getInvolved.form.message}</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder={t.getInvolved.form.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0B334A] to-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    {t.getInvolved.form.submit}
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


