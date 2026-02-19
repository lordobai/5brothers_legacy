# 🚀 Deployment Checklist - Vercel

## Pre-Deployment Checklist

### ✅ Code Ready
- [x] All forms working
- [x] Database connected
- [x] File uploads working
- [x] Environment variables set locally

### ⚠️ Environment Variables to Add in Vercel

You need to add these in Vercel Dashboard → Settings → Environment Variables:

#### Required (Must Add):
1. **`DATABASE_URL`**
   - Value: Your Neon connection string
   - Note: Should be auto-added if Neon was set up via Vercel Marketplace
   - Check: Vercel Dashboard → Storage → Your Neon database

2. **`CLOUDINARY_CLOUD_NAME`**
   - Value: `dsxnzprwg`
   - Environment: Production, Preview, Development

3. **`CLOUDINARY_API_KEY`**
   - Value: `621873776821163`
   - Environment: Production, Preview, Development

4. **`CLOUDINARY_API_SECRET`**
   - Value: `QFObFGCBeuuLEy3fGdI_Dhbrpmg`
   - Environment: Production, Preview, Development

5. **`NEXT_PUBLIC_SANITY_PROJECT_ID`**
   - Value: Your Sanity project ID
   - Environment: Production, Preview, Development

6. **`NEXT_PUBLIC_SANITY_DATASET`**
   - Value: `production` (or your dataset name)
   - Environment: Production, Preview, Development

#### Optional (If you have them):
- `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`
- `SANITY_API_READ_TOKEN` (if needed)
- `SANITY_API_WRITE_TOKEN` (if needed)

---

## Deployment Steps

### Step 1: Commit and Push to GitHub

```bash
# Check what files have changed
git status

# Add all files
git add .

# Commit changes
git commit -m "Complete database backend and file upload setup"

# Push to GitHub
git push
```

### Step 2: Deploy on Vercel

#### Option A: Auto-Deploy (If GitHub is connected)
- Vercel will automatically deploy when you push
- Go to Vercel Dashboard → Your Project
- Watch the deployment

#### Option B: Manual Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. **Add environment variables** (see list above)
6. Click "Deploy"

### Step 3: Add Environment Variables in Vercel

**Critical Step!**

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add each variable:
   - Click "Add New"
   - Enter variable name
   - Enter value
   - Select environments (Production, Preview, Development)
   - Click "Save"
4. **Redeploy** after adding variables

### Step 4: Verify Deployment

1. **Check Build Logs:**
   - Vercel Dashboard → Deployments
   - Click on latest deployment
   - Check for errors

2. **Test Your Site:**
   - Visit your production URL
   - Test all forms
   - Test file uploads
   - Check database connection

3. **Verify Environment Variables:**
   - Make sure all are set
   - Check that `DATABASE_URL` is from Neon (not local)

---

## Post-Deployment

### ✅ Verify Everything Works

- [ ] Homepage loads
- [ ] Contact form submits
- [ ] Get Involved forms work
- [ ] Career form works
- [ ] File uploads work
- [ ] Data appears in database (Prisma Studio with production DB)

### 🔧 If Something Doesn't Work

1. **Check Build Logs:**
   - Look for errors in Vercel deployment logs

2. **Check Environment Variables:**
   - Verify all are set correctly
   - Check for typos

3. **Check Database Connection:**
   - Verify `DATABASE_URL` is correct
   - Test connection in Prisma Studio

4. **Check File Uploads:**
   - Verify Cloudinary credentials
   - Check Cloudinary dashboard for uploads

---

## Important Notes

### Database Connection
- **Local:** Uses `.env.local` → Your local Neon database
- **Production:** Uses Vercel environment variables → Should use same Neon database (or separate production DB)

### File Uploads
- **Local:** Uses `.env.local` Cloudinary credentials
- **Production:** Uses Vercel environment variables → Same Cloudinary account

### Sanity CMS
- Already configured
- Should work automatically if environment variables are set

---

## Quick Deploy Command

If you have Vercel CLI installed:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🎯 Ready to Deploy?

1. ✅ Code is ready
2. ⚠️ Add environment variables in Vercel
3. ✅ Push to GitHub
4. ✅ Deploy!

**Let's do it!** 🚀

