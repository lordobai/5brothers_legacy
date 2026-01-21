'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

const involvementOptions = [
  {
    title: 'Donate',
    description: 'Your contribution helps us reach more communities and create lasting impact',
    icon: 'gift',
    href: '/make-a-gift',
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a difference on the ground',
    icon: 'handHeart',
    href: '/get-involved',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Partner',
    description: 'Collaborate with us to amplify our impact and reach more communities',
    icon: 'handshake',
    href: '/get-involved',
    color: 'from-emerald-500 to-emerald-600',
  },
]

export const GetInvolvedSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Join us in creating positive change. Every action counts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={option.href}
                  className="block p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl hover:shadow-elegant-lg transition-all group h-full border border-neutral-100 hover:border-neutral-200"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 shadow-elegant transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={option.icon} size={40} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{option.description}</p>
                  <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center">
                    Get Started
                    <Icon name="arrowRight" size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
