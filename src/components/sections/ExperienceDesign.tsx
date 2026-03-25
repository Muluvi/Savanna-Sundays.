"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Music, Users, Camera, Clock, CalendarDays, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentHarvestMetrics } from './ContentProduction';

/**
 * Live Countdown Clock
 * Calculates time remaining until the next Sunday at 12:00 PM EAT (UTC+3).
 * EAT (East Africa Time) is UTC+3.
 */
const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const nowUTC = Date.now();
      const dateUTC = new Date(nowUTC);
      
      // Target: Sunday 12:00 PM EAT = 09:00 AM UTC
      let daysTillSun = (7 - dateUTC.getUTCDay()) % 7;
      
      const nextSunUTC = new Date(Date.UTC(
        dateUTC.getUTCFullYear(),
        dateUTC.getUTCMonth(),
        dateUTC.getUTCDate() + daysTillSun,
        9, 0, 0, 0
      ));

      // If Sunday 9 AM UTC has already passed today, target the next Sunday
      if (nextSunUTC.getTime() <= nowUTC) {
        nextSunUTC.setUTCDate(nextSunUTC.getUTCDate() + 7);
      }

      const diff = nextSunUTC.getTime() - nowUTC;
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m`);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="font-headline text-[var(--text-lg)] text-[#F8F5E6] opacity-70 uppercase tracking-widest mt-1">
      T-MINUS: {timeLeft}
    </div>
  );
};

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={sectionRef} className="space-y-8">
      {/* influencer Pack Drop Banner */}
      <div className={cn(
        "w-full bg-brand-gold p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden group transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="shrink-0 w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/10">
          <Clock size={32} className="animate-pulse" />
        </div>
        <div className="space-y-1 text-center md:text-left relative z-10 flex-1">
          <h3 className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-green leading-none uppercase tracking-tighter">
            SUNDAY 12:00 PM: INFLUENCER PACK DROP
          </h3>
          <CountdownClock />
          <p className="font-body text-brand-green font-bold text-[10px] uppercase tracking-widest max-w-xl mt-2 opacity-80">
            Synchronized Savanna content wave hits Nairobi's feeds at the stroke of noon.
          </p>
        </div>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Content Harvest Metrics */}
      <div className="space-y-4">
        <div className="section-label">03B — The Content Harvest</div>
        <ContentHarvestMetrics />
      </div>

      {/* Publishing Rhythm */}
      <div className="space-y-4 pt-6 border-t border-white/5 relative">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-brand-gold" size={18} />
            <div className="section-label mb-0">03C — Publishing Rhythm</div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide -mx-6 px-6 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-4 min-w-[1200px] pb-8 pt-4">
              {productionDays.map((p, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex-1 p-6 rounded-2xl flex flex-col gap-4 border transition-all duration-500 snap-center", 
                    "hover:-translate-y-2 hover:shadow-2xl hover:border-brand-gold/40",
                    p.anchor 
                      ? "bg-brand-gold text-brand-green border-brand-gold shadow-[0_20px_40px_rgba(244,197,66,0.2)]" 
                      : "bg-white/5 border-white/10 text-white hover:bg-white/[0.08]",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ 
                    transitionDelay: `${i * 100}ms`,
                    boxShadow: p.anchor ? '0 20px 40px -10px rgba(244, 197, 66, 0.3)' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-sm uppercase tracking-widest opacity-60">{p.day}</span>
                    <div className={cn(
                      "p-2.5 rounded-xl transition-transform group-hover:scale-110", 
                      p.anchor ? "bg-brand-green/10" : "bg-brand-gold/10 text-brand-gold"
                    )}>
                      {p.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-headline text-xl md:text-2xl uppercase leading-tight tracking-tight">{p.title}</h5>
                    <p className={cn(
                      "font-body text-[10px] font-bold uppercase tracking-wider leading-relaxed",
                      p.anchor ? "text-brand-green/70" : "text-white/40"
                    )}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-gold transition-transform duration-300 ease-out origin-left"
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};