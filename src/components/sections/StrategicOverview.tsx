
"use client";

import React from 'react';
import { BrushStroke } from '@/components/brand/VisualElements';
import { Card } from '@/components/ui/card';
import { Zap, Star, RefreshCw } from 'lucide-react';

export const StrategicOverview = () => {
  return (
    <div className="space-y-20">
      {/* Pull Quote */}
      <div className="relative py-20 text-center flex items-center justify-center min-h-[400px]">
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-headline text-[280px] text-brand-gold opacity-[0.06] select-none pointer-events-none">
          "
        </span>
        <div className="relative z-10 max-w-3xl">
          <BrushStroke className="w-full h-auto opacity-20 -rotate-2 -translate-y-4" color="#F4C542" />
          <h3 className="font-serif italic text-4xl md:text-5xl text-brand-gold leading-tight relative z-20">
            "When Nairobi thinks Sunday, they should think Savanna."
          </h3>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white border-l-4 border-brand-gold p-8 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
            <Zap className="text-brand-gold" size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">Owned Editions</h4>
          <p className="font-body text-brand-green/70 leading-relaxed">
            Proprietary boutique events curated from top to bottom by Firefly, ensuring 100% brand alignment and data ownership.
          </p>
        </Card>
        
        <Card className="bg-white border-l-4 border-brand-teal p-8 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6">
            <Star className="text-brand-teal" size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">Title Sponsorship</h4>
          <p className="font-body text-brand-green/70 leading-relaxed">
            Strategic alignment with existing premium properties to expand reach and cement Savanna's role as the heartbeat of Sunday culture.
          </p>
        </Card>
      </div>

      {/* Ecosystem Diagram */}
      <div className="py-12 flex flex-col items-center">
        <div className="section-label text-center mb-12">The Sunday Ecosystem</div>
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center overflow-visible">
          {/* Central Hub */}
          <div className="w-32 h-32 rounded-full bg-brand-gold shadow-[0_0_30px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 animate-pulse-gold">
            <span className="font-headline text-brand-green text-center leading-none">SAVANNA<br/>SUNDAYS</span>
          </div>

          {/* Orbiting Nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
             <svg className="absolute w-full h-full animate-spin [animation-duration:30s] pointer-events-none">
               <circle cx="50%" cy="50%" r="140" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
             </svg>
             
             {/* Nodes */}
             {[
               { label: "Owned Events", pos: "top-0 left-1/2 -translate-x-1/2", delay: "0s" },
               { label: "Content Engine", pos: "right-0 top-1/2 -translate-y-1/2", delay: "1s" },
               { label: "Community", pos: "bottom-0 left-1/2 -translate-x-1/2", delay: "2s" },
               { label: "Sponsored Events", pos: "left-0 top-1/2 -translate-y-1/2", delay: "3s" },
             ].map((node, i) => (
               <div key={i} className={`absolute ${node.pos} bg-brand-green border border-brand-gold/30 px-6 py-3 rounded-full z-30 shadow-xl`}>
                 <span className="font-body font-bold text-[10px] tracking-widest text-brand-gold uppercase">{node.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
