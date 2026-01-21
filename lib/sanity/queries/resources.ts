import { groq } from 'next-sanity'

// Get all active resources
export const resourcesQuery = groq`*[_type == "resource" && isActive == true] | order(displayOrder asc, title asc) {
  _id,
  title,
  description,
  resourceType,
  category,
  url,
  contactInformation,
  isEmergencyContact,
  displayOrder
}`

// Get resources by category
export const resourcesByCategoryQuery = groq`*[_type == "resource" && isActive == true && category == $category] | order(displayOrder asc, title asc) {
  _id,
  title,
  description,
  resourceType,
  category,
  url,
  contactInformation,
  isEmergencyContact,
  displayOrder
}`

// Get a single resource by ID
export const resourceByIdQuery = groq`*[_type == "resource" && _id == $id][0] {
  _id,
  title,
  description,
  resourceType,
  category,
  url,
  contactInformation,
  isEmergencyContact,
  displayOrder
}`

