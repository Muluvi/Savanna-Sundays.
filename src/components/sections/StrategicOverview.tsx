
"use client";

import React from 'react';
import { BrushStroke } from '@/components/brand/VisualElements';
import { Card } from '@/components/ui/card';
import { Zap, Star, Users, MessageSquare } from 'lucide-react';

export const StrategicOverview = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Narrative Intro - Shortened */}
      <div className="space-y-6 md:space-y-8 max-w-[680px] animate-fade-in-up">
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          Savanna Sundays is a systematic claim on Nairobi’s most social day. By building an ecosystem of owned and sponsored activations, we transform Savanna from a choice into a cultural institution.
        </p>
      </div>

      {/* Market Opportunity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream">
          <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">300,000+</div>
            <div className="font-body text-[10px] uppercase tracking-widest opacity-40">Weekly Target Audience</div>
          </div>
        </Card>
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream">
          <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
            <MessageSquare size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">WhatsApp First</div>
            <div className="font-body text-[10px] uppercase tracking-widest opacity-40">Primary Decision Engine</div>
          </div>
        </Card>
      </div>

      {/* Visual Pull Quote - Law of Proportions */}
      <div className="relative py-12 md:py-20 text-center flex items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-headline text-[150px] md:text-[250px] text-brand-gold opacity-[0.05] select-none pointer-events-none">
          VISION
        </span>
        <div className="relative z-10 max-w-3xl">
          <BrushStroke className="w-full h-auto opacity-10 -rotate-1 -translate-y-4" color="#F4C542" />
          <h3 className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-tight relative z-20">
            "When Nairobi thinks Sunday, they should think Savanna."
          </h3>
        </div>
      </div>

      {/* The Dual Engine Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:600ms]">
        <Card className="bg-white border-l-4 border-brand-gold p-8 group hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6">
            <Zap size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">OWNED EDITIONS</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
          </p>
        </Card>
        
        <Card className="bg-white border-l-4 border-brand-teal p-8 group hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
            <Star size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">TITLE SPONSORSHIP</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Strategic reach. Mapping Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
          </p>
        </Card>
      </div>

      {/* Ecosystem Diagram */}
      <div className="py-8 md:py-12 flex flex-col items-center animate-fade-in-up [animation-delay:800ms]">
        <div className="section-label text-center mb-12">The Growth Ecosystem</div>
        <div className="relative w-full max-w-3xl h-[280px] md:h-[350px] flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-gold shadow-[0_0_40px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 animate-pulse-gold">
            <span className="font-headline text-brand-green text-center leading-none text-sm md:text-base">SAVANNA<br/>SUNDAYS</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
             <svg className="absolute w-full h-full animate-spin [animation-duration:40s] pointer-events-none opacity-20">
               <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="8 8" />
             </svg>
             
             {[
               { label: "Content", pos: "top-0 left-1/2 -translate-x-1/2" },
               { label: "Community", pos: "right-0 top-1/2 -translate-y-1/2" },
               { label: "Activations", pos: "bottom-0 left-1/2 -translate-x-1/2" },
               { label: "Data", pos: "left-0 top-1/2 -translate-y-1/2" },
             ].map((node, i) => (
               <div key={i} className={`absolute ${node.pos} bg-brand-green border border-brand-gold/30 px-5 py-2 rounded-full z-30 shadow-2xl`}>
                 <span className="font-body font-bold text-[8px] md:text-[9px] tracking-[3px] text-brand-gold uppercase">{node.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
