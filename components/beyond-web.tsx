"use client"

import { useState } from "react"
import { Code2, Shield, Trophy, Brain} from "lucide-react"

export function BeyondWeb() {
  const [activeInterest, setActiveInterest] = useState<number | null>(null)

const interests = [
   {
      icon: Code2,
      title: "Competitive Programming",
      description:
         "Solving algorithmic challenges on platforms such as Codeforces, CodeChef, and LeetCode.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
   },
   {
      icon: Shield,
      title: "Cybersecurity",
      description:
         "Representing IIT Indore in global CTF competitions, with a focus on reverse engineering and web exploitation.",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
   },
   {
      icon: Trophy,
      title: "Basketball",
      description:
         "Participated in the National Level Inter-IIT 2024, demonstrating teamwork and sportsmanship.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
   },
   {
      icon: Brain,
      title: "Machine Learning",
      description:
         "Experimenting with machine learning models and deep learning frameworks after completing my computational intelligence course.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
   },
]

  return (
    <section className="py-20 px-6 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4">
          <span className="text-teal-400 font-mono text-3xl">&gt;</span> Beyond Web
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          When I&#39;m not building for the web, you&#39;ll find me exploring these diverse interests that keep me motivated and
          well-rounded.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <div
                key={interest.title}
                className={`group relative p-6 rounded-lg border border-slate-700 
                  bg-slate-800/50 backdrop-blur-sm transition-all duration-300 
                  hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 cursor-pointer
                  hover:-translate-y-2 ${activeInterest === index ? interest.bgColor : ""}`}
                onMouseEnter={() => setActiveInterest(index)}
                onMouseLeave={() => setActiveInterest(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${interest.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${interest.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{interest.description}</p>
                  </div>
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
