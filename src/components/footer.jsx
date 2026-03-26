function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/50 bg-white/60 py-8 backdrop-blur-xl">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-600 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Enzo Loungoundji. Portfolio personnel.</p>
        <p>Conçu pour être plus lisible, dynamique et orienté expérience.</p>
      </div>
    </footer>
  )
}

export default Footer
