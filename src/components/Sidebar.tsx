import { NavLink } from "react-router-dom";
import { Sparkles, Home, Network, Users, Compass, UserPlus, Calendar, Target, MessageSquare, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const discoverLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Constellation", path: "/constellation", icon: Network, badge: "NEW" },
  { name: "Members", path: "/members", icon: Users },
  { name: "Explore", path: "/explore", icon: Compass },
  { name: "Find My Team", path: "/find-team", icon: UserPlus },
  { name: "Events", path: "/events", icon: Calendar },
];

const connectLinks = [
  { name: "AI Radar", path: "/ai-radar", icon: Target, badge: "NEW" },
  { name: "Messages", path: "/messages", icon: MessageSquare, badge: "3" },
  { name: "Coffee Chat", path: "/coffee-chat", icon: Coffee, badge: "NEW" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[280px] -translate-x-full border-r border-border bg-background transition-transform md:translate-x-0 flex flex-col">
      <div className="flex h-[80px] items-center gap-3 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight">Nexus</h1>
          <p className="text-xs text-muted-foreground">match • connect • build</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-6">
          <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground">DISCOVER</p>
          <div className="space-y-1">
            {discoverLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary" : "text-foreground/70"
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </div>
                {link.badge && (
                  <span className={cn(
                    "rounded-md px-1.5 py-0.5 text-[10px] font-bold",
                    link.badge === "NEW" ? "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" : "bg-primary/10 text-primary"
                  )}>
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground">CONNECT</p>
          <div className="space-y-1">
            {connectLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary" : "text-foreground/70"
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </div>
                {link.badge && (
                  <span className={cn(
                    "rounded-md px-1.5 py-0.5 text-[10px] font-bold",
                    link.badge === "NEW" ? "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" : "bg-primary text-primary-foreground"
                  )}>
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-sm">
            <span className="font-semibold">Renupriya</span>
            <span className="text-xs text-muted-foreground">Frontend Dev</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
