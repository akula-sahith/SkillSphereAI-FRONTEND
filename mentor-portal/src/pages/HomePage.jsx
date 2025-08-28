import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="grid gap-10 py-8">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Connect <span className="text-gradient">Students</span> with <span className="text-gradient">Mentors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          Learn faster with guidance. Discover mentors, chat instantly, and grow your skills.
        </motion.p>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8 flex items-center justify-center gap-4">
          <Link to="/students" className="btn-primary">Get Started</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="card-surface p-6">
            <div className="h-28 rounded-md bg-gradient-to-br from-primary/20 to-accent/20" />
            <p className="mt-4 text-white/70 text-sm">Smooth animations, modern UI, and a delightful experience.</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

