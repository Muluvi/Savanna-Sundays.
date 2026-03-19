
"use client";

import React from 'react';
import { BrushStroke } from '@/components/brand/VisualElements';
import { Card } from '@/components/ui/card';
import { Zap, Star } from 'lucide-react';

export const StrategicOverview = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Intro Narrative */}
      <div className="space-y-6 md:space-y-8 max-w-[680px] animate-fade-in-up">
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          Savanna Sundays is not an event series. It is a systematic claim on the most social day of the week in Africa’s fastest-growing urban consumer market. By building an ecosystem of owned and sponsored activations across Nairobi’s Sunday landscape, Savanna Premium Cider transforms from a product people order into a cultural institution people belong to.
        </p>
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          Every Sunday in Nairobi, roughly 300,000 adults aged 23–35 make a choice: where to go, what to drink, who to be seen with, and what to post about it. These decisions are made on WhatsApp threads, influenced by Instagram feeds, and validated on TikTok. Right now, no single brand owns that decision moment.
        </p>
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          Savanna Sundays closes it with a dual-engine activation model. The first engine is fully owned editions—events that Savanna conceives, produces, and controls from first concept to final Instagram Story. The second engine is title sponsorships of existing Sunday events across Nairobi’s venue ecosystem, where Savanna becomes the defining visual and experiential layer of events it does not need to produce from scratch.
        </p>
      </div>

      {/* Pull Quote */}
      <div className="relative py-12 md:py-20 text-center flex items-center justify-center min-h-[200px] md:min-h-[300px] animate-fade-in-up [animation-delay:200ms]">
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-headline text-[180px] md:text-[280px] text-brand-gold opacity-[0.06] select-none pointer-events-none">
          "
        </span>
        <div className="relative z-10 max-w-3xl">
          <BrushStroke className="w-full h-auto opacity-20 -rotate-2 -translate-y-4" color="#F4C542" />
          <h3 className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-tight relative z-20">
            "When Nairobi thinks Sunday, they should think Savanna."
          </h3>
        </div>
      </div>

      {/* Narrative Part 2 */}
      <div className="space-y-6 md:space-y-8 max-w-[680px] animate-fade-in-up [animation-delay:400ms]">
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          Firefly Management approaches this assignment as a content-first, community-driven activation partner—not an events company. The distinction is critical. An events company fills a venue once and moves on. Firefly turns each Sunday into a content asset that generates 30+ days of social media material.
        </p>
        <p className="font-body text-[15px] text-brand-cream/60 leading-[1.7]">
          This document lays out the complete architecture: selecting venues, capturing content, building community, engineering demand, and scaling the operation from ignition through cultural institution status. The ambition is simple, and the cider is dry: when Nairobi thinks Sunday, Nairobi thinks Savanna.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:600ms]">
        <Card className="bg-white border-l-4 border-brand-gold p-8 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
            <Zap className="text-brand-gold" size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">Owned Editions</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Proprietary boutique events curated from top to bottom by Firefly, ensuring 100% brand alignment and data ownership.
          </p>
        </Card>
        
        <Card className="bg-white border-l-4 border-brand-teal p-8 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6">
            <Star className="text-brand-teal" size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-3 text-brand-green">Title Sponsorship</h4>
          <p className="font-body text-brand-green/70 text-sm leading-relaxed">
            Strategic alignment with existing premium properties to expand reach and cement Savanna's role as the heartbeat of Sunday culture.
          </p>
        </Card>
      </div>

      {/* Ecosystem Diagram */}
      <div className="py-8 md:py-12 flex flex-col items-center animate-fade-in-up [animation-delay:800ms]">
        <div className="section-label text-center mb-12">The Sunday Ecosystem</div>
        <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] flex items-center justify-center overflow-visible">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-gold shadow-[0_0_30px_rgba(244,197,66,0.3)] flex items-center justify-center z-20 animate-pulse-gold">
            <span className="font-headline text-brand-green text-center leading-none text-sm md:text-base">SAVANNA<br/>SUNDAYS</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
             <svg className="absolute w-full h-full animate-spin [animation-duration:30s] pointer-events-none">
               <circle cx="50%" cy="50%" r="100 md:140" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
             </svg>
             
             {[
               { label: "Owned Events", pos: "top-0 left-1/2 -translate-x-1/2" },
               { label: "Content Engine", pos: "right-0 top-1/2 -translate-y-1/2" },
               { label: "Community", pos: "bottom-0 left-1/2 -translate-x-1/2" },
               { label: "Sponsored Events", pos: "left-0 top-1/2 -translate-y-1/2" },
             ].map((node, i) => (
               <div key={i} className={`absolute ${node.pos} bg-brand-green border border-brand-gold/30 px-4 md:px-6 py-2 md:py-3 rounded-full z-30 shadow-xl`}>
                 <span className="font-body font-bold text-[8px] md:text-[10px] tracking-widest text-brand-gold uppercase">{node.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
