"use client"

import { Trophy, Code, Target, Award, ExternalLink } from "lucide-react"

export function Achievements() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "BBu65",
      stats: "250+ Problems Solved",
      rank: "Knight Rating: 1919",
      link: "https://leetcode.com/BBu65",
      icon: Code,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      platform: "Codeforces",
      username: "BBu95",
      stats: "Max Rating: 1481",
      rank: "Specialist Rating",
      link: "https://codeforces.com/profile/BBu95",
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      platform: "Codechef",
      username: "quant_mani",
      stats: "Max Rating: 1573",
      rank: "2-Star Rating",
      link: "https://www.codechef.com/users/quant_mani",
      icon: Code,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      platform: "CTFTime.org",
      username: "ByteBandits",
      stats: "15th Place (current season)",
      rank: "IIT Indore",
      link: "https://ctftime.org/team/13691",
      icon: Award,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
  ]

  const achievements = [
    {
      title: "Competitive Programming",
      items: [
        "Global Rank 31 in Codechef Starters 191",
        "Rank 50 in CodeClas'25 by LetsCode",
        "Rank 205 in CodeSprint'25 by LetsCode",
      ],
    },
    {
      title: "Hackathons & Contests",
      items: [
        "AIR 10, CSAW ’24, NYU Tandon",
        "Ranks 37(Sunshine CTF) & 62(Vishwa CTF)",
        "Rank 29 in BrocoCTF'25",
      ],
    },
   //  {
   //    title: "Certifications",
   //    items: [
   //      "AWS Certified Developer Associate",
   //      "Google Cloud Professional Developer",
   //      "Meta Frontend Developer Certificate",
   //    ],
   //  },
  ]

  return (
    <section id="achievements" className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4">
          <span className="text-teal-400 font-mono text-3xl">&gt;</span> Achievements & Profiles
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          My competitive programming journey and professional achievements across various platforms.
        </p>

        {/* Coding Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-lg border border-slate-700 
                  bg-slate-800/50 backdrop-blur-sm transition-all duration-300 
                  hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 
                  hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${profile.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${profile.color}`} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
                  {profile.platform}
                </h3>
                <p className="text-sm text-slate-400 mb-1">@{profile.username}</p>
                <p className="text-sm font-mono text-teal-400 mb-1">{profile.stats}</p>
                <p className="text-xs text-slate-500">{profile.rank}</p>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-lg border border-slate-700 bg-slate-800/50 
                hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="text-sm text-slate-400 flex items-start gap-2"
                    style={{ animationDelay: `${index * 0.2 + itemIndex * 0.1}s` }}
                  >
                    <span className="text-teal-400 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
