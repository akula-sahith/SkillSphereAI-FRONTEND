export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-surface/60">
      <div className="container-page py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/70">
        <p>© {new Date().getFullYear()} Mentor Portal</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-primary">𝕏</a>
            <a href="#" aria-label="GitHub" className="hover:text-primary">GH</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">in</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

