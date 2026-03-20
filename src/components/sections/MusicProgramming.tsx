"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Sun, Sunset, Moon, Zap, Coffee, Disc, Radio, AudioLines, Play, Share2 } from 'lucide-react';
import Image from 'next/image';
import { BrushStroke } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const labels = [
  { id: "label-kunye", name: "Kunye Records" },
  { id: "label-descendants", name: "Descendants Records" },
  { id: "label-grooke-cartel", name: "Groove Cartel SA" },
  { id: "label-sondela", name: "SondeLa Recordings" },
  { id: "partner-boiler-room", name: "Boiler Room" },
  { id: "partner-mixmag", name: "Mixmag" },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">07A: Sonic Architecture</div>
          <h3 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">
            Music isn't noise; <br/>it's the architecture.
          </h3>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            We curate a sonic narrative that reinforces Savanna’s premium, crisp positioning. By mapping the energy of the day to specific sub-genres, we guide the consumer journey.
          </p>
        </div>
        
        <div className="relative py-6 flex flex-col items-center justify-center">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4 text-center">
            "We don't just book DJs; we curate memories."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:400ms]">
        <div className="space-y-4">
          <div className="section-label">07C: The Vibe Curators</div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { name: "DJ Nosh 254", role: "Commercial Peak Anchor" },
              { name: "Suraj", role: "Afro-Tech Tastemaker" },
              { name: "Jinku", role: "Rhythmic Innovator" },
            ].map((dj, i) => (
              <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl flex items-center justify-between group hover:border-brand-gold transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                    <Disc size={16} />
                  </div>
                  <h4 className="font-headline text-lg text-brand-green uppercase">{dj.name}</h4>
                </div>
                <Badge variant="outline" className="text-[8px] uppercase border-brand-teal/30 text-brand-teal tracking-widest">{dj.role}</Badge>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-brand-green rounded-[24px] p-6 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10 space-y-6">
            <h4 className="font-headline text-2xl text-brand-gold uppercase">Global Connectivity</h4>
            <div className="grid grid-cols-3 gap-4">
              {labels.map((label, i) => {
                const img = PlaceHolderImages.find(p => p.id === label.id);
                return (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="w-20 h-20 rounded-xl bg-white p-2 flex items-center justify-center relative shadow-2xl transition-all group-hover:-translate-y-1">
                      {img && (
                        <Image 
                          src={img.imageUrl} 
                          alt={label.name} 
                          fill
                          className="object-contain p-2 opacity-100" 
                        />
                      )}
                    </div>
                    <span className="font-body text-[7px] uppercase tracking-widest text-white/40 mt-3 font-bold text-center leading-tight">{label.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
