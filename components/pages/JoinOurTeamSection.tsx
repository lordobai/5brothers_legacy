'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function JoinOurTeamSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-100 to-accent-100">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              We&apos;re always looking for passionate individuals who share our vision of creating lasting change
            </p>
            <Link
              href="/career"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

