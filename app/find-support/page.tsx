import { client } from '@/lib/sanity/client'
import { supportResourcesQuery } from '@/lib/sanity/queries/resources'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { FindSupportClient } from '@/components/pages/FindSupportClient'

interface Resource {
  _id: string
  title: string
  description?: string
  resourceType?: string
  category?: string
  url?: string
  contactInformation?: {
    phone?: string
    email?: string
    address?: string
  }
  isEmergencyContact?: boolean
  displayOrder?: number
}

export default async function FindSupportPage() {
  // Fetch internal, partner, and emergency resources from CMS
  let resources: Resource[] = []
  try {
    resources = await client.fetch(supportResourcesQuery) || []
  } catch (error) {
    console.error('Error fetching resources:', error)
  }

  // Fallback data if no CMS content
  const fallbackResources = [
    {
      _id: 'fallback-emergency-1',
      title: 'Emergency Helpline',
      description: '24/7 emergency support and crisis intervention services.',
      category: 'emergency',
      resourceType: 'emergency',
      contactInformation: {
        phone: '+234 803 677 5776',
        email: 'emergency@5brotherslegacy.org',
      },
      isEmergencyContact: true,
      displayOrder: 0,
    },
    {
      _id: 'fallback-internal-1',
      title: 'Community Support Program',
      description: 'Our internal program providing direct assistance to community members in need.',
      category: 'community',
      resourceType: 'internal',
      contactInformation: {
        phone: '+234 803 677 5776',
        email: 'support@5brotherslegacy.org',
        address: 'Owerri, Nigeria',
      },
      displayOrder: 1,
    },
    {
      _id: 'fallback-internal-2',
      title: 'Education Assistance',
      description: 'Scholarships, school supplies, and educational resources for children and youth.',
      category: 'education',
      resourceType: 'internal',
      contactInformation: {
        email: 'education@5brotherslegacy.org',
      },
      displayOrder: 2,
    },
    {
      _id: 'fallback-internal-3',
      title: 'Healthcare Services',
      description: 'Medical consultations, health screenings, and access to healthcare resources.',
      category: 'healthcare',
      resourceType: 'internal',
      contactInformation: {
        phone: '+234 803 677 5776',
        email: 'health@5brotherslegacy.org',
      },
      displayOrder: 3,
    },
    {
      _id: 'fallback-partner-1',
      title: 'Partner Food Bank',
      description: 'Food assistance program in partnership with local organizations.',
      category: 'food',
      resourceType: 'partner',
      contactInformation: {
        address: 'Owerri, Imo State',
      },
      url: 'https://example.com',
      displayOrder: 4,
    },
  ]

  const displayResources = resources.length > 0
    ? resources
    : fallbackResources

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Find Support"
        subtitle="Access our internal services, partner organizations, and emergency support resources"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Find Support"
      />
      <FindSupportClient resources={displayResources} />
    </main>
  )
}
