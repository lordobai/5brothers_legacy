import { client } from '@/lib/sanity/client'
import { activeProgramsQuery } from '@/lib/sanity/queries/programs'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@/lib/sanity/client'
import { InitiativesListClient } from '@/components/pages/InitiativesListClient'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'

interface Program {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  description?: any // Portable Text
  featuredImage?: SanityImageSource
  impactMetrics?: string // Text field, not array
  subPrograms?: string[] // Array of strings, not objects
}

export default async function OurProgramsPage() {
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
      description: 'Empowering children and youth through quality education and skill development',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      programs: [
        'Scholarship Programs',
        'School Infrastructure Development',
        'Teacher Training & Support',
        'Digital Learning Initiatives',
        'Vocational Skills Training',
      ],
      impact: '2,500+ students supported',
    },
    {
      id: 'health',
      title: 'Health & Nutrition Programs',
      description: 'Improving healthcare access and nutrition for vulnerable communities',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      programs: [
        'Community Health Clinics',
        'Nutrition Programs',
        'Maternal & Child Health',
        'Health Education & Awareness',
      ],
      impact: '10+ health facilities reached',
    },
    {
      id: 'wash',
      title: 'WASH (Clean Water, Better Lives)',
      description: 'Providing clean water, sanitation, and hygiene solutions',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
      programs: [
        'Water Well Installation',
        'Sanitation Facilities',
        'Hygiene Education',
        'Water Quality Monitoring',
      ],
      impact: '1500+ people with access to clean water',
    },
    {
      id: 'disaster-response',
      title: 'Disaster Response',
      description: 'Rapid response and recovery support for communities affected by disasters',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      programs: [
        'Emergency Relief',
        'Shelter & Housing',
        'Food Security',
        'Recovery & Rebuilding',
      ],
      impact: '1,500+ displaced persons assisted',
    },
    {
      id: 'youth-empowerment',
      title: 'Youth Empowerment',
      description: 'Empowering young people with skills, opportunities, and mentorship',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      programs: [
        'Leadership Training',
        'Entrepreneurship Programs',
        'Mentorship Networks',
        'Career Development',
      ],
      impact: '100+ youth empowered',
    },
    {
      id: 'advocacy-policy',
      title: 'Advocacy & Policy Influence',
      description: 'Advocating for policies that support vulnerable communities',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      programs: [
        'Policy Research',
        'Community Mobilization',
        'Stakeholder Engagement',
        'Awareness Campaigns',
        'Legal Support',
        'Rights Education',
      ],
      impact: '',
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
        programs: program.subPrograms || [],
        impact: program.impactMetrics || 'Creating lasting positive change',
        slug: program.slug?.current,
      }))
    : fallbackInitiatives

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Programs"
        subtitle="Comprehensive programs designed to create sustainable impact"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Programs"
      />
      <InitiativesListClient initiatives={initiatives} />
    </main>
  )
}
