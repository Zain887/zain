'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import { useTheme } from '../context/ThemeContext'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Ping_me', href: '/contact' },
]

export default function Sidebar() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const asideBg = theme === 'dark' ? 'bg-[#292D32]' : 'bg-[#E0E0E0]'
  const nameText = theme === 'dark' ? 'text-white' : 'text-black'
  const titleText = theme === 'dark' ? 'text-gray-400' : 'text-gray-700'

  return (
    <aside
      className={`w-full md:w-[20vw] flex flex-col items-center py-6 px-4 md:px-2 h-fit md:min-h-screen overflow-y-auto transition-colors duration-500 ${asideBg}`}
    >
      {/* Toggle button top right */}
      <div className="w-full flex justify-end mb-4 md:mb-6">
        <ToggleButton />
      </div>

      {/* Profile Section - row on mobile, column on md+ */}
      <div className="flex flex-row md:flex-col items-center md:space-y-4 space-x-4 md:space-x-0 w-full justify-center">
        {/* Profile Image */}
        <div className="rounded-full border-4 border-gray-500 w-[28vw] h-[28vw] md:w-[14.6vw] md:h-[14.6vw] flex items-center justify-center transition-all duration-500">
          <Image
            src="/images/zain.png"
            alt="Muhammad Zain"
            width={260}
            height={260}
            className="object-cover w-full h-full rounded-full"
            priority
          />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col items-start md:items-center mt-2 md:mt-0">
          <h2
            className={`text-lg md:text-[1.8vw] font-bold transition-colors duration-500 ${nameText}`}
          >
            MUHAMMAD ZAIN
          </h2>
          <p
            className={`text-sm md:text-[1.2vw] font-semibold transition-colors duration-500 ${titleText}`}
          >
            FULL STACK DEVELOPER
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="
    mt-6 md:mt-[1.6vw]
    w-full
    grid grid-cols-2 gap-3 
    md:flex md:flex-col md:items-center md:space-y-4
  "
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          const activeClass =
            theme === 'dark'
              ? 'dark-inner-boxshadow text-white active-tab-dot'
              : 'light-inner-boxshadow text-black active-tab-dot'

          const inactiveClass =
            theme === 'dark'
              ? 'dark-drop-boxshadow text-white'
              : 'light-drop-boxshadow text-black'

          return (
            <a
              key={item.href}
              href={item.href}
              className={`
          relative block
          text-center text-sm md:text-[1.2vw] font-bold
          py-2 rounded-full
          transition-all duration-500 hover:scale-[1.03]
          w-full md:w-[15.5vw]
          ${isActive ? activeClass : inactiveClass}
        `}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

    </aside>
  )
}
