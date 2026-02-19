# 🗄️ Vercel Blob Storage Setup Guide

## Quick Setup (5 minutes)

### Step 1: Get Your Blob Token

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Log in to your account

2. **Navigate to Blob Storage**
   - Click on your **profile/account** (top right)
   - Go to **Storage** → **Blob**
   - Or visit: https://vercel.com/dashboard/stores

3. **Create a Blob Store** (if you don't have one)
   - Click **"Create Store"**
   - Give it a name (e.g., "5brothers-legacy-files")
   - Choose a region closest to your users
   - Click **"Create"**

4. **Get Your Token**
   - Once the store is created, go to **Settings**
   - Find **"Tokens"** section
   - Click **"Create Token"**
   - Name it (e.g., "Career Applications Upload")
   - Copy the token (you'll only see it once!)

### Step 2: Add Token to Environment Variables

#### For Local Development:

1. **Open `.env.local`** in your project root
2. **Add the token:**
   ```
   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
   ```
3. **Save the file**

#### For Vercel Production:

1. **Go to Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. **Add new variable:**
   - **Name:** `BLOB_READ_WRITE_TOKEN`
   - **Value:** Your token from Step 1
   - **Environment:** Select all (Production, Preview, Development)
4. **Click "Save"**
5. **Redeploy** your application (or it will auto-deploy on next push)

### Step 3: Verify Setup

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Test file upload:**
   - Go to `/career`
   - Click "Apply Now" on a job
   - Upload a file (PDF, DOC, or DOCX)
   - Submit the form
   - Check that the file uploads successfully

---

## ✅ What's Already Done

- ✅ Vercel Blob package installed (`@vercel/blob`)
- ✅ Upload route configured (`/app/api/career/upload/route.ts`)
- ✅ File validation (size, type)
- ✅ Unique filename generation
- ✅ Error handling

---

## 📋 Environment Variables Checklist

Make sure these are set:

### Required:
- ✅ `BLOB_READ_WRITE_TOKEN` - Your Vercel Blob token

### Already Set:
- ✅ `DATABASE_URL` - Your Neon database connection
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity CMS

---

## 🧪 Testing

### Test File Upload:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Go to career page:**
   - Visit `http://localhost:3000/career`

3. **Apply for a job:**
   - Click "Apply Now"
   - Fill out the form
   - Upload a resume (PDF, DOC, or DOCX)
   - Submit

4. **Verify:**
   - Check browser console for errors
   - Check that success message appears
   - Verify file URL is saved to database (use Prisma Studio)

### Check Uploaded Files:

1. **Vercel Dashboard:**
   - Go to Storage → Blob → Your Store
   - You should see uploaded files in the `career-applications/` folder

2. **Database:**
   ```bash
   npm run db:studio
   ```
   - Open `career_applications` table
   - Check that `resume_url`, `cover_letter_url`, and `additional_docs` have URLs

---

## 💰 Pricing

**Vercel Blob Free Tier:**
- 1 GB storage
- 1 GB bandwidth/month
- Perfect for MVP/early stage

**Paid Plans:**
- Pay-as-you-go after free tier
- Very affordable for nonprofits

---

## 🔒 Security Notes

- ✅ Files are stored with unique names (prevents conflicts)
- ✅ File type validation (only PDF, DOC, DOCX)
- ✅ File size limits (5MB max)
- ✅ Public access (files are accessible via URL)
- ⚠️ Consider adding authentication for file access if needed

---

## 🐛 Troubleshooting

### "BLOB_READ_WRITE_TOKEN is not set"

**Solution:**
1. Check `.env.local` has the token
2. Restart dev server after adding token
3. For production, add token in Vercel environment variables

### "File upload failed"

**Check:**
1. Token is correct and valid
2. File size is under 5MB
3. File type is PDF, DOC, or DOCX
4. Check browser console for errors
5. Check Vercel logs

### "Files not appearing in Vercel Blob"

**Check:**
1. Token has write permissions
2. Blob store is active
3. Check Vercel dashboard → Storage → Blob

---

## 📚 Resources

- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
- [Vercel Blob API Reference](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

---

## ✅ Setup Checklist

- [ ] Create Vercel Blob store
- [ ] Get `BLOB_READ_WRITE_TOKEN`
- [ ] Add token to `.env.local` (local dev)
- [ ] Add token to Vercel environment variables (production)
- [ ] Restart dev server
- [ ] Test file upload
- [ ] Verify files appear in Vercel Blob dashboard
- [ ] Verify URLs saved to database

---

**You're all set!** Once you add the token, file uploads will work automatically. 🎉

