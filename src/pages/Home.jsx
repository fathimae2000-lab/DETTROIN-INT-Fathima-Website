import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import HeroCards from '../components/HeroCards'
import RecentEventsTimeline from '../components/RecentEventsTimeline'

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Hero Cards Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto"
      >
        <HeroCards />
      </motion.section>

      {/* Recent Events Timeline Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto"
      >
        <RecentEventsTimeline />
      </motion.section>
    </motion.div>
  )
}

export default Home