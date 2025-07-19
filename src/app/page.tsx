'use client'

import { useTheme } from './context/ThemeContext'
import { motion } from 'framer-motion'

export default function Home() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

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
    <section className="w-full flex justify-center items-center px-4 md:px-8 pt-10 md:pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`w-full max-w-5xl md:w-[68.8vw] rounded-[2vw] p-6 md:p-10 transition-all duration-500 ${containerStyle}`}
      >
        <motion.h1
          variants={itemVariants}
          className="text-[6vw] md:text-[2.5vw] font-bold text-center"
        >
          Creative Front-End Developer & UI/UX Engineer
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="text-center mt-10 space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-[5vw] md:text-[1.8vw]">
            Front-End Engineer
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-[5vw] md:text-[1.8vw]">
            UI/UX Designer
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-[5vw] md:text-[1.8vw]">
            Web Animator
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-[5vw] md:text-[1.8vw]">
            Idea-to-Execution Expert
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="pt-6 font-medium text-[4vw] md:text-[1.2vw] leading-relaxed"
          >
            Let’s explore innovative concepts together and transform them into real,
            functional web experiences. Your next big thing starts here.
          </motion.h3>
        </motion.div>
      </motion.div>
    </section>
  )
}
