
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Camera, 
  QrCode, 
  MessageSquare, 
  Share2, 
  RotateCcw,
  Zap,
  Target,
  RefreshCcw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const flywheelStages = [
  { 
    label: "Create", 
    icon: <Camera className="w-5 h-5" />, 
    color: "text-brand-gold", 
    borderColor: "border-brand-gold",
    bgColor: "bg-brand-gold/10",
    desc: "Every Sunday, the squad produces a DJ set, 4 Reels, and 20+ posts.",
    angle: 0 
  },
  { 
    label: "Distribute", 
    icon: <Share2 className="w-5 h-5" />, 
    color: "text-brand-teal", 
    borderColor: "border-brand-teal",
    bgColor: "bg-brand-teal/10",
    desc: "Content published across platforms throughout the week.",
    angle: 90 
  },
  { 
    label: "Engage", 
    icon: <MessageSquare className="w-5 h-5" />, 
    color: "text-brand-accent-warm", 
    borderColor: "border-brand-accent-warm",
    bgColor: "bg-brand-accent-warm/10",
    desc: "Competitions and tags drive interaction.",
    angle: 180 
  },
  { 
    label: "Return", 
    icon: <RotateCcw className="w-5 h-5" />, 
    color: "text-brand-cream", 
    borderColor: "border-brand-cream",
    bgColor: "bg-brand-cream/10",
    desc: "Winners get VIP access to the next venue.",
    angle: 270 
  },
];

const engagementMechanics = [
  { 
    title: "The DJ Reveal", 
    body: "Mid-week sound clip tease. No full reveal.", 
    icon: <Zap className="text-brand-gold" size={16} /> 
  },
  { 
    title: "Streak Rewards", 
    body: "Attend 4 Sundays for exclusive perks.", 
    icon: <Target className="text-brand-gold" size={16} /> 
  },
  { 
    title: "Venue Polls", 
    body: "Mid-week voting on the next host.", 
    icon: <RefreshCcw className="text-brand-gold" size={16} /> 
  },
];

export const BuildingTheCrowd = () => {
  const [activeStage, setActiveStage] = useState(-1);
  const flywheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          flywheelStages.forEach((_, i) => {
            setTimeout(() => {
              setActiveStage(i);
            }, i * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (flywheelRef.current) observer.observe(flywheelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-lg md:text-xl text-brand-gold leading-tight">
          Every Sunday builds on the last. The content compounds.
        </p>
      </div>

      {/* Ultra-Compact Engagement Mechanics Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {engagementMechanics.map((m, i) => (
          <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group transition-all">
            <div className="p-2 rounded-lg bg-brand-gold/10 group-hover:scale-110 transition-transform shrink-0">
              {m.icon}
            </div>
            <div className="space-y-0.5">
              <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{m.title}</h5>
              <p className="font-body text-[9px] text-brand-cream/50 leading-tight uppercase font-bold tracking-wider">
                {m.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flywheel Visualization */}
      <div className="py-2" ref={flywheelRef}>
        <div className="lg:hidden space-y-3">
          {flywheelStages.map((stage, i) => (
            <div key={i} className={cn(
              "p-4 bg-brand-dark-alt border-l-4 rounded-xl flex items-start gap-4 transition-all duration-700",
              activeStage >= i ? cn(stage.borderColor, "opacity-100 translate-x-0") : "border-white/5 opacity-0 -translate-x-4"
            )}>
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", stage.bgColor, stage.color)}>
                {stage.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className={cn("font-headline text-lg uppercase tracking-wider", stage.color)}>{stage.label}</h4>
                <p className="font-body text-[8px] text-brand-cream/70 leading-relaxed font-bold uppercase tracking-wider">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Circular) */}
        <div className="hidden lg:flex relative w-full max-w-[340px] aspect-square mx-auto items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-brand-gold shadow-[0_0_40px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 border-4 border-brand-green">
            <div className="text-center font-headline text-brand-green leading-none">
              <span className="text-xl uppercase">Growth</span>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {flywheelStages.map((stage, i) => {
              const isActive = activeStage >= i;
              return (
                <div 
                  key={i} 
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  )}
                  style={{ transform: `rotate(${stage.angle}deg) translateY(-40%) rotate(-${stage.angle}deg)` }}
                >
                  <div className={cn(
                    "bg-brand-dark-alt border-2 p-3 rounded-[20px] shadow-2xl flex flex-col items-center gap-1 w-[180px] pointer-events-auto transition-colors",
                    isActive ? stage.borderColor : "border-white/5"
                  )}>
                    <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", stage.bgColor, stage.color)}>
                      {stage.icon}
                    </div>
                    <div className="text-center space-y-0.5">
                      <span className={cn("font-headline text-base uppercase tracking-wider", stage.color)}>{stage.label}</span>
                      <p className="font-body text-[8px] text-brand-cream/60 leading-tight font-bold uppercase tracking-wider">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
