# 🗄️ Database Backend Setup Plan for 5Brothers Legacy

## 📋 Overview

This document outlines the best database solution for your Next.js application hosted on Vercel. You currently use **Sanity CMS** for content management, but need a traditional database for:

- Form submissions (Contact, Volunteer, Partner, Advocate)
- Career applications (with file uploads)
- Donation/payment transactions
- Newsletter signups
- User accounts (if needed)
- Analytics and tracking data

---

## 🎯 Recommended Solution: **Vercel Postgres** (Primary)

### Why Vercel Postgres?

✅ **Perfect Integration**: Native Vercel integration, zero configuration  
✅ **Serverless**: Auto-scales with your Next.js app  
✅ **TypeScript Support**: Works seamlessly with Prisma  
✅ **Free Tier**: Generous free tier (256 MB storage, 60 hours compute/month)  
✅ **Easy Setup**: One-click setup from Vercel dashboard  
✅ **Connection Pooling**: Built-in connection pooling for serverless  
✅ **No Cold Starts**: Optimized for serverless functions  
✅ **Same Dashboard**: Manage everything in one place  

### Pricing
- **Hobby (Free)**: 256 MB storage, 60 hours compute/month
- **Pro ($20/month)**: 8 GB storage, 512 hours compute/month
- **Enterprise**: Custom pricing

---

## 🔄 Alternative: **Supabase** (If you need more features)

### Why Supabase?

✅ **PostgreSQL**: Full PostgreSQL database  
✅ **Free Tier**: Very generous (500 MB database, 2 GB file storage)  
✅ **Built-in Auth**: User authentication system  
✅ **Storage**: File storage for resumes/CVs  
✅ **Real-time**: Real-time subscriptions  
✅ **Dashboard**: Great admin dashboard  
✅ **Open Source**: Self-hostable if needed  

### When to Choose Supabase:
- Need user authentication
- Need file storage for career applications
- Want real-time features
- Need more storage on free tier

---

## 📊 Comparison

| Feature | Vercel Postgres | Supabase |
|---------|----------------|----------|
| **Setup Complexity** | ⭐⭐⭐⭐⭐ Very Easy | ⭐⭐⭐⭐ Easy |
| **Vercel Integration** | ⭐⭐⭐⭐⭐ Native | ⭐⭐⭐ Good |
| **Free Tier Storage** | 256 MB | 500 MB |
| **File Storage** | ❌ No | ✅ Yes (2 GB) |
| **Authentication** | ❌ No | ✅ Yes |
| **Real-time** | ❌ No | ✅ Yes |
| **Connection Pooling** | ✅ Built-in | ✅ Built-in |
| **TypeScript Support** | ✅ Excellent | ✅ Excellent |
| **Best For** | Simple data storage | Full-featured backend |

---

## 🏗️ Recommended Architecture

### Option 1: Vercel Postgres + Prisma (Recommended for Simplicity)

```
┌─────────────────┐
│   Next.js App   │
│   (Vercel)      │
└────────┬──────────┘
       │
       ├──► Sanity CMS (Content)
       │
       └──► Vercel Postgres (Data)
            └──► Prisma ORM
```

**Use for:**
- Form submissions
- Donation records
- Newsletter signups
- Simple relational data

### Option 2: Supabase (Recommended for Full Features)

```
┌─────────────────┐
│   Next.js App   │
│   (Vercel)      │
└────────┬──────────┘
       │
       ├──► Sanity CMS (Content)
       │
       └──► Supabase
            ├──► PostgreSQL (Data)
            ├──► Storage (Files)
            └──► Auth (Users)
```

**Use for:**
- Everything in Option 1, plus:
- User authentication
- File uploads (resumes, CVs)
- Real-time features

---

## 📦 Data Models Needed

Based on your application, you'll need these database tables:

### 1. **Contact Submissions**
```sql
- id (UUID)
- name (String)
- email (String)
- subject (String)
- message (Text)
- created_at (Timestamp)
- status (Enum: pending, read, replied)
```

### 2. **Volunteer Applications**
```sql
- id (UUID)
- name (String)
- email (String)
- phone (String)
- availability (String)
- skills (Text)
- interests (Text)
- created_at (Timestamp)
- status (Enum: pending, approved, rejected)
```

### 3. **Partner Applications**
```sql
- id (UUID)
- organization_name (String)
- contact_name (String)
- email (String)
- phone (String)
- organization_type (String)
- partnership_interest (Text)
- created_at (Timestamp)
- status (Enum: pending, approved, rejected)
```

### 4. **Advocate Signups**
```sql
- id (UUID)
- name (String)
- email (String)
- phone (String)
- platform (String)
- advocacy_interest (Text)
- created_at (Timestamp)
- status (Enum: pending, active)
```

### 5. **Career Applications**
```sql
- id (UUID)
- name (String)
- email (String)
- phone (String)
- position (String)
- resume_url (String) -- File storage
- cover_letter_url (String) -- File storage
- additional_docs (JSON)
- created_at (Timestamp)
- status (Enum: pending, reviewing, accepted, rejected)
```

### 6. **Donations**
```sql
- id (UUID)
- donor_name (String)
- email (String)
- amount (Decimal)
- currency (Enum: NGN, USD)
- payment_method (String)
- payment_reference (String) -- Paystack reference
- status (Enum: pending, completed, failed)
- receipt_sent (Boolean)
- created_at (Timestamp)
```

### 7. **Newsletter Subscriptions**
```sql
- id (UUID)
- email (String)
- name (String, optional)
- subscribed_at (Timestamp)
- status (Enum: active, unsubscribed)
- source (String) -- Where they signed up
```

---

## 🚀 Implementation Steps

### Phase 1: Choose & Setup Database

#### Option A: Vercel Postgres Setup

1. **Create Database in Vercel**
   - Go to Vercel Dashboard → Your Project → Storage
   - Click "Create Database" → Select "Postgres"
   - Choose "Hobby" plan (free)
   - Wait for provisioning (~2 minutes)

2. **Get Connection String**
   - Vercel automatically creates environment variables:
     - `POSTGRES_URL`
     - `POSTGRES_PRISMA_URL`
     - `POSTGRES_URL_NON_POOLING`
   - These are automatically available in your Next.js app

3. **Install Prisma**
   ```bash
   npm install prisma @prisma/client
   npm install -D prisma
   ```

4. **Initialize Prisma**
   ```bash
   npx prisma init
   ```

5. **Configure Prisma Schema**
   - Update `prisma/schema.prisma` with your models
   - Set `DATABASE_URL` in `.env.local`

6. **Run Migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

#### Option B: Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Choose region closest to your users
   - Wait for provisioning (~2 minutes)

2. **Get Connection String**
   - Go to Project Settings → Database
   - Copy "Connection string" (URI format)
   - Add to `.env.local` as `DATABASE_URL`

3. **Install Dependencies**
   ```bash
   npm install @supabase/supabase-js
   npm install prisma @prisma/client
   npm install -D prisma
   ```

4. **Initialize Prisma**
   ```bash
   npx prisma init
   ```

5. **Configure & Migrate**
   - Update `prisma/schema.prisma`
   - Run migrations

---

### Phase 2: Create Prisma Schema

Create `prisma/schema.prisma` with all your models (see Data Models section above).

### Phase 3: Create API Routes

Update your existing API routes to use the database:

- `/app/api/contact/route.ts` - Contact form submissions
- `/app/api/volunteer/route.ts` - Volunteer applications
- `/app/api/partner/route.ts` - Partner applications
- `/app/api/advocate/route.ts` - Advocate signups
- `/app/api/career/route.ts` - Career applications
- `/app/api/donations/route.ts` - Donation records
- `/app/api/newsletter/route.ts` - Newsletter signups

### Phase 4: Update Forms

Connect your frontend forms to the new API routes.

### Phase 5: Create Admin Dashboard (Optional)

Create an admin page to view and manage submissions.

---

## 💰 Cost Analysis

### Vercel Postgres
- **Free Tier**: Perfect for MVP/early stage
- **Pro Tier**: $20/month when you outgrow free tier
- **Total**: $0-20/month

### Supabase
- **Free Tier**: Very generous, likely sufficient
- **Pro Tier**: $25/month if needed
- **Total**: $0-25/month

**Recommendation**: Start with free tier of either option. Both are sufficient for a nonprofit website.

---

## ✅ Recommendation

**For your use case, I recommend: Vercel Postgres**

**Reasons:**
1. ✅ You're already on Vercel - seamless integration
2. ✅ Simpler setup - one less service to manage
3. ✅ Free tier is sufficient for your needs
4. ✅ File uploads can use Vercel Blob Storage (or Cloudinary you already have)
5. ✅ No authentication needed (Sanity handles CMS auth)

**Switch to Supabase if:**
- You need user authentication
- You need more file storage
- You want real-time features
- Free tier storage becomes limiting

---

## 🎯 Next Steps

1. **Decide**: Vercel Postgres or Supabase?
2. **Setup**: Follow Phase 1 steps above
3. **Schema**: Create Prisma schema with all models
4. **API Routes**: Update/create API routes
5. **Forms**: Connect frontend forms
6. **Test**: Test all form submissions
7. **Deploy**: Deploy to Vercel

---

## 📚 Resources

- [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase Docs](https://supabase.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Ready to proceed?** Let me know which option you prefer, and I'll help you set it up!

