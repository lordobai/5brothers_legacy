import { client } from '@/lib/sanity/client'
import { activeProgramsQuery } from '@/lib/sanity/queries/programs'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { InitiativesListClient } from '@/components/pages/InitiativesListClient'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'

interface Program {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  description?: any // Portable Text
  featuredImage?: SanityImageSource
  impactMetrics?: {
    label: string
    value: string
  }[]
  subPrograms?: {
    title: string
    description?: any
  }[]
}

export default async function OurInitiativesPage() {
  // Fetch programs from CMS
  let programs: Program[] = []
  try {
    programs = await client.fetch(activeProgramsQuery) || []
  } catch (error) {
    console.error('Error fetching programs:', error)
  }

  // Fallback data if no CMS content
  const fallbackInitiatives = [
    {
      id: 'education',
      title: 'Education Programs',
      description: 'Empowering children and youth through quality education and skill development programs that create pathways to success.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      programs: [
        'Scholarship Programs',
        'School Infrastructure Development',
        'Teacher Training & Support',
        'Digital Learning Resources',
        'Vocational Skills Training',
      ],
      impact: 'Over 5,000 students supported annually',
    },
    {
      id: 'health',
      title: 'Health & Nutrition',
      description: 'Improving healthcare access and nutrition for vulnerable communities through comprehensive health programs.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      programs: [
        'Mobile Health Clinics',
        'Nutrition Programs',
        'Maternal & Child Health',
        'Health Education',
      ],
      impact: 'Serving 50+ communities with healthcare services',
    },
    {
      id: 'wash',
      title: 'WASH Programs',
      description: 'Providing clean water, sanitation, and hygiene solutions to ensure healthy communities.',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
      programs: [
        'Water Well Construction',
        'Sanitation Facilities',
        'Hygiene Education',
        'Water Quality Monitoring',
      ],
      impact: 'Access to clean water for 10,000+ people',
    },
  ]

  const initiatives = programs.length > 0
    ? programs.map((program) => ({
        id: program._id,
        title: program.title,
        description: typeof program.description === 'string' 
          ? program.description 
          : 'Comprehensive program designed to create sustainable impact.',
        image: program.featuredImage
          ? urlFor(program.featuredImage).width(800).height(600).auto('format').url()
          : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
        programs: program.subPrograms?.map((sp) => sp.title) || [],
        impact: program.impactMetrics?.[0]?.value || 'Creating lasting positive change',
        slug: program.slug?.current,
      }))
    : fallbackInitiatives

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Initiatives"
        subtitle="Comprehensive programs designed to create sustainable impact"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Initiatives"
      />
      <InitiativesListClient initiatives={initiatives} />
    </main>
  )
}
