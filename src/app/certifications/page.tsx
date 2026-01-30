// components/Certifications.js
import Image from "next/image";

const certifications = [
  {
    title: "The React Crash Course",
    date: "March 2023",
    description:
      "Topics Covered: Project Creation, JSX Templating, Attributes, Styles, Expressions, Events, CDN Integration, Functional & Class Components, Props, Nesting, Reusability, and State Management.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "The React Crash Course",
    link: "#",
    type: "Certificate",
  },
  {
    title: "OAuth 2.0",
    date: "May 2022",
    description: "Getting Started with OAuth 2.0 implementation.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "OAuth 2.0",
    link: "#",
    type: "Certificate",
  },
  {
    title: "Intro to Server Administration",
    date: "April 2022",
    description:
      "Topics Covered: Provisioning, SSH, Putty, the FileSystem, Permissions, Nano, Vim, Package Management with Yum, LAMP Stack configuration, Git integration, Database operations, DNS, Virtual Hosts, Firewalls, Snapshots, Logging, and more.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "Intro to Server Administration",
    link: "#",
    type: "Certificate",
  },
  {
    title: "Javascript",
    date: "November 2021",
    description: "It covers Functions, Currying, Hoisting, Scope, Inheritance, Events, and Error Handling.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "Javascript",
    link: "#",
    type: "Certificate",
  },
  {
    title: "SQL",
    date: "October 2021",
    description: "It includes complex joins, unions, and sub-queries.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "SQL",
    link: "#",
    type: "Certificate",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations 2021 Associate",
    date: "October 2021",
    description: "Describe Core Solutions On OCI. Discuss Core OCI Services And Cloud Native Services.",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "OCI Foundations",
    link: "#",
    type: "Certificate",
  },
  {
    title: "Serverless Firebase Development",
    date: "May 2021",
    description: "Serverless Firebase Development",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "Serverless Firebase",
    link: "#",
    type: "Badge",
  },
  {
    title: "Serverless Cloud Run Development",
    date: "May 2021",
    description: "Serverless Cloud Run Development",
    imgSrc: "/images/logoPlaceholder.png",
    alt: "Serverless Cloud Run",
    link: "#",
    type: "Badge",
  },
  // Add more certifications here as needed
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Certifications
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          I like learning things
        </h2>
        <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
          During my journey, I earned {certifications.length}+ certifications.
        </p>
      </div>

      <ul className="ml-4 border-l divide-y divide-dashed">
        {certifications.map((cert, index) => (
          <li key={index} className="relative ml-10 py-6 flex flex-col gap-2">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <Image
                src={cert.imgSrc}
                alt={cert.alt}
                width={48}
                height={48}
                className="rounded-full border object-contain"
              />
            </div>
            <time className="text-xs text-muted-foreground">{cert.date}</time>
            <h3 className="font-semibold leading-none">{cert.title}</h3>
            <p className="prose dark:prose-invert text-sm text-muted-foreground">
              {cert.description}
            </p>
            {cert.link && (
              <div className="mt-2 flex gap-2 flex-wrap">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2.5 py-0.5 text-xs font-semibold rounded-md border bg-primary text-primary-foreground shadow hover:bg-primary/80"
                >
                  {cert.type}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
