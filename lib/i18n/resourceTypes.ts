import { ResourceType } from '@/app/help/page';
import { Translations } from './translations';

// Map resource types to translation keys
export const getResourceTypeTranslation = (type: ResourceType, t: Translations['help']): string => {
  const typeMap: Record<ResourceType, keyof typeof t.resourceTypes> = {
    'Food Assistance': 'foodAssistance',
    'Housing': 'housing',
    'Healthcare': 'healthcare',
    'Mental Health': 'mentalHealth',
    'Employment': 'employment',
    'Education': 'education',
    'Legal Aid': 'legalAid',
    'Transportation': 'transportation',
    'Financial Assistance': 'financialAssistance',
    'Domestic Violence Support': 'domesticViolence',
    'Disability Services': 'disabilityServices',
    'Immigration Support': 'immigrationSupport',
    'Other': 'other',
  };

  const key = typeMap[type];
  return key ? t.resourceTypes[key] : type;
};

// Get all resource types in current language
export const getTranslatedResourceTypes = (t: Translations['help']): ResourceType[] => {
  return [
    'Food Assistance',
    'Housing',
    'Healthcare',
    'Mental Health',
    'Employment',
    'Education',
    'Legal Aid',
    'Transportation',
    'Financial Assistance',
    'Domestic Violence Support',
    'Disability Services',
    'Immigration Support',
    'Other',
  ] as const;
};

