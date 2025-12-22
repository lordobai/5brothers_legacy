/**
 * File-Based Dynamic Translations
 * 
 * Simple implementation using JSON files for dynamic translations.
 * Useful for testing or small projects without a database.
 * 
 * To use:
 * 1. Create translations directory: public/translations/
 * 2. Add JSON files: en.json, es.json, etc.
 * 3. Uncomment the code below and use in database.ts
 */

import { Language, Translations } from './translations';

/**
 * Load translations from JSON files in public/translations/
 * 
 * File structure:
 * public/translations/en.json
 * public/translations/es.json
 * etc.
 */
export async function getTranslationsFromFiles(lang: Language): Promise<Translations | null> {
  try {
    // In Next.js, public files are served from /translations/
    const response = await fetch(`/translations/${lang}.json`, {
      cache: 'no-store', // Always fetch fresh
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data as Translations;
  } catch (error) {
    console.error(`Error loading translations from file for ${lang}:`, error);
    return null;
  }
}

/**
 * Save translations to JSON file (client-side only, for testing)
 * Note: This won't actually save to the file system in production.
 * Use this only for development/testing with a file watcher or API.
 */
export async function saveTranslationsToFile(
  lang: Language,
  translations: Partial<Translations>
): Promise<boolean> {
  // In a real implementation, this would:
  // 1. Send to API endpoint
  // 2. API writes to file system
  // 3. Or use a file storage service
  
  try {
    const response = await fetch(`/api/translations/${lang}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(translations),
    });

    return response.ok;
  } catch (error) {
    console.error('Error saving translations to file:', error);
    return false;
  }
}

/**
 * Example JSON file structure (public/translations/en.json):
 * 
 * {
 *   "common": {
 *     "loading": "Loading...",
 *     "error": "Error",
 *     ...
 *   },
 *   "nav": {
 *     "home": "Home",
 *     ...
 *   },
 *   ...
 * }
 */

