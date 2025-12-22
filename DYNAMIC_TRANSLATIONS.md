# Dynamic Translation System

## Overview

The translation system has been enhanced to support **real-time, dynamic translations** that can be updated without rebuilding the application. The system uses a hybrid approach:

1. **Static translations** (fallback) - Bundled at build time for instant display
2. **Dynamic translations** (primary) - Loaded from API/database for real-time updates

## Architecture

### How It Works

```
User Request → Static Translation (instant) → API Call → Dynamic Translation (background) → Update UI
```

1. **Initial Load**: Static translations display immediately (no loading delay)
2. **Background Fetch**: Dynamic translations load from API in the background
3. **Update**: UI updates with latest translations when available
4. **Caching**: Translations cached for 5 minutes to reduce API calls

### File Structure

```
lib/i18n/
├── index.ts              # Static translations (fallback)
├── dynamic.ts            # Dynamic translation loading
├── database.ts           # Database/CMS integration interface
└── locales/              # Static translation files

app/api/
└── translations/
    └── [lang]/
        └── route.ts      # API endpoint for fetching/updating translations

components/admin/
└── TranslationManager.tsx # Admin UI for managing translations
```

## Features

### ✅ Real-Time Updates
- Translations can be updated via API without rebuilding
- Changes reflect immediately after cache refresh
- Supports partial updates (update only changed keys)

### ✅ Performance Optimized
- Static translations for instant display
- Background loading of dynamic translations
- Client-side and server-side caching
- Stale-while-revalidate strategy

### ✅ Fallback System
- Falls back to static translations if API fails
- Graceful error handling
- No broken UI on network issues

### ✅ Admin Interface
- TranslationManager component for editing translations
- Real-time preview
- Save and refresh functionality

## Setup Instructions

### 1. Enable Dynamic Translations

The system is ready but uses static translations by default. To enable dynamic loading:

**Option A: Database Integration**

1. Update `lib/i18n/database.ts` with your database connection:

```typescript
// Example with MongoDB
import { MongoClient } from 'mongodb';

export async function getTranslationsFromDatabase(lang: Language): Promise<Translations | null> {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  const db = client.db('your-db');
  const doc = await db.collection('translations').findOne({ language: lang });
  await client.close();
  return doc?.data || null;
}
```

2. Update `app/api/translations/[lang]/route.ts`:

```typescript
import { getTranslationsFromDatabase } from '@/lib/i18n/database';

async function fetchDynamicTranslations(lang: Language) {
  return await getTranslationsFromDatabase(lang);
}
```

**Option B: CMS Integration**

1. Connect to your CMS (Contentful, Strapi, Sanity, etc.)
2. Implement fetch functions in `lib/i18n/database.ts`
3. Update API route to use CMS API

**Option C: External Translation Service**

1. Connect to translation service API (e.g., Crowdin, Lokalise)
2. Implement fetch in `lib/i18n/database.ts`
3. Update API route accordingly

### 2. Database Schema

Create a translations collection/table:

```javascript
// MongoDB Example
{
  language: 'en', // Language code
  data: {
    // Full Translations object
    common: { ... },
    nav: { ... },
    home: { ... },
    // ... all translation keys
  },
  version: 1, // Increment on updates
  updatedAt: Date,
  updatedBy: 'admin-user-id'
}
```

### 3. Admin Authentication

Add authentication to the translation API:

```typescript
// app/api/translations/[lang]/route.ts
export async function POST(request: NextRequest) {
  // Add auth check
  const session = await getSession(request);
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // ... rest of code
}
```

## Usage

### For Developers

Translations work the same way - no code changes needed:

```tsx
import { useTranslations } from '@/contexts/LanguageContext';

function MyComponent() {
  const t = useTranslations();
  return <h1>{t.home.hero.title}</h1>;
}
```

### For Admins

1. Access Translation Manager (add to admin dashboard)
2. Select language
3. Enter translation key (e.g., `home.hero.title`)
4. Edit translation value
5. Save - changes reflect immediately

### Manual API Updates

```bash
# Update a translation via API
curl -X POST http://localhost:3000/api/translations/en \
  -H "Content-Type: application/json" \
  -d '{
    "home": {
      "hero": {
        "title": "New Title"
      }
    }
  }'
```

## Caching Strategy

### Client-Side Cache
- **Duration**: 5 minutes
- **Storage**: In-memory Map
- **Invalidation**: On language change, manual refresh, or after duration

### Server-Side Cache
- **Duration**: 5 minutes (s-maxage)
- **Stale-While-Revalidate**: 10 minutes
- **Headers**: Cache-Control with appropriate values

### Cache Invalidation

```typescript
import { clearTranslationCache } from '@/lib/i18n/dynamic';

// Clear specific language
clearTranslationCache('en');

// Clear all
clearTranslationCache();
```

## Benefits

1. **No Rebuild Required**: Update translations without deploying
2. **Real-Time Updates**: Changes reflect immediately
3. **Performance**: Static fallback ensures fast initial load
4. **Flexibility**: Can use any data source (DB, CMS, API)
5. **Type Safety**: Still maintains TypeScript type checking
6. **Backward Compatible**: Works with existing static translations

## Migration Path

1. **Phase 1** (Current): Static translations only
2. **Phase 2**: Add database/CMS connection
3. **Phase 3**: Migrate translations to database
4. **Phase 4**: Enable real-time updates
5. **Phase 5**: Add admin interface

## API Endpoints

### GET `/api/translations/[lang]`
Fetch translations for a language
- Returns: Full Translations object
- Cached: Yes (5 minutes)
- Fallback: Static translations on error

### POST `/api/translations/[lang]`
Update translations (admin only)
- Body: Partial Translations object
- Returns: Success/error message
- Invalidates: Cache for that language

## Future Enhancements

- [ ] Translation versioning
- [ ] Translation history/rollback
- [ ] Bulk import/export (JSON, CSV)
- [ ] Translation completion tracking
- [ ] Missing translation detection
- [ ] Translation suggestions (AI-powered)
- [ ] Multi-user collaboration
- [ ] Translation workflow (draft → review → publish)

## Notes

- Static translations remain as fallback for reliability
- Dynamic translations override static ones when available
- System gracefully handles API failures
- No breaking changes to existing code
- Type safety maintained throughout

