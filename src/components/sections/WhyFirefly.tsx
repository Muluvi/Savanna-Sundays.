"use client";

import React from 'react';
import Image from 'next/image';
import { BrushStroke, WaterDroplets } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GrowthRoadmapSection } from './GrowthRoadmap';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-6 md:space-y-8 py-4">
      <WaterDroplets className="opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <GrowthRoadmapSection />

        <div className="w-8 h-[1px] bg-brand-gold/20 mx-auto opacity-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start animate-fade-in-up">
          <div className="space-y-4">
            <div className="section-label">07B: The Content-First Mandate</div>
            <h4 className="font-headline text-2xl md:text-4xl text-brand-gold uppercase leading-tight">We aren't an events company.</h4>
            <p className="font-body text-xs md:text-base text-brand-cream/60 leading-relaxed">
              Firefly is a <strong>content-first activation agency</strong>. We use physical events as our primary production set to generate narrative assets.
            </p>
          </div>

          <Card className="p-6 bg-white/5 border border-white/10 rounded-[24px] space-y-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Zap className="text-brand-gold" size={24} />
              <h5 className="font-headline text-xl text-white uppercase leading-none">The Value Shift</h5>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-brand-gold/10 rounded-xl border-l-2 border-brand-gold">
                <span className="font-body text-[8px] uppercase font-bold tracking-[2px] text-brand-gold block mb-1">Traditional View</span>
                <p className="text-white/60 text-[11px] italic">"Let's fill the room and take photos."</p>
              </div>
              <div className="p-3 bg-brand-teal/20 rounded-xl border-l-2 border-brand-teal">
                <span className="font-body text-[8px] uppercase font-bold tracking-[2px] text-brand-teal block mb-1">Firefly View</span>
                <p className="text-white text-[11px] font-bold">"Let's build a set that produces 150+ assets."</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-fade-in-up [animation-delay:400ms]">
           {[
             { label: "Content Yield", desc: "Competitor-proof narrative assets.", icon: <Award size={18} /> },
             { label: "Community Layer", desc: "Organic distribution at scale.", icon: <CheckCircle2 size={18} /> },
             { label: "Data Mastery", desc: "Targetable CRM infrastructure.", icon: <ShieldCheck size={18} /> },
           ].map((moat, i) => (
             <Card key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-2 group hover:bg-white/10 transition-all">
                <div className="text-brand-gold">{moat.icon}</div>
                <div>
                  <h4 className="font-headline text-base text-white uppercase mb-1">{moat.label}</h4>
                  <p className="font-body text-[8px] text-brand-cream/40 font-bold uppercase tracking-widest">{moat.desc}</p>
                </div>
             </Card>
           ))}
        </div>

        {/* 07D: THE EMOTIONAL CLIMAX - More Compact */}
        <div className="relative py-8 md:py-12 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:600ms]">
          <div className="relative z-10 max-w-4xl text-center">
            <BrushStroke className="w-32 h-auto opacity-20 -rotate-2 -translate-y-4 mx-auto" color="#F4C542" />
            <h3 className="font-serif italic text-2xl md:text-5xl text-brand-gold leading-tight px-4">
              "When Nairobi thinks Sunday, they should think Savanna."
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 pt-4 pb-8 animate-fade-in-up [animation-delay:800ms]">
          <div className="text-center space-y-2">
            <h4 className="font-headline text-3xl md:text-5xl text-white uppercase tracking-tighter">The Cider is Dry.</h4>
            <p className="font-serif italic text-xl md:text-2xl text-brand-gold">
              "Together, we define the next decade."
            </p>
          </div>

          <button className="btn-primary flex items-center gap-4 scale-100 md:scale-110 transition-all shadow-[0_0_30px_rgba(244,197,66,0.1)]">
            <span className="font-headline text-lg tracking-widest uppercase">LET'S OWN SUNDAY</span>
            <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2">
              <ArrowRight className="text-brand-green w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
