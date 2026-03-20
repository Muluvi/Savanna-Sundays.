
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Lock, Check, Circle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Radial Gauge Component for the Footprint Analysis
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
  const [offset, setOffset] = useState(251.2);
  const circumference = 251.2; // 2 * pi * 40

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const progress = (percentage / 100) * circumference;
        setOffset(circumference - progress);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setOffset(circumference);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
      <svg className="w-full h-full -rotate-90">
        <circle 
          cx="50%" 
          cy="50%" 
          r="40" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          className="text-white/5" 
        />
        <circle 
          cx="50%" 
          cy="50%" 
          r="40" 
          fill="none" 
          stroke={color} 
          strokeWidth="4" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[1000ms] ease-out" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[9px] md:text-[10px] font-headline tracking-[2px] text-center px-3 leading-tight" style={{ color }}>
          {label}
        </span>
      </div>
    </div>
  );
};

const activationPills = [
  { label: "Rooftop Brunch", color: "bg-slate-500/30", border: "border-solid", pos: { top: '10%', left: '5%' }, rot: '1deg', duration: '3s' },
  { label: "Garden Day Party", color: "bg-teal-700/20", border: "border-dashed", pos: { top: '25%', left: '35%' }, rot: '-2deg', duration: '4s' },
  { label: "Poolside Session", color: "bg-sky-700/20", border: "border-none", pos: { top: '5%', left: '55%' }, rot: '2deg', duration: '3.5s' },
  { label: "Hotel Sunday", color: "bg-gray-600/30", border: "border-solid", pos: { top: '42%', left: '10%' }, rot: '-1deg', duration: '4.2s' },
  { label: "DJ Event", color: "bg-stone-600/30", border: "border-dashed", pos: { top: '55%', left: '45%' }, rot: '3deg', duration: '3.8s' },
  { label: "Brunch Series", color: "bg-zinc-700/20", border: "border-none", pos: { top: '22%', left: '72%' }, rot: '-3deg', duration: '4.5s' },
  { label: "Sundowner Session", color: "bg-cyan-700/20", border: "border-solid", pos: { top: '72%', left: '8%' }, rot: '1deg', duration: '3.2s' },
  { label: "Weekend Market", color: "bg-emerald-800/20", border: "border-dashed", pos: { top: '82%', left: '32%' }, rot: '-2deg', duration: '3.9s' },
  { label: "Compound Party", color: "bg-neutral-600/30", border: "border-none", pos: { top: '48%', left: '78%' }, rot: '2deg', duration: '4.1s' },
  { label: "Terrace Session", color: "bg-blue-700/20", border: "border-solid", pos: { top: '78%', left: '62%' }, rot: '-1deg', duration: '3.6s' },
];

/**
 * Section 01: THE GAP
 * Strategic context module with condensed, high-impact narrative.
 */
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
    <div ref={sectionRef} className="space-y-12 py-4">
      {/* Headline & Underline Animation */}
      <div className="space-y-4">
        <div className="relative inline-block">
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-brand-cream uppercase leading-none tracking-tighter">
            THE SUNDAY OPPORTUNITY
          </h2>
          <div 
            className={cn(
              "absolute -bottom-2 left-0 h-[1.5px] bg-brand-gold transition-all duration-[1200ms] ease-in-out origin-left",
              isVisible ? "w-full" : "w-0"
            )}
          />
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-gold/80 leading-tight">
            Nairobi's most valuable social occasion.
          </h3>
          <span 
            className={cn(
              "font-serif italic text-xl md:text-2xl text-brand-gold transition-all duration-700 delay-[600ms] inline-block",
              isVisible ? "opacity-100 scale-105" : "opacity-0 scale-100"
            )}
          >
            No brand owns it.
          </span>
        </div>
      </div>

      {/* Strategic Narrative Blocks - Condensed */}
      <div className="space-y-6 text-brand-cream/90 font-body text-base md:text-lg leading-[1.7] max-w-4xl">
        <p>
          Sunday in Nairobi is a high-density lifestyle occasion. Between midday and sundown, the 21-to-35 professional demographic makes a clustered set of identity-signalling decisions: which venue, which drink, and what to post. This is a recurring window of peak social visibility.
        </p>
        <p>
          Currently, this energy is wasted. Nairobi's Sunday scene is fragmented across dozens of uncoordinated activations. Each event builds short-term noise but zero cumulative equity. For brands, presence this week carries no guarantee of preference by the next.
        </p>
        <p>
          This fragmentation is a temporary market inefficiency. High-value occasions eventually consolidate around properties that introduce infrastructure and identity. The question is not whether a brand will own Sunday, but which brand moves first.
        </p>
      </div>

      {/* Strategic Insight Cards - Condensed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="glass-card p-4 space-y-3 group hover:border-brand-gold/40 transition-all duration-500">
          <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all">
            <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <h4 className="font-headline text-xl text-brand-gold uppercase">THE REPETITION TRAP</h4>
          <p className="text-[11px] leading-relaxed text-brand-cream/60">
            Sunday activations repeat without strategic escalation. Each edition starts from zero, building no systematic equity. This creates a structural ceiling on value — and an opportunity for compounding growth.
          </p>
        </div>

        <div className="glass-card p-4 space-y-3 group hover:border-brand-teal/40 transition-all duration-500">
          <div className="w-10 h-10 rounded-full border border-brand-teal/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
            <HelpCircle size={20} />
          </div>
          <h4 className="font-headline text-xl text-brand-teal uppercase">THE CONTENT DEFICIT</h4>
          <p className="text-[11px] leading-relaxed text-brand-cream/60">
            Enormous volumes of social content are produced, then buried in algorithmic decay. No activation currently extracts sustained value from an event across a 30-day cycle. Output is being wasted.
          </p>
        </div>

        <div className="glass-card p-4 space-y-3 group hover:border-brand-gold/40 transition-all duration-500">
          <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all">
            <Lock size={20} />
          </div>
          <h4 className="font-headline text-xl text-brand-gold uppercase">THE OWNERSHIP VACUUM</h4>
          <p className="text-[11px] leading-relaxed text-brand-cream/60">
            No beverage brand holds a proprietary association with Sunday. Brands treat it as just another weekend slot, missing the unique behaviour and content dynamics. This is a category-level white space.
          </p>
        </div>
      </div>

      {/* Interactive Comparison - Condensed */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-0 items-stretch relative mt-12">
        {/* Left Panel: Distribution */}
        <div className={cn(
          "p-6 md:p-10 rounded-t-[32px] md:rounded-tr-none md:rounded-l-[32px] bg-white/5 border border-white/5 backdrop-blur-xl transition-all duration-700",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        )}>
          <div className="space-y-8">
            <h4 className="font-headline text-sm tracking-[3px] text-brand-teal uppercase">DISTRIBUTION FOOTPRINT</h4>
            <div className="flex justify-center md:justify-start">
              <RadialGauge 
                percentage={85} 
                color="#2D8C7F" 
                label="ESTABLISHED" 
                isVisible={isVisible} 
                delay={1200} 
              />
            </div>
            <ul className="space-y-4">
              {[
                "National retail network",
                "On-trade presence",
                "Local production at Tatu City"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-cream/70 font-body text-sm">
                  <Check size={14} className="text-brand-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vertical Pulse Divider */}
        <div className="w-full h-[2px] md:w-[2px] md:h-full bg-brand-gold/20 relative">
          <div className="absolute inset-0 bg-brand-gold animate-pulse-divider" />
        </div>

        {/* Right Panel: Cultural */}
        <div className={cn(
          "p-6 md:p-10 rounded-b-[32px] md:rounded-bl-none md:rounded-r-[32px] bg-white/[0.08] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        )}>
          <div className="space-y-8">
            <h4 className="font-headline text-sm tracking-[3px] text-brand-gold uppercase">CULTURAL FOOTPRINT</h4>
            <div className="flex justify-center md:justify-start">
              <RadialGauge 
                percentage={5} 
                color="#F4C542" 
                label="NEGLIGIBLE" 
                isVisible={isVisible} 
                delay={2200} 
              />
            </div>
            <ul className="space-y-4">
              {[
                "No recurring event property",
                "No lifestyle community",
                "No content ecosystem",
                "No occasion ownership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-cream font-body text-sm">
                  <Circle size={14} className="text-brand-gold/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footprint Pull Quote */}
      <div className={cn(
        "text-center max-w-2xl mx-auto pt-8 transition-all duration-1000 delay-[2800ms]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
          "Distribution puts Savanna on the shelf. <br className="hidden md:block"/>Cultural ownership puts Savanna in the conversation."
        </p>
      </div>

      {/* Interactive Scatter Field: The Sunday Landscape */}
      <div className="space-y-4 pt-8 pb-12">
        <span className="font-headline text-xs tracking-[3px] text-brand-cream/50 uppercase">NAIROBI'S SUNDAY LANDSCAPE</span>
        
        <div className="relative h-[400px] w-full bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden group/landscape">
          {activationPills.map((pill, i) => (
            <div
              key={i}
              className={cn(
                "absolute px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-700 cursor-default group/pill",
                pill.color,
                pill.border !== 'border-none' ? `border ${pill.border} border-white/10` : '',
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{
                top: pill.pos.top,
                left: pill.pos.left,
                transform: `rotate(${pill.rot})`,
                transitionDelay: `${i * 100}ms`,
                animation: `float ${pill.duration} ease-in-out infinite`
              }}
            >
              <span className="font-body text-[11px] font-bold text-brand-cream/80 group-hover/pill:opacity-20 transition-opacity">
                {pill.label}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pill:opacity-100 transition-opacity pointer-events-none">
                <span className="font-body text-[9px] uppercase tracking-widest text-brand-gold font-bold">No brand partner</span>
              </div>
            </div>
          ))}

          {/* The Strategic Void */}
          <div 
            className={cn(
              "absolute bottom-[10%] right-[10%] w-32 h-32 rounded-full border-2 border-dashed border-brand-gold/20 flex items-center justify-center transition-all duration-1000 group/void",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{ transitionDelay: '1500ms' }}
          >
            <div className="relative">
              <span className="font-headline text-4xl text-brand-gold opacity-15 group-hover/void:opacity-60 transition-opacity">?</span>
              <div className="absolute inset-0 animate-ping bg-brand-gold/5 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        <p className="font-body text-[13px] text-brand-cream/40 italic text-center animate-in fade-in duration-1000 delay-[2500ms]">
          Every label is unbranded. The empty space is the opportunity.
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-3px) rotate(var(--tw-rotate)); }
        }
        @keyframes pulse-divider {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-divider {
          animation: pulse-divider 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

