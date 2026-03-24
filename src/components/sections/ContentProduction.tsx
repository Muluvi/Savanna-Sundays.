'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const RollingCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const target = parseFloat(value.replace(/,/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setIsVisible(true); 
    }, { threshold: 0.5 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const duration = 2500;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;
      setDisplayValue(easeOutQuart(progress) * target);
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span ref={containerRef} className="relative inline-block">
      <span className="font-headline text-[clamp(4rem,12vw,7rem)] text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(244,197,66,0.3)]">
        {Math.floor(displayValue).toLocaleString()}
      </span>
      <span className="absolute -inset-2 bg-brand-gold/5 blur-2xl rounded-full -z-10 animate-pulse" />
    </span>
  );
};

const ContentHarvestMetrics = () => {
  const deliverables = [
    { label: "YouTube sets", value: "4", body: "Hi-Fi DJ Production" },
    { label: "Recap reels", value: "16", body: "Algorithm Optimized" },
    { label: "HD photography", value: "28", body: "Lifestyle Asset Harvest" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      {deliverables.map((item, i) => (
        <div 
          key={i} 
          className="relative group p-8 rounded-[32px] bg-white/[0.03] border border-brand-gold/10 overflow-hidden transition-all duration-700 hover:bg-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-2 shadow-2xl animate-fade-in-up"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {/* Subtle Glossy Glow */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <RollingCounter value={item.value} />
            
            <div className="space-y-2">
              <div className="font-body text-[10px] text-brand-gold/60 font-bold uppercase tracking-[4px]">
                per month
              </div>
              <h5 className="font-headline text-3xl text-white uppercase tracking-widest leading-none group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream/40 text-[9px] leading-tight font-bold uppercase tracking-[2px]">
                {item.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ContentHarvestMetrics };
