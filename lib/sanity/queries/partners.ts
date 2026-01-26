import { groq } from 'next-sanity'

// Get all active partners
// Includes partners where isActive is true or undefined (for backward compatibility)
export const partnersQuery = groq`*[_type == "partner" && (!defined(isActive) || isActive == true)] | order(displayOrder asc, organizationName asc) {
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
// Includes partners where isActive is true or undefined (for backward compatibility)
export const partnersByTypeQuery = groq`*[_type == "partner" && (!defined(isActive) || isActive == true) && partnerType == $type] | order(displayOrder asc, organizationName asc) {
  _id,
  organizationName,
  logo,
  website,
  description,
  partnerType
}`




