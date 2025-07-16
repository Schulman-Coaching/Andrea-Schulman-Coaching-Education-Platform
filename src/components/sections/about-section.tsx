import { Button } from '@/components/ui/button'
import Link from 'next/link'

const achievements = [
  {
    number: '15+',
    label: 'Years Experience',
    description: 'In Jewish education and youth programming'
  },
  {
    number: '1000+',
    label: 'Women Helped',
    description: 'Through life transitions and challenges'
  },
  {
    number: '95%',
    label: 'Success Rate',
    description: 'Client satisfaction and goal achievement'
  },
  {
    number: '24/7',
    label: 'Support Available',
    description: 'Through WhatsApp and community forums'
  }
]

const qualifications = [
  'Master\'s in Education from City University of New York',
  'Bachelor\'s in Psychology from City University of New York',
  'Seminary training at Michlala in Jerusalem',
  'Certified Kallah teacher since 2018',
  'Director of Women\'s Missions at Aish Jerusalem',
  'Director of Chinuch at Camp Dina since 2015'
]

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Andrea Schulman
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              An accomplished educational leader with over 15 years of experience in Jewish education, 
              curriculum development, and youth programming.
            </p>
            
            <div className="mt-8 space-y-4">
              <p className="text-gray-600">
                Currently serving as the Director of Women's Missions, Shidduchim, Parent Programming 
                & Recruiting at Aish in Jerusalem, Andrea expertly organizes and leads adult women's 
                missions while developing comprehensive educational programming.
              </p>
              
              <p className="text-gray-600">
                As a Kallah teacher since 2018, Andrea teaches Halachos of Taharas Hamishpacha to women 
                preparing for marriage, while also serving as an adult educator leading discussions on 
                "Technology and its effect on our homes."
              </p>
              
              <p className="text-gray-600">
                Her bilingual capabilities in English and Hebrew, combined with her seminary training 
                at Michlala in Jerusalem, enable her to connect with diverse audiences across cultural 
                and educational contexts.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Qualifications & Experience
              </h3>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link href="/about">
                <Button size="lg">
                  Learn More About Andrea
                </Button>
              </Link>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Andrea Schulman</h3>
                <p className="text-gray-600 mb-4">M.Ed, Educational Leader</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  "Empowering women through life's most important transitions"
                </p>
              </div>
            </div>

            {/* Achievement stats */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Mission
            </h3>
            <blockquote className="text-xl text-gray-600 italic">
              "To provide Orthodox Jewish women with the guidance, support, and community they need 
              to navigate life's transitions with confidence, clarity, and spiritual growth. Every 
              woman deserves to feel empowered and supported as she moves through the beautiful 
              stages of Jewish womanhood."
            </blockquote>
            <div className="mt-6">
              <cite className="text-lg font-semibold text-gray-900">
                — Andrea Schulman
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}