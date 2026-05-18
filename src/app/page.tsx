import Link from 'next/link'
import { HeroBanner } from '@/components/HeroSection'
import { CoreValues } from '@/components/CoreValues'
import { ProductServices } from '@/components/ProductServices'

// ============ STATISTICS (JLCPCB exact numbers) ============
function Statistics() {
  const stats = [
    { num: '17M+', label: 'Orders/Year', sub: '17,000,000+' },
    { num: '8M+ m²', label: 'PCBs Produced/Year', sub: '8,000,000+ m²' },
    { num: '10M+ m²', label: 'Production Capacity/Year', sub: '10,000,000+ m²' },
    { num: '290+ acres', label: 'Factory Area', sub: '290+ acres' },
  ]
  const secondary = [
    { num: '7M+', label: 'Customers Worldwide' },
    { num: '180+', label: 'Countries Covered' },
  ]
  return (
    <section style={{ background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)', padding: '64px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            Your Trusted Global PCB Manufacturer
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '4px', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {secondary.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '4px', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ ORDER PROCESS ============
function OrderProcess() {
  const steps = [
    {
      num: '01',
      title: 'Upload PCB Files',
      desc: 'Upload your Gerber files, Bill of Materials (BOM), and Component Placement List (CPL) to receive instant quotes for PCB, components and assembly.',
      note: 'All uploads are secure and confidential.',
    },
    {
      num: '02',
      title: 'Review PCB Components',
      desc: 'Our system automatically matches and selects parts based on your BOM. You simply need to review and confirm the selections.',
      note: 'Our interactive 3D viewer shows your board and component placements.',
    },
    {
      num: '03',
      title: 'Order & Track',
      desc: 'Place orders in minutes and track order status in real-time. Visual progress tracking shows every step, from review to production to shipping.',
      note: '',
    },
    {
      num: '04',
      title: 'Get Your Boards',
      desc: 'By streamlining the entire process—from ordering and parts sourcing to PCBA prototyping—you can receive your finished boards in as fast as one week.',
      note: 'Allowing you to iterate, improve, and deliver on time or even early.',
    },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>
            Smart PCB & PCBA Ordering
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', position: 'relative', padding: '0 12px' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: '28px', left: '60%', right: '-40%', height: '2px', background: '#e5e7eb', zIndex: 0 }} />
              )}
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#0066cc', color: '#fff', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative', zIndex: 1, boxShadow: '0 4px 12px rgba(0,102,204,0.3)' }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.6, marginBottom: step.note ? '8px' : '0' }}>{step.desc}</p>
              {step.note && (
                <p style={{ fontSize: '0.72rem', color: '#9ca3af', lineHeight: 1.5 }}>{step.note}</p>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              background: '#0066cc',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============ CUSTOMER CASES ============
function CustomerCases() {
  const cases = [
    {
      name: 'Raspberry Pi',
      logo: '/images/case-raspberry-pi.webp',
      text: 'DKPCB supports Raspberry Pi\'s global community by providing agile manufacturing services that help streamline the path from design to functional prototype.',
    },
    {
      name: 'Siemens',
      logo: '/images/case-siemens.webp',
      text: 'DKPCB meets the stringent quality requirements of Siemens\' industrial automation products through disciplined manufacturing and process control.',
    },
    {
      name: 'Midea Group',
      logo: '/images/case-midea.webp',
      text: 'DKPCB serves as a manufacturing partner to Midea, delivering PCB solutions that balance performance and value for a diverse range of smart home products.',
    },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#f5f7fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '8px' }}>
            What Our Customers Say
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {cases.map((c) => (
            <div key={c.name} style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '32px 28px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              border: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                "{c.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={c.logo} alt={c.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} loading="lazy" />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1a2b4a' }}>{c.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>Trusted Partner</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ BOTTOM NEWS / FAQ / BLOG ============
function BottomNewsFAQBlog() {
  const news = [
    { title: 'DKPCB Showcases Quick-Turn PCB Innovations at Embedded World 2026', date: 'Mar 6, 2026' },
    { title: 'Logistics Update: Shipping Service Adjustments in the Middle East Region', date: 'Mar 2, 2026' },
    { title: 'Meet DKPCB Flexible Heaters: Warmth That Bends to Your Needs!', date: 'Nov 10, 2025' },
    { title: 'DKPCB Launches High-Precision Back Drilling Process', date: 'May 13, 2026' },
  ]
  const faqs = [
    { q: 'What file formats do you accept for PCB manufacturing?', a: 'We accept Gerber files (RS-274X), BOM (Bill of Materials), and Pick & Place files (CSV, TXT). Our system auto-validates your files upon upload.' },
    { q: 'What are your standard lead times for PCB production?', a: 'Standard FR-4 PCBs: 3-5 days. Express (24h) available. PCBA: 3-7 days. Shipping: 5-15 days depending on destination.' },
    { q: 'Do you offer free DFM check for PCB assembly?', a: 'Yes! Every order includes free Design for Manufacturability (DFM) analysis. We will notify you of any potential issues before production.' },
    { q: 'What quality standards do you follow for PCB production?', a: 'We are ISO 9001 certified and follow IPC Class 2 and Class 3 standards. All boards undergo AOI and electrical testing.' },
  ]
  const blogs = [
    { cat: 'Components & Sourcing', title: 'SMD Capacitor Codes: Identification, Markings, and Polarity', date: 'Dec 27, 2025' },
    { cat: 'Design Tools', title: 'Mastering PCB Footprints: Design Best Practices', date: 'May 16, 2026' },
    { cat: 'PCB Materials', title: 'Unlocking Smaller, Smarter PCBs with Embedded Passive Components', date: 'May 17, 2026' },
  ]
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '32px', textAlign: 'center' }}>
          DKPCB News, FAQs and Solutions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '40px', alignItems: 'start' }}>
          {/* News */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #0066cc' }}>News</h3>
            {news.map((n, i) => (
              <div key={i} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: '1px solid #f3f4f6' }}>
                <Link href="/news" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a2b4a', textDecoration: 'none', lineHeight: 1.5, display: 'block', marginBottom: '6px' }}>{n.title}</Link>
                <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{n.date}</span>
              </div>
            ))}
            <Link href="/news" style={{ fontSize: '0.82rem', color: '#0066cc', fontWeight: 600, textDecoration: 'none' }}>View All News →</Link>
          </div>

          {/* FAQ */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #0066cc' }}>Frequently Asked Questions</h3>
            {faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: '1px solid #f3f4f6' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a2b4a', marginBottom: '6px' }}>{f.q}</h4>
                <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
            <Link href="/faq" style={{ fontSize: '0.82rem', color: '#0066cc', fontWeight: 600, textDecoration: 'none' }}>View All FAQs →</Link>
          </div>

          {/* Blog */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2b4a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #0066cc' }}>Blog</h3>
            {blogs.map((b, i) => (
              <div key={i} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '0.68rem', color: '#0066cc', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{b.cat}</span>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a2b4a', marginBottom: '6px', marginTop: '6px', lineHeight: 1.4 }}>{b.title}</h4>
                <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{b.date}</span>
              </div>
            ))}
            <Link href="/blog" style={{ fontSize: '0.82rem', color: '#0066cc', fontWeight: 600, textDecoration: 'none' }}>View All Blog →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ CTA SECTION ============
function CTASection() {
  return (
    <section style={{ background: '#1a2b4a', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
          Ready to Start Your PCB Project?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Get an instant quote in seconds. No minimum order. No hidden fees.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/products"
            style={{
              background: '#ff6b00',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Get Instant Quote →
          </Link>
          <Link
            href="/contact"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============ MAIN PAGE ============
export default function Home() {
  return (
    <div style={{ background: '#ffffff' }}>
      <HeroBanner />
      <CoreValues />
      <ProductServices />
      <Statistics />
      <OrderProcess />
      <CustomerCases />
      <BottomNewsFAQBlog />
      <CTASection />
    </div>
  )
}
