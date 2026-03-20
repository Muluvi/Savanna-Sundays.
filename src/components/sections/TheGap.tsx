
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Lock, Check, Circle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * High-Fidelity Radial Gauge with Count-Up Animation
 */
const RadialGauge = ({ 
  percentage, 
  color, 
  label, 
  isVisible, 
  delay = 0 
}: { 
  percentage: number; 
  color: string; 
  label: string; 
  isVisible: boolean; 
  delay?: number 
}) => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const circumference = 251.2; // 2 * pi * r (r=40)
  const offset = circumference - (currentPercent / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const startTimer = setTimeout(() => {
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuad = (t: number) => t * (2 - t);
          const val = easeOutQuad(progress) * percentage;
          
          setCurrentPercent(val);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);
      return () => clearTimeout(startTimer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 group">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
        style={{ backgroundColor: color }}
      />
      
      <svg className="w-full h-full -rotate-90">
        <circle 
          cx="50%" 
          cy="50%" 
          r="40" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-white/5" 
        />
        <circle 
          cx="50%" 
          cy="50%" 
          r="40" 
          fill="none" 
          stroke={color} 
          strokeWidth="3" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="font-headline text-2xl md:text-3xl text-white leading-none">
          {Math.round(currentPercent)}%
        </span>
        <span className="text-[8px] font-headline tracking-[2px] mt-1 uppercase opacity-60" style={{ color }}>
          {label}
        </span>
      </div>
    </div>
  );
};

const activationPills = [
  { label: "Rooftop Brunch", color: "bg-slate-500/20", pos: { top: '12%', left: '8%' }, rot: '2deg', dur: '4s' },
  { label: "Garden Party", color: "bg-teal-700/20", pos: { top: '25%', left: '38%' }, rot: '-3deg', dur: '5s' },
  { label: "Poolside Session", color: "bg-sky-700/20", pos: { top: '8%', left: '68%' }, rot: '4deg', dur: '3.5s' },
  { label: "Hotel Sunday", color: "bg-gray-600/20", pos: { top: '42%', left: '12%' }, rot: '-2deg', dur: '6s' },
  { label: "Outdoor DJ Event", color: "bg-stone-600/20", pos: { top: '55%', left: '45%' }, rot: '5deg', dur: '4.5s' },
  { label: "Brunch Series", color: "bg-zinc-700/20", pos: { top: '28%', left: '78%' }, rot: '-4deg', dur: '5.5s' },
  { label: "Sundowner", color: "bg-cyan-700/20", pos: { top: '75%', left: '15%' }, rot: '3deg', dur: '4s' },
  { label: "Weekend Market", color: "bg-emerald-800/20", pos: { top: '82%', left: '42%' }, rot: '-2deg', dur: '5.2s' },
  { label: "Compound Party", color: "bg-neutral-600/20", pos: { top: '48%', left: '82%' }, rot: '3deg', dur: '4.8s' },
  { label: "Terrace Session", color: "bg-blue-700/20", pos: { top: '78%', left: '65%' }, rot: '-3deg', dur: '3.8s' },
];

export const TheGap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-16 md:space-y-24 py-12 relative overflow-hidden">
      {/* 01: HEADLINE TREATMENT */}
      <div className="space-y-6 relative z-10">
        <div className="relative inline-block">
          <h2 className="font-headline text-6xl md:text-[120px] text-brand-cream uppercase leading-[0.85] tracking-tighter blur-in">
            THE SUNDAY <br className="md:hidden" /> OPPORTUNITY
          </h2>
          {/* Animated Drawing Underline */}
          <div 
            className={cn(
              "absolute -bottom-4 left-0 h-[2px] bg-brand-gold transition-all duration-[1200ms] ease-in-out origin-left shadow-[0_0_15px_rgba(244,197,66,0.5)]",
              isVisible ? "w-full" : "w-0"
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline gap-3">
          <h3 className="font-serif italic text-xl md:text-3xl text-brand-gold/80 leading-tight">
            Nairobi's most concentrated brand-building occasion.
          </h3>
          <span 
            className={cn(
              "font-serif italic text-xl md:text-3xl text-brand-gold transition-all duration-1000 delay-700 inline-block scale-100",
              isVisible ? "opacity-100 translate-x-0 scale-105" : "opacity-0 -translate-x-4 scale-100"
            )}
          >
            No brand owns it.
          </span>
        </div>
      </div>

      {/* 02: STRATEGIC NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start relative z-10">
        <div className="space-y-8 text-brand-cream/90 font-body text-base md:text-xl leading-[1.7] max-w-4xl">
          <p className="border-l-2 border-brand-gold/30 pl-6 md:pl-10 py-2">
            Sunday in Nairobi is not merely a day off — it is the city's most concentrated brand-building occasion. Every week, the 21-to-35 professional demographic makes a tightly clustered set of lifestyle decisions: which venue, which drink, and what to broadcast. These are not passive choices; they are identity-signalling acts of cultural fluency.
          </p>
          <p className="opacity-80">
            The current landscape is structurally incapable of delivering brand value. Dozens of uncoordinated activations operate without shared identity or cumulative equity. For a brand, this means variety without meaning — presence at a Sunday event this week carries no guarantee of recall or preference by the next.
          </p>
          <p className="font-bold text-brand-gold/90 text-xl md:text-2xl leading-snug">
            Fragmented markets always consolidate. The question is not whether a brand will own Sunday, but which brand moves first — and whether they have the architecture to hold that position.
          </p>
        </div>

        {/* Floating Context Visual */}
        <div className="hidden lg:flex flex-col gap-6 animate-pulse-slow">
           <div className="glass-card p-6 border-brand-gold/10 rotate-1">
              <span className="section-label text-brand-gold">Occasion Density</span>
              <div className="h-2 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-brand-gold w-[92%] animate-in slide-in-from-left duration-1000 delay-1000" />
              </div>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-40">Peak Engagement Window: 2PM - 8PM</p>
           </div>
        </div>
      </div>

      {/* 03: INSIGHT BLOCKS (Glassmorphic Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 relative z-10">
        {[
          {
            icon: <RefreshCcw size={24} />,
            title: "THE REPETITION TRAP",
            color: "brand-gold",
            text: "Activations operate on a compressed weekly cycle that resets every Monday. Without strategic escalation, each edition starts from zero, building no systematic equity for the brand."
          },
          {
            icon: <HelpCircle size={24} />,
            title: "THE CONTENT DEFICIT",
            color: "brand-teal",
            text: "Vast volumes of social content are produced, then buried in algorithmic decay within 48 hours. No property currently extracts sustained value from an event across a full 30-day cycle."
          },
          {
            icon: <Lock size={24} />,
            title: "THE OWNERSHIP VACUUM",
            color: "brand-gold",
            text: "No beverage brand holds a proprietary association with Sunday. Brands treat it as just another weekend slot, missing the unique behavior and content dynamics of the occasion."
          }
        ].map((card, i) => (
          <div 
            key={i}
            className={cn(
              "glass-card p-8 space-y-6 group hover:border-brand-gold/40 hover:-translate-y-2 transition-all duration-700 relative overflow-hidden",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className={`w-14 h-14 rounded-2xl border border-${card.color}/20 flex items-center justify-center text-${card.color} group-hover:bg-${card.color} group-hover:text-brand-green transition-all duration-500 shadow-xl`}>
              {card.icon}
            </div>
            <div className="space-y-4">
              <h4 className={`font-headline text-2xl text-${card.color} uppercase tracking-tight`}>{card.title}</h4>
              <p className="text-sm md:text-base leading-relaxed text-brand-cream/60 font-body">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 04: FOOTPRINT COMPARISON (Dashboard Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-stretch relative mt-16 bg-white/[0.02] rounded-[40px] border border-white/5 overflow-hidden">
        {/* Left: Distribution */}
        <div className={cn(
          "p-8 md:p-16 space-y-10 transition-all duration-1000",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        )}>
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline text-sm tracking-[5px] text-brand-teal uppercase font-bold opacity-60">DISTRIBUTION FOOTPRINT</h4>
            <RadialGauge 
              percentage={85} 
              color="#2D8C7F" 
              label="ESTABLISHED" 
              isVisible={isVisible} 
              delay={1200} 
            />
            <ul className="space-y-4 w-full max-w-xs">
              {[
                "National retail network",
                "On-trade presence",
                "Local production at Tatu City"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-cream/70 font-body text-sm justify-center md:justify-start group/li">
                  <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover/li:bg-brand-teal group-hover/li:text-brand-green transition-all">
                    <Check size={12} className="shrink-0" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden md:block" />

        {/* Right: Cultural */}
        <div className={cn(
          "p-8 md:p-16 space-y-10 bg-white/[0.03] transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        )}>
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline text-sm tracking-[5px] text-brand-gold uppercase font-bold opacity-60">CULTURAL FOOTPRINT</h4>
            <RadialGauge 
              percentage={5} 
              color="#F4C542" 
              label="NEGLIGIBLE" 
              isVisible={isVisible} 
              delay={2000} 
            />
            <ul className="space-y-4 w-full max-w-xs">
              {[
                "No recurring event property",
                "No lifestyle community",
                "No content ecosystem",
                "No occasion ownership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-cream font-body text-sm justify-center md:justify-start group/li">
                   <div className="w-6 h-6 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover/li:border-brand-gold transition-all">
                    <Circle size={8} className="text-brand-gold/40 fill-brand-gold/10 shrink-0" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 05: THE PULL QUOTE */}
      <div className={cn(
        "text-center max-w-4xl mx-auto px-6 py-12 transition-all duration-1000 delay-[2500ms]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <p className="font-serif italic text-2xl md:text-5xl text-brand-gold leading-[1.2] tracking-tight">
          "Distribution puts Savanna on the shelf. <br className="hidden md:block"/>Cultural ownership puts Savanna in the conversation."
        </p>
        <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto mt-12" />
      </div>

      {/* 06: SCATTER FIELD VISUAL (Interactive Landscape) */}
      <div className="space-y-8 pt-12">
        <div className="flex justify-between items-end border-b border-white/5 pb-4">
          <span className="font-headline text-xs tracking-[5px] text-brand-cream/40 uppercase font-bold">NAIROBI'S SUNDAY LANDSCAPE</span>
          <span className="font-body text-[10px] text-brand-gold/40 uppercase tracking-widest hidden md:block italic">Hover to audit fragmentation</span>
        </div>
        
        <div className="relative h-[450px] md:h-[600px] w-full bg-white/[0.01] border border-white/5 rounded-[48px] overflow-hidden group/landscape cursor-crosshair">
          {/* Moving Background Noise */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

          {activationPills.map((pill, i) => (
            <div
              key={i}
              className={cn(
                "absolute px-6 py-3 rounded-full backdrop-blur-xl transition-all duration-1000 border border-white/10 group/pill",
                pill.color,
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              style={{
                top: pill.pos.top,
                left: pill.pos.left,
                transform: `rotate(${pill.rot})`,
                transitionDelay: `${i * 100}ms`,
                animation: `float ${pill.dur} ease-in-out infinite`
              }}
            >
              <span className="font-body text-[11px] md:text-xs font-bold text-brand-cream/80 group-hover/pill:opacity-0 transition-opacity">
                {pill.label}
              </span>
              {/* Tooltip on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pill:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="font-headline text-[10px] tracking-[2px] text-brand-gold uppercase">No Brand Partner</span>
              </div>
            </div>
          ))}

          {/* THE VOID (The Opportunity Gap) */}
          <div 
            className={cn(
              "absolute bottom-[10%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-dashed border-brand-gold/20 flex items-center justify-center transition-all duration-[1500ms] group/void hover:border-brand-gold/60 hover:scale-105",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{ transitionDelay: '2500ms' }}
          >
            <div className="relative text-center">
              <span className="font-headline text-5xl md:text-7xl text-brand-gold opacity-10 group-hover/void:opacity-100 transition-all duration-700">?</span>
              <div className="absolute inset-0 animate-ping bg-brand-gold/5 rounded-full pointer-events-none" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/void:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                 <span className="text-[10px] font-headline tracking-[4px] text-brand-gold uppercase">Claim the Territory</span>
              </div>
            </div>
          </div>
        </div>

        <p className="font-body text-sm text-brand-cream/30 italic text-center animate-in fade-in duration-1000 delay-[3000ms] max-w-lg mx-auto leading-relaxed">
          Every label is an activation without a brand behind it. <br />The unanchored space that remains is the opportunity.
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-8px) rotate(var(--tw-rotate)); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
