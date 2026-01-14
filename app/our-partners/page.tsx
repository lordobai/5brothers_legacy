import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { partnersQuery } from '@/lib/sanity/queries/partners'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { PartnersListClient } from '@/components/pages/PartnersListClient'

interface Partner {
  _id: string
  organizationName: string
  logo: SanityImageSource
  website: string
  partnerType?: string
  description?: any
  displayOrder?: number
}

export default async function OurPartnersPage() {
  // Fetch partners from CMS
  let partners: Partner[] = []
  try {
    partners = await client.fetch(partnersQuery) || []
  } catch (error) {
    console.error('Error fetching partners:', error)
  }

  // Fallback data
  const fallbackPartners = [
    { name: 'Partner Organization 1', type: 'Corporate', description: 'Supporting education initiatives' },
    { name: 'Partner Organization 2', type: 'NGO', description: 'Healthcare program collaboration' },
    { name: 'Partner Organization 3', type: 'Foundation', description: 'WASH infrastructure development' },
  ]

  const displayPartners = partners.length > 0
    ? partners
    : fallbackPartners.map((p, i) => ({
        _id: `fallback-${i}`,
        organizationName: p.name,
        logo: null,
        website: '#',
        partnerType: p.type,
        description: p.description,
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Trusted Partners"
        subtitle="Together, we're creating lasting impact in communities across Africa"
        backgroundImage="/images/e4bad332-757a-43e8-8ebf-5b74f1d12d42.JPG"
        alt="Our Partners"
      />
      <PartnersListClient partners={displayPartners} />
    </main>
  )
}
