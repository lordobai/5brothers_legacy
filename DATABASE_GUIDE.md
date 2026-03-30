# 🗄️ Database Complete Guide

**Complete guide for setting up, accessing, and managing the PostgreSQL database for the 5Brothers Legacy Initiative website.**

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Database Provider Options](#database-provider-options)
3. [Setup & Configuration](#setup--configuration)
4. [Database Schema](#database-schema)
5. [Accessing the Database](#accessing-the-database)
6. [API Routes](#api-routes)
7. [Troubleshooting](#troubleshooting)
8. [Common Commands](#common-commands)

---

## 🚀 Quick Start

### 1. Choose Database Provider

**Recommended: Neon (via Vercel Marketplace)**
1. Go to Vercel Dashboard → Your Project → Storage/Marketplace
2. Find **Neon** → Click **Create**
3. Sign up/login to Neon (free) → Authorize Vercel
4. Database created automatically!
5. `DATABASE_URL` is auto-added - no manual setup needed!

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Local Development

Add to `.env.local`:
```env
DATABASE_URL="postgresql://your-connection-string"
```

### 4. Initialize Database

```bash
# Generate Prisma Client
npm run db:generate

# Create database tables
npm run db:push
```

### 5. Test It!

```bash
# Start dev server
npm run dev

# Open database GUI (optional)
npm run db:studio
```

Visit `/contact-us` and submit the form, then check Prisma Studio to see the submission.

---

## 🎯 Database Provider Options

### Option 1: Neon (Recommended) ⭐

**Why Neon?**
- ✅ Serverless Postgres (perfect for Vercel)
- ✅ Generous free tier
- ✅ Auto-scaling
- ✅ Database branching (like Git)
- ✅ Great Prisma integration
- ✅ One-click setup via Vercel Marketplace

**Setup:**
1. Vercel Dashboard → Storage/Marketplace
2. Find **Neon** → Click **Create**
3. Sign up/login → Authorize
4. Done! `DATABASE_URL` auto-added

### Option 2: Supabase (Great Alternative)

**Why Supabase?**
- ✅ Full PostgreSQL database
- ✅ Built-in file storage (for resumes/CVs)
- ✅ Authentication system (if needed later)
- ✅ Real-time features
- ✅ Generous free tier (500 MB + 2 GB storage)

**Setup:**
1. Vercel Dashboard → Storage/Marketplace
2. Find **Supabase** → Click **Create**
3. Sign up/login → Authorize
4. Done! `DATABASE_URL` auto-added

### Option 3: Prisma Postgres

**Why Prisma Postgres?**
- ✅ Built specifically for Prisma
- ✅ Instant setup
- ✅ Seamless Prisma integration

**Setup:**
1. Vercel Dashboard → Storage/Marketplace
2. Find **Prisma Postgres** → Click **Create**
3. Follow setup wizard

### Comparison

| Feature | Neon | Supabase | Prisma Postgres |
|---------|------|----------|-----------------|
| **Setup** | ⭐⭐⭐⭐⭐ One-click | ⭐⭐⭐⭐⭐ One-click | ⭐⭐⭐⭐⭐ One-click |
| **Free Tier** | ⭐⭐⭐⭐⭐ Generous | ⭐⭐⭐⭐⭐ Very Generous | ⭐⭐⭐⭐ Good |
| **File Storage** | ❌ No | ✅ Yes (2 GB) | ❌ No |
| **Authentication** | ❌ No | ✅ Yes | ❌ No |
| **Real-time** | ❌ No | ✅ Yes | ❌ No |
| **Prisma Support** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Perfect |
| **Database Branching** | ✅ Yes | ❌ No | ❌ No |

**Recommendation:** Start with **Neon** for simplicity. Switch to **Supabase** if you need file storage or authentication.

---

## ⚙️ Setup & Configuration

### Prerequisites
- Node.js 18+
- Database provider account (Neon/Supabase)
- Vercel account

### Installed Packages
- ✅ `@prisma/client` - Prisma database client
- ✅ `prisma` - Prisma CLI (dev dependency)
- ✅ `zod` - Schema validation
- ✅ `dotenv-cli` - Environment variable management

### Environment Variables

**Local (`.env.local`):**
```env
DATABASE_URL="postgresql://your-connection-string"
```

**Production (Vercel Dashboard → Settings → Environment Variables):**
- `DATABASE_URL` - Automatically set by Marketplace providers
- Add for Production, Preview, and Development environments

**Note:** If using Marketplace providers (Neon/Supabase), `DATABASE_URL` is automatically added. No manual setup needed!

### Project Structure
```
prisma/
├── schema.prisma          # Database schema
lib/
├── prisma.ts              # Prisma client utility
app/api/
├── contact/route.ts       # Contact form API
├── volunteer/route.ts      # Volunteer API
├── partner/route.ts        # Partner API
├── advocate/route.ts       # Advocate API
├── career/route.ts         # Career API
├── career/upload/route.ts  # File upload API
└── newsletter/route.ts     # Newsletter API
```

---

## 📊 Database Schema

### Available Models

#### 1. Contact Submissions (`contact_submissions`)
- `id` - UUID
- `name` - String
- `email` - String
- `subject` - String
- `message` - Text
- `status` - String (pending, read, replied)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 2. Volunteer Applications (`volunteer_applications`)
- `id` - UUID
- `name` - String
- `email` - String
- `phone` - String (optional)
- `availability` - Text (optional)
- `skills` - Text (optional)
- `interests` - Text (optional)
- `additionalInfo` - Text (optional)
- `status` - String (pending, approved, rejected)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 3. Partner Applications (`partner_applications`)
- `id` - UUID
- `organizationName` - String
- `contactName` - String
- `email` - String
- `phone` - String (optional)
- `organizationType` - String (optional)
- `partnershipInterest` - Text (optional)
- `website` - String (optional)
- `additionalInfo` - Text (optional)
- `status` - String (pending, approved, rejected)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 4. Advocate Signups (`advocate_signups`)
- `id` - UUID
- `name` - String
- `email` - String
- `phone` - String (optional)
- `platform` - String
- `advocacyInterest` - Text (optional)
- `additionalInfo` - Text (optional)
- `status` - String (pending, active)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 5. Career Applications (`career_applications`)
- `id` - UUID
- `name` - String
- `email` - String
- `phone` - String (optional)
- `address` - String (optional)
- `position` - String
- `coverLetter` - Text (optional)
- `resumeUrl` - String (optional)
- `coverLetterUrl` - String (optional)
- `additionalDocs` - JSON (optional)
- `status` - String (pending, reviewing, accepted, rejected)
- `notes` - Text (optional)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 6. Donations (`donations`)
- `id` - UUID
- `donorName` - String
- `email` - String
- `phone` - String (optional)
- `amount` - Decimal
- `currency` - String (NGN, USD)
- `paymentMethod` - String
- `paymentReference` - String
- `status` - String (pending, completed, failed)
- `receiptSent` - Boolean
- `receiptUrl` - String (optional)
- `metadata` - JSON (optional)
- `createdAt` - DateTime
- `updatedAt` - DateTime

#### 7. Newsletter Subscriptions (`newsletter_subscriptions`)
- `id` - UUID
- `email` - String
- `name` - String (optional)
- `status` - String (active, unsubscribed)
- `source` - String
- `subscribedAt` - DateTime
- `unsubscribedAt` - DateTime (optional)

### Schema Features
- ✅ All models have UUID primary keys
- ✅ Automatic timestamps (`createdAt`, `updatedAt`)
- ✅ Indexes on frequently queried fields
- ✅ Optional fields for flexibility
- ✅ Status tracking for workflow management

---

## 🎨 Accessing the Database

### Method 1: Neon Console (Easiest - No Local Setup)

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

### Method 2: Prisma Studio (Local - Full GUI)

**Windows PowerShell:**
```powershell
cd C:\Users\onwokonk\Desktop\bizlinka_dump\Cursor\5brothers_legacy
npm run db:studio
```

**Mac/Linux:**
```bash
cd /path/to/your/project
npm run db:studio
```

**Access:** `http://localhost:5555`

**Advantages:**
- ✅ Full GUI for editing data
- ✅ Easy to use
- ✅ Visual interface

**Note:** Prisma Studio reads from `.env` file (not `.env.local`). Make sure `DATABASE_URL` is in `.env` file.

### Method 3: Prisma Studio with Production Database

**Windows PowerShell:**
```powershell
# 1. Get production DATABASE_URL from Vercel Dashboard
# 2. Set environment variable
$env:DATABASE_URL="postgresql://your-production-url-here"

# 3. Run Prisma Studio
npm run db:studio
```

**Access:** `http://localhost:5555` (with production data)

**⚠️ Warning:** You're editing production data directly. Be careful!

### Method 4: Database GUI Tools

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

---

## 🔌 API Routes

### Available API Endpoints

#### 1. Contact Form (`POST /api/contact`)
- Accepts: `name`, `email`, `subject`, `message`
- Validates with Zod
- Saves to `contact_submissions` table

#### 2. Volunteer Application (`POST /api/volunteer`)
- Accepts: `name`, `email`, `phone`, `availability`, `skills`, `message`
- Validates with Zod
- Saves to `volunteer_applications` table

#### 3. Partner Application (`POST /api/partner`)
- Accepts: `name`, `email`, `phone`, `organization`, `partnershipType`, `message`
- Validates with Zod
- Saves to `partner_applications` table

#### 4. Advocate Signup (`POST /api/advocate`)
- Accepts: `name`, `email`, `phone`, `platform`, `message`
- Validates with Zod
- Saves to `advocate_signups` table

#### 5. Career Application (`POST /api/career`)
- Accepts: `name`, `email`, `phone`, `address`, `position`, `coverLetter`, `resumeUrl`, `coverLetterUrl`, `additionalDocs`
- Validates with Zod
- Saves to `career_applications` table

#### 6. File Upload (`POST /api/career/upload`)
- Accepts: File (PDF, DOC, DOCX)
- Validates file size (max 5MB) and type
- Uploads to Cloudinary
- Returns file URL

#### 7. Newsletter Subscription (`POST /api/newsletter`)
- Accepts: `email`, `name` (optional)
- Validates with Zod
- Saves to `newsletter_subscriptions` table

#### 8. Newsletter Unsubscribe (`DELETE /api/newsletter`)
- Accepts: `email`
- Updates subscription status to `unsubscribed`

### API Features
- ✅ Input validation with Zod
- ✅ Error handling
- ✅ TypeScript types
- ✅ Proper HTTP status codes
- ✅ JSON responses

---

## 🐛 Troubleshooting

### "Prisma Client not generated"
**Solution:**
```bash
npm run db:generate
```

### "Database connection failed"
**Solutions:**
- Check your `DATABASE_URL` environment variable
- Verify database is running (if local)
- Check network access (if remote)
- Verify connection string format

### "Table does not exist"
**Solution:**
```bash
npm run db:push
```

### "Environment variable not found" (Prisma Studio)
**Solutions:**
- Make sure `.env` file exists (Prisma Studio reads `.env`, not `.env.local`)
- Check that `DATABASE_URL` is in the file
- Use `npm run db:studio` (uses dotenv-cli)
- Or set environment variable manually before running

### "File is locked" error
**Solutions:**
- Close Prisma Studio completely
- Close any other processes using Prisma
- Try again

### "Connection closed" error (Serverless)
**Issue:** After successful operations, you may see:
```
prisma:error Error in PostgreSQL connection: Error { kind: Closed, cause: None }
```

**Why:** This is normal in serverless environments. The operation succeeded, but Prisma logs after the connection closes.

**Solution:** Ignore it if operations are succeeding (201/200 status). It's just a logging artifact.

**Fix:** Ensure you're using Neon's pooled connection (has `-pooler` in the URL):
```
postgresql://...@ep-xxx-xxx-pooler.xxx.neon.tech/...
```

### "Migration failed"
**Solutions:**
- Check database permissions
- Verify connection string format
- Check Prisma logs for specific errors
- Ensure database is not paused (Neon)

### Prisma Studio not reading `.env.local`
**Solution:**
- Prisma Studio reads `.env`, not `.env.local`
- Create `.env` file with `DATABASE_URL`
- Or use `npm run db:studio` (uses dotenv-cli)

---

## 💻 Common Commands

### Prisma Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema changes to database (creates/updates tables)
npm run db:push

# Create and apply migration
npm run db:migrate

# Open database GUI (Prisma Studio)
npm run db:studio

# Format Prisma schema
npx prisma format

# View Prisma schema
npx prisma studio
```

### Development Commands

```bash
# Start development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build
```

### Database Management

```bash
# View database connection
# Check .env or .env.local for DATABASE_URL

# Test database connection
npx prisma db pull

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
- ✅ Never commit `.env` or `.env.local` to Git
- ✅ Use different databases for dev/prod
- ✅ Rotate credentials regularly
- ✅ Use read-only connections when possible

### 2. Database Access
- ✅ Limit who has database credentials
- ✅ Use connection pooling for serverless
- ✅ Enable SSL/TLS connections
- ✅ Monitor database access logs

### 3. API Security
- ✅ Validate all input with Zod
- ✅ Use Prisma (prevents SQL injection)
- ✅ Add rate limiting (recommended)
- ✅ Add authentication for admin routes

### 4. Production
- ✅ Use pooled connections (Neon)
- ✅ Monitor database usage
- ✅ Set up backups
- ✅ Review access logs regularly

---

## 📚 Useful Links

- **Prisma Docs**: [https://www.prisma.io/docs](https://www.prisma.io/docs)
- **Neon Docs**: [https://neon.tech/docs](https://neon.tech/docs)
- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **Vercel Marketplace**: [https://vercel.com/marketplace](https://vercel.com/marketplace)
- **Neon Console**: [https://console.neon.tech](https://console.neon.tech)

---

## ✅ Quick Checklist

### Initial Setup
- [ ] Choose database provider (Neon recommended)
- [ ] Create database via Vercel Marketplace
- [ ] Install dependencies (`npm install`)
- [ ] Add `DATABASE_URL` to `.env.local`
- [ ] Generate Prisma Client (`npm run db:generate`)
- [ ] Create database tables (`npm run db:push`)
- [ ] Test database connection (`npm run db:studio`)

### Development
- [ ] Test contact form submission
- [ ] Test volunteer application
- [ ] Test partner application
- [ ] Test advocate signup
- [ ] Test career application
- [ ] Test file uploads
- [ ] Test newsletter subscription

### Production
- [ ] Verify `DATABASE_URL` in Vercel environment variables
- [ ] Test all forms on production
- [ ] Verify data is being saved
- [ ] Set up database backups
- [ ] Monitor database usage

---

## 🎯 Best Practices

### Development
1. **Use local database** for development
2. **Test migrations** before applying to production
3. **Use Prisma Studio** for data inspection
4. **Validate all input** with Zod schemas
5. **Handle errors gracefully** in API routes

### Production
1. **Use pooled connections** (Neon)
2. **Monitor database performance**
3. **Set up automated backups**
4. **Review access logs regularly**
5. **Keep Prisma Client updated**

### Schema Management
1. **Use migrations** for production changes
2. **Test schema changes** locally first
3. **Document schema changes**
4. **Keep migrations small and focused**
5. **Review schema regularly**

---

**Last Updated:** 2026-02-19  
**Project:** 5Brothers Legacy Initiative  
**Database:** PostgreSQL (Neon)  
**ORM:** Prisma

