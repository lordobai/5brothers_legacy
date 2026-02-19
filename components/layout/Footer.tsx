import Link from 'next/link'
import Image from 'next/image'
import { DecorativePattern } from '@/components/ui/DecorativeElements'
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react'

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
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.tiktok.com/@5brotherslegacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/fivebrotherslegacy?igsh=OWl3Z2s0cXQ3bGhl&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/5brothers-legacy-initiative/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@5BrothersLegacyInitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="YouTube"
              >
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
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
                <Link href="/our-programs" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
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
                <Link href="/contact-us" className="text-white/80 hover:text-white transition-colors text-body-sm inline-block hover:translate-x-1 transform duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@fivebrotherslegacy.org" className="text-white/80 hover:text-white transition-colors text-body-sm inline-flex items-center gap-3 group">
                  <Mail size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@fivebrotherslegacy.org</span>
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
