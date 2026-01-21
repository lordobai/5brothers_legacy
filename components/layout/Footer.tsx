import Link from 'next/link'
import Image from 'next/image'
import { DecorativePattern } from '@/components/ui/DecorativeElements'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-primary text-white overflow-hidden">
      <DecorativePattern className="text-white" opacity={0.05} />
      
      <div className="relative z-10 container mx-auto container-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
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

          {/* About Us Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/who-we-are" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/our-initiatives" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
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
              <li>
                <Link href="/help" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/find-support" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Find Support
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
                  Get Involved
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
              <li>
                <Link href="/career" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-heading-4 font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@5brotherslegacy.org" className="text-white/80 hover:text-white transition-colors text-body-sm inline-flex items-center gap-3 group">
                  <Mail size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@5brotherslegacy.org</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348036775776" className="text-white/80 hover:text-white transition-colors text-body-sm inline-flex items-center gap-3 group">
                  <Phone size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+234 803 677 5776</span>
                </a>
              </li>
              <li className="text-white/80 text-body-sm inline-flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Owerri, Nigeria</span>
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
              <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-body-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors text-body-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
