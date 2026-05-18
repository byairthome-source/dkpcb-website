'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============ QUICK QUOTE BAR ============
export function QuickQuote() {
  const [layers, setLayers] = useState('2')
  const [qty, setQty] = useState('5')

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        padding: '18px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {/* Layers selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <label style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Layers</label>
        <select
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: '#1a2b4a',
            background: '#f9fafb',
            outline: 'none',
            cursor: 'pointer',
            minWidth: '90px',
          }}
        >
          {['1','2','4','6','8','10','12','14','16','18','20','22','24','26','28','30','32'].map(o => (
            <option key={o} value={o}>{o} Layer{o !== '1' ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Unit display */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <label style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Unit</label>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '0.88rem',
          fontWeight: 600,
          color: '#1a2b4a',
          background: '#f9fafb',
          minWidth: '70px',
          textAlign: 'center',
        }}>mm</div>
      </div>

      {/* Quantity selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <label style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Quantity</label>
        <select
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: '#1a2b4a',
            background: '#f9fafb',
            outline: 'none',
            cursor: 'pointer',
            minWidth: '90px',
          }}
        >
          {['5','10','15','20','25','30','50','75','100','500','1000','2000'].map(o => (
            <option key={o} value={o}>{o} pcs</option>
          ))}
        </select>
      </div>

      {/* CTA */}
      <Link
        href="/products"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#0066cc',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.9rem',
          padding: '10px 28px',
          borderRadius: '6px',
          textDecoration: 'none',
          marginLeft: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        Get Instant Quote
      </Link>
    </div>
  )
}

// ============ HERO BANNER ============
const banners = [
  {
    img: '/images/hero-1.webp',
    tag: 'Save $30',
    tagBg: '#dc2626',
    title: 'On Our Premium, 6-Layer PCBs',
    bullets: [
      'FREE Via-in-Pad (Save Space & Cost)',
      'Reliable ±10% Impedance Control',
    ],
    cta: 'Get Coupon Now',
    ctaLink: '/products',
    overlayOpacity: 0.5,  // 遮罩透明度
    textColor: '#ffffff',
  },
  {
    img: '/images/hero-2.webp',
    tag: 'New Product',
    tagBg: '#0066cc',
    title: 'Flexible Heaters Starting at $1',
    bullets: [
      'Free Engineering Support & Circuit Design',
      'Custom Shapes, Sizes, and Power Ratings',
    ],
    cta: 'Learn More',
    ctaLink: '/products',
    overlayOpacity: 0.5,
    textColor: '#ffffff',
  },
  {
    img: '/images/hero-3.webp',
    tag: 'Upgrade Service',
    tagBg: '#7c3aed',
    title: 'Accelerate PCB Layout Process from $9.9',
    bullets: [
      '200-Pin PCB boards start from only $9.9',
      'Solve component matching for just $10',
    ],
    cta: 'Order Now',
    ctaLink: '/products',
    overlayOpacity: 0.5,
    textColor: '#ffffff',
  },
  {
    img: '/images/hero-4.webp',
    tag: 'Free Coupon',
    tagBg: '#ff6b00',
    title: 'Upgrade to Nano-coated Stencil Free with Coupon',
    bullets: [
      'Faster release, uniform deposits, clean less',
      'SMT stencil from $3, Nano-Coating free with coupon',
    ],
    cta: 'Get Coupon Now',
    ctaLink: '/products',
    overlayOpacity: 0.5,
    textColor: '#ffffff',
  },
]

export function HeroBanner() {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<number[]>([])

  // Preload first slide
  useEffect(() => { setLoaded([0]) }, [])

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % banners.length), 5000)
    return () => clearInterval(t)
  }, [])

  // Track loaded images
  useEffect(() => {
    if (!loaded.includes(active)) {
      setLoaded(s => [...s, active])
    }
  }, [active])

  const goPrev = () => setActive(a => (a - 1 + banners.length) % banners.length)
  const goNext = () => setActive(a => (a + 1) % banners.length)

  const b = banners[active]

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Full-screen background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${b.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          zIndex: 0,
        }}
      />
      
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `rgba(0, 0, 0, ${b.overlayOpacity})`,
          zIndex: 1,
        }}
      />

      {/* Main content - centered */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 60px 180px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '900px',
          opacity: loaded.includes(active) ? 1 : 0,
          transform: loaded.includes(active) ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}>
          <span style={{
            display: 'inline-block',
            background: b.tagBg,
            color: '#fff',
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: '4px',
            marginBottom: '24px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {b.tag}
          </span>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            color: b.textColor,
            lineHeight: 1.2,
            marginBottom: '28px',
            textShadow: '0 4px 8px rgba(0,0,0,0.5)',
          }}>
            {b.title}
          </h1>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '0 0 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}>
            {b.bullets.map((bullet, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: b.textColor,
                fontSize: '1.1rem',
                opacity: 0.95,
                fontWeight: 500,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: b.textColor,
                  flexShrink: 0,
                  opacity: 0.8,
                }} />
                {bullet}
              </li>
            ))}
          </ul>
          <Link
            href={b.ctaLink}
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#0066cc',
              fontWeight: 700,
              padding: '16px 42px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            {b.cta} →
          </Link>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={goPrev}
        style={{
          position: 'absolute',
          left: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          zIndex: 10,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#ffffff'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
        }}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          zIndex: 10,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#ffffff'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
        }}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '140px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10,
      }}>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              background: i === active ? '#ffffff' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.4s ease',
              boxShadow: i === active ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Quick Quote Bar */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1100px',
        padding: '0 40px',
        zIndex: 20,
      }}>
        <QuickQuote />
      </div>
    </div>
  )
}
