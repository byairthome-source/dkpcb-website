'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============ 3D PCB SVG ============
function PCB3DSVG() {
  return (
    <svg viewBox="0 0 420 320" width="420" height="320" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Back board shadow/depth */}
      <polygon points="140,240 340,200 360,280 160,320" fill="#0d2d5a" />
      <polygon points="140,240 340,200 340,205 140,245" fill="#092040" />
      <polygon points="340,200 360,280 360,275 340,195" fill="#061830" />

      {/* Back board surface */}
      <polygon points="140,240 340,200 360,280 160,320" fill="#154a8c" stroke="#b8860b" strokeWidth="1.5" />
      {/* Back board traces */}
      <polyline points="160,260 240,248 260,290" fill="none" stroke="#c9a84c" strokeWidth="1" />
      <polyline points="180,275 280,258 300,300" fill="none" stroke="#c9a84c" strokeWidth="1" />
      <rect x="200" y="255" width="28" height="22" rx="2" fill="#0d2d5a" stroke="#c9a84c" strokeWidth="1" />

      {/* Main board - tilted 3D perspective */}
      {/* Bottom/Right edges (depth) */}
      <polygon points="120,120 320,80 340,220 140,260" fill="#0d3d7a" />
      <polygon points="120,120 320,80 320,85 120,125" fill="#0a2d5c" />
      <polygon points="320,80 340,220 340,215 320,75" fill="#072240" />

      {/* Main board top surface */}
      <polygon points="120,120 320,80 340,220 140,260" fill="#1a5fb4" stroke="#d4af37" strokeWidth="2.5" />

      {/* Top highlight */}
      <polygon points="120,120 320,80 300,100 100,140" fill="rgba(255,255,255,0.06)" />

      {/* Gold traces - main routes */}
      <polyline points="140,140 200,130 220,175" fill="none" stroke="#d4af37" strokeWidth="1.8" />
      <polyline points="160,160 240,145 260,195" fill="none" stroke="#d4af37" strokeWidth="1.8" />
      <polyline points="180,180 280,160 300,205" fill="none" stroke="#d4af37" strokeWidth="1.8" />
      <polyline points="200,145 260,135 270,165" fill="none" stroke="#d4af37" strokeWidth="1.2" />
      <polyline points="150,190 220,178 230,210" fill="none" stroke="#d4af37" strokeWidth="1.2" />
      <polyline points="240,165 300,155 310,185" fill="none" stroke="#d4af37" strokeWidth="1.2" />

      {/* Small branch traces */}
      <polyline points="170,155 185,152 190,168" fill="none" stroke="#c9a84c" strokeWidth="1" />
      <polyline points="210,170 225,167 230,183" fill="none" stroke="#c9a84c" strokeWidth="1" />
      <polyline points="250,185 265,182 270,198" fill="none" stroke="#c9a84c" strokeWidth="1" />

      {/* IC / Chip packages */}
      <rect x="170" y="150" width="36" height="28" rx="2" fill="#0d3d7a" stroke="#d4af37" strokeWidth="1.5" />
      {/* Chip pins */}
      <line x1="170" y1="156" x2="160" y2="158" stroke="#d4af37" strokeWidth="1" />
      <line x1="170" y1="162" x2="160" y2="164" stroke="#d4af37" strokeWidth="1" />
      <line x1="170" y1="168" x2="160" y2="170" stroke="#d4af37" strokeWidth="1" />
      <line x1="170" y1="174" x2="160" y2="176" stroke="#d4af37" strokeWidth="1" />
      <line x1="206" y1="156" x2="216" y2="158" stroke="#d4af37" strokeWidth="1" />
      <line x1="206" y1="162" x2="216" y2="164" stroke="#d4af37" strokeWidth="1" />
      <line x1="206" y1="168" x2="216" y2="170" stroke="#d4af37" strokeWidth="1" />
      <line x1="206" y1="174" x2="216" y2="176" stroke="#d4af37" strokeWidth="1" />

      <rect x="230" y="140" width="28" height="22" rx="2" fill="#0d3d7a" stroke="#d4af37" strokeWidth="1.5" />
      <line x1="230" y1="146" x2="222" y2="148" stroke="#d4af37" strokeWidth="1" />
      <line x1="230" y1="152" x2="222" y2="154" stroke="#d4af37" strokeWidth="1" />
      <line x1="230" y1="158" x2="222" y2="160" stroke="#d4af37" strokeWidth="1" />
      <line x1="258" y1="146" x2="266" y2="148" stroke="#d4af37" strokeWidth="1" />
      <line x1="258" y1="152" x2="266" y2="154" stroke="#d4af37" strokeWidth="1" />
      <line x1="258" y1="158" x2="266" y2="160" stroke="#d4af37" strokeWidth="1" />

      <rect x="270" y="175" width="40" height="32" rx="2" fill="#0d3d7a" stroke="#d4af37" strokeWidth="1.5" />
      <line x1="270" y1="182" x2="260" y2="184" stroke="#d4af37" strokeWidth="1" />
      <line x1="270" y1="188" x2="260" y2="190" stroke="#d4af37" strokeWidth="1" />
      <line x1="270" y1="194" x2="260" y2="196" stroke="#d4af37" strokeWidth="1" />
      <line x1="270" y1="200" x2="260" y2="202" stroke="#d4af37" strokeWidth="1" />
      <line x1="310" y1="182" x2="320" y2="184" stroke="#d4af37" strokeWidth="1" />
      <line x1="310" y1="188" x2="320" y2="190" stroke="#d4af37" strokeWidth="1" />
      <line x1="310" y1="194" x2="320" y2="196" stroke="#d4af37" strokeWidth="1" />
      <line x1="310" y1="200" x2="320" y2="202" stroke="#d4af37" strokeWidth="1" />

      {/* Solder pads (circles) */}
      <circle cx="190" cy="200" r="5" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="190" cy="200" r="2" fill="#d4af37" />
      <circle cx="220" cy="190" r="5" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="220" cy="190" r="2" fill="#d4af37" />
      <circle cx="250" cy="210" r="5" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="250" cy="210" r="2" fill="#d4af37" />
      <circle cx="280" cy="200" r="5" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="280" cy="200" r="2" fill="#d4af37" />
      <circle cx="310" cy="220" r="5" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="310" cy="220" r="2" fill="#d4af37" />
      <circle cx="160" cy="220" r="4" fill="none" stroke="#d4af37" strokeWidth="1.2" />
      <circle cx="160" cy="220" r="1.5" fill="#d4af37" />

      {/* Via holes */}
      <circle cx="205" cy="165" r="2" fill="#061830" stroke="#1a5fb4" strokeWidth="0.5" />
      <circle cx="245" cy="152" r="2" fill="#061830" stroke="#1a5fb4" strokeWidth="0.5" />
      <circle cx="290" cy="192" r="2" fill="#061830" stroke="#1a5fb4" strokeWidth="0.5" />
      <circle cx="180" cy="185" r="2" fill="#061830" stroke="#1a5fb4" strokeWidth="0.5" />

      {/* Connector / Header pins on right edge */}
      <rect x="325" y="165" width="6" height="18" rx="1" fill="#a0a0a0" stroke="#808080" strokeWidth="0.5" />
      <rect x="333" y="162" width="6" height="18" rx="1" fill="#a0a0a0" stroke="#808080" strokeWidth="0.5" />
      <rect x="341" y="159" width="6" height="18" rx="1" fill="#a0a0a0" stroke="#808080" strokeWidth="0.5" />
      <rect x="349" y="156" width="6" height="18" rx="1" fill="#a0a0a0" stroke="#808080" strokeWidth="0.5" />

      {/* Decorative PCB text label */}
      <text x="200" y="235" textAnchor="middle" fill="rgba(212,175,55,0.4)" fontSize="10" fontWeight="700" fontFamily="monospace">DKPCB-L6</text>
    </svg>
  )
}

// ============ HERO BANNER ============
function HeroBanner() {
  const banners = [
    {
      tag: 'Save $30',
      tagBg: '#dc2626',
      title: 'On Our Premium, 6-Layer PCBs',
      bullets: [
        'FREE Via-in-Pad (Save Space & Cost)',
        'Reliable ±10% Impedance Control',
      ],
      cta: 'Get Coupon Now',
      ctaBg: '#1a1a1a',
      ctaColor: '#fff',
    },
    {
      tag: 'New',
      tagBg: '#0066cc',
      title: 'Flexible PCB Heaters from $1',
      bullets: [
        'Custom shapes & sizes available',
        'PI & Silicone substrate options',
      ],
      cta: 'Learn More',
      ctaBg: '#1a1a1a',
      ctaColor: '#fff',
    },
    {
      tag: 'Hot',
      tagBg: '#ff6b00',
      title: 'PCB Layout Service — From $9.9',
      bullets: [
        '200-pin boards from $9.9',
        'Component matching included',
      ],
      cta: 'Get Started',
      ctaBg: '#1a1a1a',
      ctaColor: '#fff',
    },
  ]

  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % banners.length), 5000)
    return () => clearInterval(t)
  }, [])

  const goPrev = () => setActive(a => (a - 1 + banners.length) % banners.length)
  const goNext = () => setActive(a => (a + 1) % banners.length)

  const b = banners[active]

  return (
    <div style={{ position: 'relative', background: '#eef2f7', overflow: 'hidden' }}>
      {/* Main hero content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 24px 130px', display: 'flex', alignItems: 'center', gap: '40px' }}>
        {/* Left text */}
        <div style={{ flex: '0 0 42%' }}>
          <span style={{
            display: 'inline-block', background: b.tagBg, color: '#fff',
            fontSize: '0.78rem', fontWeight: 700, padding: '5px 14px',
            borderRadius: '3px', marginBottom: '18px', letterSpacing: '0.02em',
          }}>
            {b.tag}
          </span>
          <h1 style={{
            fontSize: '2.2rem', fontWeight: 800, color: '#111827',
            lineHeight: 1.15, marginBottom: '22px',
          }}>
            {b.title}
          </h1>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px' }}>
            {b.bullets.map((bullet, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                color: '#4b5563', fontSize: '0.92rem', marginBottom: '10px',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: '#6b7280', flexShrink: 0,
                }} />
                {bullet}
              </li>
            ))}
          </ul>
          <Link href="/products" style={{
            display: 'inline-block',
            background: b.ctaBg, color: b.ctaColor, fontWeight: 600,
            padding: '12px 28px', borderRadius: '24px', textDecoration: 'none',
            fontSize: '0.9rem', transition: 'all 0.2s',
          }}>
            {b.cta}
          </Link>
        </div>

        {/* Right visual */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '280px' }}>
          <PCB3DSVG />
        </div>
      </div>

      {/* Left arrow */}
      <button onClick={goPrev} style={{
        position: 'absolute', left: '24px', top: '42%',
        width: '44px', height: '44px', borderRadius: '50%',
        background: '#fff', border: '1px solid #e5e7eb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        zIndex: 5,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      {/* Right arrow */}
      <button onClick={goNext} style={{
        position: 'absolute', right: '24px', top: '42%',
        width: '44px', height: '44px', borderRadius: '50%',
        background: '#fff', border: '1px solid #e5e7eb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        zIndex: 5,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '88px', left: '50%',
        transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 5,
      }}>
        {banners.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            width: i === active ? '24px' : '8px', height: '8px',
            borderRadius: '4px', border: 'none', cursor: 'pointer',
            background: i === active ? '#0066cc' : '#cbd5e1',
            transition: 'all 0.3s',
          }} />
        ))}
      </div>

      {/* Quick Quote Bar - overlaps bottom of hero */}
      <div style={{
        position: 'absolute', bottom: '-32px', left: '50%',
        transform: 'translateX(-50%)', width: '100%', maxWidth: '1000px',
        padding: '0 24px', zIndex: 10,
      }}>
        <QuickQuote />
      </div>
    </div>
  )
}

// ============ QUICK QUOTE ============
function QuickQuote() {
  const [layers, setLayers] = useState('2')
  const [qty, setQty] = useState('5')
  const [width, setWidth] = useState('100')
  const [height, setHeight] = useState('100')

  return (
    <div style={{
      background: '#fff', borderRadius: '10px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      padding: '18px 28px',
      display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
    }}>
      {/* Icon */}
      <div style={{
        width: '40px', height: '40px', borderRadius: '8px',
        background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <line x1="4" y1="10" x2="20" y2="10"/>
          <line x1="10" y1="4" x2="10" y2="20"/>
        </svg>
      </div>

      {/* Layers */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <select
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
          style={{
            border: '1px solid #e5e7eb', borderRadius: '6px',
            padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600,
            color: '#1a2b4a', background: '#f9fafb', outline: 'none',
            cursor: 'pointer', minWidth: '100px',
          }}
        >
          {['1', '2', '4', '6', '8', '10', '12', '16', '20', '24', '32'].map(o => <option key={o} value={o}>{o} Layers</option>)}
        </select>
      </div>

      {/* Dimensions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <input
          type="number" value={width}
          onChange={(e) => setWidth(e.target.value)}
          style={{
            border: '1px solid #e5e7eb', borderRadius: '6px',
            padding: '10px 12px', fontSize: '0.88rem', fontWeight: 600,
            color: '#1a2b4a', background: '#f9fafb', outline: 'none', width: '70px', textAlign: 'center',
          }}
        />
        <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>×</span>
        <input
          type="number" value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{
            border: '1px solid #e5e7eb', borderRadius: '6px',
            padding: '10px 12px', fontSize: '0.88rem', fontWeight: 600,
            color: '#1a2b4a', background: '#f9fafb', outline: 'none', width: '70px', textAlign: 'center',
          }}
        />
        <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>mm</span>
      </div>

      {/* Quantity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <select
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{
            border: '1px solid #e5e7eb', borderRadius: '6px',
            padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600,
            color: '#1a2b4a', background: '#f9fafb', outline: 'none',
            cursor: 'pointer', minWidth: '90px',
          }}
        >
          {['5', '10', '15', '20', '25', '30', '50', '75', '100', '200', '500', '1000', '2000'].map(o => <option key={o} value={o}>{o} pcs</option>)}
        </select>
      </div>

      {/* CTA */}
      <Link href="/products" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: '#0066cc', color: '#fff', fontWeight: 700,
        fontSize: '0.9rem', padding: '12px 28px', borderRadius: '6px',
        textDecoration: 'none', marginLeft: 'auto',
        transition: 'background 0.2s',
      }}>
        Get Instant Quote
      </Link>
    </div>
  )
}

// ============ CORE ADVANTAGES ============
function CoreAdvantages() {
  const items = [
    { title: 'As Fast as 24 Hours', sub: 'Express production & shipping for urgent projects', color: '#ff6b00', bg: '#fff7ed', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    )},
    { title: '99% Quality Rate', sub: 'ISO 9001 certified, IPC Class 2 & 3 standards', color: '#059669', bg: '#ecfdf5', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    )},
    { title: '180+ Countries', sub: 'Global shipping with DHL, FedEx, UPS', color: '#2563eb', bg: '#eff6ff', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    )},
    { title: 'R&D to Mass Production', sub: 'One-stop solution from prototype to scale', color: '#7c3aed', bg: '#f5f3ff', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    )},
  ]
  return (
    <section style={{ padding: '100px 0 64px', background: '#f5f7fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>Why Choose DKPCB?</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Trusted by 7M+ customers worldwide</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {items.map((item) => (
            <div key={item.title} style={{
              background: '#fff', borderRadius: '12px', padding: '28px 24px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb',
              textAlign: 'center', transition: 'all 0.2s',
            }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ PRODUCT SERVICES ============
function ProductServices() {
  const services = [
    { name: 'FR-4 PCBs', price: '$2', unit: '/5pcs', lead: '24h', layers: '1-32 layers', color: '#059669', bg: '#d1fae5', iconPath: 'M4 4h16v16H4z' },
    { name: 'Flexible PCBs', price: '$2', unit: '/5pcs', lead: '5-6 days', layers: 'FPC / FFC', color: '#7c3aed', bg: '#ede9fe', iconPath: 'M4 12h16M12 4v16' },
    { name: 'Metal Core PCBs', price: '$4', unit: '/5pcs', lead: '2-3 days', layers: '1W–380W TC', color: '#ea580c', bg: '#ffedd5', iconPath: 'M12 2L2 7l10 5 10-5-10-5z' },
    { name: 'High-Frequency PCB', price: '$47', unit: '/5pcs', lead: '4-5 days', layers: 'Rogers/Teflon', color: '#dc2626', bg: '#fee2e2', iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { name: 'PCB Assembly', price: '$8', unit: '/unit', lead: '24h', layers: '680K+ parts', color: '#2563eb', bg: '#dbeafe', iconPath: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18' },
    { name: 'SMT Stencil', price: '$3', unit: '/pc', lead: '12-48h', layers: 'Nano-coated', color: '#d97706', bg: '#fef3c7', iconPath: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18' },
    { name: 'PCB Layout Service', price: '$0.46', unit: '/pin', lead: '2 days', layers: 'Up to 500 pins', color: '#0891b2', bg: '#cffafe', iconPath: 'M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8' },
    { name: '3D Printing', price: '$0.30', unit: '/g', lead: '2 days', layers: 'SLA/MJF/SLM', color: '#4f46e5', bg: '#eef2ff', iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  ]

  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>Our Products & Services</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>From prototype to mass production — one trusted partner</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {services.map((s) => (
            <div key={s.name} style={{
              border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px',
              transition: 'all 0.2s', cursor: 'pointer', background: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
              e.currentTarget.style.borderColor = s.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8">
                    <path d={s.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '2px' }}>{s.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{s.layers}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color }}>{s.price}</span>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{s.unit}</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ background: s.bg, color: s.color, fontSize: '0.72rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px' }}>
                  {s.lead}
                </span>
              </div>

              <Link href="/products" style={{
                display: 'block', textAlign: 'center',
                background: '#f9fafb', color: s.color, fontWeight: 600, fontSize: '0.82rem',
                padding: '9px', borderRadius: '8px', textDecoration: 'none',
                border: `1px solid ${s.bg}`,
                transition: 'all 0.2s',
              }}>
                Get Quote →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ ORDER PROCESS ============
function OrderProcess() {
  const steps = [
    { num: '01', title: 'Upload Files', sub: 'Upload Gerber files & BOM' },
    { num: '02', title: 'Review & Confirm', sub: 'DFM check & component sourcing' },
    { num: '03', title: 'Production', sub: 'Manufacturing & quality inspection' },
    { num: '04', title: 'Delivery', sub: 'Global shipping with tracking' },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#f5f7fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>How It Works</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Simple 4-step process from design to delivery</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', position: 'relative', padding: '0 16px' }}>
              {i > 0 && (
                <div style={{ position: 'absolute', top: '28px', left: '-30px', right: '50%', height: '2px', background: '#e5e7eb', zIndex: 0 }} />
              )}
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#0066cc', color: '#fff', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative', zIndex: 1, boxShadow: '0 4px 12px rgba(0,102,204,0.3)' }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '6px' }}>{step.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>{step.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ STATISTICS ============
function Statistics() {
  const stats = [
    { num: '1.7M+', label: 'Orders/Year', sub: '17,000,000+' },
    { num: '8M+', label: 'PCBs Produced', sub: '8,000,000+ pcs' },
    { num: '7M+', label: 'Global Customers', sub: '7,000,000+' },
    { num: '180+', label: 'Countries Served', sub: '180+ nations' },
  ]

  return (
    <section style={{ background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Trusted Worldwide</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Numbers that speak for our quality and scale</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '4px', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ PARTNERS ============
function Partners() {
  const logos = ['Raspberry Pi', 'Siemens', 'Midea', 'Huawei', 'Xiaomi', 'Intel', 'Arduino', 'STMicro']
  return (
    <section style={{ padding: '48px 0', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '28px' }}>
          Trusted by Industry Leaders
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
          {logos.map((name) => (
            <div key={name} style={{
              padding: '10px 20px', borderRadius: '8px',
              border: '1px solid #e5e7eb', background: '#fafafa',
              fontSize: '0.82rem', fontWeight: 700, color: '#9ca3af',
              letterSpacing: '0.02em',
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ FAQ ============
function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const faqs = [
    { q: 'What file formats do you accept?', a: 'We accept Gerber files (RS-274X, Gerber274X), BOM (Bill of Materials), Pick & Place files (CSV, TXT). Our system auto-validates your files upon upload.' },
    { q: 'What are your standard lead times?', a: 'Standard FR-4 PCBs: 3-5 days. Express (24h) available. PCBA: 3-7 days. Shipping: 5-15 days depending on destination.' },
    { q: 'Do you offer free DFM check?', a: 'Yes! Every order includes free Design for Manufacturability (DFM) analysis. We will notify you of any potential issues before production.' },
    { q: 'What quality standards do you follow?', a: 'We are ISO 9001 certified and follow IPC Class 2 and Class 3 standards. All boards undergo AOI (Automated Optical Inspection) and electrical testing.' },
    { q: 'Do you ship globally?', a: 'Yes! We ship to 180+ countries via DHL, FedEx, UPS, and EMS. Tracking numbers are provided for all shipments.' },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#f5f7fa' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '10px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', padding: '16px 20px', background: 'none', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1a2b4a' }}>{faq.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 16px', borderTop: '1px solid #f3f4f6' }}>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.7, paddingTop: '14px' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ CTA ============
function CTASection() {
  return (
    <section style={{ background: '#1a2b4a', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
          Ready to Start Your PCB Project?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Get an instant quote in seconds. No minimum order. No hidden fees.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/products" style={{
            background: '#ff6b00', color: '#fff', fontWeight: 700, fontSize: '1rem',
            padding: '14px 36px', borderRadius: '8px', textDecoration: 'none',
          }}>
            Get Instant Quote →
          </Link>
          <Link href="/contact" style={{
            background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: '1rem',
            padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============ MAIN PAGE ============
export default function Home() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <main style={{ paddingTop: '0' }}>
        <HeroBanner />
        <CoreAdvantages />
        <ProductServices />
        <OrderProcess />
        <Statistics />
        <Partners />
        <FAQ />
        <CTASection />
      </main>
    </div>
  )
}
