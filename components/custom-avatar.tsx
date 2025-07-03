"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function CustomAvatar() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setMousePosition({
      x: (e.clientX - centerX) / 15,
      y: (e.clientY - centerY) / 15,
    })
  }

  return (
    <div className="relative w-80 h-80 mx-auto group" onMouseMove={handleMouseMove}>
      <svg
        viewBox="0 0 300 300"
        className={`w-full h-full transition-all duration-500 ${isAnimating ? "animate-pulse" : ""}`}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle */}
        <circle cx="150" cy="150" r="140" fill="url(#bgGradient)" className="drop-shadow-lg" />
        <circle
          cx="150"
          cy="150"
          r="135"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          className="group-hover:stroke-4 transition-all duration-300"
          filter="url(#glow)"
        />

        {/* Desk/Table */}
        <rect x="50" y="200" width="200" height="15" fill="#8b5cf6" rx="7" opacity="0.3" />
        <rect x="45" y="210" width="210" height="8" fill="#7c3aed" rx="4" opacity="0.2" />

        {/* Person's Body */}
        <ellipse cx="150" cy="180" rx="45" ry="35" fill="#1e40af" />

        {/* Arms */}
        <ellipse cx="120" cy="175" rx="12" ry="25" fill="#fbbf24" transform="rotate(-20 120 175)" />
        <ellipse cx="180" cy="175" rx="12" ry="25" fill="#fbbf24" transform="rotate(20 180 175)" />

        {/* Hands on keyboard */}
        <circle cx="115" cy="195" r="8" fill="#f59e0b" />
        <circle cx="185" cy="195" r="8" fill="#f59e0b" />

        {/* Head */}
        <circle cx="150" cy="130" r="25" fill="url(#skinGradient)" />

        {/* Hair */}
        <path
          d="M125 115 Q150 105 175 115 Q180 120 175 130 Q170 125 165 128 Q160 125 155 128 Q150 125 145 128 Q140 125 135 128 Q130 125 125 130 Q120 120 125 115"
          fill="#374151"
         //  className={isAnimating ? "animate-bounce" : ""}
        />

        {/* Eyes */}
        <circle cx="142" cy="125" r="2" fill="#1f2937" />
        <circle cx="158" cy="125" r="2" fill="#1f2937" />
        <circle cx="143" cy="124" r="0.8" fill="#ffffff" className={isAnimating ? "animate-ping" : ""} />
        <circle cx="159" cy="124" r="0.8" fill="#ffffff" className={isAnimating ? "animate-ping" : ""} />

        {/* Glasses */}
        <rect x="135" y="120" width="12" height="8" fill="none" stroke="#374151" strokeWidth="1.5" rx="2" />
        <rect x="153" y="120" width="12" height="8" fill="none" stroke="#374151" strokeWidth="1.5" rx="2" />
        <line x1="147" y1="124" x2="153" y2="124" stroke="#374151" strokeWidth="1.5" />

        {/* Nose */}
        <ellipse cx="150" cy="130" rx="1.5" ry="2" fill="#f59e0b" opacity="0.6" />

        {/* Mouth */}
        <path d="M146 135 Q150 138 154 135" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />

        {/* Laptop Base */}
        <rect x="100" y="190" width="100" height="15" fill="url(#laptopGradient)" rx="3" />

        {/* Laptop Screen */}
        <rect x="105" y="120" width="90" height="70" fill="url(#laptopGradient)" rx="5" />
        <rect x="110" y="125" width="80" height="60" fill="url(#screenGradient)" rx="3" />

        {/* Screen Content - Code Lines */}
        <g className={isAnimating ? "animate-pulse" : ""}>
          <rect x="115" y="130" width="25" height="2" fill="#2dd4bf" opacity="0.8" />
          <rect x="145" y="130" width="15" height="2" fill="#3b82f6" opacity="0.6" />
          <rect x="165" y="130" width="20" height="2" fill="#10b981" opacity="0.7" />

          <rect x="115" y="138" width="30" height="2" fill="#f59e0b" opacity="0.8" />
          <rect x="150" y="138" width="25" height="2" fill="#8b5cf6" opacity="0.7" />

          <rect x="115" y="146" width="20" height="2" fill="#ef4444" opacity="0.6" />
          <rect x="140" y="146" width="35" height="2" fill="#2dd4bf" opacity="0.8" />

          <rect x="115" y="154" width="40" height="2" fill="#3b82f6" opacity="0.7" />
          <rect x="160" y="154" width="15" height="2" fill="#10b981" opacity="0.6" />

          <rect x="115" y="162" width="25" height="2" fill="#f59e0b" opacity="0.8" />
          <rect x="145" y="162" width="30" height="2" fill="#8b5cf6" opacity="0.7" />

          <rect x="115" y="170" width="35" height="2" fill="#2dd4bf" opacity="0.8" />
        </g>

        {/* Keyboard */}
        <rect x="105" y="195" width="90" height="8" fill="#374151" rx="2" />
        <g>
          {/* Keyboard keys */}
          {Array.from({ length: 12 }, (_, i) => (
            <rect
              key={i}
              x={110 + i * 7}
              y="197"
              width="5"
              height="4"
              fill="#4b5563"
              rx="1"
              className={isAnimating && i % 3 === 0 ? "animate-pulse" : ""}
            />
          ))}
        </g>

        {/* Trackpad */}
        <rect x="135" y="205" width="30" height="20" fill="#4b5563" rx="3" opacity="0.7" />

        {/* Coffee Cup */}
        <ellipse cx="220" cy="190" rx="8" ry="6" fill="#8b4513" />
        <ellipse cx="220" cy="188" rx="7" ry="5" fill="#d2691e" />
        <path d="M228 188 Q235 188 235 195 Q235 200 228 200" fill="none" stroke="#8b4513" strokeWidth="2" />

        {/* Steam from coffee */}
        <g className="animate-pulse" opacity="0.6">
          <path d="M218 180 Q218 175 220 175 Q222 175 222 180" fill="none" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M222 180 Q222 175 224 175 Q226 175 226 180" fill="none" stroke="#cbd5e1" strokeWidth="1" />
        </g>

        {/* Floating Code Elements */}
        {/* <g className={isAnimating ? "animate-bounce" : ""}>
          <text x="60" y="80" fill="#2dd4bf" fontSize="12" fontFamily="monospace" opacity="0.8">
            {"{ }"}
          </text>
          <text x="220" y="100" fill="#3b82f6" fontSize="10" fontFamily="monospace" opacity="0.7">
            {"</>"}
          </text>
          <text x="50" y="250" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.6">
            {"()=>"}
          </text>
          <text x="230" y="260" fill="#f59e0b" fontSize="9" fontFamily="monospace" opacity="0.7">
            {"[]"}
          </text>
        </g> */}

        {/* Floating Particles */}
        {/* <g>
          <circle cx="80" cy="60" r="2" fill="#2dd4bf" opacity="0.6" className="animate-pulse" />
          <circle cx="240" cy="80" r="1.5" fill="#3b82f6" opacity="0.5" className="animate-pulse" />
          <circle cx="70" cy="270" r="1" fill="#10b981" opacity="0.4" className="animate-pulse" />
          <circle cx="250" cy="240" r="1.5" fill="#8b5cf6" opacity="0.6" className="animate-pulse" />
        </g> */}

        {/* Interactive Glow Effect */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="1"
          opacity="0"
          className="group-hover:opacity-30 transition-opacity duration-300"
        />
      </svg>
    </div>
  )
}
