'use client'

import { useTheme } from '../context/ThemeContext'
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Project() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  const buttonStyle =
    theme === 'dark'
      ? 'dark-drop-boxshadow bg-[#292D32] text-white'
      : 'light-drop-boxshadow bg-[#E0E0E0] text-black'

  const activeButtonStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32] text-white'
      : 'light-inner-boxshadow bg-[#E0E0E0] text-black'

  const textStyle = theme === 'dark' ? 'text-white' : 'text-black'

  const projects = [
    { label: 'Portfolio Website', url: 'https://zainansari.net', embeddable: true },
    { label: 'Opus', url: 'https://opus.ai/', embeddable: true },
    { label: 'Draper University', url: 'https://draperuniversity.com/', embeddable: true },
    { label: 'Strange Coin', url: 'https://strangecoin.pages.dev/', embeddable: true },
    { label: 'Pitch Deck', url: 'https://pitchdeck.opus.ai/', embeddable: true },
    { label: 'Common Coin', url: 'https://commoncoin.club/', embeddable: true },
    { label: 'MSWF', url: 'https://mswf.pages.dev/', embeddable: true },
    { label: 'Corporates', url: 'https://corporates.pages.dev/', embeddable: true }
  ]

  const [activeProject, setActiveProject] = useState(projects[0])
  const currentIndex = projects.findIndex(p => p.url === activeProject.url)

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setActiveProject(projects[prevIndex])
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    setActiveProject(projects[nextIndex])
  }

  return (
    <div className="px-4 md:px-[4vw] pb-12 md:pb-0">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-6 md:mb-[1.5vw] text-xl md:text-[1.8vw] font-bold w-fit mx-auto px-4 md:px-[5.5vw] py-2 rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}
      >
        Explore My Portfolio Projects
      </motion.h1>

      {/* Preview section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${containerStyle} p-2 md:p-[1vw] w-full md:w-[68.8vw] h-[60vw] md:h-[34vw] mx-auto rounded-2xl flex items-center justify-center`}
      >
        {activeProject.embeddable ? (
          <iframe
            src={activeProject.url}
            title="Project Preview"
            className="w-full h-full rounded-xl border-none"
            loading="lazy"
          />
        ) : (
          <div className="text-center px-6 md:px-[3vw]">
            <h2 className={`text-lg md:text-[1.5vw] font-semibold mb-4 md:mb-[1vw] ${textStyle}`}>
              {activeProject.label} cannot be previewed in iframe.
            </h2>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-base md:text-[1.2vw] px-4 md:px-[2vw] py-2 md:py-[0.8vw] rounded-[1vw] font-medium transition-all duration-300 ${buttonStyle}`}
            >
              Visit Project <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </motion.div>

      {/* Navigation + Buttons */}
      <div className="mt-6 md:mt-[2vw] flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Arrow */}
        <div className={`${activeButtonStyle} p-2 md:p-[0.5vw] rounded-2xl`}>
          <FaArrowLeft
            onClick={goToPrevious}
            className={`text-xl md:text-[1.2vw] cursor-pointer hover:scale-110 transition-transform duration-300 ${textStyle}`}
          />
        </div>

        {/* Project Buttons Grid on Mobile, Flex on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:flex md:gap-[1vw] flex-wrap justify-center w-full">
          {projects.map((project, index) => {
            const isActive = activeProject.url === project.url
            return (
              <motion.button
                key={index}
                onClick={() => setActiveProject(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative text-sm md:text-[1vw] px-3 md:px-[1.2vw] py-1 md:py-[0.2vw]
                  rounded-[1vw] font-medium transition-all duration-300
                  ${isActive
                    ? `${activeButtonStyle} after:content-[''] after:w-2 md:after:w-[0.5vw] after:h-2 md:after:h-[0.5vw] after:bg-green-400 after:rounded-full after:absolute after:-top-[-.7vw] after:left-2`
                    : buttonStyle
                  }
                `}
              >
                {project.label}
              </motion.button>
            )
          })}
        </div>

        {/* Right Arrow */}
        <div className={`${activeButtonStyle} p-2 md:p-[0.5vw] rounded-2xl`}>
          <FaArrowRight
            onClick={goToNext}
            className={`text-xl md:text-[1.2vw] cursor-pointer hover:scale-110 transition-transform duration-300 ${textStyle}`}
          />
        </div>
      </div>
    </div>
  )
}
