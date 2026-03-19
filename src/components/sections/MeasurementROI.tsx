
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Wallet, Target, Users, Zap, ShoppingBag, Share2 } from 'lucide-react';

const primaryKPIs = [
  { label: "Attendance", value: "800+ PAX", icon: <Users size={18} /> },
  { label: "Engagement", value: "1.2M+", icon: <Share2 size={18} /> },
  { label: "Sales Velocity", value: "2.8 Units", icon: <ShoppingBag size={18} /> },
  { label: "Asset Harvest", value: "150+", icon: <Zap size={18} /> },
];

export const MeasurementROInSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          At Firefly, if it isn't measured, it didn't happen. We move beyond "vanity metrics" to a rigorous data-driven accountability framework.
        </p>
      </div>

      {/* 12A: KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 animate-fade-in-up">
        {primaryKPIs.map((kpi, i) => (
          <Card key={i} className="p-6 md:p-8 bg-white border border-brand-green/5 rounded-[24px] md:rounded-[32px] flex flex-col items-center text-center gap-3 md:gap-6 hover:border-brand-gold transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              {kpi.icon}
            </div>
            <div className="space-y-1">
              <span className="font-body font-bold text-[8px] md:text-[10px] tracking-[2px] text-brand-teal uppercase">{kpi.label}</span>
              <div className="font-headline text-2xl md:text-4xl text-brand-green leading-none">{kpi.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* ROI Flow */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-12">
        <Card className="w-full md:flex-1 p-8 md:p-10 bg-brand-green text-white text-center rounded-[24px] md:rounded-[30px] shadow-lg">
          <Target className="mx-auto mb-4 text-brand-gold w-6 h-6 md:w-8 md:h-8" />
          <h6 className="font-headline text-2xl md:text-3xl mb-1">KWAL INVESTS</h6>
          <p className="font-body text-white/50 text-[10px] uppercase tracking-widest">Strategy & Media</p>
        </Card>
        
        <ArrowRight className="text-brand-gold rotate-90 md:rotate-0 w-8 h-8 md:w-10 md:h-10" />
        
        <Card className="w-full md:flex-1 p-8 md:p-10 bg-brand-gold text-brand-green text-center rounded-[24px] md:rounded-[30px] shadow-lg">
          <Wallet className="mx-auto mb-4 text-brand-green w-6 h-6 md:w-8 md:h-8" />
          <h6 className="font-headline text-2xl md:text-3xl mb-1">KWAL RETURNS</h6>
          <p className="font-body text-brand-green/50 text-[10px] uppercase tracking-widest">Sales & Equity</p>
        </Card>
      </div>
    </div>
  );
};
