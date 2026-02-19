# 🔧 Setting Up Local Development Environment

## Step 3: Configure Local Database Connection

Since you've set up Neon via Vercel, you have two options for local development:

### Option 1: Use the Same Neon Database (Easiest - Recommended)

**Pros:**
- ✅ No additional setup needed
- ✅ See real data immediately
- ✅ Test with production-like environment

**Cons:**
- ⚠️ Local dev changes affect the same database (but that's usually fine for testing)

**Steps:**
1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Find `DATABASE_URL` (it should be there from Neon setup)
3. Copy the value
4. Create `.env.local` in your project root:
   ```
   DATABASE_URL="[paste the connection string here]"
   ```
5. **Important:** Add `.env.local` to `.gitignore` (if not already there)

### Option 2: Create a Separate Neon Database for Local Dev

**Pros:**
- ✅ Isolated development environment
- ✅ Won't affect production data

**Steps:**
1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project (or use a branch)
3. Copy the connection string
4. Add to `.env.local`:
   ```
   DATABASE_URL="[your local neon connection string]"
   ```

### Option 3: Use Local PostgreSQL

Only if you prefer a completely local setup:
1. Install PostgreSQL locally
2. Create database: `createdb 5brothers_legacy`
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/5brothers_legacy?schema=public"
   ```

---

## Quick Setup (Recommended: Option 1)

1. **Get DATABASE_URL from Vercel:**
   - Vercel Dashboard → Your Project → Settings → Environment Variables
   - Copy the `DATABASE_URL` value

2. **Create `.env.local` file:**
   ```bash
   # In your project root
   echo 'DATABASE_URL="[paste your connection string here]"' > .env.local
   ```

3. **Verify `.env.local` is in `.gitignore`:**
   ```bash
   # Check if .gitignore has .env.local
   cat .gitignore | grep env.local
   ```

4. **Done!** Your local environment is configured.

---

## Next: Initialize Database Schema

After setting up `.env.local`, proceed to Step 4 to create your database tables.

