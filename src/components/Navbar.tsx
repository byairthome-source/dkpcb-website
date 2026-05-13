import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/pages/dkpcb-logo.png" 
              alt="DKPCB Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-blue-900">DKPCB</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-900 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
