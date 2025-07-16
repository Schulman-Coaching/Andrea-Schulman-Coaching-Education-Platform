# Andrea Schulman Coaching & Education Platform

A comprehensive platform for Orthodox Jewish women's coaching, education, and community services.

## Overview

This platform serves as a central hub for Andrea Schulman's coaching and education services, specifically designed for Orthodox Jewish women transitioning through important life stages including post-seminary, engagement, marriage, and beyond.

## Features

### Core Services
- **Individual Coaching**: One-on-one personalized coaching sessions ($1,500-5,000)
- **Group Programs**: Supportive group programs for similar life transitions ($300-1,000)
- **Digital Courses**: Self-paced online courses ($15-500)
- **Live Events**: Interactive workshops and retreats ($100-800)
- **Kallah Preparation**: Comprehensive marriage preparation including halachic guidance
- **Community Membership**: Exclusive community access with ongoing support ($25-150/month)

### Target Audience
- Post-seminary girls (18-20)
- Engaged women (19-22)
- Newlyweds (20-25)
- Anglo Orthodox community members
- Seminary alumni network

### Platform Features
- **Multi-language Support**: English and Hebrew
- **Responsive Design**: Mobile-first approach
- **Payment Integration**: Stripe for secure payments
- **Video Conferencing**: Zoom integration for coaching sessions
- **Community Features**: Forums and discussion groups
- **WhatsApp Integration**: Group support and notifications
- **Email Marketing**: Automated workflows and newsletters
- **Content Management**: Blog, resources, and course materials
- **Analytics Dashboard**: Comprehensive reporting and insights

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling with validation

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Prisma**: Database ORM and migrations
- **PostgreSQL**: Primary database
- **NextAuth.js**: Authentication and session management

### Integrations
- **Stripe**: Payment processing and subscriptions
- **Zoom API**: Video conferencing integration
- **WhatsApp Business API**: Group messaging and support
- **SendGrid**: Email delivery and marketing
- **Cloudinary**: Image and media management

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **TypeScript**: Static type checking

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # Reusable React components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, Services, etc.)
│   │   └── ui/                # UI components (Button, Form, etc.)
│   ├── lib/                   # Utility libraries and configurations
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Helper functions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── docs/                      # Documentation
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account for payments
- Zoom API credentials
- SendGrid account for emails

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd andrea-schulman-coaching
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

### Database Setup

The platform uses PostgreSQL with Prisma ORM. The schema includes:

- **Users**: User profiles with segmentation and preferences
- **Services**: Individual coaching, group programs, courses, events
- **Bookings**: Session scheduling and management
- **Courses**: Digital course content and modules
- **Enrollments**: User course and program enrollments
- **Subscriptions**: Membership and recurring payments
- **Payments**: Transaction history and billing
- **Community**: Posts, comments, and messaging

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

### Code Style

The project uses ESLint and Prettier for consistent code formatting. Run `npm run lint` to check for issues.

## Deployment

### Environment Variables

Ensure all required environment variables are set:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - NextAuth secret key
- `STRIPE_PUBLISHABLE_KEY` - Stripe public key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `ZOOM_API_KEY` - Zoom API credentials
- `EMAIL_SERVER_*` - Email configuration
- `WHATSAPP_*` - WhatsApp Business API

### Build and Deploy

1. Build the application:
```bash
npm run build
```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

## Features Roadmap

### Phase 1: Core Platform ✅
- [x] User authentication and profiles
- [x] Basic booking system
- [x] Payment integration
- [x] Admin dashboard

### Phase 2: Content & Community
- [ ] Course delivery system
- [ ] Community forums
- [ ] WhatsApp integration
- [ ] Email automation

### Phase 3: Advanced Features
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Partnership integrations

### Phase 4: Optimization
- [ ] Performance optimization
- [ ] Advanced marketing features
- [ ] AI-powered recommendations
- [ ] Scalability improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Support

For technical support or questions about the platform, please contact the development team.

## License

This project is proprietary and confidential. All rights reserved.