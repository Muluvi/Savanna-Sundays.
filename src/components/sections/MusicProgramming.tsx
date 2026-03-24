"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Disc } from 'lucide-react';
import Image from 'next/image';
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
    <div className="space-y-12 md:space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase leading-tight">
            Music isn't noise; <br/>it's the architecture.
          </h3>
          <p className="font-body text-lg text-brand-cream/70 leading-relaxed">
            We curate a sonic narrative that reinforces Savanna’s premium, crisp positioning. By mapping the energy of the day to specific sub-genres, we guide the consumer journey through high-fidelity sound.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <p className="font-serif italic text-2xl md:text-4xl text-brand-gold text-center leading-relaxed px-4">
            "We don't just book DJs; we curate memories."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="section-label">THE VIBE CURATORS</div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "DJ Nosh 254", role: "Commercial Peak Anchor" },
              { name: "Suraj", role: "Afro-Tech Tastemaker" },
              { name: "Jinku", role: "Rhythmic Innovator" },
            ].map((dj, i) => (
              <Card key={i} className="p-6 bg-brand-dark border border-brand-gold/10 rounded-[24px] flex items-center justify-between group hover:border-brand-gold transition-all shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Disc size={20} />
                  </div>
                  <h4 className="font-headline text-2xl text-brand-gold uppercase leading-none">{dj.name}</h4>
                </div>
                <Badge variant="outline" className="text-[10px] uppercase border-brand-gold/30 text-brand-gold tracking-[2px] py-1 px-3">{dj.role}</Badge>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-brand-green border border-brand-gold/20 rounded-[32px] p-10 text-brand-cream relative overflow-hidden flex flex-col justify-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">Global Connectivity</h4>
            <div className="grid grid-cols-3 gap-6">
              {labels.map((label, i) => {
                const img = PlaceHolderImages.find(p => p.id === label.id);
                return (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-center relative shadow-2xl transition-all group-hover:-translate-y-2 group-hover:bg-white group-hover:border-brand-gold">
                      {img && (
                        <Image 
                          src={img.imageUrl} 
                          alt={label.name} 
                          fill
                          className="object-contain p-4 filter brightness-110 group-hover:brightness-100" 
                        />
                      )}
                    </div>
                    <span className="font-body text-[8px] uppercase tracking-[2px] text-brand-cream/40 mt-3 font-bold text-center leading-tight group-hover:text-brand-gold transition-colors">
                      {label.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};