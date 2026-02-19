'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DecorativeCircle, DecorativePattern, FloatingShape } from '@/components/ui/DecorativeElements'

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Community Impact"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <DecorativePattern className="text-white" opacity={0.1} />
      </div>

      {/* Decorative Elements */}
      <DecorativeCircle size={400} className="top-20 -left-40 text-white" delay={0.5} />
      <DecorativeCircle size={300} className="bottom-20 -right-40 text-white" delay={0.7} />
      <FloatingShape className="top-1/4 right-1/4" delay={0} />
      <FloatingShape className="bottom-1/4 left-1/4" delay={1} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
            Empowering Communities Since 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-display-1 md:text-display-2 lg:text-display-1 font-bold text-white mb-8 leading-tight drop-shadow-2xl text-center"
          >
            Empowering Communities,<br />
            <span className="text-gradient-gold">Changing Lives</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-body-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-center"
          >
            Advancing education, healthcare, and equality across underserved regions in Africa
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/make-a-gift"
              className="btn-primary text-lg px-10 py-5 min-w-[200px]"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="btn-outline text-lg px-10 py-5 min-w-[200px]"
            >
              Get Involved
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
