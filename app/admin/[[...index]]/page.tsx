'use client'

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// Dynamically import NextStudio to avoid SSR issues
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Sanity Studio...</p>
        </div>
      </div>
    ),
  }
)

export default function AdminPage() {
  return <NextStudio config={config} />
}

