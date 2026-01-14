'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
            alt="About Us"
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              Empowering vulnerable communities across Africa through sustainable development, education, healthcare, and equality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Impact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-indigo-50 p-8 lg:p-10 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  We believe in empowering communities to become self-sufficient and sustainable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-violet-50 p-8 lg:p-10 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To see thriving communities across Africa built on safety, equality, and opportunity for all.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-emerald-50 p-8 lg:p-10 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Our Impact</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  We measure success by the lasting positive change we create in communities.
                </p>
              </motion.div>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">About 5Brothers Legacy Initiative</h2>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                  We are dedicated to empowering vulnerable communities with equal opportunities, safe lives, quality education, better health, and clean water.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Through our comprehensive programs, we work tirelessly to create sustainable solutions that address the root causes of poverty and inequality. Our approach combines education, healthcare, infrastructure development, and community empowerment to build resilient communities that can thrive independently.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With a focus on Africa, we partner with local communities, organizations, and stakeholders to ensure our initiatives are culturally sensitive, locally relevant, and sustainable in the long term.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Link
                  href="/our-team"
                  className="inline-flex items-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Meet Our Team
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
