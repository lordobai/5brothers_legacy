import Link from 'next/link'
import Image from 'next/image'
import { DecorativePattern } from '@/components/ui/DecorativeElements'

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-primary text-white overflow-hidden">
      <DecorativePattern className="text-white" opacity={0.05} />
      
      <div className="relative z-10 container mx-auto container-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Image
                src="/images/Original Logo Symbol.png"
                alt="5Brothers Legacy Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold font-display">5Brothers Legacy</span>
            </Link>
            <p className="text-white/80 text-body leading-relaxed mb-6">
              Empowering vulnerable communities across Africa through sustainable development, education, healthcare, and equality.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/who-we-are" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/our-initiatives" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/our-partners" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/our-reports" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Our Reports
                </Link>
              </li>
              <li>
                <Link href="/updates-events" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Updates & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Advocate
                </Link>
              </li>
              <li>
                <Link href="/ways-to-support" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Ways to Support
                </Link>
              </li>
              <li>
                <Link href="/make-a-gift" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Make a Gift
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@5brotherslegacy.org" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block">
                  info@5brotherslegacy.org
                </a>
              </li>
              <li>
                <a href="tel:+2348036775776" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block">
                  +234 803 677 5776
                </a>
              </li>
              <li className="text-white/80 text-body-sm">
                Owerri, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-body-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} 5Brothers Legacy Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-body-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-body-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
