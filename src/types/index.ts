import { User, Service, Booking, Course, Enrollment, Subscription, Payment } from '@prisma/client'

// User Types
export type UserWithRelations = User & {
  bookings?: Booking[]
  enrollments?: Enrollment[]
  subscriptions?: Subscription[]
  payments?: Payment[]
}

export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR'
export type UserType = 'POST_SEMINARY' | 'ENGAGED' | 'NEWLYWED' | 'COMMUNITY_MEMBER'
export type LifeStage = 'POST_SEMINARY' | 'DATING' | 'ENGAGED' | 'NEWLYWED' | 'YOUNG_MOTHER' | 'ESTABLISHED'

// Service Types
export type ServiceType = 'INDIVIDUAL_COACHING' | 'GROUP_PROGRAM' | 'DIGITAL_COURSE' | 'LIVE_EVENT' | 'MEMBERSHIP' | 'CONSULTATION'
export type ServiceWithBookings = Service & {
  bookings: Booking[]
}

// Booking Types
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW'
export type BookingWithRelations = Booking & {
  user: User
  service: Service
  payment?: Payment
}

// Course Types
export type CourseWithModules = Course & {
  modules: Module[]
  enrollments: Enrollment[]
}

// Enrollment Types
export type EnrollmentStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED'
export type EnrollmentWithRelations = Enrollment & {
  user: User
  service?: Service
  course?: Course
  payment?: Payment
}

// Subscription Types
export type SubscriptionType = 'BASIC' | 'PREMIUM' | 'VIP' | 'COMMUNITY'
export type SubscriptionStatus = 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'PAUSED'
export type SubscriptionWithUser = Subscription & {
  user: User
}

// Payment Types
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED' | 'CANCELLED'
export type PaymentWithRelations = Payment & {
  user: User
  bookings?: Booking[]
  enrollments?: Enrollment[]
  subscription?: Subscription
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  userType: UserType
  lifeStage: LifeStage
  phone?: string
  location?: string
}

export interface BookingForm {
  serviceId: string
  scheduledAt: Date
  timezone: string
  notes?: string
}

export interface ProfileUpdateForm {
  firstName?: string
  lastName?: string
  phone?: string
  location?: string
  timezone?: string
  language?: string
  userType?: UserType
  lifeStage?: LifeStage
  seminary?: string
  community?: string
}

// Dashboard Types
export interface DashboardStats {
  totalUsers: number
  totalBookings: number
  totalRevenue: number
  activeSubscriptions: number
  completedCourses: number
  upcomingBookings: number
}

export interface UserDashboardData {
  user: UserWithRelations
  upcomingBookings: BookingWithRelations[]
  activeEnrollments: EnrollmentWithRelations[]
  activeSubscriptions: SubscriptionWithUser[]
  recentPayments: PaymentWithRelations[]
}

// Calendar Types
export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  type: 'booking' | 'course' | 'event'
  status: string
  user?: {
    name: string
    email: string
  }
}

// Notification Types
export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

// Search Types
export interface SearchFilters {
  query?: string
  type?: ServiceType
  priceRange?: {
    min: number
    max: number
  }
  dateRange?: {
    start: Date
    end: Date
  }
  status?: string
  userType?: UserType
  lifeStage?: LifeStage
}

// Email Types
export interface EmailTemplate {
  to: string
  subject: string
  template: string
  data: Record<string, any>
}

// WhatsApp Types
export interface WhatsAppMessage {
  to: string
  message: string
  type: 'text' | 'template'
  templateName?: string
  templateData?: Record<string, any>
}

// Analytics Types
export interface AnalyticsData {
  period: 'day' | 'week' | 'month' | 'year'
  metrics: {
    users: number
    bookings: number
    revenue: number
    conversions: number
  }
  trends: {
    date: string
    value: number
  }[]
}

// Stripe Types
export interface StripePaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  clientSecret: string
}

// Zoom Types
export interface ZoomMeeting {
  id: string
  topic: string
  startTime: Date
  duration: number
  joinUrl: string
  password?: string
}