'use client'

import { motion } from 'framer-motion'

export function LeadershipTeamTitle() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
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



