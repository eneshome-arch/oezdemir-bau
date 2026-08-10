import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hammer, Bath, TrainTrack, Building2, PaintBucket, Wrench } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    icon: Hammer,
    title: 'Kernsanierung',
    desc: 'Komplette Gebäudesanierung von der Entkernung bis zur schlüsselfertigen Übergabe. Wir verwandeln Bestand in Bestform.',
    features: ['Entkernung', 'Rohbau', 'Innenausbau', 'Schlüsselfertig'],
  },
  {
    icon: Bath,
    title: 'Badsanierung',
    desc: 'Moderne Badezimmer nach Ihren Wünschen — vom Designkonzept bis zur letzten Fuge. Funktional und ästhetisch.',
    features: ['Planung', 'Fliesenarbeiten', 'Sanitärinstallation', 'Barrierefreiheit'],
  },
  {
    icon: TrainTrack,
    title: 'Gleisbau',
    desc: 'Professioneller Gleisbau und Gleissanierung für Infrastrukturprojekte. Sicherheit und Präzision auf höchstem Niveau.',
    features: ['Gleissanierung', 'Oberbau', 'Weichenbau', 'Trassenarbeiten'],
  },
  {
    icon: Building2,
    title: 'Hochbau',
    desc: 'Neubau und Umbau von Wohn- und Gewerbeimmobilien. Von der Bodenplatte bis zum Dach — alles aus einer Hand.',
    features: ['Neubau', 'Umbau', 'Aufstockung', 'Anbau'],
  },
  {
    icon: PaintBucket,
    title: 'Innenausbau',
    desc: 'Trockenbau, Malerarbeiten, Bodenbeläge — wir gestalten Innenräume, die begeistern und funktionieren.',
    features: ['Trockenbau', 'Malerarbeiten', 'Böden', 'Decken'],
  },
  {
    icon: Wrench,
    title: 'Tiefbau',
    desc: 'Erdarbeiten, Kanalbau und Fundamentarbeiten. Die solide Basis für jedes Bauvorhaben.',
    features: ['Erdarbeiten', 'Kanalbau', 'Fundamente', 'Entwässerung'],
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    gsap.fromTo(card,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
        delay: index * 0.1,
      }
    )
  }, [index])

  const Icon = service.icon

  return (
    <div
      ref={cardRef}
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all duration-500 hover:bg-white/[0.04] cursor-default"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-500">
          <Icon size={26} className="text-[#d4af37]" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map(f => (
            <span key={f} className="px-3 py-1 text-xs font-medium text-white/30 border border-white/8 rounded-full group-hover:border-[#d4af37]/20 group-hover:text-[#d4af37]/60 transition-all duration-300">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Number */}
      <span className="absolute top-6 right-8 text-6xl font-black text-white/[0.02] group-hover:text-[#d4af37]/[0.06] transition-colors duration-500 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

export default function Services() {
  const titleRef = useReveal()

  return (
    <section id="leistungen" className="relative py-32 md:py-44">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#d4af37]/20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-20">
          <span className="text-[#d4af37] text-xs font-semibold tracking-[0.3em] uppercase">Was wir tun</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Unsere Leistungen
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-xl mx-auto">
            Vom Fundament bis zum Feinschliff — wir decken das gesamte Spektrum
            des modernen Bauwesens ab.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
