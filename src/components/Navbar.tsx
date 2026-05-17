'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'PCB Service' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? '#ffffff' : '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '34px', width: 'auto' }} />
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a2332', lineHeight: 1 }}>DKPCB</div>
            <div style={{ fontSize: '0.58rem', color: '#8896a6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Solutions</div>
          </div>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#4b5563',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/login"
            style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            Login
          </Link>
          <Link
            href="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ff6b00',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.88rem',
              padding: '9px 22px',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
