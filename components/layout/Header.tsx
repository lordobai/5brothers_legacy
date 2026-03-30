'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Who We Are', href: '/who-we-are' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Programs', href: '/our-programs' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Find Help', href: '/help' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-elegant border-b border-neutral-100">
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/Original Logo Symbol.png"
                  alt="5Brothers Legacy Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-primary-700 font-display">
                5Brothers Legacy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/make-a-gift"
              className="ml-4 px-6 py-2.5 text-sm bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-elegant hover:shadow-elegant-lg transform hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-primary-600 focus:outline-none rounded-lg hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 space-y-1 border-t border-neutral-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/make-a-gift"
              className="block mx-4 mt-4 px-6 py-3 text-sm bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-elegant text-center hover:shadow-elegant-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate Now
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
