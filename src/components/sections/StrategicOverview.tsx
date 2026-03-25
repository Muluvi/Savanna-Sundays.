"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, MessageSquare, Zap, Star } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const StrategicOverview = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* 01: Market Intelligence Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-tile p-6 flex items-center gap-5 group">
          <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Users size={28} />
          </div>
          <div>
            <div className="font-headline text-4xl text-brand-gold leading-none">300,000+</div>
            <div className="font-body text-[10px] text-brand-cream/40 uppercase tracking-[3px] font-bold mt-1">Weekly Decision Makers</div>
          </div>
        </Card>
        
        <Card className="glass-tile p-6 flex items-center gap-5 group">
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare size={28} />
          </div>
          <div>
            <div className="font-headline text-4xl text-brand-gold leading-none">WhatsApp First</div>
            <div className="font-body text-[10px] text-brand-cream/40 uppercase tracking-[3px] font-bold mt-1">Primary Social Engine</div>
          </div>
        </Card>
      </div>

      {/* 02: Visual Pull Quote */}
      <div className="relative py-8 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-headline text-[150px] md:text-[250px] text-brand-gold/5 select-none leading-none">VISION</span>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <BrushStroke className="w-48 h-auto opacity-20 -rotate-2 -translate-y-4 mx-auto" color="#F4C542" />
          <h3 className="font-serif italic text-2xl md:text-5xl text-brand-gold leading-tight px-4">
            "When Nairobi thinks Sunday, they should think Savanna."
          </h3>
        </div>
      </div>

      {/* 03: The Dual Engine Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-tile p-8 group border-l-4 border-l-brand-gold">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-green transition-all">
            <Zap size={24} />
          </div>
          <h4 className="font-headline text-3xl mb-2 text-brand-gold uppercase tracking-tight">OWNED EDITIONS</h4>
          <p className="font-body text-brand-cream/70 text-sm leading-relaxed">
            Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
          </p>
        </Card>
        
        <Card className="glass-tile p-8 group border-l-4 border-l-brand-teal">
          <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
            <Star size={24} />
          </div>
          <h4 className="font-headline text-3xl mb-2 text-brand-gold uppercase tracking-tight">TITLE SPONSORSHIP</h4>
          <p className="font-body text-brand-cream/70 text-sm leading-relaxed">
            Strategic reach. Mapping Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
          </p>
        </Card>
      </div>
    </div>
  );
};
