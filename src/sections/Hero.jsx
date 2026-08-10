import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(overlayRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1.5, ease: 'power2.out' }
    )
    .fromTo(headingRef.current.children,
      { y: 120, opacity: 0, rotateX: 40 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out' },
      0.3
    )
    .fromTo(subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      1.0
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.4)' },
      1.2
    )
    .fromTo(scrollRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      1.5
    )

    // Parallax on scroll
    const onScroll = () => {
      const scrollY = window.scrollY
      const container = containerRef.current
      if (!container) return
      const heading = headingRef.current
      const sub = subRef.current
      if (heading) heading.style.transform = `translateY(${scrollY * 0.3}px)`
      if (sub) sub.style.transform = `translateY(${scrollY * 0.15}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToLeistungen = (e) => {
    e.preventDefault()
    document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />

        {/* Animated grid */}
        <div className="absolute inset-0 z-[5]" style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[150px] z-[6]" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#d4af37]/10 rotate-45 z-[7] animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-32 left-16 w-40 h-40 border border-white/5 rounded-full z-[7] animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute top-1/3 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent z-[7]" />
        <div className="absolute top-1/4 right-1/4 w-px h-60 bg-gradient-to-b from-transparent via-white/10 to-transparent z-[7]" />
      </div>

      {/* Opening overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        {/* Overline */}
        <div ref={subRef} className="mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase">Hannover · Seit 2015</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 ref={headingRef} className="overflow-hidden" style={{ perspective: '600px' }}>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
            Wir bauen
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] gradient-text mt-2">
            Ihre Zukunft.
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
          Kernsanierung · Badsanierung · Gleisbau — Präzision und Qualität
          <br className="hidden md:block" />
          aus einer Hand. Ihr Partner für anspruchsvolle Bauprojekte.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="group px-10 py-4 bg-[#d4af37] text-black font-bold rounded-full text-base hover:bg-[#e8c84a] transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-[0.96]"
          >
            Projekt starten
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#leistungen"
            onClick={scrollToLeistungen}
            className="px-10 py-4 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-medium rounded-full text-base transition-[color,border-color,transform] duration-300 active:scale-[0.96]"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToLeistungen}>
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="text-white/30 animate-bounce" />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  )
}
