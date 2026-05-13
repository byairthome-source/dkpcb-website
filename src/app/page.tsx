import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">DKPCB - Professional PCB Manufacturing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            High-quality PCB prototyping and manufacturing services with fast turnaround. 
            Get instant quotes for your PCB projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DKPCB?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">24H Quick Turn</h3>
              <p className="text-gray-600">Fast prototyping and production with 24-hour turnaround available</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Quality Certified</h3>
              <p className="text-gray-600">ISO 9001, UL, and RoHS certified manufacturing facilities</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Shipping</h3>
              <p className="text-gray-600">Worldwide delivery with reliable logistics partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* PCB Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our PCB Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Standard PCB', desc: 'Single & double sided PCBs with FR4 material' },
              { title: 'Multi-Layer PCB', desc: 'Up to 32 layers with high-density interconnect' },
              { title: 'Flexible PCB', desc: 'Flex and rigid-flex circuits for dynamic applications' },
              { title: 'Aluminum PCB', desc: 'Metal core PCBs for high-power LED applications' },
            ].map((pcb, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{pcb.title}</h3>
                <p className="text-gray-600 text-sm">{pcb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your PCB Project?</h2>
          <p className="text-xl mb-8">Upload your Gerber files and get an instant quote today!</p>
          <Link 
            href="/products" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Upload Files Now
          </Link>
        </div>
      </section>
    </main>
  )
}
