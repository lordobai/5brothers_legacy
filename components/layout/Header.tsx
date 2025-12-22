'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { useTranslations } from '@/contexts/LanguageContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Image
                src="/images/Original Logo Symbol.png"
                alt="5Brothers Legacy Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">5Brothers</span>
              <span className="text-sm text-gray-600 block -mt-1">Legacy</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/who-we-are" className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium">
              {t.nav.whoWeAre}
            </Link>
            <Link href="/our-team" className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium">
              {t.nav.ourTeam}
            </Link>
            <Link href="/our-initiatives" className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium">
              {t.nav.initiatives}
            </Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium">
              {t.nav.getInvolved}
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium">
              {t.nav.help}
            </Link>
            <LanguageSelector />
            <Link href="/make-a-gift">
              <Button variant="primary" size="sm" className="shadow-md hover:shadow-lg">
                {t.nav.donate}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Icon name="x" size={24} />
            ) : (
              <Icon name="menu" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/who-we-are" 
                className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.whoWeAre}
              </Link>
              <Link 
                href="/our-team" 
                className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.ourTeam}
              </Link>
              <Link 
                href="/our-initiatives" 
                className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.initiatives}
              </Link>
              <Link 
                href="/get-involved" 
                className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.getInvolved}
              </Link>
              <Link 
                href="/help" 
                className="text-gray-700 hover:text-[#0B334A] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.help}
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Link href="/make-a-gift" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  {t.nav.donate}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

