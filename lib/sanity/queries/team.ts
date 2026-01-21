import { groq } from 'next-sanity'

// Get all team members (displayed on team page)
export const teamMembersQuery = groq`*[_type == "teamMember" && displayOnTeamPage == true] | order(displayOrder asc, name asc) {
  _id,
  name,
  role,
  department,
  photo,
  bio,
  email,
  socialLinks,
  displayOrder
}`

// Get a single team member by ID
export const teamMemberByIdQuery = groq`*[_type == "teamMember" && _id == $id][0] {
  _id,
  name,
  role,
  department,
  photo,
  bio,
  email,
  socialLinks
}`

// Get team members by department
export const teamMembersByDepartmentQuery = groq`*[_type == "teamMember" && displayOnTeamPage == true && department == $department] | order(displayOrder asc, name asc) {
  _id,
  name,
  role,
  department,
  photo,
  bio,
  email,
  socialLinks
}`



