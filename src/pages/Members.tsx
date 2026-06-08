import { Search, Filter, Bookmark, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const members = [
  { name: "Rahul Sharma", role: "Startup Founder", company: "InnovaTech", match: 96, avatar: "RS", color: "bg-orange-500", lookingFor: ["Frontend Dev"], canHelpWith: ["Startup Guidance"], tags: ["React", "TS"] },
  { name: "Priya Verma", role: "UI/UX Designer", company: "PixelCraft", match: 92, avatar: "PV", color: "bg-pink-500", lookingFor: ["Frontend Dev"], canHelpWith: ["UI Design"], tags: ["Figma"] },
  { name: "Vikram K.", role: "iOS Developer", company: "AppWorks", match: 88, avatar: "VK", color: "bg-blue-500", lookingFor: ["UI Designer"], canHelpWith: ["Swift"], tags: ["iOS"] },
  { name: "Arjun Nair", role: "Full Stack Dev", company: "TechVerse", match: 85, avatar: "AN", color: "bg-emerald-500", lookingFor: ["Co-founder"], canHelpWith: ["Backend"], tags: ["Node"] },
  { name: "Neha Iyer", role: "Product Manager", company: "GrowthX", match: 81, avatar: "NI", color: "bg-purple-500", lookingFor: ["Engineers"], canHelpWith: ["Product"], tags: ["Agile"] },
  { name: "Ananya Sen", role: "Growth Marketer", company: "ScaleUp", match: 79, avatar: "AS", color: "bg-red-500", lookingFor: ["Designers"], canHelpWith: ["Marketing"], tags: ["SEO"] },
];

export function Members() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Members</h1>
        <p className="text-muted-foreground mt-1">12,840 builders matching by intent right now.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search members by name, role, or skills..." className="h-10 w-full rounded-xl border border-border bg-white pl-10 pr-4 text-sm outline-none focus:border-primary" />
        </div>
        <Button variant="outline" className="rounded-xl bg-white border-border gap-2">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Founders", "Students", "Developers", "Designers", "Investors", "Freelancers"].map((filter, i) => (
          <Button key={filter} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "rounded-full" : "rounded-full bg-white border-border"}>
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((person) => (
          <div key={person.name} className="flex flex-col justify-between rounded-card border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-all">
            <div className="flex items-start gap-4 mb-6">
              <Avatar className={`h-12 w-12 text-white ${person.color}`}>
                <AvatarFallback className="bg-transparent">{person.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-bold">{person.name}</h3>
                <p className="text-xs text-muted-foreground">{person.role} at {person.company}</p>
              </div>
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full border-2 border-green-500 bg-green-50 text-green-700">
                <span className="text-[10px] font-extrabold leading-none">{person.match}%</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm"><span className="font-semibold text-primary">Looking For:</span> {person.lookingFor.join(", ")}</div>
              <div className="text-sm"><span className="font-semibold text-pink-500">Can Help:</span> {person.canHelpWith.join(", ")}</div>
              <div className="flex gap-2 pt-2">
                {person.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button className="flex-1 rounded-btn bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                <Target className="mr-2 h-4 w-4" /> Connect
              </Button>
              <Button variant="outline" size="icon" className="shrink-0 rounded-btn border-border">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
