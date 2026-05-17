import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export { metadata } from './metadata'

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
            One-Stop EMS Solution — PCB Design, Manufacturing, Assembly & Enclosures
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase">About Us</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Your One-Stop EMS Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DKPCB Solutions is a professional <strong className="text-blue-900">one-stop Electronic Manufacturing Services (EMS)</strong> provider based in Dongguan, China. 
                  We specialize in high-quality PCB prototyping, fabrication, assembly, and enclosure manufacturing — serving customers worldwide with comprehensive end-to-end solutions.
                </p>
                <p>
                  <strong className="text-blue-900">Our Mission:</strong> Delivering innovative, reliable, and cost-effective 
                  PCB solutions that empower our clients to bring their electronic products to market faster.
                </p>
                <p>
                  <strong className="text-blue-900">Our Vision:</strong> To become the most trusted PCB and electronics manufacturing partner 
                  for companies globally, recognized for our technical excellence and customer-first approach.
                </p>
                <p>
                  We offer <strong className="text-orange-500">FREE expert advice</strong> at the beginning of your design process — 
                  to save time, workload, and costs — helping your product go from concept to production smoothly.
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
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-bold text-orange-500">No MOQ</div>
                <div className="text-sm text-gray-600">Prototype to Mass Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Business Matrix */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold tracking-wider uppercase">Why DKPCB</span>
            <h2 className="text-4xl font-bold mt-2">Why Partner With Us</h2>
            <p className="text-white/70 mt-2">What sets us apart from other PCB manufacturers</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { icon: '💬', title: 'Unobstructed Communication', desc: 'Direct access to our engineering team' },
              { icon: '🔍', title: 'Free DFM Check', desc: 'Design for Manufacturability analysis' },
              { icon: '📦', title: 'No MOQ', desc: 'Order from 1 piece to mass production' },
              { icon: '✅', title: 'Defect & Quality Control', desc: 'Rigorous quality management at every step' },
              { icon: '🚚', title: 'On-Time Delivery', desc: 'Reliable production scheduling' },
              { icon: '💰', title: 'Cost Saving', desc: 'Factory-direct pricing, transparent quotes' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">What We Offer</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From initial design to final product — everything you need under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🎨', 
                title: 'PCB Design', 
                desc: 'Professional layout design, DFM analysis, schematic capture, component library management',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: '🔧', 
                title: 'PCBA Assembly', 
                desc: 'SMT/DIP assembly, BOM procurement, functional testing (FCT), aging tests, packaging',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: '⚙️', 
                title: 'Enclosures', 
                desc: 'Injection molding, CNC machining, sheet metal, 3D printing. Materials: ABS, PC, Aluminum, Steel',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: '🏭', 
                title: 'PCB Manufacturing', 
                desc: '1-32 layers, HDI, Heavy Copper, RF/Microwave, Flexible, Rigid-Flex, Ceramic',
                color: 'from-orange-500 to-red-500'
              },
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCBA Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase">PCBA Services</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Full-Circuit Assembly
              </h2>
              <div className="space-y-3">
                {[
                  'Fully automated SMT (Surface Mount) assembly',
                  'DIP (Dual In-line Package) insertion processing',
                  'Component procurement & BOM optimization',
                  'Functional Testing (FCT) and aging tests',
                  'Conformal coating for harsh environments',
                  'Secure packaging and logistics support',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" 
                alt="PCBA Assembly"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enclosures Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Enclosures & Parts</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Electronic Device Enclosures
            </h2>
            <p className="text-gray-600 mt-2">Complete enclosure solutions from design to mass production</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Materials */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🧱</span> Materials
              </h3>
              <div className="space-y-2">
                {['ABS Plastic', 'PC (Polycarbonate)', 'Aluminum', 'Stainless Steel'].map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> {m}
                  </div>
                ))}
              </div>
            </div>
            {/* Processes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Manufacturing Processes
              </h3>
              <div className="space-y-2">
                {['Plastic Injection Molding', 'Sheet Metal Fabrication', 'CNC Machining', '3D Printing / Rapid Prototyping', 'Die-Casting'].map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> {m}
                  </div>
                ))}
              </div>
            </div>
            {/* Surface Treatment */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Surface Treatments
              </h3>
              <div className="space-y-2">
                {['Sand Blasting & Anodizing', 'Powder Coating', 'Electroplating', 'Silk-Screen Printing', 'Laser Marking'].map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> {m}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            💡 ID/MD design consultation available — we help ensure your enclosure perfectly fits the internal electronic components
          </p>
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

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'ISO', desc: 'Manufacturing Standard' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'IPC Class 2/3', desc: 'Industry Standard' },
              { name: 'RoHS', desc: 'Environmental' },
              { name: 'CE', desc: 'European Compliance' },
            ].map((cert, index) => (
              <div key={index} className="group glass rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm">
                  {cert.name.slice(0, 2)}
                </div>
                <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-500">{cert.desc}</p>
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
            <h2 className="text-4xl font-bold mt-2">PCB Manufacturing Capabilities</h2>
            <p className="text-white/70 mt-2">Industry-leading specifications for the most demanding applications</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'PCB Layers', value: '1 - 32 Layers' },
              { label: 'Board Thickness', value: '0.4 - 3.2mm' },
              { label: 'Min Track / Spacing', value: '3/3 mil' },
              { label: 'Min Hole Size', value: '0.15mm (6mil)' },
              { label: 'Blind & Buried Vias', value: 'Yes — Full Support' },
              { label: 'HDI PCB', value: 'Yes — Any Layer' },
              { label: 'Heavy Copper', value: 'Up to 6 oz' },
              { label: 'RF / Microwave', value: 'Rogers 3010, 4350B, etc.' },
              { label: 'Ceramic PCB', value: 'Alumina (Al₂O₃), AlN' },
              { label: 'Flexible / Rigid-Flex', value: 'Yes — Full Support' },
              { label: 'Surface Finish', value: 'HASL, ENIG, OSP, Immersion Tin' },
              { label: 'Quality Standard', value: 'IPC Class 2 & 3' },
            ].map((cap, index) => (
              <div key={index} className="flex justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <span className="font-semibold text-white/80 text-sm">{cap.label}:</span>
                <span className="text-orange-400 font-medium text-sm">{cap.value}</span>
              </div>
            ))}
          </div>

          {/* Supported Materials */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-4">Supported PCB Materials</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'FR4', 'FR4 High-TG', 'CEM-1', 'CEM-3',
                'Aluminum Core', 'Rogers 3010', 'Rogers 4350B',
                'Panasonic M6', 'Isola 370HR', 'Dupont AP8515',
                'Alumina Ceramic', 'AlN Ceramic', 'Thermo-electric Separation',
              ].map((mat, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 border border-white/20">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-4">Testing & Quality Assurance</h3>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                '100% Electrical Test', 'AOI Inspection', 'X-ray Inspection', 'Flying Probe Test',
                'IMS / IQC / IPC / OQC', 'Solderability Test', 'Cross-Section Analysis', 'Thermal Cycling Test',
              ].map((test, i) => (
                <div key={i} className="text-center p-3 rounded-lg bg-white/5 text-sm">
                  <span className="text-orange-400">✓</span> {test}
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
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your Gerber files and BOM, or just tell us your idea — our team provides free consultation and DFM analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Get PCB Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
