export const revalidate = 60

import { client } from '@/lib/sanity/client'
import { teamMembersQuery } from '@/lib/sanity/queries/team'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { TeamListClient } from '@/components/pages/TeamListClient'

import { JoinOurTeamSection } from '@/components/pages/JoinOurTeamSection'
import type { SanityImageSource } from '@/lib/sanity/client'

interface TeamMember {
  _id: string
  name: string
  role: string
  department?: string
  photo?: SanityImageSource
  bio?: any
  email?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

export default async function OurTeamPage() {
  // Fetch team members from CMS
  let teamMembers: TeamMember[] = []
  try {
    teamMembers = await client.fetch(teamMembersQuery) || []
  } catch (error) {
    console.error('Error fetching team members:', error)
  }

  // Fallback data
  const fallbackTeam = [
    {
      name: 'Team Member 1',
      role: 'Executive Director',
      department: 'Leadership',
      bio: 'Leading our mission to empower communities across Africa.',
    },
    {
      name: 'Team Member 2',
      role: 'Program Manager',
      department: 'Programs',
      bio: 'Overseeing program implementation and impact measurement.',
    },
    {
      name: 'Team Member 3',
      role: 'Community Outreach Coordinator',
      department: 'Operations',
      bio: 'Building relationships with communities and partners.',
    },
  ]

  const displayTeam = teamMembers.length > 0
    ? teamMembers
    : fallbackTeam.map((m, i) => ({
        _id: `fallback-${i}`,
        name: m.name,
        role: m.role,
        department: m.department,
        bio: m.bio,
        photo: undefined,
        email: undefined,
        socialLinks: undefined,
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Team"
        subtitle="Meet the dedicated professionals working tirelessly to create positive change"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Our Team"
      />
      <TeamListClient teamMembers={displayTeam} />
      <JoinOurTeamSection />
    </main>
  )
}
