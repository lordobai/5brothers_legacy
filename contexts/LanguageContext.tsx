'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getBrowserLanguage, getStoredLanguage, saveLanguage, getTranslations, Translations, DEFAULT_LANGUAGE } from '@/lib/i18n';
import { fetchDynamicTranslations, shouldRefreshTranslations } from '@/lib/i18n/dynamic';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  showLanguagePrompt: boolean;
  dismissLanguagePrompt: () => void;
  refreshTranslations: () => Promise<void>;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage?: Language }> = ({ 
  children, 
  initialLanguage 
}) => {
  // Use initialLanguage from server (from cookies) to prevent hydration mismatch
  // This ensures server and client render the same initial content
  const [language, setLanguageState] = useState<Language>(initialLanguage || DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>(getTranslations(initialLanguage || DEFAULT_LANGUAGE));
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);
  const [hasCheckedBrowser, setHasCheckedBrowser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag after hydration and sync with localStorage if needed
  useEffect(() => {
    setIsMounted(true);
    
    // After hydration, check if localStorage has a different language
    // Only update if it's different to avoid unnecessary re-renders
    const stored = getStoredLanguage();
    if (stored && stored !== language) {
      // Update language to match localStorage (user's preference)
      setLanguageState(stored);
      setTranslations(getTranslations(stored));
    }
  }, [language]);

  // Load dynamic translations on mount and language change
  useEffect(() => {
    if (!isMounted) return; // Wait for hydration to complete
    
    const loadTranslations = async () => {
      // Use static translations immediately for instant display
      setTranslations(getTranslations(language));
      
      // Then try to load dynamic translations in background
      if (shouldRefreshTranslations(language)) {
        setIsLoading(true);
        try {
          const dynamicTranslations = await fetchDynamicTranslations(language);
          setTranslations(dynamicTranslations);
        } catch (error) {
          console.error('Failed to load dynamic translations:', error);
          // Keep static translations on error
        } finally {
          setIsLoading(false);
        }
      } else {
        // Use cached dynamic translations
        const cached = await fetchDynamicTranslations(language, false);
        setTranslations(cached);
      }
    };

    loadTranslations();
  }, [language, isMounted]);

  const refreshTranslations = async () => {
    setIsLoading(true);
    try {
      const dynamicTranslations = await fetchDynamicTranslations(language, true);
      setTranslations(dynamicTranslations);
    } catch (error) {
      console.error('Failed to refresh translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize language prompt after mount (to avoid hydration issues)
  useEffect(() => {
    if (!isMounted) return;
    
    // First, check stored language
    const stored = getStoredLanguage();
    if (stored) {
      // If stored differs from initial, update (but don't show prompt)
      if (stored !== language) {
        setLanguageState(stored);
        setTranslations(getTranslations(stored));
      }
      setHasCheckedBrowser(true);
      return;
    }

    // If no stored language, check browser language
    const browserLang = getBrowserLanguage();
    if (browserLang !== DEFAULT_LANGUAGE && browserLang !== language && !hasCheckedBrowser) {
      // Show non-blocking prompt to switch
      setShowLanguagePrompt(true);
      setHasCheckedBrowser(true);
    } else {
      setHasCheckedBrowser(true);
    }
  }, [hasCheckedBrowser, isMounted, language]);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
    setShowLanguagePrompt(false);
    
    // Load translations for new language
    setIsLoading(true);
    try {
      const dynamicTranslations = await fetchDynamicTranslations(lang);
      setTranslations(dynamicTranslations);
    } catch (error) {
      console.error('Failed to load translations:', error);
      setTranslations(getTranslations(lang));
    } finally {
      setIsLoading(false);
    }
  };

  const dismissLanguagePrompt = () => {
    setShowLanguagePrompt(false);
    // Save current language preference to avoid showing prompt again
    saveLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        setLanguage,
        showLanguagePrompt,
        dismissLanguagePrompt,
        refreshTranslations,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper hook for translations
export const useTranslations = () => {
  const { translations } = useLanguage();
  return translations;
};

