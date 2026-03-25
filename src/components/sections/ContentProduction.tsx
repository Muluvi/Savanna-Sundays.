'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Video, Camera, Youtube, Sparkles } from 'lucide-react';

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
      const duration = 2000;

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
    }, { threshold: 0.2 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isMounted, isNumeric, hasAnimated, target]);

  if (!isMounted) return <span className="font-headline text-7xl text-brand-gold opacity-0">0</span>;

  return (
    <span ref={containerRef} className="relative inline-block">
      <span className="font-headline text-7xl md:text-8xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(244,197,66,0.5)]">
        {Math.floor(displayValue)}{suffix}
      </span>
      <span className="absolute inset-0 bg-brand-gold/5 blur-[40px] rounded-full -z-10 animate-pulse" />
    </span>
  );
};

const ContentHarvestMetrics = () => {
  const deliverables = [
    { 
      label: "Hi-Fi DJ Sets", 
      value: "4", 
      period: "per month",
      icon: <Youtube className="text-brand-gold" size={24} />,
      body: "Full multi-camera sets. Broadcast-mastered audio. Uploaded to performing DJ's YouTube." 
    },
    { 
      label: "Algorithm Loops", 
      value: "16", 
      period: "per month",
      icon: <Video className="text-brand-gold" size={24} />,
      body: "High-impact recap reels, DJ highlights, and influencer lifestyle cuts. Priority Bongo energy." 
    },
    { 
      label: "Lifestyle Assets", 
      value: "28", 
      period: "per month",
      icon: <Camera className="text-brand-gold" size={24} />,
      body: "Color-graded HD photography batch covering crowd energy and product ritual." 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      {deliverables.map((item, i) => (
        <div 
          key={i} 
          className="relative group p-8 rounded-[40px] glass-tile overflow-hidden flex flex-col items-center text-center animate-float shadow-2xl"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <div className="absolute top-4 right-4 p-4 opacity-20 z-0">
            {item.icon}
          </div>
          
          <div className="relative z-10 space-y-6 flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <RollingCounter value={item.value} />
              <span className="font-headline text-xl text-brand-gold uppercase tracking-widest mt-2">
                {item.period}
              </span>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-headline text-3xl text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream text-xs leading-relaxed font-bold uppercase tracking-wider max-w-[240px] mx-auto opacity-80">
                {item.body}
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
        </div>
      ))}
    </div>
  );
};

export { ContentHarvestMetrics };
