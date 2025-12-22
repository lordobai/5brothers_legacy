// Event data model
export type EventType = 'internal' | 'external';
export type EventStatus = 'draft' | 'published';
export type EventLocation = 'in-person' | 'virtual' | 'hybrid';

export interface Event {
  id: string;
  event_name: string;
  event_date_start: string; // ISO date string
  event_date_end?: string; // ISO date string (optional for single-day events)
  event_link: string;
  event_type: EventType;
  hosting_organization?: string;
  location?: EventLocation;
  description?: string;
  status: EventStatus;
  featured?: boolean; // For pinning/featuring events
  created_at: string;
  updated_at: string;
}

// Helper function to check if event is upcoming
export const isEventUpcoming = (event: Event): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(event.event_date_end || event.event_date_start);
  eventDate.setHours(23, 59, 59, 999);
  return eventDate >= today;
};

// Helper function to format event date
// Note: For full i18n support, pass language code and use it in toLocaleDateString
export const formatEventDate = (startDate: string, endDate?: string, locale: string = 'en-US'): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  if (end && start.toDateString() !== end.toDateString()) {
    // Multi-day event
    return `${start.toLocaleDateString(locale, options)} - ${end.toLocaleDateString(locale, options)}`;
  }
  
  // Single-day event
  return start.toLocaleDateString(locale, options);
};

