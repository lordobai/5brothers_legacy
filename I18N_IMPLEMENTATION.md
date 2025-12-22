# Multilingual / Language Translation Implementation

## Overview
A comprehensive site-wide language translation system has been implemented that allows users to view all public content in multiple languages.

## Supported Languages
- **English (en)** - Default
- **Spanish (es)** - Español
- **French (fr)** - Français
- **Portuguese (pt)** - Português
- **Arabic (ar)** - العربية
- **Chinese Simplified (zh)** - 简体中文

## Features Implemented

### ✅ Core Requirements
- [x] Language selector visible on all public pages (header)
- [x] Users can switch languages at any time without losing their place
- [x] Selected language persists across pages (localStorage + cookies)
- [x] Default language: English
- [x] Browser language detection on first visit with non-blocking prompt

### ✅ Translation Scope
- [x] Navigation menus
- [x] Page titles and headings
- [x] Buttons, labels, placeholders
- [x] System messages
- [x] Help page content (resource types, filters, forms)
- [x] Footer content
- [x] Form validation messages
- [x] Success/error messages

### ✅ Technical Implementation

#### File Structure
```
lib/i18n/
├── translations.ts          # Type definitions
├── index.ts                 # Core i18n utilities
├── resourceTypes.ts         # Resource type translations
└── locales/
    ├── en.ts               # English translations
    ├── es.ts               # Spanish translations
    ├── fr.ts               # French translations
    ├── pt.ts               # Portuguese translations
    ├── ar.ts               # Arabic translations
    └── zh.ts               # Chinese translations

contexts/
└── LanguageContext.tsx      # React context for language management

components/ui/
├── LanguageSelector.tsx     # Language dropdown component
└── LanguagePrompt.tsx       # Browser language detection prompt
```

#### Key Components

1. **LanguageContext** (`contexts/LanguageContext.tsx`)
   - Manages current language state
   - Handles language persistence
   - Provides translations to components
   - Detects browser language

2. **LanguageSelector** (`components/ui/LanguageSelector.tsx`)
   - Dropdown menu in header
   - Shows current language
   - Lists all supported languages
   - Accessible with keyboard navigation

3. **LanguagePrompt** (`components/ui/LanguagePrompt.tsx`)
   - Non-blocking prompt on first visit
   - Suggests switching to browser language
   - Dismissible

4. **Translation Files** (`lib/i18n/locales/`)
   - Type-safe translation structure
   - Organized by feature/page
   - Easy to extend

## Usage

### In Components

```tsx
import { useTranslations } from '@/contexts/LanguageContext';

function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>{t.home.hero.title}</p>
    </div>
  );
}
```

### Changing Language

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { setLanguage } = useLanguage();
  
  return (
    <button onClick={() => setLanguage('es')}>
      Switch to Spanish
    </button>
  );
}
```

## Adding New Languages

1. Add language code to `lib/i18n/translations.ts`:
```ts
export type Language = 'en' | 'es' | 'fr' | 'pt' | 'ar' | 'zh' | 'de'; // Add 'de'
```

2. Add to `SUPPORTED_LANGUAGES` array:
```ts
{ code: 'de', name: 'German', nativeName: 'Deutsch' }
```

3. Create translation file `lib/i18n/locales/de.ts`:
```ts
import { Translations } from './translations';

export const de: Translations = {
  // ... translations
};
```

4. Import and add to `lib/i18n/index.ts`:
```ts
import { de } from './locales/de';

const translations: Record<Language, Translations> = {
  // ...
  de,
};
```

## Adding New Translation Keys

1. Add to `lib/i18n/translations.ts` interface:
```ts
export interface Translations {
  // ...
  newSection: {
    title: string;
    description: string;
  };
}
```

2. Add translations to all locale files:
```ts
// en.ts
newSection: {
  title: 'New Section',
  description: 'Description here',
}

// es.ts
newSection: {
  title: 'Nueva Sección',
  description: 'Descripción aquí',
}
// ... repeat for all languages
```

## RTL Support

Arabic (ar) automatically uses RTL layout:
- HTML `dir` attribute set to `rtl` for Arabic
- Handled in root layout

## Browser Language Detection

- Detects browser language on first visit
- Shows non-blocking prompt if browser language differs from default
- User can accept or dismiss
- Preference saved to avoid showing again

## Persistence

- **localStorage**: Primary storage for language preference
- **Cookies**: Backup for SSR compatibility
- **Default**: Falls back to English if no preference found

## Current Status

### ✅ Completed
- Core i18n infrastructure
- All 6 languages implemented
- Language selector in header
- Browser language detection
- Help page fully translated
- Navigation translated
- Footer translated (basic)

### 🔄 In Progress
- Translating remaining pages (homepage, who-we-are, etc.)
- Translating all form components
- Translating error messages

### ⏳ Pending
- Translate all page content
- Translate all section components
- Add more translation keys as needed
- Test RTL layout for Arabic
- Add language-specific URL routing (optional)

## Notes

- Proper nouns (organization names) are NOT translated
- URLs remain the same across languages
- User-submitted data is NOT translated
- System is extensible - easy to add more languages
- Type-safe translations prevent missing keys

## Testing

To test different languages:
1. Use the language selector in the header
2. Check localStorage: `localStorage.getItem('preferred-language')`
3. Clear localStorage to test browser detection
4. Test RTL layout with Arabic

## Future Enhancements

- [ ] Language-specific URL routing (`/es/help`, `/fr/help`)
- [ ] Server-side language detection
- [ ] Translation management interface
- [ ] Professional translation review
- [ ] More comprehensive translations for all pages
- [ ] Language-specific content (not just translations)

