'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { AlertCircle, Phone, Mail, MapPin, ExternalLink, Search } from 'lucide-react'

interface SupportResource {
  _id: string
  title: string
  description?: string
  category?: string
  resourceType?: string
  contactInformation?: {
    phone?: string
    email?: string
    address?: string
  }
  url?: string
  isEmergencyContact?: boolean
  displayOrder?: number
}

interface FindSupportClientProps {
  resources: SupportResource[]
}

// Map category values to display names
const categoryDisplayMap: Record<string, string> = {
  healthcare: 'Healthcare',
  education: 'Education',
  legal: 'Legal Aid',
  financial: 'Financial Support',
  emergency: 'Emergency Services',
  counseling: 'Counseling',
  community: 'Community Support',
  food: 'Food Assistance',
  housing: 'Housing',
  other: 'Other',
}

export function FindSupportClient({ resources }: FindSupportClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')

  // Get unique categories from resources
  const categories = Array.from(
    new Set(resources.map((r) => (r.category ? categoryDisplayMap[r.category] || r.category : 'Other')))
  ).sort()

  // Filter resources
  const filteredResources = useMemo(() => {
    let filtered = [...resources]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query) ||
          (resource.category && categoryDisplayMap[resource.category]?.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (resource) =>
          resource.category && categoryDisplayMap[resource.category] === selectedCategory
      )
    }

    // Type filter
    if (selectedType) {
      filtered = filtered.filter((resource) => resource.resourceType === selectedType)
    }

    // Emergency resources should always be at the top
    filtered.sort((a, b) => {
      if (a.isEmergencyContact && !b.isEmergencyContact) return -1
      if (!a.isEmergencyContact && b.isEmergencyContact) return 1
      return (a.displayOrder || 0) - (b.displayOrder || 0)
    })

    return filtered
  }, [resources, searchQuery, selectedCategory, selectedType])

  const emergencyResources = filteredResources.filter((r) => r.isEmergencyContact || r.resourceType === 'emergency')
  const otherResources = filteredResources.filter((r) => !r.isEmergencyContact && r.resourceType !== 'emergency')

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'internal':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'partner':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'external':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'emergency':
        return 'Emergency'
      case 'internal':
        return 'Internal Service'
      case 'partner':
        return 'Partner Organization'
      case 'external':
        return 'External Resource'
      default:
        return type || 'Resource'
    }
  }

  const getCategoryDisplay = (category?: string) => {
    if (!category) return 'Other'
    return categoryDisplayMap[category] || category
  }

  return (
    <>
      {/* Emergency Help Box */}
      {emergencyResources.length > 0 && (
        <section className="section-padding bg-red-50 border-b-4 border-red-500">
          <div className="container mx-auto container-padding">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl border-4 border-red-500 p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                    <AlertCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-2">
                      Emergency Help
                    </h2>
                    <p className="text-red-700 text-lg">
                      If you're in immediate danger or need urgent assistance, contact us right away.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {emergencyResources.map((resource) => (
                    <div
                      key={resource._id}
                      className="bg-red-50 rounded-xl p-6 border-2 border-red-200"
                    >
                      <h3 className="text-xl font-bold text-red-900 mb-3">{resource.title}</h3>
                      {resource.description && (
                        <p className="text-red-800 mb-4">{resource.description}</p>
                      )}
                      <div className="space-y-2">
                        {resource.contactInformation?.phone && (
                          <a
                            href={`tel:${resource.contactInformation.phone}`}
                            className="flex items-center gap-2 text-red-900 font-semibold hover:text-red-700"
                          >
                            <Phone size={18} />
                            <span>{resource.contactInformation.phone}</span>
                          </a>
                        )}
                        {resource.contactInformation?.email && (
                          <a
                            href={`mailto:${resource.contactInformation.email}`}
                            className="flex items-center gap-2 text-red-900 font-semibold hover:text-red-700"
                          >
                            <Mail size={18} />
                            <span>{resource.contactInformation.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
                Support Resources
              </h2>
              <p className="text-xl text-slate-700 text-center max-w-3xl mx-auto mb-8">
                Find the support you need from our services, partners, and community resources.
              </p>

              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <Search size={24} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for support services..."
                  className="w-full pl-14 pr-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm"
                />
              </div>

              {/* Filters */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm appearance-none bg-white cursor-pointer"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-4 text-body border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all shadow-sm appearance-none bg-white cursor-pointer"
                  >
                    <option value="">All Types</option>
                    <option value="internal">Internal Services</option>
                    <option value="external">External Resources</option>
                    <option value="partner">Partner Organizations</option>
                    <option value="emergency">Emergency Services</option>
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
            {otherResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherResources.map((resource, index) => (
                  <motion.div
                    key={resource._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl transition-all"
                  >
                    {/* Type Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${getTypeColor(resource.resourceType)}`}>
                      {getTypeLabel(resource.resourceType)}
                    </div>

                    {/* Category */}
                    <div className="text-sm text-slate-500 mb-2">
                      {getCategoryDisplay(resource.category)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{resource.title}</h3>

                    {/* Description */}
                    {resource.description && (
                      <p className="text-slate-700 mb-6 leading-relaxed">{resource.description}</p>
                    )}

                    {/* Contact Information */}
                    <div className="space-y-2 mb-4">
                      {resource.contactInformation?.phone && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <Phone size={16} className="text-[#0B334A]" />
                          <a href={`tel:${resource.contactInformation.phone}`} className="text-sm hover:underline">
                            {resource.contactInformation.phone}
                          </a>
                        </div>
                      )}
                      {resource.contactInformation?.email && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <Mail size={16} className="text-[#0B334A]" />
                          <a href={`mailto:${resource.contactInformation.email}`} className="text-sm hover:underline">
                            {resource.contactInformation.email}
                          </a>
                        </div>
                      )}
                      {resource.contactInformation?.address && (
                        <div className="flex items-start gap-2 text-slate-700">
                          <MapPin size={16} className="text-[#0B334A] mt-0.5" />
                          <span className="text-sm">{resource.contactInformation.address}</span>
                        </div>
                      )}
                    </div>

                    {/* External Link */}
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0B334A] font-semibold hover:underline text-sm"
                      >
                        Visit Website
                        <ExternalLink size={16} />
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
    </>
  )
}


