import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Target, Users, Award } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  { year: '2009', title: 'Gründung', desc: 'Cem Özdemir gründet das Unternehmen in Hannover mit einem kleinen Team von 5 Fachkräften.' },
  { year: '2013', title: 'Expansion', desc: 'Erweiterung des Leistungsspektrums um Gleisbau und Tiefbau. Das Team wächst auf 20 Mitarbeiter.' },
  { year: '2017', title: 'GmbH-Gründung', desc: 'Umwandlung in eine GmbH. Erste Großprojekte im öffentlichen Sektor.' },
  { year: '2020', title: 'Wachstum', desc: 'Trotz Pandemie: kontinuierliches Wachstum auf über 40 Mitarbeiter.' },
  { year: '2024', title: 'Heute', desc: 'Über 50 Fachkräfte, 500+ abgeschlossene Projekte und ein starker Name in der Region.' },
]

const values = [
  { icon: Shield, title: 'Qualität', desc: 'Keine Kompromisse bei Material und Ausführung. Jedes Detail zählt.' },
  { icon: Target, title: 'Präzision', desc: 'Termintreue und Budgetsicherheit sind für uns selbstverständlich.' },
  { icon: Users, title: 'Partnerschaft', desc: 'Wir arbeiten mit unseren Kunden, nicht nur für sie.' },
  { icon: Award, title: 'Erfahrung', desc: '15+ Jahre Bauerfahrung in allen Facetten des Hoch- und Tiefbaus.' },
]

export default function UeberUns() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })

      gsap.from('.timeline-item', {
        opacity: 0, x: -30, stagger: 0.15, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 75%' },
      })

      gsap.from('.value-item', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.values-section', start: 'top 75%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Header */}
      <section className="relative bg-[var(--navy)] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 page-heading">
          <div className="accent-line mb-5" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Über uns
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl">
            Lernen Sie das Unternehmen und die Menschen hinter Özdemir Bau kennen.
          </p>
        </div>
      </section>

      {/* Geschäftsführer Section — Full bleed split */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-5 min-h-[550px]">
          {/* Portrait side */}
          <div className="lg:col-span-2 relative h-72 lg:h-auto overflow-hidden bg-[var(--concrete)]">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <span className="text-5xl sm:text-6xl font-extrabold text-[var(--accent)]">CÖ</span>
              </div>
            </div>
          </div>

          {/* Quote side */}
          <div className="lg:col-span-3 flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0">
            <div className="max-w-xl">
              <div className="accent-line mb-6" />
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy)] leading-snug mb-6">
                „Bauen ist mehr als Steine und Beton – es ist Vertrauen, Handwerk und Leidenschaft."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[var(--accent)]" />
                <div>
                  <p className="font-bold text-[var(--navy)]">Cem Özdemir</p>
                  <p className="text-sm text-[var(--text-muted)]">Geschäftsführer, Özdemir Bau GmbH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[var(--stone)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-6">
              Unsere Geschichte
            </h2>
            <div className="space-y-5 text-[var(--text-muted)] leading-relaxed text-base sm:text-lg">
              <p>
                Was 2009 als kleines Bauunternehmen mit fünf Mitarbeitern begann, ist heute eines der vielseitigsten Bauunternehmen der Region Hannover. Geschäftsführer Cem Özdemir bringt nicht nur Fachwissen, sondern vor allem Leidenschaft für das Handwerk mit.
              </p>
              <p>
                Von der Kernsanierung historischer Gebäude bis zum modernen Gleisbau – unser Team aus über 50 Fachkräften meistert jede Herausforderung. Dabei stehen Qualität, Termintreue und eine partnerschaftliche Zusammenarbeit immer an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)]">
              Meilensteine
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[var(--concrete)]" />
            <div className="space-y-10">
              {timeline.map(({ year, title, desc }) => (
                <div key={year} className="timeline-item relative pl-14 sm:pl-20">
                  <div className="absolute left-2.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-white" />
                  <div>
                    <span className="text-[var(--accent)] text-sm font-bold">{year}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--navy)] mt-1 mb-1">{title}</h3>
                    <p className="text-[var(--text-muted)] text-sm sm:text-base">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section bg-[var(--navy)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Unsere Werte
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="value-item">
                <div className="w-14 h-14 bg-[var(--accent)]/15 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--stone)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-4">
            Teil des Teams werden?
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Wir suchen engagierte Fachkräfte, die mit uns die Zukunft bauen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/karriere"
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-lg font-bold transition-colors active:scale-[0.96]"
            >
              Offene Stellen
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white px-8 py-4 rounded-lg font-bold transition-colors active:scale-[0.96]"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
