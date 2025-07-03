"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || "dark"
    setTheme(initialTheme)
    
    // Apply theme to document
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#0f172a"
      document.body.style.color = "#cbd5e1"
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#0f172a"
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    
    // Apply theme changes
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#0f172a"
      document.body.style.color = "#cbd5e1"
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#0f172a"
    }
  }

  if (!mounted) return null

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme} 
      className="relative overflow-hidden group hover:bg-slate-800 hover:text-teal-400"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}