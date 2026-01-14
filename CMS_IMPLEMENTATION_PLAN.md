# CMS Implementation Plan for 5Brothers Legacy Initiative

## 📋 Overview

This document outlines the complete plan for setting up a Content Management System (CMS) for the 5Brothers Legacy Initiative website.

---

## 🎯 CMS Selection: Sanity.io

### Why Sanity?
- ✅ **Perfect Next.js Integration**: Native support with `next-sanity`
- ✅ **Real-time Collaboration**: Multiple editors can work simultaneously
- ✅ **Developer-Friendly**: TypeScript support, GraphQL API, REST API
- ✅ **Rich Content Editor**: Portable Text for rich content
- ✅ **Media Management**: Built-in image optimization and CDN
- ✅ **Free Tier**: Generous free plan (perfect for nonprofits)
- ✅ **Flexible Schema**: Easy to customize content models
- ✅ **Version History**: Built-in content versioning
- ✅ **Preview Mode**: Preview drafts before publishing
- ✅ **GROQ Query Language**: Powerful and flexible querying

### Alternative Consideration
**File-based (Markdown/JSON)** could work for MVP, but Sanity provides:
- Better UX for non-technical content editors
- Built-in media library
- Content versioning
- Draft/preview workflow
- Better scalability

---

## 📦 Required Content Types

Based on the project specification, we need to manage the following content types:

### 1. **Blog Posts / News Articles** (`post`)
- Title, Subtitle, Slug
- Featured Image
- Author
- Publish Date, Updated Date
- Content (Rich Text - Portable Text)
- Category/Tags
- Excerpt/Summary
- SEO Metadata (Meta Title, Description, OG Image)
- Status (Draft, Published)
- Related Posts

### 2. **Events** (`event`)
- Title, Description
- Featured Image
- Event Date/Time (Start, End, Timezone)
- Location (Venue, Address, Online/Offline)
- Event Type (Workshop, Conference, Webinar, etc.)
- Registration Link
- Organizer Info
- Content (Rich Text)
- Status (Upcoming, Past, Cancelled)
- SEO Metadata

### 3. **Team Members** (`teamMember`)
- Full Name
- Role/Position
- Department
- Bio (Rich Text)
- Photo
- Email (optional, public)
- Social Media Links (LinkedIn, Twitter, etc.)
- Order/Sort Priority
- Display on Team Page (Boolean)

### 4. **Partners** (`partner`)
- Organization Name
- Logo
- Website URL
- Description (Rich Text)
- Partner Type (Corporate, NGO, Government, etc.)
- Partnership Category
- Display Order
- Active Status

### 5. **Reports** (`report`)
- Title
- Report Type (Annual, Financial, Audit, Program)
- Publication Date
- PDF File Upload
- Thumbnail/Preview Image
- Executive Summary (Rich Text)
- Download Count (Analytics)
- Status (Draft, Published)

### 6. **Programs/Initiatives** (`program`)
- Title
- Category (Education, Health, WASH, Disaster Response, Youth, Advocacy, M&E)
- Slug
- Featured Image
- Description (Rich Text)
- Impact Metrics/Metrics
- Sub-programs (Array)
- Related Programs
- Gallery Images
- Status (Active, Completed, Planning)
- SEO Metadata

### 7. **Pages** (`page`)
- Title
- Slug (URL)
- Page Type (Static Page)
- Content (Rich Text - Flexible blocks)
- SEO Metadata
- Parent Page (for hierarchical pages)
- Status (Draft, Published)

### 8. **Testimonials / Impact Stories** (`testimonial`)
- Name
- Role/Title
- Organization (optional)
- Photo
- Quote/Story (Rich Text)
- Featured Image
- Category/Program Association
- Display Order
- Status

### 9. **Support Methods** (`supportMethod`)
- Title
- Description (Rich Text)
- Icon/Image
- Category (Donate, Volunteer, Advocate, Partner, Shop)
- Action URL
- Call-to-Action Text
- Display Order

### 10. **Resources** (`resource`) - For "Find Support" page
- Title
- Description
- Resource Type (Internal Service, External Link, Partner Organization)
- Category
- URL (for external)
- Contact Information
- Emergency Contact (Boolean)
- Display Order

---

## 🏗️ Implementation Plan

### Phase 1: Setup & Installation

#### Step 1.1: Install Dependencies
```bash
npm install @sanity/client @sanity/image-url next-sanity @sanity/vision @portabletext/react
```

#### Step 1.2: Initialize Sanity Project
```bash
# Create Sanity configuration
npx sanity@latest init
```
- Project name: `5brothers-legacy`
- Dataset: `production`
- Project output path: `./sanity`
- Template: Blank

#### Step 1.3: Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token (for admin)
```

### Phase 2: Schema Definition

#### Step 2.1: Create Schema Files Structure
```
sanity/
├── schemas/
│   ├── index.ts              # Schema registry
│   ├── objects/
│   │   ├── seo.ts           # SEO metadata object
│   │   ├── image.ts         # Image with alt text
│   │   ├── richText.ts      # Portable Text config
│   │   └── socialLinks.ts   # Social media links
│   ├── documents/
│   │   ├── post.ts          # Blog post schema
│   │   ├── event.ts         # Event schema
│   │   ├── teamMember.ts    # Team member schema
│   │   ├── partner.ts       # Partner schema
│   │   ├── report.ts        # Report schema
│   │   ├── program.ts       # Program/Initiative schema
│   │   ├── page.ts          # Static page schema
│   │   ├── testimonial.ts   # Testimonial schema
│   │   ├── supportMethod.ts # Support method schema
│   │   └── resource.ts      # Resource schema
│   └── singleton/
│       └── siteSettings.ts  # Site-wide settings
```

#### Step 2.2: Define Core Schemas
Each schema will include:
- Field definitions (type, validation)
- Preview configuration
- Ordering/sorting
- Status/draft handling
- SEO fields

### Phase 3: Sanity Studio Setup

#### Step 3.1: Create Studio Route
- Route: `/admin` or `/studio`
- File: `app/admin/[[...index]]/page.tsx`
- Embedded Sanity Studio

#### Step 3.2: Configure Studio
- Custom logo/branding
- Desk structure (navigation)
- Document actions
- Custom input components (if needed)

### Phase 4: Client Integration

#### Step 4.1: Create Sanity Client Utilities
```
lib/
├── sanity/
│   ├── client.ts            # Sanity client instance
│   ├── image.ts             # Image URL builder
│   ├── queries/
│   │   ├── posts.ts         # Post queries
│   │   ├── events.ts        # Event queries
│   │   ├── team.ts          # Team queries
│   │   ├── partners.ts      # Partner queries
│   │   ├── programs.ts      # Program queries
│   │   └── reports.ts       # Report queries
│   └── utils.ts             # Helper functions
```

#### Step 4.2: Create Type Definitions
```
types/
├── sanity.ts                # Sanity types
├── post.ts                  # Post type
├── event.ts                 # Event type
├── teamMember.ts            # Team member type
└── ... (other content types)
```

### Phase 5: Next.js Integration

#### Step 5.1: Update Next.js Config
- Add Sanity image domains
- Configure rewrites for Studio
- Environment variable handling

#### Step 5.2: Create Server Components
- Server-side data fetching
- ISR (Incremental Static Regeneration) setup
- On-demand revalidation

#### Step 5.3: Create Client Components
- Portable Text renderer
- Image component with Sanity CDN
- Rich text formatting

### Phase 6: Page Integration

#### Step 6.1: Update Existing Pages
- **Updates & Events**: Fetch from CMS
- **Our Team**: Fetch team members
- **Our Partners**: Fetch partners
- **Our Programs**: Fetch programs/initiatives
- **Our Reports**: Fetch reports
- **Homepage**: Fetch featured content

#### Step 6.2: Dynamic Routes
- `/updates-events/[slug]` - Individual blog post
- `/updates-events/event/[slug]` - Individual event
- `/programs/[slug]` - Individual program detail
- `/team/[slug]` - Individual team member profile

### Phase 7: Advanced Features

#### Step 7.1: Preview Mode
- Draft preview functionality
- Preview links for editors
- Real-time preview

#### Step 7.2: Image Optimization
- Next.js Image component integration
- Sanity CDN optimization
- Responsive image sizes

#### Step 7.3: Search Functionality
- GROQ-based search
- Filtering and sorting
- Full-text search on content

---

## 📁 File Structure (After Implementation)

```
5brothers-legacy/
├── sanity/                          # Sanity Studio
│   ├── schemas/                     # Content schemas
│   ├── plugins/                     # Custom plugins
│   ├── sanity.config.ts             # Sanity configuration
│   └── sanity.cli.ts                # CLI configuration
├── app/
│   ├── admin/[[...index]]/          # Sanity Studio route
│   └── api/
│       └── revalidate/              # Revalidation endpoint
├── lib/
│   └── sanity/                      # Sanity client & utilities
├── components/
│   ├── cms/                         # CMS-specific components
│   │   ├── PortableText.tsx        # Rich text renderer
│   │   ├── SanityImage.tsx         # Image component
│   │   └── PreviewProvider.tsx     # Preview mode provider
│   └── ... (existing components)
└── types/
    └── sanity.ts                    # Generated types
```

---

## 🔐 Security & Access Control

### Authentication Setup
1. **Sanity Authentication**
   - Google OAuth (recommended)
   - Email/password
   - SSO options

2. **User Roles**
   - Admin (full access)
   - Editor (can edit, not delete)
   - Author (can create, edit own content)
   - Viewer (read-only)

3. **API Tokens**
   - Read token (public, for frontend)
   - Write token (secure, server-side only)

---

## 🚀 Deployment Strategy

### Development
- Local Sanity Studio: `npm run dev` + Studio at `/admin`
- Use `development` dataset for testing

### Production
- Sanity Studio: Deployed at `/admin` route
- Use `production` dataset
- Enable CORS for production domain
- Set up webhooks for on-demand revalidation

### On-Demand Revalidation
- Webhook endpoint: `/api/revalidate`
- Trigger rebuilds when content is published
- Keep ISR for fast page loads

---

## 📊 Content Migration Strategy

### Initial Content Population
1. **Manual Entry**: Use Sanity Studio to add initial content
2. **CSV Import**: If existing content in spreadsheet format
3. **Bulk Import Script**: For large datasets (if needed)

### Migration Priority
1. Team Members (critical)
2. Programs/Initiatives (already partially implemented)
3. Partners
4. Blog Posts/Events (start with 2-3 samples)
5. Reports (can be added later)

---

## 🎨 Customization & Extensions

### Custom Input Components
- Color picker for brand colors
- Date/time picker for events
- File upload with preview for reports
- Custom image cropping

### Custom Actions
- Duplicate content
- Bulk publish/unpublish
- Export content
- Analytics integration

### Custom Panels
- Content analytics
- SEO score checker
- Image optimization suggestions

---

## 📈 Performance Considerations

### Caching Strategy
- **Static Generation (SSG)**: For stable content (team, partners)
- **ISR (Incremental Static Regeneration)**: For blog posts, events
  - Revalidate: 3600 seconds (1 hour)
  - On-demand revalidation via webhooks
- **Client-side Caching**: React Query/SWR for dynamic content

### Image Optimization
- Use Sanity CDN with auto-format (WebP)
- Responsive image sizes
- Lazy loading for below-fold images

### Query Optimization
- Use GROQ projections (only fetch needed fields)
- Pagination for large lists
- Indexed fields for fast filtering

---

## 🔄 Content Workflow

### Draft → Review → Publish
1. **Draft**: Content creators work on drafts
2. **Review**: Editors review and approve
3. **Published**: Automatically triggers revalidation
4. **Archive**: Old content moved to archive status

### Content Versioning
- Sanity tracks all changes
- Can revert to previous versions
- Compare versions side-by-side

---

## 📝 Next Steps After Setup

1. ✅ **Setup Complete**: Sanity installed and configured
2. ⏳ **Schema Creation**: Define all content types
3. ⏳ **Initial Content**: Add seed content (team members, programs)
4. ⏳ **Page Integration**: Connect pages to CMS
5. ⏳ **Testing**: Test CRUD operations
6. ⏳ **Training**: Train content editors on Sanity Studio
7. ⏳ **Migration**: Migrate existing content (if any)
8. ⏳ **Go Live**: Enable production dataset

---

## 💰 Cost Estimate

### Sanity Free Tier (Sufficient for MVP)
- ✅ Unlimited API requests
- ✅ Unlimited bandwidth
- ✅ Up to 3 users
- ✅ 100K document reads/month
- ✅ 10K document writes/month

### Upgrade Path (if needed)
- Team plan: $99/month (more users, higher limits)
- Enterprise: Custom pricing

**Recommendation**: Start with free tier, upgrade only if needed.

---

## 📚 Resources & Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/portable-text)

---

## ✅ Implementation Checklist

### Phase 1: Setup (Day 1)
- [ ] Install Sanity dependencies
- [ ] Initialize Sanity project
- [ ] Configure environment variables
- [ ] Test Sanity connection

### Phase 2: Schemas (Days 2-3)
- [ ] Create base schema structure
- [ ] Define all content type schemas
- [ ] Test schema creation in Studio
- [ ] Generate TypeScript types

### Phase 3: Studio (Day 4)
- [ ] Configure Sanity Studio route
- [ ] Customize Studio appearance
- [ ] Set up desk structure
- [ ] Test content creation

### Phase 4: Integration (Days 5-7)
- [ ] Create Sanity client utilities
- [ ] Create query functions
- [ ] Integrate with existing pages
- [ ] Test data fetching

### Phase 5: Polish (Day 8)
- [ ] Add preview mode
- [ ] Optimize images
- [ ] Set up revalidation
- [ ] Final testing

---

## 🎯 Success Criteria

✅ **CMS Setup Complete When:**
1. Sanity Studio accessible at `/admin`
2. All content types defined and functional
3. Can create/edit/delete all content types
4. Content displays correctly on frontend pages
5. Images optimized and loading fast
6. Preview mode working for drafts
7. On-demand revalidation functional
8. Content editors can use Studio without developer help

---

**Plan Version**: 1.0  
**Created**: 2025-01-27  
**Status**: Ready for Implementation

