import { Github, Instagram, Linkedin } from 'lucide-react'

export function SocialSidebar() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Quantifier58", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/gaut4m.anirudh", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/anirudh-gautam-akg/", label: "LinkedIn" },
  ]

  return (
    <div className="fixed left-8 bottom-0 z-50 hidden lg:flex flex-col items-center">
      <div className="flex flex-col gap-6 mb-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-200"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="w-px h-50 bg-slate-400"></div>
    </div>
  )
}