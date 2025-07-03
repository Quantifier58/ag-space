"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Code Brackets */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-mono text-teal-400 animate-pulse">
              <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
                {"<"}
              </span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: "0.2s" }}>
                {"/"}
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
                {">"}
              </span>
            </div>
          </div>

          {/* Orbiting Dots */}
          {/* <div className="absolute inset-0 animate-spin">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2 -translate-x-1"></div>
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-y-1/2 translate-x-1"></div>
          </div> */}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-slate-400 font-mono text-sm">Loading Portfolio... {Math.round(progress)}%</p>
      </div>
    </div>
  )
}
