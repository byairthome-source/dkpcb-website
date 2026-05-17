import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PCB Products & Services - Custom PCB Fabrication Quotes',
  description:
    'Explore DKPCB\'s full range of PCB services: single layer, double layer, multilayer PCBs, aluminum PCB, rigid-flex PCB, and PCB assembly. Get instant online quotes.',
  keywords: [
    'PCB fabrication quote',
    'custom PCB order',
    'multilayer PCB',
    'aluminum PCB manufacturer',
    'PCB prototype fast',
    'low MOQ PCB',
    'PCB assembly quote',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'PCB Products & Services | DKPCB',
    description:
      'Custom PCB fabrication services: 1-32 layer PCBs, fast turnaround, low MOQ, competitive pricing from China.',
    url: 'https://dkpcb.com/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
