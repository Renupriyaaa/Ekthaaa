import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Info, Users, Zap, Link as LinkIcon, Heart, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulated network data
const nodes = [
  { id: "RS", name: "Rahul Sharma", role: "Startup Founder", x: 60, y: 30, color: "bg-orange-500", lookingFor: "Frontend Dev" },
  { id: "PV", name: "Priya Verma", role: "UI/UX Designer", x: 80, y: 60, color: "bg-pink-500", lookingFor: "Side Projects" },
  { id: "VK", name: "Vikram K.", role: "iOS Developer", x: 30, y: 40, color: "bg-blue-500", lookingFor: "Designers" },
  { id: "AN", name: "Arjun Nair", role: "Full Stack Dev", x: 70, y: 80, color: "bg-emerald-500", lookingFor: "Co-founder" },
  { id: "KR", name: "Kabir Rao", role: "ML Engineer", x: 20, y: 70, color: "bg-green-500", lookingFor: "Data" },
  { id: "NI", name: "Neha Iyer", role: "Product Manager", x: 45, y: 85, color: "bg-purple-500", lookingFor: "Engineers" },
  { id: "AS", name: "Ananya Sen", role: "Growth Marketer", x: 10, y: 20, color: "bg-red-500", lookingFor: "Startups" },
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
  const [sparkedPair, setSparkedPair] = useState<[string, string] | null>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleDragEnd = (draggedId: string) => {
    const draggedNode = nodeRefs.current[draggedId];
    if (!draggedNode) return;
    
    const rect1 = draggedNode.getBoundingClientRect();
    const center1 = { x: rect1.left + rect1.width / 2, y: rect1.top + rect1.height / 2 };

    for (const node of nodes) {
      if (node.id === draggedId) continue;
      const targetNode = nodeRefs.current[node.id];
      if (!targetNode) continue;
      
      const rect2 = targetNode.getBoundingClientRect();
      const center2 = { x: rect2.left + rect2.width / 2, y: rect2.top + rect2.height / 2 };
      
      const dist = Math.sqrt(Math.pow(center1.x - center2.x, 2) + Math.pow(center1.y - center2.y, 2));
      
      // If within 80px distance, trigger spark!
      if (dist < 80) {
        setSparkedPair([draggedId, node.id]);
        return;
      }
    }
  };

  const getSparkedNodes = () => {
    if (!sparkedPair) return null;
    return [
      nodes.find(n => n.id === sparkedPair[0]),
      nodes.find(n => n.id === sparkedPair[1])
    ];
  };

  const sparkNodes = getSparkedNodes();

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-140px)] relative">
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
              <Users className="mr-2 h-5 w-5 text-blue-500" /> 7
            </span>
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">People</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="flex items-center text-xl font-bold text-foreground">
              <LinkIcon className="mr-2 h-5 w-5 text-emerald-500" /> 5
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

      <div className="flex flex-1 gap-6 overflow-hidden relative">
        {/* Graph Area */}
        <div className="relative flex-1 rounded-3xl border border-border bg-white overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
          
          <div className="absolute left-6 top-6 rounded-lg bg-background/80 p-3 backdrop-blur-sm border border-border text-sm flex items-center gap-2 shadow-sm z-10 pointer-events-none">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Drag any node onto another to spark a match</span>
          </div>

          {/* Render Links */}
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
              onDragEnd={() => handleDragEnd(node.id)}
              key={node.id}
              ref={(el) => {
                if (el) nodeRefs.current[node.id] = el as HTMLDivElement;
              }}
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
              <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-md ${node.color} text-white transition-shadow duration-300 pointer-events-none`}>
                <span className="text-xl font-bold">{node.id}</span>
              </div>
              
              {activeNode === node.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-20 flex flex-col items-center rounded-xl bg-foreground px-4 py-2 text-background shadow-xl min-w-[120px] pointer-events-none"
                >
                  <span className="font-bold whitespace-nowrap">{node.name}</span>
                  <span className="text-xs text-background/70 whitespace-nowrap">{node.role}</span>
                  <div className="mt-1 flex items-center text-xs font-bold text-green-400">
                    Looking for: {node.lookingFor}
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

      {/* Spark Overlay Modal */}
      <AnimatePresence>
        {sparkedPair && sparkNodes && sparkNodes[0] && sparkNodes[1] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-border"
            >
              <button 
                onClick={() => setSparkedPair(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted z-10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="bg-gradient-to-br from-primary/10 via-pink-500/10 to-orange-500/10 p-8 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
                
                <Badge className="bg-primary text-white shadow-md mb-6 relative z-10"><Zap className="h-3 w-3 mr-1" /> 98% MATCH SPARKED</Badge>
                
                <div className="flex items-center justify-center gap-4 relative z-10">
                  <div className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white shadow-lg ${sparkNodes[0].color} text-white`}>
                    <span className="text-3xl font-black">{sparkNodes[0].id}</span>
                  </div>
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-border text-muted-foreground z-10 -mx-6">
                    <LinkIcon className="h-5 w-5" />
                  </div>

                  <div className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white shadow-lg ${sparkNodes[1].color} text-white`}>
                    <span className="text-3xl font-black">{sparkNodes[1].id}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex flex-col gap-4 text-center">
                  <div>
                    <h3 className="font-bold text-xl">{sparkNodes[0].name}</h3>
                    <p className="text-muted-foreground text-sm">{sparkNodes[0].role}</p>
                    <p className="text-sm font-medium mt-1">Looking for: <span className="text-primary">{sparkNodes[0].lookingFor}</span></p>
                  </div>
                  <div className="h-px w-16 bg-border mx-auto" />
                  <div>
                    <h3 className="font-bold text-xl">{sparkNodes[1].name}</h3>
                    <p className="text-muted-foreground text-sm">{sparkNodes[1].role}</p>
                    <p className="text-sm font-medium mt-1">Looking for: <span className="text-primary">{sparkNodes[1].lookingFor}</span></p>
                  </div>
                </div>

                <Button className="w-full h-12 rounded-full font-bold text-lg bg-primary hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" /> Start Conversation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
