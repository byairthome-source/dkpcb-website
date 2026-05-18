'use client'

import Link from 'next/link'

// ============ PRODUCT SERVICES ============
const services = [
  { name: 'FR-4 PCBs',          img: '/images/service-fr4.webp',          price: '$2',    unit: '/5 pcs',    lead: '24 hours',   desc: ['1-32 layers', 'Free POFV for 6+ layers', '10% impedance control'], color: '#059669' },
  { name: 'Flexible PCBs',       img: '/images/service-flex.webp',         price: '$2',    unit: '/5 pcs',    lead: '5-6 days',   desc: ['Adhesive-free for 1-2 layer FPC', 'Supports PI, FR4, stainless steel', 'Supports EMI Shielding Film'], color: '#7c3aed' },
  { name: 'Metal Core PCBs',      img: '/images/service-metal.webp',        price: '$4',    unit: '/5 pcs',    lead: '2-3 days',   desc: ['Aluminum core: 1W thermal conductivity', 'Copper core: 380W thermal', 'Ideal for high-power LED'], color: '#ea580c' },
  { name: 'High-Freq PCBs',      img: '/images/service-hf.webp',          price: '$47',   unit: '/5 pcs',    lead: '4-5 days',   desc: ['Rogers/Teflon materials', 'Low Dk/Df for signal integrity', 'Ideal for 5G/RF/microwave'], color: '#dc2626' },
  { name: 'PCB Assembly',         img: '/images/service-pcba.webp',        price: '$8',    unit: '/unit',     lead: '24 hours',   desc: ['SMT & THT assembly', '680,000+ in-stock parts', 'Free DFM check'], color: '#2563eb' },
  { name: 'SMT Stencil',         img: '/images/service-stencil.webp',     price: '$3',    unit: '/pc',      lead: '12-48h',     desc: ['304 HTA stainless steel', '±0.003mm laser cutting', 'Electropolish, nano-coat'], color: '#d97706' },
  { name: 'PCB Layout',          img: '/images/service-layout.webp',      price: '$0.46', unit: '/pin',      lead: '2 days',     desc: ['Up to 100,000+ pins, 50 layers', 'Rigid, flex, HDI, high-speed', 'Team of 50+ engineers'], color: '#0891b2' },
  { name: '3D Printing',         img: '/images/service-3dp.webp',         price: '$0.30', unit: '/g',       lead: '2 days',     desc: ['SLA, MJF, SLM, FDM, SLS', 'Resin, Nylon, Metal, Plastic', 'Tolerance ±0.2mm'], color: '#4f46e5' },
  { name: 'CNC Machining',       img: '/images/service-cnc.webp',        price: '$5',    unit: '/pc',      lead: '3 days',     desc: ['3-,4- & full 5-axis Milling', 'Aluminum, Steel, Copper, Plastic', 'Tolerance ±0.05mm'], color: '#b45309' },
  { name: 'Mechatronic Parts',   img: '/images/service-mechatronic.webp', price: '$0.01', unit: '/pc',      lead: 'Same-Day',   desc: ['160+ categories, competitive prices', '10,000㎡ warehouse', 'Free 3D files & customization'], color: '#be185d' },
]

export function ProductServices() {
  return (
    <section style={{ padding: '64px 0', background: '#f5f7fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>
            All-in-One Electronics & Mechanical Solutions
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            From PCB prototype to mass production — one trusted partner
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {services.map((s) => (
            <div
              key={s.name}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s',
                cursor: 'pointer',
                background: '#fff',
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
              {/* Image area */}
              <div style={{
                height: '160px',
                background: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderBottom: `1px solid ${s.color}20`,
              }}>
                <img
                  src={s.img}
                  alt={s.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '8px' }}>{s.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', fontSize: '0.75rem', color: '#6b7280' }}>
                  {s.desc.map((d, i) => (
                    <li key={i} style={{ marginBottom: '4px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ color: s.color, fontSize: '0.6rem', marginTop: '3px' }}>●</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color }}>{s.price}</span>
                  <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{s.unit}</span>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    background: `${s.color}15`,
                    color: s.color,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}>
                    ⏱ {s.lead}
                  </span>
                </div>

                <Link
                  href="/products"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: s.color,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    padding: '9px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                >
                  Quote Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
