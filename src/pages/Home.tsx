import { motion } from "framer-motion";
import { ArrowUpRight, Search, Heart, Bookmark, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recommendations = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    company: "InnovaTech",
    match: 96,
    avatar: "RS",
    color: "bg-orange-500",
    lookingFor: ["Frontend Dev", "UX Designer"],
    canHelpWith: ["Startup Guidance", "Fundraising"],
    tags: ["YC W24", "Seed", "B2B SaaS"],
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    company: "PixelCraft",
    match: 92,
    avatar: "PV",
    color: "bg-pink-500",
    lookingFor: ["Frontend Dev", "Side Projects"],
    canHelpWith: ["UI Design", "Design Systems"],
    tags: ["Figma", "Framer", "Motion"],
  },
  {
    name: "Arjun Nair",
    role: "Full Stack Developer",
    company: "TechVerse",
    match: 90,
    avatar: "AN",
    color: "bg-emerald-500",
    lookingFor: ["Co-founder", "Hackathon Team"],
    canHelpWith: ["Backend Architecture", "React"],
    tags: ["Node.js", "AWS", "MongoDB"],
  },
];

export function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-600 to-primary-700 p-8 text-white md:p-12"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-3 py-1 text-xs font-semibold backdrop-blur-md border-none">
              <Target className="mr-2 h-3 w-3" /> INTENT-BASED NETWORKING
            </Badge>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Connect with the <br /> right people.
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              Every member tells you what they're <span className="font-bold text-white">looking for</span> and what they <span className="font-bold text-white">can help with</span>. We do the matching.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="rounded-btn bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold">
                Explore Members <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-btn border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md">
                Find Opportunities
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-primary-600 ${['bg-pink-500', 'bg-emerald-500', 'bg-orange-500', 'bg-blue-500'][i-1]}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-white/80">12,840 members matching today</span>
            </div>
          </div>
          
          <div className="relative hidden lg:block h-[300px] w-[400px]">
            {/* Abstract Illustration Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute left-10 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 text-foreground shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Looking for</p>
                <p className="font-bold">Frontend Dev</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 flex items-center gap-3 rounded-2xl bg-white p-4 text-foreground shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Can help</p>
                <p className="font-bold">UI Design</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
      </motion.section>

      {/* Filters */}
      <section>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Founders", "Students", "Developers", "Designers", "Investors"].map((filter, i) => (
            <Button key={filter} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "rounded-full" : "rounded-full bg-white border-border"}>
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">People you should meet</h2>
          <p className="text-muted-foreground">Ranked by your <span className="font-medium text-primary">Looking For</span> ↔ <span className="font-medium text-pink-500">Can Help</span> matches</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col justify-between rounded-card border border-border bg-white p-6 shadow-sm transition-all hover:shadow-soft"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className={`h-14 w-14 border-2 border-white shadow-sm ${person.color} text-white`}>
                      <AvatarFallback className="bg-transparent text-lg font-bold">{person.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role} at {person.company}</p>
                    </div>
                  </div>
                  
                  {/* Circular Match Indicator */}
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 border-green-500 bg-green-50 text-green-700">
                    <span className="text-[10px] font-bold uppercase leading-none mt-1">Match</span>
                    <span className="text-sm font-extrabold leading-tight">{person.match}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-muted-foreground">
                      <Search className="h-3.5 w-3.5 text-primary" /> Looking For
                    </div>
                    <ul className="space-y-1">
                      {person.lookingFor.map(item => (
                        <li key={item} className="text-foreground/80 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-muted-foreground">
                      <Heart className="h-3.5 w-3.5 text-pink-500" /> Can Help With
                    </div>
                    <ul className="space-y-1">
                      {person.canHelpWith.map(item => (
                        <li key={item} className="text-foreground/80 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-pink-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {person.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Button className="flex-1 rounded-btn bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                  <Target className="mr-2 h-4 w-4" /> Connect
                </Button>
                <Button variant="outline" size="icon" className="shrink-0 rounded-btn border-border text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
