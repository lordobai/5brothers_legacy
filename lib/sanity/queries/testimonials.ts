import { groq } from 'next-sanity'

// Get all published testimonials
export const testimonialsQuery = groq`*[_type == "testimonial" && status == "published"] | order(displayOrder asc, _createdAt desc) {
  _id,
  name,
  role,
  organization,
  quote,
  photo,
  category,
  displayOrder
}`

// Get testimonials by category
export const testimonialsByCategoryQuery = groq`*[_type == "testimonial" && status == "published" && category == $category] | order(displayOrder asc, _createdAt desc) {
  _id,
  name,
  role,
  organization,
  quote,
  photo,
  category,
  displayOrder
}`

