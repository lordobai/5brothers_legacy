import { Language, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './translations';
import { Translations } from './translations';
import { en } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { pt } from './locales/pt';
import { ar } from './locales/ar';
import { zh } from './locales/zh';

// Translation dictionary
const translations: Record<Language, Translations> = {
  en,
  es,
  fr,
  pt,
  ar,
  zh,
};

// Get translation for a specific language
export const getTranslations = (lang: Language = DEFAULT_LANGUAGE): Translations => {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
};

// Get browser language
export const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Check if browser language is supported
  const supported = SUPPORTED_LANGUAGES.find(lang => lang.code === langCode);
  if (supported) {
    return supported.code;
  }
  
  return DEFAULT_LANGUAGE;
};

// Get language from storage
export const getStoredLanguage = (): Language | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('preferred-language');
    if (stored && SUPPORTED_LANGUAGES.some(lang => lang.code === stored)) {
      return stored as Language;
    }
  } catch (error) {
    console.error('Error reading language from storage:', error);
  }
  
  return null;
};

// Save language to storage
export const saveLanguage = (lang: Language): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('preferred-language', lang);
    // Also set cookie for server-side rendering
    document.cookie = `preferred-language=${lang}; path=/; max-age=31536000`; // 1 year
  } catch (error) {
    console.error('Error saving language to storage:', error);
  }
};

// Get language from cookie (for SSR)
export const getLanguageFromCookie = (cookieHeader?: string): Language => {
  if (!cookieHeader) return DEFAULT_LANGUAGE;
  
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  const lang = cookies['preferred-language'];
  if (lang && SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
    return lang as Language;
  }
  
  return DEFAULT_LANGUAGE;
};

// Helper function to get nested translation value
export const t = (translations: Translations, path: string): string => {
  const keys = path.split('.');
  let value: any = translations;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Translation key not found: ${path}`);
      return path;
    }
  }
  
  return typeof value === 'string' ? value : path;
};

export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE };
export type { Language, Translations };

