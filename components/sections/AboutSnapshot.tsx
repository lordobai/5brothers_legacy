'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { ElegantCard } from '@/components/ui/ElegantCard'
import { ElegantDivider, DecorativeGrid } from '@/components/ui/DecorativeElements'

const values = [
  {
    icon: 'shield' as const,
    title: 'Our Mission',
    description: 'Promoting a self-sufficient and sustainable Africa.',
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-white to-emerald-50',
    iconShadow: 'shadow-[0_8px_24px_rgba(5,150,105,0.3)]',
  },
  {
    icon: 'sparkles' as const,
    title: 'Our Vision',
    description: 'To see thriving communities across Africa built on safety, equality, and opportunity for all.',
    gradient: 'from-indigo-600 to-indigo-700',
    bgGradient: 'from-white to-indigo-50',
    iconShadow: 'shadow-[0_8px_24px_rgba(79,70,229,0.3)]',
  },
  {
    icon: 'users' as const,
    title: 'Our Impact',
    description: 'We measure success by the lasting positive change we create in communities.',
    gradient: 'from-orange-600 to-orange-700',
    bgGradient: 'from-white to-orange-50',
    iconShadow: 'shadow-[0_8px_24px_rgba(234,88,12,0.3)]',
  },
]

export const AboutSnapshot = () => {
  return (
    <section className="relative section-padding bg-gradient-elegant overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <DecorativeGrid className="text-primary-600" opacity={0.03} />

      <div className="relative z-10 container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-2 mb-6 bg-primary-100/50 backdrop-blur-sm border border-primary-200 rounded-full text-primary-700 text-sm font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-primary-500"></span>
              Who We Are
            </motion.div>
            
            <h2 className="text-display-2 md:text-display-1 font-bold text-primary-900 mb-6">
              About 5Brothers Legacy Initiative
            </h2>
            <p className="text-body-lg md:text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-light">
              We are dedicated to empowering vulnerable communities with equal opportunities, 
              safe lives, quality education, better health, and clean water.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {values.map((value, index) => (
              <ElegantCard key={value.title} hover delay={index * 0.1}>
                <div className={`p-10 bg-gradient-to-br ${value.bgGradient} h-full rounded-3xl border border-neutral-100`}>
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 ${value.iconShadow} transform hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value.icon} size={48} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-heading-3 font-bold text-primary-900 mb-4">{value.title}</h3>
                  <p className="text-body text-neutral-700 leading-relaxed">{value.description}</p>
                </div>
              </ElegantCard>
            ))}
          </div>

          {/* Elegant Divider */}
          <ElegantDivider />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/who-we-are"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <Icon name="arrowRight" size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
