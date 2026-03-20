"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Camera, Palette, Sun, GlassWater, Zap } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="max-w-3xl animate-fade-in-up">
        <p className="font-serif italic text-lg md:text-xl text-brand-green/60 leading-relaxed">
          Every surface, every serve, every photograph — designed to be the most shareable activation in Nairobi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-4 bg-white border-l-4 border-brand-gold rounded-xl flex items-center gap-4 group hover:bg-brand-gold/5 transition-all shadow-sm">
          <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
            <Camera size={20} />
          </div>
          <div>
            <div className="font-headline text-xl text-brand-green leading-none uppercase">CONTENT FIRST</div>
            <div className="font-body text-[8px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">If it's not captured, it didn't happen.</div>
          </div>
        </Card>
        
        <Card className="p-4 bg-white border-l-4 border-brand-teal rounded-xl flex items-center gap-4 group hover:bg-brand-teal/5 transition-all shadow-sm">
          <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
            <Palette size={20} />
          </div>
          <div>
            <div className="font-headline text-xl text-brand-green leading-none uppercase">PREMIUM ZONING</div>
            <div className="font-body text-[8px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">Curating every surface for the lens.</div>
          </div>
        </Card>
      </div>

      <div className="relative py-6 md:py-8 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <div className="relative z-10 max-w-4xl text-center">
          <h3 className="font-serif italic text-xl md:text-3xl text-brand-green leading-snug px-4">
            "We turn every surface into a high-value content asset."
          </h3>
        </div>
      </div>

      <div className="space-y-4 animate-fade-in-up [animation-delay:600ms]">
        <div className="section-label">03A: Physical Activation Standards</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="p-6 bg-brand-green text-white border-none rounded-[24px] space-y-3 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Sun className="w-16 h-16" />
            </div>
            <div className="relative z-10 space-y-2">
              <h4 className="font-headline text-xl text-brand-gold uppercase leading-tight">GOLDEN HOUR STAGE</h4>
              <p className="font-body text-[10px] text-white/60 leading-relaxed">
                Custom-engineered modular units utilizing sustainable light-oak timber and matte-black structural steel. Integrated 3200K warm-amber LED arrays are specifically calibrated to enhance organic skin tones, creating a "permanent golden hour" optimized for high-engagement mobile photography and professional editorial capture.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white border border-brand-green/5 rounded-[24px] space-y-3 hover:border-brand-gold transition-all shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <GlassWater size={20} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-xl text-brand-green uppercase leading-tight">SAVANNA BARS</h4>
              <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">
                High-throughput modular bar systems featuring dedicated service bays for Dry, Light, Lemon, and 0.0 variants. Each station includes a bespoke "Botanical Architecture" unit with chilled compartments for premium garnishes (dehydrated citrus, fresh rosemary) to ensure every serve is a brand-aligned visual asset.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white border border-brand-green/5 rounded-[24px] space-y-3 hover:border-brand-teal transition-all shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-xl text-brand-green uppercase leading-tight">UNIFORM CODE</h4>
              <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">
                A shift from traditional promo-wear to high-concept cultural streetwear. Mixologists in heavyweight canvas utility aprons in timber tones; Vibe Hosts in custom-tailored linen-blend coordinates that reflect Nairobi's contemporary premium aesthetic, ensuring staff are indistinguishable from high-value guests.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
