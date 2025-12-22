'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { useLanguage } from '@/contexts/LanguageContext';
import { Event, isEventUpcoming, formatEventDate, EventType } from '@/lib/types/events';

interface EventsTableProps {
  events: Event[];
}

type TimeFilter = 'upcoming' | 'past' | 'all';
type TypeFilter = 'internal' | 'external' | 'all';

export const EventsTable = ({ events }: EventsTableProps) => {
  const { translations: t, language } = useLanguage();
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('upcoming');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');

  // Map language codes to locale strings for date formatting
  const localeMap: Record<string, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    pt: 'pt-PT',
    ar: 'ar-SA',
    zh: 'zh-CN',
  };
  const dateLocale = localeMap[language] || 'en-US';

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let filtered = events.filter(event => event.status === 'published');

    // Time filter
    if (timeFilter === 'upcoming') {
      filtered = filtered.filter(isEventUpcoming);
    } else if (timeFilter === 'past') {
      filtered = filtered.filter(event => !isEventUpcoming(event));
    }

    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(event => event.event_type === typeFilter);
    }

    // Sort: featured first, then by date (soonest first for upcoming, most recent first for past)
    filtered.sort((a, b) => {
      // Featured events first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // Then by date
      const dateA = new Date(a.event_date_start).getTime();
      const dateB = new Date(b.event_date_start).getTime();
      
      if (timeFilter === 'upcoming') {
        return dateA - dateB; // Soonest first
      } else {
        return dateB - dateA; // Most recent first
      }
    });

    return filtered;
  }, [events, timeFilter, typeFilter]);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.updatesEvents.events.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.updatesEvents.events.subtitle}
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700 self-center">
                  {t.updatesEvents.events.timeFilter}:
                </span>
                <button
                  onClick={() => setTimeFilter('upcoming')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    timeFilter === 'upcoming'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={timeFilter === 'upcoming'}
                >
                  {t.updatesEvents.events.upcoming}
                </button>
                <button
                  onClick={() => setTimeFilter('past')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    timeFilter === 'past'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={timeFilter === 'past'}
                >
                  {t.updatesEvents.events.past}
                </button>
                <button
                  onClick={() => setTimeFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    timeFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={timeFilter === 'all'}
                >
                  {t.updatesEvents.events.all}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700 self-center">
                  {t.updatesEvents.events.typeFilter}:
                </span>
                <button
                  onClick={() => setTypeFilter('internal')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    typeFilter === 'internal'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={typeFilter === 'internal'}
                >
                  {t.updatesEvents.events.internal}
                </button>
                <button
                  onClick={() => setTypeFilter('external')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    typeFilter === 'external'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={typeFilter === 'external'}
                >
                  {t.updatesEvents.events.external}
                </button>
                <button
                  onClick={() => setTypeFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    typeFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={typeFilter === 'all'}
                >
                  {t.updatesEvents.events.all}
                </button>
              </div>
            </div>

            {/* Disclaimer for external events */}
            {typeFilter === 'external' || typeFilter === 'all' ? (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <Icon name="info" size={16} className="inline mr-2" />
                  {t.updatesEvents.events.externalDisclaimer}
                </p>
              </div>
            ) : null}
          </div>

          {/* Events Table (Desktop) / Cards (Mobile) */}
          {filteredEvents.length > 0 ? (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse" role="table" aria-label={t.updatesEvents.events.title}>
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t.updatesEvents.events.table.eventName}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t.updatesEvents.events.table.date}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t.updatesEvents.events.table.type}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t.updatesEvents.events.table.location}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t.updatesEvents.events.table.link}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.map((event, index) => (
                      <motion.tr
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {event.featured && (
                              <Icon name="star" size={16} className="text-amber-500 fill-amber-500" />
                            )}
                            <div>
                              <div className="font-semibold text-gray-900">{event.event_name}</div>
                              {event.description && (
                                <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                              )}
                              {event.hosting_organization && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {t.updatesEvents.events.hostedBy}: {event.hosting_organization}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {formatEventDate(event.event_date_start, event.event_date_end, dateLocale)}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              event.event_type === 'internal'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {event.event_type === 'internal'
                              ? t.updatesEvents.events.internal
                              : t.updatesEvents.events.external}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {event.location ? (
                            <span className="flex items-center gap-1">
                              <Icon
                                name={event.location === 'virtual' ? 'video' : 'mapPin'}
                                size={16}
                                className="text-gray-400"
                              />
                              {event.location === 'in-person'
                                ? t.updatesEvents.events.inPerson
                                : event.location === 'virtual'
                                ? t.updatesEvents.events.virtual
                                : t.updatesEvents.events.hybrid}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={event.event_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                            aria-label={`${t.updatesEvents.events.viewEvent}: ${event.event_name}`}
                          >
                            {t.updatesEvents.events.viewEvent}
                            <Icon name="externalLink" size={16} />
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {event.featured && (
                            <Icon name="star" size={16} className="text-amber-500 fill-amber-500" />
                          )}
                          <h3 className="font-semibold text-gray-900 text-lg">{event.event_name}</h3>
                        </div>
                        {event.description && (
                          <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        )}
                      </div>
                      <span
                        className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          event.event_type === 'internal'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {event.event_type === 'internal'
                          ? t.updatesEvents.events.internal
                          : t.updatesEvents.events.external}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icon name="calendar" size={16} className="text-gray-400" />
                        <span>{formatEventDate(event.event_date_start, event.event_date_end, dateLocale)}</span>
                      </div>

                      {event.location && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon
                            name={event.location === 'virtual' ? 'video' : 'mapPin'}
                            size={16}
                            className="text-gray-400"
                          />
                          <span>
                            {event.location === 'in-person'
                              ? t.updatesEvents.events.inPerson
                              : event.location === 'virtual'
                              ? t.updatesEvents.events.virtual
                              : t.updatesEvents.events.hybrid}
                          </span>
                        </div>
                      )}

                      {event.hosting_organization && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon name="building" size={16} className="text-gray-400" />
                          <span>
                            {t.updatesEvents.events.hostedBy}: {event.hosting_organization}
                          </span>
                        </div>
                      )}

                      <div className="pt-2">
                        <a
                          href={event.event_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                          aria-label={`${t.updatesEvents.events.viewEvent}: ${event.event_name}`}
                        >
                          {t.updatesEvents.events.viewEvent}
                          <Icon name="externalLink" size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Icon name="calendar" size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.updatesEvents.events.emptyState.title}
              </h3>
              <p className="text-gray-600">
                {t.updatesEvents.events.emptyState.message}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

