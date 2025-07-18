'use client'

import { useTheme } from '../context/ThemeContext'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  const iconColor = theme === 'dark' ? 'text-white' : 'text-black'

  const iconList = [
    {
      icon: <FaPhoneAlt />,
      label: 'Call',
      link: 'tel:+1234567890',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      link: 'https://wa.me/+923302376222',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      link: 'mailto:zainansari887@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/muhammadZain887/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      link: 'https://github.com/Zain887',
    },
  ]

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-[1.5vw] mx-auto text-[1.8vw] font-bold px-[5.5vw] w-fit rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}
      >
        Let&rsquo;s Work Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='text-[1.2vw] leading-[2.5vw] w-[55vw] uppercase mx-auto mb-[4.3vw] text-center'
      >
        I craft digital solutions that redefine brands and elevate online experiences.
        Whether you&rsquo;re looking to start a new project, collaborate, or just say hello —
        I&rsquo;m just a message away.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${containerStyle} p-[1vw] w-[32.9vw] h-[25.7vw] rounded-2xl mx-auto flex flex-col justify-center items-center`}
      >
        <h1 className='text-[1.5vw] font-semibold mb-[1vw]'>Get in Touch</h1>

        <div className='flex gap-[1.5vw] flex-wrap justify-center items-center'>
          {iconList.map(({ icon, label, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={`group flex flex-col items-center justify-center ${iconColor} text-[2vw] hover:scale-110 transition-all duration-300`}
              whileHover={{ y: -5 }}
            >
              {icon}
              <span className='text-[0.7vw] opacity-0 group-hover:opacity-100 mt-[0.3vw] transition-opacity duration-300'>
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}
