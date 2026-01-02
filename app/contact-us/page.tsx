'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';
import { Icon } from '@/components/ui/Icon';

export default function ContactUsPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/5brothers-legacy-initiative/?viewAsMember=true',
      icon: 'linkedin' as const,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fivebrotherslegacy?igsh=OWl3Z2s0cXQ3bGhl&utm_source=qr',
      icon: 'instagram' as const,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@5BrothersLegacyInitiative',
      icon: 'youtube' as const,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@5brotherslegacy',
      icon: 'video' as const,
    },
    {
      name: 'X (Twitter)',
      url: '#',
      icon: 'x' as const,
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
              {t.contact.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.contact.getInTouch}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <Icon name="mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h3>
                    <a href="mailto:info@fivebrotherslegacy.org" className="text-[#0B334A] hover:text-[#082530] transition-colors">
                      info@fivebrotherslegacy.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <Icon name="phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.help.call}</h3>
                    <a href="tel:+2348036775776" className="text-[#0B334A] hover:text-[#082530] transition-colors">
                      +234 803 677 5776
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <Icon name="mapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.help.form.address?.replace(' (Optional)', '') || 'Address'}</h3>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <Icon name="clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.officeHours}</h3>
                    <p className="text-gray-600">{t.contact.mondayFriday}</p>
                    <p className="text-gray-600">{t.contact.saturday}</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 hover:bg-[#0B334A] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon 
                        name={social.icon} 
                        size={20} 
                        className="text-gray-600 group-hover:text-white transition-colors" 
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/get-involved" className="block text-[#0B334A] hover:text-[#082530] transition-colors">
                    → {t.nav.getInvolved}
                  </Link>
                  <Link href="/make-a-gift" className="block text-[#0B334A] hover:text-[#082530] transition-colors">
                    → {t.nav.donate}
                  </Link>
                  <Link href="/our-programs" className="block text-[#0B334A] hover:text-[#082530] transition-colors">
                    → {t.nav.initiatives}
                  </Link>
                  <Link href="/help" className="block text-[#0B334A] hover:text-[#082530] transition-colors">
                    → {t.nav.help}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.contact.sendMessage}</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center"
                >
                  <Icon name="checkCircle" size={48} className="text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-semibold text-lg mb-2">{t.contact.successMessage}</p>
                  <p className="text-green-700 text-sm">We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm font-semibold">{error}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0B334A] to-[#0F4A6A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.contact.sending || 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Icon name="send" size={20} />
                        {t.contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be enabled with coordinates) */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-slate-200 flex items-center justify-center">
                {/* Placeholder for map - Replace with actual map component or embed */}
                <div className="text-center p-8">
                  <Icon name="mapPin" size={64} className="text-[#0B334A] mx-auto mb-4" />
                  <p className="text-gray-600 text-lg mb-2">{t.contact.address}</p>
                  <p className="text-gray-500">Map integration can be added here</p>
                  <a
                    href="https://maps.google.com/?q=Owerri,Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


