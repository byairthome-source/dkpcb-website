'use client'

import { useState } from 'react'

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
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
          </p>
          <a 
            href="/" 
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg inline-block transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full border rounded-lg px-4 py-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full border rounded-lg px-4 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full border rounded-lg px-4 py-2"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your PCB requirements..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Upload Files (Gerber, BOM)</label>
                <input 
                  type="file" 
                  multiple
                  accept=".zip,.rar,.7z,.pdf,.txt"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleFileChange}
                />
                {formData.files.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    {formData.files.length} file(s) selected
                  </p>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">sales@dkpcb.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+86-XXX-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">Dongguan, Guangdong, China</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
              <ul className="space-y-2">
                <li>✓ Quote within 24 hours</li>
                <li>✓ DFM check included</li>
                <li>✓ Technical support available</li>
                <li>✓ NDA protection offered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
