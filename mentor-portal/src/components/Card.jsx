import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Card({ title, subtitle, description, avatarUrl, onChat, onCall, to }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card-surface p-5"
    >
      <div className="flex items-center gap-4">
        <img src={avatarUrl} alt={title} className="h-14 w-14 rounded-full object-cover border border-white/10" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
        </div>
      </div>
      {description && <p className="mt-3 text-white/80 text-sm leading-relaxed">{description}</p>}
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={onChat} className="btn-primary">Chat</button>
        <button onClick={onCall} className="btn-secondary">Video Call</button>
        {to && (
          <Link to={to} className="btn-secondary">View Profile</Link>
        )}
      </div>
    </motion.div>
  )
}

