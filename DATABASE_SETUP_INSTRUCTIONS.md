# 🚀 Database Setup Instructions

## Quick Start Guide

Follow these steps to set up your database backend:

---

## Step 1: Choose Your Database Provider

Based on the Vercel Marketplace, here are the best PostgreSQL options:

### Option A: Neon (Recommended - Best for Serverless)

**Why Neon?**
- ✅ Serverless Postgres (perfect for Vercel)
- ✅ Generous free tier
- ✅ Auto-scaling
- ✅ Branching (database branching like Git)
- ✅ Great Prisma integration

**Setup Steps:**
1. **Go to Vercel Dashboard**
   - Navigate to your project
   - Go to **Storage** tab or **Marketplace**
   - Find **Neon** in the list
   - Click **Create**

2. **Connect Neon Account**
   - Sign up/login to Neon (free)
   - Authorize Vercel to access Neon

3. **Create Database**
   - Neon will create a new database
   - Connection string is auto-added to Vercel as `DATABASE_URL`
   - Wait ~30 seconds for provisioning

4. **Done!** Environment variable is automatically set

### Option B: Supabase (Great Alternative)

**Why Supabase?**
- ✅ Postgres backend with extra features
- ✅ Built-in file storage (for resumes/CVs)
- ✅ Authentication system (if needed later)
- ✅ Real-time features
- ✅ Generous free tier (500 MB)

**Setup Steps:**
1. **In Vercel Marketplace**
   - Find **Supabase** in the list
   - Click **Create**

2. **Connect Supabase Account**
   - Sign up/login to Supabase (free)
   - Authorize Vercel access

3. **Create Database**
   - Supabase creates a new project
   - Connection string auto-added as `DATABASE_URL`

### Option C: Prisma Postgres (Instant Setup)

**Why Prisma Postgres?**
- ✅ Instant Serverless Postgres
- ✅ Built specifically for Prisma
- ✅ Seamless integration

**Setup Steps:**
1. **In Vercel Marketplace**
   - Find **Prisma Postgres**
   - Click **Create**
   - Follow the setup wizard

### Option D: Other Options

- **AWS** - Enterprise-grade, if you need AWS infrastructure
- **Nile** - Postgres re-engineered for B2B SaaS
- **Turso** - Serverless SQLite (not PostgreSQL, but lightweight option)

**For this project, we recommend Neon or Supabase.**

---

## Step 2: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

This will install:
- `@prisma/client` - Prisma database client
- `prisma` - Prisma CLI (dev dependency)
- `zod` - Schema validation

---

## Step 3: Set Up Local Development Database

For local development, you have two options:

### Option 1: Use Supabase (Easiest for Local Dev)

1. Create a free Supabase project
2. Get the connection string
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```

### Option 2: Use Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database:
   ```bash
   createdb 5brothers_legacy
   ```
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/5brothers_legacy?schema=public"
   ```

---

## Step 4: Initialize Database Schema

Run these commands to create your database tables:

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (creates tables)
npm run db:push
```

**For Production (Vercel):**
- The database is automatically set up when you deploy
- Run migrations in production:
  ```bash
  npx prisma migrate deploy
  ```

---

## Step 5: Verify Setup

### Check Database Connection

```bash
# Open Prisma Studio (database GUI)
npm run db:studio
```

This opens a web interface at `http://localhost:5555` where you can:
- View all tables
- Add/edit/delete records
- Verify your schema

### Test API Routes

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the contact form:
   - Go to `/contact-us`
   - Submit the form
   - Check Prisma Studio to see the submission

---

## Step 6: Deploy to Vercel

### If Using Neon, Supabase, or Prisma Postgres (via Marketplace):

1. **Push your code to GitHub**
2. **Deploy to Vercel** (if not already deployed)
3. **Database is automatically connected** - connection string is auto-added!
4. **No manual environment variable setup needed**

### If Using External Database (Manual Setup):

1. **Add Environment Variable in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `DATABASE_URL` with your Supabase connection string
   - Make sure to add it for **Production**, **Preview**, and **Development**

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Run Migrations:**
   ```bash
   npx prisma migrate deploy
   ```

---

## Step 7: Set Up Database Migrations (Optional but Recommended)

For production, use migrations instead of `db:push`:

```bash
# Create initial migration
npx prisma migrate dev --name init

# Apply migrations in production
npx prisma migrate deploy
```

---

## 📋 Environment Variables Checklist

Make sure these are set in Vercel:

### Required:
- ✅ `DATABASE_URL` (automatically set by Marketplace providers)
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID`
- ✅ `NEXT_PUBLIC_SANITY_DATASET`

### Optional (for future features):
- `RESEND_API_KEY` - For email notifications
- `PAYSTACK_PUBLIC_KEY` - For donations
- `PAYSTACK_SECRET_KEY` - For donations
- `BLOB_READ_WRITE_TOKEN` - For file uploads

---

## 🎯 What's Been Set Up

✅ **Prisma Schema** - All database models defined  
✅ **API Routes** - Contact, Volunteer, Partner, Advocate, Newsletter  
✅ **Form Integration** - Contact form connected  
✅ **Form Integration** - Get Involved forms connected  
✅ **Validation** - Zod schemas for all forms  
✅ **Error Handling** - Proper error responses  

---

## 🔄 Next Steps

1. **Set up email notifications** (Resend, SendGrid, etc.)
2. **Add file upload** for career applications (Vercel Blob or Cloudinary)
3. **Create admin dashboard** to view submissions
4. **Set up donation tracking** when payment integration is ready

---

## 🐛 Troubleshooting

### "Prisma Client not generated"
```bash
npm run db:generate
```

### "Database connection failed"
- Check your `DATABASE_URL` environment variable
- Verify database is running (if local)
- Check network access (if remote)

### "Table does not exist"
```bash
npm run db:push
```

### "Migration failed"
- Check database permissions
- Verify connection string format
- Check Prisma logs for specific errors

---

## 📚 Useful Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and apply migration
npm run db:migrate

# Open database GUI
npm run db:studio

# Format Prisma schema
npx prisma format
```

---

## ✅ You're All Set!

Your database backend is now ready. All form submissions will be stored in your PostgreSQL database and can be accessed via:

1. **Prisma Studio** - `npm run db:studio`
2. **API Routes** - Query via your Next.js API
3. **Admin Dashboard** - (To be created)

For questions or issues, refer to:
- [Prisma Docs](https://www.prisma.io/docs)
- [Neon Docs](https://neon.tech/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Marketplace](https://vercel.com/marketplace)

