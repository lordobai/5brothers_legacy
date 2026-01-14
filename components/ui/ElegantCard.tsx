'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ElegantCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function ElegantCard({ children, className = '', hover = true, delay = 0 }: ElegantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'card-elegant',
        hover && 'card-elegant-hover',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

