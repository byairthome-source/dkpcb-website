'use client'

import { useState } from 'react'

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

  const calculatePrice = () => {
    let basePrice = 0
    
    // Base price by layer count
    const layerPrice = [0, 5, 10, 20, 35, 50][quote.layers] || 50
    
    // Size factor
    const area = (quote.width * quote.height) / 10000 // convert to dm²
    const sizeFactor = area * 0.5
    
    // Quantity discount
    const quantityFactor = quote.quantity < 10 ? 1.5 : quote.quantity < 100 ? 1 : 0.8
    
    // Material multiplier
    const materialMultiplier = quote.material === 'fr4' ? 1 : 
                               quote.material === 'aluminum' ? 1.5 : 
                               quote.material === 'rogers' ? 2.5 : 1
    
    // Surface finish addon
    const surfaceAddon = quote.surfaceFinish === 'hasl' ? 0 :
                         quote.surfaceFinish === 'enig' ? 10 : 5
    
    basePrice = (layerPrice + sizeFactor) * quantityFactor * materialMultiplier + surfaceAddon
    basePrice *= quote.quantity
    
    setQuote({ ...quote, totalPrice: Math.round(basePrice * 100) / 100 })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">PCB Instant Quote</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* PCB Type */}
            <div>
              <label className="block text-sm font-semibold mb-2">PCB Type</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.pcbType}
                onChange={(e) => setQuote({ ...quote, pcbType: e.target.value })}
              >
                <option value="standard">Standard PCB</option>
                <option value="flex">Flexible PCB</option>
                <option value="rigid-flex">Rigid-Flex PCB</option>
                <option value="aluminum">Aluminum PCB</option>
              </select>
            </div>

            {/* Layers */}
            <div>
              <label className="block text-sm font-semibold mb-2">Layers</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.layers}
                onChange={(e) => setQuote({ ...quote, layers: parseInt(e.target.value) })}
              >
                <option value={1}>1 Layer</option>
                <option value={2}>2 Layers</option>
                <option value={4}>4 Layers</option>
                <option value={6}>6 Layers</option>
                <option value={8}>8 Layers</option>
              </select>
            </div>

            {/* Width */}
            <div>
              <label className="block text-sm font-semibold mb-2">Width (mm)</label>
              <input 
                type="number" 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.width}
                onChange={(e) => setQuote({ ...quote, width: parseInt(e.target.value) })}
              />
            </div>

            {/* Height */}
            <div>
              <label className="block text-sm font-semibold mb-2">Height (mm)</label>
              <input 
                type="number" 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.height}
                onChange={(e) => setQuote({ ...quote, height: parseInt(e.target.value) })}
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-2">Quantity (pcs)</label>
              <input 
                type="number" 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.quantity}
                onChange={(e) => setQuote({ ...quote, quantity: parseInt(e.target.value) })}
              />
            </div>

            {/* Thickness */}
            <div>
              <label className="block text-sm font-semibold mb-2">Board Thickness (mm)</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
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
            <div>
              <label className="block text-sm font-semibold mb-2">Material</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.material}
                onChange={(e) => setQuote({ ...quote, material: e.target.value })}
              >
                <option value="fr4">FR4</option>
                <option value="aluminum">Aluminum</option>
                <option value="rogers">Rogers</option>
              </select>
            </div>

            {/* Copper Weight */}
            <div>
              <label className="block text-sm font-semibold mb-2">Copper Weight</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.copperWeight}
                onChange={(e) => setQuote({ ...quote, copperWeight: e.target.value })}
              >
                <option value="1">1 oz</option>
                <option value="2">2 oz</option>
                <option value="3">3 oz</option>
              </select>
            </div>

            {/* Surface Finish */}
            <div>
              <label className="block text-sm font-semibold mb-2">Surface Finish</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
                value={quote.surfaceFinish}
                onChange={(e) => setQuote({ ...quote, surfaceFinish: e.target.value })}
              >
                <option value="hasl">HASL (Lead-Free)</option>
                <option value="enig">ENIG</option>
                <option value="osp">OSP</option>
              </select>
            </div>

            {/* Solder Mask Color */}
            <div>
              <label className="block text-sm font-semibold mb-2">Solder Mask Color</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
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
            <div>
              <label className="block text-sm font-semibold mb-2">Silkscreen Color</label>
              <select 
                className="w-full border rounded-lg px-4 py-2"
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
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Calculate Price
            </button>
          </div>

          {/* Quote Result */}
          {quote.totalPrice > 0 && (
            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Estimated Price</h3>
              <p className="text-4xl font-bold text-orange-500">${quote.totalPrice}</p>
              <p className="text-sm text-gray-600 mt-2">For {quote.quantity} pcs</p>
              <button className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
                Proceed to Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
