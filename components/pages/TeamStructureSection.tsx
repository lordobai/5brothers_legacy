'use client'

import { motion } from 'framer-motion'

export function TeamStructureSection() {
  const leadershipRoles = [
    'Founder',
    'Co-founder',
    'Executive Director',
    'Public Health and Supply Chain Advisor',
    'Legal Advisor',
    'MEAL Advisor (Monitoring, Evaluation, Accountability, and Learning)',
    'Education Program Advisor',
  ]

  const managementRoles = [
    'Operations Manager',
    'Finance Manager',
    'Program Manager',
    'Program Officer',
    'Community Outreach Coordinator',
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Team Structure
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Leadership Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Leadership
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                These roles provide strategic leadership, governance, and technical guidance rather than daily operational execution.
              </p>
              <ul className="space-y-3">
                {leadershipRoles.map((role, index) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-start text-slate-700"
                  >
                    <span className="text-[#0B334A] mr-3 mt-1.5">•</span>
                    <span className="leading-relaxed">{role}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Management Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Management
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                These roles focus on execution, coordination, and operational management.
              </p>
              <ul className="space-y-3">
                {managementRoles.map((role, index) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start text-slate-700"
                  >
                    <span className="text-[#0B334A] mr-3 mt-1.5">•</span>
                    <span className="leading-relaxed">{role}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Leadership Team Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Our diverse team brings together expertise, passion, and commitment to drive our mission forward
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

