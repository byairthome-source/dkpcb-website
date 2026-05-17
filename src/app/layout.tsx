import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DKPCB - Professional PCB Manufacturing & Assembly Service',
    template: '%s | DKPCB',
  },
  description:
    'DKPCB offers high-quality PCB prototyping, fabrication and assembly from China. Fast turnaround, low MOQ, competitive pricing. Get instant quotes for 1-32 layer PCBs.',
  keywords: [
    'PCB manufacturer China',
    'custom PCB fabrication',
    'PCB prototype service',
    'PCB assembly service',
    'cheap PCB fabrication online',
    'multilayer PCB manufacturer',
    'PCB quote online',
    'printed circuit board manufacturer',
  ],
  authors: [{ name: 'DKPCB', url: 'https://dkpcb.com' }],
  creator: 'DKPCB',
  publisher: 'DKPCB',
  metadataBase: new URL('https://dkpcb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dkpcb.com',
    siteName: 'DKPCB',
    title: 'DKPCB - Professional PCB Manufacturing & Assembly Service',
    description:
      'High-quality PCB prototyping and manufacturing services from China. Fast turnaround, low MOQ. Get instant quotes now.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DKPCB - Professional PCB Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DKPCB - Professional PCB Manufacturing & Assembly',
    description:
      'High-quality PCB fabrication from China. Fast turnaround, low MOQ, competitive price.',
    images: ['/og-image.png'],
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
  verification: {
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', // TODO: 配置GSC后填入
  },
}

// Organization Schema 结构化数据
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DKPCB',
  url: 'https://dkpcb.com',
  logo: 'https://dkpcb.com/pages/dkpcb-logo.png',
  description:
    'Professional PCB manufacturer from China, offering PCB prototyping, fabrication and assembly services.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-13609611816',
    contactType: 'sales',
    email: 'sales09dk@gmail.com',
    availableLanguage: ['English', 'Chinese'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: 'Guangdong',
  },
  sameAs: [],
}

// WebSite Schema（启用 Sitelinks 搜索框）
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DKPCB',
  url: 'https://dkpcb.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dkpcb.com/products?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 结构化数据 Schema Markup */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
