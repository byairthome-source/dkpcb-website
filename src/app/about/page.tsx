export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About DKPCB</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for high-quality PCB manufacturing and assembly services
          </p>
        </div>

        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DKPCB is a professional PCB manufacturing company based in Dongguan, China. 
            With years of experience in the industry, we specialize in high-quality PCB 
            prototyping and mass production for customers worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our state-of-the-art manufacturing facilities and strict quality control systems 
            ensure that every PCB we produce meets the highest industry standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From simple single-sided boards to complex multi-layer PCBs, we have the 
            expertise and capacity to handle all your PCB needs.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications & Standards</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'RoHS Compliant', desc: 'Environmental' },
              { name: 'IPC Class 2/3', desc: 'Industry Standard' },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Layers', value: '1-32 Layers' },
              { label: 'Material', value: 'FR4, Aluminum, Rogers' },
              { label: 'Min Track/Spacing', value: '3/3 mil' },
              { label: 'Min Hole Size', value: '0.15mm' },
              { label: 'Board Thickness', value: '0.4-3.2mm' },
              { label: 'Surface Finish', value: 'HASL, ENIG, OSP' },
            ].map((cap, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-semibold">{cap.label}:</span>
                <span className="text-gray-700">{cap.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free quote and consultation</p>
          <a 
            href="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
