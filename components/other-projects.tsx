"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Folder } from "lucide-react"

export function OtherProjects() {
  const [showMore, setShowMore] = useState(false)

  const projects = [
    {
      title: "CricPulse",
      description:
        "A real-time, data-driven platform focused on managing and visualizing complex Cricket database. The application integrates GraphQL for efficient data querying and WebSockets for live updates, enabling users to access match insights as they happen.",
      technologies: ["React", "Rust", "PostgreSQL", "WebSockets", "JWT/OAuth"],
      github: "https://github.com/Quantifier58/Project_DBMS",
    },
    {
      title: "EntVision",
      description:
        "OCR driven entity recognition system that extracts and visualizes relationships from unstructured text data.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Tesseract", "EasyOCR"],
      github: "https://github.com/Quantifier58/EntVision",
    },
    {
      title: "Automated Attendance System",
      description:
        "A productivity app that streamlines attendance tracking with features like drag-and-drop functionality, categories, and progress tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
      github: "https://github.com/Quantifier58/Attend_Trk",
    },
  ]

  const visibleProjects = showMore ? projects : projects.slice(0, 3)

  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4 text-center">Other Noteworthy Projects</h2>
        <p className="text-teal-400 font-mono text-center mb-12">view the archive</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 
                hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 
                transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-teal-400 w-8 h-8" />
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowMore(!showMore)}
              className="border-teal-400 text-teal-400 hover:bg-teal-400/10 bg-transparent"
            >
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
