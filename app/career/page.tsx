'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { useState } from 'react'
import { X, Upload, FileText } from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    coverLetter: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)
  const [additionalDocs, setAdditionalDocs] = useState<File[]>([])

  const jobs: Job[] = [
    {
      id: 'grant-writer',
      title: 'Grant Writer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us secure funding by writing compelling grant proposals and funding applications to support our community initiatives.',
      requirements: [
        'Proven grant writing experience',
        'Strong research and analytical skills',
        'Excellent written communication',
        'Attention to detail',
        'Ability to meet deadlines',
      ],
    },
    {
      id: 'administrative-assistant',
      title: 'Administrative Assistant',
      department: 'Administration',
      location: 'Owerri, Nigeria',
      type: 'Full-time',
      description: 'Support our operations by managing administrative tasks, coordinating schedules, and ensuring smooth day-to-day operations.',
      requirements: [
        'Strong organizational skills',
        'Proficiency in office software',
        'Excellent communication skills',
        'Ability to multitask',
        'Detail-oriented',
      ],
    },
  ]

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job)
    // Reset form when opening
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      coverLetter: '',
    })
    setResume(null)
    setCoverLetterFile(null)
    setAdditionalDocs([])
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (file: File | null) => void
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0])
    }
  }

  const handleMultipleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAdditionalDocs(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Application submitted:', {
      job: selectedJob?.title,
      ...formData,
      resume: resume?.name,
      coverLetterFile: coverLetterFile?.name,
      additionalDocs: additionalDocs.map((f) => f.name),
    })
    // Close modal and show success message
    alert('Thank you for your application! We will review it and get back to you soon.')
    setSelectedJob(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Careers"
        subtitle="Join our team and make a meaningful impact in communities across Africa"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Careers"
      />

      {/* Open Positions Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Explore opportunities to join our mission-driven team.
              </p>
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {job.department} • {job.location} • {job.type}
                      </p>
                      <p className="text-slate-700 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-slate-700">
                              <span className="text-[#0B334A] mt-1.5">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:flex-shrink-0">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="px-8 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Apply for {selectedJob.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      {selectedJob.department} • {selectedJob.location} • {selectedJob.type}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">Personal Information</h4>

                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-slate-900 mb-2">
                        Address
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">Documents</h4>

                    {/* Resume/CV */}
                    <div>
                      <label htmlFor="resume" className="block text-sm font-semibold text-slate-900 mb-2">
                        Resume/CV <span className="text-red-500">*</span>
                        <span className="text-xs font-normal text-slate-500 ml-2">(PDF, DOC, DOCX, max 5MB)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange(e, setResume)}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume"
                          className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0B334A] hover:bg-gray-50 transition-all"
                        >
                          <Upload size={20} className="text-[#0B334A]" />
                          <span className="text-slate-700">
                            {resume ? resume.name : 'Click to upload or drag and drop'}
                          </span>
                        </label>
                      </div>
                      {resume && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                          <FileText size={16} />
                          <span>{resume.name} ({formatFileSize(resume.size)})</span>
                        </div>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-semibold text-slate-900 mb-2">
                        Cover Letter
                        <span className="text-xs font-normal text-slate-500 ml-2">(Optional - You can type or upload)</span>
                      </label>
                      <textarea
                        id="coverLetter"
                        rows={6}
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B334A] focus:border-[#0B334A] transition-all"
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>

                    {/* Cover Letter File Upload (Alternative) */}
                    <div>
                      <label htmlFor="coverLetterFile" className="block text-sm font-semibold text-slate-900 mb-2">
                        Or Upload Cover Letter
                        <span className="text-xs font-normal text-slate-500 ml-2">(PDF, DOC, DOCX, max 5MB)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="coverLetterFile"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange(e, setCoverLetterFile)}
                          className="hidden"
                        />
                        <label
                          htmlFor="coverLetterFile"
                          className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0B334A] hover:bg-gray-50 transition-all"
                        >
                          <Upload size={20} className="text-[#0B334A]" />
                          <span className="text-slate-700">
                            {coverLetterFile ? coverLetterFile.name : 'Click to upload or drag and drop'}
                          </span>
                        </label>
                      </div>
                      {coverLetterFile && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                          <FileText size={16} />
                          <span>{coverLetterFile.name} ({formatFileSize(coverLetterFile.size)})</span>
                        </div>
                      )}
                    </div>

                    {/* Additional Documents */}
                    <div>
                      <label htmlFor="additionalDocs" className="block text-sm font-semibold text-slate-900 mb-2">
                        Additional Documents
                        <span className="text-xs font-normal text-slate-500 ml-2">(Optional - PDF, DOC, DOCX, max 5MB each)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="additionalDocs"
                          accept=".pdf,.doc,.docx"
                          multiple
                          onChange={handleMultipleFilesChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="additionalDocs"
                          className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0B334A] hover:bg-gray-50 transition-all"
                        >
                          <Upload size={20} className="text-[#0B334A]" />
                          <span className="text-slate-700">
                            {additionalDocs.length > 0
                              ? `${additionalDocs.length} file(s) selected`
                              : 'Click to upload or drag and drop'}
                          </span>
                        </label>
                      </div>
                      {additionalDocs.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {additionalDocs.map((file, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                              <FileText size={16} />
                              <span>{file.name} ({formatFileSize(file.size)})</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-[#0B334A] text-white font-semibold rounded-lg hover:bg-[#07202C] transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
