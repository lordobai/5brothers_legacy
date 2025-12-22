'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { Resource } from '@/lib/types/resources';
import { useTranslations } from '@/contexts/LanguageContext';
import { getResourceTypeTranslation } from '@/lib/i18n/resourceTypes';

interface ResourceCardProps {
  resource: Resource;
}

// Generate initials badge as fallback
const generateInitials = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Generate favicon URL from domain
const getFaviconUrl = (url: string): string => {
  try {
    const domain = new URL(url).origin;
    return `${domain}/favicon.ico`;
  } catch {
    return '';
  }
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const t = useTranslations();
  const [logoUrl, setLogoUrl] = useState<string | null>(resource.logo_image_url || null);
  const [imageError, setImageError] = useState(false);
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    // If no logo URL is provided, try to use favicon
    if (!resource.logo_image_url && resource.link_url) {
      const faviconUrl = getFaviconUrl(resource.link_url);
      if (faviconUrl) {
        setLogoUrl(faviconUrl);
      } else {
        setShowInitials(true);
      }
    } else if (resource.logo_image_url) {
      setLogoUrl(resource.logo_image_url);
    } else {
      setShowInitials(true);
    }
  }, [resource.link_url, resource.logo_image_url]);

  const handleImageError = () => {
    setImageError(true);
    setShowInitials(true);
  };

  const initials = generateInitials(resource.organization_name);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Logo/Image Section */}
      <div className="relative h-32 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden rounded-t-lg">
        {logoUrl && !imageError && !showInitials ? (
          <div className="relative w-20 h-20">
            <Image
              src={logoUrl}
              alt={`${resource.organization_name} logo`}
              fill
              className="object-contain rounded"
              onError={handleImageError}
              unoptimized
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] rounded-full flex items-center justify-center text-white font-bold text-xl">
            {initials}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Resource Type Tag */}
        <span className="inline-block px-3 py-1 bg-slate-100 text-[#0B334A] text-xs font-semibold rounded-full mb-3 w-fit">
          {getResourceTypeTranslation(resource.resource_type, t.help)}
        </span>

        {/* Organization Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {resource.organization_name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {resource.description}
        </p>

        {/* Additional Info */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          {resource.service_area && (
            <div className="flex items-center gap-2">
              <Icon name="mapPin" size={16} className="text-gray-400" />
              <span>
                <span className="font-semibold">{t.help.serviceAreaLabel}: </span>
                {resource.service_area}
              </span>
            </div>
          )}
          {resource.eligibility && (
            <div className="flex items-center gap-2">
              <Icon name="info" size={16} className="text-gray-400" />
              <span className="text-xs">
                <span className="font-semibold">{t.help.eligibilityLabel}: </span>
                {resource.eligibility}
              </span>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.contact_phone && (
            <a
              href={`tel:${resource.contact_phone}`}
              className="flex items-center gap-1 text-sm text-[#0B334A] hover:text-[#082530]"
              aria-label={`${t.help.call} ${resource.organization_name}`}
            >
              <Icon name="phone" size={16} />
              <span>{t.help.call}</span>
            </a>
          )}
          {resource.contact_email && (
            <a
              href={`mailto:${resource.contact_email}`}
              className="flex items-center gap-1 text-sm text-[#0B334A] hover:text-[#082530]"
              aria-label={`${t.help.email} ${resource.organization_name}`}
            >
              <Icon name="mail" size={16} />
              <span>{t.help.email}</span>
            </a>
          )}
        </div>

        {/* Visit Website Button */}
        <a
          href={resource.link_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full px-4 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-colors text-center flex items-center justify-center gap-2"
        >
          {t.help.visitWebsite}
          <Icon name="externalLink" size={18} />
        </a>
      </div>
    </div>
  );
};

