import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Ruler } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'
import ParticlesBackground from '@/components/lightswind/ParticlesBackground'

gsap.registerPlugin(ScrollTrigger)

const categories = ['Alle', 'Sanierung', 'Hochbau', 'Tiefbau', 'Gleisbau']

const projects = [
  {
    title: 'Kernsanierung Altbauvilla',
    category: 'Sanierung',
    location: 'Hannover-Linden',
    year: '2024',
    area: '320 m²',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    desc: 'Komplettsanierung einer denkmalgeschützten Villa aus dem Jahr 1908. Erhalt der historischen Fassade bei gleichzeitiger energetischer Modernisierung.',
  },
  {
    title: 'Neubau Mehrfamilienhaus',
    category: 'Hochbau',
    location: 'Hannover-Bothfeld',
    year: '2024',
    area: '1.200 m²',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    desc: 'Schlüsselfertiger Neubau mit 12 Wohneinheiten. KfW-40-Standard, Tiefgarage und Außenanlagen inklusive.',
  },
  {
    title: 'Gleissanierung Stadtbahn',
    category: 'Gleisbau',
    location: 'Hannover-Mitte',
    year: '2023',
    area: '2,4 km',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    desc: 'Erneuerung der Gleisanlagen auf der Innenstadtstrecke der Üstra. Nachtarbeiten zur Minimierung der Verkehrsbeeinträchtigung.',
  },
  {
    title: 'Kanalbau Gewerbegebiet',
    category: 'Tiefbau',
    location: 'Langenhagen',
    year: '2023',
    area: '850 m',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80',
    desc: 'Neuverlegung der Kanalisation im Gewerbegebiet Süd. Schmutz- und Regenwasserkanäle DN 300–800.',
  },
  {
    title: 'Badsanierung Seniorenheim',
    category: 'Sanierung',
    location: 'Hannover-Döhren',
    year: '2024',
    area: '24 Bäder',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    desc: 'Barrierefreie Sanierung aller 24 Bäder im laufenden Betrieb. Bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe.',
  },
  {
    title: 'Bürogebäude Neubau',
    category: 'Hochbau',
    location: 'Hannover-Vahrenwald',
    year: '2023',
    area: '2.800 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    desc: 'Modernes Bürogebäude mit offenen Grundrissen, Dachterrasse und nachhaltiger Haustechnik.',
  },
]

export default function Projekte() {
  const [filter, setFilter] = useState('Alle')

  const filtered = filter === 'Alle'
    ? projects
    : projects.filter(p => p.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-item', {
        opacity: 0, y: 50, stagger: 0.08, duration: 0.6, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [filter])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--navy)] overflow-hidden">
        <AnimatedFireGlow />
        <ParticlesBackground className="absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)] pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 page-heading text-center">
          <h1 className="font-extrabold text-white mb-3 sm:mb-4">
            Unsere Projekte
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Eine Auswahl unserer erfolgreich abgeschlossenen Bauvorhaben.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors active:scale-[0.96] ${
                  filter === cat
                    ? 'bg-[var(--navy)] text-white'
                    : 'bg-[var(--stone)] text-[var(--text-muted)] hover:bg-[var(--concrete)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid — masonry-style with alternating sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filtered.map((project, i) => {
              const isLarge = i % 3 === 0
              return (
                <div
                  key={project.title}
                  className={`project-item group relative overflow-hidden rounded-xl sm:rounded-2xl ${
                    isLarge ? 'md:col-span-2 h-60 sm:h-80 lg:h-96' : 'h-52 sm:h-72 lg:h-80'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <span className="inline-block bg-[var(--accent)] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded mb-2 sm:mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 max-w-lg hidden sm:block">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler size={13} />
                        {project.area}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--stone)]" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-4xl px-[var(--space-container)] text-center">
          <h2 className="font-extrabold text-[var(--navy)] mb-3 sm:mb-4">
            Ihr Projekt als nächstes?
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Bauvision verwirklichen.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold transition-colors active:scale-[0.96]"
          >
            Projekt besprechen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </>
  )
}
