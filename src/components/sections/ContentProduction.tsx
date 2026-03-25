'use client';

import React, { useEffect, useState, useRef } from 'react';

const RollingCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const target = parseFloat(value.replace(/,/g, ''));
  const isNumeric = !isNaN(target);

  useEffect(() => {
    if (!isNumeric || hasAnimated) return;

    const startAnimation = () => {
      let startTime: number;
      const duration = 2500;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutElastic = (x: number): number => {
          const c4 = (2 * Math.PI) / 3;
          return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
        };

        setDisplayValue(easeOutElastic(progress) * target);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        startAnimation();
      }
    }, { threshold: 0.3 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isNumeric, hasAnimated, target]);

  return (
    <span ref={containerRef} className="relative inline-block">
      <span className="font-headline text-4xl md:text-5xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_10px_rgba(244,197,66,0.3)]">
        {Math.floor(displayValue)}{suffix}
      </span>
    </span>
  );
};

const ContentHarvestMetrics = () => {
  const deliverables = [
    { 
      label: "Hi-Fi DJ Sets", 
      value: "4", 
      period: "per month",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4C542" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="7" y1="3" x2="7" y2="21"/>
          <line x1="17" y1="3" x2="17" y2="21"/>
          <line x1="3" y1="7" x2="21" y2="7"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="17" x2="21" y2="17"/>
        </svg>
      ),
      body: "Full multi-camera sets. Broadcast-mastered audio. The very best in multiple genres." 
    },
    { 
      label: "Algorithm Loops", 
      value: "16", 
      period: "per month",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4C542" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 2l4 4-4 4"/>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <path d="M7 22l-4-4 4-4"/>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
      ),
      body: "High-impact recap reels, DJ highlights, and lifestyle cuts. Genre-fluid energy." 
    },
    { 
      label: "Lifestyle Assets", 
      value: "28", 
      period: "per month",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4C542" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
          <line x1="9.69" y1="8" x2="21.17" y2="8"/>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
          <line x1="14.31" y1="16" x2="2.83" y2="16"/>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
        </svg>
      ),
      body: "Color-graded HD photography batch covering crowd energy and brand ritual." 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      {deliverables.map((item, i) => (
        <div 
          key={i} 
          className="relative group p-4 rounded-2xl glass-tile overflow-hidden flex flex-col items-center text-center transition-all hover:-translate-y-1 shadow-lg"
        >
          <div className="absolute top-3 right-3 p-1 opacity-30 z-0">
            {item.icon}
          </div>
          
          <div className="relative z-10 space-y-3 flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <RollingCounter value={item.value} />
              <span className="font-headline text-xs text-brand-gold uppercase tracking-[3px] mt-0.5">
                {item.period}
              </span>
            </div>
            
            <div className="space-y-1">
              <h5 className="font-headline text-xl text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream text-[9px] leading-relaxed font-bold uppercase tracking-wider max-w-[180px] mx-auto opacity-60">
                {item.body}
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
      ))}
    </div>
  );
};

export { ContentHarvestMetrics };