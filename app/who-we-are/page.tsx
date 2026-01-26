'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { DecorativeGrid } from '@/components/ui/DecorativeElements'
import { Icon } from '@/components/ui/Icon'
import { ElegantCard } from '@/components/ui/ElegantCard'

const goals = [
  {
    title: 'Education Access',
    percentage: 25,
    description: 'Ensure quality education for 50,000 children by 2030',
    icon: 'graduation',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
  },
  {
    title: 'Healthcare Coverage',
    percentage: 30,
    description: 'Provide healthcare services to 100,000 people across underserved regions',
    icon: 'health',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100/50',
  },
  {
    title: 'Clean Water Access',
    percentage: 20,
    description: 'Install 500 water wells and sanitation facilities',
    icon: 'water',
    gradient: 'from-cyan-500 to-cyan-600',
    bgGradient: 'from-cyan-50 to-cyan-100/50',
  },
  {
    title: 'Youth Empowerment',
    percentage: 15,
    description: 'Train and empower 10,000 young people with skills and opportunities',
    icon: 'users',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100/50',
  },
]

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSectionClient
        title="Who We Are"
        subtitle="Empowering vulnerable communities across Africa through sustainable development, education, healthcare, and equality."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Who We Are"
      />

      {/* Our Story Section */}
      <section className="relative section-padding bg-gradient-elegant overflow-hidden">
        <DecorativeGrid className="text-primary-600" opacity={0.03} />
        
        <div className="relative z-10 container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Our Story Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-12"
              >
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Our Story
                </h2>
              </motion.div>

              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <p className="text-body-lg md:text-xl text-neutral-700 mb-6 leading-relaxed font-light">
                  5Brothers Legacy Initiative was founded with a vision to create lasting positive change in vulnerable communities across Africa. Born from a deep commitment to social justice and sustainable development, our organization has grown from a small grassroots movement into a trusted partner for communities in need.
                </p>
                <p className="text-body-lg md:text-xl text-neutral-700 mb-6 leading-relaxed font-light">
                  We believe that every individual deserves access to quality education, healthcare, clean water, and equal opportunities. Through our comprehensive programs, we work tirelessly to break down barriers and create pathways to prosperity for those who need it most.
                </p>
                <p className="text-body-lg md:text-xl text-neutral-700 mb-8 leading-relaxed font-light">
                  Our approach is community-centered, recognizing that sustainable change comes from within. We partner with local leaders, organizations, and community members to design and implement solutions that are culturally appropriate, environmentally sustainable, and economically viable.
                </p>
              </motion.div>

              {/* Two Placeholder Photos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-8 mb-16"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                  <Image
                    src="/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG"
                    alt="Community Impact"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                  <Image
                    src="/images/bb3a945c-355f-4ff6-91cb-646e9dd7f91d.JPG"
                    alt="Community Work"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            {/* Our Mission, Vision & Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Our Mission & Vision
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-indigo-50 p-8 lg:p-10 rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    To provide hope for sustainable lives by empowering vulnerable communities with equal opportunities, safe lives, quality education, better health, and clean water. We strive to create lasting positive change that transforms lives and builds thriving communities across Africa.
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
                    <span className="text-3xl">👁️</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    To see thriving communities across Africa built on safety, equality, and opportunity for all. We envision a future where every individual has access to quality education, healthcare, clean water, and the resources needed to reach their full potential, regardless of their circumstances.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Our Goals
                </h2>
                <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
                  Strategic objectives driving our mission forward
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {goals.map((goal, index) => (
                  <ElegantCard key={goal.title} hover delay={index * 0.1}>
                    <div className={`p-8 bg-gradient-to-br ${goal.bgGradient} h-full rounded-3xl border border-neutral-100`}>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center mb-6 shadow-elegant`}>
                        <Icon name={goal.icon} size={40} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-primary-900 mb-2">{goal.percentage}%</div>
                        <h3 className="text-heading-4 font-bold text-primary-900 mb-3">{goal.title}</h3>
                      </div>
                      <p className="text-body-sm text-neutral-700 leading-relaxed">{goal.description}</p>
                    </div>
                  </ElegantCard>
                ))}
              </div>
            </motion.div>

            {/* Alignment with UN Sustainable Development Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Alignment with UN Sustainable Development Goals
                </h2>
                <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto mb-8">
                  Our programs directly contribute to achieving the United Nations Sustainable Development Goals by 2030
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {[
                  {
                    number: '4',
                    title: 'Quality Education',
                    programs: [
                      'Scholarship programs',
                      'School infrastructure',
                      'Teacher training',
                      'Digital learning',
                      'Vocational training',
                    ],
                    gradient: 'from-blue-500 to-blue-600',
                    bgGradient: 'from-blue-50 to-blue-100/50',
                  },
                  {
                    number: '3',
                    title: 'Good Health & Well-being',
                    programs: [
                      'Health clinics',
                      'Nutrition programs',
                      'Maternal & child health',
                      'Health education',
                    ],
                    gradient: 'from-emerald-500 to-emerald-600',
                    bgGradient: 'from-emerald-50 to-emerald-100/50',
                  },
                  {
                    number: '6',
                    title: 'Clean Water & Sanitation',
                    programs: [
                      'Water well installation',
                      'Sanitation facilities',
                      'Hygiene education',
                      'Water quality monitoring',
                    ],
                    gradient: 'from-cyan-500 to-cyan-600',
                    bgGradient: 'from-cyan-50 to-cyan-100/50',
                  },
                  {
                    number: '8',
                    title: 'Decent Work & Economic Growth',
                    programs: [
                      'Leadership training',
                      'Entrepreneurship programs',
                      'Career development',
                      'Mentorship opportunities',
                    ],
                    gradient: 'from-purple-500 to-purple-600',
                    bgGradient: 'from-purple-50 to-purple-100/50',
                  },
                  {
                    number: '1',
                    title: 'No Poverty',
                    programs: [
                      'Emergency relief',
                      'Shelter provision',
                      'Food assistance',
                      'Recovery support',
                    ],
                    gradient: 'from-red-500 to-red-600',
                    bgGradient: 'from-red-50 to-red-100/50',
                  },
                  {
                    number: '16',
                    title: 'Peace, Justice & Strong Institutions',
                    programs: [
                      'Policy Research',
                      'Community Mobilization',
                      'Stakeholder Engagement',
                      'Awareness Campaigns',
                      'Legal Support',
                      'Rights Education',
                    ],
                    gradient: 'from-indigo-500 to-indigo-600',
                    bgGradient: 'from-indigo-50 to-indigo-100/50',
                  },
                ].map((sdg, index) => (
                  <ElegantCard key={sdg.number} hover delay={index * 0.1}>
                    <div className={`p-8 bg-gradient-to-br ${sdg.bgGradient} h-full rounded-3xl border border-neutral-100`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sdg.gradient} flex items-center justify-center mb-6 shadow-elegant`}>
                        <span className="text-2xl font-bold text-white">{sdg.number}</span>
                      </div>
                      <h3 className="text-heading-4 font-bold text-primary-900 mb-4">{sdg.title}</h3>
                      <p className="text-body-sm font-semibold text-neutral-700 mb-3">
                        {sdg.number === '4' ? 'Our Education Programs:' :
                         sdg.number === '3' ? 'Our Health Programs:' :
                         sdg.number === '6' ? 'Our WASH Programs:' :
                         sdg.number === '8' ? 'Our Youth Programs:' :
                         sdg.number === '1' ? 'Our Disaster Response:' :
                         'Our Advocacy Programs:'}
                      </p>
                      <ul className="space-y-2">
                        {sdg.programs.map((program, idx) => (
                          <li key={idx} className="flex items-start text-body-sm text-neutral-700">
                            <span className="text-[#0B334A] mr-2 mt-1.5 font-bold leading-none flex-shrink-0">•</span>
                            <span className="leading-relaxed">{program}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ElegantCard>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-8"
              >
                <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto mb-6">
                  Through our comprehensive programs, we contribute to 6 of the 17 UN Sustainable Development Goals, working towards a more equitable and sustainable future for communities across Africa.
                </p>
                <Link
                  href="/our-programs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
                >
                  Explore Our Programs
                </Link>
              </motion.div>
            </motion.div>

            {/* Our Core Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: 'Empowerment',
                    description: 'Promoting a self-sufficient and sustainable Africa',
                    icon: 'lightbulb',
                    gradient: 'from-primary-700 to-primary-800',
                    bgGradient: 'from-primary-50 to-primary-100/50',
                  },
                  {
                    title: 'Equality',
                    description: 'We champion equal opportunities for all, regardless of gender, background, or circumstance.',
                    icon: 'handshake',
                    gradient: 'from-accent-700 to-accent-800',
                    bgGradient: 'from-accent-50 to-accent-100/50',
                  },
                  {
                    title: 'Transparency',
                    description: 'We maintain the highest standards of accountability and transparency in all our operations.',
                    icon: 'shield',
                    gradient: 'from-blue-500 to-blue-600',
                    bgGradient: 'from-blue-50 to-blue-100/50',
                  },
                  {
                    title: 'Innovation',
                    description: 'We embrace innovative solutions to address complex social challenges.',
                    icon: 'network',
                    gradient: 'from-purple-500 to-purple-600',
                    bgGradient: 'from-purple-50 to-purple-100/50',
                  },
                  {
                    title: 'Collaboration',
                    description: 'We work hand-in-hand with communities, partners, and stakeholders to achieve shared goals.',
                    icon: 'users',
                    gradient: 'from-emerald-500 to-emerald-600',
                    bgGradient: 'from-emerald-50 to-emerald-100/50',
                  },
                  {
                    title: 'Impact',
                    description: 'We measure success by the lasting positive change we create in communities.',
                    icon: 'trendingUp',
                    gradient: 'from-amber-600 to-amber-700',
                    bgGradient: 'from-gold-50 to-gold-100/50',
                  },
                ].map((value, index) => (
                  <ElegantCard key={value.title} hover delay={index * 0.1}>
                    <div className={`p-8 bg-gradient-to-br ${value.bgGradient} h-full rounded-3xl border border-neutral-100`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-elegant`}>
                        <Icon name={value.icon} size={32} className="text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-heading-4 font-bold text-primary-900 mb-4">{value.title}</h3>
                      <p className="text-body text-neutral-700 leading-relaxed">{value.description}</p>
                    </div>
                  </ElegantCard>
                ))}
              </div>
            </motion.div>

            {/* Join Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="text-center">
                <h2 className="text-display-3 md:text-display-2 font-bold text-primary-900 mb-4">
                  Join Us in Making a Difference
                </h2>
                <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto mb-10">
                  Together, we can create lasting change in communities across Africa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/make-a-gift"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#0F4A6A] text-white font-semibold rounded-lg hover:bg-[#092C40] transition-all shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
                  >
                    Make a Donation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
