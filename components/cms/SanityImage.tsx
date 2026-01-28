import Image from 'next/image'
import { getSanityImageUrl } from '@/lib/sanity/image'
import type { SanityImageSource } from '@/lib/sanity/client'

interface SanityImageProps {
  image: SanityImageSource | null | undefined
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export default function SanityImage({
  image,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: SanityImageProps) {
  if (!image) return null

  const imageUrl = getSanityImageUrl(image, width || 800, height, 'webp')

  if (!imageUrl) return null

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover' }}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}

