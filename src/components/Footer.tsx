export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DKPCB</h3>
            <p className="text-gray-400 text-sm">
              Professional PCB manufacturing and assembly services with fast turnaround and quality guarantee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="text-gray-400 hover:text-white">PCB Quote</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Standard PCB</span></li>
              <li><span className="text-gray-400">Multi-Layer PCB</span></li>
              <li><span className="text-gray-400">Flexible PCB</span></li>
              <li><span className="text-gray-400">PCB Assembly</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: sales@dkpcb.com</li>
              <li>Phone: +86-XXX-XXXX-XXXX</li>
              <li>Address: Dongguan, China</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 DKPCB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
