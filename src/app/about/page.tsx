import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ background: '#1a2b4a', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.01em' }}>
            About DKPCB
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            One-Stop EMS Solution — PCB Design, Manufacturing, Assembly & Enclosures
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#0066cc', padding: '4px 14px', background: 'rgba(0,102,204,0.08)',
                borderRadius: '20px', marginBottom: '12px',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
                About Us
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2332', marginBottom: '16px', letterSpacing: '-0.01em' }}>
                Your One-Stop EMS Partner
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#6b7280', lineHeight: 1.7, fontSize: '0.92rem' }}>
                <p>
                  DKPCB Solutions is a professional <strong style={{ color: '#1a2332' }}>one-stop Electronic Manufacturing Services (EMS)</strong> provider based in Dongguan, China.
                  We specialize in high-quality PCB prototyping, fabrication, assembly, and enclosure manufacturing.
                </p>
                <p>
                  <strong style={{ color: '#1a2332' }}>Our Mission:</strong> Delivering innovative, reliable, and cost-effective
                  PCB solutions that empower our clients to bring their electronic products to market faster.
                </p>
                <p>
                  <strong style={{ color: '#1a2332' }}>Our Vision:</strong> To become the most trusted PCB and electronics manufacturing partner
                  for companies globally, recognized for our technical excellence and customer-first approach.
                </p>
                <p>
                  We offer <strong style={{ color: '#ff6b00' }}>FREE expert advice</strong> at the beginning of your design process —
                  to save time, workload, and costs.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="DKPCB Manufacturing"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                background: '#ffffff', borderRadius: '12px', padding: '16px 20px',
                border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ff6b00' }}>No MOQ</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Prototype to Mass Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#f5f7fa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#ff6b00', padding: '4px 14px', background: 'rgba(255,107,0,0.08)',
              borderRadius: '20px', marginBottom: '12px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff6b00', display: 'inline-block' }}/>
              Why DKPCB
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2332' }}>Why Partner With Us</h2>
            <p style={{ color: '#6b7280', marginTop: '8px', fontSize: '0.95rem' }}>What sets us apart from other PCB manufacturers</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { icon: '💬', title: 'Clear Communication', desc: 'Direct access to our engineering team' },
              { icon: '🔍', title: 'Free DFM Check', desc: 'Design for Manufacturability analysis' },
              { icon: '📦', title: 'No MOQ', desc: 'Order from 1 piece to mass production' },
              { icon: '✅', title: 'Quality Control', desc: 'Rigorous quality management at every step' },
              { icon: '🚚', title: 'On-Time Delivery', desc: 'Reliable production scheduling' },
              { icon: '💰', title: 'Cost Saving', desc: 'Factory-direct pricing, transparent quotes' },
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '24px', borderRadius: '12px',
                background: '#ffffff', border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a2332', marginBottom: '4px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#0066cc', padding: '4px 14px', background: 'rgba(0,102,204,0.08)',
              borderRadius: '20px', marginBottom: '12px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
              What We Offer
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2332' }}>Our Services</h2>
            <p style={{ color: '#6b7280', marginTop: '8px', fontSize: '0.95rem', maxWidth: '500px', margin: '8px auto 0' }}>
              From initial design to final product — everything you need under one roof
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { icon: '🎨', title: 'PCB Design', desc: 'Professional layout design, DFM analysis, schematic capture', color: '#0066cc' },
              { icon: '🔧', title: 'PCBA Assembly', desc: 'SMT/DIP assembly, BOM procurement, functional testing', color: '#10b981' },
              { icon: '⚙️', title: 'Enclosures', desc: 'Injection molding, CNC machining, sheet metal, 3D printing', color: '#8b5cf6' },
              { icon: '🏭', title: 'PCB Manufacturing', desc: '1-32 layers, HDI, Heavy Copper, RF, Flexible, Ceramic', color: '#ff6b00' },
            ].map((service, i) => (
              <div key={i} style={{
                background: '#ffffff', borderRadius: '12px', padding: '24px',
                border: '1px solid #e5e7eb', transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: `${service.color}10`, border: `1px solid ${service.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', marginBottom: '14px',
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2332', marginBottom: '6px' }}>{service.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: '#f5f7fa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#0066cc', padding: '4px 14px', background: 'rgba(0,102,204,0.08)',
              borderRadius: '20px', marginBottom: '12px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
              Technical
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2332' }}>PCB Manufacturing Capabilities</h2>
            <p style={{ color: '#6b7280', marginTop: '8px', fontSize: '0.95rem' }}>Industry-leading specifications for the most demanding applications</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { label: 'PCB Layers', value: '1 - 32 Layers' },
              { label: 'Board Thickness', value: '0.4 - 3.2mm' },
              { label: 'Min Track / Spacing', value: '3/3 mil' },
              { label: 'Min Hole Size', value: '0.15mm (6mil)' },
              { label: 'Blind & Buried Vias', value: 'Yes — Full Support' },
              { label: 'HDI PCB', value: 'Yes — Any Layer' },
              { label: 'Heavy Copper', value: 'Up to 6 oz' },
              { label: 'RF / Microwave', value: 'Rogers 3010, 4350B' },
              { label: 'Ceramic PCB', value: 'Alumina (Al₂O₃), AlN' },
              { label: 'Flexible / Rigid-Flex', value: 'Yes — Full Support' },
              { label: 'Surface Finish', value: 'HASL, ENIG, OSP, Immersion Tin' },
              { label: 'Quality Standard', value: 'IPC Class 2 & 3' },
            ].map((cap, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600, color: '#4b5563', fontSize: '0.85rem' }}>{cap.label}</span>
                <span style={{ color: '#0066cc', fontWeight: 600, fontSize: '0.85rem' }}>{cap.value}</span>
              </div>
            ))}
          </div>

          {/* Testing */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '16px' }}>Testing & Quality Assurance</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {[
                '100% Electrical Test', 'AOI Inspection', 'X-ray Inspection', 'Flying Probe Test',
                'IMS / IQC / IPC / OQC', 'Solderability Test', 'Cross-Section Analysis', 'Thermal Cycling Test',
              ].map((test, i) => (
                <span key={i} style={{ padding: '6px 14px', borderRadius: '6px', background: '#ffffff', border: '1px solid #e5e7eb', fontSize: '0.8rem', color: '#4b5563', fontWeight: 500 }}>
                  <span style={{ color: '#10b981', marginRight: '4px' }}>✓</span>{test}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#0066cc', padding: '4px 14px', background: 'rgba(0,102,204,0.08)',
              borderRadius: '20px', marginBottom: '12px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
              Quality
            </div>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#1a2332' }}>Certifications & Standards</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px' }}>
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'IPC Class 2', desc: 'Industry Standard' },
              { name: 'IPC Class 3', desc: 'Industry Standard' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'RoHS', desc: 'Environmental' },
              { name: 'CE', desc: 'European Compliance' },
            ].map((cert, i) => (
              <div key={i} style={{
                background: '#f9fafb', border: '1px solid #f3f4f6',
                borderRadius: '10px', padding: '22px 10px', textAlign: 'center',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 10px',
                  background: 'rgba(0,102,204,0.08)', border: '1px solid rgba(0,102,204,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: 800, color: '#0066cc',
                }}>
                  {cert.name.slice(0, 2)}
                </div>
                <div style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.82rem' }}>{cert.name}</div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '3px' }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1a2b4a', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px', fontSize: '0.95rem' }}>
            Upload your Gerber files and BOM, or just tell us your idea — our team provides free consultation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '0.95rem',
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            >
              Get PCB Quote
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1.5px solid rgba(255,255,255,0.4)', color: 'white',
              fontWeight: 600, fontSize: '0.95rem',
              padding: '14px 28px', borderRadius: '8px',
              textDecoration: 'none', background: 'rgba(255,255,255,0.06)', transition: 'all 0.2s ease',
            }}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
