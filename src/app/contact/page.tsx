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
      setFormData({
        ...formData,
        files: Array.from(e.target.files)
      })
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12">
        <div className="glass rounded-3xl p-12 text-center max-w-md shadow-2xl animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-8">
            Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
          </p>
          <div className="space-y-3">
            <Link 
              href="/" 
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link 
              href="/products" 
              className="block w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Get Another Quote
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
            📧 Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our PCB services? Need a custom quote? Our team is ready to help you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                📧
              </span>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your PCB requirements..."
                ></textarea>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Files (Gerber, BOM)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                  <input 
                    type="file" 
                    multiple
                    accept=".zip,.rar,.7z,.pdf,.txt"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📎</div>
                    <p className="text-sm text-gray-600">Click to upload or drag files here</p>
                    <p className="text-xs text-gray-400 mt-1">Supports: .zip, .rar, .7z, .pdf, .txt</p>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      ✓ {formData.files.length} file(s) selected
                    </p>
                  </div>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <span>Send Inquiry</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="glass rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: '📧', title: 'Email', value: 'sales09dk@gmail.com', color: 'from-blue-400 to-cyan-400' },
                  { icon: '📞', title: 'Phone', value: '+86-136-0961-1816', color: 'from-green-400 to-emerald-400' },
                  { icon: '📍', title: 'Address', value: 'Dongguan, Guangdong, China', color: 'from-purple-400 to-pink-400' },
                ].map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{info.title}</p>
                      <p className="text-gray-600 mt-1">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Quick Response Guarantee</h3>
                <ul className="space-y-3">
                  {[
                    'Quote within 24 hours',
                    'DFM check included',
                    'Technical support available',
                    'NDA protection offered',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 text-sm">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-3xl overflow-hidden shadow-xl">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-600">Dongguan, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
