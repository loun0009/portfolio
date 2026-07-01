import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#profile', label: 'Profil' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? `${(window.scrollY / scrollableHeight) * 100}%` : '0%'
      document.documentElement.style.setProperty('--scroll-progress', progress)

      const visibleSection = [...navLinks]
        .reverse()
        .find((link) => {
          const element = document.querySelector(link.href)
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top <= 160
        })

      if (visibleSection) {
        setActiveLink(visibleSection.href)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'mx-3 mt-3 rounded-2xl border border-white/50 bg-white/70 shadow-[0_16px_50px_#0f172a1f] backdrop-blur-xl md:mx-6'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className={`inline-flex items-center gap-3 text-lg font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${isScrolled ? 'border-sky-200 bg-white text-sky-600' : 'border-white/20 bg-white/10 text-white'}`}>
              <Sparkles className="h-5 w-5" />
            </span>
            Enzo.dev
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? 'bg-slate-900 text-white shadow-[0_12px_30px_#0f172a38]'
                    : isScrolled
                      ? 'text-slate-700 hover:bg-slate-900 hover:text-white'
                      : 'text-white/88 hover:bg-white/12 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="rounded-full border border-sky-400/30 bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_55%,#22c55e_100%)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_#0ea5e938] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_#22c55e38]"
            >
              Disponible
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden rounded-xl border p-2 transition-colors duration-300 ${
              isScrolled ? 'border-slate-200 bg-white text-slate-900' : 'border-white/20 bg-white/10 text-white'
            }`}
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-3 mt-3 rounded-2xl border border-white/60 bg-white/90 shadow-[0_20px_40px_#0f172a1f] backdrop-blur-xl md:hidden">
          <div className="section-shell py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block rounded-2xl px-4 py-3 font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_55%,#22c55e_100%)] px-6 py-3 text-center font-semibold text-white shadow-[0_16px_30px_#0ea5e938]"
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
