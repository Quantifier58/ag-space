import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

export function Work() {
  const projects = [
    {
      title: "GearHex",
      description:
        "An inventory management system to automate stock tracking, replacing manual spreadsheets with a scalable digital solution. Its built‑in email alert system proactively notifies users of low inventory and reminders, ensuring timely restocking and fewer errors.",
      technologies: ["Next.js", "React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      image: "/assets/gearhex.png",
      github: "https://github.com/Quantifier58/Vercel_SE",
      external: "https://se-project-final.vercel.app/login",
      featured: true,
    },
    {
      title: "DaemonByte",
      description:
        "A React app for real‑time data encoding, decoding, and cryptographic transformations—from Base64 and MD5 to Bacon Cipher—within a sleek, modular interface. Designed for both enthusiasts and professionals, it streamlines complex security operations into reusable UI components.",
      technologies: ["React", "CSS", "crypto-js", "Context API", "Service Layer"],
      image: "/assets/daemonbyte.png",
      github: "https://github.com/Quantifier58/CS2__CyberChefClone",
      external: "https://daemonbyte.vercel.app/",
      featured: true,
    },
  ]

  return (
    <section id="work" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
          <span className="text-teal-400 font-mono text-3xl">{'>'}</span> Projects I&#39;ve Built
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-12 gap-8 items-center hover-lift rounded-lg px-5 py-4 group${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative w-[625px] h-[315px] overflow-hidden rounded-lg bg-teal-400/30 ">
                  {/* <div className="absolute inset-0 bg-teal-400/30 rounded-lg transition-colors duration-300"></div> */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={500}
                    className="absolute bottom-0 left-0 object-contain rounded-lg transition-all duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
                <div
                  className="bg-slate-800 dark:bg-slate-700/50 p-6 rounded-lg mb-4 shadow-lg 
                    hover:shadow-xl transition-all duration-300 
                    border border-teal-800/30"
                >
                  <p className="text-slate-300 dark:text-slate-300">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-teal-400 p-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-teal-400 p-2"
                  >
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}