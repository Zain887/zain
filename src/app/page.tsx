'use client'
import { motion } from 'framer-motion'
import Hero from './hero/page'
import About from './about/page'
import Resume from './resume/page'
import Education from './education/page'
import Skills from './skills/page'

export default function Home() {


  return (
    <>
      <Hero />
      <About />
      <Resume/>
      <Education/>
      <Skills/>
    </>
  )
}
