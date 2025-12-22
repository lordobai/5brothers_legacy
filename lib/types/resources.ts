// Resource type options (English keys - will be translated in UI)
export const RESOURCE_TYPES = [
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

export type ResourceType = typeof RESOURCE_TYPES[number];

// Resource data model
export interface Resource {
  id: string;
  organization_name: string;
  resource_type: ResourceType;
  description: string;
  link_url: string;
  logo_image_url?: string;
  contact_phone?: string;
  contact_email?: string;
  address?: string;
  service_area?: string;
  eligibility?: string;
  languages?: string[];
  status: 'draft' | 'pending' | 'published';
  created_at: string;
  updated_at: string;
}

export type SortOption = 'relevance' | 'az' | 'newest';

