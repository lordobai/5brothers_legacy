export const revalidate = 60

import { client } from '@/lib/sanity/client'
import { testimonialsQuery } from '@/lib/sanity/queries/testimonials'
import { WaysToSupportHero } from '@/components/pages/WaysToSupportHero'
import { WaysToSupportClient } from '@/components/pages/WaysToSupportClient'
import { TestimonialsSection } from '@/components/pages/TestimonialsSection'

interface Testimonial {
  _id: string
  name?: string
  role?: string
  organization?: string
  quote?: any[]
}

export default async function WaysToSupportPage() {
  // Fetch testimonials from CMS
  let testimonials: Testimonial[] = []
  try {
    testimonials = await client.fetch(testimonialsQuery) || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
  }

  const ways = [
    {
      title: 'Make a Financial Donation',
      description: 'Your financial donation directly supports our programs and operations, allowing us to serve communities, expand access to essential resources, and sustain long-term impact. Every gift—large or small—helps us continue this work with accountability and purpose.',
      icon: '📢',
      buttonText: 'Donate Now',
      buttonLink: '/make-a-gift',
    },
    {
      title: 'Lend Your Voice',
      description: 'Advocate for our cause and help raise awareness about the challenges facing vulnerable communities.',
      icon: '🎯',
      buttonText: 'Become an Advocate',
      buttonLink: '/get-involved',
    },
    {
      title: 'Support Our Project',
      description: 'Choose a specific project or program to support and see your impact in action.',
      icon: '🤝',
      buttonText: 'View Projects',
      buttonLink: '/our-programs',
    },
    {
      title: 'Collaborate',
      description: 'Partner with us to amplify our impact through organizational partnerships and collaborations.',
      icon: '🛍️',
      buttonText: 'Partner With Us',
      buttonLink: '/get-involved',
    },
    {
      title: 'Support Our Mission',
      description: 'Support our work by purchasing our branded items. Each item represents a contribution toward our programs, and 100% of net proceeds directly fund our community initiatives.',
      icon: '💝',
      buttonText: 'Learn More',
      buttonLink: '/make-a-gift',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <WaysToSupportHero />

      {/* Ways to Support Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <WaysToSupportClient ways={ways} />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={testimonials} />
          </div>
        </div>
      </section>
    </main>
  )
}
