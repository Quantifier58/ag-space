"use client"

import { useState } from "react"
import { Code, Database, Globe, Smartphone, Server, Shield } from "lucide-react"

export function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      skills: ["JavaScript", "TypeScript", "Python", "C/C++"],
    },
    {
      icon: Globe,
      title: "Frontend",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Context APIs", "Chrome Dev Tools"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "Microservices"],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      skills: ["PostgreSQL", "MongoDB", "SQL"],
    },
    {
      icon: Smartphone,
      title: "Tools in my Arsenal",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      skills: ["IDA Freeware", "Git", "Burpe Suite", "Vercel", "Linux", "Ghidra"],
    },
    {
      icon: Shield,
      title: "Other",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
      skills: ["Cybersecurity", "Computer Networks", "Operating Systems", "Reverse Engineering", "Web Exploitation"],
    },
  ]

  return (
    <section id="technical-skills" className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4">
          <span className="text-teal-400 font-mono text-3xl">&gt;</span> Technical Skills
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`group relative p-6 rounded-lg border border-slate-700 
                  bg-slate-800/50 backdrop-blur-sm transition-all duration-300 
                  hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 cursor-pointer
                  ${activeCategory === category.title ? category.bgColor : ""}`}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-slate-300 
                        rounded-full border border-slate-600 hover:border-teal-400/50 
                        hover:text-teal-400 transition-all duration-200"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
