import { Coffee, Calendar, Clock, Flame, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function CoffeeChat() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Main Match Card */}
        <div className="flex-1 rounded-3xl bg-gradient-to-br from-primary via-primary-600 to-primary-700 p-8 text-white shadow-soft relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-md uppercase tracking-wider">
              This Week's Match
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">15 minutes.<br/>One conversation.<br/>Real connection.</h1>
              <p className="text-white/80 max-w-md mx-auto pt-4">Every Monday Nexus pairs you with one thoughtful person from your communities.</p>
            </div>

            <div className="flex items-center justify-center gap-4 py-6 w-full">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg text-foreground bg-white">
                <AvatarFallback className="text-2xl font-bold bg-transparent">RP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full bg-white/20 backdrop-blur-md shrink-0">
                <Coffee className="h-5 w-5" />
              </div>
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg bg-emerald-500 text-white">
                <AvatarFallback className="text-2xl font-bold bg-transparent">AN</AvatarFallback>
              </Avatar>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md border border-white/20">
              <h3 className="font-bold text-xl mb-1">Arjun Nair</h3>
              <p className="text-white/80 text-sm mb-4">Full Stack Developer · TechVerse</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium bg-white/20 py-2 rounded-lg mb-6">
                <CheckCircle2 className="h-4 w-4" /> 90% Match based on your skills
              </div>
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg rounded-full shadow-lg">
                <Calendar className="mr-2 h-5 w-5" /> Schedule Chat
              </Button>
            </div>
          </div>
          
          {/* Decorative Background */}
          <Coffee className="absolute -left-10 -bottom-10 h-64 w-64 text-white opacity-5" strokeWidth={1} />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Sidebar Stats */}
        <div className="w-full md:w-[320px] flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-4">
              <Flame className="h-8 w-8" />
            </div>
            <h4 className="text-3xl font-black">4 Weeks</h4>
            <p className="text-muted-foreground font-medium mt-1 uppercase text-sm tracking-wider">Current Streak</p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h4 className="text-3xl font-black">3 Days</h4>
            <p className="text-muted-foreground font-medium mt-1 uppercase text-sm tracking-wider">Until Next Match</p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex-1">
            <h4 className="font-bold mb-4">Past Coffee Chats</h4>
            <div className="space-y-4">
              {[
                { name: "Priya V.", date: "Last Week" },
                { name: "Rahul S.", date: "2 Weeks Ago" },
                { name: "Vikram K.", date: "3 Weeks Ago" }
              ].map((past) => (
                <div key={past.name} className="flex items-center justify-between pb-4 border-b border-border/50 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Coffee className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="font-semibold text-sm">{past.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{past.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
