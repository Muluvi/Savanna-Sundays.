"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  HardHat, 
  Music, 
  Mic2, 
  Users, 
  Camera,
  Clock,
  Scissors,
  Upload,
  Video,
  Share2,
  CalendarDays
} from 'lucide-react';

const timeMarkers = [
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM"
];

const swimLanes = [
  {
    role: "Setup Crew",
    icon: <HardHat size={14} />,
    color: "bg-brand-gold",
    textColor: "text-brand-green",
    activities: [
      { start: 0, duration: 2, label: "Branding Install", body: "Bar wraps, signage, backdrop, DJ booth wrap, QR points, table dressing." }
    ]
  },
  {
    role: "DJ 1 (Warm-up)",
    icon: <Music size={14} />,
    color: "bg-brand-gold",
    textColor: "text-brand-green",
    activities: [
      { start: 2, duration: 3.5, label: "Warm-Up Set", body: "Doors open. Chilled Afro grooves. Multi-cam recording starts." }
    ]
  },
  {
    role: "DJ 2 (Peak)",
    icon: <Music size={14} />,
    color: "bg-brand-gold",
    textColor: "text-brand-green",
    activities: [
      { start: 5.5, duration: 3.5, label: "Peak Energy Set", body: "Amapiano, Afro house, crowd peaks. Primary content window." }
    ]
  },
  {
    role: "MC",
    icon: <Mic2 size={14} />,
    color: "bg-brand-green",
    textColor: "text-brand-gold",
    activities: [
      { start: 2, duration: 7, label: "Live Host", body: "Crowd engagement, brand shout-outs, competition announcements." }
    ]
  },
  {
    role: "Influencers",
    icon: <Users size={14} />,
    color: "bg-brand-cream",
    textColor: "text-brand-green",
    activities: [
      { start: 2.5, duration: 6.5, label: "Social Broadcast", body: "Golden hour stories, peak time Reels, engagement till wind-down." }
    ]
  },
  {
    role: "Content Crew",
    icon: <Camera size={14} />,
    color: "bg-brand-accent-warm",
    textColor: "text-white",
    activities: [
      { start: 1, duration: 9, label: "Content Harvest", body: "Multi-cam capture, lifestyle photography, real-time social posting." }
    ]
  }
];

const productionDays = [
  { day: "Sunday", title: "Shoot Day", body: "All content captured at squad venue.", icon: <Camera size={18} />, highlight: false },
  { day: "Monday", title: "Review & Prep", body: "Raw footage review. Reel editing begins. Photos culled and grading starts.", icon: <Scissors size={18} />, highlight: false },
  { day: "Tuesday", title: "Recap Launch", body: "Reel 1 published (hero recap). Photo batch 1 delivered.", icon: <Upload size={18} />, highlight: true },
  { day: "Wednesday", title: "The Music", body: "Reel 2 published (DJ moment clip). Photo batch 2 delivered.", icon: <Music size={18} />, highlight: true },
  { day: "Thursday", title: "The Lifestyle", body: "Reel 3 published (crowd/lifestyle). DJ set enters final edit.", icon: <Video size={18} />, highlight: true },
  { day: "Friday", title: "The Influencers", body: "Reel 4 published (influencer highlight). DJ set uploaded to YouTube.", icon: <Users size={18} />, highlight: true },
  { day: "Saturday", title: "The Community", body: "UGC roundup posted. Preview teaser for next Sunday.", icon: <Share2 size={18} />, highlight: true },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-16">
      {/* Activation Roadmap */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03B: Parallel Activation Roadmap</div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[1000px] p-8 pb-12">
              {/* Time Header */}
              <div className="grid grid-cols-12 mb-8 border-b border-white/10 pb-4">
                <div className="col-span-2 sticky left-0 z-30 bg-[#1A1208]/80 backdrop-blur-md -ml-8 pl-8">
                  <span className="font-headline text-xs tracking-widest text-brand-gold/40 uppercase">Role / Workstream</span>
                </div>
                <div className="col-span-10 grid grid-cols-11 pl-4">
                  {timeMarkers.map((time, i) => (
                    <div key={i} className="text-center">
                      <span className="font-headline text-xs text-brand-gold/60">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Swim Lanes */}
              <div className="space-y-6">
                {swimLanes.map((lane, laneIdx) => (
                  <div key={laneIdx} className="grid grid-cols-12 items-center group">
                    <div className="col-span-2 sticky left-0 z-20 bg-[#1A1208]/90 backdrop-blur-sm -ml-8 pl-8 flex items-center gap-3 py-2 pr-4 transition-colors group-hover:bg-[#221A0A]">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", lane.color, lane.textColor)}>
                        {lane.icon}
                      </div>
                      <span className="font-headline text-sm text-brand-cream uppercase tracking-wider whitespace-nowrap">
                        {lane.role}
                      </span>
                    </div>

                    <div className="col-span-10 relative h-16 pl-4 grid grid-cols-11 items-center">
                      <div className="absolute inset-0 grid grid-cols-11 pointer-events-none opacity-5">
                        {[...Array(11)].map((_, i) => (
                          <div key={i} className="border-r border-white h-full" />
                        ))}
                      </div>

                      {lane.activities.map((activity, actIdx) => (
                        <div
                          key={actIdx}
                          className={cn(
                            "absolute h-12 rounded-xl p-3 flex flex-col justify-center transition-all duration-700 hover:h-14 hover:z-10 shadow-lg cursor-default border-t border-white/10",
                            lane.color,
                            lane.textColor
                          )}
                          style={{
                            left: `${(activity.start / 11) * 100}%`,
                            width: `${(activity.duration / 11) * 100}%`,
                            marginLeft: '1rem'
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="font-headline text-[11px] leading-tight uppercase tracking-tight">
                              {activity.label}
                            </span>
                            <span className="font-body text-[8px] leading-tight opacity-70 line-clamp-1 font-bold uppercase">
                              {activity.body}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-4 right-4 bg-brand-gold/20 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/30">
            <span className="font-body text-[8px] text-brand-gold uppercase tracking-[2px] font-bold">Scroll to see full day →</span>
          </div>
        </div>
      </div>

      {/* Post-Event Content Production Cycle */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03C: The Week After Sunday</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-[1100px] pb-6">
            {productionDays.map((p, i) => (
              <Card 
                key={i} 
                className={cn(
                  "flex-1 p-6 rounded-2xl flex flex-col gap-4 border transition-all duration-300 group hover:-translate-y-1",
                  p.highlight 
                    ? "bg-brand-gold/10 border-brand-gold/30" 
                    : "bg-white/5 border-white/10"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-headline text-lg uppercase tracking-wider",
                    p.highlight ? "text-brand-gold" : "text-brand-cream/40"
                  )}>
                    {p.day}
                  </span>
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    p.highlight ? "bg-brand-gold text-brand-green" : "bg-white/5 text-brand-gold/40"
                  )}>
                    {p.icon}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className={cn(
                    "font-headline text-xl uppercase leading-none",
                    p.highlight ? "text-brand-gold" : "text-brand-cream"
                  )}>
                    {p.title}
                  </h5>
                  <p className="font-body text-[11px] text-brand-text-muted leading-relaxed font-semibold uppercase tracking-wider">
                    {p.body}
                  </p>
                </div>
                
                {p.highlight && (
                  <div className="mt-auto pt-2 border-t border-brand-gold/20">
                    <span className="font-body text-[8px] text-brand-gold font-bold uppercase tracking-[2px]">Content Published</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
        
        <div className="p-8 bg-white/5 border border-white/5 rounded-[32px] text-center">
          <p className="font-serif italic text-lg text-brand-cream/80 leading-relaxed max-w-2xl mx-auto">
            "We don't just host an event; we harvest a narrative. Every Sunday provides the fuel for a full week of digital dominance."
          </p>
        </div>
      </div>
      
      <p className="font-body text-[10px] text-brand-text-muted italic text-center uppercase tracking-[2px] font-bold opacity-60">
        Execution scales based on venue logistics and guest volume.
      </p>
    </div>
  );
};
