'use client'

import { SkillBadge } from '../components/SkillBadge'
import { skills } from '../components/data'

export default function Skills() {
    return (
        <section id="skills" className="pb-16">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-xl font-bold">Skills</h2>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <SkillBadge key={skill} label={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}
