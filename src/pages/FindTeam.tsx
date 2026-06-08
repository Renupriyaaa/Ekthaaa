import { Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teams = [
  { name: "Pulse — AI Study Buddy", desc: "Building a voice-native LLM tutor for high school students.", category: "Startup", timeline: "3 months", roles: ["Frontend Developer", "Prompt Engineer"], lead: "Rahul S.", avatar: "RS" },
  { name: "Lumen Studio", desc: "Open source design system component library.", category: "Open Source", timeline: "Ongoing", roles: ["UI Designer", "React Expert"], lead: "Priya V.", avatar: "PV" },
  { name: "HackTrack", desc: "Platform to track hackathon submissions and teams.", category: "Hackathon", timeline: "This weekend", roles: ["Backend Dev"], lead: "Arjun N.", avatar: "AN" },
  { name: "BuildMate", desc: "College project to match students with dorm roommates based on habits.", category: "College Project", timeline: "1 month", roles: ["Full Stack Dev", "Data Science"], lead: "Neha I.", avatar: "NI" },
];

export function FindTeam() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Find My Team</h1>
          <p className="text-muted-foreground mt-1">Open roles in 84 active teams this week.</p>
        </div>
        <Button className="rounded-full font-semibold">Create Your Team</Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Hackathon", "Startup", "College Project", "Open Source"].map((filter, i) => (
          <Button key={filter} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "rounded-full" : "rounded-full bg-white border-border"}>
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teams.map((team) => (
          <div key={team.name} className="flex flex-col rounded-card border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">{team.category}</Badge>
                <h3 className="font-bold text-xl">{team.name}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 flex-1">{team.desc}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Clock className="h-4 w-4 text-muted-foreground" /> {team.timeline}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-muted-foreground block mb-2">Required Roles</span>
                <div className="flex flex-wrap gap-2">
                  {team.roles.map(role => (
                    <Badge key={role} variant="outline" className="border-pink-200 bg-pink-50 text-pink-700">{role}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary text-xs">{team.avatar}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Lead: {team.lead}</span>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full font-semibold">
                Join Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
