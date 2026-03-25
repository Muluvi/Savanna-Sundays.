
'use client';

import React from 'react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

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
              <AnimatedCounter 
                value={item.value} 
                className="font-headline text-4xl md:text-5xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_10px_rgba(244,197,66,0.3)]"
              />
              <span className="font-headline text-xs text-brand-gold uppercase tracking-[4px] mt-0.5">
                {item.period}
              </span>
            </div>
            
            <div className="space-y-1">
              <h5 className="font-headline text-xl text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-brand-cream text-[9px] leading-relaxed font-bold uppercase tracking-[4px] max-w-[180px] mx-auto opacity-60">
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
