# Sanity CMS Setup Guide

This guide will walk you through setting up and configuring Sanity CMS for the 5Brothers Legacy Initiative website.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity.io account (free to create at [sanity.io](https://www.sanity.io))

## 🚀 Step 1: Create a Sanity Project

1. **Create a Sanity Account**
   - Go to [https://sanity.io](https://www.sanity.io)
   - Sign up for a free account (or log in if you have one)

2. **Create a New Project**
   - Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
   - Click "Create project"
   - Fill in:
     - **Project name**: `5brothers-legacy` (or your preferred name)
     - **Organization**: Choose or create an organization
     - **Plan**: Free tier is sufficient for MVP
   - Click "Create"

3. **Get Your Project ID**
   - After creating the project, you'll see your Project ID
   - Copy this ID (e.g., `abc123xyz`)
   - This will be used in your `.env.local` file

## 🔧 Step 2: Configure Environment Variables

1. **Create `.env.local` file** in the project root:

```bash
# Copy the example file (if it exists) or create new
# .env.local.example should be your reference
```

2. **Add your Sanity credentials** to `.env.local`:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional: API tokens for server-side operations
# SANITY_API_READ_TOKEN=your_read_token_here
# SANITY_API_WRITE_TOKEN=your_write_token_here (for admin operations)
```

3. **Get API Tokens (Optional but Recommended)**
   - Go to your Sanity project dashboard
   - Navigate to **API** → **Tokens**
   - Create a new token:
     - **Name**: "Website Read Token"
     - **Permissions**: Read only
     - Copy the token and add to `.env.local` as `SANITY_API_READ_TOKEN`
   
   For write operations (admin functions), create a token with Write permissions.

## 📦 Step 3: Initialize Sanity CLI (Optional)

If you want to use Sanity CLI commands:

```bash
npx sanity login
npx sanity init
```

However, since we've already set up the configuration files, you can skip this step. The Studio is embedded in the Next.js app at `/admin`.

## 🎨 Step 4: Start the Development Server

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Start the Next.js dev server**:
```bash
npm run dev
```

3. **Access Sanity Studio**:
   - Open your browser to: `http://localhost:3000/admin`
   - You'll be prompted to log in with your Sanity account
   - After logging in, you'll see the CMS interface

## ✅ Step 5: Create Initial Content

### Setting Up Site Settings (Singleton)

1. In Sanity Studio (`/admin`), click on **Site Settings**
2. Create/Edit the site settings document with:
   - Organization name
   - Contact information
   - Social media links
   - Default SEO settings

### Adding Content

Start by creating content in this order:

1. **Team Members** - Add your team first
2. **Programs** - Add your initiatives/programs
3. **Partners** - Add partner organizations
4. **Blog Posts** - Create some initial posts
5. **Events** - Add upcoming events
6. **Reports** - Upload any existing reports

## 🔍 Step 6: Verify Setup

### Test the Connection

1. **Check if Studio loads**: Visit `http://localhost:3000/admin`
2. **Check if data is accessible**: You can test queries in the Vision tool (in Studio)

### Test Queries in Studio

1. In Sanity Studio, open the **Vision** tool (top right icon)
2. Try a test query:
```groq
*[_type == "teamMember"][0...5] {
  name,
  role,
  photo
}
```

## 🐛 Troubleshooting

### Issue: "Project ID not found"
**Solution**: Make sure your `.env.local` file has the correct `NEXT_PUBLIC_SANITY_PROJECT_ID` and that it matches your Sanity project.

### Issue: "Cannot connect to Sanity"
**Solution**: 
- Check your internet connection
- Verify your Project ID is correct
- Make sure the dataset name matches (usually "production")
- Check that your Sanity project is active

### Issue: "Studio loads but shows no schemas"
**Solution**: 
- Make sure all schema files are properly exported in `sanity/schemas/index.ts`
- Check for TypeScript errors: `npm run type-check`
- Restart the dev server

### Issue: "CORS errors"
**Solution**: 
- Go to your Sanity project settings
- Add your localhost domain to allowed origins: `http://localhost:3000`
- Add your production domain when deploying

## 📚 Next Steps

1. **Populate Content**: Start adding your content through the CMS
2. **Integrate with Pages**: Update your Next.js pages to fetch from Sanity
3. **Set Up Preview Mode**: Configure draft preview (optional)
4. **Configure Webhooks**: Set up on-demand revalidation (for production)
5. **Train Content Editors**: Share the `/admin` URL with your content team

## 🔗 Useful Links

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Integration](https://www.sanity.io/docs/js-client)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio Configuration](https://www.sanity.io/docs/studio-configuration)

## 📝 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ✅ Yes | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | ✅ Yes | Dataset name (usually "production") |
| `NEXT_PUBLIC_SANITY_API_VERSION` | ⚠️ Recommended | API version (default: "2024-01-01") |
| `SANITY_API_READ_TOKEN` | ❌ Optional | Read token for server-side queries |
| `SANITY_API_WRITE_TOKEN` | ❌ Optional | Write token for admin operations |

## 🎯 Quick Start Checklist

- [ ] Created Sanity account and project
- [ ] Got Project ID from Sanity dashboard
- [ ] Created `.env.local` with Project ID
- [ ] Started dev server (`npm run dev`)
- [ ] Accessed Studio at `/admin`
- [ ] Logged into Sanity Studio
- [ ] Created Site Settings document
- [ ] Added at least one piece of content (team member, post, etc.)
- [ ] Verified data is queryable

---

**Need Help?** Check the [CMS Implementation Plan](./CMS_IMPLEMENTATION_PLAN.md) for detailed information about the content types and setup.

