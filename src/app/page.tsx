// 'use client'
// import { motion } from 'framer-motion'
// import Hero from './hero/page'
// import About from './about/page'
// import Resume from './resume/page'
// import Education from './education/page'
// import Skills from './skills/page'
// import Projects from './projects/page'
// import Certifications from './certifications/page'
// import Contact from './contact/page'

// const sectionVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// }

// export default function Home() {
//   return (
//     <>
//       {/* Hero */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <Hero />
//       </motion.div>

//       {/* About */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
//       >
//         <About />
//       </motion.div>

//       {/* Resume */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
//       >
//         <Resume />
//       </motion.div>

//       {/* Education */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
//       >
//         <Education />
//       </motion.div>

//       {/* Skills */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
//       >
//         <Skills />
//       </motion.div>

//       {/* Projects */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
//       >
//         <Projects />
//       </motion.div>

//       {/* Certifications */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
//       >
//         <Certifications />
//       </motion.div>

//       {/* Contact */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={sectionVariants}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
//       >
//         <Contact />
//       </motion.div>
//     </>
//   )
// }

import Navbar from "@/app/updatedevcomponent/Navbar";
import Hero from "@/app/updatedevcomponent/Hero";
import About from "@/app/updatedevcomponent/About";
import Skills from "@/app/updatedevcomponent/Skills";
import Experience from "@/app/updatedevcomponent/Experience";
import Projects from "@/app/updatedevcomponent/Projects";
import Contact from "@/app/updatedevcomponent/Contact";
import Footer from "@/app/updatedevcomponent/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
