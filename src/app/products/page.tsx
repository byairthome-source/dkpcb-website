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
      
      // Base price by layer count
      const layerPrice = [0, 5, 10, 20, 35, 50][quote.layers] || 50
      
      // Size factor
      const area = (quote.width * quote.height) / 10000
      const sizeFactor = area * 0.5
      
      // Quantity discount
      const quantityFactor = quote.quantity < 10 ? 1.5 : quote.quantity < 100 ? 1 : 0.8
      
      // Material multiplier
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
      
      // Surface finish addon
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

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
            ⚡ Instant Online Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
            PCB Instant Quote
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Configure your PCB specifications and get instant pricing. No registration required.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 glass rounded-3xl p-8 shadow-xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm">1</span>
                PCB Configuration
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* PCB Type */}
                <div className="space-y-2">
                  <label className={labelClass}>PCB Type</label>
                  <select 
                    className={inputClass}
                    value={quote.pcbType}
                    onChange={(e) => setQuote({ ...quote, pcbType: e.target.value })}
                  >
                    <option value="standard">Standard PCB (FR4 Single/Double)</option>
                    <option value="multilayer">Multi-Layer PCB (4-32 Layers)</option>
                    <option value="flex">Flexible PCB (FPC)</option>
                    <option value="rigid-flex">Rigid-Flex PCB</option>
                    <option value="aluminum">Aluminum PCB (Metal Core)</option>
                    <option value="rogers">Rogers RF / Microwave PCB</option>
                    <option value="heavy-copper">Heavy Copper PCB (2-6 oz)</option>
                    <option value="ceramic">Ceramic PCB (Alumina / AlN)</option>
                    <option value="hdi">HDI PCB (Any Layer Interconnection)</option>
                  </select>
                </div>

                {/* Layers */}
                <div className="space-y-2">
                  <label className={labelClass}>Layers</label>
                  <select 
                    className={inputClass}
                    value={quote.layers}
                    onChange={(e) => setQuote({ ...quote, layers: parseInt(e.target.value) })}
                  >
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
                <div className="space-y-2">
                  <label className={labelClass}>Width (mm)</label>
                  <input 
                    type="number" 
                    className={inputClass}
                    value={quote.width}
                    onChange={(e) => setQuote({ ...quote, width: parseInt(e.target.value) })}
                  />
                </div>

                {/* Height */}
                <div className="space-y-2">
                  <label className={labelClass}>Height (mm)</label>
                  <input 
                    type="number" 
                    className={inputClass}
                    value={quote.height}
                    onChange={(e) => setQuote({ ...quote, height: parseInt(e.target.value) })}
                  />
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label className={labelClass}>Quantity (pcs)</label>
                  <input 
                    type="number" 
                    className={inputClass}
                    value={quote.quantity}
                    onChange={(e) => setQuote({ ...quote, quantity: parseInt(e.target.value) })}
                  />
                </div>

                {/* Thickness */}
                <div className="space-y-2">
                  <label className={labelClass}>Board Thickness</label>
                  <select 
                    className={inputClass}
                    value={quote.thickness}
                    onChange={(e) => setQuote({ ...quote, thickness: e.target.value })}
                  >
                    <option value="0.4">0.4mm</option>
                    <option value="0.6">0.6mm</option>
                    <option value="0.8">0.8mm</option>
                    <option value="1.0">1.0mm</option>
                    <option value="1.6">1.6mm</option>
                  </select>
                </div>

                {/* Material */}
                <div className="space-y-2">
                  <label className={labelClass}>Material</label>
                  <select 
                    className={inputClass}
                    value={quote.material}
                    onChange={(e) => setQuote({ ...quote, material: e.target.value })}
                  >
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
                <div className="space-y-2">
                  <label className={labelClass}>Copper Weight</label>
                  <select 
                    className={inputClass}
                    value={quote.copperWeight}
                    onChange={(e) => setQuote({ ...quote, copperWeight: e.target.value })}
                  >
                    <option value="1">1 oz</option>
                    <option value="2">2 oz</option>
                    <option value="3">3 oz</option>
                  </select>
                </div>

                {/* Surface Finish */}
                <div className="space-y-2">
                  <label className={labelClass}>Surface Finish</label>
                  <select 
                    className={inputClass}
                    value={quote.surfaceFinish}
                    onChange={(e) => setQuote({ ...quote, surfaceFinish: e.target.value })}
                  >
                    <option value="hasl">HASL (Lead-Free)</option>
                    <option value="enig">ENIG</option>
                    <option value="osp">OSP</option>
                  </select>
                </div>

                {/* Solder Mask Color */}
                <div className="space-y-2">
                  <label className={labelClass}>Solder Mask Color</label>
                  <select 
                    className={inputClass}
                    value={quote.solderColor}
                    onChange={(e) => setQuote({ ...quote, solderColor: e.target.value })}
                  >
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                  </select>
                </div>

                {/* Silkscreen Color */}
                <div className="space-y-2">
                  <label className={labelClass}>Silkscreen Color</label>
                  <select 
                    className={inputClass}
                    value={quote.silkscreenColor}
                    onChange={(e) => setQuote({ ...quote, silkscreenColor: e.target.value })}
                  >
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={calculatePrice}
                  disabled={isCalculating}
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 disabled:shadow-none inline-flex items-center gap-3"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate Price
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quote Result Panel */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className={`glass rounded-3xl p-6 shadow-xl transition-all duration-500 ${quote.totalPrice > 0 ? 'scale-100' : 'scale-95 opacity-80'}`}>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm">2</span>
                  Quote Result
                </h2>
                
                {quote.totalPrice > 0 ? (
                  <div className="text-center animate-scale-in">
                    <p className="text-sm text-gray-500 mb-1">Estimated Price</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      ${quote.totalPrice}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">For {quote.quantity} pcs</p>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Unit Price:</span>
                        <span className="font-medium">${(quote.totalPrice / quote.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Lead Time:</span>
                        <span className="font-medium text-green-600">3-5 Days</span>
                      </div>
                    </div>

                    <button 
                      onClick={handleSendInquiry}
                      disabled={inquirySent}
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-500 disabled:to-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {inquirySent ? (
                        <><span>✓</span> Inquiry Sent!</>
                      ) : (
                        <><span>📧</span> Send Inquiry</>
                      )}
                    </button>
                    <button className="mt-3 w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-50">
                      Download Quote
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p>Configure your PCB and click Calculate to see pricing</p>
                  </div>
                )}
              </div>

              {/* Features Card */}
              <div className="glass rounded-3xl p-6 shadow-xl">
                <h3 className="font-bold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {[
                    'Free DFM check',
                    'Electrical test included',
                    'Panelized shipping',
                    'Solder mask & silkscreen',
                    'UL certified materials',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
