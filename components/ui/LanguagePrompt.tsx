'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';
import { Icon } from './Icon';

export const LanguagePrompt = () => {
  const { showLanguagePrompt, language, setLanguage, dismissLanguagePrompt } = useLanguage();
  const browserLang = SUPPORTED_LANGUAGES.find(lang => lang.code === language);

  if (!showLanguagePrompt || !browserLang) return null;

  return (
    <AnimatePresence>
      {showLanguagePrompt && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className="bg-white border-2 border-[#0B334A] rounded-lg shadow-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Icon name="globe" size={24} className="text-[#0B334A]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Switch to {browserLang.nativeName}?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  We noticed you&apos;re browsing in {browserLang.name}. Would you like to view this site in {browserLang.nativeName}?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage(browserLang.code)}
                    className="px-4 py-2 bg-[#0B334A] text-white text-sm font-semibold rounded-lg hover:bg-[#082530] transition-colors"
                  >
                    Yes, switch
                  </button>
                  <button
                    onClick={dismissLanguagePrompt}
                    className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    No, thanks
                  </button>
                </div>
              </div>
              <button
                onClick={dismissLanguagePrompt}
                className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Close"
              >
                <Icon name="x" size={18} className="text-gray-400" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

