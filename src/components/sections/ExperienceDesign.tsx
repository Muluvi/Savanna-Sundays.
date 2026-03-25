"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Music, Users, Camera, Clock, CalendarDays, Sparkles } from 'lucide-react';
import { ContentHarvestMetrics } from './ContentProduction';

const productionDays = [
  { day: "SUN 12 PM", title: "INFLUENCER PACK DROP", body: "Coordinated posting across all influencer channels.", icon: <Clock size={14} />, anchor: true },
  { day: "SUN 2-9PM", title: "LIVE ACTIVATION", body: "Content captured at squad venue.", icon: <Camera size={14} /> },
  { day: "MON", title: "RAW REVIEW", body: "Reel editing begins.", icon: <Sparkles size={14} /> },
  { day: "TUE", title: "HERO RECAP", body: "Reel 1 + photo batch.", icon: <Music size={14} /> },
  { day: "WED", title: "DJ HIGHLIGHT", body: "Reel 2 + photo batch.", icon: <Sparkles size={14} /> },
  { day: "THU", title: "CROWD/STYLE", body: "Reel 3 published.", icon: <Users size={14} /> },
  { day: "FRI", title: "INFLUENCER", body: "Reel 4 + YouTube Set.", icon: <Music size={14} /> },
  { day: "SAT", title: "TEASER", body: "UGC + Next Sunday teaser.", icon: <CalendarDays size={14} /> },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12">
      <div className="w-full bg-brand-gold p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
        <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-green/10 flex items-center justify-center text-[#1A1208] border-2 border-[#1A1208]/10">
          <Clock size={40} className="animate-pulse" />
        </div>
        <div className="space-y-2 text-center md:text-left relative z-10">
          <h3 className="font-headline text-[var(--text-xl)] md:text-[var(--text-4xl)] text-[#1A1208] leading-none uppercase tracking-tighter">
            SUNDAY 12:00 PM: INFLUENCER PACK DROP
          </h3>
          <p className="font-body text-[#1A1208] font-bold text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase tracking-widest max-w-2xl">
            Synchronized Savanna content wave hits Nairobi's feeds at the stroke of noon.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="section-label">03B The Content Harvest</div>
        <ContentHarvestMetrics />
      </div>

      <div className="space-y-6 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03C Publishing Rhythm</div>
        </div>
        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-3 min-w-[1200px] pb-4">
            {productionDays.map((p, i) => (
              <div key={i} className={cn(
                "flex-1 p-6 rounded-[32px] flex flex-col gap-4 border transition-all", 
                p.anchor ? "bg-brand-gold text-brand-green scale-105 shadow-[0_0_40px_rgba(244,197,66,0.3)]" : "bg-white/5 border-white/5 opacity-40"
              )}>
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
