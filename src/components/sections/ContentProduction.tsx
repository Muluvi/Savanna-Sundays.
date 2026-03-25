
'use client';

import React, { useEffect, useState, useRef } from 'react';

const RollingCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const target = parseFloat(value.replace(/,/g, ''));
  const isNumeric = !isNaN(target);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isNumeric || hasAnimated) return;

    const startAnimation = () => {
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
    };

    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        startAnimation();
      }
    }, { threshold: 0.1, rootMargin: '50px' });

    if (containerRef.current) observer.observe(containerRef.current);

    const fallback = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        startAnimation();
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [isMounted, isNumeric, hasAnimated, target]);

  if (!isMounted) {
    return (
      <span className="relative inline-block">
        <span className="font-headline text-[clamp(4rem,12vw,7rem)] text-brand-gold leading-none tracking-tighter">
          0{suffix}
        </span>
      </span>
    );
  }

  if (!isNumeric) {
    return (
      <span className="relative inline-block">
        <span className="font-headline text-[clamp(4rem,12vw,7rem)] text-brand-gold leading-none tracking-tighter">
          {value}{suffix}
        </span>
      </span>
    );
  }

  return (
    <span ref={containerRef} className="relative inline-block">
      <span className="font-headline text-[clamp(4rem,12vw,7rem)] text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(244,197,66,0.3)]">
        {Math.floor(displayValue).toLocaleString()}{suffix}
      </span>
      <span className="absolute -inset-2 bg-brand-gold/5 blur-2xl rounded-full -z-10 animate-pulse" />
    </span>
  );
};

const ContentHarvestMetrics = () => {
  const deliverables = [
    { 
      label: "DJ SETS", 
      value: "1", 
      body: "1 full DJ set per week. Multi-camera, board-feed audio. All-rounded music with a Bongo foundation. Broadcast-mastered and uploaded to the performing DJ’s YouTube channel. Branded intro/outro, Savanna watermark, lower-thirds. KWAL has final say on channel strategy." 
    },
    { 
      label: "REELS", 
      value: "4", 
      body: "4 Reels per week. Hero recap, DJ moment clip, crowd/lifestyle cut, influencer highlight. Bongo-energy moments prioritised. Every Reel carries Savanna watermark and tags @SavannaCider_EA." 
    },
    { 
      label: "PHOTOS", 
      value: "Unlimited", 
      body: "Unlimited edited photos per week. Colour-graded in Savanna’s warm gold palette. Covers crowd energy, product moments, venue atmosphere, and influencer highlights." 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      {deliverables.map((item, i) => (
        <div 
          key={i} 
          className="relative group p-8 rounded-[32px] bg-white/[0.03] border border-brand-gold/10 overflow-hidden transition-all duration-700 hover:bg-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-2 shadow-2xl flex flex-col items-center"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <RollingCounter value={item.value} />
            
            <div className="space-y-3">
              <div className="font-body text-[10px] text-brand-gold/80 font-bold uppercase tracking-[4px]">
                Weekly Deliverable
              </div>
              <h5 className="font-headline text-3xl text-white uppercase tracking-widest leading-none group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-[1px] max-w-[280px] mx-auto">
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
