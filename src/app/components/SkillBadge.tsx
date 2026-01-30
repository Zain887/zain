'use client'

import { motion } from 'framer-motion'

type Props = {
    label: string
}

export function SkillBadge({ label }: Props) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="
        inline-flex items-center rounded-md
        bg-white text-black
        px-2.5 py-0.5 text-xs font-semibold
        border border-black/10
        shadow-sm
        transition
        hover:bg-black hover:text-white
      "
        >
            {label}
        </motion.span>
    )
}
