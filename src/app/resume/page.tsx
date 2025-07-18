'use client'

import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function Resume() {
  const { theme } = useTheme()

  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'

  const otherExp =
    theme === 'dark'
      ? 'dark-drop-boxshadow bg-[#292D32]'
      : 'light-drop-boxshadow bg-[#E0E0E0]'

  const techStack = [
    { src: '/images/react.svg', label: 'React' },
    { src: '/images/nextjs.svg', label: 'Next.js' },
    { src: '/images/cloudflare.svg', label: 'Cloudflare' },
    { src: '/images/nestjs.svg', label: 'NestJS' },
    { src: '/images/shopify.svg', label: 'Shopify' },
    { src: '/images/svelte.svg', label: 'Svelte' },
    { src: '/images/html.svg', label: 'HTML' },
    { src: '/images/css.svg', label: 'CSS' },
    { src: '/images/js.svg', label: 'JavaScript' },
    { src: '/images/github.svg', label: 'GitHub' },
    { src: '/images/firebase.svg', label: 'Firebase' },
    { src: '/images/linux.svg', label: 'Linux' },
    { src: '/images/postgres.svg', label: 'PostgreSQL' },
    { src: '/images/ts.svg', label: 'TypeScript' }
  ]

  return (
    <>
      <div className='flex justify-between items-start'>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-[1.5vw] ml-[10vw] text-[1.8vw] font-bold px-[2.9vw] w-fit rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}
          >
            Technical Experience
          </motion.h1>

          <div className='flex items-center justify-between'>
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`mr-[1.5vw] w-[21.4vw] h-[22.6vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}
              >
                <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'>
                  {i === 0 ? 'UI/UX Developer FusionTech' : 'Shopify Developer Freelancer'}
                  <span className='text-[0.7vw]'> {i === 0 ? '2023 – 2024' : '2024 – 2025'}</span>
                </h1>
                <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                  {i === 0
                    ? 'Developed modern, responsive user interfaces for enterprise web apps using Next.js, React, Tailwind CSS, and TypeScript. Collaborated closely with design teams to translate Figma wireframes into functional, accessible UI components. Delivered scalable front-end architecture and implemented reusable components to improve development efficiency and maintainability.'
                    : 'Built and customized Shopify themes for e-commerce clients, focusing on high-performance storefronts and seamless user experience. Integrated third-party Shopify apps, customized Liquid templates, and optimized product and checkout flows. Ensured responsive design and conversion-focused UI for mobile and desktop platforms.'}
                </p>
              </motion.div>
            ))}
          </div>

          <div className='mt-[1.5vw] flex items-center justify-between'>
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                className={`mr-[1.5vw] w-[21.4vw] h-[18.8vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}
              >
                <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'>
                  {i === 0 ? 'Front-End Engineer Opus.ai' : 'Front-End Developer Ennovention.uk'}
                  <span className='text-[0.7vw]'> {i === 0 ? '2021 – 2023' : '2019 – 2020'}</span>
                </h1>
                <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                  {i === 0
                    ? 'Designed and developed the Opus.ai website using advanced CSS and GSAP animations. Integrated a mobile app and handled production deployments. Mentored junior developers, enforced code quality standards, and delivered seamless user experiences through custom front-end engineering.'
                    : 'Built responsive and customized WordPress interfaces. Worked collaboratively with designers and backend teams to deliver tailored digital solutions. Managed timelines, client expectations, and applied WordPress best practices for fast, optimized websites.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className={`px-[3.0vw] w-[29vw] h-[34.6vw] transition-all duration-500 rounded-2xl ${otherExp}`}>
            <h1 className='text-[1.8vw] font-bold text-center mb-[1.0vw]'>Other Experience</h1>
            <p className='text-[1.0vw]'>
              Assistant Manager – HushPuppies (2015–2016) Led store operations and team management to improve sales and customer satisfaction.
            </p>
            <p className='mt-[0.5vw] text-[1.0vw]'>
              Sales Executive – Alixeeshan Studio (2012–2013) Delivered excellent customer service and handled retail sales.
            </p>
            <h1 className='text-[1.8vw] font-bold text-center my-[1.0vw]'>Certifications</h1>
            <ul className='text-start text-[1.0vw] list-disc'>
              <li>Cloud Computing</li>
              <li>Network Security</li>
              <li>Cybersecurity</li>
              <li>Cloud Fundamentals & Configuration</li>
            </ul>
            <h1 className='text-[1.8vw] font-bold text-center my-[1.0vw]'>Education</h1>
            <ul className='text-[1.0vw] list-disc'>
              <li>ADP in Computer Science </li>
              <li>Diploma of Associate Engineer (DAE) </li>
              <li>Matriculation (Science)</li>
            </ul>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='text-center my-[1.1vw] text-[1.8vw] font-bold'
          >
            Tech Stack
          </motion.h1>

          <motion.div
            className='grid grid-cols-7 space-y-2 me-auto'
            initial='hidden'
            animate='visible'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 1.2,
                },
              },
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`group relative w-[3.6vw] h-[3.6vw] flex items-center justify-center rounded-[1.3vw] cursor-pointer hover:scale-110 transition-transform ${otherExp}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Image
                  src={tech.src}
                  alt={tech.label}
                  width={100}
                  height={100}
                  className='object-contain w-[2.5vw] h-[2.5vw]'
                />
                <span className="absolute bottom-[110%] left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[0.7vw] px-[0.5vw] py-[0.2vw] rounded-[0.4vw] whitespace-nowrap z-10">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
