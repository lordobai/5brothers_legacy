import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help - 5Brothers Legacy Initiative',
  description: 'Get help and support from 5Brothers Legacy Initiative',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0B334A] mb-8">Help & Support</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-[#0B334A] mb-4">How Can We Help You?</h2>
            <p className="text-gray-700 mb-6">
              We're here to assist you. Find the information you need or get in touch with us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/find-support"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#0B334A] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#0B334A] mb-2">Find Support</h3>
                <p className="text-gray-600">
                  Access resources, services, and support for you and your community.
                </p>
              </Link>
              
              <Link
                href="/contact-us"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#0B334A] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#0B334A] mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Get in touch with our team for questions or assistance.
                </p>
              </Link>
              
              <Link
                href="/get-involved"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#0B334A] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#0B334A] mb-2">Get Involved</h3>
                <p className="text-gray-600">
                  Learn how you can support our mission and make a difference.
                </p>
              </Link>
              
              <Link
                href="/ways-to-support"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#0B334A] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#0B334A] mb-2">Ways to Support</h3>
                <p className="text-gray-600">
                  Discover different ways to contribute to our cause.
                </p>
              </Link>
            </div>
          </div>
          
          <div className="bg-[#0B334A] text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Emergency Support</h2>
            <p className="mb-4">
              If you need immediate assistance, please contact us directly or visit our Find Support page.
            </p>
            <Link
              href="/find-support"
              className="inline-block px-6 py-3 bg-white text-[#0B334A] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Emergency Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

