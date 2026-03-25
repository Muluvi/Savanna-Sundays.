'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Music, Users, Camera, Clock, CalendarDays, Sparkles } from 'lucide-react';
import { ContentHarvestMetrics } from './ContentProduction';

const productionDays = [
  { day: "SUN 12 PM", title: "THE DROP", body: "Influencer pack release.", icon: <Clock size={14} />, anchor: true },
  { day: "SUN 2-9PM", title: "LIVE OPS", body: "Capture at venue.", icon: <Camera size={14} /> },
  { day: "TUE", title: "HERO", body: "Recap Reel + photos.", icon: <Sparkles size={14} />, highlight: true },
  { day: "WED", title: "MUSIC", body: "DJ Highlight Reel.", icon: <Music size={14} />, highlight: true },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12">
      <div className="w-full bg-brand-gold p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
        <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-green/10 flex items-center justify-center text-[#1A1208] border-2 border-[#1A1208]/10">
          <Clock size={40} />
        </div>
        <div className="space-y-2 text-center md:text-left relative z-10">
          <h3 className="font-headline text-[var(--text-xl)] md:text-[var(--text-4xl)] text-[#1A1208] leading-none uppercase tracking-tighter">
            Every Sunday. Noon. The Drop.
          </h3>
          <p className="font-body text-[#1A1208] font-bold text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase tracking-widest max-w-2xl">
            Synchronized Savanna content wave hits Nairobi's feeds at 12:00 PM.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="section-label">03B: The Content Harvest</div>
        <ContentHarvestMetrics />
      </div>

      <div className="space-y-6 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03C: Publishing Rhythm</div>
        </div>
        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-3 min-w-[800px] pb-4">
            {productionDays.map((p, i) => (
              <div key={i} className={cn("flex-1 p-6 rounded-[32px] flex flex-col gap-4 border transition-all", p.anchor ? "bg-brand-gold text-brand-green scale-105" : "bg-white/5 border-white/5 opacity-40")}>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-[var(--text-sm)] md:text-[var(--text-base)] uppercase tracking-widest">{p.day}</span>
                  <div className={cn("p-2 rounded-xl", p.anchor ? "bg-brand-green/10" : "bg-white/10")}>{p.icon}</div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] uppercase leading-none">{p.title}</h5>
                  <p className="font-body text-[var(--text-xs)] font-bold uppercase tracking-widest opacity-80">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
