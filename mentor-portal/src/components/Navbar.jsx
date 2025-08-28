import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Students' },
  { to: '/mentors', label: 'Mentors' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 8, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-content-center text-white font-bold">
            M
          </motion.div>
          <span className="font-semibold">Mentor Portal</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-primary transition ${isActive ? 'text-primary' : 'text-white/80'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen((v) => !v)} aria-label="Menu" className="btn-secondary px-3 py-2">
            <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="i-[+] not-italic">☰</motion.span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-surface/90"
          >
            <div className="container-page py-4 grid gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 hover:bg-white/10 transition ${isActive ? 'text-primary' : 'text-white/80'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

