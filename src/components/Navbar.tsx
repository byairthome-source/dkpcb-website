import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/pages/dkpcb-logo.png" 
              alt="DKPCB Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              DKPCB
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative text-gray-700 hover:text-blue-900 transition-colors font-medium py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium hidden sm:block"
            >
              Login
            </Link>
            <Link
              href="/products"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 animate-pulse-glow"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
