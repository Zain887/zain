'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export type Education = {
  institute: string
  degree: string
  period: string
  logo: string
  link?: string
}

type Props = {
  data: Education
}

export function EducationItem({ data }: Props) {
  return (
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="block rounded-lg bg-card py-4 hover:bg-muted/50 transition"
    >
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border">
          <Image
            src={data.logo}
            alt={data.institute}
            fill
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">
              {data.institute}
            </h3>
            <span className="text-xs text-muted-foreground">
              {data.period}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            {data.degree}
          </p>
        </div>

        {/* Arrow */}
        <span className="text-muted-foreground opacity-0 transition group-hover:opacity-100">
          →
        </span>
      </div>
    </motion.a>
  )
}
