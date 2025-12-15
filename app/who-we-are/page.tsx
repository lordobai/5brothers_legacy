'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const values = [
  {
    title: 'Empowerment',
    description: 'We believe in empowering communities to become self-sufficient and sustainable.',
    icon: 'trendingUp' as const,
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'Equality',
    description: 'We champion equal opportunities for all, regardless of gender, background, or circumstance.',
    icon: 'users' as const,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
  },
  {
    title: 'Transparency',
    description: 'We maintain the highest standards of accountability and transparency in all our operations.',
    icon: 'shield' as const,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Innovation',
    description: 'We embrace innovative solutions to address complex social challenges.',
    icon: 'lightbulb' as const,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Collaboration',
    description: 'We work hand-in-hand with communities, partners, and stakeholders to achieve shared goals.',
    icon: 'handshake' as const,
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
  },
  {
    title: 'Impact',
    description: 'We measure success by the lasting positive change we create in communities.',
    icon: 'barChart3' as const,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
];

const goals = [
  {
    title: 'Education Access',
    description: 'Ensure quality education for 50,000 children by 2030',
    progress: 25,
  },
  {
    title: 'Healthcare Coverage',
    description: 'Provide healthcare services to 100,000 people across underserved regions',
    progress: 30,
  },
  {
    title: 'Clean Water Access',
    description: 'Install 500 water wells and sanitation facilities',
    progress: 20,
  },
  {
    title: 'Youth Empowerment',
    description: 'Train and empower 10,000 young people with skills and opportunities',
    progress: 15,
  },
];

export default function WhoWeArePage() {
  const [expandedGoal, setExpandedGoal] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Community"
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
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering vulnerable communities across Africa through sustainable development, 
              education, healthcare, and equality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  5Brothers Legacy Initiative was founded with a vision to create lasting positive change 
                  in vulnerable communities across Africa. Born from a deep commitment to social justice 
                  and sustainable development, our organization has grown from a small grassroots movement 
                  into a trusted partner for communities in need.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We believe that every individual deserves access to quality education, healthcare, clean water, 
                  and equal opportunities. Through our comprehensive programs, we work tirelessly to break down 
                  barriers and create pathways to prosperity for those who need it most.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our approach is community-centered, recognizing that sustainable change comes from within. 
                  We partner with local leaders, organizations, and community members to design and implement 
                  solutions that are culturally appropriate, environmentally sustainable, and economically viable.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community work"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Education"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Our Mission, Vision & Goals
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 shadow-md">
                  <Icon name="target" size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide hope for sustainable lives by empowering vulnerable communities with equal 
                  opportunities, safe lives, quality education, better health, and clean water. We 
                  strive to create lasting positive change that transforms lives and builds thriving 
                  communities across Africa.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-md">
                  <Icon name="sparkles" size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To see thriving communities across Africa built on safety, equality, and opportunity 
                  for all. We envision a future where every individual has access to quality education, 
                  healthcare, clean water, and the resources needed to reach their full potential, 
                  regardless of their circumstances.
                </p>
              </motion.div>
            </div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 shadow-md">
                <Icon name="target" size={32} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Goals</h3>
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors cursor-pointer"
                    onClick={() => setExpandedGoal(expandedGoal === index ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{goal.title}</h4>
                      <span className="text-blue-600 font-bold">{goal.progress}%</span>
                    </div>
                    <p className="text-gray-600 mb-3">{goal.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${value.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-gray-200`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-md`}>
                  <Icon name={value.icon} size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Together, we can create lasting change in communities across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Get Involved
              </a>
              <a
                href="/make-a-gift"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Make a Donation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

