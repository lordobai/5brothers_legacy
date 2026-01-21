'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { DecorativePattern, DecorativeCircle } from '@/components/ui/DecorativeElements'
import { Icon } from '@/components/ui/Icon'

const metrics = [
  { 
    value: 1500, 
    suffix: '+', 
    label: 'People Impacted', 
    gradient: 'from-blue-400 to-blue-500',
    icon: 'users' 
  },
  { 
    value: 10, 
    suffix: '+', 
    label: 'Communities Served', 
    gradient: 'from-emerald-400 to-emerald-500',
    icon: 'building' 
  },
  { 
    value: 50, 
    suffix: '+', 
    label: 'Volunteers Engaged', 
    gradient: 'from-purple-400 to-purple-500',
    icon: 'handHeart' 
  },
  { 
    value: 6, 
    suffix: '', 
    label: 'Program Areas', 
    gradient: 'from-gold-400 to-gold-500',
    icon: 'network' 
  },
]

export const ImpactMetrics = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView || hasAnimated) return
    
    const duration = 1000
    const steps = 60
    const targetValues = metrics.map(m => m.value)
    const stepValues = targetValues.map(v => v / steps)
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCounts(stepValues.map(v => Math.floor(v * currentStep)))
      } else {
        setCounts(targetValues)
        setHasAnimated(true)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, hasAnimated])

  return (
    <section className="relative section-padding bg-gradient-primary text-white overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
          alt="Community Impact"
          fill
          className="object-cover"
        />
      </div>
      <DecorativePattern className="text-white" opacity={0.1} />
      <DecorativeCircle size={350} className="top-10 -right-40 text-white/20" delay={0.3} />
      <DecorativeCircle size={300} className="bottom-10 -left-40 text-white/20" delay={0.5} />

      <div className="relative z-10 container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
              Our Impact
            </motion.div>
            
            <h2 className="text-display-2 md:text-display-1 font-bold text-white mb-6 drop-shadow-2xl">
              Our Impact at a Glance
            </h2>
            <p className="text-body-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Numbers that reflect our commitment to creating lasting change
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-elegant`}>
                      <Icon name={metric.icon} size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <motion.div 
                    className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}
                    animate={hasAnimated ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 2 }}
                  >
                    {counts[index]?.toLocaleString()}{metric.suffix}
                  </motion.div>
                  <div className="text-lg text-white font-semibold drop-shadow-md">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
