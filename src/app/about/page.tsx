'use client'

import { useTheme } from '../context/ThemeContext'

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

  const services = [
    {
      title: 'UI/UX Design',
      desc: 'I design and develop intuitive, user-centered interfaces with a focus on accessibility, usability, and consistency across devices.',
    },
    {
      title: 'Web Development',
      desc: ' I build responsive, fast, and interactive websites using modern frameworks with a strong focus on performance and user experience.',
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
    <section className="text-2xl absolute left-[5.9vw] top-[1.5vw]">
      {/* About Box */}
      <div
        className={`w-[68.8vw] h-[26.4vw] rounded-[1vw] transition-all duration-500 p-[1.5vw] ${mainBoxStyle}`}
      >
        <h3 className="uppercase text-[1.8vw]">Hi, my name is</h3>
        <h1 className="text-[2.5vw] text-center mb-[1.4vw] font-bold">
          Muhammad Zain Riaz Ansari
        </h1>
        <h5 className="text-[1.2vw] text-center mb-[1vw] font-extralight">
          Programmer & Digital Solutions Expert
        </h5>
        <p className="text-[1.6vw] font-extralight">
          Passionate and versatile, I specialize in building scalable web applications with a
          focus on UI/UX design, interactive front-end development, and secure coding practices.
          With a strong foundation in electrical engineering and a keen interest in cybersecurity,
          I bring a deep understanding of both hardware logic and software architecture. As a
          front-end engineer, I combine creative design with modern development frameworks to
          deliver fast, secure, and visually compelling digital experiences.
        </p>
      </div>

      {/* Services Heading */}
      <h2 className="font-bold text-[1.8vw] text-center my-[1.5vw]">My Services</h2>

      {/* Service Boxes */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-[68.8vw] gap-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`w-full md:w-[15.7vw] h-[30vw] md:h-[15.7vw] rounded-[1vw] p-[1vw] cursor-pointer flex flex-col justify-center items-center text-center transition-all duration-500 ${serviceBoxStyle}`}
          >
            <h3 className="text-[1.2vw] font-semibold mb-[2vw]">{service.title}</h3>
            <p className="text-[1vw] font-light">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
