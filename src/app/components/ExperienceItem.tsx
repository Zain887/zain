'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export type Experience = {
    company: string
    role: string
    period: string
    logo: string
    link?: string
    details: string[]
}

type Props = {
    data: Experience
    isOpen: boolean
    onToggle: () => void
}

export function ExperienceItem({ data, isOpen, onToggle }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg bg-card py-4"
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center gap-4 text-left group"
            >
                {/* Logo */}
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border">
                    <Image
                        src={data.logo}
                        alt={data.company}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Info */}
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold">
                            {data.company}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                            {data.period}
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {data.role}
                    </p>
                </div>

                {/* Arrow */}
                <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground"
                >
                    ▶
                </motion.span>
            </button>

            {/* Accordion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 space-y-1 pl-16 text-xs sm:text-sm text-muted-foreground"
                    >
                        {data.details.map((item, i) => (
                            <li key={i}>• {item}</li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
