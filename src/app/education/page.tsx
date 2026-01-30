'use client'

import { EducationItem } from '../components/EducationItem'
import { educationData } from '../components/data'

export default function Education() {
  return (
    <section id="education" className="pb-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="text-xl font-bold">Education</h2>

        <div className="space-y-3">
          {educationData.map((edu) => (
            <EducationItem
              key={edu.institute}
              data={edu}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
