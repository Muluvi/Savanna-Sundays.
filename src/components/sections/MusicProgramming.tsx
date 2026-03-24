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
    <div className="space-y-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/10 pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">Elite Talent</h3>
          <p className="font-body text-brand-cream/80 text-lg md:text-xl leading-relaxed">
            Music is the architect of the ritual. We deploy benchmark talent that understands the journey from chill to peak energy.
          </p>
        </div>
        <div className="p-8 border-l-4 border-brand-gold bg-brand-gold/5 max-w-sm rounded-r-3xl">
          <p className="font-body text-[10px] text-brand-gold font-bold uppercase tracking-[2px] leading-relaxed">
            Benchmark examples of elite talent Firefly and KWAL have collaborated with previously. These illustrate the caliber of talent we will deploy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="relative aspect-[3/4] w-full overflow-hidden rounded-[48px] shadow-2xl group border border-white/5">
            <div className="flex animate-marquee h-full" style={{ width: `${dj.images.length * 100}%` }}>
              {[...dj.images, ...dj.images].map((imgUrl, idx) => (
                <div key={idx} className="relative h-full w-full flex-shrink-0">
                  <Image 
                    src={imgUrl} 
                    alt={`${dj.name}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-12 left-12 right-12 space-y-4">
              <Badge className="bg-brand-gold text-brand-green font-headline text-3xl tracking-widest px-8 py-3 rounded-2xl shadow-xl">
                {dj.name}
              </Badge>
              <div className="space-y-2">
                <p className="font-headline text-2xl text-white uppercase tracking-wider">{dj.role}</p>
                <p className="font-body text-sm text-white/70 font-bold uppercase tracking-widest leading-relaxed">
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