import { client } from '@/lib/sanity/client'
import { externalResourcesQuery } from '@/lib/sanity/queries/resources'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { HelpResourcesClient } from '@/components/pages/HelpResourcesClient'

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

export default async function HelpPage() {
  // Fetch external/community resources from CMS
  let resources: Resource[] = []
  try {
    resources = await client.fetch(externalResourcesQuery) || []
  } catch (error) {
    console.error('Error fetching resources:', error)
  }

  // Fallback data if no CMS content
  const fallbackResources = [
    {
      _id: 'fallback-1',
      title: 'Community Food Bank',
      description: 'Provides free food assistance to families in need. Open Monday-Friday 9am-5pm.',
      category: 'Food Assistance',
      resourceType: 'external',
      url: 'https://example.com',
      contactInformation: {
        address: 'Owerri, Imo State',
      },
    },
    {
      _id: 'fallback-2',
      title: 'Housing Support Network',
      description: 'Emergency housing assistance and rental support programs.',
      category: 'Housing',
      resourceType: 'external',
      url: 'https://example.com',
      contactInformation: {
        address: 'Imo State',
        phone: '+234 803 123 4567',
      },
    },
  ]

  const displayResources = resources.length > 0
    ? resources
    : fallbackResources.map((r, i) => ({
        _id: r._id,
        title: r.title,
        description: r.description || '',
        resourceType: r.resourceType || 'external',
        category: r.category || 'Other',
        url: r.url,
        contactInformation: r.contactInformation || {},
        isEmergencyContact: false,
        displayOrder: i,
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Help"
        subtitle="Explore trusted community resources and external services. Use keywords and filters to find services that fit your needs."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Help"
      />
      <HelpResourcesClient resources={displayResources} />
    </main>
  )
}
