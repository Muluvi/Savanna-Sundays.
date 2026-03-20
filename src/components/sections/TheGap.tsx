
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Layers, Lock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Section 01: THE GAP
 * Rebuilt as a high-fidelity strategic context module.
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
          {/* Animated Gold Underline */}
          <div 
            className={cn(
              "absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-brand-gold to-transparent transition-all duration-[800ms] ease-out origin-left",
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
              "font-serif italic text-xl md:text-2xl text-brand-gold transition-all duration-700 delay-[400ms] inline-block",
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
            {/* Enhancement: Weekday Dots */}
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
            {/* Enhancement: Decay Bar */}
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
            {/* Enhancement: Urgency Timeline */}
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

      </div>

      {/* Global Styles for Section 01 Custom Animations */}
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
      `}</style>
    </div>
  );
};
