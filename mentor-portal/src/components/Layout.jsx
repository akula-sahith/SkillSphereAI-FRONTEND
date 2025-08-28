import { motion, AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const pageVariants = {
  initial: { opacity: 0, y: 12, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.99 },
}

export default function Layout() {
  const location = useLocation()
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1 container-page py-10">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

