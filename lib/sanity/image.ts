import { urlFor } from './client'
import type { SanityImageSource } from '@/lib/sanity/client'

/**
 * Get optimized image URL from Sanity
 */
export function getSanityImageUrl(
  source: SanityImageSource | null | undefined,
  width?: number,
  height?: number,
  format?: 'webp' | 'jpg' | 'png'
): string | null {
  if (!source) return null

  let imageBuilder = urlFor(source)

  if (width) {
    imageBuilder = imageBuilder.width(width)
  }
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }

  // Auto format based on browser support
  if (format) {
    imageBuilder = imageBuilder.format(format)
  } else {
    imageBuilder = imageBuilder.auto('format')
  }

  return imageBuilder.url()
}

/**
 * Get responsive image srcset
 */
export function getSanityImageSrcSet(
  source: SanityImageSource | null | undefined,
  sizes: number[] = [640, 768, 1024, 1280, 1920],
  format?: 'webp' | 'jpg' | 'png'
): string | null {
  if (!source) return null

  return sizes
    .map((size) => {
      const url = getSanityImageUrl(source, size, undefined, format)
      return url ? `${url} ${size}w` : ''
    })
    .filter(Boolean)
    .join(', ')
}

