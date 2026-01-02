'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { EventsTable } from '@/components/events/EventsTable';
import { Event } from '@/lib/types/events';
import { useTranslations } from '@/contexts/LanguageContext';

const updates = [
  {
    id: 1,
    title: 'UK Government Funding for Youth-Linked Social Infrastructure (via UNICEF)',
    category: 'Youth',
    date: '2025',
    excerpt: 'The United Kingdom government has committed £19 million (approximately $24 million) — through a partnership with UNICEF and the Nigerian Federal and state governments — to build climate-resilient health and education facilities in northern Nigeria. Although focused on infrastructure, this investment has strong implications for youth well-being, education continuity, and inclusive development, which are essential enablers of broader youth empowerment outcomes.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    content: 'The United Kingdom government has committed £19 million (approximately $24 million) — through a partnership with UNICEF and the Nigerian Federal and state governments — to build climate-resilient health and education facilities in northern Nigeria. Although focused on infrastructure, this investment has strong implications for youth well-being, education continuity, and inclusive development, which are essential enablers of broader youth empowerment outcomes.',
    link: 'https://www.unicef.org/nigeria/press-releases/uk-announces-19m-funding-partners-fg-unicef-launch-climate-resilient-health-and?utm_source=chatgpt.com',
  },
  {
    id: 2,
    title: 'UNICEF Generation Unlimited (GenU 9JA) Platform',
    category: 'Youth',
    date: '2025',
    excerpt: 'A UNICEF-led, public-private-youth partnership that has impacted over 11 million Nigerian youth with digital learning, employability initiatives, and civic engagement. It is now institutionalized under the Office of the Vice President of Nigeria and engages major corporate and development partners to meet goals through 2030.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    content: 'A UNICEF-led, public-private-youth partnership that has impacted over 11 million Nigerian youth with digital learning, employability initiatives, and civic engagement. It is now institutionalized under the Office of the Vice President of Nigeria and engages major corporate and development partners to meet goals through 2030.',
    link: 'https://www.unicef.org/nigeria/press-releases/unicef-generation-unlimited-nigeria-impacts-over-11-million-youth-four-years-and-now?utm_source=chatgpt.com',
  },
  {
    id: 3,
    title: 'EU and UNICEF reaffirm nutrition support for Nigerian children',
    category: 'Health',
    date: '19 Dec 2025',
    excerpt: 'The European Union (EU) and UNICEF announced strengthened coordination and continued supply of lifesaving nutrition supplies for children in conflict-affected Northeast and Northwest Nigeria. These supplies include ready-to-use therapeutic food (RUTF) and therapeutic milk to treat severe acute malnutrition, reaffirming their humanitarian partnership in nutrition response.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: 'The European Union (EU) and UNICEF announced strengthened coordination and continued supply of lifesaving nutrition supplies for children in conflict-affected Northeast and Northwest Nigeria. These supplies include ready-to-use therapeutic food (RUTF) and therapeutic milk to treat severe acute malnutrition, reaffirming their humanitarian partnership in nutrition response.',
    link: 'https://www.unicef.org/nigeria/press-releases/eu-and-unicef-strengthen-lifesaving-nutrition-response-children-northeast-and?utm_source=chatgpt.com',
  },
  {
    id: 4,
    title: 'UNICEF & EU extend emergency nutrition response in crisis-affected regions',
    category: 'Health',
    date: 'Dec 2025',
    excerpt: 'The European Union (EU) and UNICEF have reaffirmed their joint humanitarian response to provide lifesaving nutrition support for children in northern Nigeria\'s crisis zones (Northeast and Northwest). Efforts include distributing ready-to-use therapeutic food (RUTF) and therapeutic milk to treat severe acute malnutrition among vulnerable children. In 2025 alone, with EU support, over 20,000 children in the Northeast and 14,000 in the Northwest have received treatment for severe acute malnutrition. The program emphasizes international coordination of supply chains, treatment standards, and outreach in disaster-impacted areas.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: 'The European Union (EU) and UNICEF have reaffirmed their joint humanitarian response to provide lifesaving nutrition support for children in northern Nigeria\'s crisis zones (Northeast and Northwest). Efforts include distributing ready-to-use therapeutic food (RUTF) and therapeutic milk to treat severe acute malnutrition among vulnerable children. In 2025 alone, with EU support, over 20,000 children in the Northeast and 14,000 in the Northwest have received treatment for severe acute malnutrition. The program emphasizes international coordination of supply chains, treatment standards, and outreach in disaster-impacted areas.',
    link: 'https://www.unicef.org/nigeria/press-releases/eu-and-unicef-strengthen-lifesaving-nutrition-response-children-northeast-and?utm_source=chatgpt.com',
  },
  {
    id: 5,
    title: 'WHO Regional Meeting on Global Health (Africa)',
    category: 'Health',
    date: '27–29 Apr 2026',
    excerpt: 'Theme: "Reimagining Africa\'s Health Systems: Innovation, Integration, and Interdependence"; focuses on pandemic preparedness, health workforce, nutrition, NCDs, primary care, digital health, gender equity, youth, and well-being. Participants: Ministers of Health, WHO, Africa CDC, World Bank leaders, civil society, youth delegates, technical experts.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: 'Theme: "Reimagining Africa\'s Health Systems: Innovation, Integration, and Interdependence"; focuses on pandemic preparedness, health workforce, nutrition, NCDs, primary care, digital health, gender equity, youth, and well-being. Participants: Ministers of Health, WHO, Africa CDC, World Bank leaders, civil society, youth delegates, technical experts.',
    link: 'https://www.whsnairobi2026.com/wp-content/uploads/2025/11/CONCEPT-NOTE-WORLD-HEALTH-SUMMIT-REGIONAL-MEETING-2026.pdf?utm_source=chatgpt.com',
  },
  {
    id: 6,
    title: 'UNESCO/IICBA Teachers & Health Webinars (Ongoing)',
    category: 'Education',
    date: '27–29 Apr 2026',
    excerpt: 'Format: Ongoing teacher professional development webinars integrating education, health, well-being, and life skills (monthly virtual webinars). Note: Series continues into 2026 with topics such as promoting learner health and teacher training approaches.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    content: 'Format: Ongoing teacher professional development webinars integrating education, health, well-being, and life skills (monthly virtual webinars). Note: Series continues into 2026 with topics such as promoting learner health and teacher training approaches.',
    link: 'https://www.iicba.unesco.org/en/webinars-events?utm_source=chatgpt.com',
  },
];

// Mock events data - in production, this would come from a database
const mockEvents: Event[] = [
  {
    id: '1',
    event_name: 'Community Health Fair 2024',
    event_date_start: '2024-06-15',
    event_date_end: '2024-06-15',
    event_link: 'https://example.com/health-fair',
    event_type: 'internal',
    location: 'in-person',
    description: 'Free health screenings and wellness resources for the community.',
    status: 'published',
    featured: true,
    created_at: '2024-01-10',
    updated_at: '2024-01-10',
  },
  {
    id: '2',
    event_name: 'Education Summit 2024',
    event_date_start: '2024-07-20',
    event_date_end: '2024-07-22',
    event_link: 'https://example.com/education-summit',
    event_type: 'external',
    hosting_organization: 'Global Education Network',
    location: 'virtual',
    description: 'A three-day virtual summit on innovative education solutions.',
    status: 'published',
    featured: false,
    created_at: '2024-01-15',
    updated_at: '2024-01-15',
  },
  {
    id: '3',
    event_name: 'Youth Leadership Workshop',
    event_date_start: '2024-05-10',
    event_date_end: '2024-05-10',
    event_link: 'https://example.com/youth-workshop',
    event_type: 'internal',
    location: 'in-person',
    description: 'Empowering young leaders with skills and mentorship opportunities.',
    status: 'published',
    featured: false,
    created_at: '2024-01-05',
    updated_at: '2024-01-05',
  },
  {
    id: '4',
    event_name: 'Population Health Spotlight Speaker Series - Manganello',
    event_date_start: '2025-03-15',
    event_date_end: '2025-03-15',
    event_link: 'https://www.apha.org/events-and-meetings/apha-calendar/population-health-spotlight-speaker-series-manganello',
    event_type: 'external',
    hosting_organization: 'American Public Health Association (APHA)',
    location: 'virtual',
    description: 'APHA Population Health Spotlight Speaker Series featuring expert insights on population health.',
    status: 'published',
    featured: false,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
  {
    id: '5',
    event_name: 'Nutrition and Supplementation in Clinical Care Conference',
    event_date_start: '2025-04-20',
    event_date_end: '2025-04-22',
    event_link: 'https://www.apha.org/events-and-meetings/apha-calendar/nutrition-and-supplementation-in-clinical-care-conference',
    event_type: 'external',
    hosting_organization: 'American Public Health Association (APHA)',
    location: 'virtual',
    description: 'Conference focusing on nutrition and supplementation strategies in clinical care settings.',
    status: 'published',
    featured: false,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
  {
    id: '6',
    event_name: 'Population Health Spotlight Speaker Series - Gerberding',
    event_date_start: '2025-05-10',
    event_date_end: '2025-05-10',
    event_link: 'https://www.apha.org/events-and-meetings/apha-calendar/population-health-spotlight-speaker-series-gerberding',
    event_type: 'external',
    hosting_organization: 'American Public Health Association (APHA)',
    location: 'virtual',
    description: 'APHA Population Health Spotlight Speaker Series featuring expert insights on population health.',
    status: 'published',
    featured: false,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
  },
];

// Photo gallery data - in production, this would come from a database
const galleryPhotos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    alt: 'Community event',
    event: 'Community Health Fair 2024',
    date: 'June 2024',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    alt: 'Youth workshop',
    event: 'Youth Leadership Workshop',
    date: 'May 2024',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    alt: 'Education summit',
    event: 'Education Summit 2024',
    date: 'July 2024',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    alt: 'Health clinic',
    event: 'Health Clinic Opening',
    date: 'March 2024',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    alt: 'Community outreach',
    event: 'Community Outreach Program',
    date: 'April 2024',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    alt: 'School program',
    event: 'School Infrastructure Launch',
    date: 'August 2024',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Water well',
    event: 'Clean Water Initiative',
    date: 'September 2024',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    alt: 'Disaster response',
    event: 'Disaster Response Training',
    date: 'October 2024',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    alt: 'Advocacy event',
    event: 'Policy Advocacy Forum',
    date: 'November 2024',
  },
];

export default function UpdatesEventsPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const categories = ['All', 'Education', 'Health', 'WASH', 'Youth', 'Events'];

  const filteredUpdates = selectedCategory === 'All'
    ? updates
    : updates.filter(update => update.category === selectedCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t.updatesEvents.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.updatesEvents.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#0B334A] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredUpdates.map((update, index) => {
              const updateLink = (update as any).link;
              const isExternal = updateLink?.startsWith('http');

              return (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {isExternal ? (
                    <a 
                      href={updateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={update.image}
                          alt={update.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0B334A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {update.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{update.title}</h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{update.excerpt}</p>
                        <span className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                          Read More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link href={`/updates-events/${update.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={update.image}
                          alt={update.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0B334A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {update.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{update.title}</h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{update.excerpt}</p>
                        <span className="text-[#0B334A] font-semibold hover:underline inline-flex items-center">
                          Read More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Table Section */}
      <EventsTable events={mockEvents} />

      {/* Photo Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Event Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing memorable moments from our events and community engagements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold text-sm mb-1">{photo.event}</p>
                    <p className="text-xs opacity-90">{photo.date}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {(() => {
              const photo = galleryPhotos.find(p => p.id === selectedPhoto);
              if (!photo) return null;
              return (
                <>
                  <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{photo.event}</h3>
                    <p className="text-gray-300">{photo.date}</p>
                  </div>
                  {/* Navigation buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = galleryPhotos.findIndex(p => p.id === selectedPhoto);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryPhotos.length - 1;
                      setSelectedPhoto(galleryPhotos[prevIndex].id);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous photo"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = galleryPhotos.findIndex(p => p.id === selectedPhoto);
                      const nextIndex = currentIndex < galleryPhotos.length - 1 ? currentIndex + 1 : 0;
                      setSelectedPhoto(galleryPhotos[nextIndex].id);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next photo"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
    </main>
  );
}


