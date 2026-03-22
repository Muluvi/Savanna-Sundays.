"use client";

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCcw, Lock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const circumference = 251.2;
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
          setCurrentPercent(easeOutQuad(progress) * percentage);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, delay);
      return () => clearTimeout(startTimer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="relative flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 group">
      <svg className="w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
        <circle 
          cx="50%" cy="50%" r="40" fill="none" stroke={color} strokeWidth="3" 
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-300 ease-out" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-headline text-xl md:text-2xl text-white leading-none">{Math.round(currentPercent)}%</span>
        <span className="text-[7px] font-headline tracking-[2px] mt-1 uppercase opacity-60" style={{ color }}>{label}</span>
      </div>
    </div>
  );
};

export const TheGap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-12 py-8 relative overflow-hidden">
      {/* 01: COMPACT HEADLINE */}
      <div className="space-y-4">
        <div className="relative inline-block">
          <h2 className="font-headline text-5xl md:text-8xl text-brand-cream uppercase leading-none tracking-tighter blur-in">
            THE SUNDAY OPPORTUNITY
          </h2>
          <div className={cn("absolute -bottom-2 left-0 h-[1.5px] bg-brand-gold transition-all duration-1000 ease-in-out origin-left", isVisible ? "w-full" : "w-0")} />
        </div>
        <p className="font-serif italic text-lg md:text-2xl text-brand-gold/80 leading-tight">
          Nairobi's most concentrated brand-building window. <span className={cn("text-brand-gold inline-block transition-all duration-1000 delay-500", isVisible ? "opacity-100 scale-105" : "opacity-0 scale-100")}>No brand owns it.</span>
        </p>
      </div>

      {/* 02: STRATEGIC DASHBOARD (CONSOLIDATED) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        {/* Left: Punchy Narrative & Insights */}
        <div className="space-y-6">
          <p className="font-body text-base md:text-lg text-brand-cream/80 leading-relaxed border-l-2 border-brand-gold/30 pl-6">
            Sunday is an identity-signalling act for Nairobi's professional demographic. Every week, thousands make a clustered set of decisions—venue, drink, and broadcast—unfolding in WhatsApp chats and peaking between 2PM and 8PM. Fragmented markets always consolidate; the question is which brand moves first.
          </p>

          <div className="space-y-4">
            {[
              { icon: <RefreshCcw size={16} />, title: "REPETITION TRAP", text: "Activations reset every Monday, building zero systematic equity." },
              { icon: <Zap size={16} />, title: "CONTENT DEFICIT", text: "Volume is high, but lifespan is <48 hours. Strategic waste is constant." },
              { icon: <Lock size={16} />, title: "OWNERSHIP VACUUM", text: "A category-level white space waiting for a defining operator." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 glass-card group hover:border-brand-gold/40 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-green transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-headline text-sm text-brand-gold uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-brand-cream/60 font-body leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Footprint Visual Dashboard */}
        <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 flex flex-col items-center justify-center space-y-8">
          <h4 className="font-headline text-xs tracking-[4px] text-brand-cream/40 uppercase font-bold text-center">Brand Footprint Audit</h4>
          
          <div className="flex justify-around w-full gap-4">
            <RadialGauge percentage={85} color="#2D8C7F" label="DISTRIBUTION" isVisible={isVisible} delay={800} />
            <RadialGauge percentage={5} color="#F4C542" label="CULTURE" isVisible={isVisible} delay={1200} />
          </div>

          <div className="w-full space-y-3 pt-4 border-t border-white/5">
            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
              <span className="text-brand-teal">Available Nationally</span>
              <span className="text-brand-gold">Culturally Invisible</span>
            </div>
            <p className="font-serif italic text-sm md:text-base text-brand-gold text-center pt-2">
              "Distribution puts Savanna on the shelf. <br/>Culture puts you in the conversation."
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blur-in {
          from { filter: blur(10px); opacity: 0; transform: translateY(10px); }
          to { filter: blur(0); opacity: 1; transform: translateY(0); }
        }
        .blur-in { animation: blur-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};