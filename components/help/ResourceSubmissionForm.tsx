'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { RESOURCE_TYPES, ResourceType, Resource } from '@/app/help/page';
import { useTranslations } from '@/contexts/LanguageContext';
import { getResourceTypeTranslation } from '@/lib/i18n/resourceTypes';

interface ResourceSubmissionFormProps {
  onSubmit: (resource: Omit<Resource, 'id' | 'created_at' | 'updated_at' | 'status'>) => void;
  onCancel: () => void;
}

interface FormData {
  organization_name: string;
  resource_type: ResourceType | '';
  description: string;
  link_url: string;
  contact_phone: string;
  contact_email: string;
  address: string;
  service_area: string;
  eligibility: string;
  languages: string;
}

export const ResourceSubmissionForm = ({ onSubmit, onCancel }: ResourceSubmissionFormProps) => {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    organization_name: '',
    resource_type: '',
    description: '',
    link_url: '',
    contact_phone: '',
    contact_email: '',
    address: '',
    service_area: '',
    eligibility: '',
    languages: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.organization_name.trim()) {
      newErrors.organization_name = t.help.form.orgNameRequired;
    }

    if (!formData.resource_type) {
      newErrors.resource_type = t.help.form.resourceTypeRequired;
    }

    if (!formData.description.trim()) {
      newErrors.description = t.help.form.descriptionRequired;
    } else if (formData.description.length > 300) {
      newErrors.description = t.help.form.descriptionMax;
    }

    if (!formData.link_url.trim()) {
      newErrors.link_url = t.help.form.linkUrlRequired;
    } else if (!validateUrl(formData.link_url)) {
      newErrors.link_url = t.help.form.linkUrlInvalid;
    }

    if (formData.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) {
      newErrors.contact_email = t.help.form.linkUrlInvalid.replace('URL', 'email address');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const resource: Omit<Resource, 'id' | 'created_at' | 'updated_at' | 'status'> = {
      organization_name: formData.organization_name.trim(),
      resource_type: formData.resource_type as ResourceType,
      description: formData.description.trim(),
      link_url: formData.link_url.trim(),
      contact_phone: formData.contact_phone.trim() || undefined,
      contact_email: formData.contact_email.trim() || undefined,
      address: formData.address.trim() || undefined,
      service_area: formData.service_area.trim() || undefined,
      eligibility: formData.eligibility.trim() || undefined,
      languages: formData.languages.trim() ? formData.languages.split(',').map(l => l.trim()) : undefined,
    };

    onSubmit(resource);
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        organization_name: '',
        resource_type: '',
        description: '',
        link_url: '',
        contact_phone: '',
        contact_email: '',
        address: '',
        service_area: '',
        eligibility: '',
        languages: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center"
      >
        <Icon name="checkCircle" size={48} className="mx-auto text-green-600 mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">{t.help.form.success}</h3>
        <p className="text-green-800">
          {t.help.form.successMessage}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-2 border-gray-200 rounded-lg p-8"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.help.form.title}</h2>
        <p className="text-gray-600">
          {t.help.form.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization Name - Required */}
        <div>
          <label htmlFor="organization_name" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.orgName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organization_name"
            value={formData.organization_name}
            onChange={(e) => handleChange('organization_name', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent ${
              errors.organization_name ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.organization_name}
            aria-describedby={errors.organization_name ? 'org-name-error' : undefined}
          />
              {errors.organization_name && (
                <p id="org-name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {t.help.form.orgNameRequired}
                </p>
              )}
        </div>

        {/* Resource Type - Required */}
        <div>
          <label htmlFor="resource_type" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.resourceType} <span className="text-red-500">*</span>
          </label>
          <select
            id="resource_type"
            value={formData.resource_type}
            onChange={(e) => handleChange('resource_type', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent bg-white ${
              errors.resource_type ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.resource_type}
            aria-describedby={errors.resource_type ? 'resource-type-error' : undefined}
          >
            <option value="">{t.common.filter} {t.help.form.resourceType.toLowerCase()}</option>
            {RESOURCE_TYPES.map((type) => (
              <option key={type} value={type}>
                {getResourceTypeTranslation(type, t.help)}
              </option>
            ))}
          </select>
          {errors.resource_type && (
            <p id="resource-type-error" className="mt-1 text-sm text-red-600" role="alert">
              {t.help.form.resourceTypeRequired}
            </p>
          )}
        </div>

        {/* Description - Required */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.description} <span className="text-red-500">*</span>
            <span className="text-gray-500 font-normal ml-2">{t.help.form.descriptionMax}</span>
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={4}
            maxLength={300}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'description-error' : undefined}
          />
          <div className="mt-1 flex justify-between">
            {errors.description && (
              <p id="description-error" className="text-sm text-red-600" role="alert">
                {t.help.form.descriptionRequired}
              </p>
            )}
            <span className={`text-sm ml-auto ${formData.description.length > 280 ? 'text-orange-600' : 'text-gray-500'}`}>
              {formData.description.length}/300
            </span>
          </div>
        </div>

        {/* Resource Link - Required */}
        <div>
          <label htmlFor="link_url" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.linkUrl} <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="link_url"
            value={formData.link_url}
            onChange={(e) => handleChange('link_url', e.target.value)}
            placeholder="https://example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent ${
              errors.link_url ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.link_url}
            aria-describedby={errors.link_url ? 'link-url-error' : undefined}
          />
          {errors.link_url && (
            <p id="link-url-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.link_url === 'Please enter a valid URL (e.g., https://example.com)' ? t.help.form.linkUrlInvalid : t.help.form.linkUrlRequired}
            </p>
          )}
        </div>

        {/* Optional Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact_phone" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.help.form.phone}
            </label>
            <input
              type="tel"
              id="contact_phone"
              value={formData.contact_phone}
              onChange={(e) => handleChange('contact_phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="contact_email" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.help.form.email}
            </label>
            <input
              type="email"
              id="contact_email"
              value={formData.contact_email}
              onChange={(e) => handleChange('contact_email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent ${
                errors.contact_email ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.contact_email}
            />
            {errors.contact_email && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.contact_email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.address}
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="service_area" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.serviceArea}
          </label>
          <input
            type="text"
            id="service_area"
            value={formData.service_area}
            onChange={(e) => handleChange('service_area', e.target.value)}
            placeholder="e.g., Owerri, Imo State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="eligibility" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.eligibility}
          </label>
          <input
            type="text"
            id="eligibility"
            value={formData.eligibility}
            onChange={(e) => handleChange('eligibility', e.target.value)}
            placeholder="e.g., Low-income families, Seniors 65+"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="languages" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.help.form.languages}
          </label>
          <input
            type="text"
            id="languages"
            value={formData.languages}
            onChange={(e) => handleChange('languages', e.target.value)}
            placeholder="e.g., English, Igbo, French (comma-separated)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-transparent"
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#082530] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="loader" size={20} className="animate-spin" />
                {t.help.form.submitting}
              </>
            ) : (
              <>
                <Icon name="check" size={20} />
                {t.help.form.submit}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            {t.common.cancel}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

