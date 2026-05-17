'use client'

import { useState } from 'react'
import { saveInquiry } from '@/lib/inquiries'

export default function Products() {
  const [quote, setQuote] = useState({
    pcbType: 'standard',
    layers: 2,
    width: 100,
    height: 100,
    quantity: 10,
    thickness: '1.6',
    material: 'fr4',
    copperWeight: '1',
    surfaceFinish: 'hasl',
    solderColor: 'green',
    silkscreenColor: 'white',
    totalPrice: 0,
  })
  const [isCalculating, setIsCalculating] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)

  const calculatePrice = () => {
    setIsCalculating(true)
    setInquirySent(false)

    setTimeout(() => {
      let basePrice = 0
      const layerPrice = [0, 5, 10, 20, 35, 50][quote.layers] || 50
      const area = (quote.width * quote.height) / 10000
      const sizeFactor = area * 0.5
      const quantityFactor = quote.quantity < 10 ? 1.5 : quote.quantity < 100 ? 1 : 0.8
      const materialMultiplier = quote.material === 'fr4' ? 1 :
                                 quote.material === 'fr4-hightg' ? 1.2 :
                                 quote.material === 'cem1' ? 0.9 :
                                 quote.material === 'cem3' ? 0.9 :
                                 quote.material === 'aluminum' ? 1.5 :
                                 quote.material === 'rogers3010' ? 2.5 :
                                 quote.material === 'rogers4350' ? 2.2 :
                                 quote.material === 'panasonic' ? 2.0 :
                                 quote.material === 'isola370' ? 1.8 :
                                 quote.material === 'dupont' ? 2.0 :
                                 quote.material === 'alumina' ? 4.0 :
                                 quote.material === 'aln' ? 5.0 : 1
      const surfaceAddon = quote.surfaceFinish === 'hasl' ? 0 :
                           quote.surfaceFinish === 'enig' ? 10 : 5
      basePrice = (layerPrice + sizeFactor) * quantityFactor * materialMultiplier + surfaceAddon
      basePrice *= quote.quantity
      setQuote({ ...quote, totalPrice: Math.round(basePrice * 100) / 100 })
      setIsCalculating(false)
    }, 800)
  }

  const handleSendInquiry = () => {
    const unitPrice = quote.totalPrice > 0 ? Math.round((quote.totalPrice / quote.quantity) * 100) / 100 : 0
    saveInquiry({
      type: 'quote',
      pcbType: quote.pcbType,
      layers: String(quote.layers),
      width: String(quote.width),
      height: String(quote.height),
      quantity: String(quote.quantity),
      thickness: quote.thickness,
      material: quote.material,
      copperWeight: quote.copperWeight,
      surfaceFinish: quote.surfaceFinish,
      soldermaskColor: quote.solderColor,
      silkscreenColor: quote.silkscreenColor,
      unitPrice,
      totalPrice: quote.totalPrice,
      leadTime: '3-5 Days',
    })
    setInquirySent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '10px 14px',
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
            Instant Online Quote
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a2332', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            PCB Instant Quote
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
            Configure your PCB specifications and get instant pricing. No registration required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Configuration Panel */}
          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '28px', height: '28px', borderRadius: '6px', background: '#0066cc',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700,
              }}>1</span>
              PCB Configuration
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* PCB Type */}
              <div>
                <label style={labelStyle}>PCB Type</label>
                <select style={inputStyle} value={quote.pcbType} onChange={(e) => setQuote({ ...quote, pcbType: e.target.value })}>
                  <option value="standard">Standard PCB (FR4)</option>
                  <option value="multilayer">Multi-Layer PCB (4-32L)</option>
                  <option value="flex">Flexible PCB (FPC)</option>
                  <option value="rigid-flex">Rigid-Flex PCB</option>
                  <option value="aluminum">Aluminum PCB</option>
                  <option value="rogers">Rogers RF / Microwave</option>
                  <option value="heavy-copper">Heavy Copper (2-6 oz)</option>
                  <option value="ceramic">Ceramic PCB</option>
                  <option value="hdi">HDI PCB</option>
                </select>
              </div>

              {/* Layers */}
              <div>
                <label style={labelStyle}>Layers</label>
                <select style={inputStyle} value={quote.layers} onChange={(e) => setQuote({ ...quote, layers: parseInt(e.target.value) })}>
                  <option value={1}>1 Layer</option>
                  <option value={2}>2 Layers</option>
                  <option value={4}>4 Layers</option>
                  <option value={6}>6 Layers</option>
                  <option value={8}>8 Layers</option>
                  <option value={10}>10 Layers</option>
                  <option value={12}>12 Layers</option>
                  <option value={16}>16 Layers</option>
                  <option value={20}>20 Layers</option>
                  <option value={24}>24 Layers</option>
                  <option value={32}>32 Layers</option>
                </select>
              </div>

              {/* Width */}
              <div>
                <label style={labelStyle}>Width (mm)</label>
                <input type="number" style={inputStyle} value={quote.width} onChange={(e) => setQuote({ ...quote, width: parseInt(e.target.value) })} />
              </div>

              {/* Height */}
              <div>
                <label style={labelStyle}>Height (mm)</label>
                <input type="number" style={inputStyle} value={quote.height} onChange={(e) => setQuote({ ...quote, height: parseInt(e.target.value) })} />
              </div>

              {/* Quantity */}
              <div>
                <label style={labelStyle}>Quantity (pcs)</label>
                <input type="number" style={inputStyle} value={quote.quantity} onChange={(e) => setQuote({ ...quote, quantity: parseInt(e.target.value) })} />
              </div>

              {/* Thickness */}
              <div>
                <label style={labelStyle}>Board Thickness</label>
                <select style={inputStyle} value={quote.thickness} onChange={(e) => setQuote({ ...quote, thickness: e.target.value })}>
                  <option value="0.4">0.4mm</option>
                  <option value="0.6">0.6mm</option>
                  <option value="0.8">0.8mm</option>
                  <option value="1.0">1.0mm</option>
                  <option value="1.6">1.6mm</option>
                </select>
              </div>

              {/* Material */}
              <div>
                <label style={labelStyle}>Material</label>
                <select style={inputStyle} value={quote.material} onChange={(e) => setQuote({ ...quote, material: e.target.value })}>
                  <option value="fr4">FR4 (Standard)</option>
                  <option value="fr4-hightg">FR4 High-TG</option>
                  <option value="cem1">CEM-1</option>
                  <option value="cem3">CEM-3</option>
                  <option value="aluminum">Aluminum Core</option>
                  <option value="rogers3010">Rogers 3010</option>
                  <option value="rogers4350">Rogers 4350B</option>
                  <option value="panasonic">Panasonic M6</option>
                  <option value="isola370">Isola 370HR</option>
                  <option value="dupont">Dupont AP8515 (Flex)</option>
                  <option value="alumina">Alumina Ceramic (Al₂O₃)</option>
                  <option value="aln">Aluminum Nitride (AlN)</option>
                </select>
              </div>

              {/* Copper Weight */}
              <div>
                <label style={labelStyle}>Copper Weight</label>
                <select style={inputStyle} value={quote.copperWeight} onChange={(e) => setQuote({ ...quote, copperWeight: e.target.value })}>
                  <option value="1">1 oz</option>
                  <option value="2">2 oz</option>
                  <option value="3">3 oz</option>
                </select>
              </div>

              {/* Surface Finish */}
              <div>
                <label style={labelStyle}>Surface Finish</label>
                <select style={inputStyle} value={quote.surfaceFinish} onChange={(e) => setQuote({ ...quote, surfaceFinish: e.target.value })}>
                  <option value="hasl">HASL (Lead-Free)</option>
                  <option value="enig">ENIG</option>
                  <option value="osp">OSP</option>
                </select>
              </div>

              {/* Solder Mask Color */}
              <div>
                <label style={labelStyle}>Solder Mask Color</label>
                <select style={inputStyle} value={quote.solderColor} onChange={(e) => setQuote({ ...quote, solderColor: e.target.value })}>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
                </select>
              </div>

              {/* Silkscreen Color */}
              <div>
                <label style={labelStyle}>Silkscreen Color</label>
                <select style={inputStyle} value={quote.silkscreenColor} onChange={(e) => setQuote({ ...quote, silkscreenColor: e.target.value })}>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <button
                onClick={calculatePrice}
                disabled={isCalculating}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#ff6b00', color: 'white', fontWeight: 700, fontSize: '1rem',
                  padding: '14px 36px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: isCalculating ? 0.7 : 1,
                }}
              >
                {isCalculating ? (
                  <>
                    <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4 12a8 8 0 018-8" />
                    </svg>
                    Calculating...
                  </>
                ) : (
                  <>
                    Calculate Price
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Price Card */}
            <div style={{
              background: '#ffffff', borderRadius: '16px', padding: '24px',
              border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'all 0.5s ease',
              opacity: quote.totalPrice > 0 ? 1 : 0.85,
            }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '28px', height: '28px', borderRadius: '6px', background: '#ff6b00',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700,
                }}>2</span>
                Quote Result
              </h2>

              {quote.totalPrice > 0 ? (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.82rem', color: '#9ca3af', marginBottom: '4px' }}>Estimated Price</p>
                  <p style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ff6b00', lineHeight: 1 }}>
                    ${quote.totalPrice}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '6px' }}>For {quote.quantity} pcs</p>

                  <div style={{ marginTop: '16px', padding: '14px', background: '#f9fafb', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                      <span style={{ color: '#6b7280' }}>Unit Price:</span>
                      <span style={{ fontWeight: 600, color: '#374151' }}>${(quote.totalPrice / quote.quantity).toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#6b7280' }}>Lead Time:</span>
                      <span style={{ fontWeight: 600, color: '#10b981' }}>3-5 Days</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSendInquiry}
                    disabled={inquirySent}
                    style={{
                      marginTop: '16px', width: '100%',
                      background: inquirySent ? '#10b981' : '#0066cc', color: 'white',
                      fontWeight: 600, fontSize: '0.9rem', padding: '12px 0', borderRadius: '8px',
                      border: 'none', cursor: 'pointer', transition: 'all 0.2s ease',
                    }}
                  >
                    {inquirySent ? '✓ Inquiry Sent!' : '📧 Send Inquiry'}
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '24px 0', color: '#9ca3af' }}>
                  <div style={{ width: '48px', height: '48px', margin: '0 auto 12px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <p style={{ fontSize: '0.85rem' }}>Configure your PCB and click Calculate to see pricing</p>
                </div>
              )}
            </div>

            {/* Features Card */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2332', marginBottom: '16px' }}>What&apos;s Included</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Free DFM check',
                  'Electrical test included',
                  'Panelized shipping',
                  'Solder mask & silkscreen',
                  'UL certified materials',
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#4b5563' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
