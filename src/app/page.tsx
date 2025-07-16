'use client'

import { useTheme } from './context/ThemeContext'

export default function Home() {
  const { theme } = useTheme()

  // Choose the shadow and background class based on theme
  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  return (
    <section className="text-2xl absolute left-[5.9vw] top-[7.2vw]">
      <div
        className={`w-[68.8vw] h-[34.1vw] rounded-[2vw] transition-all duration-500 ${containerStyle}`}
      >
        <h1 className='text-[2.5vw] font-bold text-center pt-[1.2vw]'>
          Creative Front-End Developer & UI/UX Engineer
        </h1>
        <div className='text-center w-[48vw] mx-auto'>
          <h2 className='pt-[3.5vw] text-[1.8vw]'>
            Front-End Engineer
          </h2>
          <h2 className='pt-[2.6vw] text-[1.8vw]'>
            UI/UX Designer
          </h2>
          <h2 className='pt-[2.6vw] text-[1.8vw]'>
            Web Animator
          </h2>
          <h2 className='pt-[2.6vw] text-[1.8vw]'>
            Idea-to-Execution Expert
          </h2>
          <h3 className='pt-[3.5vw] font-medium text-[1.2vw]'>
            Let’s explore innovative concepts together and transform them into real,
            functional web experiences. Your next big thing starts here.
          </h3>
        </div>
      </div>
    </section>
  )
}
