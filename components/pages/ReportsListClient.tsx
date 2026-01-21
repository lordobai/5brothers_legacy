'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Report {
  _id: string
  title: string
  reportType?: string
  publicationDate?: string
  executiveSummary?: string
  pdfFile?: {
    asset?: {
      url?: string
      originalFilename?: string
    }
  }
}

interface ReportsListClientProps {
  reports: Report[]
}

export function ReportsListClient({ reports }: ReportsListClientProps) {
  const [visibleCount, setVisibleCount] = useState(6) // Show 6 reports initially
  const itemsPerPage = 6

  const visibleReports = reports.slice(0, visibleCount)
  const hasMore = reports.length > visibleCount

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, reports.length))
  }
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              At 5Brothers Legacy Initiative, we believe in complete transparency and accountability. We regularly publish detailed reports on our activities, financial performance, and impact. These reports demonstrate our commitment to responsible stewardship of resources and our dedication to creating measurable, lasting change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleReports.map((report, index) => (
              <motion.div
                key={report._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                {report.reportType && (
                  <div className="text-sm text-[#0B334A] font-semibold mb-2">{report.reportType}</div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{report.title}</h3>
                {report.executiveSummary && (
                  <p className="text-slate-600 mb-4">{report.executiveSummary}</p>
                )}
                {report.publicationDate && (
                  <div className="text-sm text-slate-500 mb-4">
                    Published: {new Date(report.publicationDate).getFullYear()}
                  </div>
                )}
                {report.pdfFile?.asset?.url && (
                  <a
                    href={report.pdfFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0B334A] font-semibold hover:underline"
                  >
                    Download PDF
                    <span className="ml-2">→</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button
                onClick={loadMore}
                className="px-8 py-4 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

