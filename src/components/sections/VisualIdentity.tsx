
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassWater, Mic2, ShieldCheck, CheckCircle2, Camera, Palette, Sun, Zap } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* 01: Strategic Intro */}
      <div className="max-w-3xl animate-fade-in-up">
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-brand-green/60 leading-relaxed">
          Every surface, every serve, every photograph — designed to be the most shareable activation in Nairobi.
        </p>
      </div>

      {/* 01: Visual Philosophy Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-6 bg-white border-l-4 border-brand-gold rounded-2xl flex items-center gap-5 group hover:bg-brand-gold/5 transition-all shadow-sm">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Camera size={24} />
          </div>
          <div>
            <div className="font-headline text-2xl text-brand-green leading-none uppercase">CONTENT FIRST</div>
            <div className="font-body text-[10px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">If it's not captured, it didn't happen.</div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white border-l-4 border-brand-teal rounded-2xl flex items-center gap-5 group hover:bg-brand-teal/5 transition-all shadow-sm">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Palette size={24} />
          </div>
          <div>
            <div className="font-headline text-2xl text-brand-green leading-none uppercase">PREMIUM ZONING</div>
            <div className="font-body text-[10px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">Curating every surface for the lens.</div>
          </div>
        </Card>
      </div>

      {/* 02: Visual Pull Quote (Law of Proportions) */}
      <div className="relative py-12 md:py-24 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-brand-green leading-[1.15] px-4">
            "We turn every surface into a high-value content asset."
          </h3>
          <div className="w-16 h-[2px] bg-brand-gold/30 mx-auto mt-10" />
        </div>
      </div>

      {/* 03: Physical Setup & Environment Design */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:600ms]">
        <div className="section-label">03A: Physical Activation Standards</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] space-y-4 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Sun className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-3">
              <h4 className="font-headline text-2xl text-brand-gold uppercase leading-tight">GOLDEN HOUR STAGE</h4>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                Modular backdrops with laser-cut silhouettes and warm amber LED washes engineered for natural skin tones.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-gold transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
              <GlassWater size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase leading-tight">SAVANNA BAR RAILS</h4>
            <p className="font-body text-xs text-brand-green/50 leading-relaxed">
              Dedicated variant bars (Dry, Light, Lemon, 0.0) featuring premium garnish stations and ice-cold service standards.
            </p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-teal transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase leading-tight">DRESSING STANDARDS</h4>
            <p className="font-body text-xs text-brand-green/50 leading-relaxed">
              Mixologists in branded timber-tone aprons and Vibe Hosts in cultural streetwear—the human layer of the brand.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
