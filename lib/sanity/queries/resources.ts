import { groq } from 'next-sanity'

// Get all active and approved resources (legacy - use specific queries instead)
export const resourcesQuery = groq`*[_type == "resource" && isActive == true && (!defined(status) || status == "approved")] | order(displayOrder asc, title asc) {
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

// Get external/community resources (for /help page)
export const externalResourcesQuery = groq`*[_type == "resource" && isActive == true && (!defined(status) || status == "approved") && resourceType == "external"] | order(displayOrder asc, title asc) {
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

// Get internal, partner, and emergency resources (for /find-support page)
export const supportResourcesQuery = groq`*[_type == "resource" && isActive == true && (!defined(status) || status == "approved") && resourceType in ["internal", "partner", "emergency"]] | order(isEmergencyContact desc, displayOrder asc, title asc) {
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

// Get pending resources (for admin review)
export const pendingResourcesQuery = groq`*[_type == "resource" && status == "pending"] | order(_createdAt desc) {
  _id,
  title,
  description,
  resourceType,
  category,
  url,
  contactInformation,
  submittedBy,
  _createdAt
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


