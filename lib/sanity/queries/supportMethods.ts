import { groq } from 'next-sanity'

// Get all active support methods
export const supportMethodsQuery = groq`*[_type == "supportMethod" && (!defined(isActive) || isActive == true)] | order(displayOrder asc, _createdAt desc) {
  _id,
  title,
  description,
  icon,
  category,
  actionUrl,
  ctaText,
  displayOrder
}`

// Get support methods by category
export const supportMethodsByCategoryQuery = groq`*[_type == "supportMethod" && (!defined(isActive) || isActive == true) && category == $category] | order(displayOrder asc, _createdAt desc) {
  _id,
  title,
  description,
  icon,
  category,
  actionUrl,
  ctaText,
  displayOrder
}`

