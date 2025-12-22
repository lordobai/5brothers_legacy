import { NextRequest, NextResponse } from 'next/server';
import { Language, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n';
import { getTranslationsFromDatabase, saveTranslationsToDatabase } from '@/lib/i18n/database';

// Cache for translations (in-memory cache)
const translationCache = new Map<Language, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch dynamic translations from database/CMS
async function fetchDynamicTranslations(lang: Language): Promise<any | null> {
  try {
    // Try to fetch from database/CMS
    const dbTranslations = await getTranslationsFromDatabase(lang);
    return dbTranslations;
  } catch (error) {
    console.error('Error fetching from database:', error);
    // Return null to fall back to static translations
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { lang: string } }
) {
  try {
    const lang = params.lang as Language;
    
    // Validate language
    if (!SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
      return NextResponse.json(
        { error: 'Unsupported language' },
        { status: 400 }
      );
    }

    // Check cache first
    const cached = translationCache.get(lang);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'X-Cache': 'HIT',
        },
      });
    }

    // Try to fetch dynamic translations
    const dynamicTranslations = await fetchDynamicTranslations(lang);
    
    // Merge with static translations (dynamic overrides static)
    const staticTranslations = getTranslations(lang);
    const mergedTranslations = dynamicTranslations
      ? { ...staticTranslations, ...dynamicTranslations }
      : staticTranslations;

    // Update cache
    translationCache.set(lang, {
      data: mergedTranslations,
      timestamp: Date.now(),
    });

    return NextResponse.json(mergedTranslations, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Cache': 'MISS',
      },
    });
  } catch (error) {
    console.error('Error fetching translations:', error);
    // Fallback to static translations on error
    const lang = params.lang as Language;
    const staticTranslations = getTranslations(lang);
    return NextResponse.json(staticTranslations, {
      headers: {
        'Cache-Control': 'no-cache',
        'X-Cache': 'ERROR',
      },
    });
  }
}

// POST endpoint to update translations (admin only)
export async function POST(
  request: NextRequest,
  { params }: { params: { lang: string } }
) {
  try {
    // TODO: Add authentication/authorization check
    // const session = await getSession(request);
    // if (!session || !session.user.isAdmin) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const lang = params.lang as Language;
    const body = await request.json();

    // Validate language
    if (!SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
      return NextResponse.json(
        { error: 'Unsupported language' },
        { status: 400 }
      );
    }

    // Save to database/CMS
    const success = await saveTranslationsToDatabase(lang, body);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to save translations' },
        { status: 500 }
      );
    }

    // Invalidate cache
    translationCache.delete(lang);

    return NextResponse.json({ 
      success: true, 
      message: 'Translations updated successfully',
      language: lang 
    });
  } catch (error) {
    console.error('Error updating translations:', error);
    return NextResponse.json(
      { error: 'Failed to update translations' },
      { status: 500 }
    );
  }
}

