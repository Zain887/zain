'use client'

import { useTheme } from './context/ThemeContext'
import { motion } from 'framer-motion'

export default function Home() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  // Fix: assert cubic-bezier array with `as const`
  const easeBezier = [0.25, 0.1, 0.25, 1] as const

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeBezier,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeBezier,
      },
    },
  }

  return (
    <section className="text-2xl absolute left-[5.9vw] top-[7.2vw]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`w-[68.8vw] h-[34.1vw] rounded-[2vw] transition-all duration-500 ${containerStyle}`}
      >
        <motion.h1
          variants={itemVariants}
          className="text-[2.5vw] font-bold text-center pt-[1.2vw]"
        >
          Creative Front-End Developer & UI/UX Engineer
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="text-center w-[48vw] mx-auto"
        >
          <motion.h2 variants={itemVariants} className="pt-[3.5vw] text-[1.8vw]">
            Front-End Engineer
          </motion.h2>
          <motion.h2 variants={itemVariants} className="pt-[2.6vw] text-[1.8vw]">
            UI/UX Designer
          </motion.h2>
          <motion.h2 variants={itemVariants} className="pt-[2.6vw] text-[1.8vw]">
            Web Animator
          </motion.h2>
          <motion.h2 variants={itemVariants} className="pt-[2.6vw] text-[1.8vw]">
            Idea-to-Execution Expert
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="pt-[3.5vw] font-medium text-[1.2vw]"
          >
            Let’s explore innovative concepts together and transform them into real,
            functional web experiences. Your next big thing starts here.
          </motion.h3>
        </motion.div>
      </motion.div>
    </section>
  )
}
