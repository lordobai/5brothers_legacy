import { client } from '@/lib/sanity/client'
import { latestPostsQuery, upcomingEventsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { UpdatesEventsListClient } from '@/components/pages/UpdatesEventsListClient'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  featuredImage?: SanityImageSource
  publishedAt: string
  category?: string
}

interface Event {
  _id: string
  title: string
  slug: { current: string }
  description?: any
  featuredImage?: SanityImageSource
  eventStart?: string
  location?: string
  eventType?: string
}

export default async function UpdatesEventsPage() {
  // Fetch posts and events from CMS
  let posts: Post[] = []
  let events: Event[] = []
  
  try {
    const now = new Date().toISOString()
    [posts, events] = await Promise.all([
      client.fetch(latestPostsQuery, { limit: 6 }).catch(() => []),
      client.fetch(upcomingEventsQuery, { now }).catch(() => []),
    ])
  } catch (error) {
    console.error('Error fetching updates and events:', error)
  }

  // Fallback data
  const fallbackUpdates = [
    {
      title: 'Community Impact Story',
      date: '2025-01-10',
      type: 'Update',
      excerpt: 'Learn how our programs are making a difference in local communities across Africa.',
      image: '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
    },
    {
      title: 'New Initiative Launch',
      date: '2025-01-05',
      type: 'Event',
      excerpt: 'We\'re excited to announce our latest program focusing on education and youth empowerment.',
      image: '/images/bb3a945c-355f-4ff6-91cb-646e9dd7f91d.JPG',
    },
    {
      title: 'Upcoming Community Event',
      date: '2025-01-15',
      type: 'Event',
      excerpt: 'Join us for our upcoming community event where we\'ll celebrate our achievements.',
      image: '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
    },
  ]

  // Combine posts and events
  const allUpdates = [
    ...posts.map((post) => ({
      id: post._id,
      title: post.title,
      excerpt: post.excerpt || '',
      date: post.publishedAt,
      type: 'Update',
      image: post.featuredImage
        ? urlFor(post.featuredImage).width(800).height(600).auto('format').url()
        : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
      href: `/updates-events/${post.slug?.current || '#'}`,
    })),
    ...events.map((event) => ({
      id: event._id,
      title: event.title,
      excerpt: typeof event.description === 'string' ? event.description : '',
      date: event.eventStart || '',
      type: 'Event',
      image: event.featuredImage
        ? urlFor(event.featuredImage).width(800).height(600).auto('format').url()
        : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
      href: `/updates-events/${event.slug?.current || '#'}`,
    })),
  ]

  const displayUpdates = allUpdates.length > 0
    ? allUpdates
    : fallbackUpdates.map((u, i) => ({
        id: `fallback-${i}`,
        ...u,
        href: '/updates-events',
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Updates & Events"
        subtitle="Stay informed about our latest projects and community impact"
        backgroundImage="/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG"
        alt="Updates & Events"
      />
      <UpdatesEventsListClient updates={displayUpdates} />
    </main>
  )
}
