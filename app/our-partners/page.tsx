'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Partner Organization 1', logo: 'https://via.placeholder.com/300x150/3b82f6/ffffff?text=Partner+1', description: 'Supporting education initiatives' },
  { name: 'Partner Organization 2', logo: 'https://via.placeholder.com/300x150/1e40af/ffffff?text=Partner+2', description: 'Healthcare program partner' },
  { name: 'Partner Organization 3', logo: 'https://via.placeholder.com/300x150/2563eb/ffffff?text=Partner+3', description: 'Water and sanitation projects' },
  { name: 'Partner Organization 4', logo: 'https://via.placeholder.com/300x150/3b82f6/ffffff?text=Partner+4', description: 'Youth empowerment programs' },
  { name: 'Partner Organization 5', logo: 'https://via.placeholder.com/300x150/1e40af/ffffff?text=Partner+5', description: 'Disaster response support' },
  { name: 'Partner Organization 6', logo: 'https://via.placeholder.com/300x150/2563eb/ffffff?text=Partner+6', description: 'Advocacy and policy work' },
];

export default function OurPartnersPage() {
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
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Together, we&apos;re creating lasting impact in communities across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
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
              Trusted Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with organizations, governments, and communities to amplify our impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-32 mb-6 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join us in creating lasting change. We welcome partnerships with organizations that share our vision
              </p>
              <a
                href="/get-involved"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Partner With Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


