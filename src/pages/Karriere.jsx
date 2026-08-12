import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, ChevronDown, Send, CheckCircle, HardHat, Wrench, Users, TrendingUp, Upload, X, Loader2 } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'
import ParticlesBackground from '@/components/lightswind/ParticlesBackground'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { icon: CheckCircle, title: 'Faire Vergütung', desc: 'Übertarifliche Bezahlung und leistungsgerechte Prämien.' },
  { icon: TrendingUp, title: 'Weiterbildung', desc: 'Regelmäßige Schulungen und Zertifizierungen auf Firmenkosten.' },
  { icon: Users, title: 'Starkes Team', desc: 'Kollegiales Miteinander und flache Hierarchien.' },
  { icon: HardHat, title: 'Moderne Ausstattung', desc: 'Hochwertige Werkzeuge, Fahrzeuge und Arbeitskleidung.' },
]

const jobs = [
  {
    title: 'Trockenbaumonteur (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für unsere Innenausbau- und Sanierungsprojekte suchen wir erfahrene Trockenbaumonteure für Ständerwerk, Beplankung und Grundrissänderungen.',
    requirements: ['Erfahrung im Trockenbau & Innenausbau', 'Selbstständige und saubere Arbeitsweise', 'Führerschein Klasse B', 'Deutschkenntnisse mind. B1'],
  },
  {
    title: 'Maler & Lackierer (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Wir suchen qualifizierte Maler und Lackierer für Putz-, Spachtel- und Malerarbeiten im Innen- und Außenbereich.',
    requirements: ['Abgeschlossene Ausbildung als Maler/Lackierer oder vergleichbar', 'Erfahrung in Putz- und Spachtelarbeiten', 'Sorgfältige und zuverlässige Arbeitsweise', 'Führerschein Klasse B'],
  },
  {
    title: 'Fliesenleger (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für Badsanierungen und Bodenbelagsarbeiten suchen wir Fliesenleger mit Erfahrung in der Verlegung von Fliesen, Naturstein und anderen Belägen.',
    requirements: ['Ausbildung als Fliesen-, Platten- und Mosaikleger oder vergleichbar', 'Erfahrung in Abdichtungsarbeiten', 'Eigenverantwortliches Arbeiten', 'Führerschein Klasse B'],
  },
  {
    title: 'Anlagenmechaniker SHK (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für unsere Sanitär-, Heizungs- und Klimainstallationen suchen wir ausgebildete Anlagenmechaniker für Neubau- und Sanierungsprojekte.',
    requirements: ['Abgeschlossene Ausbildung als Anlagenmechaniker SHK', 'Erfahrung in Sanitär- und Heizungsinstallation', 'Kenntnisse in der Badplanung von Vorteil', 'Führerschein Klasse B'],
  },
  {
    title: 'Elektriker / Elektroniker (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für unsere Elektroinstallationen bei Sanierungs- und Ausbauprojekten suchen wir qualifizierte Elektriker.',
    requirements: ['Abgeschlossene Ausbildung als Elektroniker oder Elektriker', 'Erfahrung in Gebäudeinstallationen', 'Eigenverantwortliche Arbeitsweise', 'Führerschein Klasse B'],
  },
  {
    title: 'Bauleiter / Projektleiter (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover',
    desc: 'Als Bauleiter koordinieren Sie unsere Sanierungs- und Kernsanierungsprojekte – von der Entkernung bis zur bezugsfertigen Übergabe.',
    requirements: ['Studium Bauingenieurwesen, Architektur oder Meisterbrief', 'Mind. 3 Jahre Erfahrung in der Bauleitung / Sanierung', 'Organisationstalent und Kommunikationsstärke', 'Führerschein Klasse B'],
  },
  {
    title: 'Dachdecker (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für unsere Dach- und Fassadensanierungen suchen wir erfahrene Dachdecker für Steildach, Flachdach und Abdichtungsarbeiten.',
    requirements: ['Abgeschlossene Ausbildung als Dachdecker', 'Erfahrung in Steildach- und Flachdacharbeiten', 'Schwindelfreiheit und körperliche Fitness', 'Führerschein Klasse B'],
  },
  {
    title: 'Maurer (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für Rohbau-, Umbau- und Sanierungsarbeiten suchen wir qualifizierte Maurer mit Erfahrung im Hoch- und Massivbau.',
    requirements: ['Abgeschlossene Ausbildung als Maurer oder Hochbaufacharbeiter', 'Erfahrung in Mauerwerks- und Betonarbeiten', 'Selbstständige Arbeitsweise', 'Führerschein Klasse B'],
  },
  {
    title: 'Estrichleger (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für Boden- und Estricharbeiten bei unseren Sanierungs- und Neubauprojekten suchen wir zuverlässige Estrichleger.',
    requirements: ['Erfahrung im Estrich- und Bodenbau', 'Kenntnisse in Fließestrich, Zementestrich und Trockenestrich', 'Teamfähigkeit', 'Führerschein Klasse B'],
  },
  {
    title: 'Bauhelfer (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Zur Unterstützung unserer Kolonnen suchen wir motivierte Bauhelfer für Entkernung, Abbruch und allgemeine Baustellenarbeiten.',
    requirements: ['Körperliche Belastbarkeit', 'Zuverlässigkeit und Pünktlichkeit', 'Erfahrung auf dem Bau von Vorteil', 'Deutschkenntnisse mind. A2'],
  },
  {
    title: 'WDVS-Facharbeiter / Dämmung (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Für unsere Energiesanierungs- und Fassadendämmungsprojekte suchen wir Facharbeiter mit WDVS-Erfahrung.',
    requirements: ['Erfahrung in Wärmedämmverbundsystemen (WDVS)', 'Kenntnisse in Fassadendämmung und Armierung', 'Sorgfältige Arbeitsweise', 'Führerschein Klasse B'],
  },
  {
    title: 'Vorarbeiter / Polier (m/w/d)',
    type: 'Vollzeit',
    location: 'Hannover & Umgebung',
    desc: 'Als Vorarbeiter leiten Sie unsere Kolonnen auf der Baustelle und sorgen für Qualität, Sicherheit und Termintreue.',
    requirements: ['Meisterbrief oder langjährige Berufserfahrung im Baugewerbe', 'Führungserfahrung auf der Baustelle', 'Organisationsgeschick und Durchsetzungsvermögen', 'Führerschein Klasse B'],
  },
]

function FileUploadBox({ id, label, hint, required, accept, file, onFileChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[var(--navy)] mb-1">
        {label} {required && '*'}
      </label>
      {hint && <p className="text-xs text-[var(--text-muted)] mb-2">{hint}</p>}
      <label
        htmlFor={id}
        className={`flex items-center gap-3 w-full px-4 py-4 border-2 border-dashed rounded-xl text-sm cursor-pointer transition-colors ${
          file
            ? 'bg-green-50 border-green-300 text-green-700'
            : 'bg-[var(--stone)] border-[var(--concrete-dark)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
        }`}
      >
        {file ? (
          <>
            <CheckCircle size={18} className="shrink-0" />
            <span className="truncate">{file.name}</span>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); onFileChange(null) }}
              className="ml-auto shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors"
            >
              <X size={12} />
            </button>
          </>
        ) : (
          <span className="flex items-center justify-center gap-2 w-full">
            <Upload size={16} />
            Datei auswählen
          </span>
        )}
      </label>
      <input
        type="file"
        id={id}
        required={required && !file}
        accept={accept}
        className="hidden"
        onChange={(e) => onFileChange(e.target.files[0] || null)}
      />
    </div>
  )
}

export default function Karriere() {
  const [openJob, setOpenJob] = useState(null)
  const [applying, setApplying] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [files, setFiles] = useState({ ausweis: null, lebenslauf: null, zeugnisse: null })
  const formRef = useRef(null)

  const setFile = (key, file) => setFiles(prev => ({ ...prev, [key]: file }))

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(e.target)

    if (files.ausweis) formData.append('Ausweis', files.ausweis)
    if (files.lebenslauf) formData.append('Lebenslauf', files.lebenslauf)
    if (files.zeugnisse) formData.append('Zeugnisse', files.zeugnisse)

    formData.append('_subject', `Neue Bewerbung: ${formData.get('Stelle')}`)
    formData.append('_template', 'table')

    try {
      await fetch('https://formsubmit.co/ajax/karriere@oezdemir-bau.de', {
        method: 'POST',
        body: formData,
      })
      setSubmitted(true)
      setApplying(null)
      setFiles({ ausweis: null, lebenslauf: null, zeugnisse: null })
    } catch {
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.')
    } finally {
      setSending(false)
    }
  }

  const openApplicationForm = (jobTitle) => {
    setApplying(jobTitle)
    setSubmitted(false)
    setFiles({ ausweis: null, lebenslauf: null, zeugnisse: null })
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-[var(--navy)] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <ParticlesBackground className="absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)] page-heading text-center">
          <h1 className="font-extrabold text-white mb-3 sm:mb-4">
            Karriere bei<br />Özdemir Bau
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Bauen Sie mit uns die Zukunft – wir suchen engagierte Fachkräfte für unser wachsendes Team.
          </p>
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

          <div className="jobs-list space-y-4">
            {jobs.map((job, i) => {
              const isOpen = openJob === i
              return (
                <div key={job.title} className="job-item bg-white rounded-2xl border border-[var(--concrete)] overflow-hidden">
                  <button
                    onClick={() => setOpenJob(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[var(--stone)]/50 transition-colors"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--navy)] mb-1.5">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><Clock size={13} />{job.type}</span>
                        <span className="flex items-center gap-1"><MapPin size={13} />{job.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[var(--text-muted)] shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

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
                          onClick={() => openApplicationForm(job.title)}
                          className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors active:scale-[0.96]"
                        >
                          Jetzt online bewerben
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

      {/* Online-Bewerbungsformular — nur sichtbar nach Klick auf "Jetzt online bewerben" */}
      {applying && (
        <section ref={formRef} className="bg-white py-16 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">

            <div className="flex items-start justify-between mb-10">
              <div>
                <div className="accent-line mb-5" />
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-2">
                  Online bewerben
                </h2>
                <p className="text-[var(--accent)] font-semibold text-sm">{applying}</p>
                <p className="text-[var(--text-muted)] mt-2">
                  Füllen Sie das Formular aus und laden Sie Ihre Unterlagen hoch.
                </p>
              </div>
              <button
                onClick={() => setApplying(null)}
                className="shrink-0 ml-4 mt-1 w-10 h-10 rounded-full bg-[var(--stone)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--concrete)] hover:text-[var(--navy)] transition-colors"
                aria-label="Formular schließen"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="Stelle" value={applying} />

              {/* Persönliche Daten */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-4">Persönliche Daten</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-vorname" className="block text-sm font-semibold text-[var(--navy)] mb-1">Vorname *</label>
                      <input type="text" id="form-vorname" name="Vorname" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="Max" />
                    </div>
                    <div>
                      <label htmlFor="form-nachname" className="block text-sm font-semibold text-[var(--navy)] mb-1">Nachname *</label>
                      <input type="text" id="form-nachname" name="Nachname" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="Mustermann" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-sm font-semibold text-[var(--navy)] mb-1">E-Mail *</label>
                      <input type="email" id="form-email" name="E-Mail" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="max@email.de" />
                    </div>
                    <div>
                      <label htmlFor="form-telefon" className="block text-sm font-semibold text-[var(--navy)] mb-1">Telefon *</label>
                      <input type="tel" id="form-telefon" name="Telefon" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="0511 / ..." />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-geburtsdatum" className="block text-sm font-semibold text-[var(--navy)] mb-1">Geburtsdatum *</label>
                      <input type="date" id="form-geburtsdatum" name="Geburtsdatum" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" />
                    </div>
                    <div>
                      <label htmlFor="form-nationalitaet" className="block text-sm font-semibold text-[var(--navy)] mb-1">Nationalität *</label>
                      <input type="text" id="form-nationalitaet" name="Nationalität" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="Deutsch" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="form-adresse" className="block text-sm font-semibold text-[var(--navy)] mb-1">Adresse *</label>
                    <input type="text" id="form-adresse" name="Adresse" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="Musterstraße 1, 30159 Hannover" />
                  </div>
                </div>
              </div>

              {/* Verfügbarkeit */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-4">Verfügbarkeit</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-eintrittsdatum" className="block text-sm font-semibold text-[var(--navy)] mb-1">Frühester Eintrittstermin *</label>
                      <input type="date" id="form-eintrittsdatum" name="Eintrittstermin" required className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" />
                    </div>
                    <div>
                      <label htmlFor="form-gehalt" className="block text-sm font-semibold text-[var(--navy)] mb-1">Gehaltsvorstellung</label>
                      <input type="text" id="form-gehalt" name="Gehaltsvorstellung" className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]" placeholder="z.B. 3.500 € brutto" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="form-fuehrerschein" className="block text-sm font-semibold text-[var(--navy)] mb-1">Führerschein</label>
                    <select id="form-fuehrerschein" name="Führerschein" className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]">
                      <option value="">Bitte wählen...</option>
                      <option value="Klasse B">Klasse B</option>
                      <option value="Klasse B + BE">Klasse B + BE</option>
                      <option value="Klasse C / CE">Klasse C / CE</option>
                      <option value="Kein Führerschein">Kein Führerschein</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Unterlagen hochladen */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-4">Unterlagen hochladen</h3>
                <div className="space-y-4">
                  <FileUploadBox
                    id="file-ausweis"
                    label="Personalausweis oder Reisepass"
                    hint="Kopie Ihres gültigen Ausweisdokuments (PDF, JPG oder PNG)"
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    file={files.ausweis}
                    onFileChange={(f) => setFile('ausweis', f)}
                  />
                  <FileUploadBox
                    id="file-lebenslauf"
                    label="Lebenslauf"
                    hint="Aktueller Lebenslauf als PDF"
                    required
                    accept=".pdf"
                    file={files.lebenslauf}
                    onFileChange={(f) => setFile('lebenslauf', f)}
                  />
                  <FileUploadBox
                    id="file-zeugnisse"
                    label="Zeugnisse / Zertifikate"
                    hint="Arbeitszeugnisse, Ausbildungsnachweise etc. (PDF, JPG oder PNG)"
                    required={false}
                    accept=".pdf,.jpg,.jpeg,.png"
                    file={files.zeugnisse}
                    onFileChange={(f) => setFile('zeugnisse', f)}
                  />
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-4">Ihre Nachricht</h3>
                <div>
                  <label htmlFor="form-nachricht" className="block text-sm font-semibold text-[var(--navy)] mb-1">Anschreiben / Kurze Vorstellung</label>
                  <textarea
                    id="form-nachricht"
                    name="Nachricht"
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] resize-none"
                    placeholder="Erzählen Sie uns, warum Sie zu Özdemir Bau möchten und was Sie mitbringen..."
                  />
                </div>
              </div>

              {/* Datenschutz & Absenden */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-[var(--concrete)] text-[var(--accent)] focus:ring-[var(--accent)]/30" />
                  <span className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner personenbezogenen Daten im Rahmen des Bewerbungsverfahrens einverstanden. *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-colors active:scale-[0.96]"
                >
                  {sending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Bewerbung absenden
                    </>
                  )}
                </button>

                <p className="text-xs text-[var(--text-muted)]">
                  Mit * markierte Felder sind Pflichtfelder.
                </p>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Erfolgs-Meldung */}
      {submitted && !applying && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-3">
              Bewerbung erfolgreich gesendet!
            </h2>
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Vielen Dank für Ihre Bewerbung. Wir melden uns innerhalb von 5 Werktagen bei Ihnen.
            </p>
          </div>
        </section>
      )}

      {/* Initiativbewerbung CTA */}
      <section className="bg-[var(--navy)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nichts Passendes dabei?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Bewerben Sie sich initiativ – wir freuen uns auf Ihre Unterlagen.
          </p>
          <button
            onClick={() => openApplicationForm('Initiativbewerbung')}
            className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-lg font-bold transition-colors active:scale-[0.96]"
          >
            <Send size={16} />
            Initiativbewerbung starten
          </button>
        </div>
      </section>
    </>
  )
}
