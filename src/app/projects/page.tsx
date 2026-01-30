'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  sourceUrl: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Opus AI',
    description:
      'Developed public facing website for OpusAI and integrated platform to purchase the products from OpusAI with Stripe and MetaMask (Crypto).',
    imageUrl: '/images/opus-ai.webp',
    projectUrl: 'https://opus.ai',
    sourceUrl: 'https://opus.ai',
    tags: ['Svelte.js', 'Firebase Functions', 'GASP', 'MetaMask', 'Stripe'],
  },
  {
    title: 'Oxlabs Website',
    description:
      'Built public facing website with Next.js using Framer Motion and GASP. Configured Cloudflare workers for contact forms and email/Discord notifications.',
    imageUrl: '/images/oxlabs.webp',
    projectUrl: 'https://oxlabs.us',
    sourceUrl: 'https://oxlabs.us',
    tags: [
      'Next.js',
      'Typescript',
      'Framer Motion',
      'GASP',
      'TailwindCSS',
      'Cloudflare Workers',
      'Webhooks',
    ],
  },
  {
    title: 'Assetize',
    description:
      'I have been a founder, exited and later became an investor. As a founder, I am familiar with the hardship of constant need for capital. As an investor, I could not find passive income investments with decent yield. Thus, I decided to solve both problems in one with Assetize.',
    imageUrl: '/images/assetize.png',
    projectUrl: 'https://www.assetize.today/',
    sourceUrl: 'https://www.assetize.today/',
    tags: ['Next.js', 'Nest.js', 'Typescript', 'Bootstrap', 'Mollak API', 'Webhooks'],
  },
  {
    title: 'Parsec Institute',
    description:
      'A secure command-line utility for sharing .env files across development teams using GitHub Gists with client-side AES-256 encryption.',
    imageUrl: '/images/parsec.png',
    projectUrl: 'https://parsecinstitute.org/',
    sourceUrl: 'https://parsecinstitute.org/',
    tags: ['Svelte', 'Gsap', 'GitHub Gists', 'CLI'],
  },
  {
    title: 'PredatorCut',
    description:
      'Elevating Craftsmanship to an Art Form We craft high-performance instruments by blending form, function, and expert craftsmanship, using only the finest materials for our swords, knives, and precision tools. Hand Crafted in PAKISTAN.',
    imageUrl: '/images/predatorcut.png',
    projectUrl: 'https://predatorcut.pages.dev/',
    sourceUrl: 'https://predatorcut.pages.dev/',
    tags: ['Nest.js', 'Typescript', 'axios', 'Tailwind'],
  },
  {
    title: 'Payment Gateway Library',
    description:
      `"StrangCoin" is a cryptocurrency token inspired by the hit TV series "Stranger Things." It leverages the show's fandom to create a digital asset with a humorous and community- driven ethos.However, investors should exercise caution due to its speculative nature and potential volatility.`,
    imageUrl: '/images/strange.png',
    projectUrl: 'https://strangecoin.pages.dev/',
    sourceUrl: 'https://strangecoin.pages.dev/',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 space-y-12 w-full">
      <div className="text-center space-y-2">
        <div className="inline-block rounded-lg bg-white text-black font-black px-3 py-1 text-sm">
          My Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Check out my latest work
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
          I&apos;ve worked on a variety of projects, from simple websites to complex web
          applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px] mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.projectUrl}
              className="block cursor-pointer relative h-40 w-full"
            >
              <Image
                alt={project.title}
                src={project.imageUrl}
                fill
                className="object-cover object-top"
              />
            </a>

            <div className="flex flex-col px-2 mt-2">
              <h3 className="font-semibold tracking-tight text-base">{project.title}</h3>
              <p className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert mt-1">
                {project.description}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1 px-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border font-semibold transition-colors px-1 py-0 text-[10px] bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center pt-2 px-2 pb-2">
              <a target="_blank" rel="noopener noreferrer" href={project.sourceUrl}>
                <div className="items-center rounded-md border font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                  <svg
                    viewBox="0 0 438.549 438.549"
                    className="size-3 w-3 h-3"
                    fill="currentColor"
                  >
                    <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 ..."></path>
                  </svg>
                  Source
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
