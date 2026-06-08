import { Users, Code, Rocket, Palette, Coins, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

const communities = [
  { name: "BuildHyd", desc: "Indie hackers in Hyderabad", members: 4820, icon: Rocket, color: "bg-orange-100 text-orange-600", joined: true },
  { name: "StartupIndia", desc: "Founders, fundraising, hiring", members: 12300, icon: Users, color: "bg-blue-100 text-blue-600", joined: false },
  { name: "AI Builders", desc: "Shipping with LLMs", members: 6710, icon: Code, color: "bg-purple-100 text-purple-600", joined: true },
  { name: "DesignCircle", desc: "UI, brand, motion", members: 3540, icon: Palette, color: "bg-pink-100 text-pink-600", joined: false },
  { name: "FundedClub", desc: "Post-seed founders", members: 890, icon: Coins, color: "bg-emerald-100 text-emerald-600", joined: false },
  { name: "Frontend Friday", desc: "React, Vue, Svelte", members: 9200, icon: MonitorPlay, color: "bg-yellow-100 text-yellow-600", joined: false },
];

export function Explore() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Explore</h1>
        <p className="text-muted-foreground mt-1">Find your people. Follow what's trending.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <div key={community.name} className="group rounded-card border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${community.color}`}>
                <community.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{community.name}</h3>
                <p className="text-sm text-muted-foreground">{community.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground">{community.members.toLocaleString()} members</span>
              <Button variant={community.joined ? "secondary" : "default"} className={community.joined ? "rounded-full bg-muted" : "rounded-full"}>
                {community.joined ? "Joined" : "Join"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
