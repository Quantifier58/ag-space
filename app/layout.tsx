import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anirudh Gautam - Portfolio",
  description: "Full-stack developer and creative problem solver",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-300`}>
        {children}
      </body>
    </html>
  )
}