import { motion } from 'framer-motion'

const cards = [
  { title: 'Mission', text: 'Empower students through direct mentorship, hands-on projects, and community support.' },
  { title: 'Vision', text: 'A world where learning is accessible, guided, and personalized for everyone.' },
  { title: 'Team', text: 'Built by educators and engineers who love to teach and build.' },
]

export default function AboutPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">About</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
            className="card-surface p-6"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-white/70">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

