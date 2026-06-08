import { Target, Search, Sparkles, MapPin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const radarMatches = [
  { name: "Rahul Sharma", role: "Startup Founder at InnovaTech", match: 96, avatar: "RS", color: "bg-orange-500", reasons: ["Hiring frontend interns", "Same stack (React, TS)", "Bangalore"] },
  { name: "Priya Verma", role: "UI/UX Designer at PixelCraft", match: 92, avatar: "PV", color: "bg-pink-500", reasons: ["Looking for side projects", "In 'DesignCircle'", "Remote"] },
];

export function AIRadar() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-soft">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3 w-3" /> AI RADAR • LIVE
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            9 high-fit people are open to connect with you this week.
          </h1>
          <p className="text-white/80">
            Ranked using your profile, skills, location and communities.<br/>
            Tap <strong className="text-white">AI Intro</strong> to generate a personalized first message.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="space-y-4">
        {radarMatches.map((person) => (
          <div key={person.name} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-card border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-all">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
                <span className="text-sm font-extrabold leading-none">{person.match}%</span>
                <span className="text-[8px] font-bold uppercase leading-tight mt-0.5">Match</span>
              </div>
              <Avatar className={`h-12 w-12 text-white ${person.color} shrink-0`}>
                <AvatarFallback className="bg-transparent">{person.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">{person.name} <span className="font-normal text-muted-foreground text-sm ml-1 hidden sm:inline-block">· {person.role}</span></h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><Target className="h-3 w-3 text-primary" /> {person.reasons[0]}</div>
                  <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><Code2 className="h-3 w-3 text-emerald-500" /> {person.reasons[1]}</div>
                  <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><MapPin className="h-3 w-3 text-pink-500" /> {person.reasons[2]}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button className="flex-1 rounded-full bg-primary text-primary-foreground font-semibold shadow-sm hover:shadow-md transition-shadow">
                <Sparkles className="mr-2 h-4 w-4" /> AI Intro
              </Button>
              <Button variant="outline" className="flex-1 rounded-full border-primary/20 text-primary hover:bg-primary/5">
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
