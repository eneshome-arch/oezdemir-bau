import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedFireGlow({ className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const orbs = el.querySelectorAll('.fire-orb')

    const ctx = gsap.context(() => {
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: `random(-100, 100)`,
          y: `random(-80, 80)`,
          scale: `random(0.85, 1.4)`,
          duration: `random(5, 9)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Large primary glow */}
      <div
        className="fire-orb absolute top-[15%] left-[20%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,113,10,0.55) 0%, rgba(232,113,10,0.15) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Deep orange — right side */}
      <div
        className="fire-orb absolute top-[30%] right-[10%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220,90,0,0.45) 0%, rgba(232,113,10,0.1) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Bright amber highlight */}
      <div
        className="fire-orb absolute top-[5%] right-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,170,50,0.5) 0%, rgba(255,140,30,0.1) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom warm spread */}
      <div
        className="fire-orb absolute bottom-[0%] left-[5%] w-[800px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,113,10,0.4) 0%, rgba(200,80,0,0.08) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Hot core — small, intense */}
      <div
        className="fire-orb absolute top-[25%] left-[40%] w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,200,100,0.5) 0%, rgba(255,160,50,0.15) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Right edge warmth */}
      <div
        className="fire-orb absolute top-[45%] right-[0%] w-[400px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,113,10,0.35) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
