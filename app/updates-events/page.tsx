import { client } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries/posts'
import { upcomingEventsQuery } from '@/lib/sanity/queries/events'
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
  // Fetch all posts and events from CMS
  let posts: Post[] = []
  let events: Event[] = []
  
  try {
    const now = new Date().toISOString()
    [posts, events] = await Promise.all([
      client.fetch(postsQuery).catch(() => []),
      client.fetch(upcomingEventsQuery, { now }).catch(() => []),
    ])
  } catch (error) {
    console.error('Error fetching updates and events:', error)
  }

  // Fallback data for posts
  const fallbackPosts = [
    {
      title: 'Community Impact Story',
      date: '2025-01-10',
      excerpt: 'Learn how our programs are making a difference in local communities across Africa.',
      image: '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
    },
    {
      title: 'New Initiative Launch',
      date: '2025-01-05',
      excerpt: 'We\'re excited to announce our latest program focusing on education and youth empowerment.',
      image: '/images/bb3a945c-355f-4ff6-91cb-646e9dd7f91d.JPG',
    },
  ]

  // Fallback data for events
  const fallbackEvents = [
    {
      title: 'Upcoming Community Event',
      date: '2025-01-15',
      excerpt: 'Join us for our upcoming community event where we\'ll celebrate our achievements.',
      image: '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
    },
  ]

  // Transform posts
  const displayPosts = posts.length > 0
    ? posts.map((post) => ({
        id: post._id,
        title: post.title,
        excerpt: post.excerpt || '',
        date: post.publishedAt,
        image: post.featuredImage
          ? urlFor(post.featuredImage).width(800).height(600).auto('format').url()
          : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
        href: `/updates-events/${post.slug?.current || '#'}`,
      }))
    : fallbackPosts.map((p, i) => ({
        id: `fallback-post-${i}`,
        ...p,
        href: '/updates-events',
      }))

  // Transform events
  const displayEvents = events.length > 0
    ? events.map((event) => ({
        id: event._id,
        title: event.title,
        excerpt: typeof event.description === 'string' ? event.description : '',
        date: event.eventStart || '',
        location: event.location || '',
        image: event.featuredImage
          ? urlFor(event.featuredImage).width(800).height(600).auto('format').url()
          : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
        href: `/updates-events/${event.slug?.current || '#'}`,
      }))
    : fallbackEvents.map((e, i) => ({
        id: `fallback-event-${i}`,
        ...e,
        location: '',
        href: '/updates-events',
      }))

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Updates & Events"
        subtitle="Stay informed about our latest projects and community impact"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Updates & Events"
      />
      <UpdatesEventsListClient posts={displayPosts} events={displayEvents} />
    </main>
  )
}
