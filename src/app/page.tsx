import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DKPCB - Professional PCB Manufacturing & Assembly Service',
  description:
    'DKPCB is a professional PCB manufacturer in China. We offer custom PCB prototyping, multilayer fabrication and assembly with fast turnaround and competitive pricing. Request a free quote today.',
  alternates: {
    canonical: '/',
  },
}

// 首页 Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'PCB Manufacturing',
  provider: {
    '@type': 'Organization',
    name: 'DKPCB',
    url: 'https://dkpcb.com',
  },
  description:
    'Professional PCB prototyping, fabrication and assembly services from China. 1-32 layers, fast turnaround, low MOQ.',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    description: 'Custom PCB fabrication starting from prototype quantities',
  },
}

// FAQ Schema（提升搜索结果显示）
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity for PCB manufacturing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DKPCB accepts orders from 1 piece for prototypes. We support low MOQ for all PCB types including single layer, double layer and multilayer PCBs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the PCB turnaround time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard turnaround is 3-5 business days. We also offer 24-hour express service for urgent PCB prototypes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What PCB materials does DKPCB support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DKPCB supports FR4, aluminum-based, Rogers, high-frequency, and flexible PCB materials for various applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a PCB quote from DKPCB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get an instant PCB quote by visiting our Products page and submitting your requirements, or by emailing sales09dk@gmail.com with your Gerber files.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main>
      {/* SEO 结构化数据 */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section with Parallax Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-blue-800/95 z-10"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          ></div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1 rounded-full glass text-sm mb-6 opacity-0 stagger-1 animate-slide-up">
              🏭 One-Stop PCB Solutions — Design, Manufacturing & Quality Control
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient">
              DKPCB Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 opacity-0 stagger-2 animate-slide-up">
              Professional PCB manufacturing from prototype to mass production. 
              1-32 layers, FR4/Aluminum/Rogers, fast turnaround with ISO 9001 certified quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 stagger-3 animate-slide-up">
              <Link 
                href="/products" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center gap-2"
              >
                <span>Get Instant Quote</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="glass border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 stagger-4 animate-slide-up">
            {[
              { value: '500+', label: 'Clients Worldwide' },
              { value: '10M+', label: 'PCBs Produced' },
              { value: '99.5%', label: 'Quality Rate' },
              { value: '24h', label: 'Fast Turnaround' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-orange-400">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Why Choose DKPCB?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We combine advanced manufacturing technology with strict quality control to deliver 
              exceptional PCB solutions for your projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '⚡', 
                title: '24H Quick Turn', 
                desc: 'Fast prototyping with 24-hour express service available for urgent projects',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: '✅', 
                title: 'ISO 9001 Certified', 
                desc: 'Strict quality control with 100% electrical test, AOI inspection, and IPC Class 2/3 compliance',
                color: 'from-green-400 to-emerald-500'
              },
              { 
                icon: '🌍', 
                title: 'Global Delivery', 
                desc: 'Worldwide shipping via DHL, FedEx, UPS with door-to-door logistics support',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                icon: '🎨', 
                title: 'One-Stop EMS', 
                desc: 'PCB Design, Manufacturing, PCBA Assembly & Enclosures — all under one roof',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                icon: '💰', 
                title: 'No MOQ / Cost Saving', 
                desc: 'Factory-direct pricing, transparent quotes with no hidden fees. Order from 1 piece',
                color: 'from-emerald-400 to-teal-500'
              },
              { 
                icon: '🔧', 
                title: 'Free DFM Check', 
                desc: 'Complimentary Design for Manufacturability analysis to catch issues early and save costs',
                color: 'from-red-400 to-rose-500'
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Facilities</span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              World-Class Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="PCB Manufacturing Floor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Automated Production Line</h3>
                <p className="text-white/80">State-of-the-art SMT assembly equipment</p>
              </div>
            </div>

            {/* Side Images */}
            <div className="relative rounded-2xl overflow-hidden group hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" 
                alt="Quality Control"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Quality Control</h4>
                <p className="text-sm text-white/70">AOI Inspection</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" 
                alt="Clean Room"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Clean Room</h4>
                <p className="text-sm text-white/70">ISO Class 7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCB Types Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold tracking-wider uppercase">Products</span>
            <h2 className="text-4xl font-bold mt-2">Our PCB Services</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              From prototype to mass production, we offer comprehensive PCB manufacturing services 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Standard PCB', 
                desc: 'Single & double sided boards with FR4 material, cost-effective solution',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
              },
              { 
                title: 'Multi-Layer PCB', 
                desc: 'Up to 32 layers with HDI, blind/buried vias for complex applications',
                image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80'
              },
              { 
                title: 'RF / Microwave PCB', 
                desc: 'Rogers, high-frequency materials for 5G, radar, and communication systems',
                image: 'https://images.unsplash.com/photo-1615744855295-11a09e25d1b8?w=400&q=80'
              },
              { 
                title: 'Heavy Copper PCB', 
                desc: 'Up to 6 oz copper for power electronics, EV, and industrial applications',
                image: 'https://images.unsplash.com/photo-1563770095-11a09e25d1b8?w=400&q=80'
              },
              { 
                title: 'Flexible / Rigid-Flex', 
                desc: 'FPC and rigid-flex circuits for wearable, automotive, and dynamic applications',
                image: 'https://images.unsplash.com/photo-1615744855295-9d2e8c8c12b3?w=400&q=80'
              },
              { 
                title: 'Aluminum / Ceramic PCB', 
                desc: 'Metal core & ceramic PCBs for LED lighting, power supplies, and thermal management',
                image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&q=80'
              },
            ].map((pcb, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden glass-dark hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={pcb.image} 
                  alt={pcb.title}
                  className="w-full h-40 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold mb-1">{pcb.title}</h3>
                  <p className="text-sm text-white/70">{pcb.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
              <span>🎁</span> Free DFM Check Included
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Ready to Start Your PCB Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload your Gerber files and get an instant quote today! Our team is ready to help 
              you bring your electronics to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <span>Upload Files Now</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
