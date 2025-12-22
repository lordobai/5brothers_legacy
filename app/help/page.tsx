'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchFilters } from '@/components/help/SearchFilters';
import { ResourceCard } from '@/components/help/ResourceCard';
import { ResourceSubmissionForm } from '@/components/help/ResourceSubmissionForm';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from '@/contexts/LanguageContext';
import { Resource, ResourceType, SortOption } from '@/lib/types/resources';

// Mock data - in production, this would come from a database
const mockResources: Resource[] = [
  {
    id: '1',
    organization_name: 'Community Food Bank',
    resource_type: 'Food Assistance',
    description: 'Provides free food assistance to families in need. Open Monday-Friday 9am-5pm.',
    link_url: 'https://example.com/foodbank',
    service_area: 'Owerri, Imo State',
    eligibility: 'Low-income families',
    status: 'published',
    created_at: '2024-01-15',
    updated_at: '2024-01-15',
  },
  {
    id: '2',
    organization_name: 'Housing Support Network',
    resource_type: 'Housing',
    description: 'Emergency housing assistance and rental support programs.',
    link_url: 'https://example.com/housing',
    contact_phone: '+234 803 123 4567',
    service_area: 'Imo State',
    status: 'published',
    created_at: '2024-01-20',
    updated_at: '2024-01-20',
  },
];


export default function HelpPage() {
  const t = useTranslations();
  const [resources, setResources] = useState<Resource[]>(mockResources);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [selectedServiceArea, setSelectedServiceArea] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  // Filter and search resources
  const filteredResources = useMemo(() => {
    let filtered = resources.filter(resource => resource.status === 'published');

    // Keyword search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.organization_name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.resource_type.toLowerCase().includes(query) ||
        resource.service_area?.toLowerCase().includes(query)
      );
    }

    // Resource type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(resource => selectedTypes.includes(resource.resource_type));
    }

    // Service area filter
    if (selectedServiceArea) {
      filtered = filtered.filter(resource =>
        resource.service_area?.toLowerCase().includes(selectedServiceArea.toLowerCase())
      );
    }

    // Sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'az':
        sorted.sort((a, b) => a.organization_name.localeCompare(b.organization_name));
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'relevance':
      default:
        // Keep original order (most relevant first based on search)
        break;
    }

    return sorted;
  }, [resources, searchQuery, selectedTypes, selectedServiceArea, sortBy]);

  const handleAddResource = (newResource: Omit<Resource, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
    const resource: Resource = {
      ...newResource,
      id: Date.now().toString(),
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setResources([...resources, resource]);
    setShowSubmissionForm(false);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTypes([]);
    setSelectedServiceArea('');
    setSortBy('relevance');
  };

  const hasActiveFilters = Boolean(searchQuery || selectedTypes.length > 0 || selectedServiceArea);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.help.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-6 max-w-3xl mx-auto">
              {t.help.subtitle}
            </p>
            <div className="bg-[#0B334A]/50 border border-slate-400/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm md:text-base text-slate-100">
                <Icon name="info" size={20} className="inline mr-2" />
                <strong>{t.common.info}:</strong> {t.help.disclaimer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters Section */}
      <section className="section-padding bg-slate-50 border-b">
        <div className="container mx-auto container-padding">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTypes={selectedTypes}
            onTypesChange={setSelectedTypes}
            selectedServiceArea={selectedServiceArea}
            onServiceAreaChange={setSelectedServiceArea}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      </section>

      {/* Resource Directory Results Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          {filteredResources.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {t.help.resourcesCount} ({filteredResources.length})
                </h2>
                <button
                  onClick={() => setShowSubmissionForm(!showSubmissionForm)}
                  className="px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-colors flex items-center gap-2"
                >
                  <Icon name="plus" size={20} />
                  {showSubmissionForm ? t.common.close : t.help.submitResource}
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ResourceCard resource={resource} />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Icon name="search" size={64} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.help.noResults}</h2>
              <p className="text-gray-600 mb-6">
                {t.help.noResultsDescription}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-colors"
                >
                  {t.help.clearFilters}
                </button>
              )}
            </div>
          )}

          {/* Resource Submission Form */}
          {showSubmissionForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12"
            >
              <ResourceSubmissionForm
                onSubmit={handleAddResource}
                onCancel={() => setShowSubmissionForm(false)}
              />
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

