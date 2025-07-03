export function EmailSidebar() {
  return (
    <div className="fixed right-8 bottom-0 z-50 hidden lg:flex flex-col items-center">
      <a
        href="https://mail.google.com/mail/?view=cm&to=anirudhgautam1615@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-200 font-mono text-m mb-6"
        style={{ 
          writingMode: "vertical-rl",
          textOrientation: "mixed"
        }}
      >
        anirudhgautam1615@gmail.com
      </a>
      <div className="w-px h-24 bg-slate-400"></div>
    </div>
  )
}