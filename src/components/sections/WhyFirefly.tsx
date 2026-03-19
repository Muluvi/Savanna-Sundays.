
"use client";

import React from 'react';
import Image from 'next/image';
import { WaterDroplets } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Zap, Target, ShieldCheck, CheckCircle2, TrendingUp, Layers, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-12 md:space-y-24 py-8 md:py-12">
      <WaterDroplets />
      
      <div className="relative z-10 space-y-12 md:space-y-24">
        {/* Strategic Pull Quote */}
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h3 className="font-serif italic text-[clamp(20px,4vw,46px)] leading-tight text-white animate-fade-in-up">
            "<span className="text-brand-gold">Savanna Sundays</span> needs a partner who builds communities, not campaigns — and content engines, not recaps."
          </h3>
        </div>

        {/* 14A: Content-First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 font-body text-sm md:text-base text-brand-cream/60">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-gold border-l-[3px] border-brand-gold pl-4 uppercase">
              14A: Content-First Mandate
            </h4>
            <p className="leading-relaxed">
              Firefly is not an events company that does social media. We are a **content-first activation agency** that uses events as our primary production set. 
            </p>
          </div>

          <Card className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] space-y-4 md:space-y-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <Zap className="text-brand-gold" size={24} />
              <h5 className="font-headline text-xl md:text-2xl text-white uppercase">The Shift</h5>
            </div>
            <div className="space-y-3">
              <div className="p-3 md:p-4 bg-brand-gold/10 rounded-xl border-l-4 border-brand-gold">
                <span className="font-body text-[8px] uppercase font-bold tracking-widest text-brand-gold block">Traditional View</span>
                <p className="text-white/60 text-xs italic">"Let's fill the room and take some photos."</p>
              </div>
              <div className="p-3 md:p-4 bg-brand-teal/10 rounded-xl border-l-4 border-brand-teal">
                <span className="font-body text-[8px] uppercase font-bold tracking-widest text-brand-teal block">Firefly View</span>
                <p className="text-white text-xs font-bold">"Let's build a set that produces 150+ high-fidelity assets."</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 14D: The Moat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 font-body text-sm md:text-base text-brand-cream/60">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-gold border-l-[3px] border-brand-gold pl-4 uppercase">
              14D: The Strategic Moat
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                "High-Yield Content Production: Narrative assets competitors can't replicate.",
                "Deep Community Building: Organic distribution layer.",
                "Proprietary Data Systems: Converting vibes into targeting assets."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start">
                  <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} />
                  <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[240px] md:h-[320px] bg-white/5 rounded-[24px] md:rounded-[32px] border border-white/10 flex flex-col items-center justify-center p-6 md:p-8 text-center shadow-inner group overflow-hidden">
             <ShieldCheck className="text-brand-gold mb-4 md:mb-6 w-12 h-12 md:w-16 md:h-16" />
             <h5 className="font-headline text-2xl md:text-3xl text-white uppercase">Integrated Moat</h5>
          </div>
        </div>

        {/* Closing Action */}
        <div className="flex flex-col items-center gap-8 md:gap-12 pt-8 md:pt-12">
          <div className="max-w-2xl mx-auto text-center space-y-4 md:space-y-6 mb-4 md:mb-8">
            <h4 className="font-headline text-2xl md:text-4xl text-white uppercase tracking-wider">The Cider is Dry.</h4>
            <p className="font-serif italic text-lg md:text-2xl text-brand-gold leading-relaxed">
              "Together, we will define the next decade of Nairobi's social life."
            </p>
          </div>

          <div className="flex justify-center pb-8 md:pb-12">
             <button className="btn-primary flex items-center gap-4 md:gap-6 group scale-105 md:scale-110 hover:scale-115 transition-all shadow-2xl">
               <span className="font-headline text-lg md:text-xl tracking-wider uppercase">LET'S OWN SUNDAY</span>
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <ArrowRight className="text-brand-green w-[18px] h-[18px] md:w-5 md:h-5" />
               </div>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
