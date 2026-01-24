import { groq } from 'next-sanity'

// Get all active partners
export const partnersQuery = groq`*[_type == "partner" && isActive == true] | order(displayOrder asc, organizationName asc) {
  _id,
  organizationName,
  logo,
  website,
  description,
  partnerType,
  partnershipCategory,
  displayOrder
}`

// Get partners by type
export const partnersByTypeQuery = groq`*[_type == "partner" && isActive == true && partnerType == $type] | order(displayOrder asc, organizationName asc) {
  _id,
  organizationName,
  logo,
  website,
  description,
  partnerType
}`




