import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">About DKPCB</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-slide-up stagger-2">
            Your trusted partner for high-quality PCB manufacturing and assembly services
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DKPCB is a professional PCB manufacturing company based in Dongguan, China. 
                  With years of experience in the industry, we specialize in high-quality PCB 
                  prototyping and mass production for customers worldwide.
                </p>
                <p>
                  Our state-of-the-art manufacturing facilities and strict quality control systems 
                  ensure that every PCB we produce meets the highest industry standards.
                </p>
                <p>
                  From simple single-sided boards to complex multi-layer PCBs, we have the 
                  expertise and capacity to handle all your PCB needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                  alt="DKPCB Manufacturing"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-bold text-orange-500">10M+</div>
                <div className="text-sm text-gray-600">PCBs Produced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Images Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Facilities</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Our Manufacturing Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80', title: 'Production Floor', desc: 'Automated SMT assembly line' },
              { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', title: 'Quality Control', desc: 'AOI inspection station' },
              { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80', title: 'Clean Room', desc: 'ISO Class 7 environment' },
              { src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&q=80', title: 'Testing Lab', desc: 'Electrical test equipment' },
              { src: 'https://images.unsplash.com/photo-1581092455231-5c8e74f8e1a9?w=600&q=80', title: 'Warehouse', desc: 'Component storage' },
              { src: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80', title: 'R&D Center', desc: 'New product development' },
            ].map((img, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg">{img.title}</h3>
                  <p className="text-sm text-white/70">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Quality</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Certifications & Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'ISO 9001', desc: 'Quality Management', icon: '🏆' },
              { name: 'UL Certified', desc: 'Safety Standard', icon: '🛡️' },
              { name: 'RoHS Compliant', desc: 'Environmental', icon: '🌱' },
              { name: 'IPC Class 2/3', desc: 'Industry Standard', icon: '⭐' },
            ].map((cert, index) => (
              <div key={index} className="group glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold tracking-wider uppercase">Technical</span>
            <h2 className="text-4xl font-bold mt-2">Manufacturing Capabilities</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Layers', value: '1-32 Layers' },
                { label: 'Material', value: 'FR4, Aluminum, Rogers' },
                { label: 'Min Track/Spacing', value: '3/3 mil' },
                { label: 'Min Hole Size', value: '0.15mm' },
                { label: 'Board Thickness', value: '0.4-3.2mm' },
                { label: 'Surface Finish', value: 'HASL, ENIG, OSP' },
              ].map((cap, index) => (
                <div key={index} className="flex justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="font-semibold">{cap.label}:</span>
                  <span className="text-orange-400">{cap.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free quote and consultation</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Get a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
