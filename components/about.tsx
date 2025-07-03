import { CustomAvatar } from "@/components/custom-avatar"

export function About() {
  const technologies = ["JavaScript (ES6+)", "Data Structures & Algorithms", "Next.js", "React", "Reverse Engineering", "SQL"]

  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
          <span className="text-teal-400 font-mono text-3xl">&gt;</span> About Me
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-4 text-slate-400">
            <p>
              Hi, I&#39;m Anirudh Gautam — a final year B.Tech student with a strong foundation in data structures, <span className="text-teal-400">algorithms</span>, and <span className="text-teal-400">software development</span>. I&#39;m passionate about solving real-world problems through code and have consistently honed my skills through competitive programming and hands-on projects.
            </p>
            <p>
              Fluent in C++ and experienced with full-stack development tools, I enjoy building efficient, scalable applications. My academic journey and internships have given me exposure to diverse technologies — from backend systems to frontend frameworks like React.
            </p>
            <p>
              I thrive in collaborative environments, love learning new tech, and am always up for a challenge. Whether it&#39;s optimizing code performance or building clean UI, I aim to write code that&#39;s both effective and elegant.
            </p>
            <p>Here are a few technologies I&#39;ve been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-teal-400 mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <CustomAvatar />
          </div>
        </div>
      </div>
    </section>
  )
}