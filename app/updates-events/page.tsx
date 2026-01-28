import { client } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries/posts'
import { allEventsQuery } from '@/lib/sanity/queries/events'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@/lib/sanity/client'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { UpdatesEventsListClient } from '@/components/pages/UpdatesEventsListClient'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  subtitle?: string
  excerpt?: string
  featuredImage?: SanityImageSource
  publishedAt: string
  category?: string
  ctaLink?: string
  ctaText?: string
}

interface Event {
  _id: string
  title: string
  slug: { current: string }
  description?: any
  featuredImage?: SanityImageSource
  eventStart?: string
  location?: string | {
    venue?: string
    address?: string
    city?: string
    country?: string
    isOnline?: boolean
    onlineLink?: string
  }
  eventType?: string
  status?: string
  isInternal?: boolean
}

export default async function UpdatesEventsPage() {
  // Fetch all posts and events from CMS
  let posts: Post[] = []
  let events: Event[] = []
  
  try {
    const now = new Date().toISOString()
    
    // Fetch posts with better error handling
    try {
      posts = await client.fetch(postsQuery) || []
      console.log(`[Updates Events Page] Fetched ${posts.length} posts from Sanity`)
      if (posts.length > 0) {
        console.log('[Updates Events Page] Sample post:', {
          title: posts[0].title,
          status: 'published',
          category: posts[0].category,
        })
      } else {
        // Check if there are any posts at all (including drafts)
        const allPosts = await client.fetch(`*[_type == "post"] { _id, title, status }`) || []
        console.log(`[Updates Events Page] Total posts in CMS: ${allPosts.length}`)
        if (allPosts.length > 0) {
          console.log('[Updates Events Page] Posts found:', allPosts.map((p: any) => ({
            title: p.title,
            status: p.status
          })))
          console.warn('[Updates Events Page] No published posts found. Make sure posts have status="published"')
        }
      }
    } catch (postError) {
      console.error('[Updates Events Page] Error fetching posts:', postError)
    }
    
    // Fetch events with better error handling
    try {
      events = await client.fetch(allEventsQuery) || []
      console.log(`[Updates Events Page] Fetched ${events.length} events from Sanity`)
    } catch (eventError) {
      console.error('[Updates Events Page] Error fetching events:', eventError)
    }
  } catch (error) {
    console.error('[Updates Events Page] General error:', error)
  }

  // Transform posts
  const displayPosts = posts.map((post) => ({
    id: post._id,
    title: post.title,
    excerpt: post.excerpt || post.subtitle || '',
    date: post.publishedAt,
    image: post.featuredImage
      ? urlFor(post.featuredImage).width(800).height(600).auto('format').url()
      : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
    href: post.ctaLink || `/updates-events/${post.slug?.current || '#'}`,
    category: post.category,
    ctaText: post.ctaText,
  }))

  // Transform events
  const displayEvents = events.map((event) => {
    // Handle location - it can be an object or string
    let locationStr = ''
    if (typeof event.location === 'string') {
      locationStr = event.location
    } else if (event.location && typeof event.location === 'object' && !Array.isArray(event.location)) {
      const loc = event.location as { venue?: string; address?: string; city?: string }
      locationStr = loc.venue || loc.address || loc.city || ''
    }
    
    return {
      id: event._id,
      title: event.title,
      excerpt: typeof event.description === 'string' ? event.description : '',
      date: event.eventStart || '',
      location: locationStr,
      image: event.featuredImage
        ? urlFor(event.featuredImage).width(800).height(600).auto('format').url()
        : '/images/95e8571a-ca74-44c7-8191-f14ee2b0a12c.JPG',
      href: `/updates-events/${event.slug?.current || '#'}`,
      eventType: event.eventType,
      status: event.status,
      isInternal: event.isInternal || false,
    }
  })

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
