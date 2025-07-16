import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const benefits = [
  'Personalized guidance for your unique situation',
  'Proven strategies from 15+ years of experience',
  'Supportive community of like-minded women',
  'Flexible scheduling to fit your lifestyle',
  'Bilingual support in English and Hebrew',
  'Ongoing support beyond sessions'
]

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Life Journey?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join hundreds of Orthodox Jewish women who have found clarity, confidence, 
              and community through Andrea's expert guidance. Your transformation starts today.
            </p>

            {/* Benefits List */}
            <div className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary-200 mr-3 flex-shrink-0" />
                  <span className="text-primary-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Book Free Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary-600 w-full sm:w-auto"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-primary-500">
              <div className="flex items-center space-x-6 text-sm text-primary-200">
                <div className="flex items-center">
                  <span className="font-semibold text-white mr-1">1000+</span>
                  <span>Women Helped</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-white mr-1">95%</span>
                  <span>Success Rate</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-white mr-1">15+</span>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Form */}
          <div className="relative">
            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Start Your Journey Today
                </h3>
                <p className="text-gray-600 mt-2">
                  Get personalized guidance tailored to your life stage
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="lifeStage" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Life Stage
                  </label>
                  <select
                    id="lifeStage"
                    name="lifeStage"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your current stage</option>
                    <option value="post-seminary">Post-Seminary</option>
                    <option value="dating">Dating</option>
                    <option value="engaged">Engaged</option>
                    <option value="newlywed">Newlywed</option>
                    <option value="young-mother">Young Mother</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can Andrea help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your current challenges or goals..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Request Free Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -top-4 -left-4 bg-primary-700 text-white rounded-lg p-4 shadow-lg max-w-xs hidden lg:block">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">
                "Andrea's guidance changed my life completely. I finally found the clarity I was searching for."
              </p>
              <p className="text-xs text-primary-200 mt-2">- Devorah, Jerusalem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}