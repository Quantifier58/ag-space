import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 pl-6 lg:pl-16 pt-20">
      <div className="w-5xl max-w-7xl mx-auto">
        <p className="text-teal-400 font-mono text-base mb-5 ">Hi, my name is</p>
        <h1 className="text-4xl lg:text-7xl font-bold text-slate-200 mb-4">Anirudh Gautam.</h1>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-400 mb-6">I’m a software engineer -</h2>
        <p className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed">
          who enjoys building clean, high-performance web applications and solving complex problems. With a background in C++ and 
          <span className="text-teal-400"> full-stack development</span>
          , I also have a keen interest in 
          <span className="text-teal-400"> cybersecurity</span> 
          —ensuring that the systems I build are not just functional, but secure and resilient.{" "}
          {/* <span className="text-teal-400">Upstatement</span>. */}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-teal-400 text-teal-400 hover:bg-teal-400/10 font-mono bg-transparent 
            hover-lift group relative overflow-hidden"
        >
          <a className="relative z-10" href="/AnirudhGautam_Resume.pdf" target="_blank" rel="noopener noreferrer">Check out my Resume!</a>
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 
            translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
          />
        </Button>
      </div>
    </section>
  )
}