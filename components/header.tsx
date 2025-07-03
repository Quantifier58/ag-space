"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
// import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { number: "1", label: "About", href: "#about" },
    { number: "2", label: "Skills", href: "#technical-skills" },
    { number: "3", label: "Projects", href: "#work" },
    { number: "4", label: "Achievements", href: "#achievements" },
    { number: "5", label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 px-6 lg:px-12">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="w-12 h-12 border-2 border-teal-400 flex items-center justify-center transform hover:border-teal-300 transition-colors duration-300 rounded-full">
            <span className="text-teal-400 font-mono text-xl font-bold transform">AG</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link group relative text-m font-mono transition-colors duration-300"
            >
              {/* <span className="text-teal-400">{item.number}.</span>{" "} */}
              <span className="group-hover:text-teal-400 transition-colors duration-300">{item.label}</span>
              <span className="bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}
          {/* <ThemeToggle /> */}
              <Button
                variant="outline"
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400/10 font-mono bg-transparent 
                  hover-lift group relative overflow-hidden"
              >
                <a className="relative z-10" href="/AnirudhGautam_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 
                  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                />
              </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-400 hover:text-teal-300 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-slideDown">
          <nav className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link group relative text-sm font-mono transition-colors duration-300 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-teal-400">{item.number}.</span>{" "}
                <span className="group-hover:text-teal-400 transition-colors duration-300">{item.label}</span>
                {/* Mobile underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
              {/* <ThemeToggle /> */}
              <Button
                variant="outline"
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400/10 font-mono bg-transparent 
                  hover-lift group relative overflow-hidden"
              >
                <a className="relative z-10" href="/AnirudhGautam_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 
                  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
