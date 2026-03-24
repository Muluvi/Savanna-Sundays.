
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Disc, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const labels = [
  { id: "label-kunye", name: "Kunye Records" },
  { id: "label-descendants", name: "Descendants Records" },
  { id: "label-groove-cartel", name: "Groove Cartel SA" },
  { id: "label-sondela", name: "SondeLa Recordings" },
  { id: "partner-boiler-room", name: "Boiler Room" },
  { id: "partner-mixmag", name: "Mixmag" },
];

const featuredDjs = [
  { 
    name: "DJ IV", 
    role: "Open-Format Specialist", 
    images: ["dj-iv-1", "dj-iv-2", "dj-iv-3"],
    desc: "A staple in the Nairobi premium circuit, known for seamless transitions across Afro-beats and Hip-hop."
  },
  { 
    name: "MGM", 
    role: "House & Afro-Tech Lead", 
    images: ["dj-mgm-1", "dj-mgm-2", "dj-mgm-3", "dj-mgm-4"],
    desc: "A master of energy control, MGM has anchored some of the city's most significant lifestyle activations."
  },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Header Segment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-4xl md:text-7xl text-brand-gold uppercase leading-tight">
            Curated Vibes, <br/>Proven Partners.
          </h3>
          <p className="font-body text-lg text-brand-cream/70 leading-relaxed">
            Music is the architecture of the Sunday ritual. We work with DJs who understand how to guide a crowd from a chilled afternoon start to a high-energy peak, ensuring Savanna's premium positioning is always reinforced by the sound.
          </p>
          
          <div className="p-6 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-2xl">
            <p className="font-body text-sm text-brand-gold font-bold uppercase tracking-widest leading-relaxed">
              * The DJs featured here are examples of elite talent Firefly Management and KWAL have collaborated with previously. While not finalized for this specific activation, they represent the benchmark of talent we intend to deploy.
            </p>
          </div>
        </div>
        
        <Card className="p-10 bg-brand-green border-none rounded-[40px] shadow-2xl relative overflow-hidden group min-h-[300px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
            <Disc size={200} />
          </div>
          <p className="font-serif italic text-3xl md:text-5xl text-brand-gold text-center leading-tight relative z-10">
            "We don't just book sets; we build narratives."
          </p>
        </Card>
      </div>

      {/* Featured Talent Showcase */}
      <div className="space-y-12">
        <div className="section-label text-center">Benchmark Talent Gallery</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredDjs.map((dj, i) => (
            <Card key={i} className="bg-brand-dark-alt border border-white/5 rounded-[40px] overflow-hidden group shadow-2xl flex flex-col">
              {/* Image Carousel Mockup */}
              <div className="relative aspect-video w-full overflow-hidden bg-brand-dark">
                <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '15s', width: `${dj.images.length * 100}%` }}>
                  {[...dj.images, ...dj.images].map((imgId, idx) => {
                    const img = PlaceHolderImages.find(p => p.id === imgId);
                    return (
                      <div key={idx} className="relative h-full w-full flex-shrink-0">
                        {img && (
                          <Image 
                            src={img.imageUrl} 
                            alt={`${dj.name} ${idx}`} 
                            fill 
                            className="object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-alt via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <Badge className="bg-brand-gold text-brand-green font-headline text-lg tracking-widest px-4 py-1">
                    {dj.role}
                  </Badge>
                </div>
              </div>

              {/* DJ Info */}
              <div className="p-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">{dj.name}</h4>
                </div>
                <p className="font-body text-brand-cream/60 text-base leading-relaxed">
                  {dj.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Connectivity & Labels */}
      <div className="pt-12 space-y-12">
        <div className="section-label text-center">Global Sonic Connectivity</div>
        
        <div className="relative py-16 bg-brand-dark-alt border-y border-white/5 overflow-hidden group">
           <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] space-x-24" style={{ animationDuration: '25s' }}>
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-24 shrink-0 px-12">
                {labels.map((label) => {
                  const img = PlaceHolderImages.find(p => p.id === label.id);
                  return (
                    <div key={`${listIdx}-${label.id}`} className="flex flex-col items-center gap-4 group/label">
                      <div className="relative h-20 w-40 transition-transform duration-500 group-hover/label:scale-110">
                        {img && (
                          <Image 
                            src={img.imageUrl} 
                            alt={label.name} 
                            fill 
                            className="object-contain filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
                          />
                        )}
                      </div>
                      <span className="font-body text-[10px] text-brand-gold uppercase tracking-[3px] font-bold opacity-0 group-hover/label:opacity-100 transition-opacity">
                        {label.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Masking Gradient */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark-alt to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark-alt to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};
