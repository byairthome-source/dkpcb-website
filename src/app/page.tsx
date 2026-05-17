'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// Circuit SVG Background
function CircuitBackground() {
  return (
    <svg className="circuit-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2e7d32" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#c49a2b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0066cc" stopOpacity="0.12" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Horizontal traces */}
      {[80, 160, 240, 340, 420, 520, 620, 720, 820, 900].map((y, i) => (
        <g key={`h${i}`} opacity="0.6">
          <line x1="0" y1={y} x2="400" stroke="url(#lineGrad)" strokeWidth="0.8" />
          <line x1="500" y1={y} x2="900" stroke="url(#lineGrad)" strokeWidth="0.8" />
          <line x1="1000" y1={y} x2="1440" stroke="url(#lineGrad)" strokeWidth="0.8" />
          {/* Pads */}
          {[100, 300, 500, 700, 900, 1100, 1300].map((x, j) => (
            <circle key={`p${j}`} cx={x} cy={y} r="2" fill="#c49a2b" opacity="0.3" />
          ))}
          {/* Vias */}
          {[250, 600, 850, 1150, 1350].map((x, j) => (
            <circle key={`v${j}`} cx={x} cy={y} r="3.5" fill="none" stroke="#0066cc" strokeWidth="0.8" opacity="0.25" />
          ))}
        </g>
      ))}
      {/* Vertical traces */}
      {[120, 280, 450, 600, 780, 950, 1100, 1280, 1380].map((x, i) => (
        <g key={`v${i}`} opacity="0.5">
          <line x1={x} y1="0" x2={x} y2="300" stroke="url(#lineGrad)" strokeWidth="0.8" />
          <line x1={x} y1="380" x2={x} y2="600" stroke="url(#lineGrad)" strokeWidth="0.8" />
          <line x1={x} y1="680" x2={x} y2="900" stroke="url(#lineGrad)" strokeWidth="0.8" />
        </g>
      ))}
      {/* IC chip outlines */}
      <rect x="380" y="200" width="180" height="120" rx="6" fill="none" stroke="#2e7d32" strokeWidth="1" opacity="0.2" />
      <rect x="850" y="480" width="200" height="140" rx="6" fill="none" stroke="#c49a2b" strokeWidth="1" opacity="0.2" />
      <rect x="80" y="620" width="160" height="100" rx="6" fill="none" stroke="#0066cc" strokeWidth="1" opacity="0.2" />
      {/* Dashed connection lines */}
      <line x1="560" y1="260" x2="850" y2="480" stroke="#c49a2b" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.2" />
      <line x1="560" y1="260" x2="240" y2="620" stroke="#0066cc" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.2" />
    </svg>
  )
}

// 3D PCB Model (CSS 3D)
function PCB3DModel() {
  return (
    <div className="pcb-3d-wrapper w-full flex items-center justify-center" style={{ minHeight: '340px' }}>
      <div className="pcb-3d relative" style={{ width: '320px', height: '220px', transformStyle: 'preserve-3d', perspective: '800px' }}>
        {/* PCB Board */}
        <div 
          className="absolute rounded-xl overflow-hidden"
          style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #1a5c1a 0%, #0d3d0d 50%, #1a5c1a 100%)',
            transform: 'rotateX(15deg) rotateY(-15deg)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Traces */}
          <svg width="100%" height="100%" className="absolute inset-0 opacity-60">
            <defs>
              <linearGradient id="pcdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c49a2b" />
                <stop offset="100%" stopColor="#e8d5a0" />
              </linearGradient>
            </defs>
            {[20, 45, 70, 95, 120, 145, 170, 195].map((y, i) => (
              <line key={i} x1="0" y1={y} x2={320 - y} y2={y} stroke="url(#pcdGrad)" strokeWidth="0.8" />
            ))}
            {[30, 80, 130, 180, 230, 280].map((x, i) => (
              <line key={i} x1={x} y1="0" x2={x} y2="220" stroke="url(#pcdGrad)" strokeWidth="0.8" />
            ))}
          </svg>
          
          {/* Copper Pads */}
          {[
            {x:20,y:20,w:24,h:24}, {x:60,y:15,w:18,h:18}, {x:100,y:22,w:28,h:28},
            {x:150,y:18,w:20,h:20}, {x:200,y:12,w:22,h:22}, {x:250,y:25,w:26,h:26},
            {x:290,y:15,w:18,h:18}, {x:30,y:70,w:30,h:30}, {x:90,y:65,w:22,h:22},
            {x:145,y:72,w:25,h:25}, {x:200,y:68,w:20,h:20}, {x:255,y:75,w:24,h:24},
            {x:20,y:120,w:26,h:26}, {x:75,y:115,w:22,h:22}, {x:130,y:125,w:28,h:28},
            {x:185,y:118,w:20,h:20}, {x:240,y:122,w:25,h:25}, {x:285,y:115,w:22,h:22},
            {x:40,y:170,w:24,h:24}, {x:95,y:168,w:28,h:28}, {x:155,y:172,w:22,h:22},
            {x:210,y:165,w:26,h:26}, {x:265,y:170,w:24,h:24}, {x:15,y:190,w:20,h:20},
            {x:55,y:195,w:22,h:22}, {x:115,y:188,w:18,h:18}, {x:175,y:192,w:24,h:24},
            {x:235,y:185,w:28,h:28}, {x:290,y:195,w:18,h:18},
          ].map((pad, i) => (
            <div
              key={i}
              className="absolute rounded-sm animate-copper-pulse"
              style={{
                left: `${(pad.x / 320) * 100}%`,
                top: `${(pad.y / 220) * 100}%`,
                width: `${(pad.w / 320) * 100}%`,
                height: `${(pad.h / 220) * 100}%`,
                background: 'linear-gradient(135deg, #c49a2b 0%, #e8d5a0 60%, #c49a2b 100%)',
                animationDelay: `${(i * 0.12) % 2.5}s`,
              }}
            />
          ))}

          {/* IC Chip */}
          <div 
            className="absolute rounded-md overflow-hidden"
            style={{
              left: '30%', top: '35%', width: '40%', height: '30%',
              background: '#1a1a1a',
              border: '1px solid #333',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            <div className="text-[6px] text-[#c49a2b] text-center mt-1 font-mono opacity-70">DKPCB-IC-32L</div>
            {/* Chip pins */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around px-1">
              {[0,1,2,3,4,5,6,7].map(i => (
                <div key={i} className="w-1 h-2 bg-[#c49a2b] opacity-70" />
              ))}
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div 
          className="absolute rounded-xl"
          style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,102,204,0.05), transparent)',
            transform: 'rotateX(15deg) rotateY(-15deg) translateZ(-1px)',
            borderRadius: '0.75rem',
          }}
        />
      </div>
    </div>
  )
}

// Animated Counter
function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current * 10) / 10)
          }
        }, duration / steps)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="stat-number">
      {prefix}{typeof count === 'number' ? (Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)) : count}{suffix}
    </div>
  )
}

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Cursor Glow Effect
function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div 
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}

// Product Card Icons (SVG)
const ProductIcons: Record<string, React.ReactNode> = {
  multilayer: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <rect x="12" y="12" width="24" height="24" rx="2" />
      <line x1="8" y1="20" x2="40" y2="20" />
      <line x1="8" y1="28" x2="40" y2="28" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <circle cx="28" cy="28" r="2" fill="currentColor" />
    </svg>
  ),
  hdi: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="6" y="6" width="36" height="36" rx="4" />
      <circle cx="24" cy="24" r="4" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="12" />
      <line x1="24" y1="6" x2="24" y2="12" />
      <line x1="24" y1="36" x2="24" y2="42" />
      <line x1="6" y1="24" x2="12" y2="24" />
      <line x1="36" y1="24" x2="42" y2="24" />
    </svg>
  ),
  rf: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M8 24 Q14 10, 20 24 Q26 38, 32 24 Q38 10, 44 24" />
      <line x1="8" y1="24" x2="44" y2="24" strokeDasharray="2 2" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <circle cx="34" cy="34" r="2" fill="currentColor" />
      <rect x="10" y="30" width="8" height="4" rx="1" />
      <rect x="30" y="14" width="8" height="4" rx="1" />
    </svg>
  ),
  heavy: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <line x1="12" y1="20" x2="36" y2="20" strokeWidth="3" />
      <line x1="12" y1="28" x2="36" y2="28" strokeWidth="3" />
      <circle cx="16" cy="20" r="2" fill="currentColor" />
      <circle cx="32" cy="28" r="2" fill="currentColor" />
    </svg>
  ),
  flex: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M8 18 Q16 8, 24 18 Q32 28, 40 18" />
      <path d="M8 30 Q16 20, 24 30 Q32 40, 40 30" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <circle cx="34" cy="34" r="2" fill="currentColor" />
    </svg>
  ),
  ceramic: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="8" y="14" width="32" height="20" rx="3" />
      <line x1="8" y1="24" x2="40" y2="24" strokeWidth="2" />
      <line x1="20" y1="14" x2="20" y2="34" strokeWidth="2" />
      <circle cx="14" cy="19" r="1.5" fill="currentColor" />
      <circle cx="28" cy="29" r="1.5" fill="currentColor" />
    </svg>
  ),
}

export default function Home() {
  useScrollReveal()

  return (
    <main className="relative">
      <CursorGlow />
      <CircuitBackground />

      {/* ========================
          HERO SECTION
          ======================== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#f5f7fa]">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <span className="section-label">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
                  ISO 9001 Certified · Global Delivery
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1a2332] tracking-tight animate-slide-up stagger-1">
                  精密PCB制造
                  <br />
                  <span className="bg-gradient-to-r from-[#0066cc] to-[#2e7d32] bg-clip-text text-transparent">
                    · 全球交付
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-[#5a6678] leading-relaxed max-w-lg animate-slide-up stagger-2">
                  Precision PCB Manufacturing & Global Delivery. 
                  One-Stop EMS solution — from prototype to mass production.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
                <Link href="/products" className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-center flex items-center justify-center gap-2 shadow-lg shadow-[#0066cc]/20">
                  <span>Get Instant Quote</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="btn-outline font-semibold px-8 py-4 rounded-full text-center">
                  Explore Capabilities
                </Link>
              </div>

              {/* Quick stats row */}
              <div className="flex items-center gap-6 pt-4 animate-slide-up stagger-4">
                {[
                  { value: '50+', label: 'Countries Served' },
                  { value: '99.8%', label: 'On-Time Delivery' },
                  { value: '24h', label: 'Fast Turnaround' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-[#0066cc]">{s.value}</div>
                    <div className="text-xs text-[#8896a6] mt-0.5">{s.label}</div>
                    {i < 2 && <div className="hidden sm:block absolute h-8 w-px bg-[#e2e8f0] -right-3" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D PCB Model */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/5 to-[#2e7d32]/5 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl p-8 flex items-center justify-center" style={{ minHeight: '380px' }}>
                <PCB3DModel />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 animate-float">
                <div className="text-xs font-semibold text-[#2e7d32]">✓ IPC Class 2/3</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-semibold text-[#c49a2b]">⚡ 24H Express</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data flow divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="data-flow-line" />
        </div>
      </section>

      {/* ========================
          GLOBAL SERVICES BAR
          ======================== */}
      <section className="relative z-10 bg-white border-b border-[#e2e8f0]">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🌐', title: '50+ Countries', desc: 'Worldwide shipping & support' },
              { icon: '🚚', title: 'Sea & Air Freight', desc: 'Flexible logistics solutions' },
              { icon: '🌍', title: 'Multi-Language', desc: 'EN, DE, FR, JP, KR, AR' },
              { icon: '⚡', title: 'Rapid Prototyping', desc: '24h–5 day turnaround' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#f5f7fa] flex items-center justify-center text-2xl group-hover:bg-[#0066cc]/5 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a2332]">{item.title}</div>
                  <div className="text-xs text-[#8896a6]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          STATS SECTION
          ======================== */}
      <section className="relative z-10 bg-[#f5f7fa] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: '+', label: 'Global Clients', prefix: '' },
              { value: 10000000, suffix: '+', label: 'PCBs Produced', prefix: '' },
              { value: 99.5, suffix: '%', label: 'Quality Pass Rate', prefix: '' },
              { value: 32, suffix: '', label: 'Max PCB Layers', prefix: '' },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-extrabold text-[#1a2332] mb-1">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-[#8896a6] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          PCB TYPES SECTION
          ======================== */}
      <section className="relative z-10 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="section-label mb-4 inline-flex">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
              Our Products
            </span>
            <h2 className="section-title mt-2">PCB Manufacturing Capabilities</h2>
            <p className="section-desc mt-4 max-w-2xl mx-auto">
              From standard FR4 to advanced RF, HDI, and ceramic substrates — we manufacture every PCB type with precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: 'multilayer', title: 'Multi-Layer PCB', subtitle: '1 – 32 Layers', desc: 'HDI, blind/buried vias, any layer interconnection. For complex applications in telecom, automotive, and aerospace.', tags: ['HDI', 'Any Layer', 'Up to 32L'] },
              { key: 'rf', title: 'RF / Microwave PCB', subtitle: 'High Frequency', desc: 'Rogers, high-TG materials for 5G, radar, satellite communications, and wireless systems.', tags: ['Rogers 3010', 'Rogers 4350B', 'Low Loss'] },
              { key: 'heavy', title: 'Heavy Copper PCB', subtitle: '2 – 6 oz Copper', desc: 'Power electronics, EV charging, industrial controls, and high-current applications.', tags: ['6 oz Max', 'Power Electronics', 'Automotive'] },
              { key: 'flex', title: 'Flexible / Rigid-Flex', subtitle: 'FPC & Rigid-Flex', desc: 'Flexible printed circuits and rigid-flex combinations for wearable, automotive, and dynamic applications.', tags: ['FPC', 'Rigid-Flex', 'Wearables'] },
              { key: 'ceramic', title: 'Ceramic PCB', subtitle: 'Alumina / AlN', desc: 'Superior thermal conductivity for LED lighting, high-power semiconductors, and aerospace electronics.', tags: ['Al₂O₃', 'AlN', 'High Thermal'] },
              { key: 'hdi', title: 'HDI PCB', subtitle: 'High Density Interconnect', desc: 'Micro-via technology for smartphones, medical devices, and ultra-compact electronics.', tags: ['Micro-via', 'Any Layer HDI', 'Fine Pitch'] },
            ].map((pcb, i) => (
              <div 
                key={pcb.key}
                className="glass-card rounded-2xl p-6 hover-lift reveal cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-[#0066cc]">
                    {ProductIcons[pcb.key]}
                  </div>
                  <span className="text-xs font-medium text-[#8896a6] bg-[#f5f7fa] px-3 py-1 rounded-full">
                    {pcb.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1a2332] mb-2">{pcb.title}</h3>
                <p className="text-sm text-[#5a6678] leading-relaxed mb-4">{pcb.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pcb.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-[#f5f7fa] text-[#5a6678] font-medium border border-[#e2e8f0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/products" className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2">
              View Full Product Range
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================
          WHY DKPCB
          ======================== */}
      <section className="relative z-10 bg-[#f5f7fa] py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="section-label mb-4 inline-flex">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
                Why DKPCB
              </span>
              <h2 className="section-title mt-2 mb-4">One-Stop EMS Partner<br />You Can Trust</h2>
              <p className="section-desc mb-8">
                We provide comprehensive PCB and electronics manufacturing services — from design consultation and DFM analysis to mass production and global logistics.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🔍', title: 'Free DFM Check', desc: 'Our engineers review your design before production to catch potential issues early — saving you time and costs.' },
                  { icon: '📦', title: 'No Minimum Order', desc: 'Order from 1 piece for prototyping or scale up to mass production. We handle every order with the same care.' },
                  { icon: '🏭', title: 'Fulltrace Quality', desc: 'ISO 9001 certified facilities with 100% electrical test, AOI inspection, and IPC Class 2/3 compliance.' },
                  { icon: '🚚', title: 'On-Time, Every Time', desc: 'Reliable production scheduling with 99.8% on-time delivery rate. Your timeline is our priority.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-0.5">{item.title}</h4>
                      <p className="text-sm text-[#5a6678] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Service Diagram */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="relative">
                <div className="glass-card rounded-3xl p-8">
                  <div className="space-y-4">
                    {[
                      { step: '01', title: 'Design & Consultation', desc: 'Share your Gerber files or idea — we provide free DFM analysis', color: '#0066cc', icon: '🎨' },
                      { step: '02', title: 'Prototype & Approval', desc: 'Fast 24h–5 day prototyping with sample photos and test reports', color: '#2e7d32', icon: '⚡' },
                      { step: '03', title: 'Mass Production', desc: 'Scalable manufacturing with strict quality control at every stage', color: '#c49a2b', icon: '🏭' },
                      { step: '04', title: 'Global Delivery', desc: 'Reliable shipping via DHL, FedEx, or sea freight to your door', color: '#0066cc', icon: '🚚' },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 font-bold"
                          style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}30` }}
                        >
                          {s.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold" style={{ color: s.color }}>{s.step}</span>
                            <h4 className="font-semibold text-[#1a2332] text-sm">{s.title}</h4>
                          </div>
                          <p className="text-xs text-[#8896a6] mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          MATERIALS SECTION
          ======================== */}
      <section className="relative z-10 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="section-label mb-4 inline-flex">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
              Material Options
            </span>
            <h2 className="section-title mt-2">Supported PCB Materials</h2>
            <p className="section-desc mt-3 max-w-xl mx-auto">Wide range of substrates for every application — from standard FR4 to advanced ceramic and high-frequency materials.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 reveal" style={{ transitionDelay: '0.1s' }}>
            {[
              'FR4 Standard', 'FR4 High-TG', 'CEM-1', 'CEM-3',
              'Aluminum Core', 'Rogers 3010', 'Rogers 4350B',
              'Panasonic M6', 'Isola 370HR', 'Dupont AP8515',
              'Alumina Ceramic', 'AlN Ceramic', 'Heavy Copper',
              'Flexible substrates',
            ].map((mat, i) => (
              <div 
                key={i} 
                className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default hover:border-[#0066cc] hover:text-[#0066cc] hover:bg-[#0066cc]/5"
                style={{ 
                  background: i % 3 === 0 ? '#f5f7fa' : i % 3 === 1 ? 'rgba(0,102,204,0.04)' : 'rgba(46,125,50,0.04)',
                  borderColor: i % 3 === 0 ? '#e2e8f0' : i % 3 === 1 ? 'rgba(0,102,204,0.2)' : 'rgba(46,125,50,0.2)',
                  color: '#5a6678',
                }}
              >
                {mat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          CERTIFICATIONS
          ======================== */}
      <section className="relative z-10 bg-[#f5f7fa] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 reveal">
            <span className="section-label mb-3 inline-flex">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
              Quality Assurance
            </span>
            <h2 className="section-title text-2xl mt-2">Certified Quality Standards</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'IPC Class 2', desc: 'Industry Standard' },
              { name: 'IPC Class 3', desc: 'Industry Standard' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'RoHS', desc: 'Environmental' },
              { name: 'CE', desc: 'Europe Compliance' },
            ].map((cert, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-[#f5f7fa] mx-auto mb-3 flex items-center justify-center text-xs font-bold text-[#0066cc] border border-[#e2e8f0]">
                  {cert.name.slice(0, 2)}
                </div>
                <div className="text-sm font-semibold text-[#1a2332]">{cert.name}</div>
                <div className="text-xs text-[#8896a6] mt-0.5">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          CTA SECTION
          ======================== */}
      <section className="relative z-10 bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative reveal">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0066cc]/3 blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <span className="section-label mb-6 inline-flex">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
              Start Your Project
            </span>
            <h2 className="section-title text-3xl md:text-4xl mt-2 mb-4">
              Ready to Bring Your PCB to Life?
            </h2>
            <p className="section-desc max-w-xl mx-auto mb-8">
              Upload your Gerber files and get an instant quote. Our team is ready to support your project from prototype to mass production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="btn-primary text-white font-semibold px-10 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg shadow-xl shadow-[#0066cc]/15"
              >
                <span>Get PCB Quote Now</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline font-semibold px-10 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-sm text-[#8896a6] mt-6">
              ⚡ Average response time: within 2 hours · 📧 sales09dk@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
