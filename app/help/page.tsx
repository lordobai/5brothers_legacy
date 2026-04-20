export const revalidate = 60

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

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Help"
        subtitle="Explore trusted community resources and external services. Use keywords and filters to find services that fit your needs."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Help"
      />
      <HelpResourcesClient resources={resources} />
    </main>
  )
}
