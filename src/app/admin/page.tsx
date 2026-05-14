'use client'

import { useState, useEffect } from 'react'
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

  const statusColors: Record<string, string> = {
    New: 'bg-blue-100 text-blue-800',
    Processing: 'bg-yellow-100 text-yellow-800',
    Replied: 'bg-green-100 text-green-800',
    Closed: 'bg-gray-100 text-gray-600',
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl">
              🔐
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-1">DKPCB Management Panel</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Username</label>
              <input
                type="text"
                required
                className="w-full border rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full border rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-gray-400">Demo: admin / dkpcb2026</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">📋</div>
          <span className="font-bold text-lg">DKPCB Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={refresh} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1">
            🔄 Refresh
          </button>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Inquiries', value: stats.total, icon: '📬', color: 'from-blue-500 to-blue-600' },
            { label: 'New / Unread', value: stats.newCount, icon: '🔔', color: 'from-orange-500 to-red-500' },
            { label: 'Contact Forms', value: stats.contactCount, icon: '📧', color: 'from-purple-500 to-pink-500' },
            { label: 'Quote Requests', value: stats.quoteCount, icon: '💰', color: 'from-green-500 to-emerald-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-xl flex-shrink-0`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Inquiry List */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Filter Tabs */}
            <div className="flex border-b px-4">
              {(['all', 'contact', 'quote'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-3 text-sm font-medium capitalize border-b-2 transition-colors ${
                    filter === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'all' ? `All (${stats.total})` : tab === 'contact' ? `Contact (${stats.contactCount})` : `Quotes (${stats.quoteCount})`}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center text-gray-400">
                <div className="text-5xl mb-4">📭</div>
                <p className="font-medium">No inquiries yet</p>
                <p className="text-sm mt-1">Submissions from the contact form and quote calculator will appear here</p>
              </div>
            ) : (
              <div className="divide-y">
                {filtered.map(inquiry => (
                  <div
                    key={inquiry.id}
                    onClick={() => setSelectedInquiry(inquiry)}
                    className={`px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-4 ${selectedInquiry?.id === inquiry.id ? 'bg-blue-50' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${inquiry.type === 'quote' ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {inquiry.type === 'quote' ? '💰' : '📧'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm truncate">
                          {inquiry.type === 'quote'
                            ? `Quote: ${inquiry.layers}L ${inquiry.pcbType?.toUpperCase()} × ${inquiry.quantity}pcs`
                            : inquiry.name || 'Anonymous'}
                        </p>
                        {inquiry.status === 'New' && (
                          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {inquiry.type === 'quote'
                          ? `$${inquiry.totalPrice} · ${inquiry.email || 'No email'}`
                          : inquiry.email || inquiry.company || ''}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[inquiry.status]}`}>
                        {inquiry.status}
                      </span>
                      <span className="text-xs text-gray-400">
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
            <div className="w-96 flex-shrink-0 bg-white rounded-2xl shadow-sm p-6 self-start sticky top-4">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${selectedInquiry.type === 'quote' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    {selectedInquiry.type === 'quote' ? '💰' : '📧'}
                  </div>
                  <div>
                    <p className="font-bold text-sm">#{selectedInquiry.id}</p>
                    <p className="text-xs text-gray-500 capitalize">{selectedInquiry.type} inquiry</p>
                  </div>
                </div>
                <button onClick={() => setSelectedInquiry(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
              </div>

              {/* Status Selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 mb-2">STATUS</label>
                <div className="flex gap-2 flex-wrap">
                  {(['New', 'Processing', 'Replied', 'Closed'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selectedInquiry.id, s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedInquiry.status === s
                          ? statusColors[s] + ' ring-2 ring-offset-1 ring-current'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm">
                {selectedInquiry.type === 'contact' ? (
                  <>
                    <DetailRow label="Name" value={selectedInquiry.name} />
                    <DetailRow label="Email" value={selectedInquiry.email} />
                    <DetailRow label="Company" value={selectedInquiry.company} />
                    <DetailRow label="Phone" value={selectedInquiry.phone} />
                    {selectedInquiry.message && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">MESSAGE</p>
                        <p className="text-gray-700 bg-gray-50 rounded-lg p-3 text-sm leading-relaxed">{selectedInquiry.message}</p>
                      </div>
                    )}
                    {selectedInquiry.files && selectedInquiry.files.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">FILES</p>
                        {selectedInquiry.files.map((f, i) => (
                          <p key={i} className="text-blue-600 text-sm">📎 {f}</p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <DetailRow label="PCB Type" value={selectedInquiry.pcbType} />
                      <DetailRow label="Layers" value={selectedInquiry.layers} />
                      <DetailRow label="Size" value={`${selectedInquiry.width}×${selectedInquiry.height}mm`} />
                      <DetailRow label="Quantity" value={`${selectedInquiry.quantity} pcs`} />
                      <DetailRow label="Thickness" value={`${selectedInquiry.thickness}mm`} />
                      <DetailRow label="Material" value={selectedInquiry.material?.toUpperCase()} />
                      <DetailRow label="Copper" value={`${selectedInquiry.copperWeight} oz`} />
                      <DetailRow label="Surface" value={selectedInquiry.surfaceFinish?.toUpperCase()} />
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mt-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Unit Price</p>
                          <p className="text-xl font-bold text-green-700">${selectedInquiry.unitPrice}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Total ({selectedInquiry.quantity} pcs)</p>
                          <p className="text-xl font-bold text-green-700">${selectedInquiry.totalPrice}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Lead Time: {selectedInquiry.leadTime}</p>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t flex gap-2">
                {selectedInquiry.email && (
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium text-center transition-colors"
                  >
                    Reply Email
                  </a>
                )}
                <button
                  onClick={() => handleDelete(selectedInquiry.id)}
                  className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>

              <p className="mt-3 text-center text-xs text-gray-400">
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
      <p className="text-xs font-semibold text-gray-500">{label.toUpperCase()}</p>
      <p className="text-gray-800 mt-0.5">{value}</p>
    </div>
  )
}
