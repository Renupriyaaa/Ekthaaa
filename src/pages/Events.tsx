import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const eventsList = [
  { title: "React India Meetup", host: "ReactBangalore", date: "Oct 12", time: "10:00 AM", location: "WeWork Galaxy, Bangalore", attendees: 124, tags: ["Frontend", "Networking"] },
  { title: "Hackblr Finals", host: "Hackblr", date: "Oct 15", time: "09:00 AM", location: "Koramangala Indoor Stadium", attendees: 500, tags: ["Hackathon", "In-person"] },
  { title: "Design Systems Workshop", host: "Priya V.", date: "Oct 18", time: "05:00 PM", location: "Online (Zoom)", attendees: 85, tags: ["Design", "Workshop"] },
  { title: "AI Builders Meetup", host: "GenAI India", date: "Oct 20", time: "06:30 PM", location: "Google Office, Hyderabad", attendees: 210, tags: ["AI", "LLMs"] },
];

export function Events() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Events & Meetups</h1>
        <p className="text-muted-foreground mt-1">8 events near you this month.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Workshops", "Hackathons", "Networking", "Online"].map((filter, i) => (
          <Button key={filter} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "rounded-full" : "rounded-full bg-white border-border"}>
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid gap-4">
        {eventsList.map((event) => (
          <div key={event.title} className="flex flex-col md:flex-row items-center gap-6 rounded-card border border-border bg-white p-4 shadow-sm hover:shadow-soft transition-all">
            <div className="flex flex-col items-center justify-center h-20 w-20 shrink-0 rounded-2xl bg-primary/10 text-primary">
              <span className="text-xs font-bold uppercase">{event.date.split(" ")[0]}</span>
              <span className="text-2xl font-black">{event.date.split(" ")[1]}</span>
            </div>
            
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm text-muted-foreground">Hosted by <span className="font-medium text-foreground">{event.host}</span></p>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {event.time}</div>
                <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.location}</div>
                <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {event.attendees} attending</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 w-full md:w-auto mt-4 md:mt-0 md:pl-6 md:border-l md:border-border">
              <div className="flex gap-2 w-full justify-center">
                {event.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-muted">{tag}</Badge>)}
              </div>
              <Button className="w-full rounded-full font-semibold bg-foreground text-background hover:bg-foreground/90">RSVP</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
