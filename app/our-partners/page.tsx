import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { partnersQuery } from '@/lib/sanity/queries/partners'
import { urlFor } from '@/lib/sanity/client'
import { blocksToText } from '@/lib/utils'
import type { SanityImageSource } from '@/lib/sanity/client'
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
    // First, let's check all partners (for debugging)
    const allPartners = await client.fetch(`*[_type == "partner"] { _id, organizationName, isActive }`) || []
    console.log(`[Our Partners Page] Total partners in CMS: ${allPartners.length}`)
    if (allPartners.length > 0) {
      console.log('[Our Partners Page] Partners found:', allPartners.map((p: any) => ({
        name: p.organizationName,
        isActive: p.isActive
      })))
    }
    
    // Now fetch the filtered list
    partners = await client.fetch(partnersQuery) || []
    console.log(`[Our Partners Page] Fetched ${partners.length} partners matching query`)
    
    if (allPartners.length > 0 && partners.length === 0) {
      console.warn('[Our Partners Page] Partners exist but none match the query. Check:')
      console.warn('1. Are they published? (not just saved as drafts)')
      console.warn('2. Is "Active Partner" set to true?')
    }
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
    ? partners.map((p) => ({
        ...p,
        description: p.description 
          ? (typeof p.description === 'string' 
              ? p.description 
              : blocksToText(p.description))
          : undefined,
      }))
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
        title="Our Partners"
        subtitle="Together, we're creating lasting impact in communities across Africa"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Our Partners"
      />
      <PartnersListClient partners={displayPartners} />
    </main>
  )
}
