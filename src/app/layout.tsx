import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrea Schulman - Coaching & Education Platform',
  description: 'Comprehensive coaching and education platform for Orthodox Jewish women transitioning through important life stages',
  keywords: ['coaching', 'education', 'orthodox', 'jewish', 'women', 'mentoring', 'seminary', 'marriage', 'newlywed'],
  authors: [{ name: 'Andrea Schulman' }],
  creator: 'Andrea Schulman',
  publisher: 'Andrea Schulman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Andrea Schulman - Coaching & Education Platform',
    description: 'Comprehensive coaching and education platform for Orthodox Jewish women transitioning through important life stages',
    url: process.env.APP_URL || 'http://localhost:3000',
    siteName: 'Andrea Schulman Platform',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrea Schulman - Coaching & Education Platform',
    description: 'Comprehensive coaching and education platform for Orthodox Jewish women transitioning through important life stages',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}