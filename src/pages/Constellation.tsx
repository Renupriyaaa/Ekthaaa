import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Info, Users, Zap, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulated network data
const nodes = [
  { id: "RS", name: "Rahul Sharma", role: "Startup Founder", x: 60, y: 30, color: "bg-orange-500" },
  { id: "PV", name: "Priya Verma", role: "UI/UX Designer", x: 80, y: 60, color: "bg-pink-500" },
  { id: "VK", name: "Vikram K.", role: "iOS Developer", x: 30, y: 40, color: "bg-blue-500" },
  { id: "AN", name: "Arjun Nair", role: "Full Stack Dev", x: 70, y: 80, color: "bg-emerald-500" },
  { id: "KR", name: "Kabir Rao", role: "ML Engineer", x: 20, y: 70, color: "bg-green-500" },
  { id: "NI", name: "Neha Iyer", role: "Product Manager", x: 45, y: 85, color: "bg-purple-500" },
  { id: "AS", name: "Ananya Sen", role: "Growth Marketer", x: 10, y: 20, color: "bg-red-500" },
];

const links = [
  { source: "RS", target: "PV" },
  { source: "PV", target: "AN" },
  { source: "VK", target: "RS" },
  { source: "KR", target: "NI" },
  { source: "AS", target: "VK" },
];

export function Constellation() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-2">
            <Sparkles className="mr-1 h-3 w-3" /> LIVE CONSTELLATION • BETA
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight">Drag two stars together — watch them spark.</h1>
          <p className="text-muted-foreground mt-1">A living map of your community.</p>
        </div>
        
        <div className="flex gap-6 rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div className="flex flex-col items-center">
            <span className="flex items-center text-xl font-bold text-foreground">
              <Users className="mr-2 h-5 w-5 text-blue-500" /> 8
            </span>
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">People</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="flex items-center text-xl font-bold text-foreground">
              <LinkIcon className="mr-2 h-5 w-5 text-emerald-500" /> 4
            </span>
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">Live Links</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="flex items-center text-xl font-bold text-foreground">
              <Zap className="mr-2 h-5 w-5 text-orange-500" /> 12
            </span>
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">Sparks Today</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Graph Area */}
        <div className="relative flex-1 rounded-3xl border border-border bg-white overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
          
          <div className="absolute left-6 top-6 rounded-lg bg-background/80 p-3 backdrop-blur-sm border border-border text-sm flex items-center gap-2 shadow-sm z-10">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Drag any node onto another to spark a match</span>
          </div>

          {/* Render Links (simplified SVG simulation) */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-30" style={{ zIndex: 0 }}>
             {links.map((link, i) => {
               const source = nodes.find(n => n.id === link.source);
               const target = nodes.find(n => n.id === link.target);
               if(!source || !target) return null;
               return (
                 <motion.line
                   key={i}
                   x1={`${source.x}%`}
                   y1={`${source.y}%`}
                   x2={`${target.x}%`}
                   y2={`${target.y}%`}
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeDasharray="4 4"
                   className="text-primary"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5, delay: i * 0.2 }}
                 />
               )
             })}
          </svg>

          {/* Render Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              drag
              dragMomentum={false}
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              whileDrag={{ scale: 1.2, zIndex: 30, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              onHoverStart={() => setActiveNode(node.id)}
              onHoverEnd={() => setActiveNode(null)}
              className="absolute cursor-grab active:cursor-grabbing flex flex-col items-center gap-2"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-md ${node.color} text-white transition-shadow duration-300`}>
                <span className="text-xl font-bold">{node.id}</span>
              </div>
              
              {activeNode === node.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-20 flex flex-col items-center rounded-xl bg-foreground px-4 py-2 text-background shadow-xl min-w-[120px]"
                >
                  <span className="font-bold whitespace-nowrap">{node.name}</span>
                  <span className="text-xs text-background/70 whitespace-nowrap">{node.role}</span>
                  <div className="mt-1 flex items-center text-xs font-bold text-green-400">
                    95% Match
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-[320px] flex-col gap-6 hidden xl:flex">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-muted-foreground">How it works</h3>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">1</span>
                Each star is a person — their orbit shows energy.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">2</span>
                Dotted lines hint at hidden Looking ↔ Can-Help overlap.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">3</span>
                Drag one star onto another to ignite a Spark Card.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-600 p-6 text-white shadow-soft">
            <div className="flex items-center gap-2 mb-2 text-white/80">
              <Heart className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Today's Strongest Pair</span>
            </div>
            <h4 className="text-lg font-bold">Renupriya × Priya Verma</h4>
            <p className="text-sm text-white/80 mt-1">Frontend Dev ↔ UI/UX Designer</p>
            <Button className="mt-4 w-full bg-white text-primary hover:bg-white/90">View the spark</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
