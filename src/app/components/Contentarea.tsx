'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Contentarea({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backgroundClass =
    theme === 'dark'
      ? 'bg-[#292D32] text-white'
      : 'bg-[#E0E0E0] text-black'

  return (
    <main
      className={`w-full md:w-[80vw] relative p-4 md:p-8 min-h-screen flex flex-col overflow-y-auto transition-colors duration-300 ${backgroundClass}`}
    >
      {children}
    </main>
  )
}
