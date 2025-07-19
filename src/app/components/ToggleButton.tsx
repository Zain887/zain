'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent hydration mismatch

  const isDark = theme === 'dark'

  return (
    <div className="absolute top-4 right-4 md:static md:self-end z-10">
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 md:w-[2.6vw] md:h-[1.3vw] rounded-full px-1 flex items-center justify-between transition-all duration-300 cursor-pointer
          ${isDark ? 'bg-[#292D32] shadow-inner shadow-black/70' : 'bg-[#E0E0E0] shadow-inner shadow-gray-300'}
        `}
        aria-label="Toggle theme"
      >
        {/* Moon Icon (left) */}
        <Image
          src="/images/moon.svg"
          width={16}
          height={16}
          alt="moon"
          className={`transition-opacity duration-300 w-4 h-4 md:w-[0.9vw] md:h-[0.9vw] ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sun Icon (right) */}
        <Image
          src="/images/sun.svg"
          width={16}
          height={16}
          alt="sun"
          className={`transition-opacity duration-300 w-4 h-4 md:w-[0.9vw] md:h-[0.9vw] ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Sliding Knob */}
        <span
          className={`absolute top-[2px] transition-all duration-300 rounded-full z-10
            w-5 h-5 md:w-[1vw] md:h-[1vw]
            ${isDark
              ? 'left-[2px] bg-[#292D32] shadow-[6px_6px_12px_#000000,-6px_-6px_12px_#3B3B3B]'
              : 'left-[calc(100%-22px)] bg-[#E0E0E0] shadow-[6px_6px_12px_#BEBEBE,-6px_-6px_12px_#FFFFFF]'
            }`}
        />
      </button>
    </div>
  )
}
