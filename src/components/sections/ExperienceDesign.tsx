
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
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
    <div className="space-y-12">
      {/* Post-Event Content Production Cycle */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03B: The Week After Sunday</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-[1100px] pb-6">
            {productionDays.map((p, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 p-6 rounded-3xl flex flex-col gap-4 border transition-all duration-500 hover:-translate-y-1",
                  p.highlight 
                    ? "bg-brand-gold/10 border-brand-gold/30" 
                    : "bg-white/5 border-white/5 opacity-60"
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
                  <p className="font-body text-[11px] text-brand-text-muted leading-relaxed font-bold uppercase tracking-wider">
                    {p.body}
                  </p>
                </div>
                
                {p.highlight && (
                  <div className="mt-auto pt-2 border-t border-brand-gold/20">
                    <span className="font-body text-[8px] text-brand-gold font-bold uppercase tracking-[2px]">Content Published</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[40px] text-center">
          <p className="font-serif italic text-lg md:text-xl text-brand-gold/80 leading-relaxed max-w-2xl mx-auto">
            "We don't just host an event; we harvest a narrative. Every Sunday provides the fuel for a full week of digital dominance."
          </p>
        </div>
      </div>
      
      <p className="font-body text-[10px] text-brand-gold/30 italic text-center uppercase tracking-[3px] font-bold opacity-60">
        Execution scales based on venue logistics and guest volume.
      </p>
    </div>
  );
};
