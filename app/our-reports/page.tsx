export const revalidate = 60

import { client } from '@/lib/sanity/client'
import type { SanityImageSource } from '@/lib/sanity/client'
import { reportsQuery } from '@/lib/sanity/queries/reports'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { ReportsListClient } from '@/components/pages/ReportsListClient'

interface Report {
  _id: string
  title: string
  reportType?: string
  publicationDate?: string
  thumbnail?: SanityImageSource
  executiveSummary?: any
  pdfFile?: {
    asset?: {
      url?: string
      originalFilename?: string
    }
  }
}

export default async function OurReportsPage() {
  // Fetch reports from CMS
  let reports: Report[] = []
  try {
    reports = await client.fetch(reportsQuery) || []
  } catch (error) {
    console.error('Error fetching reports:', error)
  }

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Reports"
        subtitle="Transparency and accountability in everything we do"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Our Reports"
      />
      <ReportsListClient reports={reports} />
    </main>
  )
}
