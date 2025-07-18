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
    {
      label: 'Portfolio Website',
      url: 'https://zainansari.net',
      embeddable: true,
    },
    {
      label: 'Opus',
      url: 'https://opus.ai/',
      embeddable: true,
    },
    {
      label: 'Draper University',
      url: 'https://draperuniversity.com/',
      embeddable: true,
    },
    {
      label: 'Strange Coin',
      url: 'https://strangecoin.pages.dev/',
      embeddable: true,
    },
    {
      label: 'Pitch Deck',
      url: 'https://pitchdeck.opus.ai/',
      embeddable: true,
    },
    {
      label: 'Common Coin',
      url: 'https://commoncoin.club/',
      embeddable: true,
    },
    {
      label: 'MSWF',
      url: 'https://mswf.pages.dev/',
      embeddable: true,
    },
    {
      label: 'Corporates',
      url: 'https://corporates.pages.dev/',
      embeddable: true,
    }
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
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-[1.5vw] mx-auto text-[1.8vw] font-bold px-[5.5vw] w-fit rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}
      >
        Explore My Portfolio Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${containerStyle} p-[1vw] mt-[2vw] w-[68.8vw] h-[34vw] mx-auto rounded-2xl flex items-center justify-center`}
      >
        {activeProject.embeddable ? (
          <iframe
            src={activeProject.url}
            title="Project Preview"
            className="w-full h-full rounded-xl border-none"
            loading="lazy"
          />
        ) : (
          <div className="text-center px-[3vw]">
            <h2 className={`text-[1.5vw] font-semibold mb-[1vw] ${textStyle}`}>
              {activeProject.label} cannot be previewed in iframe.
            </h2>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-[1.2vw] px-[2vw] py-[0.8vw] rounded-[1vw] font-medium transition-all duration-300 ${buttonStyle}`}
            >
              Visit Project <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </motion.div>

      <div className="flex justify-between items-center mt-[2vw] px-[4vw]">
        <div className={`${activeButtonStyle} p-[0.5vw] rounded-2xl`}>
          <FaArrowLeft
            onClick={goToPrevious}
            className={`text-[1.2vw] cursor-pointer hover:scale-110 transition-transform duration-300 ${textStyle}`}
          />
        </div>

        <div className="flex gap-[1vw] flex-wrap justify-center">
          {projects.map((project, index) => {
            const isActive = activeProject.url === project.url
            return (
              <motion.button
                key={index}
                onClick={() => setActiveProject(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-[1vw] px-[1.2vw] py-[0.2vw] rounded-[1vw] font-medium transition-all duration-300 ${isActive ? `${activeButtonStyle} after:content-[''] after:w-[0.5vw] after:h-[0.5vw] after:bg-green-400 after:rounded-full after:absolute after:-top-[-0.7vw] after:left-[0.5vw] after:-translate-x-1/2` : buttonStyle}`}
              >
                {project.label}
              </motion.button>
            )
          })}
        </div>
        <div className={`${activeButtonStyle} p-[0.5vw] rounded-2xl`}>
          <FaArrowRight
            onClick={goToNext}
            className={`text-[1.2vw] cursor-pointer hover:scale-110 transition-transform duration-300 ${textStyle}`}
          />
        </div>
      </div>
    </>
  )
}
