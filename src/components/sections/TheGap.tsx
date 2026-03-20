
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Lock, Check, Circle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Optimized Radial Gauge Component for mobile scaling
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
  const circumference = 251.2;

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
    <div className="relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 mx-auto md:mx-0">
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
        <span className="text-[10px] font-headline tracking-[2px] text-center px-4 leading-tight uppercase" style={{ color }}>
          {label}
        </span>
      </div>
    </div>
  );
};

const activationPills = [
  { label: "Rooftop Brunch", color: "bg-slate-500/30", border: "border-solid", pos: { top: '8%', left: '5%' }, rot: '1deg' },
  { label: "Garden Party", color: "bg-teal-700/20", border: "border-dashed", pos: { top: '20%', left: '35%' }, rot: '-2deg' },
  { label: "Poolside", color: "bg-sky-700/20", border: "border-none", pos: { top: '5%', left: '65%' }, rot: '2deg' },
  { label: "Hotel Sunday", color: "bg-gray-600/30", border: "border-solid", pos: { top: '38%', left: '8%' }, rot: '-1deg' },
  { label: "DJ Event", color: "bg-stone-600/30", border: "border-dashed", pos: { top: '52%', left: '42%' }, rot: '3deg' },
  { label: "Brunch Series", color: "bg-zinc-700/20", border: "border-none", pos: { top: '22%', left: '75%' }, rot: '-3deg' },
  { label: "Sundowner", color: "bg-cyan-700/20", border: "border-solid", pos: { top: '70%', left: '10%' }, rot: '1deg' },
  { label: "Market", color: "bg-emerald-800/20", border: "border-dashed", pos: { top: '80%', left: '35%' }, rot: '-2deg' },
  { label: "Compound", color: "bg-neutral-600/30", border: "border-none", pos: { top: '45%', left: '78%' }, rot: '2deg' },
  { label: "Terrace", color: "bg-blue-700/20", border: "border-solid", pos: { top: '75%', left: '60%' }, rot: '-1deg' },
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
    <div ref={sectionRef} className="space-y-10 md:space-y-16 py-6 overflow-hidden">
      {/* Animated Headline */}
      <div className="space-y-4 px-1">
        <div className="relative inline-block">
          <h2 className="font-headline text-5xl md:text-8xl text-brand-cream uppercase leading-[0.9] tracking-tighter blur-in">
            THE SUNDAY OPPORTUNITY
          </h2>
          <div 
            className={cn(
              "absolute -bottom-2 left-0 h-[1.5px] bg-brand-gold transition-all duration-[1200ms] ease-in-out origin-left",
              isVisible ? "w-full" : "w-0"
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline gap-2">
          <h3 className="font-serif italic text-lg md:text-2xl text-brand-gold/80 leading-tight">
            Nairobi's most concentrated brand-building occasion.
          </h3>
          <span 
            className={cn(
              "font-serif italic text-lg md:text-2xl text-brand-gold transition-all duration-700 delay-500 inline-block",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
          >
            No brand owns it.
          </span>
        </div>
      </div>

      {/* Strategic Narrative - Mobile Optimized */}
      <div className="space-y-6 text-brand-cream/90 font-body text-sm md:text-lg leading-[1.6] max-w-4xl px-1">
        <p className="border-l-2 border-brand-gold/20 pl-4 md:pl-6">
          Sunday in Nairobi is not merely a day off — it is the city's most concentrated brand-building occasion. Every week, the 21-to-35 professional demographic makes a tightly clustered set of lifestyle decisions: which venue, which drink, and what to broadcast. These are not passive choices; they are identity-signalling acts of cultural fluency.
        </p>
        <p>
          The current landscape is structurally incapable of delivering brand value. Dozens of uncoordinated activations operate without shared identity or cumulative equity. For a brand, this means variety without meaning — presence at a Sunday event this week carries no guarantee of recall or preference by the next.
        </p>
        <p className="font-bold text-brand-gold/90">
          Fragmented markets always consolidate. The question is not whether a brand will own Sunday, but which brand moves first — and whether they have the architecture to hold that position.
        </p>
      </div>

      {/* Insight Cards - Vertical on Mobile, Grid on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4">
        {[
          {
            icon: <RefreshCcw size={20} />,
            title: "THE REPETITION TRAP",
            color: "brand-gold",
            text: "Activations operate on a compressed weekly cycle that resets every Monday. Without strategic escalation, each edition starts from zero, building no systematic equity for the brand."
          },
          {
            icon: <HelpCircle size={20} />,
            title: "THE CONTENT DEFICIT",
            color: "brand-teal",
            text: "Vast volumes of social content are produced, then buried in algorithmic decay within 48 hours. No property currently extracts sustained value from an event across a full 30-day cycle."
          },
          {
            icon: <Lock size={20} />,
            title: "THE OWNERSHIP VACUUM",
            color: "brand-gold",
            text: "No beverage brand holds a proprietary association with Sunday. Brands treat it as just another weekend slot, missing the unique behavior and content dynamics of the occasion."
          }
        ].map((card, i) => (
          <div 
            key={i}
            className={cn(
              "glass-card p-5 space-y-4 group hover:border-brand-gold/40 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className={`w-12 h-12 rounded-full border border-${card.color}/20 flex items-center justify-center text-${card.color} group-hover:bg-${card.color} group-hover:text-brand-green transition-all duration-500`}>
              {card.icon}
            </div>
            <div className="space-y-2">
              <h4 className={`font-headline text-xl text-${card.color} uppercase tracking-tight`}>{card.title}</h4>
              <p className="text-[12px] md:text-[13px] leading-relaxed text-brand-cream/60 font-body">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footprint Comparison - Mobile Optimized Stacking */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-6 md:gap-0 items-stretch relative mt-8">
        {/* Left: Distribution */}
        <div className={cn(
          "p-6 md:p-10 rounded-[24px] md:rounded-tr-none md:rounded-l-[32px] bg-white/5 border border-white/5 backdrop-blur-xl transition-all duration-700",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        )}>
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline text-xs tracking-[4px] text-brand-teal uppercase font-bold">DISTRIBUTION FOOTPRINT</h4>
            <RadialGauge 
              percentage={85} 
              color="#2D8C7F" 
              label="ESTABLISHED" 
              isVisible={isVisible} 
              delay={1000} 
            />
            <ul className="space-y-3 w-full">
              {[
                "National retail network",
                "On-trade presence",
                "Local production at Tatu City"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-cream/70 font-body text-xs justify-center md:justify-start">
                  <Check size={14} className="text-brand-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider - Horizontal on mobile, Vertical on desktop */}
        <div className="h-[2px] md:h-full w-full md:w-[2px] bg-brand-gold/20 relative">
          <div className="absolute inset-0 bg-brand-gold animate-pulse-divider" />
        </div>

        {/* Right: Cultural */}
        <div className={cn(
          "p-6 md:p-10 rounded-[24px] md:rounded-bl-none md:rounded-r-[32px] bg-white/[0.08] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        )}>
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline text-xs tracking-[4px] text-brand-gold uppercase font-bold">CULTURAL FOOTPRINT</h4>
            <RadialGauge 
              percentage={5} 
              color="#F4C542" 
              label="NEGLIGIBLE" 
              isVisible={isVisible} 
              delay={1800} 
            />
            <ul className="space-y-3 w-full">
              {[
                "No recurring event property",
                "No lifestyle community",
                "No content ecosystem",
                "No occasion ownership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-cream font-body text-xs justify-center md:justify-start">
                  <Circle size={14} className="text-brand-gold/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Centered Pull Quote */}
      <div className={cn(
        "text-center max-w-2xl mx-auto px-4 pt-4 transition-all duration-1000 delay-[2500ms]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <p className="font-serif italic text-xl md:text-3xl text-brand-gold leading-relaxed">
          "Distribution puts Savanna on the shelf. <br className="hidden md:block"/>Cultural ownership puts Savanna in the conversation."
        </p>
      </div>

      {/* Scatter Field Visual - Mobile Optimized */}
      <div className="space-y-4 pt-10 px-1">
        <span className="font-headline text-[10px] tracking-[4px] text-brand-cream/40 uppercase font-bold">NAIROBI'S SUNDAY LANDSCAPE</span>
        
        <div className="relative h-[350px] md:h-[450px] w-full bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden group/landscape">
          {activationPills.map((pill, i) => (
            <div
              key={i}
              className={cn(
                "absolute px-4 py-2 md:px-5 md:py-2.5 rounded-full backdrop-blur-md transition-all duration-700 cursor-default group/pill",
                pill.color,
                pill.border !== 'border-none' ? `border ${pill.border} border-white/10` : '',
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              style={{
                top: pill.pos.top,
                left: pill.pos.left,
                transform: `rotate(${pill.rot})`,
                transitionDelay: `${i * 80}ms`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
              }}
            >
              <span className="font-body text-[10px] md:text-[11px] font-bold text-brand-cream/80 group-hover/pill:opacity-20 transition-opacity">
                {pill.label}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pill:opacity-100 transition-opacity pointer-events-none">
                <span className="font-body text-[8px] uppercase tracking-widest text-brand-gold font-bold">No partner</span>
              </div>
            </div>
          ))}

          {/* The Opportunity Gap (Bottom Right) */}
          <div 
            className={cn(
              "absolute bottom-[8%] right-[8%] w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-brand-gold/30 flex items-center justify-center transition-all duration-1000 group/void",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{ transitionDelay: '2000ms' }}
          >
            <div className="relative">
              <span className="font-headline text-3xl md:text-4xl text-brand-gold opacity-20 group-hover/void:opacity-70 transition-opacity">?</span>
              <div className="absolute inset-0 animate-ping bg-brand-gold/10 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        <p className="font-body text-[12px] text-brand-cream/30 italic text-center animate-in fade-in duration-1000 delay-[2800ms]">
          Every label is an activation without a brand behind it. <br className="md:hidden"/>The space that remains is the opportunity.
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-4px) rotate(var(--tw-rotate)); }
        }
        @keyframes pulse-divider {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-divider {
          animation: pulse-divider 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
