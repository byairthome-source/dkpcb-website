'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getInquiries, updateInquiryStatus, deleteInquiry, type Inquiry } from '@/lib/inquiries'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [filter, setFilter] = useState<'all' | 'contact' | 'quote'>('all')
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)

  useEffect(() => {
    if (isLoggedIn) {
      setInquiries(getInquiries())
    }
  }, [isLoggedIn])

  const refresh = () => setInquiries(getInquiries())

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'dkpcb2026') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials! (Demo: admin / dkpcb2026)')
    }
  }

  const handleStatusChange = (id: string, status: Inquiry['status']) => {
    updateInquiryStatus(id, status)
    refresh()
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status })
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this inquiry?')) {
      deleteInquiry(id)
      refresh()
      if (selectedInquiry?.id === id) setSelectedInquiry(null)
    }
  }

  const filtered = inquiries.filter(i => filter === 'all' || i.type === filter)

  const stats = {
    total: inquiries.length,
    newCount: inquiries.filter(i => i.status === 'New').length,
    contactCount: inquiries.filter(i => i.type === 'contact').length,
    quoteCount: inquiries.filter(i => i.type === 'quote').length,
  }

  const statusColors: Record<string, { bg: string; color: string }> = {
    New: { bg: '#dbeafe', color: '#1d4ed8' },
    Processing: { bg: '#fef9c3', color: '#a16207' },
    Replied: { bg: '#dcfce7', color: '#15803d' },
    Closed: { bg: '#f3f4f6', color: '#6b7280' },
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)', padding: '40px', width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', borderRadius: '12px', background: '#0066cc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a2b4a', marginBottom: '4px' }}>Admin Login</h1>
            <p style={{ color: '#6b7280', fontSize: '0.82rem' }}>DKPCB Management Panel</p>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Username</label>
              <input
                type="text"
                required
                placeholder="admin"
                style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '0.88rem', color: '#374151', outline: 'none', background: '#f9fafb' }}
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '0.88rem', color: '#374151', outline: 'none', background: '#f9fafb' }}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              style={{ width: '100%', background: '#0066cc', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', marginTop: '8px', transition: 'background 0.2s' }}
            >
              Sign In
            </button>
          </form>
          <p style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af' }}>Demo: admin / dkpcb2026</p>
        </div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Top Bar */}
      <div style={{ background: '#1a2b4a', color: '#fff', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>DKPCB Admin</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={refresh} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10"/>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
            </svg>
            Refresh
          </button>
          <Link href="/" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>
            View Site
          </Link>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 16px', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Inquiries', value: stats.total, color: '#0066cc', bg: '#e6f0fa' },
            { label: 'New / Unread', value: stats.newCount, color: '#dc2626', bg: '#fee2e2' },
            { label: 'Contact Forms', value: stats.contactCount, color: '#7c3aed', bg: '#ede9fe' },
            { label: 'Quote Requests', value: stats.quoteCount, color: '#059669', bg: '#d1fae5' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {i === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                {i === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>}
                {i === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                {i === 3 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
              </div>
              <div>
                <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a2b4a', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '4px' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {/* Inquiry List */}
          <div style={{ flex: '1 1 400px', background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            {/* Filter Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', padding: '0 16px' }}>
              {(['all', 'contact', 'quote'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  style={{
                    padding: '12px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    borderBottom: filter === tab ? '2px solid #0066cc' : '2px solid transparent',
                    color: filter === tab ? '#0066cc' : '#6b7280',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab === 'all' ? `All (${stats.total})` : tab === 'contact' ? `Contact (${stats.contactCount})` : `Quotes (${stats.quoteCount})`}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div style={{ padding: '80px 24px', textAlign: 'center', color: '#9ca3af' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                <p style={{ fontWeight: 600, color: '#6b7280' }}>No inquiries yet</p>
                <p style={{ fontSize: '0.82rem', marginTop: '4px' }}>Submissions will appear here</p>
              </div>
            ) : (
              <div>
                {filtered.map(inquiry => (
                  <div
                    key={inquiry.id}
                    onClick={() => setSelectedInquiry(inquiry)}
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #f3f4f6',
                      background: selectedInquiry?.id === inquiry.id ? '#f0f7ff' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'background 0.15s',
                    }}
                  >
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: inquiry.type === 'quote' ? '#d1fae5' : '#dbeafe',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {inquiry.type === 'quote'
                        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      }
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <p style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1a2b4a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {inquiry.type === 'quote'
                            ? `Quote: ${inquiry.layers}L ${inquiry.pcbType?.toUpperCase()} × ${inquiry.quantity}pcs`
                            : inquiry.name || 'Anonymous'}
                        </p>
                        {inquiry.status === 'New' && (
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb', flexShrink: 0 }}></span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {inquiry.type === 'quote'
                          ? `$${inquiry.totalPrice} · ${inquiry.email || 'No email'}`
                          : inquiry.email || inquiry.company || ''}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                      <span style={{
                        padding: '2px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600,
                        background: statusColors[inquiry.status].bg, color: statusColors[inquiry.status].color,
                      }}>
                        {inquiry.status}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#d1d5db' }}>
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detail Panel */}
          {selectedInquiry && (
            <div style={{ flex: '0 0 360px', background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', padding: '24px', position: 'sticky', top: '24px', alignSelf: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: selectedInquiry.type === 'quote' ? '#d1fae5' : '#dbeafe',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {selectedInquiry.type === 'quote'
                      ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    }
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a2b4a' }}>#{selectedInquiry.id}</p>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'capitalize' }}>{selectedInquiry.type} inquiry</p>
                  </div>
                </div>
                <button onClick={() => setSelectedInquiry(null)} style={{ background: 'none', border: 'none', color: '#d1d5db', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
              </div>

              {/* Status Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: '8px', letterSpacing: '0.05em' }}>STATUS</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {(['New', 'Processing', 'Replied', 'Closed'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selectedInquiry.id, s)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        background: selectedInquiry.status === s ? statusColors[s].bg : '#f3f4f6',
                        color: selectedInquiry.status === s ? statusColors[s].color : '#6b7280',
                        boxShadow: selectedInquiry.status === s ? `0 0 0 2px ${statusColors[s].color}33` : 'none',
                        transition: 'all 0.15s',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedInquiry.type === 'contact' ? (
                  <>
                    <DetailRow label="Name" value={selectedInquiry.name} />
                    <DetailRow label="Email" value={selectedInquiry.email} />
                    <DetailRow label="Company" value={selectedInquiry.company} />
                    <DetailRow label="Phone" value={selectedInquiry.phone} />
                    {selectedInquiry.message && (
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: '4px', letterSpacing: '0.05em' }}>MESSAGE</p>
                        <p style={{ color: '#374151', background: '#f9fafb', borderRadius: '8px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.6 }}>{selectedInquiry.message}</p>
                      </div>
                    )}
                    {selectedInquiry.files && selectedInquiry.files.length > 0 && (
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: '8px', letterSpacing: '0.05em' }}>FILES</p>
                        {selectedInquiry.files.map((f, i) => (
                          <p key={i} style={{ color: '#0066cc', fontSize: '0.85rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}>
                              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                            </svg>
                            {f}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <DetailRow label="PCB Type" value={selectedInquiry.pcbType} />
                      <DetailRow label="Layers" value={selectedInquiry.layers} />
                      <DetailRow label="Size" value={`${selectedInquiry.width}×${selectedInquiry.height}mm`} />
                      <DetailRow label="Quantity" value={`${selectedInquiry.quantity} pcs`} />
                      <DetailRow label="Thickness" value={`${selectedInquiry.thickness}mm`} />
                      <DetailRow label="Material" value={selectedInquiry.material?.toUpperCase()} />
                      <DetailRow label="Copper" value={`${selectedInquiry.copperWeight} oz`} />
                      <DetailRow label="Surface" value={selectedInquiry.surfaceFinish?.toUpperCase()} />
                    </div>
                    <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '16px', marginTop: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <p style={{ fontSize: '0.72rem', color: '#6b7280' }}>Unit Price</p>
                          <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#15803d' }}>${selectedInquiry.unitPrice}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '0.72rem', color: '#6b7280' }}>Total ({selectedInquiry.quantity} pcs)</p>
                          <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#15803d' }}>${selectedInquiry.totalPrice}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '8px' }}>Lead Time: {selectedInquiry.leadTime}</p>
                    </div>
                  </>
                )}
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '8px' }}>
                {selectedInquiry.email && (
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    style={{ flex: 1, background: '#0066cc', color: '#fff', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}
                  >
                    Reply Email
                  </a>
                )}
                <button
                  onClick={() => handleDelete(selectedInquiry.id)}
                  style={{ padding: '10px 14px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Delete
                </button>
              </div>

              <p style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.72rem', color: '#d1d5db' }}>
                Received: {new Date(selectedInquiry.createdAt).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div>
      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</p>
      <p style={{ color: '#1a2b4a', fontSize: '0.88rem', marginTop: '2px' }}>{value}</p>
    </div>
  )
}
