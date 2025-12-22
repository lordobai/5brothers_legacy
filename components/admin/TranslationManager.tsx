'use client';

/**
 * Translation Manager Component
 * 
 * Admin interface for managing translations in real-time.
 * This allows updating translations without rebuilding the application.
 * 
 * Usage:
 * - Add authentication/authorization
 * - Add to admin dashboard
 * - Connect to your database/CMS
 */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateTranslations } from '@/lib/i18n/dynamic';
import { Language, SUPPORTED_LANGUAGES } from '@/lib/i18n';
import { Translations } from '@/lib/i18n/translations';
import { Icon } from '@/components/ui/Icon';

export const TranslationManager = () => {
  const { language, translations, refreshTranslations } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<Language>(language);
  const [editingKey, setEditingKey] = useState<string>('');
  const [editingValue, setEditingValue] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSave = async () => {
    if (!editingKey || !editingValue) return;

    setIsSaving(true);
    setMessage(null);

    try {
      // Parse the key path (e.g., "home.hero.title")
      const keys = editingKey.split('.');
      const update: any = {};
      let current = update;

      // Build nested object
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = editingValue;

      const success = await updateTranslations(selectedLang, update as Partial<Translations>);
      
      if (success) {
        setMessage({ type: 'success', text: 'Translation updated successfully!' });
        await refreshTranslations();
        setEditingKey('');
        setEditingValue('');
      } else {
        setMessage({ type: 'error', text: 'Failed to update translation' });
      }
    } catch (error) {
      console.error('Error updating translation:', error);
      setMessage({ type: 'error', text: 'An error occurred' });
    } finally {
      setIsSaving(false);
    }
  };

  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split('.');
    let value = obj;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return '';
      }
    }
    return typeof value === 'string' ? value : '';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Translation Manager</h2>
      
      {/* Language Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Select Language</label>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value as Language)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.nativeName} ({lang.name})
            </option>
          ))}
        </select>
      </div>

      {/* Edit Translation */}
      <div className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Translation Key (e.g., home.hero.title)
          </label>
          <input
            type="text"
            value={editingKey}
            onChange={(e) => {
              setEditingKey(e.target.value);
              if (e.target.value) {
                const value = getNestedValue(translations, e.target.value);
                setEditingValue(value);
              }
            }}
            placeholder="home.hero.title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Translation Value</label>
          <textarea
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter translation..."
          />
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving || !editingKey || !editingValue}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? 'Saving...' : 'Save Translation'}
        </button>

        {message && (
          <div
            className={`p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}
      </div>

      {/* Current Value Preview */}
      {editingKey && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Current Value:</p>
          <p className="font-mono text-sm">
            {getNestedValue(translations, editingKey) || '(empty)'}
          </p>
        </div>
      )}

      {/* Refresh Button */}
      <div className="mt-6">
        <button
          onClick={refreshTranslations}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center gap-2"
        >
          <Icon name="loader" size={16} />
          Refresh Translations
        </button>
      </div>
    </div>
  );
};

