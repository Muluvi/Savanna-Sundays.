
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
  Clock
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

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="text-brand-gold" size={20} />
        <div className="section-label mb-0">03B: Parallel Activation Roadmap</div>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl">
        {/* Scroll Container */}
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
                  {/* Sticky Role Label */}
                  <div className="col-span-2 sticky left-0 z-20 bg-[#1A1208]/90 backdrop-blur-sm -ml-8 pl-8 flex items-center gap-3 py-2 pr-4 transition-colors group-hover:bg-[#221A0A]">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", lane.color, lane.textColor)}>
                      {lane.icon}
                    </div>
                    <span className="font-headline text-sm text-brand-cream uppercase tracking-wider whitespace-nowrap">
                      {lane.role}
                    </span>
                  </div>

                  {/* Activity Track */}
                  <div className="col-span-10 relative h-16 pl-4 grid grid-cols-11 items-center">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-11 pointer-events-none opacity-5">
                      {[...Array(11)].map((_, i) => (
                        <div key={i} className="border-r border-white h-full" />
                      ))}
                    </div>

                    {/* Activity Bars */}
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

        {/* Scroll Hint (Mobile) */}
        <div className="md:hidden absolute bottom-4 right-4 bg-brand-gold/20 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/30">
          <span className="font-body text-[8px] text-brand-gold uppercase tracking-[2px] font-bold">Scroll to see full day →</span>
        </div>
      </div>
      
      <p className="font-body text-[10px] text-brand-text-muted italic text-center uppercase tracking-[2px] font-bold opacity-60">
        Timeline is approximate and scales based on venue logistics and guest inflow.
      </p>
    </div>
  );
};
