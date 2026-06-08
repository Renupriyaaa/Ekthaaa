import { toast } from "sonner";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[80px] w-full items-center justify-between border-b border-border/40 bg-background/80 px-6 backdrop-blur-md">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search members, skills, communities..."
            className="h-11 w-full rounded-full border border-border bg-muted/50 pl-10 pr-14 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm">
            ⌘ K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 pl-4">
        <button onClick={() => toast("Notifications feature coming soon!")} className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent text-foreground/70">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-pink-500 border-2 border-background"></span>
        </button>
        
        <Avatar className="h-10 w-10 border border-border cursor-pointer transition-transform hover:scale-105">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
          <AvatarFallback>RP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
