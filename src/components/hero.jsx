import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, MousePointer2 } from 'lucide-react'

const roleLabels = [
  'Développeur web full-stack',
  'Étudiant en BUT Informatique',
  'Créateur d’interfaces React',
]

const quickFacts = [
  { label: 'Stack favorite', value: 'React, Tailwind, Node' },
  { label: 'Objectif', value: 'Stage / alternance 2026' },
  { label: 'Zone', value: 'Reims, Paris, remote' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: null, y: null })
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roleLabels.length)
    }, 2600)

    return () => window.clearInterval(rotation)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const pixelRatio = window.devicePixelRatio || 1
    let animationFrame = 0

    const config = {
      count: Math.min(80, Math.floor((canvas.clientWidth * canvas.clientHeight) / 20000)),
      maxR: 18,
      minR: 2,
      speed: 0.2,
      connectDist: 120,
      colors: ['#38bdf8e6', '#22c55ed9', '#0ea5e9a6'],
    }

    const rand = (min, max) => Math.random() * (max - min) + min
    let particles = []

    function initParticles() {
      particles = Array.from({ length: config.count }, () => ({
        x: rand(0, canvas.clientWidth),
        y: rand(0, canvas.clientHeight),
        vx: rand(-config.speed, config.speed),
        vy: rand(-config.speed, config.speed),
        r: rand(config.minR, config.maxR),
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
      }))
    }

    function resize() {
      canvas.width = canvas.clientWidth * pixelRatio
      canvas.height = canvas.clientHeight * pixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(pixelRatio, pixelRatio)
      initParticles()
    }

    function drawParticle(particle) {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.r * 2,
      )
      gradient.addColorStop(0, particle.color)
      gradient.addColorStop(1, '#00000000')
      ctx.beginPath()
      ctx.fillStyle = gradient
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
      ctx.fill()
    }

    function step() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      const background = ctx.createLinearGradient(0, 0, canvas.clientWidth, canvas.clientHeight)
      background.addColorStop(0, '#020617d1')
      background.addColorStop(0.55, '#082f4975')
      background.addColorStop(1, '#0f172ad6')
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index]
        particle.x += particle.vx
        particle.y += particle.vy

        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - particle.x
          const dy = mouse.current.y - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist > 0 && dist < 120) {
            const force = (120 - dist) / 120
            particle.vx -= (dx / dist) * 0.05 * force
            particle.vy -= (dy / dist) * 0.05 * force
          }
        }

        if (particle.x < -50) particle.x = canvas.clientWidth + 50
        if (particle.x > canvas.clientWidth + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.clientHeight + 50
        if (particle.y > canvas.clientHeight + 50) particle.y = -50

        drawParticle(particle)
      }

      ctx.lineWidth = 0.6
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const particleA = particles[i]
          const particleB = particles[j]
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < config.connectDist) {
            const alpha = 1 - distance / config.connectDist
            ctx.beginPath()
            ctx.strokeStyle = `#7dd3fc${Math.round(0.12 * alpha * 255).toString(16).padStart(2, '0')}`
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = '#ffffff0a'
      ctx.beginPath()
      ctx.arc(canvas.clientWidth * 0.78, canvas.clientHeight * 0.22, 90, 0, Math.PI * 2)
      ctx.fill()

      animationFrame = window.requestAnimationFrame(step)
    }

    function onMove(event) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = event.clientX - rect.left
      mouse.current.y = event.clientY - rect.top
    }

    function onLeave() {
      mouse.current.x = null
      mouse.current.y = null
    }

    resize()
    animationFrame = window.requestAnimationFrame(step)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('pointerleave', onLeave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="section-shell relative z-10 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl text-left text-white">

            <h1 className="animate-fade-in max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Je conçois des interfaces claires, rapides et plus engageantes.
            </h1>

            <div className="mt-6 min-h-[3.5rem] overflow-hidden rounded-3xl border border-white/18 bg-slate-950/30 px-5 py-4 backdrop-blur-md">
              <p className="animate-fade-up text-lg font-medium text-slate-50 md:text-2xl" key={roleLabels[activeRole]}>
                {roleLabels[activeRole]}
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/88 md:text-lg">
              Enzo Loungoundji, étudiant en développement web. Je transforme des idées en interfaces lisibles,
              soignées et utiles, avec une attention particulière portée au rythme visuel et à l’expérience utilisateur.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/90">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/18 bg-white/12 px-4 py-3 shadow-[0_14px_30px_#0f172a2e] backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100/90">{fact.label}</p>
                  <p className="mt-1 font-medium text-white">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#22c55e_0%,#0ea5e9_100%)] px-8 py-4 font-semibold text-white shadow-[0_18px_40px_#0ea5e947] transition-all duration-300 hover:-translate-y-1"
              >
                Voir les projets
                <ArrowDown className="h-5 w-5" />
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/loun0009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/18 bg-slate-950/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
                  aria-label="Voir le profil GitHub"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/enzo-loungoundji-b2278a291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/18 bg-slate-950/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
                  aria-label="Voir le profil LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/18 bg-slate-950/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
                  aria-label="Aller à la section contact"
                >
                  <Mail className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/18 bg-slate-950/28 px-4 py-3 text-sm text-slate-100/90 backdrop-blur-md">
              <MousePointer2 className="h-4 w-4 text-emerald-200" />
              Déplace la souris dans le hero pour influencer l’arrière-plan.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] border-slate-200/70 bg-white/82 p-6 text-slate-950 shadow-[0_24px_70px_#0f172a3d]">
              <div className="absolute -right-8 top-12 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl" />
              <div className="animate-orbit absolute left-10 top-20 h-16 w-16 rounded-full border border-slate-300/50 bg-slate-900/5" />

              <div className="mb-6 inline-block">
                <div className="h-32 w-32 animate-pulse-slow rounded-[2rem] bg-[linear-gradient(135deg,#0ea5e9_0%,#22c55e_100%)] p-1 shadow-[0_16px_50px_#22c55e38]">
                  <div className="flex h-full w-full items-center justify-center rounded-[1.7rem] bg-slate-950 text-5xl font-bold text-white">
                    EL
                  </div>
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.22em] text-emerald-700">Focus 2026</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
                Créer une présence digitale qui donne envie d’explorer.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Un portfolio plus dynamique doit guider, surprendre légèrement et montrer le niveau de finition.
                C’est ce que cette nouvelle version cherche à faire à travers des cartes réactives, des repères visuels
                et une hiérarchie plus nette.
              </p>

              <div className="mt-8 space-y-4">
                {[72, 84, 91].map((value, index) => (
                  <div key={value}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-800">
                      <span>{['UI motion', 'Lisibilité', 'Interactivité'][index]}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200/80">
                      <div
                        className="animate-shimmer h-full rounded-full bg-[linear-gradient(90deg,#0ea5e9a6,#22c55eeb,#7dd3fca6)]"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#eef6ff] to-transparent" />
    </section>
  )
}
