
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users, Zap, ShoppingBag, Share2 } from 'lucide-react';

const Counter = ({ value, prefix = "", suffix = "" }: { value: string, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ''));
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;
    
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuad = (t: number) => t * (2 - t);
      const current = easeOutQuad(progress) * target;
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        hasLoaded.current = true;
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  const formatted = displayValue.toLocaleString(undefined, { 
    maximumFractionDigits: value.includes('.') ? 1 : 0 
  });

  return <span>{prefix}{formatted}{suffix}</span>;
};

const primaryKPIs = [
  { label: "Attendance", value: "800", suffix: "+ PAX", icon: <Users size={18} />, color: "gold" },
  { label: "Engagement", value: "1.2", suffix: "M+", icon: <Share2 size={18} />, color: "teal" },
  { label: "Velocity", value: "2.8", suffix: " Units", icon: <ShoppingBag size={18} />, color: "green" },
  { label: "Harvest", value: "150", suffix: "+", icon: <Zap size={18} />, color: "gold" },
];

export const MeasurementROInSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">06C: Data Accountability</div>
          <h3 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">
            Measured energy, <br/>calculated returns.
          </h3>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            At Firefly, we track every shilling and every vibe through a rigorous data-driven framework.
          </p>
        </div>
        
        <div className="py-6 flex flex-col items-center justify-center">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4 text-center">
            "ROI is the only vibe that matters."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 animate-fade-in-up [animation-delay:200ms]">
        {primaryKPIs.map((kpi, i) => (
          <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl flex flex-col items-center text-center gap-3 hover:border-brand-gold transition-all group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${kpi.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' : kpi.color === 'green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-gold/10 text-brand-gold'}`}>
              {kpi.icon}
            </div>
            <div className="space-y-0.5">
              <span className="font-body font-bold text-[8px] tracking-1px text-brand-teal uppercase">{kpi.label}</span>
              <div className="font-headline text-xl text-brand-green leading-none">
                <Counter value={kpi.value} suffix={kpi.suffix} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 06D: The Return Flow */}
      <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up [animation-delay:400ms]">
        <Card className="w-full md:flex-1 p-6 bg-brand-green text-white text-center rounded-[24px] shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform">
          <div className="relative z-10 space-y-2">
            <h6 className="font-headline text-xl text-brand-gold leading-none">KWAL INVESTS</h6>
            <p className="font-body text-white/50 text-[8px] uppercase tracking-widest font-bold">Infrastructure & Media</p>
          </div>
        </Card>
        
        <div className="animate-pulse">
           <ArrowRight className="text-brand-gold w-8 h-8 rotate-90 md:rotate-0" />
        </div>
        
        <Card className="w-full md:flex-1 p-6 bg-brand-gold text-brand-green text-center rounded-[24px] shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform">
          <div className="relative z-10 space-y-2">
            <h6 className="font-headline text-xl text-brand-green leading-none">KWAL RETURNS</h6>
            <p className="font-body text-brand-green/50 text-[8px] uppercase tracking-widest font-bold">Sales & Equity</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
