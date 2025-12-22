# Dynamic Translations - Quick Setup Guide

## Current Status

✅ **Dynamic translation system is implemented and ready to use!**

The system currently:
- Uses static translations (bundled at build time) as the primary source
- Has API endpoints ready for dynamic loading
- Supports real-time updates via API
- Falls back gracefully if API fails

## To Enable Real-Time Dynamic Translations

### Step 1: Choose Your Data Source

**Option A: MongoDB**

```typescript
// lib/i18n/database.ts
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export async function getTranslationsFromDatabase(lang: Language) {
  await client.connect();
  const db = client.db('your-db');
  const doc = await db.collection('translations').findOne({ language: lang });
  await client.close();
  return doc?.data || null;
}
```

**Option B: PostgreSQL (with Prisma)**

```typescript
// lib/i18n/database.ts
import { prisma } from '@/lib/prisma';

export async function getTranslationsFromDatabase(lang: Language) {
  const translation = await prisma.translation.findUnique({
    where: { language: lang }
  });
  return translation?.data || null;
}
```

**Option C: Supabase**

```typescript
// lib/i18n/database.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getTranslationsFromDatabase(lang: Language) {
  const { data } = await supabase
    .from('translations')
    .select('data')
    .eq('language', lang)
    .single();
  return data?.data || null;
}
```

**Option D: CMS (Contentful, Strapi, Sanity)**

```typescript
// lib/i18n/database.ts
import contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getTranslationsFromDatabase(lang: Language) {
  const entry = await client.getEntry(`translations-${lang}`);
  return entry.fields.data || null;
}
```

### Step 2: Create Database Schema

**MongoDB Example:**
```javascript
db.translations.insertOne({
  language: 'en',
  data: {
    // Full translations object from lib/i18n/locales/en.ts
  },
  version: 1,
  updatedAt: new Date(),
  updatedBy: 'admin'
});
```

**PostgreSQL Example:**
```sql
CREATE TABLE translations (
  language VARCHAR(2) PRIMARY KEY,
  data JSONB NOT NULL,
  version INTEGER DEFAULT 1,
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by VARCHAR(255)
);
```

### Step 3: Implement Save Function

Update `saveTranslationsToDatabase` in `lib/i18n/database.ts`:

```typescript
export async function saveTranslationsToDatabase(
  lang: Language,
  translations: Partial<Translations>,
  userId?: string
): Promise<boolean> {
  // Your database save logic here
  // Example with MongoDB:
  const db = await getDatabase();
  await db.collection('translations').updateOne(
    { language: lang },
    {
      $set: {
        data: translations,
        updatedAt: new Date(),
        updatedBy: userId,
        $inc: { version: 1 }
      }
    },
    { upsert: true }
  );
  return true;
}
```

### Step 4: Add Authentication (Optional but Recommended)

```typescript
// app/api/translations/[lang]/route.ts
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest, { params }) {
  const session = await getServerSession();
  
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // ... rest of code
}
```

### Step 5: Test Dynamic Loading

1. Start your dev server
2. Open browser console
3. Switch languages - you should see API calls to `/api/translations/[lang]`
4. Check Network tab for translation requests

## How It Works Now

1. **Page Load**: Static translations display immediately
2. **Background**: API fetches dynamic translations
3. **Update**: UI updates if dynamic translations differ
4. **Cache**: Translations cached for 5 minutes

## Testing Without Database

You can test the system even without a database:

1. The API will return static translations (fallback)
2. Everything works as before
3. When you add database, it will automatically use dynamic translations

## Migration Strategy

1. **Phase 1** (Now): System uses static translations, API ready
2. **Phase 2**: Connect to database, start storing translations
3. **Phase 3**: Migrate existing translations to database
4. **Phase 4**: Enable admin interface for real-time updates
5. **Phase 5**: Remove static translations (optional)

## Benefits

- ✅ **No breaking changes** - works with existing code
- ✅ **Gradual migration** - can enable database later
- ✅ **Performance** - static fallback ensures fast load
- ✅ **Flexibility** - works with any data source
- ✅ **Real-time** - updates without rebuild once database is connected

## Next Steps

1. Choose your database/CMS
2. Implement `getTranslationsFromDatabase` and `saveTranslationsToDatabase`
3. Test with one language first
4. Migrate all translations
5. Add admin interface (TranslationManager component is ready)

The system is production-ready and will automatically use dynamic translations once you connect your data source!

