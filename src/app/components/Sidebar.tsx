'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
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

  const asideBg = theme === 'dark' ? 'bg-[#292D32]' : 'bg-[#E0E0E0]'
  const nameText = theme === 'dark' ? 'text-white' : 'text-black'
  const titleText = theme === 'dark' ? 'text-gray-400' : 'text-gray-700'

  return (
    <aside className={`w-[20vw] flex flex-col items-center relative transition-colors duration-500 ${asideBg}`}>
      <ToggleButton />

      {/* Profile Image */}
      <div className="rounded-full border-4 border-gray-500 mt-[1vw] w-[14.6vw] h-[14.6vw] flex items-center justify-center transition-all duration-500">
        <Image
          src="/images/zain.png"
          alt="Muhammad Zain"
          width={260}
          height={260}
          className="object-cover"
        />
      </div>

      {/* Name and Title */}
      <h2 className={`mt-4 text-[1.8vw] font-bold transition-colors duration-500 ${nameText}`}>MUHAMMAD ZAIN</h2>
      <p className={`text-[1.2vw] font-semibold transition-colors duration-500 ${titleText}`}>FULL STACK DEVELOPER</p>

      {/* Navigation Buttons */}
      <nav className="mt-[1.6vw] w-full space-y-4">
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
              className={`relative block w-[15.5vw] h-[2.7vw] mx-auto mt-[1.5vw] text-center text-[1.2vw] font-bold py-2 rounded-full transition-all duration-500 hover:scale-[1.03] ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
