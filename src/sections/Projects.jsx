import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: 'Kernsanierung Altbau',
    location: 'Hannover Linden',
    category: 'Kernsanierung',
    year: '2024',
    desc: 'Komplette Entkernung und Neugestaltung eines denkmalgeschützten Mehrfamilienhauses. 12 Wohneinheiten auf 1.800 m².',
    gradient: 'from-amber-900/40 to-stone-900/60',
  },
  {
    title: 'Gleissanierung DB Netz',
    location: 'Region Hannover',
    category: 'Gleisbau',
    year: '2024',
    desc: 'Erneuerung von 3,2 km Gleisabschnitt inkl. Weichenanlage und Oberbauarbeiten im laufenden Betrieb.',
    gradient: 'from-blue-900/40 to-slate-900/60',
  },
  {
    title: 'Luxus-Badsanierung',
    location: 'Hannover Kirchrode',
    category: 'Badsanierung',
    year: '2025',
    desc: 'Komplettumbau von 4 Bädern in einer Stadtvilla. Italienische Fliesen, bodengleiche Duschen, Smart-Home Integration.',
    gradient: 'from-emerald-900/40 to-stone-900/60',
  },
  {
    title: 'Neubau Mehrfamilienhaus',
    location: 'Hannover Bothfeld',
    category: 'Hochbau',
    year: '2025',
    desc: 'Schlüsselfertiger Neubau mit 8 Wohneinheiten, Tiefgarage und Aufzug. KfW-40 Standard.',
    gradient: 'from-purple-900/40 to-stone-900/60',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
        delay: index * 0.15,
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.015&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative z-10 p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 rounded-full border border-[#d4af37]/20">
              {project.category}
            </span>
            <span className="text-xs text-white/30 font-medium">{project.year}</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all duration-500">
            <ArrowRight size={16} className="text-white/40 group-hover:text-[#d4af37] group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </div>

        {/* Bottom */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-md">
            {project.desc}
          </p>
          <div className="flex items-center gap-1.5 text-white/30 text-xs">
            <MapPin size={12} />
            <span>{project.location}</span>
          </div>
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#d4af37]/20 transition-colors duration-500" />
    </div>
  )
}

export default function Projects() {
  const titleRef = useReveal()

  return (
    <section id="projekte" className="relative py-32 md:py-44 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#d4af37] text-xs font-semibold tracking-[0.3em] uppercase">Referenzen</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
              Ausgewählte Projekte
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-md md:text-right">
            Jedes Projekt ist einzigartig. Hier ein Auszug unserer Arbeit — von der Sanierung bis zum Neubau.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
