import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversations = [
  { id: 1, name: "Rahul Sharma", role: "Startup Founder", lastMsg: "Let's catch up this weekend?", unread: 2, avatar: "RS", color: "bg-orange-500", online: true },
  { id: 2, name: "Priya Verma", role: "UI/UX Designer", lastMsg: "Loved the new design system!", unread: 0, avatar: "PV", color: "bg-pink-500", online: false },
  { id: 3, name: "Arjun Nair", role: "Full Stack Dev", lastMsg: "I can help with the backend architecture.", unread: 1, avatar: "AN", color: "bg-emerald-500", online: true },
];

export function Messages() {
  const [activeId, setActiveId] = useState(1);
  const activeChat = conversations.find(c => c.id === activeId);

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6">
      {/* Left Sidebar */}
      <div className="w-full max-w-[320px] flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm hidden md:flex">
        <div className="border-b border-border p-4">
          <h2 className="text-xl font-bold">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveId(chat.id)}
              className={`flex w-full items-center gap-3 border-b border-border/50 p-4 text-left transition-colors hover:bg-muted ${activeId === chat.id ? 'bg-muted' : ''}`}
            >
              <div className="relative shrink-0">
                <Avatar className={`h-12 w-12 text-white ${chat.color}`}>
                  <AvatarFallback className="bg-transparent">{chat.avatar}</AvatarFallback>
                </Avatar>
                {chat.online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold truncate">{chat.name}</h4>
                  {chat.unread > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p className={`truncate text-sm ${chat.unread > 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{chat.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {activeChat && (
        <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          {/* Chat Header */}
          <div className="flex items-center gap-4 border-b border-border p-4 bg-background/50 backdrop-blur-sm">
            <Avatar className={`h-10 w-10 text-white ${activeChat.color}`}>
              <AvatarFallback className="bg-transparent">{activeChat.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">{activeChat.name}</h3>
              <p className="text-xs text-muted-foreground">{activeChat.role}</p>
            </div>
          </div>

          {/* AI Banner */}
          <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-4 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">AI can draft a personalized intro using both profiles.</p>
            </div>
            <Button size="sm" className="rounded-full font-semibold">Generate</Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="flex justify-center">
              <span className="text-xs text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">Today</span>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-primary p-4 text-white shadow-sm">
                <p className="text-sm">Hey {activeChat.name.split(' ')[0]}! I saw we're both in the AI Builders community and you're looking for a frontend developer.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className={`h-8 w-8 shrink-0 text-white mt-auto ${activeChat.color}`}>
                <AvatarFallback className="bg-transparent text-xs">{activeChat.avatar}</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-muted p-4 text-foreground shadow-sm border border-border/50">
                <p className="text-sm">{activeChat.lastMsg}</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 rounded-full border border-border bg-muted/50 p-1.5 pl-4 focus-within:border-primary focus-within:bg-background transition-colors">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              <Button size="icon" className="h-10 w-10 shrink-0 rounded-full bg-primary text-white hover:bg-primary-600 transition-colors">
                <Send className="h-4 w-4 ml-0.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
