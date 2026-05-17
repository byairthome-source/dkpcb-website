import Link from 'next/link'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textDecoration: 'none', display: 'block', marginBottom: '8px', transition: 'color 0.2s' }}>
      {children}
    </Link>
  )
}

export default function Footer() {
  const cols = [
    {
      title: 'Products',
      links: ['FR-4 PCBs', 'Flexible PCBs', 'Metal Core PCBs', 'High-Frequency PCBs', 'Rigid-Flex PCBs', 'HDI PCBs'],
    },
    {
      title: 'PCBA Services',
      links: ['PCB Assembly', 'Parts Library', 'SMT Stencil', 'PCB Layout', 'DFM Check'],
    },
    {
      title: 'Manufacturing',
      links: ['3D Printing (JLC3DP)', 'CNC Machining (JLCCNC)', 'Sheet Metal', 'Mechatronic Parts'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'How to Order', 'Shipping Info', 'Payment Methods', 'Quality Standards'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Quality Assurance', 'Certifications', 'Newsroom', 'Careers'],
    },
  ]

  return (
    <footer style={{ background: '#111827', color: '#ffffff' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(5, 1fr)', gap: '32px', marginBottom: '48px' }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/pages/dkpcb-logo.png" alt="DKPCB" style={{ height: '30px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>DKPCB</div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Solutions</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '220px' }}>
              Professional PCB manufacturer serving 7M+ customers worldwide. From prototype to mass production.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { name: 'FB', color: '#1877F2' },
                { name: 'TW', color: '#1DA1F2' },
                { name: 'YT', color: '#FF0000' },
                { name: 'IN', color: '#0A66C2' },
              ].map((s) => (
                <div key={s.name} style={{
                  width: '32px', height: '32px', borderRadius: '6px',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="/products" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', textDecoration: 'none', display: 'block', marginBottom: '8px', transition: 'color 0.2s' }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '20px 28px', display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '32px', alignItems: 'center' }}>
          {[
            { icon: '📧', text: 'sales09dk@gmail.com' },
            { icon: '📞', text: '+86-136-0961-1816' },
            { icon: '🕐', text: '24/6 Online Support' },
            { icon: '📍', text: 'Dongguan, Guangdong, China' },
          ].map((c) => (
            <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.9rem' }}>{c.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>{c.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 DKPCB Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <span key={item} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['ISO 9001', 'IPC Certified', 'RoHS', 'UL Listed'].map((item) => (
              <span key={item} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '3px 8px', borderRadius: '4px' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
