'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';

const reports = [
  {
    title: 'Annual Report 2023',
    category: 'Annual',
    year: '2023',
    description: 'Comprehensive overview of our activities, impact, and financial performance for 2023',
    downloadUrl: '#',
  },
  {
    title: 'Financial Report Q4 2023',
    category: 'Financial',
    year: '2023',
    description: 'Detailed financial statements and budget allocation for the fourth quarter',
    downloadUrl: '#',
  },
  {
    title: 'Audit Report 2023',
    category: 'Audit',
    year: '2023',
    description: 'Independent audit report verifying our financial practices and accountability',
    downloadUrl: '#',
  },
  {
    title: 'Annual Report 2022',
    category: 'Annual',
    year: '2022',
    description: 'Annual report covering our programs and impact throughout 2022',
    downloadUrl: '#',
  },
  {
    title: 'Impact Assessment Report 2023',
    category: 'Annual',
    year: '2023',
    description: 'Detailed assessment of program outcomes and community impact',
    downloadUrl: '#',
  },
];

export default function OurReportsPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>(t.ourReports.categories.all);
  const categories = [
    t.ourReports.categories.all,
    t.ourReports.categories.annual,
    t.ourReports.categories.financial,
    t.ourReports.categories.audit,
  ];

  const filteredReports = selectedCategory === t.ourReports.categories.all
    ? reports
    : reports.filter(report => {
        const categoryMap: Record<string, string> = {
          [t.ourReports.categories.annual]: 'Annual',
          [t.ourReports.categories.financial]: 'Financial',
          [t.ourReports.categories.audit]: 'Audit',
        };
        return report.category === categoryMap[selectedCategory];
      });

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
              {t.ourReports.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {t.ourReports.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 lg:p-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.ourReports.transparency.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.ourReports.transparency.description}
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
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

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-[#0B334A] rounded-full text-sm font-semibold mb-2">
                    {report.category}
                  </span>
                  <span className="ml-2 text-gray-500">{report.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{report.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{report.description}</p>
                <a
                  href={report.downloadUrl}
                  className="inline-flex items-center text-[#0B334A] hover:text-[#082530] font-semibold"
                >
                  {t.ourReports.downloadPdf}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


