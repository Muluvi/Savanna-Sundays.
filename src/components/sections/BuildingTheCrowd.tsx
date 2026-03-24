
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Instagram, 
  Camera, 
  QrCode, 
  Users, 
  MessageSquare, 
  Share2, 
  RotateCcw,
  Zap,
  Target,
  RefreshCcw,
  Repeat
} from 'lucide-react';
import { cn } from '@/lib/utils';

const flywheelStages = [
  { 
    label: "Create", 
    icon: <Camera className="w-6 h-6" />, 
    color: "text-brand-gold", 
    borderColor: "border-brand-gold",
    bgColor: "bg-brand-gold/10",
    desc: "Every Sunday, the squad produces a DJ set, 4 Reels, and 20+ influencer posts.",
    angle: 0 
  },
  { 
    label: "Distribute", 
    icon: <Share2 className="w-6 h-6" />, 
    color: "text-brand-teal", 
    borderColor: "border-brand-teal",
    bgColor: "bg-brand-teal/10",
    desc: "Content published across all major platforms throughout the week.",
    angle: 90 
  },
  { 
    label: "Engage", 
    icon: <MessageSquare className="w-6 h-6" />, 
    color: "text-brand-accent-warm", 
    borderColor: "border-brand-accent-warm",
    bgColor: "bg-brand-accent-warm/10",
    desc: "Competitions, photo tags, and influencer mentions drive interaction.",
    angle: 180 
  },
  { 
    label: "Return", 
    icon: <RotateCcw className="w-6 h-6" />, 
    color: "text-brand-cream", 
    borderColor: "border-brand-cream",
    bgColor: "bg-brand-cream/10",
    desc: "Winners get a VIP experience at next Sunday's venue.",
    angle: 270 
  },
];

const mechanicCards = [
  {
    title: "YouTube Loop",
    body: "Weekly DJ sets on YouTube. Viewers comment to win free Savanna ciders + merchandise.",
    icon: <Youtube className="w-6 h-6" />
  },
  {
    title: "Spot Yourself",
    body: "High-quality photos posted on Instagram. Attendees tag themselves to drive organic reach.",
    icon: <Camera className="w-6 h-6" />
  },
  {
    title: "Scan & Win",
    body: "QR codes at branded venues link to weekly competition entry forms for data capture.",
    icon: <QrCode className="w-6 h-6" />
  }
];

const engagementMechanics = [
  { 
    title: "The DJ Reveal", 
    body: "Next Sunday's DJ teased mid-week — sound clip, no full reveal. Drives speculation and fans.", 
    icon: <Zap className="text-brand-gold" size={18} /> 
  },
  { 
    title: "Sunday Streak Rewards", 
    body: "Attend 4 Sundays for rewards. Attend 8 for an exclusive influencer moment. Loyalty is celebrated.", 
    icon: <Target className="text-brand-gold" size={18} /> 
  },
  { 
    title: "Venue Prediction Poll", 
    body: "Mid-week poll: which venue should host next Sunday? Audience ownership drives attendance.", 
    icon: <RefreshCcw className="text-brand-gold" size={18} /> 
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
            }, i * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (flywheelRef.current) observer.observe(flywheelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-relaxed">
          “Every Sunday builds on the last. The content compounds. The community grows.”
        </p>
      </div>

      {/* Flywheel Visualization - Compact */}
      <div className="py-4" ref={flywheelRef}>
        <div className="lg:hidden space-y-4">
          {flywheelStages.map((stage, i) => (
            <div key={i} className={cn(
              "p-5 bg-brand-dark-alt border-l-4 rounded-2xl flex items-start gap-5 transition-all duration-700",
              activeStage >= i ? cn(stage.borderColor, "opacity-100 translate-x-0") : "border-white/5 opacity-0 -translate-x-4"
            )}>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", stage.bgColor, stage.color)}>
                {stage.icon}
              </div>
              <div className="space-y-1">
                <h4 className={cn("font-headline text-xl uppercase tracking-widest", stage.color)}>{stage.label}</h4>
                <p className="font-body text-xs text-brand-cream/70 leading-relaxed font-bold uppercase tracking-wider">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Circular) */}
        <div className="hidden lg:flex relative w-full max-w-md aspect-square mx-auto items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-brand-gold shadow-[0_0_40px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 border-4 border-brand-green">
            <div className="text-center font-headline text-brand-green leading-none">
              <span className="text-2xl uppercase">Growth</span>
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
                    "bg-brand-dark-alt border-2 p-4 rounded-[24px] shadow-2xl flex flex-col items-center gap-2 w-[220px] pointer-events-auto transition-colors",
                    isActive ? stage.borderColor : "border-white/5"
                  )}>
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", stage.bgColor, stage.color)}>
                      {stage.icon}
                    </div>
                    <div className="text-center space-y-1">
                      <span className={cn("font-headline text-lg uppercase tracking-widest", stage.color)}>{stage.label}</span>
                      <p className="font-body text-[9px] text-brand-cream/60 leading-tight font-bold uppercase tracking-wider">
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

      {/* Engagement Mechanics - New Section */}
      <div className="space-y-6">
        <div className="section-label">Engagement Mechanics</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {engagementMechanics.map((m, i) => (
            <Card key={i} className="p-6 bg-brand-dark-alt border-none border-t-[3px] border-brand-gold rounded-2xl flex flex-col gap-3 group hover:bg-white/5 transition-all">
              <div className="p-2 w-fit rounded-lg bg-brand-gold/10 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-xl text-brand-gold uppercase leading-tight">{m.title}</h5>
                <p className="font-body text-[10px] text-brand-cream/60 leading-relaxed uppercase font-bold tracking-wider">
                  {m.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Conversion Mechanics - Compact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {mechanicCards.map((m, i) => (
          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 flex flex-col items-center text-center">
            <div className="text-brand-gold">{m.icon}</div>
            <div className="space-y-1">
              <h4 className="font-headline text-lg text-brand-gold uppercase tracking-tight leading-none">{m.title}</h4>
              <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-wider">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
