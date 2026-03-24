"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const featuredDjs = [
  { 
    name: "DJ IV", 
    role: "Open-Format Specialist", 
    images: [
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766339918/IMG_8587_hmlmat.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766339917/IMG_8157_honjsc.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766184996/IMG_8290_jqoh3y.jpg"
    ],
    desc: "A staple in the Nairobi premium circuit, known for seamless transitions across Afro-beats and Hip-hop."
  },
  { 
    name: "MGM", 
    role: "House & Afro-Tech Lead", 
    images: [
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1763407068/f19228928_i60lwt.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1763407059/f19563776_pyxrb0.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1763407062/f18736576_nqvgpo.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1763407067/f17494272_gfrsqq.jpg"
    ],
    desc: "A master of energy control, MGM has anchored some of the city's most significant lifestyle activations."
  },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-12">
        <div className="max-w-xl space-y-4">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-4xl md:text-7xl text-brand-gold uppercase leading-none tracking-tighter">ELITE TALENT.</h3>
          <p className="font-body text-brand-cream/70 text-sm md:text-lg leading-relaxed">
            Music is the architect of the ritual. We deploy benchmark talent that understands the journey from chill to peak.
          </p>
        </div>
        <div className="p-6 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-2xl max-w-sm">
          <p className="font-body text-[10px] text-brand-gold font-bold uppercase tracking-[2px] leading-tight">
            * Benchmark examples of elite talent Firefly and KWAL have collaborated with previously.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden rounded-[40px] shadow-2xl group">
            <div className="flex animate-marquee h-full" style={{ width: `${dj.images.length * 100}%` }}>
              {[...dj.images, ...dj.images].map((imgUrl, idx) => (
                <div key={idx} className="relative h-full w-full flex-shrink-0">
                  <Image 
                    src={imgUrl} 
                    alt={`${dj.name}`} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
            
            {/* Minimal Overlay for legibility only at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 space-y-3">
              <Badge className="bg-brand-gold text-brand-green font-headline text-2xl tracking-widest px-6 py-2 rounded-xl">
                {dj.name}
              </Badge>
              <div className="space-y-1">
                <p className="font-headline text-xl text-white uppercase tracking-wider">{dj.role}</p>
                <p className="font-body text-xs text-white/60 font-bold uppercase tracking-widest leading-relaxed line-clamp-2">
                  {dj.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
