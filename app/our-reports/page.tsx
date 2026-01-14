import { client } from '@/lib/sanity/client'
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

  // Fallback data
  const fallbackReports = [
    {
      title: 'Annual Impact Report 2024',
      year: '2024',
      description: 'Comprehensive overview of our programs, impact, and achievements throughout the year.',
      type: 'Annual Report',
    },
    {
      title: 'Education Program Evaluation',
      year: '2024',
      description: 'Detailed analysis of our education initiatives and their outcomes in communities across Africa.',
      type: 'Program Report',
    },
    {
      title: 'Health & Nutrition Impact Study',
      year: '2023',
      description: 'Assessment of healthcare access improvements and nutrition program effectiveness.',
      type: 'Impact Report',
    },
  ]

  const displayReports = reports.length > 0
    ? reports
    : fallbackReports.map((r, i) => ({
        _id: `fallback-${i}`,
        title: r.title,
        reportType: r.type,
        publicationDate: r.year,
        executiveSummary: r.description,
        thumbnail: null,
        pdfFile: null,
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Reports"
        subtitle="Transparency and accountability through comprehensive reporting"
        backgroundImage="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
        alt="Our Reports"
      />
      <ReportsListClient reports={displayReports} />
    </main>
  )
}
