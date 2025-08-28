import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'other', text: 'Hi there! How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function sendMessage() {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg = { id: Date.now(), from: 'me', text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: 'other', text: 'Got it! 👍' }])
    }, 600)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="card-surface flex h-[70vh] flex-col">
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: m.from === 'me' ? 40 : -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: m.from === 'me' ? 40 : -40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                m.from === 'me' ? 'ml-auto bg-primary/90 text-white' : 'bg-white/10 text-white'
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[44px] flex-1 resize-none rounded-lg border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
          />
          <button onClick={sendMessage} className="btn-primary px-5">Send</button>
        </div>
      </div>
    </div>
  )
}

