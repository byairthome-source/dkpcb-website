'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav scrolled' : 'bg-white/80'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <img 
              src="/pages/dkpcb-logo.png" 
              alt="DKPCB" 
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-[#1a2332] tracking-tight">DKPCB</span>
              <span className="text-[10px] text-[#8896a6] tracking-widest uppercase -mt-0.5">Solutions</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-sm font-medium text-[#5a6678] hover:text-[#0066cc] transition-colors duration-200 rounded-lg hover:bg-[#0066cc]/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-sm font-medium text-[#5a6678] hover:text-[#0066cc] transition-colors duration-200 hidden sm:block"
            >
              Login
            </Link>
            <Link
              href="/products"
              className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              Get Quote
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
