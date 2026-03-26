import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/contacts'
import Footer from './components/footer'
import Profile from './components/profile'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#22c55e24,_transparent_24%),radial-gradient(circle_at_80%_20%,_#0ea5e92e,_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_42%,_#f8fafc_100%)] text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-slate-200/40">
        <div className="h-full w-[var(--scroll-progress,0%)] bg-[linear-gradient(90deg,#0f172a_0%,#0ea5e9_48%,#22c55e_100%)] shadow-[0_0_20px_#0ea5e973] transition-[width] duration-150" />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-[28rem] h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
