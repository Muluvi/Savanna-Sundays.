
"use client";

import React from 'react';
import Image from 'next/image';
import { WaterDroplets } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-12 md:space-y-24 py-8 md:py-12">
      <WaterDroplets className="opacity-10" />
      
      <div className="relative z-10 space-y-16 md:space-y-32">
        {/* 14A: Strategic Pull Quote - Law of Proportions */}
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
           <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mb-12" />
          <h3 className="font-serif italic text-[clamp(24px,5vw,56px)] leading-tight text-white px-6">
            "Savanna Sundays needs a partner who builds <span className="text-brand-gold">communities</span>, not campaigns — and <span className="text-brand-gold">content engines</span>, not recaps."
          </h3>
          <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mt-12" />
        </div>

        {/* 14B: The Firefly Shift - Visual Aids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in-up [animation-delay:200ms]">
          <div className="space-y-6">
            <div className="section-label">14B: The Content-First Mandate</div>
            <h4 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase leading-tight">We aren't an events company.</h4>
            <p className="font-body text-sm md:text-lg text-brand-cream/60 leading-relaxed">
              Firefly is a <strong>content-first activation agency</strong>. We use physical events as our primary production set to generate the narrative assets that define premium culture.
            </p>
          </div>

          <Card className="p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-8 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-4">
              <Zap className="text-brand-gold" size={32} />
              <h5 className="font-headline text-3xl text-white uppercase">The Value Shift</h5>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-brand-gold/10 rounded-2xl border-l-4 border-brand-gold">
                <span className="font-body text-[10px] uppercase font-bold tracking-[3px] text-brand-gold block mb-1">Traditional View</span>
                <p className="text-white/60 text-sm italic">"Let's fill the room and take some photos."</p>
              </div>
              <div className="p-5 bg-brand-teal/20 rounded-2xl border-l-4 border-brand-teal">
                <span className="font-body text-[10px] uppercase font-bold tracking-[3px] text-brand-teal block mb-1">Firefly View</span>
                <p className="text-white text-sm font-bold">"Let's build a set that produces 150+ narrative assets."</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 14C: The Moat Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:400ms]">
           {[
             { label: "Content Yield", desc: "Competitor-proof narrative assets.", icon: <Award /> },
             { label: "Community Layer", desc: "Organic distribution at scale.", icon: <CheckCircle2 /> },
             { label: "Data Mastery", desc: "Converting vibes into targetable CRM.", icon: <ShieldCheck /> },
           ].map((moat, i) => (
             <Card key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all">
                <div className="text-brand-gold group-hover:scale-110 transition-transform">{moat.icon}</div>
                <div>
                  <h4 className="font-headline text-xl text-white uppercase mb-1">{moat.label}</h4>
                  <p className="font-body text-xs text-brand-cream/40">{moat.desc}</p>
                </div>
             </Card>
           ))}
        </div>

        {/* 14D: The Final Closure */}
        <div className="flex flex-col items-center gap-12 pt-16 animate-fade-in-up [animation-delay:600ms]">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h4 className="font-headline text-4xl md:text-6xl text-white uppercase tracking-tighter">The Cider is Dry.</h4>
            <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-relaxed">
              "Together, we will define the next decade of Nairobi's social life."
            </p>
          </div>

          <div className="flex justify-center pb-20">
             <button className="btn-primary flex items-center gap-6 group scale-110 md:scale-125 transition-all shadow-[0_0_50px_rgba(244,197,66,0.2)]">
               <span className="font-headline text-xl md:text-2xl tracking-widest uppercase">LET'S OWN SUNDAY</span>
               <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <ArrowRight className="text-brand-green w-6 h-6" />
               </div>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
