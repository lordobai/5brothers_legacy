# ☁️ File Storage Complete Guide

**Complete guide for setting up, accessing, and managing file storage for the 5Brothers Legacy Initiative website.**

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Storage Provider Options](#storage-provider-options)
3. [Setup & Configuration](#setup--configuration)
4. [How It Works](#how-it-works)
5. [Accessing Uploaded Files](#accessing-uploaded-files)
6. [Testing & Verification](#testing--verification)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Current Setup: Cloudinary

**What's Already Done:**
- ✅ Cloudinary package installed
- ✅ Upload route configured (`/api/career/upload`)
- ✅ File validation (size & type)
- ✅ Error handling
- ✅ Unique filename generation

### Setup Steps (5 minutes)

1. **Get Cloudinary Credentials:**
   - Go to [Cloudinary Dashboard](https://cloudinary.com/console)
   - Sign up (free) or log in
   - Copy: Cloud Name, API Key, API Secret

2. **Add to Environment Variables:**
   
   **Local (`.env.local`):**
   ```env
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```
   
   **Production (Vercel Dashboard → Settings → Environment Variables):**
   - Add all three variables
   - Select all environments (Production, Preview, Development)
   - Save and redeploy

3. **Test It:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/career
   # Upload a file and test!
   ```

---

## 🎯 Storage Provider Options

### Option 1: Cloudinary (Current Setup) ⭐

**Why Cloudinary?**
- ✅ Generous free tier (25 GB storage, 25 GB bandwidth/month)
- ✅ Image optimization built-in
- ✅ Document storage support
- ✅ CDN included
- ✅ Easy to use
- ✅ Perfect for nonprofits

**Pricing:**
- **Free Tier:** 25 GB storage, 25 GB bandwidth/month
- **Paid Plans:** Pay-as-you-go after free tier

**Best For:** Most use cases, especially if you need image optimization

### Option 2: Vercel Blob Storage

**Why Vercel Blob?**
- ✅ Native Vercel integration
- ✅ Serverless, auto-scaling
- ✅ Simple setup
- ✅ Built-in CDN
- ✅ One less service to manage

**Pricing:**
- **Free Tier:** 1 GB storage, 1 GB bandwidth/month
- **Paid Plans:** Pay-as-you-go after free tier

**Best For:** Simple file storage, Vercel-only projects

### Option 3: Supabase Storage

**Why Supabase Storage?**
- ✅ Free tier (2 GB)
- ✅ Simple API
- ✅ Good for file storage
- ✅ Integrated with Supabase database (if using)

**Pricing:**
- **Free Tier:** 2 GB storage
- **Paid Plans:** Pay-as-you-go after free tier

**Best For:** Projects already using Supabase

### Comparison

| Feature | Cloudinary | Vercel Blob | Supabase Storage |
|---------|------------|-------------|------------------|
| **Free Tier** | ⭐⭐⭐⭐⭐ 25 GB | ⭐⭐⭐ 1 GB | ⭐⭐⭐⭐ 2 GB |
| **Image Optimization** | ✅ Yes | ❌ No | ❌ No |
| **Document Storage** | ✅ Yes | ✅ Yes | ✅ Yes |
| **CDN** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Vercel Integration** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Native | ⭐⭐⭐ Good |
| **Setup Complexity** | ⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐⭐ Very Easy | ⭐⭐⭐⭐ Easy |

**Recommendation:** **Cloudinary** for most use cases (current setup). Switch to **Vercel Blob** if you want simpler Vercel-native integration.

---

## ⚙️ Setup & Configuration

### Prerequisites
- Node.js 18+
- Cloudinary account (free)
- Vercel account (for production)

### Installed Packages
- ✅ `cloudinary` - Cloudinary SDK
- ✅ `@vercel/blob` - Vercel Blob (optional, if switching)

### Environment Variables

**Required for Cloudinary:**
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Required for Vercel Blob (if using):**
```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

### Getting Credentials

#### Cloudinary Credentials

1. **Go to Cloudinary Dashboard**
   - Visit [https://cloudinary.com/console](https://cloudinary.com/console)
   - Log in or sign up (free)

2. **View Dashboard**
   - You'll see:
     - **Cloud Name** (e.g., `dsxnzprwg`)
     - **API Key** (e.g., `621873776821163`)
     - **API Secret** (click "Reveal" to see)

3. **Copy All Three Values**

#### Vercel Blob Token (if using)

1. **Go to Vercel Dashboard**
   - Visit [https://vercel.com/dashboard/stores](https://vercel.com/dashboard/stores)
   - Click "Create Store" (or use existing)

2. **Create Token**
   - Go to **Settings** → **Tokens**
   - Click "Create Token"
   - Name it (e.g., "Career Applications Upload")
   - Copy the token (you'll only see it once!)

### Project Structure
```
app/api/career/
├── route.ts              # Career application API
└── upload/
    └── route.ts         # File upload API
```

---

## 🔄 How It Works

### File Upload Flow

```
1. User selects file → Career form
   ↓
2. File validated → Size (5MB) & type (PDF/DOC/DOCX)
   ↓
3. Uploaded to Cloudinary → Stored in `career-applications/` folder
   ↓
4. URL returned → Secure URL (https://res.cloudinary.com/...)
   ↓
5. URL saved to database → Career application record
   ↓
6. Application submitted → All data + file URLs saved
```

### File Storage Details

**Current Setup (Cloudinary):**
- **Storage:** Cloudinary
- **Folder:** `career-applications/`
- **Access:** Public URLs (secure_url)
- **Max Size:** 5MB per file
- **Allowed Types:** PDF, DOC, DOCX
- **Resource Type:** `raw` (for documents, not images)
- **Filename Format:** `career-applications/{timestamp}-{random}.{ext}`

### API Endpoints

#### File Upload (`POST /api/career/upload`)

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `FormData` with `file` field

**Response:**
```json
{
  "success": true,
  "url": "https://res.cloudinary.com/.../career-applications/1234567890-abc123.pdf",
  "fileName": "resume.pdf",
  "fileSize": 245678
}
```

**Error Response:**
```json
{
  "error": "File size exceeds 5MB limit",
  "details": "..."
}
```

#### Career Application (`POST /api/career`)

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "position": "Software Engineer",
  "coverLetter": "I am interested in...",
  "resumeUrl": "https://res.cloudinary.com/.../resume.pdf",
  "coverLetterUrl": "https://res.cloudinary.com/.../cover-letter.pdf",
  "additionalDocs": ["https://res.cloudinary.com/.../doc1.pdf"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your application!",
  "id": "uuid-here"
}
```

---

## 📁 Accessing Uploaded Files

### Method 1: Cloudinary Dashboard (Easiest)

1. **Go to Cloudinary Dashboard**
   - Visit [https://cloudinary.com/console](https://cloudinary.com/console)
   - Log in

2. **View Media Library**
   - Click **Media Library** in sidebar
   - Navigate to `career-applications/` folder
   - See all uploaded files

3. **Manage Files**
   - View files
   - Download files
   - Delete files
   - Get file URLs

### Method 2: Database (Prisma Studio)

1. **Open Prisma Studio:**
   ```bash
   npm run db:studio
   ```

2. **View Career Applications:**
   - Click on `CareerApplication` model
   - Find your submission
   - Check `resume_url`, `cover_letter_url`, `additional_docs` fields
   - URLs point to Cloudinary files

3. **Access Files:**
   - Copy URL from database
   - Open in browser to view/download
   - Or use in your application

### Method 3: Direct URL Access

Files are publicly accessible via their URLs:
```
https://res.cloudinary.com/{cloud_name}/raw/upload/v{version}/career-applications/{filename}
```

You can:
- Share URLs directly
- Embed in emails
- Download programmatically
- Display in admin dashboard

---

## 🧪 Testing & Verification

### Test File Upload

1. **Start Dev Server:**
   ```bash
   npm run dev
   ```

2. **Go to Career Page:**
   - Visit `http://localhost:3000/career`
   - Click "Apply Now" on a job

3. **Upload a File:**
   - Fill out the form
   - Upload a resume (PDF, DOC, or DOCX)
   - Submit the form

4. **Verify Success:**
   - Check browser console for errors
   - Check that success message appears
   - Verify file URL is saved to database
   - Check Cloudinary dashboard for file

### Verification Checklist

After submitting a career application:

- [ ] Form shows success message
- [ ] No error messages displayed
- [ ] Check Prisma Studio - see submission with file URLs
- [ ] Check Cloudinary dashboard - see files in `career-applications/` folder
- [ ] Click file URLs - files should be accessible
- [ ] File URLs start with `https://res.cloudinary.com/...`

### Test Upload Endpoint Directly

You can test the upload endpoint directly in browser console:

```javascript
// Create a test file
const testFile = new File(['test content'], 'test.pdf', { 
  type: 'application/pdf' 
});
const formData = new FormData();
formData.append('file', testFile);

// Upload it
fetch('/api/career/upload', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  console.log('Upload result:', data);
  if (data.url) {
    console.log('✅ Success! File URL:', data.url);
  } else {
    console.log('❌ Failed:', data.error);
  }
});
```

### Check Browser Console

1. **Open Developer Tools:**
   - Press `F12` or Right-click → Inspect
   - Go to **Console** tab

2. **Submit Form:**
   - Fill out and submit career application
   - Watch console for errors or success messages

3. **Check Network Tab:**
   - Go to **Network** tab
   - Filter by "upload" or "career"
   - Click on upload request
   - Check **Response** - should show success with URL

---

## 🐛 Troubleshooting

### "Cloudinary credentials are not set"

**Problem:** Upload fails with credential error

**Solutions:**
1. Check `.env.local` has all three Cloudinary variables
2. Restart dev server after adding variables
3. For production, add variables in Vercel environment variables
4. Verify variable names are correct (case-sensitive)

### "File upload failed"

**Problem:** Upload returns error

**Check:**
1. Credentials are correct
2. File size is under 5MB
3. File type is PDF, DOC, or DOCX
4. Check browser console for errors
5. Check Cloudinary dashboard for upload errors
6. Check server logs (terminal where `npm run dev` is running)

### "Files not appearing in Cloudinary"

**Problem:** Files don't show in dashboard

**Check:**
1. Credentials are correct
2. Check Cloudinary dashboard → Media Library
3. Look in `career-applications/` folder
4. Check Cloudinary activity log
5. Verify upload was successful (check API response)

### "File size exceeds limit"

**Problem:** File too large

**Solution:**
- Max file size is 5MB
- Compress file or split into multiple files
- Check file size before uploading

### "Invalid file type"

**Problem:** File type not allowed

**Solution:**
- Only PDF, DOC, and DOCX files are allowed
- Convert file to one of these formats
- Check file extension matches file type

### "URL not saved to database"

**Problem:** File uploads but URL not in database

**Check:**
1. Upload endpoint returns URL successfully
2. Career application API receives the URL
3. Database connection is working
4. Check Prisma Studio for the record
5. Verify API route is saving the URL field

### Environment Variables Not Loading

**Problem:** Variables not being read

**Solutions:**
1. Restart dev server after changing `.env.local`
2. Verify file is named `.env.local` (not `.env.local.txt`)
3. Check file is in project root
4. For production, verify variables in Vercel dashboard
5. Redeploy after adding variables in Vercel

---

## 🔒 Security Best Practices

### File Validation
- ✅ File type validation (only PDF, DOC, DOCX)
- ✅ File size limits (5MB max)
- ✅ Unique filenames (prevents conflicts)
- ✅ Server-side validation (not just client-side)

### Access Control
- ✅ Files stored with unique names
- ✅ Public URLs (accessible via secure URL)
- ✅ API secret is server-side only (never exposed to client)
- ⚠️ Consider adding authentication for file access if needed

### Storage Security
- ✅ Use secure URLs (HTTPS)
- ✅ Store credentials in environment variables
- ✅ Never commit credentials to Git
- ✅ Rotate API keys regularly
- ✅ Monitor storage usage

### Best Practices
1. **Validate on Server:** Always validate files on server, not just client
2. **Unique Filenames:** Prevent filename conflicts and overwrites
3. **Size Limits:** Enforce reasonable file size limits
4. **Type Restrictions:** Only allow safe file types
5. **Monitor Usage:** Track storage usage and costs
6. **Backup Strategy:** Consider backing up important files

---

## 📚 Useful Links

- **Cloudinary Dashboard**: [https://cloudinary.com/console](https://cloudinary.com/console)
- **Cloudinary Docs**: [https://cloudinary.com/documentation](https://cloudinary.com/documentation)
- **Cloudinary Node.js SDK**: [https://cloudinary.com/documentation/node_integration](https://cloudinary.com/documentation/node_integration)
- **Vercel Blob Docs**: [https://vercel.com/docs/storage/vercel-blob](https://vercel.com/docs/storage/vercel-blob)

---

## ✅ Quick Checklist

### Initial Setup
- [ ] Create Cloudinary account (if needed)
- [ ] Get Cloudinary credentials (cloud name, API key, API secret)
- [ ] Add credentials to `.env.local` (local dev)
- [ ] Add credentials to Vercel environment variables (production)
- [ ] Restart dev server
- [ ] Test file upload

### Verification
- [ ] Test file upload on `/career` page
- [ ] Verify files appear in Cloudinary dashboard
- [ ] Verify URLs saved to database
- [ ] Test with different file types (PDF, DOC, DOCX)
- [ ] Test file size limits (5MB max)
- [ ] Verify files are accessible via URL

### Production
- [ ] Add environment variables in Vercel
- [ ] Redeploy application
- [ ] Test file uploads on production
- [ ] Monitor storage usage
- [ ] Set up alerts for storage limits

---

## 🎯 Best Practices

### Development
1. **Test Locally First:** Always test file uploads locally before deploying
2. **Use Test Files:** Use small test files during development
3. **Monitor Logs:** Check server logs for upload errors
4. **Validate Early:** Test file validation with various file types

### Production
1. **Monitor Usage:** Track storage and bandwidth usage
2. **Set Alerts:** Configure alerts for storage limits
3. **Regular Backups:** Consider backing up important files
4. **Review Access:** Regularly review who has access to files
5. **Optimize Files:** Compress files when possible

### File Management
1. **Organize by Folder:** Use folders to organize files (e.g., `career-applications/`)
2. **Unique Names:** Always use unique filenames
3. **Clean Up:** Periodically clean up old/unused files
4. **Document URLs:** Keep track of file URLs in database

---

**Last Updated:** 2026-02-19  
**Project:** 5Brothers Legacy Initiative  
**Storage:** Cloudinary  
**Status:** ✅ Fully Configured

