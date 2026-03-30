# 🚀 Deployment & Setup Complete Guide

**Complete guide for deploying the 5Brothers Legacy Initiative website to production and setting up local development.**

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Local Development Setup](#local-development-setup)
3. [Production Deployment](#production-deployment)
4. [Environment Variables](#environment-variables)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### For First-Time Setup

1. **Set up local environment** (5 minutes)
   - See [Local Development Setup](#local-development-setup)

2. **Deploy to production** (10 minutes)
   - See [Production Deployment](#production-deployment)

3. **Verify everything works** (5 minutes)
   - See [Post-Deployment Verification](#post-deployment-verification)

---

## 💻 Local Development Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

Create `.env.local` file in project root:

```env
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require

# Cloudinary (File Storage)
CLOUDINARY_CLOUD_NAME=dsxnzprwg
CLOUDINARY_API_KEY=621873776821163
CLOUDINARY_API_SECRET=QFObFGCBeuuLEy3fGdI_Dhbrpmg

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Important:**
- `.env.local` is in `.gitignore` (won't be committed)
- Restart dev server after adding variables
- Get actual values from respective dashboards

### Step 3: Initialize Database

```bash
# Generate Prisma Client
npm run db:generate

# Create database tables
npm run db:push
```

### Step 4: Start Development Server

```bash
npm run dev
```

### Step 5: Access Your App

- **Website**: `http://localhost:3000`
- **CMS (Sanity Studio)**: `http://localhost:3000/admin`
- **Database GUI (Prisma Studio)**: Run `npm run db:studio` → `http://localhost:5555`

### Local Database Options

#### Option 1: Use Same Neon Database (Recommended)
- ✅ No additional setup
- ✅ See real data immediately
- ⚠️ Local changes affect same database (usually fine for testing)

**Steps:**
1. Get `DATABASE_URL` from Vercel Dashboard → Settings → Environment Variables
2. Copy to `.env.local`
3. Done!

#### Option 2: Create Separate Neon Database
- ✅ Isolated development environment
- ✅ Won't affect production data

**Steps:**
1. Go to [Neon Console](https://console.neon.tech)
2. Create new project or branch
3. Copy connection string
4. Add to `.env.local`

#### Option 3: Local PostgreSQL
- ✅ Completely local
- ⚠️ Requires PostgreSQL installation

**Steps:**
1. Install PostgreSQL locally
2. Create database: `createdb 5brothers_legacy`
3. Add to `.env.local`: `DATABASE_URL="postgresql://postgres:password@localhost:5432/5brothers_legacy?schema=public"`

---

## 🚀 Production Deployment

### Pre-Deployment Checklist

- [x] All forms working locally
- [x] Database connected
- [x] File uploads working (with credentials)
- [x] Environment variables set locally
- [ ] Code committed to Git
- [ ] GitHub repository connected to Vercel

### Step 1: Commit and Push to GitHub

```bash
# Check what files have changed
git status

# Add all files
git add .

# Commit changes
git commit -m "Complete database backend, file uploads, and UI improvements"

# Push to GitHub
git push
```

### Step 2: Deploy on Vercel

#### Option A: Auto-Deploy (If GitHub is Connected)
- Vercel will automatically deploy when you push
- Go to Vercel Dashboard → Your Project
- Watch the deployment

#### Option B: Manual Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js
5. **Add environment variables** (see below)
6. Click "Deploy"

#### Option C: Vercel CLI
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Step 3: Add Environment Variables in Vercel

**CRITICAL:** Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these (select all environments: Production, Preview, Development):

#### Database:
```
DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require
```
**Note:** This might already be set if Neon was connected via Vercel Marketplace

#### Cloudinary:
```
CLOUDINARY_CLOUD_NAME=dsxnzprwg
CLOUDINARY_API_KEY=621873776821163
CLOUDINARY_API_SECRET=QFObFGCBeuuLEy3fGdI_Dhbrpmg
```

#### Sanity CMS:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

#### Optional:
```
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_API_WRITE_TOKEN=your_write_token_here
```

**After adding variables, redeploy!**

---

## 🔐 Environment Variables

### Complete Checklist

#### Required for Local (`.env.local`):
- ✅ `DATABASE_URL` - Neon PostgreSQL connection string
- ✅ `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- ✅ `CLOUDINARY_API_KEY` - Your Cloudinary API key
- ✅ `CLOUDINARY_API_SECRET` - Your Cloudinary API secret
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- ✅ `NEXT_PUBLIC_SANITY_DATASET` - Usually `production`
- ✅ `NEXT_PUBLIC_SANITY_API_VERSION` - Usually `2024-01-01`

#### Required for Production (Vercel):
- Same as above, all must be set in Vercel Dashboard

#### Optional:
- `SANITY_API_READ_TOKEN` - For server-side queries
- `SANITY_API_WRITE_TOKEN` - For admin operations

### Getting Your Values

#### Database URL
- **From Vercel**: Dashboard → Settings → Environment Variables → `DATABASE_URL`
- **From Neon**: Console → Connection Details → Copy connection string

#### Cloudinary Credentials
1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. View Dashboard - you'll see:
   - Cloud Name
   - API Key
   - API Secret (click "Reveal")

#### Sanity Credentials
1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Project ID is shown in project settings
4. For tokens: API → Tokens → Create Token

### Important Notes

1. **No spaces around `=` sign**
   - ✅ Correct: `CLOUDINARY_CLOUD_NAME=dsxnzprwg`
   - ❌ Wrong: `CLOUDINARY_CLOUD_NAME = dsxnzprwg`

2. **No quotes needed** (unless value has spaces)
   - ✅ Correct: `CLOUDINARY_CLOUD_NAME=dsxnzprwg`
   - ⚠️ Also OK: `CLOUDINARY_CLOUD_NAME="dsxnzprwg"`

3. **One variable per line**

4. **Restart dev server** after changing `.env.local`

5. **File location**: `.env.local` must be in project root (same folder as `package.json`)

---

## ✅ Post-Deployment Verification

### Step 1: Check Build Logs

1. Go to Vercel Dashboard → Deployments
2. Click on latest deployment
3. Check for errors
4. Verify build completed successfully

### Step 2: Test Your Site

Visit your production URL and test:

- [ ] Homepage loads
- [ ] Contact form submits
- [ ] Get Involved forms work (Volunteer, Partner, Advocate)
- [ ] Career form works
- [ ] File uploads work (career applications)
- [ ] Newsletter subscription works
- [ ] CMS accessible at `/admin`
- [ ] All pages load correctly

### Step 3: Verify Database Connection

1. **Check data is being saved:**
   - Submit a test form
   - Use Prisma Studio with production DB to verify data appears

2. **Test Prisma Studio with Production DB:**
   ```powershell
   # Get DATABASE_URL from Vercel
   $env:DATABASE_URL="postgresql://your-production-url"
   npm run db:studio
   ```

### Step 4: Verify File Uploads

1. **Test file upload:**
   - Go to `/career` page
   - Upload a test file (PDF, DOC, or DOCX)
   - Verify success message

2. **Check Cloudinary:**
   - Go to [Cloudinary Dashboard](https://cloudinary.com/console)
   - Media Library → `career-applications/` folder
   - Verify file appears

3. **Check database:**
   - Verify file URL is saved in `career_applications` table

### Step 5: Verify CMS Access

1. **Access CMS:**
   - Visit `https://yourdomain.com/admin`
   - Log in with Sanity account
   - Verify you can create/edit content

2. **Test CORS:**
   - If you see CORS errors, add your production domain to Sanity CORS origins

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Common Issues:**

1. **"Prisma Client not generated"**
   - **Solution:** The `postinstall` script should handle this. Check `package.json` has:
     ```json
     "postinstall": "prisma generate"
     ```

2. **"Environment variable not found"**
   - **Solution:** Verify all environment variables are set in Vercel Dashboard
   - Check variable names are correct (case-sensitive)
   - Ensure variables are set for Production, Preview, and Development

3. **"Module not found"**
   - **Solution:** Check `package.json` has all dependencies
   - Run `npm install` locally to verify

### Forms Not Working on Production

**Check:**
1. Environment variables are set in Vercel
2. Database connection is working
3. API routes are accessible
4. Check browser console for errors
5. Check Vercel function logs

### File Uploads Not Working

**Check:**
1. Cloudinary credentials are set in Vercel
2. Credentials are correct
3. File size is under 5MB
4. File type is PDF, DOC, or DOCX
5. Check Cloudinary dashboard for upload errors

### Database Connection Issues

**Check:**
1. `DATABASE_URL` is correct in Vercel
2. Database is not paused (Neon)
3. Connection string uses pooled connection (has `-pooler` in URL)
4. Database is accessible (not behind firewall)

### CMS Not Accessible

**Check:**
1. `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
2. CORS is configured in Sanity dashboard
3. Production domain is added to CORS origins
4. You're logged into correct Sanity account

---

## 📝 Quick Reference

### Local Development Commands

```bash
# Start dev server
npm run dev

# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# Open database GUI
npm run db:studio

# Type check
npm run type-check

# Build for production
npm run build
```

### Deployment Commands

```bash
# Commit and push
git add .
git commit -m "Your message"
git push

# Deploy with Vercel CLI (optional)
vercel --prod
```

### Access URLs

| Service | Local | Production |
|---------|-------|------------|
| **Website** | `http://localhost:3000` | `https://yourdomain.com` |
| **CMS** | `http://localhost:3000/admin` | `https://yourdomain.com/admin` |
| **Database GUI** | `http://localhost:5555` (via Prisma Studio) | Neon Console |

---

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] All code committed to Git
- [ ] All environment variables documented
- [ ] Local testing completed
- [ ] Database schema up to date
- [ ] All forms tested locally

### Deployment
- [ ] Code pushed to GitHub
- [ ] Vercel project connected
- [ ] Environment variables added to Vercel
- [ ] Deployment successful
- [ ] Build logs checked

### Post-Deployment
- [ ] Homepage loads
- [ ] All forms work
- [ ] File uploads work
- [ ] Database connection verified
- [ ] CMS accessible
- [ ] All pages load correctly

---

## 🔗 Related Guides

- **Database Setup:** See `DATABASE_GUIDE.md`
- **CMS Setup:** See `CMS_GUIDE.md`
- **File Storage:** See `STORAGE_GUIDE.md`
- **Production Access:** See `PRODUCTION_ACCESS_GUIDE.md`
- **Environment Variables:** See `ENV_CHECKLIST.md`
- **Project Overview:** See `PROJECT_GUIDE.md`

---

**Last Updated:** 2026-02-19  
**Project:** 5Brothers Legacy Initiative  
**Status:** Ready for Deployment

