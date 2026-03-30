'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function WaysToSupportHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Ways to Support"
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
            Ways to Support
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
            There are many ways to make a difference. Choose what works best for you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

