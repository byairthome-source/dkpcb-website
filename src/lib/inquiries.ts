// Shared inquiry data layer using localStorage

export interface Inquiry {
  id: string
  type: 'contact' | 'quote'
  status: 'New' | 'Processing' | 'Replied' | 'Closed'
  createdAt: string
  // Contact form fields
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
  files?: string[]
  // Quote fields
  pcbType?: string
  layers?: string
  width?: string
  height?: string
  quantity?: string
  thickness?: string
  material?: string
  copperWeight?: string
  surfaceFinish?: string
  soldermaskColor?: string
  silkscreenColor?: string
  unitPrice?: number
  totalPrice?: number
  leadTime?: string
}

const STORAGE_KEY = 'dkpcb_inquiries'

export function getInquiries(): Inquiry[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const all = getInquiries()
  const newInquiry: Inquiry = {
    ...inquiry,
    id: 'DK' + String(Date.now()).slice(-6),
    status: 'New',
    createdAt: new Date().toISOString(),
  }
  all.unshift(newInquiry)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  return newInquiry
}

export function updateInquiryStatus(id: string, status: Inquiry['status']): void {
  const all = getInquiries()
  const idx = all.findIndex(i => i.id === id)
  if (idx !== -1) {
    all[idx].status = status
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  }
}

export function deleteInquiry(id: string): void {
  const all = getInquiries()
  const filtered = all.filter(i => i.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}
