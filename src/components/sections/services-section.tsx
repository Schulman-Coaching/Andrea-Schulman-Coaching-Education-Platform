import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  HeartIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 'individual-coaching',
    name: 'Individual Coaching',
    description: 'One-on-one personalized coaching sessions tailored to your specific life stage and challenges.',
    icon: UserGroupIcon,
    price: 'From $150',
    duration: '60 minutes',
    features: [
      'Personalized guidance',
      'Flexible scheduling',
      'Video or phone sessions',
      'Follow-up support'
    ],
    popular: false,
  },
  {
    id: 'group-programs',
    name: 'Group Programs',
    description: 'Join supportive group programs with women going through similar life transitions.',
    icon: AcademicCapIcon,
    price: 'From $300',
    duration: '8 weeks',
    features: [
      'Small group setting',
      'Peer support network',
      'Weekly sessions',
      'Resource materials'
    ],
    popular: true,
  },
  {
    id: 'digital-courses',
    name: 'Digital Courses',
    description: 'Self-paced online courses covering essential topics for Orthodox Jewish women.',
    icon: ChatBubbleLeftRightIcon,
    price: 'From $97',
    duration: 'Self-paced',
    features: [
      'Lifetime access',
      'Video lessons',
      'Downloadable resources',
      'Community forum'
    ],
    popular: false,
  },
  {
    id: 'live-events',
    name: 'Live Events',
    description: 'Interactive workshops and retreats for deeper learning and connection.',
    icon: CalendarDaysIcon,
    price: 'From $200',
    duration: 'Full day',
    features: [
      'Interactive workshops',
      'Networking opportunities',
      'Expert speakers',
      'Take-home materials'
    ],
    popular: false,
  },
  {
    id: 'kallah-preparation',
    name: 'Kallah Preparation',
    description: 'Comprehensive preparation for marriage including halachic guidance and emotional support.',
    icon: HeartIcon,
    price: 'From $500',
    duration: '6 sessions',
    features: [
      'Halachic instruction',
      'Emotional preparation',
      'Practical guidance',
      'Ongoing support'
    ],
    popular: false,
  },
  {
    id: 'community-membership',
    name: 'Community Membership',
    description: 'Join our exclusive community for ongoing support, resources, and connections.',
    icon: SparklesIcon,
    price: '$47/month',
    duration: 'Monthly',
    features: [
      'Private community access',
      'Monthly group calls',
      'Resource library',
      'Priority booking'
    ],
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services Designed for Your Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're transitioning from seminary, preparing for marriage, or navigating newlywed life, 
            we have the right support for your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl border p-8 shadow-sm hover:shadow-lg transition-shadow ${
                  service.popular 
                    ? 'border-primary-200 bg-primary-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.popular ? 'bg-primary-600' : 'bg-primary-100'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      service.popular ? 'text-white' : 'text-primary-600'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href={`/services/${service.id}`}>
                    <Button 
                      className="w-full" 
                      variant={service.popular ? 'default' : 'outline'}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link href="/consultation">
            <Button size="lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}