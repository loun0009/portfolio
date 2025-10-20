import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contacts'
import Footer from './components/footer'
import Profile from './components/profile'

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <Profile/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
