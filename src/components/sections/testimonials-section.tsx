'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Post-Seminary Graduate',
    location: 'New York',
    image: '/testimonials/sarah.jpg',
    content: 'Andrea helped me navigate the transition from seminary to real life with such wisdom and care. Her guidance was exactly what I needed during this confusing time.',
    rating: 5,
    service: 'Individual Coaching'
  },
  {
    id: 2,
    name: 'Rachel K.',
    role: 'Engaged',
    location: 'Jerusalem',
    image: '/testimonials/rachel.jpg',
    content: 'The Kallah preparation sessions with Andrea were incredible. She made me feel so prepared and confident for marriage. I couldn\'t have asked for better guidance.',
    rating: 5,
    service: 'Kallah Preparation'
  },
  {
    id: 3,
    name: 'Miriam L.',
    role: 'Newlywed',
    location: 'Lakewood',
    image: '/testimonials/miriam.jpg',
    content: 'Andrea\'s group program for newlyweds was a lifesaver. The community she created and the practical advice helped me so much in my first year of marriage.',
    rating: 5,
    service: 'Group Program'
  },
  {
    id: 4,
    name: 'Chana R.',
    role: 'Young Mother',
    location: 'Ramat Beit Shemesh',
    image: '/testimonials/chana.jpg',
    content: 'The digital course on life transitions was exactly what I needed. Andrea\'s teaching style is so relatable and practical. Highly recommend!',
    rating: 5,
    service: 'Digital Course'
  },
  {
    id: 5,
    name: 'Leah S.',
    role: 'Community Member',
    location: 'Monsey',
    image: '/testimonials/leah.jpg',
    content: 'Being part of Andrea\'s community has been transformative. The monthly calls and resources have helped me grow so much personally and spiritually.',
    rating: 5,
    service: 'Community Membership'
  },
  {
    id: 6,
    name: 'Rivka T.',
    role: 'Post-Seminary Graduate',
    location: 'Chicago',
    image: '/testimonials/rivka.jpg',
    content: 'Andrea understands the unique challenges we face as Orthodox women. Her coaching helped me find my path with confidence and clarity.',
    rating: 5,
    service: 'Individual Coaching'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage
    )
  }

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prevIndex - testimonialsPerPage
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Women Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the hundreds of women who have transformed their lives through 
            Andrea's coaching and guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-900 mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                    <div className="text-xs text-primary-600 font-medium mt-1">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevTestimonials}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / testimonialsPerPage) === index
                      ? 'bg-primary-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonials}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={currentIndex + testimonialsPerPage >= testimonials.length}
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600">1000+</div>
            <div className="text-sm text-gray-600 mt-1">Women Helped</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">95%</div>
            <div className="text-sm text-gray-600 mt-1">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">15+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">24/7</div>
            <div className="text-sm text-gray-600 mt-1">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}