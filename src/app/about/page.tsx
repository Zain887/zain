'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="pt-16">
      <div className="mx-auto w-full max-w-4xl space-y-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold">About</h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <p>
              I started out just curious about code and somehow ended up building
              full stack apps across blockchain (smart contract auditing,
              cross-chain development, dApps) and agentic AI.
            </p>

            <p>
              These days I’m a Full Stack Engineer who enjoys turning messy ideas
              into things that actually work. I’m always learning, breaking
              things, fixing them, and repeating the cycle.
            </p>

            <p>
              I mostly work with Node.js (NestJS, Express), Python (FastAPI), and
              Rust—building Solana smart contracts and high-performance
              backends.
            </p>

            <p>
              Big fan of open source, building in public, and collaborating with
              cool people. Also, I cook almost as much as I code 🍳
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
