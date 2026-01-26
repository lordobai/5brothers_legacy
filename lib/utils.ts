import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Extract plain text from Sanity block array or single block
export function blocksToText(blocks: any): string {
  if (!blocks) return ''
  
  // Handle single block object (not an array)
  if (blocks && typeof blocks === 'object' && !Array.isArray(blocks)) {
    if (blocks._type === 'block' && blocks.children) {
      return blocks.children.map((child: any) => child?.text || '').join('').trim()
    }
    return '' // Not a block object, return empty
  }
  
  // Handle array of blocks
  if (!Array.isArray(blocks)) return ''
  
  return blocks
    .map((block) => {
      if (!block || block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child?.text || '').join('')
    })
    .filter(text => text.length > 0)
    .join('\n\n')
    .trim()
}
