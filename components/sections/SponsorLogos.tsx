'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from '@/contexts/LanguageContext';

// Trusted partner logos - using high-quality placeholder images
const sponsors = [
  { 
    name: 'Global Health Foundation', 
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&q=80' 
  },
  { 
    name: 'Education First Initiative', 
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop&q=80' 
  },
  { 
    name: 'Community Development Partners', 
    logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=100&fit=crop&q=80' 
  },
  { 
    name: 'Water for Life Organization', 
    logo: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=200&h=100&fit=crop&q=80' 
  },
  { 
    name: 'Youth Empowerment Network', 
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=100&fit=crop&q=80' 
  },
  { 
    name: 'Sustainable Futures Alliance', 
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop&q=80' 
  },
];

// Duplicate sponsors for seamless infinite scroll
const duplicatedSponsors = [...sponsors, ...sponsors];

export const SponsorLogos = () => {
  const t = useTranslations();
  
  return (
    <section className="section-padding bg-white border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-slate-900 mb-4">
            {t.home.partners.title}
          </h2>
          <p className="text-lg lg:text-xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
            {t.home.partners.subtitle}
          </p>
        </motion.div>

        {/* Continuous Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '200px' }}
              >
                <div className="relative w-full h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

