# 📁 File Upload Setup Guide for Career Applications

## Current Status

The career application form is now connected to the database API, but **file uploads need a storage solution** to be fully functional.

---

## 🎯 File Upload Options

### Option 1: Vercel Blob Storage (Recommended for Vercel)

**Pros:**
- ✅ Native Vercel integration
- ✅ Serverless, auto-scaling
- ✅ Simple setup
- ✅ Built-in CDN

**Setup Steps:**

1. **Install Vercel Blob:**
   ```bash
   npm install @vercel/blob
   ```

2. **Get Blob Token:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `BLOB_READ_WRITE_TOKEN` (get from Vercel Blob dashboard)

3. **Update `/app/api/career/upload/route.ts`:**
   ```typescript
   import { put } from '@vercel/blob'
   
   export async function POST(request: NextRequest) {
     const formData = await request.formData()
     const file = formData.get('file') as File
     
     // Upload to Vercel Blob
     const blob = await put(file.name, file, {
       access: 'public',
       addRandomSuffix: true, // Prevent filename conflicts
     })
     
     return NextResponse.json({ url: blob.url })
   }
   ```

**Pricing:** Free tier available, then pay-as-you-go

---

### Option 2: Cloudinary (You Already Have This)

**Pros:**
- ✅ Already in your project
- ✅ Image optimization
- ✅ Document storage
- ✅ Generous free tier

**Setup Steps:**

1. **Get Cloudinary Credentials:**
   - Go to [Cloudinary Dashboard](https://cloudinary.com)
   - Get your `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

2. **Install Cloudinary SDK:**
   ```bash
   npm install cloudinary
   ```

3. **Update `/app/api/career/upload/route.ts`:**
   ```typescript
   import { v2 as cloudinary } from 'cloudinary'
   
   cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secret: process.env.CLOUDINARY_API_SECRET,
   })
   
   export async function POST(request: NextRequest) {
     const formData = await request.formData()
     const file = formData.get('file') as File
     
     // Convert file to buffer
     const bytes = await file.arrayBuffer()
     const buffer = Buffer.from(bytes)
     
     // Upload to Cloudinary
     const result = await new Promise((resolve, reject) => {
       cloudinary.uploader.upload_stream(
         {
           resource_type: 'raw', // For PDFs and documents
           folder: 'career-applications',
         },
         (error, result) => {
           if (error) reject(error)
           else resolve(result)
         }
       ).end(buffer)
     })
     
     return NextResponse.json({ url: result.secure_url })
   }
   ```

---

### Option 3: Supabase Storage (If Using Supabase)

**Pros:**
- ✅ Free tier (2 GB)
- ✅ Simple API
- ✅ Good for file storage

**Setup Steps:**

1. **Install Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Update `/app/api/career/upload/route.ts`:**
   ```typescript
   import { createClient } from '@supabase/supabase-js'
   
   const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.SUPABASE_SERVICE_ROLE_KEY!
   )
   
   export async function POST(request: NextRequest) {
     const formData = await request.formData()
     const file = formData.get('file') as File
     
     const bytes = await file.arrayBuffer()
     const buffer = Buffer.from(bytes)
     
     const fileName = `${Date.now()}-${file.name}`
     
     const { data, error } = await supabase.storage
       .from('career-applications')
       .upload(fileName, buffer, {
         contentType: file.type,
       })
     
     if (error) throw error
     
     const { data: { publicUrl } } = supabase.storage
       .from('career-applications')
       .getPublicUrl(fileName)
     
     return NextResponse.json({ url: publicUrl })
   }
   ```

---

## 🔧 Implementation Steps

### Step 1: Choose Your Storage Solution

Recommendation: **Vercel Blob** (easiest) or **Cloudinary** (you already have it)

### Step 2: Update Environment Variables

Add to `.env.local` and Vercel:
- For Vercel Blob: `BLOB_READ_WRITE_TOKEN`
- For Cloudinary: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- For Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Update Upload Route

Replace the placeholder code in `/app/api/career/upload/route.ts` with your chosen solution (see examples above).

### Step 4: Test File Upload

1. Go to `/career`
2. Click "Apply Now" on a job
3. Fill out the form and upload a file
4. Verify the file uploads and URL is saved to database

---

## 📝 Current Implementation

**What's Working:**
- ✅ Career form connected to API
- ✅ Form validation
- ✅ Database schema ready
- ✅ File upload endpoint structure created

**What Needs Implementation:**
- ⚠️ Actual file storage (currently returns mock URLs)
- ⚠️ File upload route needs real storage integration

---

## 🚀 Quick Start (Vercel Blob)

```bash
# Install
npm install @vercel/blob

# Add to .env.local
BLOB_READ_WRITE_TOKEN=your_token_here

# Update app/api/career/upload/route.ts with Vercel Blob code above
```

---

## ✅ Testing Checklist

- [ ] Choose storage solution
- [ ] Install required packages
- [ ] Add environment variables
- [ ] Update upload route
- [ ] Test file upload
- [ ] Verify files are stored
- [ ] Verify URLs are saved to database
- [ ] Test with different file types (PDF, DOC, DOCX)
- [ ] Test file size limits (5MB max)

---

**Note:** The current implementation will work for form submissions, but file URLs will be mock values until you implement actual storage. The form will still save all other data to the database correctly.

