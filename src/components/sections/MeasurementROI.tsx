
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Target, Users, Zap, ShoppingBag, Share2, TrendingUp, Award } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

const primaryKPIs = [
  { label: "Attendance", value: "800+ PAX", icon: <Users size={24} />, color: "gold" },
  { label: "Engagement", value: "1.2M+", icon: <Share2 size={24} />, color: "teal" },
  { label: "Velocity", value: "2.8 Units", icon: <ShoppingBag size={24} />, color: "green" },
  { label: "Harvest", value: "150+", icon: <Zap size={24} />, color: "gold" },
];

export const MeasurementROInSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">12A: Data Accountability</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Measured energy, <br/>calculated returns.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            At Firefly, if it isn't measured, it didn't happen. We move beyond vanity metrics to a rigorous data-driven framework that tracks every shilling and every vibe.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "ROI is the only vibe that matters."
            </h3>
          </div>
        </div>
      </div>

      {/* 12B: KPI Scorecard Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up [animation-delay:200ms]">
        {primaryKPIs.map((kpi, i) => (
          <Card key={i} className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex flex-col items-center text-center gap-6 hover:border-brand-gold transition-all group">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${kpi.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' : kpi.color === 'green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-gold/10 text-brand-gold'}`}>
              {kpi.icon}
            </div>
            <div className="space-y-1">
              <span className="font-body font-bold text-[10px] tracking-[2px] text-brand-teal uppercase">{kpi.label}</span>
              <div className="font-headline text-3xl md:text-5xl text-brand-green leading-none">{kpi.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* 12C: The Return Flow Visual */}
      <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up [animation-delay:400ms]">
        <Card className="w-full md:flex-1 p-12 bg-brand-green text-white text-center rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Target size={120} />
          </div>
          <div className="relative z-10 space-y-4">
            <h6 className="font-headline text-3xl md:text-4xl text-brand-gold leading-none">KWAL INVESTS</h6>
            <p className="font-body text-white/50 text-[10px] uppercase tracking-widest font-bold">Strategic Infrastructure & Media</p>
          </div>
        </Card>
        
        <div className="animate-bounce-horizontal">
           <ArrowRight className="text-brand-gold rotate-90 md:rotate-0 w-12 h-12" />
        </div>
        
        <Card className="w-full md:flex-1 p-12 bg-brand-gold text-brand-green text-center rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <TrendingUp size={120} />
          </div>
          <div className="relative z-10 space-y-4">
            <h6 className="font-headline text-3xl md:text-4xl text-brand-green leading-none">KWAL RETURNS</h6>
            <p className="font-body text-brand-green/50 text-[10px] uppercase tracking-widest font-bold">Lifetime Sales & Cultural Equity</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
