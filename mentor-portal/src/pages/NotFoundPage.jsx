import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <section className="text-center grid gap-6">
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="text-6xl">
        404
      </motion.div>
      <p className="text-white/70">Oops! The page you’re looking for does not exist.</p>
      <Link to="/" className="btn-primary inline-block">Go Back Home</Link>
    </section>
  )
}

