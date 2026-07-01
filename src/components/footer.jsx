function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/50 bg-white/60 py-8 backdrop-blur-xl">
      <div className="flex flex-col text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Enzo Loungoundji. Portfolio personnel.</p>
      </div>
    </footer>
  )
}

export default Footer
