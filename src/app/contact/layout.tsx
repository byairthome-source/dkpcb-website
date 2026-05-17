import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact DKPCB - Get PCB Quote & Support',
  description:
    'Contact DKPCB for PCB manufacturing inquiries, custom quotes, technical support and order assistance. Email: sales09dk@gmail.com | Phone: +86-13609611816.',
  keywords: [
    'contact PCB manufacturer',
    'PCB quote request',
    'PCB inquiry',
    'DKPCB contact',
    'PCB supplier contact China',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact DKPCB - Request PCB Quote',
    description:
      'Get in touch with DKPCB for custom PCB fabrication quotes. Fast response, professional service.',
    url: 'https://dkpcb.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
