'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Video, Camera, Youtube } from 'lucide-react';

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
      <span className="font-headline text-6xl md:text-8xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(244,197,66,0.4)]">
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
      icon: <Youtube className="text-brand-gold" size={24} />,
      body: "Full multi-camera sets. Broadcast-mastered audio. Bongo-led foundations." 
    },
    { 
      label: "Algorithm Loops", 
      value: "16", 
      period: "per month",
      icon: <Video className="text-brand-gold" size={24} />,
      body: "High-impact recap reels, DJ highlights, and lifestyle cuts. Genre-fluid energy." 
    },
    { 
      label: "Lifestyle Assets", 
      value: "28", 
      period: "per month",
      icon: <Camera className="text-brand-gold" size={24} />,
      body: "Color-graded HD photography batch covering crowd energy and brand ritual." 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
      {deliverables.map((item, i) => (
        <div 
          key={i} 
          className="relative group p-6 rounded-[32px] glass-tile overflow-hidden flex flex-col items-center text-center animate-float shadow-xl"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <div className="absolute top-4 right-4 p-2 opacity-40 z-0">
            {item.icon}
          </div>
          
          <div className="relative z-10 space-y-4 flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <RollingCounter value={item.value} />
              <span className="font-headline text-lg text-brand-gold uppercase tracking-widest mt-1">
                {item.period}
              </span>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-headline text-2xl text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream text-[10px] leading-relaxed font-bold uppercase tracking-wider max-w-[200px] mx-auto opacity-70">
                {item.body}
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
        </div>
      ))}
    </div>
  );
};

export { ContentHarvestMetrics };
