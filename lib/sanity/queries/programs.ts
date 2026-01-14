import { groq } from 'next-sanity'

// Get all programs
export const programsQuery = groq`*[_type == "program"] | order(category asc, title asc) {
  _id,
  title,
  slug,
  category,
  description,
  featuredImage,
  impactMetrics,
  subPrograms,
  status,
  "galleryCount": count(gallery)
}`

// Get a single program by slug
export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  featuredImage,
  impactMetrics,
  subPrograms,
  gallery,
  relatedPrograms[]->{
    _id,
    title,
    slug,
    category,
    featuredImage
  },
  status,
  seo
}`

// Get programs by category
export const programsByCategoryQuery = groq`*[_type == "program" && category == $category] | order(title asc) {
  _id,
  title,
  slug,
  category,
  description,
  featuredImage,
  impactMetrics,
  status
}`

// Get active programs
export const activeProgramsQuery = groq`*[_type == "program" && status == "active"] | order(category asc, title asc) {
  _id,
  title,
  slug,
  category,
  description,
  featuredImage,
  impactMetrics
}`


