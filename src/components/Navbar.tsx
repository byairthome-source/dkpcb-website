'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menus = {
    support: [
      { label: 'Help Center', desc: 'FAQs & guides' },
      { label: 'How to Order', desc: 'Step-by-step tutorial' },
      { label: 'Shipping Info', desc: 'Delivery options' },
      { label: 'Payment Methods', desc: 'Secure checkout' },
    ],
    about: [
      { label: 'About DKPCB', desc: 'Our story & mission' },
      { label: 'Quality Assurance', desc: 'ISO & IPC standards' },
      { label: 'Certifications', desc: 'ISO 9001, UL, RoHS' },
      { label: 'Contact Us', desc: 'Get in touch' },
    ],
  }

  return (
    <>
      {/* Top Bar */}
      <div style={{
        background: '#0a0a0a',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
            24-hour PCB production. Fast Delivery to United States.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/products" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              Coupons
            </Link>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              APP Download
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              USD
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '34px', width: 'auto' }} />
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a2332', lineHeight: 1 }}>DKPCB</div>
              <div style={{ fontSize: '0.6rem', color: '#8896a6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Solutions</div>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }}>
            {/* Home */}
            <Link href="/" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 16px', borderRadius: '4px',
              fontSize: '0.88rem', fontWeight: 500,
              color: pathname === '/' ? '#ffffff' : '#374151',
              textDecoration: 'none',
              background: pathname === '/' ? '#0066cc' : 'transparent',
              transition: 'all 0.15s',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home
            </Link>

            {/* Products */}
            <Link href="/products" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 16px', borderRadius: '4px',
              fontSize: '0.88rem', fontWeight: 500,
              color: pathname.startsWith('/products') ? '#ffffff' : '#374151',
              textDecoration: 'none',
              background: pathname.startsWith('/products') ? '#0066cc' : 'transparent',
              transition: 'all 0.15s',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              Products
            </Link>

            <Link href="/about" style={{
              padding: '8px 16px', borderRadius: '6px',
              fontSize: '0.88rem', fontWeight: 500,
              color: pathname.startsWith('/about') ? '#0066cc' : '#374151',
              textDecoration: 'none', transition: 'all 0.15s',
            }}>
              Capabilities
            </Link>

            {/* Support Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setMenuOpen('support')} onMouseLeave={() => setMenuOpen(null)}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '8px 16px', borderRadius: '6px',
                fontSize: '0.88rem', fontWeight: 500,
                color: pathname.startsWith('/contact') ? '#0066cc' : '#374151',
                cursor: 'pointer', background: menuOpen === 'support' ? '#f0f7ff' : 'transparent',
              }}>
                Support
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              {menuOpen === 'support' && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: '#fff', borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e5e7eb',
                  padding: '8px', minWidth: '220px', zIndex: 200,
                }}>
                  {menus.support.map((s) => (
                    <Link key={s.label} href="/contact" style={{
                      display: 'block', padding: '10px 14px', borderRadius: '6px',
                      textDecoration: 'none', transition: 'background 0.15s',
                    }} onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f7ff')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a2b4a' }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setMenuOpen('about')} onMouseLeave={() => setMenuOpen(null)}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '8px 16px', borderRadius: '6px',
                fontSize: '0.88rem', fontWeight: 500,
                color: pathname.startsWith('/about') ? '#0066cc' : '#374151',
                cursor: 'pointer', background: menuOpen === 'about' ? '#f0f7ff' : 'transparent',
              }}>
                About Us
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              {menuOpen === 'about' && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: '#fff', borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e5e7eb',
                  padding: '8px', minWidth: '220px', zIndex: 200,
                }}>
                  {menus.about.map((s) => (
                    <Link key={s.label} href={s.label === 'Contact Us' ? '/contact' : '/about'} style={{
                      display: 'block', padding: '10px 14px', borderRadius: '6px',
                      textDecoration: 'none', transition: 'background 0.15s',
                    }} onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f7ff')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a2b4a' }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Search */}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            {/* Cart */}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </button>
            {/* Order Now */}
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#fff', color: '#0066cc', fontWeight: 600, fontSize: '0.82rem',
              padding: '7px 18px', borderRadius: '20px', textDecoration: 'none',
              border: '1px solid #0066cc', transition: 'all 0.2s',
            }}>
              Order Now
            </Link>
            {/* Sign In */}
            <Link href="/login" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#0066cc', color: '#fff', fontWeight: 600, fontSize: '0.82rem',
              padding: '7px 18px', borderRadius: '20px', textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
