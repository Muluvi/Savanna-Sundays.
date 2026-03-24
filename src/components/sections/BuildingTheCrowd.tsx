
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Instagram, 
  Camera, 
  QrCode, 
  Users, 
  Trophy, 
  MessageSquare, 
  Share2, 
  ArrowRight,
  RotateCcw,
  RefreshCcw,
  Zap,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

const flywheelStages = [
  { 
    label: "CREATE", 
    icon: <Camera className="w-6 h-6" />, 
    color: "text-brand-gold", 
    borderColor: "border-brand-gold",
    bgColor: "bg-brand-gold/10",
    desc: "Every Sunday, the squad produces a DJ set, 4 Reels, unlimited photos, and 20+ influencer posts.",
    angle: 0 
  },
  { 
    label: "DISTRIBUTE", 
    icon: <Share2 className="w-6 h-6" />, 
    color: "text-brand-teal", 
    borderColor: "border-brand-teal",
    bgColor: "bg-brand-teal/10",
    desc: "Content published across YouTube, Instagram, TikTok, Facebook, and Twitter/X throughout the week.",
    angle: 90 
  },
  { 
    label: "ENGAGE", 
    icon: <MessageSquare className="w-6 h-6" />, 
    color: "text-brand-accent-warm", 
    borderColor: "border-brand-accent-warm",
    bgColor: "bg-brand-accent-warm/10",
    desc: "QR competitions, comment-to-win, Spot Yourself photo tags, and influencer mentions drive interaction.",
    angle: 180 
  },
  { 
    label: "RETURN", 
    icon: <RotateCcw className="w-6 h-6" />, 
    color: "text-brand-cream", 
    borderColor: "border-brand-cream",
    bgColor: "bg-brand-cream/10",
    desc: "Winners get a VIP Savanna experience at next Sunday's venue — reserved table, complimentary Savanna, and a meet-the-DJ moment.",
    angle: 270 
  },
];

const mechanics = [
  {
    title: "The YouTube Competition Loop",
    body: "QR codes in every DJ set video drive viewers to a weekly giveaway — six-packs, merch. Winners collect at the next Sunday's venue. The online audience becomes a physical guest.",
    icon: <Youtube className="w-6 h-6" />
  },
  {
    title: "Spot Yourself",
    body: "Crowd captured in Reels. People tag @SavannaSundays when they find themselves — entering a weekly draw. Every tag is organic reach.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Comment to Win",
    body: "Weekly Reel competition: 'Comment your favourite DJ moment.' Best comment wins. Drives algorithm visibility and genuine engagement.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Scan at the Venue",
    body: "QR codes at venue touchpoints unlock exclusive content, DJ vote polls, and on-site competition entry. Physical and digital merge.",
    icon: <QrCode className="w-6 h-6" />
  },
  {
    title: "The Winner Experience",
    body: "Winners get a moment — squad sets up their table, MC gives a shoutout, influencers capture it. The winner becomes content. People attend to be seen.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "UGC Repost Engine",
    body: "Best crowd-shot content reposted on official channels with full credit. Being featured becomes aspirational. Every attendee is a brand ambassador.",
    icon: <Share2 className="w-6 h-6" />
  }
];

const extraMechanics = [
  { title: "The DJ Reveal", body: "Next Sunday's DJ teased mid-week — sound clip, no full reveal. Drives speculation and attendance from music fans.", icon: <Zap size={18} /> },
  { title: "Sunday Streak Rewards", body: "Attend 4 Sundays in a row — earn a reward. Attend 8 — get an exclusive influencer moment. Loyalty is celebrated.", icon: <Target size={18} /> },
  { title: "Venue Prediction Poll", body: "Mid-week poll: which venue should host next Sunday? Crowd votes. Audience ownership drives attendance.", icon: <RefreshCcw size={18} /> },
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
            }, i * 600);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (flywheelRef.current) observer.observe(flywheelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
          “Every Sunday builds on the last. The content compounds. The community grows. The crowd returns.”
        </p>
        <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
          The Savanna Sundays growth engine runs on a four-stage cycle: <strong>CREATE</strong> content every Sunday, <strong>DISTRIBUTE</strong> it across YouTube, Instagram, TikTok, and Facebook all week, <strong>ENGAGE</strong> the audience through comments, tags, QR competitions, and influencer reach, and <strong>RETURN</strong> them to the next Sunday’s activation. Each cycle feeds the next. Each week is bigger than the last.
        </p>
      </div>

      {/* Flywheel Visualization */}
      <div className="py-12" ref={flywheelRef}>
        <div className="section-label text-center mb-16">The Growth Engine Flywheel</div>
        
        {/* Desktop View (Circular) */}
        <div className="hidden lg:flex relative w-full max-w-2xl aspect-square mx-auto items-center justify-center">
          {/* Core */}
          <div className="w-48 h-48 rounded-full bg-brand-gold shadow-[0_0_60px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 border-4 border-brand-green">
            <div className="text-center font-headline text-brand-green leading-none">
              <span className="text-xs tracking-[4px] block mb-2 opacity-60">THE</span>
              <span className="text-3xl uppercase">GROWTH</span>
              <span className="text-xl block mt-1">ENGINE</span>
            </div>
          </div>

          {/* Orbit with Nodes */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10">
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#F4C542" strokeWidth="2" strokeDasharray="12 12" />
            </svg>
            
            {flywheelStages.map((stage, i) => {
              const isActive = activeStage >= i;
              return (
                <div 
                  key={i} 
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  )}
                  style={{ transform: `rotate(${stage.angle}deg) translateY(-42%) rotate(-${stage.angle}deg)` }}
                >
                  <div className={cn(
                    "bg-brand-dark-alt border-2 p-6 rounded-[32px] shadow-2xl flex flex-col items-center gap-4 w-[280px] pointer-events-auto transition-colors",
                    isActive ? stage.borderColor : "border-white/5",
                    activeStage === i && "ring-4 ring-brand-gold/20"
                  )}>
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-1", stage.bgColor, stage.color)}>
                      {stage.icon}
                    </div>
                    <div className="text-center space-y-2">
                      <span className={cn("font-headline text-2xl uppercase tracking-widest", stage.color)}>{stage.label}</span>
                      <p className="font-body text-[11px] text-brand-cream/60 leading-relaxed font-bold uppercase tracking-wider">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting Arrows (Animated Path) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
             {flywheelStages.map((_, i) => {
               const startAngle = (i * 90) + 15;
               const endAngle = ((i + 1) * 90) - 15;
               const isActive = activeStage > i;
               
               return (
                 <path 
                   key={i}
                   d={`M ${50 + 35 * Math.cos((startAngle * Math.PI) / 180)}% ${50 + 35 * Math.sin((startAngle * Math.PI) / 180)}% A 35 35 0 0 1 ${50 + 35 * Math.cos((endAngle * Math.PI) / 180)}% ${50 + 35 * Math.sin((endAngle * Math.PI) / 180)}%`}
                   fill="none"
                   stroke={isActive ? "#F4C542" : "rgba(255,255,255,0.05)"}
                   strokeWidth="3"
                   strokeLinecap="round"
                   className="transition-all duration-1000"
                 />
               );
             })}
          </svg>
        </div>

        {/* Mobile View (Vertical Stack) */}
        <div className="lg:hidden space-y-8 px-4">
          {flywheelStages.map((stage, i) => {
            const isActive = activeStage >= i;
            return (
              <div key={i} className="relative">
                {i < flywheelStages.length - 1 && (
                  <div className={cn(
                    "absolute left-6 top-16 w-[2px] h-12 transition-all duration-1000",
                    isActive && activeStage > i ? "bg-brand-gold" : "bg-white/5"
                  )} />
                )}
                
                <Card className={cn(
                  "p-6 bg-brand-dark-alt border-none border-l-4 transition-all duration-700 flex items-start gap-6",
                  isActive ? cn(stage.borderColor, "translate-x-0 opacity-100") : "border-white/5 -translate-x-4 opacity-0"
                )}>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", stage.bgColor, stage.color)}>
                    {stage.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className={cn("font-headline text-2xl uppercase tracking-widest", stage.color)}>{stage.label}</h4>
                    <p className="font-body text-xs text-brand-cream/70 leading-relaxed font-bold uppercase tracking-wider">
                      {stage.desc}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mechanic Grid */}
      <div className="space-y-8">
        <div className="section-label">Conversion Mechanics</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanics.map((m, i) => (
            <Card 
              key={i} 
              className="p-8 bg-brand-green border-none border-t-[3px] border-brand-gold rounded-[24px] space-y-4 shadow-xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-brand-gold mb-2">{m.icon}</div>
              <h4 className="font-headline text-2xl text-brand-gold uppercase tracking-tight">{m.title}</h4>
              <p className="font-body text-[#F8F5E6] text-xs leading-relaxed opacity-80">{m.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Mechanics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        {extraMechanics.map((m, i) => (
          <Card key={i} className="p-6 bg-[#221A0A] border border-white/5 rounded-2xl flex flex-col gap-3 group hover:border-brand-gold/30 transition-colors">
            <div className="text-brand-gold">{m.icon}</div>
            <div className="space-y-1">
              <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{m.title}</h5>
              <p className="font-body text-[10px] text-[#B8A98A] leading-relaxed uppercase font-bold tracking-wider">{m.body}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Reference Box */}
      <div className="pt-12">
        <div className="p-10 bg-brand-green border-l-8 border-brand-gold rounded-[40px] shadow-2xl space-y-4">
          <div className="flex items-center gap-4 mb-2">
             <div className="px-3 py-1 bg-brand-gold text-brand-green font-headline text-xs tracking-widest rounded uppercase">The Strategy</div>
          </div>
          <p className="font-serif italic text-lg md:text-xl text-[#F8F5E6] leading-relaxed">
            "Inspired by platforms like Boiler Room and The Balcony Mix that turned DJ sets into global cultural content, Savanna Sundays applies the same model to Nairobi — building a community around the music, the brand, and the Sunday ritual."
          </p>
        </div>
      </div>
    </div>
  );
};
