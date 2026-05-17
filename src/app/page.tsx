'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// ANIMATED COUNTER
// ============================================================
function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 80
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
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="tabular-nums font-extrabold">
      {prefix}{count % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}{suffix}
    </div>
  )
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ============================================================
// CURSOR GLOW
// ============================================================
function CursorGlow() {
  const [pos, setPos] = useState({ x: -600, y: -600 })
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: 0, borderRadius: '50%',
    background: 'radial-gradient(circle 200px at var(--x, -600px) var(--y, -600px), rgba(0,102,204,0.04) 0%, transparent 70%)',
    '--x': `${pos.x}px`, '--y': `${pos.y}px`,
  } as React.CSSProperties} />
}

// ============================================================
// PCB 3D MODEL
// ============================================================
function PCBModel() {
  return (
    <div style={{ perspective: '900px', perspectiveOrigin: '50% 50%' }}>
      <div style={{
        width: '360px', height: '260px',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(18deg) rotateY(-20deg)',
        position: 'relative',
        animation: 'pcb-float 6s ease-in-out infinite',
      }}>
        {/* Board shadow */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '12px',
          background: 'rgba(0,0,0,0.15)',
          filter: 'blur(20px)',
          transform: 'translateZ(-40px) scale(1.1)',
        }} />
        {/* Board base */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '12px',
          background: 'linear-gradient(145deg, #1b5e20 0%, #2e7d32 40%, #1b5e20 100%)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Solder mask overlay */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '12px',
            background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)',
          }} />

          {/* Copper Traces - SVG */}
          <svg width="100%" height="100%" viewBox="0 0 360 260" style={{ position: 'absolute', inset: 0, opacity: 0.7 }}>
            <defs>
              <linearGradient id="cu" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c49a2b"/>
                <stop offset="50%" stopColor="#e8d5a0"/>
                <stop offset="100%" stopColor="#c49a2b"/>
              </linearGradient>
            </defs>
            {/* Horizontal traces */}
            {[35,65,95,125,155,185,215].map((y,i) => (
              <line key={`h${i}`} x1="15" y1={y} x2={345-y*0.5} y2={y} stroke="url(#cu)" strokeWidth="1.2" />
            ))}
            {/* Vertical traces */}
            {[30,60,90,120,150,180,210,240,270,300,330].map((x,i) => (
              <line key={`v${i}`} x1={x} y1="15" x2={x} y2={245} stroke="url(#cu)" strokeWidth="1.2" />
            ))}
            {/* Diagonal traces */}
            <line x1="30" y1="35" x2="150" y2="185" stroke="url(#cu)" strokeWidth="1" opacity="0.6"/>
            <line x1="180" y1="95" x2="330" y2="215" stroke="url(#cu)" strokeWidth="1" opacity="0.6"/>
          </svg>

          {/* Copper Pads */}
          {[
            {x:22,y:22,w:18,h:18}, {x:55,y:18,w:14,h:14}, {x:88,y:25,w:20,h:20},
            {x:130,y:16,w:16,h:16}, {x:165,y:28,w:22,h:22}, {x:210,y:20,w:18,h:18},
            {x:250,y:14,w:20,h:20}, {x:300,y:24,w:16,h:16}, {x:330,y:18,w:14,h:14},
            {x:18,y:55,w:22,h:22}, {x:60,y:60,w:16,h:16}, {x:100,y:52,w:20,h:20},
            {x:145,y:62,w:14,h:14}, {x:185,y:55,w:18,h:18}, {x:230,y:65,w:22,h:22},
            {x:275,y:50,w:16,h:16}, {x:320,y:58,w:18,h:18},
            {x:22,y:95,w:18,h:18}, {x:65,y:100,w:20,h:20}, {x:110,y:92,w:14,h:14},
            {x:155,y:105,w:22,h:22}, {x:200,y:88,w:16,h:16}, {x:245,y:98,w:20,h:20},
            {x:290,y:105,w:18,h:18}, {x:330,y:90,w:14,h:14},
            {x:18,y:140,w:20,h:20}, {x:60,y:135,w:16,h:16}, {x:105,y:145,w:22,h:22},
            {x:150,y:130,w:18,h:18}, {x:195,y:142,w:20,h:20}, {x:240,y:135,w:14,h:14},
            {x:285,y:148,w:22,h:22}, {x:325,y:132,w:16,h:16},
            {x:22,y:180,w:16,h:16}, {x:65,y:175,w:22,h:22}, {x:115,y:185,w:18,h:18},
            {x:160,y:172,w:20,h:20}, {x:205,y:180,w:14,h:14}, {x:250,y:175,w:22,h:22},
            {x:295,y:188,w:16,h:16}, {x:335,y:170,w:18,h:18},
            {x:18,y:220,w:20,h:20}, {x:60,y:215,w:14,h:14}, {x:105,y:225,w:22,h:22},
            {x:150,y:210,w:16,h:16}, {x:200,y:220,w:18,h:18}, {x:245,y:212,w:20,h:20},
            {x:290,y:222,w:14,h:14}, {x:330,y:215,w:22,h:22},
          ].map((pad, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${(pad.x/360)*100}%`,
              top: `${(pad.y/260)*100}%`,
              width: `${(pad.w/360)*100}%`,
              height: `${(pad.h/260)*100}%`,
              background: 'linear-gradient(135deg, #c49a2b 0%, #e8d5a0 50%, #c49a2b 100%)',
              borderRadius: '2px',
              boxShadow: '0 0 4px rgba(196,154,43,0.4)',
              animation: `pad-pulse ${1.5 + (i%5)*0.4}s ease-in-out infinite`,
              animationDelay: `${(i*0.08)%2}s`,
            }} />
          ))}

          {/* IC Chip */}
          <div style={{
            position: 'absolute',
            left: '28%', top: '30%', width: '44%', height: '40%',
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.4)',
          }}>
            {/* Silk screen */}
            <div style={{ position: 'absolute', top: '4px', left: '50%', transform: 'translateX(-50%)',
              fontSize: '5px', color: '#ffffff', opacity: 0.35, fontFamily: 'monospace', letterSpacing: '0.5px'
            }}>DKPCB-IC-32L</div>
            {/* Top pins */}
            <div style={{ position: 'absolute', top: '-4px', left: '10%', right: '10%', display: 'flex', justifyContent: 'space-between' }}>
              {[0,1,2,3,4,5,6,7].map(i => <div key={i} style={{ width: '3px', height: '5px', background: '#c49a2b', borderRadius: '0 0 1px 1px', opacity: 0.7 }} />)}
            </div>
            {/* Bottom pins */}
            <div style={{ position: 'absolute', bottom: '-4px', left: '10%', right: '10%', display: 'flex', justifyContent: 'space-between' }}>
              {[0,1,2,3,4,5,6,7].map(i => <div key={i} style={{ width: '3px', height: '5px', background: '#c49a2b', borderRadius: '1px 1px 0 0', opacity: 0.7 }} />)}
            </div>
          </div>

          {/* Vias */}
          {[
            {x:110,y:55},{x:260,y:55},{x:110,y:195},{x:260,y:195},
            {x:55,y:130},{x:310,y:130},{x:55,y:200},{x:310,y:200},
          ].map((via, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${(via.x/360)*100}%`, top: `${(via.y/260)*100}%`,
              width: '6px', height: '6px', marginLeft: '-3px', marginTop: '-3px',
              borderRadius: '50%', border: '1.5px solid #c49a2b',
              background: 'rgba(0,0,0,0.5)',
              boxShadow: '0 0 4px rgba(196,154,43,0.3)',
            }} />
          ))}

          {/* Mounting holes */}
          {[{x:18,y:18},{x:18,y:242},{x:342,y:18},{x:342,y:242}].map((h, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${(h.x/360)*100}%`, top: `${(h.y/260)*100}%`,
              width: '12px', height: '12px', marginLeft: '-6px', marginTop: '-6px',
              borderRadius: '50%', background: '#0d3d0d',
              border: '2px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)',
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// SECTION LABEL
// ============================================================
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#0066cc', padding: '4px 12px', background: 'rgba(0,102,204,0.06)',
      borderRadius: '20px', border: '1px solid rgba(0,102,204,0.12)',
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0066cc', display: 'inline-block' }}/>
      {children}
    </div>
  )
}

// ============================================================
// PCB TYPE CARDS
// ============================================================
const PCB_TYPES = [
  {
    key: 'multilayer', color: '#0066cc', bg: 'rgba(0,102,204,0.05)',
    title: 'Multi-Layer PCB', subtitle: '1 – 32 Layers',
    desc: 'HDI, blind/buried vias, any-layer interconnection. For telecom, automotive, aerospace and industrial applications.',
    tags: ['HDI', 'Any Layer', 'Up to 32L'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#0066cc" strokeWidth="1.4" style={{width:40,height:40}}>
      <rect x="4" y="4" width="32" height="32" rx="3"/>
      <rect x="8" y="8" width="24" height="24" rx="2"/>
      <line x1="4" y1="16" x2="36" y2="16"/>
      <line x1="4" y1="24" x2="36" y2="24"/>
      <circle cx="13" cy="16" r="2" fill="#0066cc"/>
      <circle cx="27" cy="24" r="2" fill="#0066cc"/>
      <circle cx="20" cy="20" r="1.5" fill="#0066cc"/>
    </svg>
  },
  {
    key: 'rf', color: '#2e7d32', bg: 'rgba(46,125,50,0.05)',
    title: 'RF / Microwave', subtitle: 'High Frequency',
    desc: 'Rogers, high-TG materials for 5G base stations, radar, satellite communications and wireless systems.',
    tags: ['Rogers 3010', 'Rogers 4350B', 'Low Loss'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#2e7d32" strokeWidth="1.4" style={{width:40,height:40}}>
      <path d="M4 20 Q10 6 16 20 Q22 34 28 20 Q34 6 40 20"/>
      <line x1="4" y1="20" x2="36" y2="20" strokeDasharray="2 2"/>
      <circle cx="12" cy="12" r="2" fill="#2e7d32"/>
      <circle cx="28" cy="28" r="2" fill="#2e7d32"/>
    </svg>
  },
  {
    key: 'heavy', color: '#c49a2b', bg: 'rgba(196,154,43,0.05)',
    title: 'Heavy Copper', subtitle: '2 – 6 oz',
    desc: 'Thick copper PCB for power electronics, EV charging, motor controls and high-current applications.',
    tags: ['6 oz Max', 'Power Electronics', 'Automotive'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#c49a2b" strokeWidth="1.4" style={{width:40,height:40}}>
      <rect x="4" y="10" width="32" height="20" rx="3"/>
      <line x1="8" y1="17" x2="32" y2="17" strokeWidth="3.5" stroke="#c49a2b"/>
      <line x1="8" y1="23" x2="32" y2="23" strokeWidth="3.5" stroke="#c49a2b"/>
      <circle cx="13" cy="17" r="2" fill="#c49a2b"/>
      <circle cx="27" cy="23" r="2" fill="#c49a2b"/>
    </svg>
  },
  {
    key: 'flex', color: '#7b3fbf', bg: 'rgba(123,63,191,0.05)',
    title: 'Flexible PCB', subtitle: 'FPC & Rigid-Flex',
    desc: 'Flexible printed circuits and rigid-flex for wearables, automotive HUDs, drones and dynamic environments.',
    tags: ['FPC', 'Rigid-Flex', 'Wearables'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#7b3fbf" strokeWidth="1.4" style={{width:40,height:40}}>
      <path d="M4 14 Q12 6 20 14 Q28 22 36 14"/>
      <path d="M4 26 Q12 18 20 26 Q28 34 36 26"/>
      <circle cx="11" cy="10" r="2" fill="#7b3fbf"/>
      <circle cx="29" cy="30" r="2" fill="#7b3fbf"/>
    </svg>
  },
  {
    key: 'ceramic', color: '#b71c1c', bg: 'rgba(183,28,28,0.04)',
    title: 'Ceramic PCB', subtitle: 'Al₂O₃ / AlN',
    desc: 'Superior thermal conductivity for LED drivers, IGBT modules, aerospace electronics and high-power LEDs.',
    tags: ['Al₂O₃', 'AlN Ceramic', 'High Thermal'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#b71c1c" strokeWidth="1.4" style={{width:40,height:40}}>
      <rect x="4" y="12" width="32" height="16" rx="3"/>
      <line x1="4" y1="20" x2="36" y2="20" strokeWidth="2.5"/>
      <line x1="16" y1="12" x2="16" y2="28" strokeWidth="2.5"/>
      <circle cx="10" cy="16" r="1.5" fill="#b71c1c"/>
      <circle cx="26" cy="24" r="1.5" fill="#b71c1c"/>
    </svg>
  },
  {
    key: 'hdi', color: '#0066cc', bg: 'rgba(0,102,204,0.05)',
    title: 'HDI PCB', subtitle: 'High Density',
    desc: 'Micro-via technology for smartphones, medical devices, AI accelerators and ultra-compact electronics.',
    tags: ['Micro-via', 'Any Layer HDI', 'Fine Pitch'],
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="#0066cc" strokeWidth="1.4" style={{width:40,height:40}}>
      <rect x="4" y="4" width="32" height="32" rx="4"/>
      <circle cx="20" cy="20" r="4"/>
      <circle cx="20" cy="20" r="8"/>
      <circle cx="20" cy="20" r="12"/>
      <line x1="20" y1="4" x2="20" y2="12"/>
      <line x1="20" y1="28" x2="20" y2="36"/>
      <line x1="4" y1="20" x2="12" y2="20"/>
      <line x1="28" y1="20" x2="36" y2="20"/>
    </svg>
  },
]

// ============================================================
// WHY DKPCB DATA
// ============================================================
const WHY_ITEMS = [
  { icon: '🔍', title: 'Free DFM Check', desc: 'Our engineers review your design before production to catch issues early — saving time and cost.' },
  { icon: '📦', title: 'No Minimum Order', desc: 'Order from 1 piece for prototyping or scale to mass production with the same quality care.' },
  { icon: '✅', title: 'ISO 9001 Certified', desc: 'Strict quality management with 100% E-test, AOI inspection, and IPC Class 2/3 compliance.' },
  { icon: '🚚', title: 'On-Time Delivery', desc: 'Reliable production scheduling with 99.8% on-time rate. Your timeline is our priority.' },
  { icon: '🌍', title: 'Global Logistics', desc: 'Worldwide shipping via DHL, FedEx and sea freight. Door-to-door service available.' },
  { icon: '⚡', title: '24H Quick Turn', desc: 'Express prototyping available. Standard lead time 5–7 days from order confirmation.' },
]

// ============================================================
// HOME PAGE
// ============================================================
export default function Home() {
  useScrollReveal()

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <CursorGlow />

      {/* =================== HERO =================== */}
      <section style={{
        minHeight: '100vh', paddingTop: '80px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)',
        display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden'
      }}>
        {/* Subtle circuit decoration */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
        }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${10 + i * 12}%`,
              top: 0, bottom: 0,
              width: '1px',
              background: `linear-gradient(180deg, transparent, rgba(0,102,204,0.04) 30%, rgba(196,154,43,0.04) 70%, transparent)`,
            }} />
          ))}
        </div>

        <div className="container mx-auto px-6 py-16" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Label */}
              <div style={{ opacity: 0, animation: 'slideUp 0.6s ease forwards' }}>
                <SectionLabel>ISO 9001 · Global Delivery · One-Stop EMS</SectionLabel>
              </div>

              {/* Headline */}
              <div style={{ opacity: 0, animation: 'slideUp 0.7s ease forwards', animationDelay: '0.1s' }}>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1,
                  letterSpacing: '-0.03em', color: '#1a2332', marginBottom: '8px'
                }}>
                  Precision PCB<br/>
                  <span style={{ background: 'linear-gradient(135deg, #0066cc, #2e7d32)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Manufacturing
                  </span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#5a6678', lineHeight: 1.7, maxWidth: '460px', marginTop: '12px' }}>
                  Professional PCB fabrication & assembly from prototype to mass production. 
                  Serving 50+ countries with ISO 9001 certified quality.
                </p>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', opacity: 0, animation: 'slideUp 0.7s ease forwards', animationDelay: '0.2s' }}>
                <Link href="/products" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
                  color: 'white', fontWeight: 600, fontSize: '1rem',
                  padding: '14px 28px', borderRadius: '50px',
                  boxShadow: '0 4px 16px rgba(0,102,204,0.25)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}>
                  Get Free Quote
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1.5px solid #0066cc', color: '#0066cc',
                  fontWeight: 600, fontSize: '1rem',
                  padding: '14px 28px', borderRadius: '50px',
                  transition: 'all 0.3s ease', textDecoration: 'none',
                }}>
                  View Capabilities
                </Link>
              </div>

              {/* Quick Stats */}
              <div style={{
                display: 'flex', gap: '32px', paddingTop: '8px', opacity: 0,
                animation: 'slideUp 0.7s ease forwards', animationDelay: '0.35s'
              }}>
                {[
                  { value: <><AnimatedNumber target={50} suffix="+" />{' '}</>, label: 'Countries' },
                  { value: <><AnimatedNumber target={99.8} suffix="%" /></>, label: 'On-Time Rate' },
                  { value: <><AnimatedNumber target={32} /></>, label: 'Max Layers' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0066cc', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.72rem', color: '#8896a6', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
                    {i < 2 && <div style={{ position: 'absolute', right: '-16px', top: '4px', bottom: '4px', width: '1px', background: '#e2e8f0' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D PCB */}
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              opacity: 0, animation: 'fadeIn 1s ease forwards', animationDelay: '0.3s'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)',
                border: '0.5px solid #e2e8f0', borderRadius: '24px',
                padding: '48px 32px', position: 'relative',
                boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              }}>
                <PCBModel />
                {/* Floating badges */}
                <div style={{
                  position: 'absolute', top: '-12px', right: '-12px',
                  background: 'white', border: '0.5px solid #e2e8f0', borderRadius: '12px',
                  padding: '8px 14px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  animation: 'float 5s ease-in-out infinite',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#2e7d32' }}>✓ IPC Class 2/3</span>
                </div>
                <div style={{
                  position: 'absolute', bottom: '-12px', left: '-12px',
                  background: 'white', border: '0.5px solid #e2e8f0', borderRadius: '12px',
                  padding: '8px 14px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  animation: 'float 5s ease-in-out infinite', animationDelay: '1.5s',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#c49a2b' }}>⚡ 24H Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(196,154,43,0.3) 30%, rgba(0,102,204,0.3) 70%, transparent 100%)',
        }}/>
      </section>

      {/* =================== STATS =================== */}
      <section style={{ background: '#ffffff', borderTop: '1px solid #eef1f5', borderBottom: '1px solid #eef1f5' }}>
        <div className="container mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { num: 500, suffix: '+', label: 'Global Clients', icon: '🌐' },
              { num: 10000000, suffix: '+', label: 'PCBs Produced', icon: '🔧' },
              { num: 99.5, suffix: '%', label: 'Quality Pass Rate', icon: '✅' },
              { num: 32, suffix: '', label: 'Max PCB Layers', icon: '📊' },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{
                textAlign: 'center', padding: '40px 20px',
                borderRight: i < 3 ? '1px solid #eef1f5' : 'none',
                transitionDelay: `${i * 0.1}s`
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1a2332', lineHeight: 1 }}>
                  <AnimatedNumber target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8896a6', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== PCB TYPES =================== */}
      <section style={{ background: '#f5f7fa', padding: '96px 0' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }} className="reveal">
            <SectionLabel>Our Products</SectionLabel>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1a2332', marginTop: '16px', letterSpacing: '-0.02em' }}>
              PCB Manufacturing Capabilities
            </h2>
            <p style={{ color: '#5a6678', marginTop: '12px', fontSize: '1.05rem', maxWidth: '600px', margin: '12px auto 0', lineHeight: 1.7 }}>
              From standard FR4 to advanced RF and ceramic substrates — every PCB type, every layer count, every material.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {PCB_TYPES.map((pcb, i) => (
              <div key={pcb.key} className="reveal" style={{
                background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px',
                padding: '28px', transition: 'all 0.3s ease', cursor: 'pointer',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = pcb.color
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${pcb.color}15`
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ padding: '12px', borderRadius: '12px', background: pcb.bg }}>
                    {pcb.icon}
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: pcb.color, background: pcb.bg, padding: '4px 10px', borderRadius: '20px' }}>
                    {pcb.subtitle}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', marginBottom: '10px' }}>{pcb.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#5a6678', lineHeight: 1.65, marginBottom: '16px' }}>{pcb.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {pcb.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: '6px', background: '#f5f7fa', color: '#5a6678', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #c49a2b 0%, #0066cc 100%)',
              color: 'white', fontWeight: 600, fontSize: '0.95rem',
              padding: '14px 32px', borderRadius: '50px',
              boxShadow: '0 4px 16px rgba(0,102,204,0.2)',
              textDecoration: 'none',
            }}>
              View Full Product Range
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =================== WHY DKPCB =================== */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="container mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left */}
            <div className="reveal">
              <SectionLabel>Why DKPCB</SectionLabel>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a2332', marginTop: '16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                One-Stop EMS Partner<br/>Built on Trust
              </h2>
              <p style={{ color: '#5a6678', marginTop: '16px', fontSize: '1rem', lineHeight: 1.7 }}>
                We provide comprehensive PCB and electronics manufacturing — from design consultation to global delivery. Every step managed by our team.
              </p>

              <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {WHY_ITEMS.slice(0, 4).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: 'rgba(0,102,204,0.06)', border: '1px solid rgba(0,102,204,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.95rem', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: '#5a6678', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Process Flow */}
            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <div style={{
                background: '#f5f7fa', borderRadius: '20px', padding: '36px',
                border: '1px solid #e2e8f0',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a2332', marginBottom: '28px' }}>
                  Our Process
                </h3>
                {[
                  { step: '01', icon: '🎨', title: 'Design Review', desc: 'Share Gerber files or idea. Free DFM analysis within 4 hours.', color: '#0066cc' },
                  { step: '02', icon: '⚡', title: 'Prototype', desc: '24h–5 day sample production with photos and test reports.', color: '#c49a2b' },
                  { step: '03', icon: '🏭', title: 'Mass Production', desc: 'Scalable manufacturing with IPC quality at every stage.', color: '#2e7d32' },
                  { step: '04', icon: '🚚', title: 'Global Delivery', desc: 'DHL, FedEx or sea freight to your door. Trackable.', color: '#0066cc' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < 3 ? '28px' : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                        background: `${s.color}15`, border: `1.5px solid ${s.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                      }}>
                        {s.icon}
                      </div>
                      {i < 3 && <div style={{ width: '1.5px', flex: 1, minHeight: '24px', background: `linear-gradient(180deg, ${s.color}30, transparent)`, marginTop: '8px' }} />}
                    </div>
                    <div style={{ paddingTop: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: s.color }}>{s.step}</span>
                        <h4 style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.9rem' }}>{s.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#8896a6', lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== MATERIALS =================== */}
      <section style={{ background: '#f5f7fa', padding: '80px 0' }}>
        <div className="container mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <SectionLabel>Materials</SectionLabel>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a2332', marginTop: '16px' }}>
              Supported PCB Materials
            </h2>
            <p style={{ color: '#5a6678', marginTop: '10px', fontSize: '0.95rem' }}>
              Wide range of substrates for every application requirement
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', transitionDelay: '0.1s' }}>
            {[
              { label: 'FR4 Standard', type: 'std' },
              { label: 'FR4 High-TG', type: 'std' },
              { label: 'CEM-1', type: 'std' },
              { label: 'CEM-3', type: 'std' },
              { label: 'Aluminum Core', type: 'alu' },
              { label: 'Rogers 3010', type: 'rf' },
              { label: 'Rogers 4350B', type: 'rf' },
              { label: 'Panasonic M6', type: 'rf' },
              { label: 'Isola 370HR', type: 'rf' },
              { label: 'Dupont AP8515', type: 'flex' },
              { label: 'Alumina Ceramic (Al₂O₃)', type: 'cer' },
              { label: 'AlN Ceramic', type: 'cer' },
              { label: 'Heavy Copper 6oz', type: 'cu' },
              { label: 'Flexible Substrates', type: 'flex' },
            ].map((mat, i) => {
              const colors: Record<string, { bg: string, border: string, text: string }> = {
                std: { bg: '#ffffff', border: '#e2e8f0', text: '#5a6678' },
                rf: { bg: 'rgba(0,102,204,0.05)', border: 'rgba(0,102,204,0.2)', text: '#0052a3' },
                alu: { bg: 'rgba(196,154,43,0.05)', border: 'rgba(196,154,43,0.2)', text: '#8a6914' },
                flex: { bg: 'rgba(123,63,191,0.05)', border: 'rgba(123,63,191,0.2)', text: '#7b3fbf' },
                cer: { bg: 'rgba(183,28,28,0.04)', border: 'rgba(183,28,28,0.15)', text: '#b71c1c' },
                cu: { bg: 'rgba(196,154,43,0.08)', border: 'rgba(196,154,43,0.25)', text: '#c49a2b' },
              }
              const c = colors[mat.type]
              return (
                <div key={i} style={{
                  padding: '8px 18px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 500,
                  background: c.bg, border: `1px solid ${c.border}`, color: c.text,
                  transition: 'all 0.2s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 12px ${c.border}`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}>
                  {mat.label}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =================== GLOBAL SERVICES =================== */}
      <section style={{ background: '#ffffff', borderTop: '1px solid #eef1f5', borderBottom: '1px solid #eef1f5', padding: '48px 0' }}>
        <div className="container mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { icon: '🌐', title: '50+ Countries', desc: 'Worldwide shipping and multi-language support' },
              { icon: '🚚', title: 'Sea & Air Freight', desc: 'Flexible logistics with tracking' },
              { icon: '🌍', title: 'Multi-Language', desc: 'EN, DE, FR, JP, KR, AR support' },
              { icon: '⚡', title: 'Rapid Prototype', desc: '24h–5 day express service' },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', transitionDelay: `${i * 0.08}s` }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                  background: '#f5f7fa', border: '1px solid #e2e8f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.9rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#8896a6', marginTop: '2px' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CERTIFICATIONS =================== */}
      <section style={{ background: '#f5f7fa', padding: '64px 0' }}>
        <div className="container mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
            <SectionLabel>Quality</SectionLabel>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a2332', marginTop: '14px' }}>
              Certified Quality Standards
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }} className="reveal">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'IPC Class 2', desc: 'Industry Standard' },
              { name: 'IPC Class 3', desc: 'Industry Standard' },
              { name: 'UL Certified', desc: 'Safety Standard' },
              { name: 'RoHS', desc: 'Environmental' },
              { name: 'CE', desc: 'Europe Compliance' },
            ].map((cert, i) => (
              <div key={i} style={{
                background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px',
                padding: '24px 12px', textAlign: 'center', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#0066cc'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,102,204,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto 12px',
                  background: 'rgba(0,102,204,0.06)', border: '1px solid rgba(0,102,204,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 800, color: '#0066cc',
                }}>
                  {cert.name.slice(0, 2)}
                </div>
                <div style={{ fontWeight: 700, color: '#1a2332', fontSize: '0.85rem' }}>{cert.name}</div>
                <div style={{ fontSize: '0.72rem', color: '#8896a6', marginTop: '4px' }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CTA =================== */}
      <section style={{ background: '#ffffff', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,204,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container mx-auto px-6" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="reveal">
            <SectionLabel>Start Your Project</SectionLabel>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1a2332', marginTop: '16px', letterSpacing: '-0.02em' }}>
              Ready to Bring Your PCB to Life?
            </h2>
            <p style={{ color: '#5a6678', marginTop: '14px', fontSize: '1rem', maxWidth: '520px', margin: '14px auto 0', lineHeight: 1.7 }}>
              Upload your Gerber files and get an instant quote. Our team responds within 2 hours.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #c49a2b 0%, #0066cc 100%)',
                color: 'white', fontWeight: 700, fontSize: '1rem',
                padding: '16px 36px', borderRadius: '50px',
                boxShadow: '0 6px 24px rgba(0,102,204,0.25)',
                textDecoration: 'none',
              }}>
                Get PCB Quote Now
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1.5px solid #0066cc', color: '#0066cc',
                fontWeight: 600, fontSize: '1rem',
                padding: '16px 36px', borderRadius: '50px',
                textDecoration: 'none',
              }}>
                Contact Us
              </Link>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#8896a6', marginTop: '20px' }}>
              ⚡ Average response: within 2 hours · 📧 sales09dk@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Global CSS animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pad-pulse {
          0%, 100% { box-shadow: 0 0 3px rgba(196,154,43,0.3); }
          50% { box-shadow: 0 0 8px rgba(196,154,43,0.7); }
        }
        @keyframes pcb-float {
          0%, 100% { transform: rotateX(18deg) rotateY(-20deg) translateY(0); }
          50% { transform: rotateX(18deg) rotateY(-20deg) translateY(-10px); }
        }
        .reveal {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1; transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
