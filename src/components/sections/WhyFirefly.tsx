"use client";

import React from 'react';
import { WaterDroplets, BrushStroke } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cl } from '@/lib/cloudinary';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-6 md:space-y-8 py-4">
      <WaterDroplets className="opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            <div className="section-label">05 — Why Firefly</div>
            <h4 className="font-headline text-2xl md:text-4xl text-brand-gold uppercase leading-tight">We aren't an events company.</h4>
            <p className="font-body text-xs md:text-base text-brand-text-muted leading-relaxed">
              Firefly is a <strong>content-first activation agency</strong>. We use physical events as our primary production set to generate narrative assets.
            </p>
          </div>

          <Card className="p-4 bg-white/5 border border-white/10 rounded-[24px] space-y-4 backdrop-blur-md group hover:border-brand-gold transition-all">
            <div className="flex items-center gap-3">
              <Zap className="text-brand-gold group-hover:animate-pulse" size={24} />
              <h5 className="font-headline text-xl text-white uppercase leading-none">The Value Shift</h5>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-brand-gold/10 rounded-xl border-l-2 border-brand-gold group-hover:translate-x-1 transition-transform">
                <span className="font-body text-[8px] uppercase font-bold tracking-[2px] text-brand-gold block mb-1">Traditional View</span>
                <p className="text-brand-text-muted text-[11px] italic">"Let's fill the room and take photos."</p>
              </div>
              <div className="p-3 bg-brand-teal/20 rounded-xl border-l-2 border-brand-teal group-hover:translate-x-1 transition-transform delay-75">
                <span className="font-body text-[8px] uppercase font-bold tracking-[2px] text-brand-teal block mb-1">Firefly View</span>
                <p className="text-brand-cream text-[11px] font-bold">"Let's build a set that produces 150+ assets."</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Dynamic Flywheel Node */}
        <div className="py-8 flex flex-col items-center">
          <div className="section-label text-center mb-12">05B — The Growth Flywheel</div>
          
          <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-gold shadow-[0_0_50px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 animate-pulse-gold relative">
              <div className="text-center font-headline text-brand-green leading-none">
                <span className="text-[10px] tracking-widest block mb-1">THE</span>
                <span className="text-lg md:text-xl">CORE</span>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
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
                  <div className="bg-brand-green border border-brand-gold/30 px-4 py-1.5 rounded-full shadow-2xl">
                    <span className="font-body font-bold text-[8px] tracking-[3px] text-brand-gold uppercase">{node.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
           {[
             { label: "Content That Works Hard", desc: "Competitor-proof narrative assets.", icon: <Award size={18} /> },
             { label: "Community Layer", desc: "Organic distribution at scale.", icon: <CheckCircle2 size={18} /> },
             { label: "Data Mastery", desc: "Targetable CRM infrastructure.", icon: <ShieldCheck size={18} /> },
           ].map((moat, i) => (
             <Card key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-2 group hover:bg-white/10 transition-all">
                <div className="text-brand-gold group-hover:scale-110 transition-transform">{moat.icon}</div>
                <div>
                  <h4 className="font-headline text-base text-white uppercase mb-1">{moat.label}</h4>
                  <p className="font-body text-[8px] text-brand-text-muted font-bold uppercase tracking-widest">{moat.desc}</p>
                </div>
             </Card>
           ))}
        </div>

        <div className="relative py-8 md:py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 max-w-4xl text-center">
            <BrushStroke className="w-32 h-auto opacity-20 -rotate-2 -translate-y-4 mx-auto" color="#F4C542" />
            <h3 className="font-serif italic text-2xl md:text-5xl text-brand-gold leading-tight px-4">
              "When Nairobi thinks Sunday, they should think Savanna."
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 pt-4 pb-8">
          <div className="text-center space-y-2">
            <h4 className="font-headline text-3xl md:text-5xl text-white uppercase tracking-tighter">The Cider is Dry.</h4>
            <p className="font-serif italic text-xl md:text-2xl text-brand-gold">
              "Together, we define the next decade."
            </p>
          </div>

          <button className="btn-primary flex items-center gap-4 scale-100 md:scale-110 transition-all shadow-[0_0_30px_rgba(244,197,66,0.1)] group animate-glow-pulse">
            <span className="font-headline text-lg tracking-widest uppercase">LET'S OWN SUNDAY</span>
            <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
              <ArrowRight className="text-brand-green w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
