'use client'

import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme()

  const toggleClass =
    theme === 'dark'
      ? 'dark-tgl dark-inner-boxshadow'
      : 'light-tgl light-inner-boxshadow'

  return (
    <div className="theme-toggle-wrapper">
      <button
        onClick={toggleTheme}
        className={toggleClass}
        aria-label="Toggle theme"
      >
        <Image
          src="/images/moon.svg"
          width={16}
          height={16}
          alt="moon"
          className={`w-[0.9vw] h-[0.9vw] transition ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`}
        />
        <Image
          src="/images/sun.svg"
          width={16}
          height={16}
          alt="sun"
          className={`w-[0.9vw] h-[0.9vw] transition ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`}
        />
      </button>
    </div>
  )
}
