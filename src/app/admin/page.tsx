'use client'

import { useState } from 'react'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo authentication
    if (credentials.username === 'admin' && credentials.password === 'dkpcb2026') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials! (Demo: admin / dkpcb2026)')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Username</label>
              <input 
                type="text" 
                required
                className="w-full border rounded-lg px-4 py-2"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full border rounded-lg px-4 py-2"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Demo credentials: admin / dkpcb2026
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'New Orders', value: '12', color: 'blue' },
            { label: 'Pending Quotes', value: '8', color: 'yellow' },
            { label: 'Completed', value: '156', color: 'green' },
            { label: 'Total Revenue', value: '$45,230', color: 'purple' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Order ID</th>
                  <th className="text-left p-3">Customer</th>
                  <th className="text-left p-3">PCB Type</th>
                  <th className="text-left p-3">Quantity</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'DK001', customer: 'John Doe', type: '2-Layer PCB', qty: 50, status: 'Pending', date: '2026-05-14' },
                  { id: 'DK002', customer: 'Jane Smith', type: '4-Layer PCB', qty: 100, status: 'In Production', date: '2026-05-13' },
                  { id: 'DK003', customer: 'Bob Wilson', type: 'Aluminum PCB', qty: 20, status: 'Shipped', date: '2026-05-12' },
                ].map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.type}</td>
                    <td className="p-3">{order.qty}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'In Production' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
