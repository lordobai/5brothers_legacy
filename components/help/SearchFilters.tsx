'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { RESOURCE_TYPES, ResourceType, SortOption } from '@/app/help/page';
import { useTranslations } from '@/contexts/LanguageContext';
import { getResourceTypeTranslation } from '@/lib/i18n/resourceTypes';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTypes: ResourceType[];
  onTypesChange: (types: ResourceType[]) => void;
  selectedServiceArea: string;
  onServiceAreaChange: (area: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const SearchFilters = ({
  searchQuery,
  onSearchChange,
  selectedTypes,
  onTypesChange,
  selectedServiceArea,
  onServiceAreaChange,
  sortBy,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
}: SearchFiltersProps) => {
  const t = useTranslations();
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const toggleResourceType = (type: ResourceType) => {
    if (selectedTypes.includes(type)) {
      onTypesChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypesChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Keyword Search */}
      <div className="mb-6">
        <label htmlFor="search" className="sr-only">
          Search resources
        </label>
        <div className="relative">
          <Icon name="search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.help.searchPlaceholder}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent text-lg"
            aria-label="Search resources by keyword"
          />
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Resource Type Filter */}
        <div className="relative flex-1 min-w-[200px]">
          <button
            type="button"
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-[#0B334A] focus:ring-2 focus:ring-[#0B334A] focus:border-transparent flex items-center justify-between"
            aria-expanded={showTypeDropdown}
            aria-haspopup="listbox"
          >
            <span className="text-gray-700">
              {selectedTypes.length > 0
                ? `${selectedTypes.length} ${t.help.resourceType.toLowerCase()}${selectedTypes.length > 1 ? 's' : ''} ${t.common.filter.toLowerCase()}`
                : t.help.resourceType}
            </span>
            <Icon
              name="chevronDown"
              size={20}
              className={`text-gray-400 transform transition-transform ${showTypeDropdown ? 'rotate-180' : ''}`}
            />
          </button>
          {showTypeDropdown && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              <div className="p-2">
                {RESOURCE_TYPES.map((type) => (
                  <label
                    key={type}
                    className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer rounded"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleResourceType(type)}
                      className="mr-3 w-4 h-4 text-[#0B334A] focus:ring-[#0B334A] rounded"
                    />
                    <span className="text-gray-700">{getResourceTypeTranslation(type, t.help)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Service Area Filter */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            value={selectedServiceArea}
            onChange={(e) => onServiceAreaChange(e.target.value)}
            placeholder={`${t.help.serviceArea} (${t.common.filter.toLowerCase()})`}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
            aria-label="Filter by service area"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            aria-label="Sort resources"
          >
            <option value="relevance">{t.help.sortRelevance}</option>
            <option value="az">{t.help.sortAZ}</option>
            <option value="newest">{t.help.sortNewest}</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <Icon name="x" size={20} />
            {t.help.clearFilters}
          </button>
        )}
      </div>

      {/* Selected Type Tags */}
      {selectedTypes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center px-3 py-1 bg-slate-100 text-[#0B334A] rounded-full text-sm"
            >
              {getResourceTypeTranslation(type, t.help)}
              <button
                type="button"
                onClick={() => toggleResourceType(type)}
                className="ml-2 hover:text-[#082530]"
                aria-label={`${t.common.clear} ${getResourceTypeTranslation(type, t.help)} ${t.common.filter}`}
              >
                <Icon name="x" size={16} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

