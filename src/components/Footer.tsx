import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-16 relative overflow-hidden">
      {/* Subtle circuit background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3Ccircle cx='30' cy='30' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/pages/dkpcb-logo.png" 
                alt="DKPCB Logo" 
                className="h-9 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-lg font-bold">DKPCB</span>
                <span className="block text-[10px] text-white/40 tracking-widest uppercase -mt-0.5">Solutions</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              One-Stop EMS solutions for global clients. PCB manufacturing, assembly, and enclosures — from prototype to mass production.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', icon: 'in' },
                { label: 'Twitter', icon: 'X' },
                { label: 'YouTube', icon: '▶' },
              ].map((s) => (
                <div 
                  key={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0066cc]/30 border border-white/10 hover:border-[#0066cc]/30 flex items-center justify-center text-xs font-bold text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
                  title={s.label}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products & Quote', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Admin Portal', href: '/login' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-[#c49a2b]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PCB Services */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">PCB Services</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {[
                'Multi-Layer PCB (1-32 Layers)',
                'HDI PCB & Any Layer',
                'RF / Microwave PCB',
                'Heavy Copper PCB',
                'Flexible / Rigid-Flex PCB',
                'Ceramic PCB (Alumina / AlN)',
                'PCB Assembly (PCBA)',
                'Enclosures & CNC Parts',
              ].map((service, i) => (
                <li key={i} className="hover:text-white/70 transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              {[
                { icon: '📧', text: 'sales09dk@gmail.com' },
                { icon: '📞', text: '+86-136-0961-1816' },
                { icon: '🏭', text: 'Dongguan, Guangdong, China' },
                { icon: '🕐', text: 'Response: within 2 hours' },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5">{c.icon}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Business Hours</div>
              <div className="text-sm text-white/50">Mon – Fri: 9:00 – 18:00 (CST)</div>
              <div className="text-sm text-white/50">Sat – Sun: Closed</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            © 2026 DKPCB Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">ISO 9001 Certified</span>
            <span className="text-xs text-white/20">|</span>
            <span className="text-xs text-white/20">IPC Class 2 & 3</span>
            <span className="text-xs text-white/20">|</span>
            <span className="text-xs text-white/20">RoHS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
