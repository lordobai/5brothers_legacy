# ☁️ Cloudinary File Storage Setup

## ✅ What's Done

- ✅ Cloudinary package installed
- ✅ Upload route configured for Cloudinary
- ✅ File validation (size & type)
- ✅ Error handling

---

## 🚀 Setup Steps (5 minutes)

### Step 1: Get Your Cloudinary Credentials

1. **Go to Cloudinary Dashboard**
   - Visit [cloudinary.com](https://cloudinary.com)
   - Sign up (free) or log in

2. **Get Your Credentials**
   - Go to **Dashboard** (home page)
   - You'll see:
     - **Cloud Name** (e.g., `your-cloud-name`)
     - **API Key** (e.g., `123456789012345`)
     - **API Secret** (click "Reveal" to see it)

3. **Copy All Three Values**

### Step 2: Add to Environment Variables

#### For Local Development:

**Add to `.env.local`:**
```bash
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

#### For Vercel Production:

1. **Go to Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. **Add these three variables:**
   - `CLOUDINARY_CLOUD_NAME` = your cloud name
   - `CLOUDINARY_API_KEY` = your API key
   - `CLOUDINARY_API_SECRET` = your API secret
3. **Select all environments** (Production, Preview, Development)
4. **Click "Save"**
5. **Redeploy** (or it will auto-deploy on next push)

### Step 3: Test It!

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test file upload:**
   - Go to `http://localhost:3000/career`
   - Click "Apply Now" on a job
   - Upload a file (PDF, DOC, or DOCX)
   - Submit the form
   - Check that it works!

---

## 📋 Environment Variables Checklist

Make sure these are set:

### Required:
- ✅ `CLOUDINARY_CLOUD_NAME`
- ✅ `CLOUDINARY_API_KEY`
- ✅ `CLOUDINARY_API_SECRET`

### Already Set:
- ✅ `DATABASE_URL` - Your Neon database
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity CMS

---

## 🎯 How It Works

1. **User uploads file** → Career form
2. **File validated** → Size (5MB) & type (PDF/DOC/DOCX)
3. **Uploaded to Cloudinary** → Stored in `career-applications/` folder
4. **URL returned** → Saved to database
5. **Application submitted** → All data + file URLs saved

---

## 📁 File Storage Details

**Storage:** Cloudinary  
**Folder:** `career-applications/`  
**Access:** Public URLs (secure_url)  
**Max Size:** 5MB per file  
**Allowed Types:** PDF, DOC, DOCX  
**Resource Type:** `raw` (for documents, not images)  

---

## 💰 Cloudinary Free Tier

- ✅ 25 GB storage
- ✅ 25 GB bandwidth/month
- ✅ Perfect for nonprofits
- ✅ No credit card required

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
   - Check Cloudinary dashboard → Media Library → `career-applications/` folder

### Check Uploaded Files:

1. **Cloudinary Dashboard:**
   - Go to [Cloudinary Dashboard](https://cloudinary.com/console)
   - Click **Media Library**
   - Navigate to `career-applications/` folder
   - You should see uploaded files

2. **Database:**
   ```bash
   npm run db:studio
   ```
   - Open `career_applications` table
   - Check that `resume_url`, `cover_letter_url`, and `additional_docs` have URLs

---

## 🔒 Security Notes

- ✅ Files stored with unique names (prevents conflicts)
- ✅ File type validation (only PDF, DOC, DOCX)
- ✅ File size limits (5MB max)
- ✅ Public URLs (files accessible via secure URL)
- ✅ API secret is server-side only (never exposed to client)

---

## 🐛 Troubleshooting

### "Cloudinary credentials are not set"

**Solution:**
1. Check `.env.local` has all three Cloudinary variables
2. Restart dev server after adding variables
3. For production, add variables in Vercel environment variables

### "File upload failed"

**Check:**
1. Credentials are correct
2. File size is under 5MB
3. File type is PDF, DOC, or DOCX
4. Check browser console for errors
5. Check Cloudinary dashboard for upload errors

### "Files not appearing in Cloudinary"

**Check:**
1. Credentials are correct
2. Check Cloudinary dashboard → Media Library
3. Look in `career-applications/` folder
4. Check Cloudinary activity log

---

## 📚 Resources

- [Cloudinary Dashboard](https://cloudinary.com/console)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration)

---

## ✅ Setup Checklist

- [ ] Create Cloudinary account (if needed)
- [ ] Get Cloudinary credentials (cloud name, API key, API secret)
- [ ] Add credentials to `.env.local` (local dev)
- [ ] Add credentials to Vercel environment variables (production)
- [ ] Restart dev server
- [ ] Test file upload
- [ ] Verify files appear in Cloudinary dashboard
- [ ] Verify URLs saved to database

---

**You're all set!** Once you add the Cloudinary credentials, file uploads will work automatically. 🎉

