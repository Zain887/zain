'use client'

import { useTheme } from '../context/ThemeContext'

export default function Resume() {
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
        
      </div>
    </section>
  )
}
