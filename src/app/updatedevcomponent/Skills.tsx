const skills = ["Next.js", "React", "NestJS", "PostgreSQL", "Docker", "AWS"];

export default function Skills() {
    return (
        <section className="py-32">
            <h2 className="text-4xl text-center mb-12">Skills</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
                {skills.map(skill => (
                    <div key={skill} className="bg-white/5 p-6 rounded-xl text-center hover:scale-105 transition">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
