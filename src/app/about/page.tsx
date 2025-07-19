'use client'

import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function About() {
  const { theme } = useTheme()

  const mainBoxStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  const serviceBoxStyle =
    theme === 'dark'
      ? 'dark-drop-boxshadow bg-[#292D32]'
      : 'light-drop-boxshadow bg-[#E0E0E0]'

  const easeCurve = [0.25, 0.1, 0.25, 1] as const

  const services = [
    {
      title: 'UI/UX Design',
      desc: 'I design and develop intuitive, user-centered interfaces with a focus on accessibility, usability, and consistency across devices.',
    },
    {
      title: 'Web Development',
      desc: 'I build responsive, fast, and interactive websites using modern frameworks with a strong focus on performance and user experience.',
    },
    {
      title: 'Web Animation',
      desc: 'From subtle micro-interactions to engaging visual transitions, I bring interfaces to life using CSS, GSAP, and Lottie animations.',
    },
    {
      title: 'Social Media Management',
      desc: 'Strategic content planning, audience engagement, and performance analysis to grow your online presence across major platforms.',
    },
  ]

  return (
    <section className="text-2xl lg:absolute lg:left-[5.9vw] lg:top-[1.5vw] px-4 sm:px-6 lg:px-0 pt-[6vw] lg:pt-0">
      {/* About Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeCurve }}
        className={`w-[68.8vw] h-[26.4vw] rounded-[1vw] p-[1.5vw] transition-all duration-500 ${mainBoxStyle}
          max-lg:w-full max-lg:h-auto max-lg:rounded-[4vw] max-lg:p-[6vw]`}
      >
        <h3 className="uppercase text-[1.8vw] max-lg:text-[5vw] max-sm:text-[6vw]">
          Hi, my name is
        </h3>
        <h1 className="text-[2.5vw] text-center mb-[1.4vw] font-bold max-lg:text-[6vw] max-lg:mb-[4vw]">
          Muhammad Zain Riaz Ansari
        </h1>
        <h5 className="text-[1.2vw] text-center mb-[1vw] font-extralight max-lg:text-[4vw] max-lg:mb-[4vw]">
          Programmer & Digital Solutions Expert
        </h5>
        <p className="text-[1.6vw] font-extralight leading-[2.5vw] text-justify
           max-lg:text-[4vw] max-lg:leading-[6vw] max-sm:text-[4.5vw] max-sm:leading-[7vw]">
          Passionate and versatile, I specialize in building scalable web applications with a
          focus on UI/UX design, interactive front-end development, and secure coding practices.
          With a strong foundation in electrical engineering and a keen interest in cybersecurity,
          I bring a deep understanding of both hardware logic and software architecture. As a
          front-end engineer, I combine creative design with modern development frameworks to
          deliver fast, secure, and visually compelling digital experiences.
        </p>
      </motion.div>

      {/* Services Heading */}
      <h2 className="font-bold text-[1.8vw] text-center my-[1.5vw]
        max-lg:text-[4vw] max-lg:my-[4vw] max-sm:text-[6vw] max-sm:my-[6vw]">
        My Services
      </h2>

      {/* Services */}
      <div className="flex justify-between items-center gap-[4vw] w-[68.8vw]
        max-lg:grid max-lg:grid-cols-2 max-lg:w-full max-sm:grid-cols-1">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: easeCurve }}
            viewport={{ once: true }}
            className={`w-[15.7vw] h-[15.7vw] rounded-[1vw] p-[1vw] cursor-pointer
              flex flex-col justify-center items-center text-center transition-all duration-500 ${serviceBoxStyle}
              max-lg:w-full max-lg:h-auto max-lg:rounded-[4vw] max-lg:p-[4vw]`}
          >
            <h3 className="text-[1.2vw] font-semibold mb-[2vw]
              max-lg:text-[2.5vw] max-lg:mb-[3vw] max-sm:text-[4vw]">
              {service.title}
            </h3>
            <p className="text-[1vw] font-light
              max-lg:text-[2vw] max-sm:text-[3.5vw]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
