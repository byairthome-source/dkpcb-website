'use client'

import { useState } from 'react'
import Link from 'next/link'
import { saveInquiry } from '@/lib/inquiries'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    files: [] as File[],
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveInquiry({
      type: 'contact',
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      files: formData.files.map(f => f.name),
    })
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) })
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '12px 14px',
    background: '#f9fafb',
    fontSize: '0.88rem',
    color: '#374151',
    outline: 'none',
    transition: 'all 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '6px',
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{
          background: '#ffffff', borderRadius: '16px', padding: '48px', textAlign: 'center', maxWidth: '400px', width: '100%',
          border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          <div style={{
            width: '64px', height: '64px', margin: '0 auto 20px', borderRadius: '50%',
            background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.8rem',
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2332', marginBottom: '10px' }}>Thank You!</h2>
          <p style={{ color: '#6b7280', marginBottom: '28px', fontSize: '0.9rem' }}>
            Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/" style={{
              display: 'block', textAlign: 'center',
              background: '#0066cc', color: 'white', fontWeight: 600,
              padding: '12px 0', borderRadius: '8px', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            >
              Back to Home
            </Link>
            <Link href="/products" style={{
              display: 'block', textAlign: 'center',
              border: '1.5px solid #e5e7eb', color: '#4b5563', fontWeight: 600,
              padding: '12px 0', borderRadius: '8px', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            >
              Get Another Quote
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', paddingTop: '80px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '20px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#ff6b00', padding: '4px 14px', background: 'rgba(255,107,0,0.08)',
            borderRadius: '20px', marginBottom: '12px',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff6b00', display: 'inline-block' }}/>
            Get in Touch
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a2332', marginBottom: '8px' }}>
            Contact Us
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
            Have questions about our PCB services? Need a custom quote? Our team is ready to help you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Contact Form */}
          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '24px' }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input type="text" required style={inputStyle}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name" />
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" required style={inputStyle}
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input type="text" style={inputStyle}
                    value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name" />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" style={inputStyle}
                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+86 xxx xxxx xxxx" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: 'none' }}
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your PCB requirements..." />
              </div>

              <div>
                <label style={labelStyle}>Upload Files (Gerber, BOM)</label>
                <div style={{
                  border: '2px dashed #e5e7eb', borderRadius: '10px', padding: '24px', textAlign: 'center',
                  transition: 'border-color 0.2s ease',
                }}
                >
                  <input type="file" multiple accept=".zip,.rar,.7z,.pdf,.txt" style={{ display: 'none' }} id="file-upload" onChange={handleFileChange} />
                  <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>📎</div>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Click to upload or drag files here</p>
                    <p style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '4px' }}>Supports: .zip, .rar, .7z, .pdf, .txt</p>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div style={{ marginTop: '10px', padding: '10px 14px', background: '#dcfce7', borderRadius: '8px' }}>
                    <p style={{ fontSize: '0.82rem', color: '#16a34a', fontWeight: 600 }}>
                      ✓ {formData.files.length} file(s) selected
                    </p>
                  </div>
                )}
              </div>

              <button type="submit" style={{
                width: '100%', background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '1rem',
                padding: '14px 0', borderRadius: '8px', border: 'none', cursor: 'pointer',
                transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}
              >
                <span>Send Inquiry</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Info Card */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a2332', marginBottom: '20px' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '📧', title: 'Email', value: 'sales09dk@gmail.com', color: '#0066cc' },
                  { icon: '📞', title: 'Phone', value: '+86-136-0961-1816', color: '#10b981' },
                  { icon: '📍', title: 'Address', value: 'Dongguan, Guangdong, China', color: '#8b5cf6' },
                ].map((info, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: `${info.color}10`, border: `1px solid ${info.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#1a2332', fontSize: '0.85rem' }}>{info.title}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.82rem', marginTop: '2px' }}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div style={{ background: '#1a2b4a', borderRadius: '16px', padding: '28px', color: 'white', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', position: 'relative', zIndex: 1 }}>Quick Response Guarantee</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                {[
                  'Quote within 24 hours',
                  'DFM check included',
                  'Technical support available',
                  'NDA protection offered',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ height: '160px', background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>🗺️</div>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Dongguan, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
