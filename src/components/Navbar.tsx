'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      ...(scrolled
        ? { background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 0 rgba(0,102,204,0.06), 0 4px 16px rgba(0,0,0,0.04)' }
        : { background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0' }
      )
    }}>
      <div className="container mx-auto px-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '36px', width: 'auto' }} />
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a2332', lineHeight: 1 }}>DKPCB</div>
              <div style={{ fontSize: '0.6rem', color: '#8896a6', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>Solutions</div>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '0.88rem', fontWeight: 500,
                color: '#5a6678', textDecoration: 'none', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#0066cc'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,102,204,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#5a6678'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/login" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#5a6678', textDecoration: 'none' }}>
              Login
            </Link>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'linear-gradient(135deg, #c49a2b 0%, #0066cc 100%)',
              color: 'white', fontWeight: 600, fontSize: '0.88rem',
              padding: '9px 20px', borderRadius: '50px',
              textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,102,204,0.2)',
            }}>
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
