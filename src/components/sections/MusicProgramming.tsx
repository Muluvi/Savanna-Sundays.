
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Sun, Sunset, Moon, Zap, Coffee, Disc, Radio, AudioLines, Play, Share2 } from 'lucide-react';
import Image from 'next/image';
import { BrushStroke } from '@/components/brand/VisualElements';

const labels = [
  { name: "Kunye Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203530/Kunye_Records_r4ecqg.png" },
  { name: "Descendants Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203532/Descendants_Rec_yoghrn.jpg" },
  { name: "Groove Cartel SA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Groove_Cartel_SA_wlwymi.png" },
  { name: "Sondela Recordings", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/SondeLa_Recordings_egodlz.png" },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">07A: Sonic Architecture</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Music isn't noise; <br/>it's the architecture.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            We curate a sonic narrative that reinforces Savanna’s premium, crisp positioning. By mapping the energy of the day to specific sub-genres, we guide the consumer journey from arrival to peak.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We don't just book DJs; we curate memories."
            </h3>
          </div>
        </div>
      </div>

      {/* 7B: The Energy Progression Visual */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">07B: The Energy Arc</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block -translate-y-12" />
          
          {[
            { time: "2PM - 4PM", label: "The Arrival", sub: "Deep House & Neo-Soul", icon: <Coffee size={20} />, color: "teal" },
            { time: "4PM - 6PM", label: "The Build", sub: "Afro-House & Soulful", icon: <Sunset size={20} />, color: "gold" },
            { time: "6PM - 8PM", label: "The Peak", sub: "Amapiano & Global Beats", icon: <Zap size={20} />, color: "green", active: true },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4 group">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center shadow-xl border transition-all group-hover:scale-110 ${step.active ? 'bg-brand-green text-brand-gold border-brand-gold' : 'bg-white text-brand-green border-brand-green/5'}`}>
                <div className={step.active ? 'text-brand-gold' : 'text-brand-teal'}>
                  {step.icon}
                </div>
                <span className="font-headline text-[10px] mt-1 leading-none uppercase">{step.time}</span>
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-lg text-brand-green uppercase">{step.label}</h5>
                <p className="font-body text-[9px] tracking-widest text-brand-green/40 font-bold uppercase">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7C: Artist Network & Label Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up [animation-delay:400ms]">
        <div className="space-y-8">
          <div className="section-label">07C: The Vibe Curators</div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "DJ Nosh 254", role: "Commercial Peak Anchor" },
              { name: "Suraj", role: "Afro-Tech Tastemaker" },
              { name: "Jinku", role: "Rhythmic Innovator" },
              { name: "DJ Hypnotiq", role: "Technical Master" },
            ].map((dj, i) => (
              <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center justify-between group hover:border-brand-gold transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                    <Disc size={20} />
                  </div>
                  <h4 className="font-headline text-xl text-brand-green uppercase">{dj.name}</h4>
                </div>
                <Badge variant="outline" className="text-[9px] uppercase border-brand-teal/30 text-brand-teal tracking-widest">{dj.role}</Badge>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-brand-green rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Radio size={120} />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h4 className="font-headline text-3xl text-brand-gold uppercase">Global Connectivity</h4>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Our network extends to the heavyweights of Afro-house. We facilitate direct alignment with labels that define the premium sound of the continent.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {labels.map((label, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white p-3 flex items-center justify-center relative shadow-xl transition-all group-hover:-translate-y-1">
                    <Image 
                      src={label.logo} 
                      alt={label.name} 
                      width={48} 
                      height={48} 
                      className="object-contain filter grayscale hover:grayscale-0 transition-all" 
                    />
                  </div>
                  <span className="font-body text-[8px] uppercase tracking-widest text-white/40 mt-3 font-bold">{label.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7D: The Digital Sonic Harvest */}
      <Card className="p-8 md:p-12 bg-brand-cream border border-brand-green/5 rounded-[32px] animate-fade-in-up [animation-delay:600ms] group hover:bg-white transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="section-label">07D: The Archive</div>
            <h4 className="font-headline text-3xl text-brand-green uppercase">Live Mix Series</h4>
            <p className="font-body text-sm md:text-base text-brand-green/60 leading-relaxed">
              Every DJ set is recorded via direct board feed. These sets are polished and released as the "Savanna Sunday Sessions" on Soundcloud and Mixcloud, ensuring the vibe lives forever in the listener's pocket.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                 <AudioLines className="text-brand-gold" size={20} />
                 <span className="font-body text-[10px] font-bold uppercase tracking-widest text-brand-green/40">24-Bit Capture</span>
               </div>
               <div className="flex items-center gap-2">
                 <Share2 className="text-brand-teal" size={20} />
                 <span className="font-body text-[10px] font-bold uppercase tracking-widest text-brand-green/40">Global Distro</span>
               </div>
            </div>
          </div>
          
          <div className="relative bg-brand-green rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl overflow-hidden">
             <div className="absolute inset-0 opacity-10">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                 <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="#F4C542" strokeWidth="0.5" />
                 <path d="M0 60 Q 25 30, 50 60 T 100 60" fill="none" stroke="#F4C542" strokeWidth="0.5" />
               </svg>
             </div>
             <Play className="text-brand-gold w-12 h-12 animate-pulse" />
             <div className="space-y-1 relative z-10">
               <span className="font-headline text-xl text-white block">SUNDAY SESSIONS VOL. 01</span>
               <span className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold">Now Streaming</span>
             </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
