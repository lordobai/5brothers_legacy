'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search, Info, MapPin, Phone, Mail, ExternalLink, Plus, X } from 'lucide-react'

interface Resource {
  _id: string
  title: string
  description?: string
  resourceType?: string
  category?: string
  url?: string
  contactInformation?: {
    phone?: string
    email?: string
    address?: string
  }
  isEmergencyContact?: boolean
  displayOrder?: number
}

interface HelpResourcesClientProps {
  resources: Resource[]
}

const categoryColors: Record<string, string> = {
  'Food Assistance': 'bg-blue-100 text-blue-800',
  'Housing': 'bg-purple-100 text-purple-800',
  'Healthcare': 'bg-emerald-100 text-emerald-800',
  'Education': 'bg-indigo-100 text-indigo-800',
  'Legal Aid': 'bg-amber-100 text-amber-800',
  'Financial Support': 'bg-green-100 text-green-800',
  'Emergency Services': 'bg-red-100 text-red-800',
  'Counseling': 'bg-pink-100 text-pink-800',
  'Other': 'bg-gray-100 text-gray-800',
}

export function HelpResourcesClient({ resources }: HelpResourcesClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [resourceType, setResourceType] = useState('')
  const [serviceArea, setServiceArea] = useState('')
  const [mostRelevant, setMostRelevant] = useState('')
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    customCategory: '',
    resourceType: 'external',
    url: '',
    phone: '',
    email: '',
    address: '',
    serviceArea: '',
    eligibility: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Filter resources based on search and filters
  const filteredResources = useMemo(() => {
    let filtered = [...resources]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query) ||
          resource.category?.toLowerCase().includes(query)
      )
    }

    // Resource Type filter
    if (resourceType) {
      filtered = filtered.filter((resource) => resource.category === resourceType)
    }

    // Service Area filter (checking address)
    if (serviceArea && serviceArea !== 'all') {
      filtered = filtered.filter((resource) =>
        resource.contactInformation?.address?.toLowerCase().includes(serviceArea.toLowerCase())
      )
    }

    // Sort by relevance (placeholder - can be enhanced)
    if (mostRelevant === 'newest') {
      filtered.sort((a, b) => (b.displayOrder || 0) - (a.displayOrder || 0))
    } else if (mostRelevant === 'relevance') {
      // Keep original order for relevance
      filtered.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
    }

    return filtered
  }, [resources, searchQuery, resourceType, serviceArea, mostRelevant])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    // Validate custom category if "Other" is selected
    if (formData.category === 'Other' && !formData.customCategory.trim()) {
      setSubmitError('Please specify the category name')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/resources/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: formData.category === 'Other' ? formData.customCategory : formData.category,
          resourceType: formData.resourceType,
          url: formData.url,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          serviceArea: formData.serviceArea,
          eligibility: formData.eligibility,
          // You can add user info if you have authentication
          // submittedByName: user?.name,
          // submittedByEmail: user?.email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit resource')
      }

      // Success
      setSubmitSuccess(true)
      setFormData({
        title: '',
        description: '',
        category: '',
        customCategory: '',
        resourceType: 'external',
        url: '',
        phone: '',
        email: '',
        address: '',
        serviceArea: '',
        eligibility: '',
      })

      // Close modal after 2 seconds
      setTimeout(() => {
        setShowSubmitForm(false)
        setSubmitSuccess(false)
      }, 2000)
    } catch (error: any) {
      console.error('Error submitting resource:', error)
      setSubmitError(error.message || 'Failed to submit resource. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInitials = (title: string) => {
    return title
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getCategoryColor = (category?: string) => {
    if (!category) return categoryColors['Other']
    return categoryColors[category] || categoryColors['Other']
  }

  return (
    <>
      {/* Search and Filters Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            {/* Header with Title and Submit Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Resources ({filteredResources.length})
                </h2>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setShowSubmitForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus size={20} />
                Submit a Resource
              </motion.button>
            </div>

            {/* Disclaimer Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-50 border-2 border-primary-200 rounded-xl p-4 md:p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-0.5">
                  <Info size={16} className="text-white" />
                </div>
                <p className="text-slate-700 text-left text-sm md:text-base leading-relaxed">
                  <strong>Note:</strong> We do not control third-party services. Availability and eligibility may change.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 mb-12"
            >
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <Search size={24} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword (e.g., housing, food, counseling, jobs)"
                  className="w-full pl-14 pr-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm hover:shadow-md"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Resource Type Filter */}
                <div className="relative">
                  <select
                    value={resourceType}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="w-full px-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm hover:shadow-md appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Resource Type</option>
                    <option value="Food Assistance">Food Assistance</option>
                    <option value="Housing">Housing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Legal Aid">Legal Aid</option>
                    <option value="Financial Support">Financial Support</option>
                    <option value="Emergency Services">Emergency Services</option>
                    <option value="Counseling">Counseling</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Service Area Filter */}
                <div className="relative">
                  <select
                    value={serviceArea}
                    onChange={(e) => setServiceArea(e.target.value)}
                    className="w-full px-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm hover:shadow-md appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Service Area (filter)</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="kano">Kano</option>
                    <option value="owerri">Owerri</option>
                    <option value="enugu">Enugu</option>
                    <option value="all">All Areas</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Most Relevant Filter */}
                <div className="relative">
                  <select
                    value={mostRelevant}
                    onChange={(e) => setMostRelevant(e.target.value)}
                    className="w-full px-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm hover:shadow-md appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Most Relevant</option>
                    <option value="relevance">By Relevance</option>
                    <option value="distance">By Distance</option>
                    <option value="newest">Newest First</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    {/* Icon with Initials */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B334A] to-[#0F4A6A] flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {getInitials(resource.title)}
                      </span>
                    </div>

                    {/* Category Tag */}
                    {resource.category && (
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    {resource.description && (
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                    )}

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      {resource.contactInformation?.address && (
                        <div className="flex items-start gap-2 text-slate-700">
                          <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#0B334A]" />
                          <span className="text-sm">
                            <strong>Service Area:</strong> {resource.contactInformation.address}
                          </span>
                        </div>
                      )}
                      {resource.contactInformation?.phone && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <Phone size={18} className="flex-shrink-0 text-[#0B334A]" />
                          <a href={`tel:${resource.contactInformation.phone}`} className="text-sm hover:underline">
                            {resource.contactInformation.phone}
                          </a>
                        </div>
                      )}
                      {resource.contactInformation?.email && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <Mail size={18} className="flex-shrink-0 text-[#0B334A]" />
                          <a href={`mailto:${resource.contactInformation.email}`} className="text-sm hover:underline">
                            {resource.contactInformation.email}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Visit Website Button */}
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        Visit Website
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <p className="text-slate-500 text-body-lg">
                  No resources found. Try adjusting your search or filters.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Submit Resource Modal */}
      <AnimatePresence>
        {showSubmitForm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSubmitForm(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-900">Submit a Resource</h3>
                  <button
                    onClick={() => setShowSubmitForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-2">
                      Resource Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-sm font-semibold text-slate-900 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value, customCategory: e.target.value !== 'Other' ? '' : formData.customCategory })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      >
                        <option value="">Select Category</option>
                        <option value="Food Assistance">Food Assistance</option>
                        <option value="Housing">Housing</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Legal Aid">Legal Aid</option>
                        <option value="Financial Support">Financial Support</option>
                        <option value="Emergency Services">Emergency Services</option>
                        <option value="Counseling">Counseling</option>
                        <option value="Other">Other</option>
                      </select>
                      {formData.category === 'Other' && (
                        <div className="mt-3">
                          <label htmlFor="customCategory" className="block text-sm font-semibold text-slate-900 mb-2">
                            Specify Category <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="customCategory"
                            required={formData.category === 'Other'}
                            value={formData.customCategory}
                            onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                            placeholder="Enter category name"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="resourceType" className="block text-sm font-semibold text-slate-900 mb-2">
                        Resource Type
                      </label>
                      <select
                        id="resourceType"
                        value={formData.resourceType}
                        onChange={(e) => setFormData({ ...formData, resourceType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      >
                        <option value="external">External Link</option>
                        <option value="internal">Internal Service</option>
                        <option value="partner">Partner Organization</option>
                        <option value="emergency">Emergency Contact</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="url" className="block text-sm font-semibold text-slate-900 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="url"
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceArea" className="block text-sm font-semibold text-slate-900 mb-2">
                      Service Area
                    </label>
                    <input
                      type="text"
                      id="serviceArea"
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      placeholder="e.g., Owerri, Imo State"
                    />
                  </div>

                  <div>
                    <label htmlFor="eligibility" className="block text-sm font-semibold text-slate-900 mb-2">
                      Eligibility Requirements
                    </label>
                    <input
                      type="text"
                      id="eligibility"
                      value={formData.eligibility}
                      onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      placeholder="e.g., Low-income families"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-slate-900 mb-2">
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                    />
                  </div>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        ✓ Resource submitted successfully! It will be reviewed before being published.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-semibold">{submitError}</p>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowSubmitForm(false)
                        setSubmitError('')
                        setSubmitSuccess(false)
                        setFormData({
                          title: '',
                          description: '',
                          category: '',
                          customCategory: '',
                          resourceType: 'external',
                          url: '',
                          phone: '',
                          email: '',
                          address: '',
                          serviceArea: '',
                          eligibility: '',
                        })
                      }}
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitSuccess ? 'Close' : 'Cancel'}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      className="flex-1 px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted!' : 'Submit Resource'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

