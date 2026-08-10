import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const titleRef = useReveal()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '', service: '' })
  }

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const inputClass = 'w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#d4af37]/50 focus:bg-white/[0.05] transition-all duration-300'

  return (
    <section id="kontakt" className="relative py-32 md:py-44">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div ref={titleRef} className="reveal">
            <span className="text-[#d4af37] text-xs font-semibold tracking-[0.3em] uppercase">Kontakt</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
              Lassen Sie uns Ihr Projekt besprechen.
            </h2>
            <p className="text-white/40 text-lg mt-6 leading-relaxed">
              Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <a href="tel:+4951112345678" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                  <Phone size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Telefon</p>
                  <p className="text-white font-medium group-hover:text-[#d4af37] transition-colors duration-300">+49 511 123 456 78</p>
                </div>
              </a>
              <a href="mailto:info@oezdemir-bau.de" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                  <Mail size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">E-Mail</p>
                  <p className="text-white font-medium group-hover:text-[#d4af37] transition-colors duration-300">info@oezdemir-bau.de</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Adresse</p>
                  <p className="text-white font-medium">Hannover, Niedersachsen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Ihr Name *" required value={form.name} onChange={set('name')} className={inputClass} />
                <input type="email" placeholder="E-Mail *" required value={form.email} onChange={set('email')} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Telefon" value={form.phone} onChange={set('phone')} className={inputClass} />
                <select value={form.service} onChange={set('service')} className={inputClass + ' cursor-pointer'}>
                  <option value="" className="bg-black">Leistung wählen</option>
                  <option value="kernsanierung" className="bg-black">Kernsanierung</option>
                  <option value="badsanierung" className="bg-black">Badsanierung</option>
                  <option value="gleisbau" className="bg-black">Gleisbau</option>
                  <option value="hochbau" className="bg-black">Hochbau</option>
                  <option value="innenausbau" className="bg-black">Innenausbau</option>
                  <option value="tiefbau" className="bg-black">Tiefbau</option>
                  <option value="sonstiges" className="bg-black">Sonstiges</option>
                </select>
              </div>
              <textarea
                rows={5}
                placeholder="Beschreiben Sie Ihr Projekt..."
                value={form.message}
                onChange={set('message')}
                className={inputClass + ' resize-none'}
              />
              <button
                type="submit"
                disabled={sent}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                  sent
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-[#d4af37] text-black hover:bg-[#e8c84a] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]'
                }`}
              >
                {sent ? (
                  <><CheckCircle size={18} /> Nachricht gesendet!</>
                ) : (
                  <><Send size={16} /> Anfrage senden</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
