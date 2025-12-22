import { Language, Translations, DEFAULT_LANGUAGE } from './translations';
import { getTranslations } from './index';

// Client-side cache for dynamic translations
const clientCache = new Map<Language, { data: Translations; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch translations from API
export async function fetchDynamicTranslations(
  lang: Language,
  forceRefresh = false
): Promise<Translations> {
  // Check client-side cache first
  if (!forceRefresh) {
    const cached = clientCache.get(lang);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }
  }

  try {
    const response = await fetch(`/api/translations/${lang}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control
      cache: forceRefresh ? 'no-cache' : 'default',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch translations: ${response.statusText}`);
    }

    const translations = await response.json();

    // Update cache
    clientCache.set(lang, {
      data: translations,
      timestamp: Date.now(),
    });

    return translations;
  } catch (error) {
    console.error('Error fetching dynamic translations:', error);
    // Fallback to static translations
    return getTranslations(lang);
  }
}

// Update translations (for admin/real-time updates)
export async function updateTranslations(
  lang: Language,
  translations: Partial<Translations>
): Promise<boolean> {
  try {
    const response = await fetch(`/api/translations/${lang}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(translations),
    });

    if (!response.ok) {
      throw new Error(`Failed to update translations: ${response.statusText}`);
    }

    // Invalidate cache
    clientCache.delete(lang);

    return true;
  } catch (error) {
    console.error('Error updating translations:', error);
    return false;
  }
}

// Clear translation cache
export function clearTranslationCache(lang?: Language): void {
  if (lang) {
    clientCache.delete(lang);
  } else {
    clientCache.clear();
  }
}

// Check if translations need refresh
export function shouldRefreshTranslations(lang: Language): boolean {
  const cached = clientCache.get(lang);
  if (!cached) return true;
  return Date.now() - cached.timestamp >= CACHE_DURATION;
}

