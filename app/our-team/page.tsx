import { client } from '@/lib/sanity/client'
import { teamMembersQuery } from '@/lib/sanity/queries/team'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { TeamListClient } from '@/components/pages/TeamListClient'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

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
        photo: null,
        email: null,
        socialLinks: null,
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Our Team"
        subtitle="Meet the dedicated individuals driving our mission forward"
        backgroundImage="/images/f18963a1-eae1-47af-ab06-d71c636d170a.JPG"
        alt="Our Team"
      />
      <TeamListClient teamMembers={displayTeam} />
    </main>
  )
}
