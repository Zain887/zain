'use client'

import { useTheme } from '../context/ThemeContext'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  const iconColor = theme === 'dark' ? 'text-white' : 'text-black'

  const iconList = [
    { icon: <FaPhoneAlt />, label: 'Call', link: 'tel:+923302376222' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', link: 'https://wa.me/+923302376222' },
    { icon: <FaEnvelope />, label: 'Email', link: 'mailto:zainansari887@gmail.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammadZain887/' },
    { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/Zain887' },
  ]

  const easeCurve = [0.25, 0.1, 0.25, 1] as const

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className={`mb-[6vw] sm:mb-[4vw] lg:mb-[1.5vw] mx-auto text-[6vw] sm:text-[3.5vw] lg:text-[1.8vw] font-bold px-[6vw] lg:px-[5.5vw] w-fit rounded-[3vw] lg:rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}
      >
        Let&rsquo;s Work Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
        className='text-[4vw] sm:text-[2.5vw] lg:text-[1.2vw] leading-[6vw] sm:leading-[4vw] lg:leading-[2.5vw] w-full sm:w-[80vw] lg:w-[55vw] uppercase mx-auto mb-[8vw] sm:mb-[6vw] lg:mb-[4.3vw] text-center'
      >
        I craft digital solutions that redefine brands and elevate online experiences.
        Whether you&rsquo;re looking to start a new project, collaborate, or just say hello —
        I&rsquo;m just a message away.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: easeCurve }}
        className={`${containerStyle} w-full sm:w-[70vw] lg:w-[32.9vw] h-auto lg:h-[25.7vw] p-[5vw] sm:p-[3vw] lg:p-[1vw] rounded-[5vw] sm:rounded-3xl lg:rounded-2xl mx-auto flex flex-col justify-center items-center`}
      >
        <h1 className='text-[5vw] sm:text-[2.5vw] lg:text-[1.5vw] font-semibold mb-[3vw] lg:mb-[1vw]'>
          Get in Touch
        </h1>

        <div className='flex flex-wrap justify-center items-center gap-[5vw] sm:gap-[3vw] lg:gap-[1.5vw]'>
          {iconList.map(({ icon, label, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className={`group flex flex-col items-center justify-center ${iconColor} text-[7vw] sm:text-[4vw] lg:text-[2vw] hover:scale-110 transition-transform duration-300`}
              whileHover={{ y: -5 }}
            >
              {icon}
              <span className='text-[2.5vw] sm:text-[1.5vw] lg:text-[0.7vw] opacity-0 group-hover:opacity-100 mt-[1vw] transition-opacity duration-300'>
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
