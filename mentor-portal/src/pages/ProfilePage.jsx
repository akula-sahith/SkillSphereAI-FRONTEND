import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { students, mentors } from '../data/dummy'

export default function ProfilePage() {
  const { id } = useParams()
  const person = useMemo(() => [...students, ...mentors].find((p) => p.id === id), [id])

  if (!person) {
    return (
      <div className="text-center">
        <p className="text-white/70">Profile not found.</p>
        <Link to="/" className="btn-primary mt-4 inline-block">Go Home</Link>
      </div>
    )
  }

  return (
    <section className="grid gap-8 md:grid-cols-[280px,1fr]">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="card-surface p-6 text-center">
        <img src={person.avatar} alt={person.name} className="mx-auto h-32 w-32 rounded-full object-cover border border-white/10" />
        <h2 className="mt-4 text-xl font-semibold">{person.name}</h2>
        <p className="text-white/60">{person.branch}</p>
        <div className="mt-4 flex justify-center gap-3">
          <Link to="/chat" className="btn-primary">Chat</Link>
          <Link to="/call" className="btn-secondary">Video Call</Link>
        </div>
      </motion.div>

      <div className="grid gap-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="card-surface p-6">
          <h3 className="font-semibold text-lg">About</h3>
          <p className="mt-2 text-white/80 leading-relaxed">{person.bio}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-surface p-6">
          <h3 className="font-semibold text-lg">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {person.skills?.map((s) => (
              <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

