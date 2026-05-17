'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============ NAVBAR ============
function TopBar() {
  return (
    <div style={{ background: '#1a2b4a', padding: '6px 0', textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
      <span style={{ color: '#ff9500', fontWeight: 600 }}>🔥 New:</span>
      {' '}Get <span style={{ color: '#ff9500', fontWeight: 600 }}>$20 OFF</span> on your first PCB order — Use code: <span style={{ fontWeight: 700, color: '#fff' }}>DKPCB20</span>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menus = {
    pcb: [
      { label: 'FR-4 PCBs', desc: '1-32 layers, from $2/5pcs' },
      { label: 'Flexible PCBs', desc: 'FPC, from $2/5pcs' },
      { label: 'Metal Core PCBs', desc: 'Aluminum, from $4/5pcs' },
      { label: 'High-Frequency PCBs', desc: 'Rogers/Teflon, from $47/5pcs' },
      { label: 'Rigid-Flex PCBs', desc: 'Hybrid construction' },
    ],
    pcba: [
      { label: 'PCB Assembly', desc: 'From $8, 24h turnaround' },
      { label: 'Parts Library', desc: '680K+ components in stock' },
    ],
    more: [
      { label: 'SMT Stencil', desc: 'From $3, 12-48h' },
      { label: 'PCB Layout Service', desc: 'From $0.46/pin' },
      { label: '3D Printing', desc: 'SLA/MJF/SLM, from $0.30' },
      { label: 'CNC Machining', desc: 'From $5, 3-day delivery' },
    ],
  }

  return (
    <>
      <TopBar />
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '34px', width: 'auto' }} />
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a2332', lineHeight: 1 }}>DKPCB</div>
              <div style={{ fontSize: '0.58rem', color: '#8896a6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Solutions</div>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1, justifyContent: 'center' }}>
            {[
              { key: 'pcb', label: 'PCB Service', sub: menus.pcb },
              { key: 'pcba', label: 'PCBA Service', sub: menus.pcba },
              { key: 'more', label: 'More Services', sub: menus.more },
            ].map((item) => (
              <div
                key={item.key}
                style={{ position: 'relative' }}
                onMouseEnter={() => setMenuOpen(item.key)}
                onMouseLeave={() => setMenuOpen(null)}
              >
                <Link
                  href="/products"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '8px 16px', borderRadius: '6px',
                    fontSize: '0.88rem', fontWeight: 500, color: '#374151',
                    textDecoration: 'none', cursor: 'pointer',
                    background: menuOpen === item.key ? '#f0f7ff' : 'transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </Link>

                {/* Dropdown */}
                {menuOpen === item.key && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    background: '#fff', borderRadius: '10px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    border: '1px solid #e5e7eb',
                    padding: '8px', minWidth: '220px', zIndex: 200,
                  }}>
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        href="/products"
                        style={{
                          display: 'block', padding: '10px 14px', borderRadius: '6px',
                          textDecoration: 'none', transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f7ff')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a2b4a' }}>{s.label}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>{s.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/about" style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.88rem', fontWeight: 500, color: '#374151', textDecoration: 'none', transition: 'all 0.15s' }}>
              About Us
            </Link>
            <Link href="/contact" style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.88rem', fontWeight: 500, color: '#374151', textDecoration: 'none', transition: 'all 0.15s' }}>
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link href="/login" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4b5563', textDecoration: 'none' }}>
              Login
            </Link>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '0.88rem',
              padding: '9px 22px', borderRadius: '6px', textDecoration: 'none',
              transition: 'background 0.2s',
            }}>
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

// ============ HERO BANNER ============
function HeroBanner() {
  const banners = [
    {
      bg: 'linear-gradient(135deg, #0f4c75 0%, #1a6f9e 100%)',
      title: 'Premium 6-Layer PCBs — Save $30',
      sub: '✓ FREE Via-in-Pad included  ✓ ±10% Impedance Control  ✓ 4-6 day delivery',
      cta: 'Order Now',
    },
    {
      bg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      title: 'New: Flexible Heaters Starting at $1',
      sub: '✓ Custom shapes & sizes  ✓ PI & Silicone options  ✓ Engineering support free',
      cta: 'Learn More',
    },
    {
      bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'PCB Layout Service — From $9.9',
      sub: '✓ 200-pin boards from $9.9  ✓ Component matching $10  ✓ 2-day turnaround',
      cta: 'Get Started',
    },
  ]

  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % banners.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Banner */}
      <div style={{
        background: banners[active].bg,
        padding: '40px 0',
        transition: 'background 0.5s ease',
        minHeight: '200px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '40px' }}>
          {/* Text */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
              {banners[active].title}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
              {banners[active].sub}
            </p>
            <Link href="/products" style={{
              display: 'inline-block',
              background: '#ff6b00', color: '#fff', fontWeight: 700,
              padding: '10px 28px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.92rem',
            }}>
              {banners[active].cta} →
            </Link>
          </div>

          {/* Visual */}
          <div style={{ flexShrink: 0, width: '260px', height: '160px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="10" y="30" width="100" height="60" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <rect x="20" y="40" width="20" height="15" rx="2" fill="rgba(255,255,255,0.3)"/>
              <rect x="50" y="40" width="20" height="15" rx="2" fill="rgba(255,255,255,0.2)"/>
              <rect x="80" y="40" width="20" height="15" rx="2" fill="rgba(255,255,255,0.25)"/>
              <line x1="30" y1="65" x2="30" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <line x1="50" y1="65" x2="50" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <line x1="70" y1="65" x2="70" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <line x1="90" y1="65" x2="90" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <rect x="30" y="75" width="60" height="8" rx="2" fill="rgba(255,255,255,0.2)"/>
              {active === 0 && <text x="60" y="52" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="700">L6 PCB</text>}
              {active === 1 && <text x="60" y="52" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="700">FPC</text>}
              {active === 2 && <text x="60" y="52" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="700">LAYOUT</text>}
            </svg>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
        {banners.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            width: i === active ? '20px' : '8px', height: '8px', borderRadius: '4px',
            border: 'none', cursor: 'pointer', background: i === active ? '#fff' : 'rgba(255,255,255,0.4)',
            transition: 'all 0.3s',
          }} />
        ))}
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
    <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 -4px 24px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb', marginTop: '-24px', position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '-24px auto 0' }}>
      <div style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#1a2b4a', flexShrink: 0 }}>
          PCB Quick Quote
        </div>

        {[
          { label: 'Layers', value: layers, setValue: setLayers, options: ['1', '2', '4', '6', '8', '10', '12', '16', '20', '24', '32'] },
          { label: 'Width (mm)', value: width, setValue: setWidth, options: null, type: 'number' },
          { label: 'Height (mm)', value: height, setValue: setHeight, options: null, type: 'number' },
          { label: 'Quantity', value: qty, setValue: setQty, options: ['5', '10', '15', '20', '25', '30', '50', '75', '100', '200', '500', '1000', '2000'] },
        ].map((field) => (
          <div key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{field.label}</label>
            {field.options ? (
              <select
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600, color: '#1a2b4a', background: '#f9fafb', outline: 'none', cursor: 'pointer', minWidth: '120px' }}
              >
                {field.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input
                type="number"
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600, color: '#1a2b4a', background: '#f9fafb', outline: 'none', width: '90px' }}
              />
            )}
          </div>
        ))}

        <Link href="/products" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#ff6b00', color: '#fff', fontWeight: 700, fontSize: '0.92rem',
          padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', marginLeft: 'auto',
        }}>
          Get Quote →
        </Link>
      </div>
    </div>
  )
}

// ============ CORE ADVANTAGES ============
function CoreAdvantages() {
  const items = [
    { icon: '⚡', title: 'As Fast as 24 Hours', sub: 'Express production & shipping for urgent projects', color: '#ff6b00', bg: '#fff7ed' },
    { icon: '✓', title: '99% Quality Rate', sub: 'ISO 9001 certified, IPC Class 2 & 3 standards', color: '#059669', bg: '#ecfdf5' },
    { icon: '🌍', title: '180+ Countries', sub: 'Global shipping with DHL, FedEx, UPS', color: '#2563eb', bg: '#eff6ff' },
    { icon: '🔧', title: 'R&D to Mass Production', sub: 'One-stop solution from prototype to scale', color: '#7c3aed', bg: '#f5f3ff' },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#f5f7fa' }}>
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
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem' }}>
                {item.icon === '⚡' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                {item.icon === '✓' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                {item.icon === '🌍' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                {item.icon === '🔧' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
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
    { name: 'FR-4 PCBs', price: '$2', unit: '/5pcs', lead: '24h', layers: '1-32 layers', img: 'M4 4h16v16H4z', color: '#059669', bg: '#d1fae5' },
    { name: 'Flexible PCBs', price: '$2', unit: '/5pcs', lead: '5-6 days', layers: 'FPC / FFC', img: 'M4 12h16M12 4v16', color: '#7c3aed', bg: '#ede9fe' },
    { name: 'Metal Core PCBs', price: '$4', unit: '/5pcs', lead: '2-3 days', layers: '1W–380W TC', img: 'M12 2L2 7l10 5 10-5-10-5z', color: '#ea580c', bg: '#ffedd5' },
    { name: 'High-Frequency PCB', price: '$47', unit: '/5pcs', lead: '4-5 days', layers: 'Rogers/Teflon', img: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '#dc2626', bg: '#fee2e2' },
    { name: 'PCB Assembly', price: '$8', unit: '/unit', lead: '24h', layers: '680K+ parts', img: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18', color: '#2563eb', bg: '#dbeafe' },
    { name: 'SMT Stencil', price: '$3', unit: '/pc', lead: '12-48h', layers: 'Nano-coated', img: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18', color: '#d97706', bg: '#fef3c7' },
    { name: 'PCB Layout Service', price: '$0.46', unit: '/pin', lead: '2 days', layers: 'Up to 500 pins', img: 'M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8', color: '#0891b2', bg: '#cffafe' },
    { name: '3D Printing', price: '$0.30', unit: '/g', lead: '2 days', layers: 'SLA/MJF/SLM', img: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', color: '#4f46e5', bg: '#eef2ff' },
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
                    <path d={s.img} />
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
                <span style={{ background: s.bg, color: s.color, fontSize: '0.72rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px' }}>⏱ {s.lead}</span>
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
  const [visible, setVisible] = useState(false)
  const ref = { current: null }

  const stats = [
    { num: '1.7M+', label: 'Orders/Year', sub: '17,000,000+' },
    { num: '8M+', label: 'PCBs Produced', sub: '8,000,000+ pcs' },
    { num: '7M+', label: 'Global Customers', sub: '7,000,000+' },
    { num: '180+', label: 'Countries Served', sub: '180+ nations' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    const el = document.getElementById('stats-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" style={{ background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', padding: '64px 0' }}>
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
      <Navbar />
      <main style={{ paddingTop: '0' }}>
        <HeroBanner />
        <QuickQuote />
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
