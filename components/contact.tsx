"use client"

// import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Quantifier58", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anirudh-gautam-akg/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/gaut4m.anirudh", label: "Instagram" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=anirudhgautam1615@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 px-6 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-teal-400 font-mono text-base mb-5">Finally</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I&#39;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          Feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-slate-700 bg-slate-800/50 
                hover:border-teal-400/50 hover:bg-teal-400/10 transition-all duration-300 
                hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/20"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-slate-400 group-hover:text-teal-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* <Button
          variant="outline"
          size="lg"
          className="border-teal-400 text-teal-400 hover:bg-teal-400/10 font-mono bg-transparent
            relative overflow-hidden group"
          onClick={() => window.open("mailto:your.email@gmail.com", "_blank")}
        >
          <span className="relative z-10">Say Hello</span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 
            translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
          />
        </Button> */}
      </div>

      <footer className="mt-20 text-center">
        <p className="text-slate-400 text-sm">{'@'}Anirudh Gautam</p>
      </footer>
    </section>
  )
}
