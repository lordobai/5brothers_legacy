import { groq } from 'next-sanity'

// Get all published posts (or posts without status field for backward compatibility)
export const postsQuery = groq`*[_type == "post" && (!defined(status) || status == "published")] | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  updatedAt,
  author->{
    name,
    role,
    photo
  },
  category,
  tags,
  status,
  ctaLink,
  ctaText,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
}`

// Get a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  slug,
  featuredImage,
  publishedAt,
  updatedAt,
  author->{
    name,
    role,
    photo,
    bio
  },
  excerpt,
  content,
  humanStory,
  ctaText,
  ctaLink,
  category,
  tags,
  seo,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
}`

// Get latest posts (for homepage)
export const latestPostsQuery = groq`*[_type == "post" && (!defined(status) || status == "published")] | order(publishedAt desc)[0...$limit] {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  category,
  ctaLink,
  ctaText
}`

// Get posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && status == "published" && category == $category] | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  category
}`




