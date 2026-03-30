# 5Brothers Legacy Initiative - Complete Project Guide

**Comprehensive guide covering project specification, design system, current status, technology stack, and next steps.**

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Design System](#design-system)
3. [Technology Stack](#technology-stack)
4. [Current Status](#current-status)
5. [Next Steps](#next-steps)
6. [Content Creation](#content-creation)
7. [Project Structure](#project-structure)

---

## Project Overview

### Project Details

**Project Name:** 5Brothers Legacy Initiative Website  
**Client:** 5Brothers Legacy Initiative  
**Project Type:** Nonprofit Organization Website  
**Objective:** Build a modern, elegant, and user-friendly website that effectively communicates the organization's mission, showcases initiatives, and facilitates donations, volunteer signups, and community engagement.

### Mission

5Brothers Legacy Initiative is a nonprofit organization dedicated to empowering vulnerable communities in Africa through sustainable development, gender equality, education, healthcare, and environmental stewardship.

### Website Purpose

- Communicating the organization's mission and impact
- Showcasing programs and initiatives
- Facilitating donations and support
- Recruiting volunteers and partners
- Sharing updates, events, and success stories
- Providing resources and support information

---

## Design System

### Design Philosophy

**Elegant, Sophisticated, Impactful**

Our design system emphasizes:
- **Elegance**: Refined visual language with sophisticated typography and spacing
- **Consistency**: Unified design patterns across all pages
- **Accessibility**: WCAG 2.1 AA compliant color contrasts
- **Performance**: Optimized animations and transitions
- **Brand Identity**: Warm, inspiring, and mission-driven

### Color Palette

#### Primary Colors
- **Primary 50-900**: Deep ocean blue (#0B334A) - Trust, stability, professionalism
- **Accent 50-900**: Ocean teal (#0F4A6A) - Growth, harmony, community
- **Gold 50-900**: Elegant gold (#D4AF37) - Excellence, achievement, warmth

#### Neutral Colors
- **Neutral 50-900**: Sophisticated grays for text and backgrounds

#### Usage Guidelines
- **Primary**: Main brand color, CTAs, headings
- **Accent**: Secondary actions, highlights, gradients
- **Gold**: Special emphasis, achievements, badges
- **Neutral**: Body text, backgrounds, borders

### Typography

#### Font Families
- **Display**: Playfair Display (serif) - Elegant headings
- **Body**: Inter (sans-serif) - Clean, readable body text
- **Mono**: Fira Code (monospace) - Code, technical content

#### Type Scale
- **Display 1**: 4.5rem (72px) - Hero headlines
- **Display 2**: 3.75rem (60px) - Section headlines
- **Display 3**: 3rem (48px) - Large headings
- **Heading 1-4**: 2.5rem - 1.5rem - Section headings
- **Body Large**: 1.125rem (18px) - Emphasized text
- **Body**: 1rem (16px) - Standard text
- **Body Small**: 0.875rem (14px) - Captions, labels

### Spacing System

#### Section Padding
- **Section Padding**: `py-16 md:py-20 lg:py-24 xl:py-32`
- Consistent vertical rhythm across pages

#### Container Padding
- **Container Padding**: `px-4 sm:px-6 lg:px-8 xl:px-12`
- Responsive horizontal spacing

#### Grid Gaps
- Small: `gap-4` (16px)
- Medium: `gap-6` (24px)
- Large: `gap-8` (32px)
- Extra Large: `gap-10` (40px)

### Component Styles

#### Cards
- **Elegant Card**: Rounded-3xl, shadow-elegant, border
- **Hover Effect**: Lift (-translate-y-2), enhanced shadow
- **Background**: White with subtle gradients
- **Images**: `object-contain` with white background to fit within card bounds without cropping

#### Buttons
- **Primary**: Gradient background, white text, rounded-xl
- **Secondary**: White background, primary text, border
- **Outline**: Transparent, white border, backdrop blur

#### Gradients
- **Primary Gradient**: `from-primary-700 via-primary-600 to-accent-600`
- **Elegant Background**: `from-primary-50 via-white to-accent-50`
- **Text Gradient**: `from-primary-600 to-accent-600`

### Decorative Elements

#### Patterns
- **Dot Pattern**: Subtle radial gradient dots (opacity: 0.02-0.1)
- **Grid Pattern**: Linear grid overlay (opacity: 0.03)
- **Decorative Circles**: Large blurred circles for depth

#### Floating Shapes
- Animated floating elements
- Subtle rotation and vertical movement
- Used sparingly for visual interest

### Animations

#### Entrance Animations
- **Fade In**: `fadeIn 0.6s ease-out`
- **Fade In Up**: `fadeInUp 0.6s ease-out`
- **Scale In**: `scaleIn 0.5s ease-out`
- **Slide In**: `slideInRight/Left 0.6s ease-out`

#### Hover Effects
- **Lift**: `hover:-translate-y-2`
- **Glow**: Enhanced shadow on hover
- **Scale**: `hover:scale-105` for buttons

#### Continuous Animations
- **Float**: `float 6s ease-in-out infinite`
- **Pulse**: `pulse-slow 4s infinite`

### Responsive Design

#### Breakpoints
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Large screens

#### Mobile-First Approach
- Start with mobile design
- Enhance for larger screens
- Maintain readability at all sizes
- Touch-friendly interactive elements

---

## Technology Stack

### Frontend Framework & Core

- **Next.js 14** (App Router) - React framework with SSR/SSG
- **TypeScript 5+** - Type safety and better IDE support
- **React 18+** - Component-based UI library
- **Tailwind CSS 3+** - Utility-first CSS framework
- **Framer Motion** - React animation library

### Forms & Validation

- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation

### Database & Backend

- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Prisma** - Type-safe database ORM
- **Next.js API Routes** - Built-in API functionality

### Content Management

- **Sanity CMS** - Headless CMS for content management
- **Sanity Studio** - Available at `/admin`

### File Storage

- **Cloudinary** - Image/video hosting and transformations
- **CDN Delivery** - Fast global content delivery

### Payment Processing

- **Flutterwave** - Payment gateway supporting NGN and USD
- Default currency: USD
- USD preset amounts: $50, $100, $200, $500, $1,000
- NGN preset amounts: ₦5,000, ₦10,000, ₦25,000, ₦50,000, ₦100,000
- One-time and monthly donation support

### Email Services (Future)

- **Resend** - Modern email API (recommended)
- Alternatives: SendGrid, Mailgun, AWS SES

### Hosting & Deployment

- **Vercel** - Optimized hosting for Next.js
- **GitHub** - Version control and CI/CD
- **Automatic Deployments** - On push to main branch

### Development Tools

- **VS Code / Cursor** - Code editor
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Prisma Studio** - Database GUI

---

## Current Status

### Completed

#### Database Backend
- Neon Database - Set up and connected via Vercel Marketplace
- Prisma ORM - Fully configured with all models
- Database Schema - 7 complete models:
  - Contact Submissions
  - Volunteer Applications
  - Partner Applications
  - Advocate Signups
  - Career Applications (with file upload support)
  - Donations (Flutterwave integrated)
  - Newsletter Subscriptions
- Database Tables - Created and synced
- Prisma Studio - Fixed and working

#### API Routes
- `/api/contact` - Contact form submissions
- `/api/volunteer` - Volunteer applications
- `/api/partner` - Partner applications
- `/api/advocate` - Advocate signups
- `/api/career` - Career applications
- `/api/career/upload` - File uploads (Cloudinary)
- `/api/newsletter` - Newsletter (subscribe/unsubscribe)
- `/api/donations/pay` - Initialize Flutterwave payment, create pending donation
- `/api/donations/webhook` - Flutterwave webhook (charge.completed -> donation completed)
- `/api/resources/submit` - User-submitted help resources (creates pending resource in Sanity)

#### Frontend Forms
- Contact Form (`/contact-us`) - Connected to database
- Get Involved Forms (`/get-involved`) - All 3 forms connected (Volunteer, Partner, Advocate)
- Career Form (`/career`) - Connected with file upload support
- Donation Form (`/make-a-gift`) - Flutterwave integration with USD/NGN
- Modern Loading Animations - Spinner component
- Form Validation - Zod schemas for all forms
- Error Handling - Success/error messages

#### File Storage
- Cloudinary Package - Installed
- Upload Route - Configured for Cloudinary
- File Validation - Size (5MB) and type (PDF, DOC, DOCX)
- Cloudinary Credentials - Configured in environment variables
- File Uploads - Fully functional

#### Content Management
- Sanity CMS - Fully integrated
- CMS Studio - Available at `/admin`
- Content Types - All schemas defined
- Help page (`/help`) - Pulls resources exclusively from CMS (no placeholder data)

#### UI/UX
- Footer - "Find Help" link pointing to `/help`
- Hero Section - "Empowering Communities Since 2025"
- Loading States - Modern spinner animations
- Form UX - Success/error messages, loading states
- Team & Partner card images - `object-contain` with white background (no cropping, consistent card sizes)
- Impact Metrics - 5+ Communities Served, 20+ Volunteers Engaged

#### Deployment & Infrastructure
- Vercel Deployment - Successfully deployed
- Build Configuration - Prisma postinstall script added
- Environment Variables - All configured in Vercel
- Production Database - Connected and working
- Production File Storage - Cloudinary configured
- Production CMS - Sanity accessible at `/admin`

### In Progress / Pending

#### Email Notifications (Not Started)
- Email service integration (Resend, SendGrid, etc.)
- Admin notifications on form submissions
- User confirmation emails

#### Admin Dashboard (Not Started)
- Admin page to view submissions
- Form submission management
- Status updates (approve/reject)

### Completion Breakdown

| Component | Status | Progress |
|-----------|--------|----------|
| **Database** | Complete | 100% |
| **API Routes** | Complete | 100% |
| **Frontend Forms** | Complete | 100% |
| **File Storage** | Complete | 100% |
| **Payment Integration** | Complete (Flutterwave, USD + NGN) | 100% |
| **Deployment** | Complete | 100% |
| **Content Management** | Complete | 100% |
| **Email Notifications** | Not Started | 0% |
| **Admin Dashboard** | Not Started | 0% |

**Overall Project:** ~92% Complete

---

## Next Steps

### Immediate Next Steps (Priority Order)

#### 1. Populate Content in CMS (2-4 hours)
**Why:** Your site is live but needs content to be useful

**Steps:**
1. Access CMS at `https://yourdomain.com/admin`
2. Create Site Settings (singleton - do this first)
3. Add Team Members (3-5 members)
4. Add Programs/Initiatives (your main programs)
5. Add Partners (partner organizations with logos)
6. Create 2-3 Blog Posts (initial updates/news)
7. Add Events (if you have upcoming events)
8. Add Resources for the Find Help page

**See:** [Content Creation](#content-creation) section below for detailed instructions

#### 2. Test Production Site Thoroughly (30 minutes)
**Why:** Verify everything works in production

**Test:**
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Get Involved forms work (Volunteer, Partner, Advocate)
- [ ] Career form with file upload works
- [ ] Newsletter subscription works
- [ ] CMS accessible and functional
- [ ] Make a Gift: test USD and NGN donation flows
- [ ] Data appears in database (check via Prisma Studio or Neon Console)

### Optional Enhancements (As Needed)

#### 3. Set Up Email Notifications (30 minutes)
**Why:** Get notified when forms are submitted, send confirmations

**Steps:**
- Sign up for Resend (free tier: 3,000 emails/month)
- Get API key
- Install Resend package: `npm install resend`
- Update API routes to send emails
- Add `RESEND_API_KEY` to environment variables

**Files to Update:**
- `app/api/contact/route.ts`
- `app/api/volunteer/route.ts`
- `app/api/partner/route.ts`
- `app/api/advocate/route.ts`
- `app/api/career/route.ts`

#### 4. Create Admin Dashboard (2-3 hours)
**Why:** View and manage all form submissions in one place

**Steps:**
- Create admin page: `app/admin/submissions/page.tsx`
- List all submissions with filtering
- Add search functionality
- Add status management (approve/reject)
- Add authentication (NextAuth.js or simple password)

**Features:**
- View all form submissions
- Filter by type (contact, volunteer, partner, etc.)
- Search submissions
- Update status
- Export data (optional)

#### 5. Analytics & Reporting (2-3 hours)
**Why:** Track form submissions and gain insights

**Features:**
- Submission counts by type
- Date range filtering
- Export reports (CSV/Excel)
- Charts/graphs (optional)
- Dashboard for insights

### Ongoing Improvements

#### Performance Optimization
- Image optimization (already using Next.js Image)
- Code splitting (Next.js handles this)
- Caching strategies
- Monitor Lighthouse scores

#### SEO Enhancement
- Meta tags for all pages
- Generate sitemap.xml
- Configure robots.txt
- Add structured data (JSON-LD)
- Open Graph tags

#### Accessibility
- ARIA labels where needed
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast verification
- Focus indicators

---

## Content Creation

### Getting Started with Sanity CMS

#### Accessing the CMS

1. **Local Development:**
   - Run `npm run dev`
   - Visit `http://localhost:3000/admin`
   - Log in with your Sanity account

2. **Production:**
   - Visit `https://yourdomain.com/admin`
   - Log in with your Sanity account

### Creating Your First Content

#### Step 1: Choose a Content Type
In the left sidebar, click on any content type (e.g., "Team Members", "Partners", "Blog Posts")

#### Step 2: Click "Create" Button
- Look for a **"Create"** or **"+"** button
- Click it to start creating a new document

#### Step 3: Fill in the Fields
- Fill in the required fields (marked with *)
- Optional fields can be left empty
- Use the rich text editor for content fields

#### Step 4: Publish
- Click **"Publish"** button to make it live
- Or save as **"Draft"** to work on it later

### Recommended Order to Create Content

#### Priority 1: Site Settings (Singleton)
1. Click **"Site Settings"** (only one exists)
2. Fill in:
   - Organization Name
   - Contact Email
   - Contact Phone
   - Social Media Links
   - Logo
3. **Publish**

#### Priority 2: Team Members
1. Create 3-5 team members
2. Add photos, roles, and bios
3. Set "Display on Team Page" to true

#### Priority 3: Partners
1. Create partner organizations
2. Upload logos
3. Add website URLs
4. Set "Active Partner" to true

#### Priority 4: Programs
1. Create your main programs/initiatives
2. Add descriptions, images, and impact metrics
3. Set status to "Active"

#### Priority 5: Blog Posts
1. Create 2-3 sample blog posts
2. Add featured images
3. Write content
4. Set status to "Published"

#### Priority 6: Resources (Find Help page)
1. Create external/community resources
2. Add contact information, categories, and descriptions
3. Set "Active" to true

### Content Types Available

1. **Site Settings** - Site-wide configuration (singleton)
2. **Blog Posts** - News articles and blog posts
3. **Events** - Upcoming and past events
4. **Team Members** - Staff and team profiles
5. **Partners** - Partner organizations
6. **Programs** - Initiatives and programs
7. **Reports** - Annual, financial, and program reports
8. **Pages** - Static content pages
9. **Testimonials** - Impact stories and testimonials
10. **Resources** - Resources for the Find Help page

### Tips for Content Creation

1. **Start with Site Settings** - This is a singleton, so create it first
2. **Use Drafts** - Save as draft to work on content over time
3. **Upload Images** - Use the image upload fields to add photos
4. **Rich Text Editor** - Use the toolbar for formatting in content fields
5. **Slugs** - These auto-generate from titles, but you can customize them

---

## Project Structure

```
5brothers_legacy/
├── app/                        # Next.js pages & API routes
│   ├── api/                    # API routes
│   │   ├── contact/            # Contact form API
│   │   ├── volunteer/          # Volunteer API
│   │   ├── partner/            # Partner API
│   │   ├── advocate/           # Advocate API
│   │   ├── career/             # Career API + file upload
│   │   ├── newsletter/         # Newsletter API
│   │   ├── donations/          # Donations (pay, webhook) - Flutterwave
│   │   └── resources/          # Resource submission API
│   ├── admin/                  # Sanity Studio
│   ├── contact-us/             # Contact page
│   ├── career/                 # Career page
│   ├── donation/               # Donation success/failure page
│   ├── get-involved/           # Get Involved page (Volunteer, Partner, Advocate)
│   ├── help/                   # Find Help page (CMS-driven resources)
│   ├── make-a-gift/            # Donation form (Flutterwave, USD/NGN)
│   ├── our-partners/           # Partners page
│   ├── our-programs/           # Programs page
│   ├── our-reports/            # Reports page
│   ├── our-team/               # Team page
│   ├── privacy-policy/         # Privacy policy
│   ├── terms-of-service/       # Terms of service
│   ├── updates-events/         # Blog posts and events
│   ├── ways-to-support/        # Ways to support
│   ├── who-we-are/             # About page
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/                 # React components
│   ├── ui/                     # Base UI components (Spinner, Icon, DecorativeElements)
│   ├── layout/                 # Layout components (Header, Footer)
│   ├── cms/                    # CMS components (PortableText)
│   ├── sections/               # Homepage sections (Hero, About, Impact, etc.)
│   └── pages/                  # Page-specific client components
├── lib/                        # Utilities
│   ├── prisma.ts               # Database client
│   ├── utils.ts                # Utility functions
│   └── sanity/                 # CMS client & queries
├── prisma/                     # Database schema
│   └── schema.prisma           # All models defined
├── sanity/                     # Sanity CMS
│   ├── schemas/                # Content schemas
│   │   ├── documents/          # Document types (post, event, team, etc.)
│   │   ├── objects/            # Object types (seo, imageWithAlt, socialLinks)
│   │   └── singleton/          # Singleton types (siteSettings)
│   └── schemas/index.ts        # Schema registry
└── public/                     # Static assets (images, logos)
```

---

## Key Features

### Core Pages

1. **Homepage** (`/`) - Hero, about snapshot, impact metrics, programs overview, latest updates, get involved, sponsor logos
2. **Who We Are** (`/who-we-are`) - Mission, vision, goals, values, impact areas
3. **Our Team** (`/our-team`) - Team member profiles from CMS
4. **Our Programs** (`/our-programs`) - 6 program categories with sub-programs and impact stats
5. **Our Partners** (`/our-partners`) - Partner organizations from CMS
6. **Our Reports** (`/our-reports`) - Downloadable reports from CMS
7. **Get Involved** (`/get-involved`) - Volunteer, Partner, Advocate forms
8. **Career** (`/career`) - Job listings and applications with file upload
9. **Ways to Support** (`/ways-to-support`) - Support methods with testimonials from CMS
10. **Contact Us** (`/contact-us`) - Contact form and information
11. **Updates & Events** (`/updates-events`) - Blog posts and events from CMS
12. **Find Help** (`/help`) - Resources from CMS (no placeholder data)
13. **Make a Gift** (`/make-a-gift`) - Donation page (Flutterwave, default USD)
14. **Privacy Policy** (`/privacy-policy`) - Static privacy policy
15. **Terms of Service** (`/terms-of-service`) - Static terms of service

### Navigation

**Header:** Home, Who We Are, Our Team, Programs, Get Involved, Find Help, Donate Now

**Footer:** About Us links, Resources links, Get Involved links, Contact, Legal (Privacy Policy, Terms of Service)

### Form Features

- Contact form
- Volunteer application
- Partner application
- Advocate signup
- Career application (with file upload)
- Newsletter subscription
- Donation form (Flutterwave, USD + NGN)

### Database Models

- Contact Submissions
- Volunteer Applications
- Partner Applications
- Advocate Signups
- Career Applications
- Donations (Flutterwave integrated, USD + NGN)
- Newsletter Subscriptions

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (production) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version |
| `SANITY_API_READ_TOKEN` | Sanity read token |
| `SANITY_API_WRITE_TOKEN` | Sanity write token |
| `FLW_SECRET_KEY` | Flutterwave secret key |
| `FLW_PUBLIC_KEY` | Flutterwave public key |
| `FLW_WEBHOOK_HASH` | Flutterwave webhook verification hash |
| `NEXT_PUBLIC_APP_URL` | Application URL (for redirects) |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

---

## Related Documentation

- **Database Setup:** See `DATABASE_GUIDE.md`
- **CMS Setup:** See `CMS_GUIDE.md`
- **File Storage:** See `STORAGE_GUIDE.md`
- **Production Access:** See `PRODUCTION_ACCESS_GUIDE.md`
- **Environment Variables:** See `ENV_CHECKLIST.md`
- **Payment Migration:** See `FLUTTERWAVE_MIGRATION.md`

---

## Quick Checklist

### Setup Complete
- [x] Database backend configured
- [x] All API routes created
- [x] All forms connected
- [x] CMS integrated
- [x] File uploads functional (Cloudinary)
- [x] Payment integration (Flutterwave, USD + NGN)
- [x] Production deployment live

### Immediate Next Steps
- [ ] Populate content in CMS (2-4 hours)
- [ ] Test production site thoroughly (30 minutes)
- [ ] Verify all forms work on production (including donation flow)

### Optional Enhancements
- [ ] Email notifications (30 minutes)
- [ ] Admin dashboard (2-3 hours)
- [ ] Analytics & reporting (2-3 hours)

---

**Last Updated:** 2026-03-29  
**Project:** 5Brothers Legacy Initiative  
**Status:** ~92% Complete  
**Deployment:** Live on Production  
**Ready for:** Content Population & Optional Enhancements
