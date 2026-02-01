export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-6xl font-bold">Muhammad Zain</h1>
                    <h2 className="text-2xl text-orange-500 mt-4">Full Stack Developer</h2>
                    <p className="mt-6 text-gray-400">
                        I build fast, scalable web applications using Next.js, NestJS, and modern backend architectures.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-orange-500 rounded-xl">View Projects</a>
                        <a href="#contact" className="px-6 py-3 border border-orange-500 rounded-xl">Contact Me</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-64 h-64 rounded-full bg-orange-500/20 blur-2xl absolute" />
                    <img src="/profile.png" className="relative rounded-full w-64" />
                </div>
            </div>
        </section>
    );
}
