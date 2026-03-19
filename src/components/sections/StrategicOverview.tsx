
"use client";

import React from 'react';
import { BrushStroke } from '@/components/brand/VisualElements';
import { Card } from '@/components/ui/card';
import { Zap, Star, Users, MessageSquare } from 'lucide-react';

export const StrategicOverview = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* 01: Market Intelligence Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">300,000+</div>
            <div className="font-body text-[10px] uppercase tracking-[3px] opacity-40 mt-1">Weekly Decision Makers</div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">WhatsApp First</div>
            <div className="font-body text-[10px] uppercase tracking-[3px] opacity-40 mt-1">Primary Social Engine</div>
          </div>
        </Card>
      </div>

      {/* 02: Visual Pull Quote (Law of Proportions) */}
      <div className="relative py-12 md:py-24 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:200ms]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-headline text-[120px] md:text-[220px] text-brand-gold opacity-[0.03] select-none leading-none">
            VISION
          </span>
        </div>
        
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-48 h-auto opacity-20 -rotate-2 -translate-y-6 mx-auto" color="#F4C542" />
          <h3 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-brand-gold leading-[1.15] px-4">
            "When Nairobi thinks Sunday, they should think Savanna."
          </h3>
          <div className="w-16 h-[2px] bg-brand-gold/30 mx-auto mt-10" />
        </div>
      </div>

      {/* 03: The Dual Engine Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:400ms]">
        <Card className="bg-white border-l-4 border-brand-gold p-8 group hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
            <Zap size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">OWNED EDITIONS</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
          </p>
        </Card>
        
        <Card className="bg-white border-l-4 border-brand-teal p-8 group hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
            <Star size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">TITLE SPONSORSHIP</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Strategic reach. Mapping Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
          </p>
        </Card>
      </div>

      {/* 04: The Growth Ecosystem Visual */}
      <div className="py-12 flex flex-col items-center animate-fade-in-up [animation-delay:600ms]">
        <div className="section-label text-center mb-16">The Growth Flywheel</div>
        
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
          {/* Pulsing Core */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-gold shadow-[0_0_50px_rgba(244,197,66,0.4)] flex items-center justify-center z-20 animate-pulse-gold">
            <div className="text-center font-headline text-brand-green leading-none">
              <span className="text-xs tracking-widest block mb-1">THE</span>
              <span className="text-xl md:text-2xl">CORE</span>
            </div>
          </div>

          {/* Rotating Orbit */}
          <div className="absolute inset-0 animate-spin [animation-duration:30s] pointer-events-none">
            <svg className="w-full h-full opacity-20">
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="10 10" />
            </svg>
            
            {[
              { label: "Content", angle: 0 },
              { label: "Community", angle: 90 },
              { label: "Experience", angle: 180 },
              { label: "Data", angle: 270 },
            ].map((node, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${node.angle}deg) translateY(-42%) rotate(-${node.angle}deg)` }}
              >
                <div className="bg-brand-green border border-brand-gold/30 px-5 py-2 rounded-full shadow-2xl">
                  <span className="font-body font-bold text-[8px] md:text-[9px] tracking-[4px] text-brand-gold uppercase">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
