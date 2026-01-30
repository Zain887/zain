'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="pt-16">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Text */}
          <motion.div
            className="flex flex-1 flex-col space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I&apos;m Muhammad Zain 👋
            </motion.h1>

            <motion.p
              className="max-w-[700px] text-base text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Engineer 🐱‍💻 • Web3 &amp; AI 🥷 • Artist 🌱
              <br className="hidden sm:block" />
              I love building things and cooking 🍳
            </motion.p>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.15,
            }}
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
              <Image
                src="/images/zainlogopic.png"
                alt="Muhammad Zain"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
