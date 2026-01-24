import { groq } from 'next-sanity'

// Get all upcoming events
export const upcomingEventsQuery = groq`*[_type == "event" && status == "upcoming" && eventStart >= $now] | order(eventStart asc) {
  _id,
  title,
  slug,
  description,
  featuredImage,
  eventStart,
  eventEnd,
  timezone,
  location,
  eventType,
  registrationLink,
  organizer
}`

// Get all past events
export const pastEventsQuery = groq`*[_type == "event" && status == "past"] | order(eventStart desc) {
  _id,
  title,
  slug,
  description,
  featuredImage,
  eventStart,
  eventEnd,
  location,
  eventType
}`

// Get a single event by slug
export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  featuredImage,
  eventStart,
  eventEnd,
  timezone,
  location,
  eventType,
  registrationLink,
  organizer,
  content,
  seo
}`

// Get latest events (for homepage)
export const latestEventsQuery = groq`*[_type == "event" && status == "upcoming" && eventStart >= $now] | order(eventStart asc)[0...$limit] {
  _id,
  title,
  slug,
  description,
  featuredImage,
  eventStart,
  location
}`




