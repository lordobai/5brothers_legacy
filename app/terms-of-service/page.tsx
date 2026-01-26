'use client'

import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { motion } from 'framer-motion'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Terms of Service"
        subtitle="Terms and conditions for using our website and services"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Terms of Service"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="mb-8">
                <p className="text-slate-600 mb-4">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Please read these Terms of Service carefully before using the 5Brothers Legacy Initiative website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Use License</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Permission is granted to temporarily access the materials on 5Brothers Legacy Initiative&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Donations and Contributions</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    When you make a donation or contribution through our website:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>All donations are final and non-refundable unless required by law</li>
                    <li>You represent that you are authorized to use the payment method provided</li>
                    <li>We reserve the right to refuse or cancel any donation at our discretion</li>
                    <li>Donations are used to support our programs and operations as described on our website</li>
                    <li>You will receive a receipt for your donation for tax purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">4. User Accounts</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you create an account on our website, you are responsible for:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>Maintaining the confidentiality of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Providing accurate and complete information</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">5. Prohibited Uses</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    You agree not to use the website:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>In any way that violates any applicable law or regulation</li>
                    <li>To transmit any malicious code, viruses, or harmful materials</li>
                    <li>To impersonate or attempt to impersonate the organization or any other person</li>
                    <li>To engage in any conduct that restricts or inhibits anyone&apos;s use of the website</li>
                    <li>To collect or track personal information of others</li>
                    <li>For any fraudulent or illegal purpose</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The website and its original content, features, and functionality are owned by 5Brothers Legacy Initiative and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any of the content without our prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Disclaimer</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The materials on 5Brothers Legacy Initiative&apos;s website are provided on an &apos;as is&apos; basis. 5Brothers Legacy Initiative makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Limitations</h2>
                  <p className="text-slate-700 leading-relaxed">
                    In no event shall 5Brothers Legacy Initiative or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 5Brothers Legacy Initiative&apos;s website, even if 5Brothers Legacy Initiative or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">9. Links to Third-Party Websites</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Our website may contain links to third-party websites or services that are not owned or controlled by 5Brothers Legacy Initiative. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that 5Brothers Legacy Initiative shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">10. Indemnification</h2>
                  <p className="text-slate-700 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless 5Brothers Legacy Initiative and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the website or your violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">12. Governing Law</h2>
                  <p className="text-slate-700 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="text-slate-700">
                    <p><strong>5Brothers Legacy Initiative</strong></p>
                    <p>Email: <a href="mailto:info@fivebrotherslegacy.org" className="text-[#0B334A] hover:underline">info@fivebrotherslegacy.org</a></p>
                    <p>Phone: <a href="tel:+2348036775776" className="text-[#0B334A] hover:underline">+234 803 677 5776</a></p>
                    <p>Address: Owerri, Nigeria</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

