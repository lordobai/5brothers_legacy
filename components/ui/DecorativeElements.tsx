'use client'

import { motion } from 'framer-motion'

interface DecorativeCircleProps {
  size?: number
  className?: string
  delay?: number
}

export function DecorativeCircle({ size = 200, className = '', delay = 0 }: DecorativeCircleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={`absolute rounded-full bg-gradient-to-br from-primary-200/30 to-accent-200/30 blur-3xl ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

interface DecorativePatternProps {
  className?: string
  opacity?: number
}

export function DecorativePattern({ className = '', opacity = 0.05 }: DecorativePatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity,
      }}
    />
  )
}

interface DecorativeGridProps {
  className?: string
  opacity?: number
}

export function DecorativeGrid({ className = '', opacity = 0.03 }: DecorativeGridProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity,
      }}
    />
  )
}

interface ElegantDividerProps {
  className?: string
}

export function ElegantDivider({ className = '' }: ElegantDividerProps) {
  return (
    <div className={`relative flex items-center justify-center py-8 ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
      <div className="relative z-10 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-primary-400" />
        <div className="mx-2 h-1 w-1 rounded-full bg-primary-300" />
        <div className="h-2 w-2 rounded-full bg-primary-400" />
      </div>
    </div>
  )
}

interface FloatingShapeProps {
  className?: string
  delay?: number
  duration?: number
}

export function FloatingShape({ className = '', delay = 0, duration = 6 }: FloatingShapeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute ${className}`}
    >
      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-200/40 to-accent-200/40 blur-2xl" />
    </motion.div>
  )
}



