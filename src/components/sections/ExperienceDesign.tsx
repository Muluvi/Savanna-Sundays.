
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Music, 
  Users, 
  Camera,
  Scissors,
  Upload,
  Video,
  Share2,
  CalendarDays
} from 'lucide-react';

const productionDays = [
  { day: "Sun", title: "Shoot", body: "Capture at squad venue.", icon: <Camera size={14} />, highlight: false },
  { day: "Mon", title: "Review", body: "Raw review. Reel edit starts.", icon: <Scissors size={14} />, highlight: false },
  { day: "Tue", title: "Hero", body: "Reel 1 published (Recap).", icon: <Upload size={14} />, highlight: true },
  { day: "Wed", title: "Music", body: "Reel 2 (DJ Highlight).", icon: <Music size={14} />, highlight: true },
  { day: "Thu", title: "Style", body: "Reel 3 (Crowd/Lifestyle).", icon: <Video size={14} />, highlight: true },
  { day: "Fri", title: "Vibe", body: "Reel 4 (Influencers).", icon: <Users size={14} />, highlight: true },
  { day: "Sat", title: "Loop", body: "UGC Roundup & Teaser.", icon: <Share2 size={14} />, highlight: true },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-8">
      {/* 03B: The Week After Sunday (Formerly 03C) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03B: The Weekly Publishing Rhythm</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-3 min-w-[900px] pb-4">
            {productionDays.map((p, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 p-5 rounded-[24px] flex flex-col gap-3 border transition-all duration-500",
                  p.highlight 
                    ? "bg-brand-gold/10 border-brand-gold/30" 
                    : "bg-white/5 border-white/5 opacity-40"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-headline text-base uppercase tracking-wider",
                    p.highlight ? "text-brand-gold" : "text-brand-cream/40"
                  )}>
                    {p.day}
                  </span>
                  <div className={cn(
                    "p-1.5 rounded-lg",
                    p.highlight ? "bg-brand-gold text-brand-green" : "bg-white/5 text-brand-gold/40"
                  )}>
                    {p.icon}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h5 className={cn(
                    "font-headline text-lg uppercase leading-none",
                    p.highlight ? "text-brand-gold" : "text-brand-cream"
                  )}>
                    {p.title}
                  </h5>
                  <p className="font-body text-[9px] text-brand-gold/60 leading-tight font-bold uppercase tracking-wider">
                    {p.body}
                  </p>
                </div>
                
                {p.highlight && (
                  <div className="mt-auto pt-2 border-t border-brand-gold/10">
                    <span className="font-body text-[7px] text-brand-gold font-bold uppercase tracking-[2px]">LIVE</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center border-t border-white/5 pt-6">
        <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[3px] font-bold">
          One Sunday of production feeds a full week of digital dominance.
        </p>
      </div>
    </div>
  );
};
