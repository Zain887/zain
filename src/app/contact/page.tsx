// components/Contact.js

export default function Contact() {
    return (
        <section id="contact" className="w-full py-12">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div
                    style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "translateY(-6px)",
                    }}
                >
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-white text-black font-black px-3 py-1 text-sm">
                            Connect
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Let&apos;s Talk
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Want to chat? Just schedule a{" "}
                            <a
                                href="https://dub.sh/call-mudassir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                quick meeting
                            </a>{" "}
                            and I'll respond as soon as I can!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
