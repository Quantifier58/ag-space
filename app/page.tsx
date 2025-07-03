import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { SocialSidebar } from "@/components/social-sidebar"
import { EmailSidebar } from "@/components/email-sidebar"
// import { ParticleSystem } from "@/components/particle-system"
// import { Interests } from "@/components/interests"
import { LoadingScreen } from "@/components/loading-screen"
import { OtherProjects } from "@/components/other-projects"
import { TechnicalSkills } from "@/components/technical-skills"
import { Achievements } from "@/components/achievements"
import { BeyondWeb } from "@/components/beyond-web"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative">
      <LoadingScreen />
      {/* <ParticleSystem /> */}
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechnicalSkills />
        <Work />
        {/* <Interests /> */}
        <OtherProjects />
        <Achievements />
        <BeyondWeb />
        <Contact />
      </main>
    </div>
  )
}