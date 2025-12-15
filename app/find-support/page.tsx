'use client';

import { motion } from 'framer-motion';

const resources = [
  {
    category: 'Direct Services',
    items: [
      { title: 'Emergency Assistance', description: 'Immediate support for urgent needs', contact: 'emergency@5brotherslegacy.org' },
      { title: 'Education Support', description: 'Scholarships and educational resources', contact: 'education@5brotherslegacy.org' },
      { title: 'Healthcare Services', description: 'Access to health clinics and medical care', contact: 'health@5brotherslegacy.org' },
    ],
  },
  {
    category: 'Partner Organizations',
    items: [
      { title: 'Local NGOs', description: 'Community-based organizations in your area', link: '#' },
      { title: 'Government Services', description: 'Public services and support programs', link: '#' },
    ],
  },
  {
    category: 'National Resources',
    items: [
      { title: 'National Emergency Services', description: 'Call 112 for emergencies', contact: '112' },
      { title: 'Social Welfare Services', description: 'Government social support programs', link: '#' },
    ],
  },
];

export default function FindSupportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Find Support
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Resources and services to help you and your community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Help Box */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border-4 border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Emergency Help</h2>
            <p className="text-xl mb-6">If you need immediate assistance, please contact us:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348036775776"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-lg"
              >
                Call: +234 803 677 5776
              </a>
              <a
                href="mailto:emergency@5brotherslegacy.org"
                className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all text-lg"
              >
                Email Emergency
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto space-y-12">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{resource.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resource.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.contact && (
                        <a
                          href={item.contact.includes('@') ? `mailto:${item.contact}` : `tel:${item.contact}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Contact: {item.contact}
                        </a>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Learn More →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


