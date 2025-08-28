import { motion } from 'framer-motion'

export default function VideoCallPage() {
  return (
    <section className="grid gap-6 text-center">
      <h2 className="text-2xl font-semibold">Video Call</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto aspect-video w-full max-w-3xl card-surface grid place-content-center"
      >
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-white/70">
          🎥 Connecting illustration...
        </motion.div>
      </motion.div>
      <div>
        <button className="btn-primary">Join Call</button>
      </div>
    </section>
  )
}

