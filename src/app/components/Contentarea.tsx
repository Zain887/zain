'use client'

import { ReactNode } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Contentarea({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  const backgroundClass =
    theme === 'dark'
      ? 'bg-[#292D32] text-white'
      : 'bg-[#E0E0E0] text-black'

  return (
    <aside className={`w-[80vw] relative p-8 min-h-screen flex flex-col overflow-y-auto transition-colors duration-300 ${backgroundClass}`}>
      {children}
    </aside>
  )
}
