'use client'

import { useState } from 'react'
import { ExperienceItem } from '../components/ExperienceItem'
import { workExperience } from '../components/data'

export default function Resume() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // auto-open latest

  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="text-xl font-bold">Work Experience</h2>

        <div className="space-y-3">
          {workExperience.map((job, index) => (
            <ExperienceItem
              key={job.company}
              data={job}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
