import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1a2b4a', color: '#ffffff', paddingTop: '64px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>DKPCB</div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Solutions</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '20px' }}>
              One-Stop EMS solutions for global clients. PCB manufacturing, assembly, and enclosures — from prototype to mass production.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['LinkedIn', 'Twitter', 'YouTube'].map((s) => (
                <div
                  key={s}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'PCB Service', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Admin Portal', href: '/login' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PCB Services */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>PCB Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Multi-Layer PCB (1-32L)',
                'HDI PCB & Any Layer',
                'RF / Microwave PCB',
                'Heavy Copper PCB',
                'Flexible / Rigid-Flex',
                'Ceramic PCB',
                'PCB Assembly (PCBA)',
                'Enclosures & CNC Parts',
              ].map((service, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '📧', text: 'sales09dk@gmail.com' },
                { icon: '📞', text: '+86-136-0961-1816' },
                { icon: '📍', text: 'Dongguan, Guangdong, China' },
                { icon: '🕐', text: 'Response within 2 hours' },
              ].map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                  <span style={{ flexShrink: 0, fontSize: '0.9rem' }}>{c.icon}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 DKPCB Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {['ISO 9001 Certified', 'IPC Class 2 & 3', 'RoHS Compliant'].map((item, i) => (
              <span key={i} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
