# 🚀 Production Access & Management Guide

**Complete guide for accessing and managing CMS, Database, and File Storage in production.**

---

## 📋 Table of Contents

1. [Sanity CMS (Content Management)](#sanity-cms-content-management)
2. [Neon Database (PostgreSQL)](#neon-database-postgresql)
3. [Cloudinary (File Storage)](#cloudinary-file-storage)
4. [Quick Reference](#quick-reference)
5. [Security Best Practices](#security-best-practices)

---

## 🎨 Sanity CMS (Content Management)

### What It's For
- Managing website content (blog posts, team members, events, programs, etc.)
- Editing content without touching code
- Collaborative content editing

### How to Access

#### **Method 1: Via Production Website (Recommended)**
1. Go to your production website: `https://yourdomain.com/admin`
2. You'll be prompted to log in with your Sanity account
3. After logging in, you'll see the full CMS interface

#### **Method 2: Via Sanity Studio Directly**
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (`u1tu4f9f` or your project ID)
3. Click "Open Studio"
4. You'll see the same CMS interface

### Getting Your Credentials

1. **Go to Sanity Dashboard**
   - Visit [https://www.sanity.io/manage](https://www.sanity.io/manage)
   - Log in with your Sanity account

2. **Find Your Project ID**
   - Select your project
   - Project ID is shown in the project settings
   - Example: `u1tu4f9f`

3. **Get API Tokens (Optional)**
   - Go to **API** → **Tokens**
   - Create tokens for read/write access if needed

### Managing Content

#### **Available Content Types:**
- **Site Settings** - Global site configuration
- **Team Members** - Staff/volunteer profiles
- **Programs** - Initiatives and programs
- **Partners** - Partner organizations
- **Blog Posts** - News and articles
- **Events** - Upcoming events
- **Reports** - Annual reports and documents
- **Testimonials** - User testimonials
- **Resources** - Helpful resources

#### **How to Edit:**
1. Log into Sanity Studio (`/admin` on your site)
2. Click on any content type in the sidebar
3. Click on a document to edit
4. Make your changes
5. Click "Publish" to save

### Environment Variables (Vercel)

Make sure these are set in **Vercel Dashboard → Settings → Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### CORS Configuration

**Important:** Allow your production domain in Sanity:

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS origins**
4. Add your production domain:
   - `https://yourdomain.com`
   - `https://your-app.vercel.app`
5. Check "Allow credentials"
6. Click "Save"

### Useful Links
- **Sanity Dashboard**: [https://www.sanity.io/manage](https://www.sanity.io/manage)
- **Sanity Docs**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Production CMS**: `https://yourdomain.com/admin`

---

## 🗄️ Neon Database (PostgreSQL)

### What It's For
- Storing form submissions (contact, volunteer, partner, advocate, career applications)
- Storing newsletter subscriptions
- Storing donation records
- All user-submitted data

### How to Access

#### **Method 1: Neon Console (Easiest - No Local Setup)**

1. **Go to Neon Console**
   - Visit [https://console.neon.tech](https://console.neon.tech)
   - Log in with your Neon account

2. **Select Your Project**
   - Click on your database project
   - You'll see the dashboard

3. **Use SQL Editor**
   - Click "SQL Editor" in the sidebar
   - Write queries to view/edit data
   - Example: `SELECT * FROM contact_submissions;`

4. **View Tables**
   - Click "Tables" to see all your tables
   - Browse data visually

**Advantages:**
- ✅ No local setup needed
- ✅ Works from any device
- ✅ Secure (no credentials on your machine)
- ✅ Built-in SQL editor

#### **Method 2: Prisma Studio (Local - Full GUI)**

**Windows PowerShell:**
```powershell
# 1. Navigate to project
cd C:\Users\onwokonk\Desktop\bizlinka_dump\Cursor\5brothers_legacy

# 2. Get production DATABASE_URL from Vercel
# Vercel Dashboard → Settings → Environment Variables → DATABASE_URL

# 3. Set environment variable
$env:DATABASE_URL="postgresql://your-production-url-here"

# 4. Run Prisma Studio
npm run db:studio
```

**Access:** `http://localhost:5555`

**Advantages:**
- ✅ Full GUI for editing data
- ✅ Easy to use
- ✅ Visual interface

**Disadvantages:**
- ⚠️ Requires local setup
- ⚠️ You're editing production data directly

#### **Method 3: Database GUI Tools**

Use professional database tools:
- **pgAdmin** - [https://www.pgadmin.org](https://www.pgadmin.org)
- **DBeaver** - [https://dbeaver.io](https://dbeaver.io)
- **TablePlus** - [https://tableplus.com](https://tableplus.com)

Connect using your `DATABASE_URL` from Vercel.

### Getting Your Connection String

1. **From Vercel Dashboard:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Find `DATABASE_URL`
   - Copy the connection string

2. **From Neon Console:**
   - Go to [Neon Console](https://console.neon.tech)
   - Select your project
   - Go to **Connection Details**
   - Copy the connection string

### Database Tables

Your database contains these tables:

- `contact_submissions` - Contact form submissions
- `volunteer_applications` - Volunteer applications
- `partner_applications` - Partner applications
- `advocate_signups` - Advocate signups
- `career_applications` - Job applications
- `donations` - Donation records
- `newsletter_subscriptions` - Newsletter signups

### Common Queries

**View all contact submissions:**
```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

**View pending career applications:**
```sql
SELECT * FROM career_applications WHERE status = 'pending' ORDER BY created_at DESC;
```

**Count newsletter subscribers:**
```sql
SELECT COUNT(*) FROM newsletter_subscriptions WHERE active = true;
```

### Environment Variables (Vercel)

Make sure this is set in **Vercel Dashboard → Settings → Environment Variables**:

```
DATABASE_URL=postgresql://your-neon-connection-string
```

**Note:** This is usually auto-added if Neon was connected via Vercel Marketplace.

### Useful Links
- **Neon Console**: [https://console.neon.tech](https://console.neon.tech)
- **Neon Docs**: [https://neon.tech/docs](https://neon.tech/docs)
- **Prisma Docs**: [https://www.prisma.io/docs](https://www.prisma.io/docs)

---

## ☁️ Cloudinary (File Storage)

### What It's For
- Storing uploaded files (resumes, cover letters, documents)
- Career application attachments
- Any file uploads from forms

### How to Access

#### **Method 1: Cloudinary Dashboard (Recommended)**

1. **Go to Cloudinary Dashboard**
   - Visit [https://cloudinary.com/console](https://cloudinary.com/console)
   - Log in with your Cloudinary account

2. **View Media Library**
   - Click "Media Library" in the sidebar
   - Navigate to `career-applications/` folder
   - See all uploaded files

3. **Manage Files**
   - View files
   - Download files
   - Delete files
   - Get file URLs

#### **Method 2: Via API (Programmatic)**

Files are automatically uploaded when users submit forms. URLs are stored in the database.

### Getting Your Credentials

1. **Go to Cloudinary Dashboard**
   - Visit [https://cloudinary.com/console](https://cloudinary.com/console)
   - Log in

2. **View Dashboard**
   - You'll see:
     - **Cloud Name** (e.g., `dsxnzprwg`)
     - **API Key** (e.g., `621873776821163`)
     - **API Secret** (click "Reveal" to see)

3. **Copy All Three Values**

### File Organization

Files are stored in folders:
- `career-applications/` - All career application files
  - Resumes
  - Cover letters
  - Additional documents

### File Details

- **Max Size:** 5MB per file
- **Allowed Types:** PDF, DOC, DOCX
- **Storage:** Cloudinary (25GB free tier)
- **Access:** Public URLs (secure_url)

### Viewing Uploaded Files

1. **From Cloudinary Dashboard:**
   - Go to Media Library
   - Navigate to `career-applications/`
   - Click on any file to view/download

2. **From Database:**
   - Check `career_applications` table
   - Look at `resume_url`, `cover_letter_url`, `additional_docs` columns
   - URLs point to Cloudinary files

### Environment Variables (Vercel)

Make sure these are set in **Vercel Dashboard → Settings → Environment Variables**:

```
CLOUDINARY_CLOUD_NAME=dsxnzprwg
CLOUDINARY_API_KEY=621873776821163
CLOUDINARY_API_SECRET=QFObFGCBeuuLEy3fGdI_Dhbrpmg
```

### Useful Links
- **Cloudinary Dashboard**: [https://cloudinary.com/console](https://cloudinary.com/console)
- **Cloudinary Docs**: [https://cloudinary.com/documentation](https://cloudinary.com/documentation)

---

## 📝 Quick Reference

### Access URLs

| Service | URL | Login Required |
|---------|-----|----------------|
| **Sanity CMS** | `https://yourdomain.com/admin` | ✅ Yes (Sanity account) |
| **Sanity Dashboard** | [https://www.sanity.io/manage](https://www.sanity.io/manage) | ✅ Yes |
| **Neon Console** | [https://console.neon.tech](https://console.neon.tech) | ✅ Yes (Neon account) |
| **Cloudinary Dashboard** | [https://cloudinary.com/console](https://cloudinary.com/console) | ✅ Yes (Cloudinary account) |
| **Vercel Dashboard** | [https://vercel.com/dashboard](https://vercel.com/dashboard) | ✅ Yes (Vercel account) |

### Environment Variables Checklist

Make sure these are set in **Vercel Dashboard → Settings → Environment Variables**:

#### Required:
- ✅ `DATABASE_URL` - Neon PostgreSQL connection string
- ✅ `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- ✅ `CLOUDINARY_API_KEY` - Your Cloudinary API key
- ✅ `CLOUDINARY_API_SECRET` - Your Cloudinary API secret
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- ✅ `NEXT_PUBLIC_SANITY_DATASET` - Usually `production`

#### Optional:
- `NEXT_PUBLIC_SANITY_API_VERSION` - Usually `2024-01-01`
- `SANITY_API_READ_TOKEN` - For server-side queries
- `SANITY_API_WRITE_TOKEN` - For admin operations

### Quick Access Commands

**Prisma Studio (Local - Production DB):**
```powershell
cd C:\Users\onwokonk\Desktop\bizlinka_dump\Cursor\5brothers_legacy
$env:DATABASE_URL="your-production-url"
npm run db:studio
```

**View Database Tables:**
- Neon Console → SQL Editor → `SELECT * FROM table_name;`

**View Uploaded Files:**
- Cloudinary Dashboard → Media Library → `career-applications/`

**Edit Website Content:**
- Production Site → `/admin` → Log in with Sanity

---

## 🔒 Security Best Practices

### 1. **Never Commit Credentials**
- ✅ All credentials are in environment variables
- ✅ `.env.local` and `.env` are in `.gitignore`
- ❌ Never commit `.env` files to Git

### 2. **Use Strong Passwords**
- Use strong, unique passwords for all services
- Enable 2FA where available

### 3. **Limit Access**
- Only share credentials with trusted team members
- Use read-only tokens when possible
- Revoke access when team members leave

### 4. **Regular Backups**
- Neon automatically backs up your database
- Cloudinary files are stored redundantly
- Sanity content is versioned

### 5. **Monitor Access**
- Check Cloudinary usage regularly
- Monitor database connections
- Review Sanity activity logs

### 6. **Production vs Development**
- Use separate databases for dev/prod
- Use separate Cloudinary folders
- Use separate Sanity datasets (optional)

### 7. **Connection Strings**
- Never share `DATABASE_URL` publicly
- Never commit connection strings
- Rotate credentials if exposed

---

## 🆘 Troubleshooting

### Can't Access Sanity CMS

**Problem:** `/admin` page doesn't load or shows errors

**Solutions:**
1. Check environment variables in Vercel
2. Verify CORS settings in Sanity dashboard
3. Check that your production domain is added to CORS origins
4. Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct

### Can't Connect to Database

**Problem:** Database connection errors

**Solutions:**
1. Check `DATABASE_URL` in Vercel environment variables
2. Verify database is not paused in Neon console
3. Check connection string format
4. Ensure database is accessible (not behind firewall)

### Files Not Uploading

**Problem:** File uploads fail

**Solutions:**
1. Check Cloudinary credentials in Vercel
2. Verify file size is under 5MB
3. Check file type is allowed (PDF, DOC, DOCX)
4. Check Cloudinary dashboard for errors
5. Verify API secret is correct

### Can't See Production Data

**Problem:** Seeing old or no data

**Solutions:**
1. Verify you're connected to production database (not local)
2. Check environment variables are set correctly
3. Clear browser cache
4. Redeploy on Vercel if needed

---

## 📞 Support Resources

### Sanity
- **Documentation**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Support**: [https://www.sanity.io/help](https://www.sanity.io/help)
- **Community**: [https://slack.sanity.io](https://slack.sanity.io)

### Neon
- **Documentation**: [https://neon.tech/docs](https://neon.tech/docs)
- **Support**: [https://neon.tech/support](https://neon.tech/support)
- **Status**: [https://status.neon.tech](https://status.neon.tech)

### Cloudinary
- **Documentation**: [https://cloudinary.com/documentation](https://cloudinary.com/documentation)
- **Support**: [https://support.cloudinary.com](https://support.cloudinary.com)
- **Status**: [https://status.cloudinary.com](https://status.cloudinary.com)

### Vercel
- **Documentation**: [https://vercel.com/docs](https://vercel.com/docs)
- **Support**: [https://vercel.com/support](https://vercel.com/support)

---

## ✅ Quick Checklist

### First Time Setup
- [ ] Access Sanity CMS at `/admin` on production site
- [ ] Log into Neon Console and verify database
- [ ] Log into Cloudinary Dashboard and verify files
- [ ] Verify all environment variables are set in Vercel
- [ ] Test form submissions on production
- [ ] Test file uploads on production

### Regular Maintenance
- [ ] Review form submissions in database
- [ ] Check Cloudinary storage usage
- [ ] Review Sanity content regularly
- [ ] Monitor Vercel deployment logs
- [ ] Backup important data

---

**Last Updated:** 2026-02-19  
**Project:** 5Brothers Legacy Initiative  
**Version:** 1.0

