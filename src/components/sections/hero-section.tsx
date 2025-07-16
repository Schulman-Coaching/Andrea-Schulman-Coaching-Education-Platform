'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your{' '}
              <span className="text-primary-600">Life Transitions</span>{' '}
              with Expert Guidance
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Specialized coaching and education for Orthodox Jewish women navigating 
              post-seminary life, engagement, marriage, and beyond. Join thousands who 
              have found clarity, confidence, and community.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">1000+ Women Helped</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Bilingual Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Services
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <PlayCircleIcon className="mr-2 h-5 w-5" />
                  Watch Introduction
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by women from:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <span>Michlala Jerusalem</span>
                <span>Midreshet Shalhevet</span>
                <span>Bnos Bais Yaakov</span>
                <span>Aish HaTorah</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AS</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Andrea Schulman</h3>
                  <p className="text-gray-600">Educational Leader & Coach</p>
                </div>
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 text-sm font-semibold">R</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-medium">
                      "Andrea helped me navigate my transition from seminary to real life with such wisdom and care."
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- Rachel, Post-Seminary</p>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20"></div>
      </div>
    </section>
  )
}