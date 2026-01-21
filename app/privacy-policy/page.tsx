'use client'

import { HeroSectionClient } from '@/components/pages/HeroSectionClient'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <HeroSectionClient
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        alt="Privacy Policy"
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
                  At 5Brothers Legacy Initiative, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Personal Information</h3>
                      <p className="leading-relaxed">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                        <li>Register for our programs or events</li>
                        <li>Make a donation or contribution</li>
                        <li>Subscribe to our newsletter or updates</li>
                        <li>Contact us through our website forms</li>
                        <li>Volunteer with our organization</li>
                      </ul>
                      <p className="mt-4 leading-relaxed">
                        This information may include your name, email address, phone number, mailing address, payment information, and any other details you choose to provide.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Automatically Collected Information</h3>
                      <p className="leading-relaxed">
                        When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>To process and manage your donations and contributions</li>
                    <li>To communicate with you about our programs, events, and impact</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you newsletters, updates, and promotional materials (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations and protect our rights</li>
                    <li>To analyze website usage and trends</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, provided they agree to keep this information confidential.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                    <li><strong>Protection of Rights:</strong> We may share information when we believe it is necessary to protect our rights, property, or safety, or that of our users or others.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">5. Your Rights and Choices</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of receiving marketing communications from us</li>
                    <li>Withdraw consent where we rely on consent to process your information</li>
                  </ul>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    To exercise these rights, please contact us at <a href="mailto:info@5brotherslegacy.org" className="text-[#0B334A] hover:underline">info@5brotherslegacy.org</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-4 text-slate-700">
                    <p><strong>5Brothers Legacy Initiative</strong></p>
                    <p>Email: <a href="mailto:info@5brotherslegacy.org" className="text-[#0B334A] hover:underline">info@5brotherslegacy.org</a></p>
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

