'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      alert(isLogin ? 'Login successful! (Demo)' : 'Registration successful! (Demo)')
      setLoading(false)
    }, 800)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '0.88rem',
    color: '#374151',
    outline: 'none',
    background: '#f9fafb',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)', padding: '40px', width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0066cc', marginBottom: '4px', letterSpacing: '-0.02em' }}>DKPCB</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email Address</label>
            <input
              type="email"
              required
              style={inputStyle}
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {!isLogin && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Company Name</label>
              <input
                type="text"
                style={inputStyle}
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Password</label>
            <input
              type="password"
              required
              style={inputStyle}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {!isLogin && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Confirm Password</label>
              <input
                type="password"
                required
                style={inputStyle}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#f97316' : '#ff6b00',
              color: '#fff',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.95rem',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Signing in...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: '#0066cc', fontSize: '0.88rem', cursor: 'pointer', fontWeight: 500 }}
          >
            {isLogin ? "Don't have an account? Register now" : 'Already have an account? Sign in'}
          </button>
        </div>

        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '0.82rem', color: '#6b7280', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
