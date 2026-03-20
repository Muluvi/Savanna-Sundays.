
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Layers, Lock, Check, Circle } from 'lucide-react';
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

/**
 * Section 01: THE GAP
 * High-fidelity strategic context module with interactive footprint analysis.
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
      {/* 01: Headline Treatment */}
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
            The most valuable social occasion in Nairobi.
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

      {/* 02: Strategic Insight Blocks */}
      <div className="space-y-12 md:space-y-16">
        
        {/* BLOCK 1: THE WEEKLY CYCLE */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-20 rounded-full border border-brand-gold/20 flex items-center justify-center animate-spin-slow">
              <RefreshCcw className="text-brand-gold/40" size={40} />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-cream uppercase">EVERY SUNDAY, THE SAME DECISION</h4>
            <p className="font-body text-brand-cream/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Where to go, what to drink, who to be seen with, what to post — made by Nairobi's highest-value demographic, every single week.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-brand-cream/30" />
              ))}
              <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_#F4C542]" />
              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest ml-2">Sunday</span>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-gold/10" />

        {/* BLOCK 2: THE FRAGMENTATION */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex justify-center md:justify-start">
            <div className="grid grid-cols-3 gap-1 group">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-4 h-4 bg-brand-gold/20 border border-brand-gold/40 transition-all duration-700",
                    "group-hover:translate-x-0 group-hover:translate-y-0",
                    i % 2 === 0 ? "translate-x-1" : "-translate-x-1",
                    i > 4 ? "translate-y-1" : "-translate-y-1"
                  )} 
                />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-cream uppercase">DOZENS OF EVENTS. ZERO BRAND EQUITY</h4>
            <p className="font-body text-brand-cream/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Nairobi's Sunday scene is fragmented across interchangeable activations that generate attention for 48 hours and build nothing lasting.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-brand-teal animate-decay-loop" />
              </div>
              <span className="text-[9px] font-bold text-brand-cream/40 uppercase tracking-widest">Content lifespan: 48 hours</span>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-gold/10" />

        {/* BLOCK 3: THE WINDOW */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start transition-all duration-700 delay-[400ms]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex justify-center md:justify-start">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute left-0 w-[2px] h-12 bg-brand-gold/40 animate-door-left" />
              <div className="absolute right-0 w-[2px] h-12 bg-brand-gold/40 animate-door-right" />
              <div className="w-4 h-4 rounded-full border border-brand-gold/20 animate-pulse" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-cream uppercase">A WINDOW THAT WON'T STAY OPEN</h4>
            <p className="font-body text-brand-cream/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Unbranded occasions in high-value markets always consolidate. The first brand to move sets the terms. The rest compete for what's left.
            </p>
            <div className="flex items-center gap-4 pt-2 w-full max-w-md">
              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest shrink-0 animate-pulse">Now</span>
              <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-brand-gold animate-fuse-burn" />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Lock size={12} className="text-brand-cream/20" />
                <span className="text-[9px] font-bold text-brand-cream/20 uppercase tracking-widest">Claimed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-gold/10" />

        {/* 03: FOOTPRINT COMPARISON */}
        <div className={cn(
          "pt-12 space-y-12 transition-all duration-1000 delay-[600ms]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-0 items-stretch relative">
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

          {/* Centered Pull Quote */}
          <div className={cn(
            "text-center max-w-2xl mx-auto pt-8 transition-all duration-1000 delay-[2800ms]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
              "Distribution puts Savanna on the shelf. <br className="hidden md:block"/>Cultural ownership puts Savanna in the conversation."
            </p>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes decay-loop {
          0% { width: 100%; opacity: 1; background-color: #2D8C7F; }
          80% { width: 10%; opacity: 0.5; background-color: #1F4D3A; }
          100% { width: 0%; opacity: 0; }
        }
        .animate-decay-loop {
          animation: decay-loop 4s infinite linear;
        }
        @keyframes fuse-burn {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-fuse-burn {
          animation: fuse-burn 20s infinite linear;
        }
        @keyframes door-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        @keyframes door-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        .animate-door-left { animation: door-left 20s infinite ease-in-out; }
        .animate-door-right { animation: door-right 20s infinite ease-in-out; }
        
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
