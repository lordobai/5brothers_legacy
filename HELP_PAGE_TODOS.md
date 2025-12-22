# Help Page - Development To-Do List

This document tracks the remaining tasks and enhancements for the Help page (`/help`) as development proceeds.

## Status Overview
- ✅ **Core Features Complete**: Page structure, search/filters, resource cards, submission form
- 🔄 **In Progress**: None
- ⏳ **Pending**: Backend integration and advanced features

---

## Backend Integration & Database

### Priority: High

- [ ] **Set up database schema**
  - Create `Resources` table/collection with all required fields
  - Fields: id, organization_name, resource_type, description, link_url, logo_image_url, contact_phone, contact_email, address, service_area, eligibility, languages, status, created_at, updated_at
  - Add indexes for search performance (organization_name, resource_type, service_area)

- [ ] **Create API routes**
  - `GET /api/resources` - Fetch all published resources with filtering
  - `POST /api/resources` - Create new resource submission
  - `GET /api/resources/[id]` - Get single resource
  - `PATCH /api/resources/[id]` - Update resource (admin only)
  - `DELETE /api/resources/[id]` - Delete resource (admin only)
  - `GET /api/resources/admin` - Admin endpoint for pending/draft resources

- [ ] **Connect frontend to API**
  - Replace mock data with API calls
  - Add loading states for API requests
  - Implement error handling for API failures
  - Add retry logic for failed requests

- [ ] **Environment variables**
  - Set up database connection strings
  - Configure API keys/secrets
  - Add environment-specific settings

---

## Logo/Image Fetching Enhancement

### Priority: Medium

- [ ] **Server-side logo fetching service**
  - Create API endpoint: `POST /api/resources/fetch-logo`
  - Implement Open Graph metadata parsing
  - Try multiple sources: favicon, og:image, apple-touch-icon
  - Cache fetched logos to avoid repeated requests
  - Set up fallback to initials badge

- [ ] **Logo optimization**
  - Resize and optimize fetched images
  - Store logos in cloud storage (S3, Cloudinary, etc.)
  - Generate multiple sizes (thumbnail, medium, large)
  - Add image CDN for fast delivery

- [ ] **Logo validation**
  - Validate image formats and sizes
  - Handle broken/invalid image URLs
  - Add timeout for logo fetching requests

---

## Admin Panel & Content Management

### Priority: High

- [ ] **Admin authentication**
  - Set up authentication system (NextAuth.js or similar)
  - Create admin role/permissions
  - Protect admin routes

- [ ] **Admin dashboard**
  - List all resources (published, pending, draft)
  - Filter by status, type, date
  - Bulk actions (approve, reject, delete multiple)
  - Search functionality

- [ ] **Resource management**
  - Approve/reject submissions
  - Edit resource details
  - Delete resources
  - Feature/pin resources (pin to top of list)
  - Change resource status

- [ ] **Admin form**
  - Pre-fill form with existing data for editing
  - Direct publish option (bypass pending status)
  - Upload custom logo/image
  - Preview resource card before publishing

---

## Advanced Features

### Priority: Medium

- [ ] **CSV bulk import**
  - Create import interface for admins
  - Parse CSV files with resource data
  - Validate imported data
  - Batch create resources
  - Show import results/errors

- [ ] **Enhanced search**
  - Full-text search with relevance scoring
  - Search suggestions/autocomplete
  - Search history (localStorage)
  - Recent searches display

- [ ] **Advanced filters**
  - Remote/In-person filter
  - Audience/Eligibility filter
  - Language filter (multi-select)
  - Date range filter (newest/oldest)
  - Distance-based filtering (if location data available)

- [ ] **Resource analytics**
  - Track search queries (keyword + resource type)
  - Track outbound link clicks
  - Track most viewed resources
  - Generate analytics dashboard for admins
  - Privacy-friendly tracking (anonymized)

---

## User Experience Enhancements

### Priority: Medium

- [ ] **Resource detail page**
  - Create individual resource detail pages (`/help/resource/[id]`)
  - Show full resource information
  - Related resources suggestions
  - Share functionality (social media, email)
  - Print-friendly view

- [ ] **Pagination/Infinite scroll**
  - Add pagination for large result sets
  - Or implement infinite scroll
  - Show loading indicators
  - Maintain scroll position on filter changes

- [ ] **Saved resources**
  - Allow users to save/bookmark resources
  - Store in localStorage or user account
  - Display saved resources list
  - Quick access to saved items

- [ ] **Resource reviews/ratings**
  - Allow users to rate resources (1-5 stars)
  - Add review comments
  - Display average rating on cards
  - Filter by rating

---

## Performance & Optimization

### Priority: Medium

- [ ] **Caching strategy**
  - Cache resource list API responses
  - Implement Redis or similar for fast lookups
  - Cache logo images
  - Set appropriate cache headers

- [ ] **Image optimization**
  - Use Next.js Image component for logos
  - Implement lazy loading for resource cards
  - Generate WebP/AVIF formats
  - Add blur placeholders

- [ ] **Code splitting**
  - Lazy load resource submission form
  - Code split admin components
  - Optimize bundle size

- [ ] **Database optimization**
  - Add database indexes for common queries
  - Optimize search queries
  - Implement pagination at database level
  - Add query result caching

---

## Accessibility & Compliance

### Priority: High

- [ ] **Accessibility audit**
  - Test with screen readers
  - Verify keyboard navigation
  - Check color contrast ratios
  - Test with accessibility tools (WAVE, axe DevTools)

- [ ] **WCAG compliance**
  - Ensure AA compliance
  - Add skip links
  - Improve focus indicators
  - Add ARIA labels where needed

- [ ] **Privacy & GDPR**
  - Add cookie consent notice (if analytics used)
  - Privacy policy link
  - Data retention policy
  - User data export/deletion options

---

## Testing

### Priority: High

- [ ] **Unit tests**
  - Test search/filter logic
  - Test form validation
  - Test utility functions (logo fetching, initials generation)

- [ ] **Integration tests**
  - Test API endpoints
  - Test form submission flow
  - Test admin approval workflow

- [ ] **E2E tests**
  - Test complete user journey (search → view → submit)
  - Test admin workflow (approve → edit → publish)
  - Test mobile responsiveness

- [ ] **Performance tests**
  - Load testing for API endpoints
  - Test with large datasets (1000+ resources)
  - Measure page load times
  - Lighthouse audits

---

## Documentation

### Priority: Low

- [ ] **User documentation**
  - How to search for resources
  - How to submit a resource
  - FAQ section

- [ ] **Admin documentation**
  - How to approve resources
  - How to edit resources
  - How to use bulk import
  - How to manage featured resources

- [ ] **Developer documentation**
  - API documentation
  - Database schema documentation
  - Component documentation
  - Deployment guide

---

## Bug Fixes & Improvements

### Priority: As Needed

- [ ] Fix any reported bugs
- [ ] Improve error messages
- [ ] Enhance mobile experience
- [ ] Optimize for slow connections
- [ ] Add loading skeletons
- [ ] Improve empty states

---

## Notes

- Current implementation uses local state with mock data
- All components are built and functional
- Ready for backend integration
- Design follows existing project patterns
- Mobile-responsive and accessible

---

**Last Updated**: 2025-01-27  
**Status**: Core features complete, ready for backend integration

