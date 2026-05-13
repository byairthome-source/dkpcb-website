import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/pages/dkpcb-logo.png" 
                alt="DKPCB Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">DKPCB</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional PCB manufacturing and assembly services with fast turnaround and quality guarantee.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['📘', '📛', '📔'].map((icon, index) => (
                <div key={index} className="w-10 h-10 rounded-lg bg-white/10 hover:bg-orange-500/20 flex items-center justify-center cursor-pointer transition-colors">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                'Standard PCB',
                'Multi-Layer PCB',
                'Flexible PCB',
                'PCB Assembly',
              ].map((service, index) => (
                <li key={index} className="hover:text-orange-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                { icon: '📧', text: 'sales@dkpcb.com' },
                { icon: '📞', text: '+86-XXX-XXXX-XXXX' },
                { icon: '📍', text: 'Dongguan, China' },
              ].map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0">{contact.icon}</span>
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 DKPCB. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <a key={index} href="#" className="text-sm text-gray-500 hover:text-orange-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
