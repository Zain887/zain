'use client'

import { useTheme } from '../context/ThemeContext'

export default function Resume() {
  const { theme } = useTheme()

  // Choose the shadow and background class based on theme
  const containerStyle =
    theme === 'dark'
      ? 'dark-inner-boxshadow bg-[#292D32]'
      : 'light-inner-boxshadow bg-[#E0E0E0]'
      
  const otherExp = 
      theme === 'dark'
      ? 'dark-drop-boxshadow bg-[#292D32]'
      : 'light-drop-boxshadow bg-[#E0E0E0]'

  return (
    <>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className={`mb-[1.5vw] ml-[10vw] text-[1.8vw] font-bold px-[2.9vw] w-fit rounded-[1.5vw] transition-all duration-500 ${containerStyle}`}>
            Technical Experience
          </h1>
          <div className='flex items-center justify-between'>
            <div className={`mr-[1.5vw] w-[21.4vw] h-[22.6vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}>
              <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'> UI/UX Developer
                FusionTech<span className='text-[0.7vw]'> 2023 – 2024</span></h1>
              <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                Developed modern, responsive user interfaces for enterprise web apps using Next.js,React,Tailwind CSS, and TypeScript. Collaborated closely with design teams to translate Figma wireframes into functional, accessible UI components. Delivered scalable front-end architecture and implemented reusable components to improve development efficiency and maintainability.
              </p>
            </div>
            <div className={`w-[21.4vw] h-[22.6vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}>
              <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'> Shopify Developer
                Freelancer <span className='text-[0.7vw]'>2024 – 2025</span></h1>
              <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                Built and customized Shopify themes for e-commerce clients, focusing on high-performance storefronts and seamless user experience. Integrated third-party Shopify apps, customized Liquid templates, and optimized product and checkout flows. Ensured responsive design and conversion-focused UI for mobile and desktop platforms.
              </p>
            </div>
          </div>
          <div className='mt-[1.5vw] flex items-center justify-between'>
            <div className={`mr-[1.5vw] w-[21.4vw] h-[18.8vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}>
              <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'>Front-End Engineer
                Opus.ai  <span className='text-[0.7vw]'>2021 – 2023</span></h1>
              <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                Designed and developed the Opus.ai website using advanced CSS and GSAP animations. Integrated a mobile app and handled production deployments. Mentored junior developers, enforced code quality standards, and delivered seamless user experiences through custom front-end engineering.
              </p>
            </div>
            <div className={`w-[21.4vw] h-[18.8vw] rounded-2xl transition-all duration-500 p-[1vw] ${containerStyle}`}>
              <h1 className='text-center text-[1.8vw] leading-[2vw] font-medium'> Front-End Developer
                Ennovention.uk <span className='text-[0.7vw]'>2019 – 2020</span></h1>
              <p className='text-center text-[1vw] mt-[1vw] font-extralight'>
                Built responsive and customized WordPress interfaces. Worked collaboratively with designers and backend teams to deliver tailored digital solutions. Managed timelines, client expectations, and applied WordPress best practices for fast, optimized websites.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={`w-[29vw] h-[34.6vw] transition-all duration-500 rounded-2xl ${otherExp}`}>
              <h1>Other Experience</h1>
              <p>Assistant Manager – HushPuppies (2015–2016) Led store operations and team management to improve sales and customer satisfaction.</p>
              <p>Sales Executive – Alixeeshan Studio (2012–2013) Delivered excellent customer service and handled retail sales.</p>
              <h1>Certifications</h1>
              <ul>
                <li>Cloud Computing</li>
                <li>Network Security</li>
                <li>Cybersecurity</li>
                <li>Cloud Fundamentals & Configuration</li>
              </ul>
              <h1>Education</h1>
              <ul>
                <li>ADP in Computer Science </li>
                <li>Diploma of Associate Engineer (DAE) </li>
                <li>Matriculation (Science)</li>
              </ul>
          </div> 
        </div>
      </div>
    </>
  )
}
