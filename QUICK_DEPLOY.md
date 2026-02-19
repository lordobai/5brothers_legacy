# 🚀 Quick Deployment Guide

## Step 1: Commit Your Changes

Run these commands:

```bash
git add .
git commit -m "Complete database backend, file uploads, and UI improvements"
git push
```

## Step 2: Deploy on Vercel

### If GitHub is Already Connected:
- Vercel will auto-deploy when you push
- Go to Vercel Dashboard → Your Project
- Watch the deployment

### If Not Connected:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js
5. **Add environment variables** (see below)
6. Click "Deploy"

## Step 3: Add Environment Variables in Vercel

**CRITICAL:** Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these (select all environments: Production, Preview, Development):

### Database:
- `DATABASE_URL` = `postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require`
  - Note: This might already be set if Neon was connected via Vercel Marketplace

### Cloudinary:
- `CLOUDINARY_CLOUD_NAME` = `dsxnzprwg`
- `CLOUDINARY_API_KEY` = `621873776821163`
- `CLOUDINARY_API_SECRET` = `QFObFGCBeuuLEy3fGdI_Dhbrpmg`

### Sanity CMS:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `u1tu4f9f` (or your project ID)
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`

**After adding variables, redeploy!**

## Step 4: Test Production

1. Visit your production URL
2. Test all forms
3. Test file uploads
4. Verify everything works

## ✅ Done!

Your site is now live! 🎉

