'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 80
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else { setCount(Math.floor(current * 10) / 10) }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 900 }}>
      {prefix}{count % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}{suffix}
    </span>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: '#0066cc', padding: '4px 14px', background: 'rgba(0,102,204,0.08)',
      borderRadius: '20px',
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
      {children}
    </div>
  )
}

export default function Home() {
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        paddingTop: '100px',
        paddingBottom: '64px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ opacity: 0, animation: 'slideUp 0.6s ease forwards' }}>
                <SectionLabel>ISO 9001 · Global Delivery · One-Stop EMS</SectionLabel>
              </div>
              <div style={{ opacity: 0, animation: 'slideUp 0.7s ease forwards', animationDelay: '0.1s' }}>
                <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a2332', marginBottom: '16px' }}>
                  PCB Manufacturing &<br/>
                  <span style={{ color: '#0066cc' }}>Assembly Services</span>
                </h1>
                <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: 1.7, maxWidth: '480px' }}>
                  Professional PCB fabrication & PCBA from prototype to mass production.
                  Serving 50+ countries with ISO 9001 certified quality and free DFM check.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', opacity: 0, animation: 'slideUp 0.7s ease forwards', animationDelay: '0.2s' }}>
                <Link href="/products" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                  padding: '14px 28px', borderRadius: '8px',
                  textDecoration: 'none',
                }}>
                  Get Instant Quote
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1.5px solid #0066cc', color: '#0066cc',
                  fontWeight: 600, fontSize: '0.95rem',
                  padding: '14px 28px', borderRadius: '8px',
                  textDecoration: 'none', background: 'white',
                }}>
                  View Capabilities
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0, animation: 'slideUp 0.7s ease forwards', animationDelay: '0.3s' }}>
                {[
                  { icon: '⚡', text: 'Rapid Fab & Assembly — As fast as 24 hours' },
                  { icon: '✅', text: 'Guaranteed Quality — 99.8% product quality rate' },
                  { icon: '🚚', text: 'Fast Global Delivery — DHL, FedEx worldwide' },
                  { icon: '🎯', text: 'Tailored Solutions — Free DFM & expert advice' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#6b7280' }}>
                    <span style={{ fontSize: '0.95rem' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ opacity: 0, animation: 'fadeIn 1s ease forwards', animationDelay: '0.3s' }}>
              <div style={{
                background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px',
                padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '20px' }}>
                  Quick PCB Quote
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  {[
                    { label: 'Layers', val: '2 Layers' },
                    { label: 'Dimensions', val: '100 x 100 mm' },
                    { label: 'Quantity', val: '10 pcs' },
                    { label: 'Material', val: 'FR4 Standard' },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f9fafb' }}>
                      <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginBottom: '2px' }}>{f.label}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>{f.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Starting from</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ff6b00' }}>$5.00</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                    Build Time: 24 hours
                  </div>
                </div>
                <Link href="/products" style={{
                  display: 'block', textAlign: 'center',
                  background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                  padding: '14px 0', borderRadius: '8px',
                  textDecoration: 'none',
                }}>
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#f5f7fa', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { num: 500, suffix: '+', label: 'Global Clients', icon: '🌐' },
              { num: 10000000, suffix: '+', label: 'PCBs Produced', icon: '🔧' },
              { num: 99.8, suffix: '%', label: 'Quality Pass Rate', icon: '✅' },
              { num: 32, suffix: '', label: 'Max PCB Layers', icon: '📊' },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{
                textAlign: 'center', padding: '40px 20px',
                borderRight: i < 3 ? '1px solid #e5e7eb' : 'none',
                transitionDelay: `${i * 0.1}s`
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0066cc', lineHeight: 1 }}>
                  <AnimatedNumber target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <SectionLabel>Our Services</SectionLabel>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a2332', marginTop: '14px', letterSpacing: '-0.01em' }}>
              All-in-One Electronics Manufacturing
            </h2>
            <p style={{ color: '#6b7280', marginTop: '10px', fontSize: '1rem', maxWidth: '560px', margin: '10px auto 0', lineHeight: 1.7 }}>
              From PCB fabrication to final assembly and enclosures — everything under one roof.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              {
                title: 'FR-4 PCBs', subtitle: '1 – 32 Layers',
                desc: 'Standard, high-TG, and multilayer PCBs with free DFM analysis.',
                price: 'From $2.00 / 5 pcs', time: '24h Build Time', color: '#0066cc',
                features: ['1-32 layers', 'Free POFV for 6+ layers', 'Blind/buried vias'],
              },
              {
                title: 'Flexible PCBs', subtitle: 'FPC & Rigid-Flex',
                desc: 'Polyimide and PET-based flexible circuits for dynamic applications.',
                price: 'Custom Quote', time: '3-5 Days', color: '#10b981',
                features: ['Polyimide', 'Rigid-Flex', 'Fine pitch'],
              },
              {
                title: 'PCB Assembly', subtitle: 'SMT & DIP',
                desc: 'Full-turnkey assembly with component sourcing and testing.',
                price: 'From $7.00', time: '24h Build Time', color: '#f59e0b',
                features: ['SMT & THT', 'BGA rework', 'Functional test'],
              },
              {
                title: 'Enclosures', subtitle: 'CNC & Injection',
                desc: 'Aluminum, ABS, and PC enclosures with surface treatments.',
                price: 'Custom Quote', time: '5-7 Days', color: '#8b5cf6',
                features: ['CNC machining', 'Injection molding', 'Anodizing'],
              },
            ].map((card, i) => (
              <div key={i} className="reveal" style={{
                background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
                padding: '24px', transition: 'all 0.3s ease',
                transitionDelay: `${i * 0.08}s`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a2332' }}>{card.title}</h3>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: card.color, background: `${card.color}12`, padding: '3px 10px', borderRadius: '20px' }}>
                    {card.subtitle}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '14px', minHeight: '40px' }}>{card.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  {card.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#6b7280' }}>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ff6b00' }}>{card.price}</div>
                  <div style={{ fontSize: '0.72rem', color: '#0066cc', fontWeight: 600, marginTop: '2px' }}>{card.time}</div>
                </div>
                <Link href="/products" style={{
                  display: 'block', textAlign: 'center',
                  background: card.color, color: 'white', fontWeight: 600, fontSize: '0.82rem',
                  padding: '10px 0', borderRadius: '6px',
                  textDecoration: 'none',
                }}>
                  Quote Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DKPCB */}
      <section style={{ background: '#f5f7fa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div className="reveal">
              <SectionLabel>Why DKPCB</SectionLabel>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2332', marginTop: '14px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                One-Stop EMS Partner<br/>Built on Trust
              </h2>
              <p style={{ color: '#6b7280', marginTop: '14px', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We provide comprehensive PCB and electronics manufacturing — from design consultation to global delivery. Every step managed by our team.
              </p>

              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '🔍', title: 'Free DFM Check', desc: 'Our engineers review your design before production to catch issues early.' },
                  { icon: '📦', title: 'No Minimum Order', desc: 'Order from 1 piece for prototyping or scale to mass production.' },
                  { icon: '✅', title: 'ISO 9001 Certified', desc: 'Strict quality management with 100% E-test and AOI inspection.' },
                  { icon: '🚚', title: 'On-Time Delivery', desc: 'Reliable production scheduling with 99.8% on-time rate.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '8px', flexShrink: 0,
                      background: '#ffffff', border: '1px solid #e5e7eb',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.9rem', marginBottom: '2px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2332', marginBottom: '24px' }}>Our Process</h3>
                {[
                  { step: '01', title: 'Design Review', desc: 'Share Gerber files. Free DFM analysis within 4 hours.', color: '#0066cc' },
                  { step: '02', title: 'Prototype', desc: '24h–5 day sample production with test reports.', color: '#f59e0b' },
                  { step: '03', title: 'Mass Production', desc: 'Scalable manufacturing with IPC quality at every stage.', color: '#10b981' },
                  { step: '04', title: 'Global Delivery', desc: 'DHL, FedEx or sea freight to your door. Trackable.', color: '#0066cc' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: i < 3 ? '24px' : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                        background: `${s.color}10`, border: `1.5px solid ${s.color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: s.color }}>{s.step}</span>
                      </div>
                      {i < 3 && <div style={{ width: '1.5px', flex: 1, minHeight: '20px', background: `linear-gradient(180deg, ${s.color}20, transparent)`, marginTop: '6px' }}/>}
                    </div>
                    <div style={{ paddingTop: '2px' }}>
                      <h4 style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.88rem', marginBottom: '2px' }}>{s.title}</h4>
                      <p style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a2332', marginTop: '14px' }}>
              PCB Manufacturing Capabilities
            </h2>
          </div>

          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
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
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', borderRadius: '8px', background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <span style={{ fontWeight: 600, color: '#4b5563', fontSize: '0.85rem' }}>{cap.label}</span>
                <span style={{ color: '#0066cc', fontWeight: 600, fontSize: '0.85rem' }}>{cap.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section style={{ background: '#f5f7fa', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }} className="reveal">
            <SectionLabel>Materials</SectionLabel>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a2332', marginTop: '12px' }}>
              Supported PCB Materials
            </h2>
          </div>

          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {[
              { label: 'FR4 Standard', color: '#0066cc' },
              { label: 'FR4 High-TG', color: '#0066cc' },
              { label: 'CEM-1', color: '#0066cc' },
              { label: 'CEM-3', color: '#0066cc' },
              { label: 'Aluminum Core', color: '#f59e0b' },
              { label: 'Rogers 3010', color: '#10b981' },
              { label: 'Rogers 4350B', color: '#10b981' },
              { label: 'Panasonic M6', color: '#10b981' },
              { label: 'Isola 370HR', color: '#10b981' },
              { label: 'Dupont AP8515', color: '#8b5cf6' },
              { label: 'Alumina Ceramic', color: '#ef4444' },
              { label: 'AlN Ceramic', color: '#ef4444' },
              { label: 'Heavy Copper 6oz', color: '#f59e0b' },
              { label: 'Flexible Substrates', color: '#8b5cf6' },
            ].map((mat, i) => (
              <div key={i} style={{
                padding: '7px 16px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                background: 'white', border: `1px solid ${mat.color}25`, color: mat.color,
              }}>
                {mat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
            <SectionLabel>Quality</SectionLabel>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#1a2332', marginTop: '12px' }}>
              Certified Quality Standards
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }} className="reveal">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'IPC Class 2', desc: 'Industry Standard' },
              { name: 'IPC Class 3', desc: 'Industry Standard' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'RoHS', desc: 'Environmental' },
              { name: 'CE', desc: 'Europe Compliance' },
            ].map((cert, i) => (
              <div key={i} style={{
                background: '#f9fafb', border: '1px solid #f3f4f6',
                borderRadius: '10px', padding: '24px 12px', textAlign: 'center',
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
      <section style={{ background: '#1a2b4a', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="reveal">
            <SectionLabel>Start Your Project</SectionLabel>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '14px', letterSpacing: '-0.01em' }}>
              Ready to Bring Your PCB to Life?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '12px', fontSize: '1rem', maxWidth: '520px', margin: '12px auto 0', lineHeight: 1.7 }}>
              Upload your Gerber files and get an instant quote. Our team responds within 2 hours.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '1rem',
                padding: '14px 32px', borderRadius: '8px',
                textDecoration: 'none',
              }}>
                Get PCB Quote Now
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1.5px solid rgba(255,255,255,0.4)', color: 'white',
                fontWeight: 600, fontSize: '1rem',
                padding: '14px 32px', borderRadius: '8px',
                textDecoration: 'none', background: 'rgba(255,255,255,0.06)',
              }}>
                Contact Us
              </Link>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '18px' }}>
              ⚡ Average response: within 2 hours · 📧 sales09dk@gmail.com
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  )
}
