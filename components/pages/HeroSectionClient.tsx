'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DecorativeCircle, DecorativePattern, FloatingShape } from '@/components/ui/DecorativeElements'

interface HeroSectionClientProps {
  title: string
  subtitle: string
  backgroundImage?: string
  alt?: string
}

export function HeroSectionClient({ title, subtitle, backgroundImage, alt = 'Hero' }: HeroSectionClientProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-primary">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <DecorativePattern className="text-white" opacity={0.08} />
        </>
      )}

      {/* Decorative Elements */}
      <DecorativeCircle size={300} className="top-10 -left-32 text-white" delay={0.3} />
      <DecorativeCircle size={250} className="bottom-10 -right-32 text-white" delay={0.5} />
      <FloatingShape className="top-1/3 right-1/4" delay={0} />
      
      <div className="relative z-10 container mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display-2 md:text-display-1 font-bold text-white mb-6 leading-tight drop-shadow-2xl text-center"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light text-center"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
