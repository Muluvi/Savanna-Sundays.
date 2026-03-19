
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Sun, Sunset, Moon, Star, Mic2, Palette, Smile, CheckCircle2, Clock, Zap, Coffee, Disc, Sparkles, MessageSquare, Shirt, Gavel, Radio } from 'lucide-react';
import Image from 'next/image';

const labels = [
  { name: "Kunye Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203530/Kunye_Records_r4ecqg.png", special: true },
  { name: "Descendants Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203532/Descendants_Rec_yoghrn.jpg" },
  { name: "Groove Cartel SA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Groove_Cartel_SA_wlwymi.png" },
  { name: "Sondela Recordings", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/SondeLa_Recordings_egodlz.png" },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Music isn't background noise; it's the architecture of the vibe. We curate a sonic narrative that reinforces Savanna’s premium, crisp positioning.
        </p>
      </div>

      {/* 7B: The Energy Progression */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          7B: Energy Progression
        </h3>

        <div className="space-y-3 md:space-y-4">
          <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center gap-4 md:gap-6 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-teal/10 text-brand-teal flex flex-col items-center justify-center shrink-0">
              <Coffee className="w-[18px] h-[18px] md:w-5 md:h-5" />
              <span className="font-headline text-[8px] md:text-xs mt-1 uppercase">2–4 PM</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-base md:text-xl text-brand-green uppercase">The Arrival</h4>
              <p className="font-body text-[10px] md:text-xs text-brand-green/60 leading-relaxed">Deep House & Neo-Soul. Frictionless entry and conversation.</p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-brand-green text-white border-none rounded-2xl flex items-center gap-4 md:gap-6 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-gold text-brand-green flex flex-col items-center justify-center shrink-0">
              <Zap className="w-[18px] h-[18px] md:w-5 md:h-5" />
              <span className="font-headline text-[8px] md:text-xs mt-1 uppercase">6–8 PM</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-base md:text-xl text-brand-gold uppercase">The Peak</h4>
              <p className="font-body text-[10px] md:text-xs text-white/70 leading-relaxed">Amapiano & Afrobeat. Sunset Celebration and maximum energy.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 7D: Artist Network */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          7D: Artist Network
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { name: "DJ Nosh 254", role: "Commercial Peak" },
            { name: "Suraj", role: "Afro-Tech Anchor" },
            { name: "Jinku", role: "Rhythmic Innovator" },
            { name: "DJ Hypnotiq", role: "Technical Master" },
          ].map((dj, i) => (
            <Card key={i} className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center justify-between hover:border-brand-gold transition-all">
              <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase">{dj.name}</h4>
              <Badge variant="outline" className="text-[8px] md:text-[10px] uppercase border-brand-teal/30 text-brand-teal">{dj.role}</Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Ecosystem Credentials */}
      <div className="bg-brand-green rounded-[24px] md:rounded-[30px] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h5 className="font-headline text-3xl md:text-4xl mb-2 md:mb-4 text-brand-gold">Cultural Powerhouses</h5>
          <p className="font-serif italic text-white/60 text-sm md:text-lg">Network extending to the heavyweights of Afro-house.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {labels.map((label, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white p-3 flex items-center justify-center relative shadow-xl">
                <Image src={label.logo} alt={label.name} width={40} height={40} className="object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
