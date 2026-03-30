# 📝 Sanity CMS Complete Guide

**Complete guide for setting up, accessing, and managing Sanity CMS for the 5Brothers Legacy Initiative website.**

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Setup & Configuration](#setup--configuration)
3. [Accessing the CMS](#accessing-the-cms)
4. [Content Types](#content-types)
5. [Integration Status](#integration-status)
6. [Usage Examples](#usage-examples)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### 1. Create Sanity Project
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project: `5brothers-legacy`
3. Copy your **Project ID** (e.g., `u1tu4f9f`)

### 2. Configure Environment Variables

**Local (`.env.local`):**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Production (Vercel Dashboard → Settings → Environment Variables):**
- Add the same variables for Production, Preview, and Development environments

### 3. Access CMS

**Local Development:**
```bash
npm run dev
# Visit: http://localhost:3000/admin
```

**Production:**
```
Visit: https://yourdomain.com/admin
```

### 4. Configure CORS

1. Go to [Sanity Manage](https://www.sanity.io/manage) → Your Project
2. **API** → **CORS origins**
3. Add:
   - `http://localhost:3000` (for local)
   - `https://yourdomain.com` (for production)
4. Check "Allow credentials" → Save

---

## ⚙️ Setup & Configuration

### Prerequisites
- Node.js 18+
- Sanity.io account (free)
- Project ID from Sanity

### Installed Packages
- ✅ `@sanity/client` - Data fetching
- ✅ `@sanity/image-url` - Image optimization
- ✅ `next-sanity` - Next.js integration
- ✅ `@sanity/vision` - GROQ query tool
- ✅ `@portabletext/react` - Rich text rendering
- ✅ `groq` - Query language
- ✅ `sanity` - Studio and CLI

### Project Structure
```
sanity/
├── schemas/
│   ├── index.ts              # Schema registry
│   ├── documents/            # Content type schemas
│   ├── objects/              # Reusable objects
│   └── singleton/            # Site settings
lib/sanity/
├── client.ts                 # Sanity client
├── image.ts                  # Image utilities
└── queries/                  # GROQ queries
components/cms/
├── PortableText.tsx          # Rich text renderer
└── SanityImage.tsx           # Image component
app/admin/[[...index]]/       # Studio route
```

### Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ✅ Yes | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | ✅ Yes | Dataset name (usually "production") |
| `NEXT_PUBLIC_SANITY_API_VERSION` | ⚠️ Recommended | API version (default: "2024-01-01") |
| `SANITY_API_READ_TOKEN` | ❌ Optional | Read token for server-side queries |
| `SANITY_API_WRITE_TOKEN` | ❌ Optional | Write token for admin operations |

---

## 🎨 Accessing the CMS

### Local Development (`localhost:3000/admin`)

**Advantages:**
- ✅ Faster iteration
- ✅ Better for development/testing
- ✅ Safe experimentation
- ✅ No deployment needed

**How to Access:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/admin`
3. Log in with your Sanity account

### Production (`yourdomain.com/admin`)

**Advantages:**
- ✅ Accessible from anywhere
- ✅ Team collaboration
- ✅ Real production environment
- ✅ No local setup needed

**How to Access:**
1. Deploy to Vercel
2. Visit `https://yourdomain.com/admin`
3. Log in with your Sanity account

### Important: Same Data!

**Both local and production access the same Sanity project.** Content created in one location appears in both. The only difference is where you access the Studio interface.

---

## 📦 Content Types

### Available Content Types

1. **Site Settings** (Singleton)
   - Organization name, contact info
   - Social media links
   - Default SEO settings

2. **Blog Posts** (`post`)
   - Title, content, featured image
   - Author, publish date
   - Categories, tags, SEO

3. **Events** (`event`)
   - Title, description, date/time
   - Location, registration link
   - Featured image, content

4. **Team Members** (`teamMember`)
   - Name, role, department
   - Photo, bio, contact info
   - Social links

5. **Partners** (`partner`)
   - Organization name, logo
   - Website, description
   - Partner type, category

6. **Programs** (`program`)
   - Title, description, category
   - Featured image, impact metrics
   - Sub-programs, gallery

7. **Reports** (`report`)
   - Title, report type
   - PDF file, thumbnail
   - Publication date, summary

8. **Pages** (`page`)
   - Static content pages
   - Rich text content
   - SEO metadata

9. **Testimonials** (`testimonial`)
   - Name, role, quote
   - Photo, featured image
   - Program association

10. **Support Methods** (`supportMethod`)
    - Title, description
    - Icon/image, category
    - Action URL, CTA text

11. **Resources** (`resource`)
    - Title, description
    - Resource type, category
    - URL, contact info

### Creating Content

1. Log into Sanity Studio (`/admin`)
2. Click on a content type in the sidebar
3. Click "Create new" or edit existing
4. Fill in the fields
5. Click "Publish" to save

---

## ✅ Integration Status

### Fully Integrated Pages

- ✅ **Homepage** - Partners section
- ✅ **`/our-programs`** - Programs from CMS
- ✅ **`/our-partners`** - Partners from CMS
- ✅ **`/our-reports`** - Reports from CMS
- ✅ **`/updates-events`** - Posts and events from CMS
- ✅ **`/our-team`** - Team members from CMS

### Architecture

**Server Components:**
- Pages fetch data using `client.fetch(query)`
- Graceful error handling with fallbacks
- ISR (Incremental Static Regeneration) ready

**Client Components:**
- Interactive UI with animations
- Receive data as props from server components

**Data Flow:**
```
Sanity CMS → Server Component → client.fetch() → Client Component → UI
```

---

## 💻 Usage Examples

### Fetching Data in Server Components

```typescript
import { client } from '@/lib/sanity/client'
import { teamMembersQuery, latestPostsQuery } from '@/lib/sanity/queries'

export default async function TeamPage() {
  const teamMembers = await client.fetch(teamMembersQuery)
  
  return (
    <div>
      {teamMembers.map((member) => (
        <div key={member._id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  )
}
```

### Rendering Rich Text

```typescript
import PortableText from '@/components/cms/PortableText'

<PortableText content={post.content} />
```

### Displaying Images

```typescript
import SanityImage from '@/components/cms/SanityImage'

<SanityImage 
  image={post.featuredImage} 
  alt={post.title}
  width={800}
  height={600}
/>
```

### Available Queries

Located in `lib/sanity/queries/`:
- `teamMembersQuery` - All team members
- `latestPostsQuery` - Latest blog posts
- `eventsQuery` - Upcoming events
- `partnersQuery` - All partners
- `activeProgramsQuery` - Active programs
- `reportsQuery` - Published reports
- `testimonialsQuery` - Testimonials
- `resourcesQuery` - Resources

---

## 🐛 Troubleshooting

### "Project ID not found"
**Solution:**
- Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Verify Project ID matches your Sanity project
- Restart dev server after changing `.env.local`

### "Cannot connect to Sanity"
**Solution:**
- Check internet connection
- Verify Project ID is correct
- Ensure dataset name matches (usually "production")
- Check that Sanity project is active

### "CORS errors"
**Solution:**
1. Go to Sanity Manage → Your Project
2. **API** → **CORS origins**
3. Add `http://localhost:3000` (local)
4. Add `https://yourdomain.com` (production)
5. Check "Allow credentials" → Save

### "Studio loads but shows no schemas"
**Solution:**
- Check schema files are exported in `sanity/schemas/index.ts`
- Run `npm run type-check` to check for errors
- Restart dev server

### Content not appearing on frontend
**Solution:**
- Verify content is **Published** (not draft)
- Check page is fetching from CMS (not using placeholder data)
- Verify environment variables are set correctly
- Check browser console for errors

### Images not loading
**Solution:**
- Verify `next.config.js` has Sanity image domains
- Check image URLs are correct
- Ensure images are uploaded to Sanity (not external URLs)

---

## 🔗 Useful Links

- **Sanity Dashboard**: [https://www.sanity.io/manage](https://www.sanity.io/manage)
- **Sanity Docs**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **GROQ Query Language**: [https://www.sanity.io/docs/groq](https://www.sanity.io/docs/groq)
- **Next.js + Sanity**: [https://www.sanity.io/guides/nextjs](https://www.sanity.io/guides/nextjs)
- **Portable Text**: [https://www.sanity.io/docs/portable-text](https://www.sanity.io/docs/portable-text)

---

## ✅ Quick Checklist

### Initial Setup
- [ ] Created Sanity account and project
- [ ] Got Project ID from Sanity dashboard
- [ ] Added Project ID to `.env.local`
- [ ] Added Project ID to Vercel environment variables
- [ ] Configured CORS in Sanity dashboard
- [ ] Started dev server (`npm run dev`)
- [ ] Accessed Studio at `/admin`
- [ ] Logged into Sanity Studio

### Content Creation
- [ ] Created Site Settings document
- [ ] Added team members
- [ ] Added programs/initiatives
- [ ] Added partners
- [ ] Created blog posts
- [ ] Added events
- [ ] Uploaded reports

### Verification
- [ ] Content appears on frontend pages
- [ ] Images load correctly
- [ ] Links work properly
- [ ] Production CMS accessible
- [ ] Team members can access CMS

---

## 🎯 Best Practices

### Content Management
1. **Use Production CMS** (`yourdomain.com/admin`) for daily content management
2. **Use Local CMS** (`localhost:3000/admin`) for development/testing
3. **Always publish** content (not just save as draft)
4. **Use descriptive titles** for easy content discovery
5. **Add alt text** to all images for accessibility

### Development
1. **Test locally** before deploying
2. **Use fallback data** when CMS is empty
3. **Handle errors gracefully** in data fetching
4. **Optimize images** using Sanity CDN
5. **Use ISR** for better performance

### Security
1. **Never commit** `.env.local` to Git
2. **Use read-only tokens** when possible
3. **Limit access** to Sanity Studio
4. **Enable 2FA** on Sanity account
5. **Review CORS settings** regularly

---

**Last Updated:** 2026-02-19  
**Project:** 5Brothers Legacy Initiative  
**CMS:** Sanity.io

