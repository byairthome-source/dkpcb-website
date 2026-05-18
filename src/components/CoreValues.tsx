'use client'

import Link from 'next/link'

// ============ CORE VALUES ============
const coreItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Rapid Fab & Assembly',
    sub: 'As fast as 24 hours',
    color: '#0066cc',
    bg: '#eff6ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Guaranteed Quality',
    sub: '99% product quality rate',
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Fast Global Delivery',
    sub: 'Flexible shipping options available',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Tailored Solutions',
    sub: 'Product Idea-R&D-Launch-Upgrade',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
]

export function CoreValues() {
  return (
    <section style={{ padding: '64px 0 32px', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {coreItems.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bg,
                borderRadius: '12px',
                padding: '28px 20px',
                textAlign: 'center',
                border: `1px solid ${item.color}30`,
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 16px ${item.color}20` }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
