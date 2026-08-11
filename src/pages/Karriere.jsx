import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Banknote, ChevronDown, Send, CheckCircle, HardHat, Wrench, Users, TrendingUp } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { icon: Banknote, title: 'Faire Vergütung', desc: 'Übertarifliche Bezahlung und leistungsgerechte Prämien.' },
  { icon: TrendingUp, title: 'Weiterbildung', desc: 'Regelmäßige Schulungen und Zertifizierungen auf Firmenkosten.' },
  { icon: Users, title: 'Starkes Team', desc: 'Kollegiales Miteinander und flache Hierarchien.' },
  { icon: HardHat, title: 'Moderne Ausstattung', desc: 'Hochwertige Werkzeuge, Fahrzeuge und Arbeitskleidung.' },
]

const jobs = [
  {
    title: 'Maurer / Betonbauer (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover',
    salary: 'Ab 3.200 € / Monat',
    desc: 'Für unsere Hochbau- und Sanierungsprojekte suchen wir erfahrene Maurer und Betonbauer mit Gesellenbrief.',
    requirements: ['Abgeschlossene Ausbildung als Maurer oder Betonbauer', 'Mind. 2 Jahre Berufserfahrung', 'Führerschein Klasse B', 'Teamfähigkeit und Zuverlässigkeit'],
  },
  {
    title: 'Gleisbauer (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    salary: 'Ab 3.500 € / Monat',
    desc: 'Verstärken Sie unser Gleisbau-Team bei spannenden Infrastrukturprojekten.',
    requirements: ['Ausbildung im Gleisbau oder vergleichbar', 'Erfahrung im Oberbau wünschenswert', 'Bereitschaft zu Nacht- und Wochenendarbeit', 'Führerschein Klasse B, CE von Vorteil'],
  },
  {
    title: 'Bauleiter (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover',
    salary: 'Nach Vereinbarung',
    desc: 'Als Bauleiter übernehmen Sie die Verantwortung für die termingerechte und budgetsichere Abwicklung unserer Bauprojekte.',
    requirements: ['Studium Bauingenieurwesen oder Meisterbrief', 'Mind. 3 Jahre Erfahrung als Bauleiter', 'Sicherer Umgang mit Bausoftware', 'Führerschein Klasse B'],
  },
  {
    title: 'Trockenbaumonteur (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover',
    salary: 'Ab 2.800 € / Monat',
    desc: 'Für unsere Innenausbau-Projekte suchen wir qualifizierte Trockenbaumonteure.',
    requirements: ['Erfahrung im Trockenbau', 'Selbstständige Arbeitsweise', 'Führerschein Klasse B', 'Deutschkenntnisse mind. B1'],
  },
]

export default function Karriere() {
  const [openJob, setOpenJob] = useState(null)
  const [applying, setApplying] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('.benefit-item', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.benefits-grid', start: 'top 80%' },
      })
      gsap.from('.job-item', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.jobs-list', start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const handleApply = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setApplying(null)
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Bauarbeiter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--navy)]/85" />
          <AnimatedFireGlow />
        </div>
        <div className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 page-heading">
            <div className="accent-line mb-5" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Karriere bei<br />Özdemir Bau
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl">
              Bauen Sie mit uns die Zukunft – wir suchen engagierte Fachkräfte für unser wachsendes Team.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-3">
              Warum Özdemir Bau?
            </h2>
            <p className="text-[var(--text-muted)]">
              Was Sie bei uns erwartet – neben spannenden Bauprojekten.
            </p>
          </div>

          <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="benefit-item">
                <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-1.5">{title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="bg-[var(--stone)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-3">
              Offene Stellen
            </h2>
            <p className="text-[var(--text-muted)]">
              Finden Sie die passende Position und werden Sie Teil unseres Teams.
            </p>
          </div>

          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8">
              <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[var(--navy)] mb-1">Bewerbung eingegangen!</h3>
              <p className="text-sm text-[var(--text-muted)]">Wir melden uns innerhalb von 5 Werktagen bei Ihnen.</p>
            </div>
          )}

          <div className="jobs-list space-y-4">
            {jobs.map((job, i) => {
              const isOpen = openJob === i
              return (
                <div key={job.title} className="job-item bg-white rounded-2xl border border-[var(--concrete)] overflow-hidden">
                  {/* Job header */}
                  <button
                    onClick={() => setOpenJob(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[var(--stone)]/50 transition-colors"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--navy)] mb-1.5">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Banknote size={13} />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[var(--text-muted)] shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Expandable content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 border-t border-[var(--concrete)]">
                      <div className="pt-5">
                        <p className="text-[var(--text-muted)] mb-4">{job.desc}</p>
                        <h4 className="text-sm font-bold text-[var(--navy)] mb-2">Anforderungen:</h4>
                        <ul className="space-y-1.5 mb-6">
                          {job.requirements.map(r => (
                            <li key={r} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                              <Wrench size={13} className="text-[var(--accent)] shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setApplying(i)}
                          className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors active:scale-[0.96]"
                        >
                          Jetzt bewerben
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application modal */}
      {applying !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-1">
              Bewerbung: {jobs[applying].title}
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Füllen Sie das Formular aus – wir melden uns zeitnah.
            </p>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label htmlFor="apply-name" className="block text-sm font-semibold text-[var(--navy)] mb-1">Name *</label>
                <input
                  type="text"
                  id="apply-name"
                  required
                  className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apply-email" className="block text-sm font-semibold text-[var(--navy)] mb-1">E-Mail *</label>
                  <input
                    type="email"
                    id="apply-email"
                    required
                    className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="apply-phone" className="block text-sm font-semibold text-[var(--navy)] mb-1">Telefon *</label>
                  <input
                    type="tel"
                    id="apply-phone"
                    required
                    className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                    placeholder="0511 / ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="apply-msg" className="block text-sm font-semibold text-[var(--navy)] mb-1">Kurze Vorstellung</label>
                <textarea
                  id="apply-msg"
                  rows={3}
                  className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] resize-none"
                  placeholder="Erzählen Sie uns kurz über sich..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors active:scale-[0.96]"
                >
                  <Send size={15} />
                  Bewerbung absenden
                </button>
                <button
                  type="button"
                  onClick={() => setApplying(null)}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--stone)] transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Initiativbewerbung */}
      <section className="bg-[var(--navy)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nichts Passendes dabei?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Wir freuen uns über Ihre Initiativbewerbung. Schicken Sie uns einfach eine E-Mail mit Ihren Unterlagen.
          </p>
          <a
            href="mailto:karriere@oezdemir-bau.de?subject=Initiativbewerbung"
            className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-lg font-bold transition-colors active:scale-[0.96]"
          >
            <Send size={16} />
            Initiativbewerbung senden
          </a>
        </div>
      </section>
    </>
  )
}
