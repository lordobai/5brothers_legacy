# ✅ Environment Variables Checklist

**Complete checklist of all required environment variables for your project.**

---

## 📋 Required Environment Variables

### For Local Development (`.env.local`)

Make sure your `.env.local` file has all of these:

```env
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require

# Cloudinary (File Storage)
CLOUDINARY_CLOUD_NAME=dsxnzprwg
CLOUDINARY_API_KEY=621873776821163
CLOUDINARY_API_SECRET=QFObFGCBeuuLEy3fGdI_Dhbrpmg

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

---

## ✅ Quick Check

### Database ✅
- [ ] `DATABASE_URL` - Your Neon PostgreSQL connection string

### Cloudinary (File Storage) ⚠️
- [ ] `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name (`dsxnzprwg`)
- [ ] `CLOUDINARY_API_KEY` - Your Cloudinary API key (`621873776821163`)
- [x] `CLOUDINARY_API_SECRET` - Your Cloudinary API secret (✅ You have this!)

### Sanity CMS ⚠️
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID (`u1tu4f9f`)
- [ ] `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (usually `production`)
- [ ] `NEXT_PUBLIC_SANITY_API_VERSION` - API version (`2024-01-01`)

### Flutterwave (Payment Gateway) ⚠️
- [ ] `FLW_SECRET_KEY` - Your Flutterwave secret key (starts with `FLWSECK_TEST_` for test, `FLWSECK_` for production)
- [ ] `FLW_PUBLIC_KEY` - Your Flutterwave public key (starts with `FLWPUBK_TEST_` for test, `FLWPUBK_` for production)
- [ ] `FLW_WEBHOOK_HASH` - Your Flutterwave webhook secret hash (set in Flutterwave dashboard)
- [ ] `NEXT_PUBLIC_APP_URL` - Your app URL (`http://localhost:3000` for local, your domain for production)

---

## 🔍 What You're Missing

Based on your current `.env.local`, you likely need:

1. **`CLOUDINARY_CLOUD_NAME`** - Add this line:
   ```
   CLOUDINARY_CLOUD_NAME=dsxnzprwg
   ```

2. **`CLOUDINARY_API_KEY`** - Add this line:
   ```
   CLOUDINARY_API_KEY=621873776821163
   ```

3. **`DATABASE_URL`** - Add this line (if not present):
   ```
   DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

4. **Sanity CMS Variables** - Add these (if not present):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

5. **Flutterwave Variables** - Add these (get from [flutterwave.com](https://flutterwave.com)):
   ```
   FLW_SECRET_KEY=FLWSECK_TEST_xxxxxxxxxxxxx
   FLW_PUBLIC_KEY=FLWPUBK_TEST_xxxxxxxxxxxxx
   FLW_WEBHOOK_HASH=your_webhook_secret_hash
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

---

## 📝 Complete `.env.local` Template

Copy this entire template to your `.env.local` file:

```env
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require

# Cloudinary (File Storage)
CLOUDINARY_CLOUD_NAME=dsxnzprwg
CLOUDINARY_API_KEY=621873776821163
CLOUDINARY_API_SECRET=QFObFGCBeuuLEy3fGdI_Dhbrpmg

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Flutterwave (Payment Gateway)
FLW_SECRET_KEY=FLWSECK_TEST_xxxxxxxxxxxxx
FLW_PUBLIC_KEY=FLWPUBK_TEST_xxxxxxxxxxxxx
FLW_WEBHOOK_HASH=your_webhook_secret_hash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## ⚠️ Important Notes

1. **No spaces around `=` sign**
   - ✅ Correct: `CLOUDINARY_CLOUD_NAME=dsxnzprwg`
   - ❌ Wrong: `CLOUDINARY_CLOUD_NAME = dsxnzprwg`

2. **No quotes needed** (unless value has spaces)
   - ✅ Correct: `CLOUDINARY_CLOUD_NAME=dsxnzprwg`
   - ⚠️ Also OK: `CLOUDINARY_CLOUD_NAME="dsxnzprwg"`

3. **One variable per line**

4. **Restart dev server** after adding variables
   - Stop `npm run dev` (Ctrl+C)
   - Start again: `npm run dev`

5. **File location**: `.env.local` must be in project root (same folder as `package.json`)

---

## 🧪 Verify Variables Are Loaded

After adding variables and restarting your dev server:

1. **Test Database:**
   ```bash
   npm run db:studio
   # Should open Prisma Studio without errors
   ```

2. **Test File Upload:**
   - Go to `http://localhost:3000/career`
   - Try uploading a file
   - Should work without "credentials not set" error

3. **Test CMS:**
   - Go to `http://localhost:3000/admin`
   - Should load Sanity Studio

---

## 🚀 For Production (Vercel)

Make sure these are also set in **Vercel Dashboard → Settings → Environment Variables**:

- [ ] `DATABASE_URL`
- [ ] `CLOUDINARY_CLOUD_NAME`
- [ ] `CLOUDINARY_API_KEY`
- [ ] `CLOUDINARY_API_SECRET`
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] `NEXT_PUBLIC_SANITY_DATASET`
- [ ] `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] `FLW_SECRET_KEY`
- [ ] `FLW_PUBLIC_KEY`
- [ ] `FLW_WEBHOOK_HASH`
- [ ] `NEXT_PUBLIC_APP_URL`

**Select all environments:** Production, Preview, Development

---

## 📚 Related Guides

- **Database Setup:** See `DATABASE_GUIDE.md`
- **File Storage Setup:** See `STORAGE_GUIDE.md`
- **CMS Setup:** See `CMS_GUIDE.md`
- **Production Access:** See `PRODUCTION_ACCESS_GUIDE.md`

---

**Quick Fix:** Add the missing variables to your `.env.local` file, save it, and restart your dev server! 🚀

