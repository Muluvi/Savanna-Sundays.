"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Disc, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-12">
        <div className="max-w-xl space-y-4">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase leading-tight">Curated Vibes.</h3>
          <p className="font-body text-brand-cream/70 text-sm leading-relaxed">
            Music is the architecture of the Sunday ritual. We deploy talent that understands the journey from chilled afternoons to high-energy peaks.
          </p>
        </div>
        <div className="p-6 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-2xl max-w-sm">
          <p className="font-body text-[10px] text-brand-gold font-bold uppercase tracking-widest leading-tight">
            * These are benchmark examples of elite talent Firefly Management and KWAL have collaborated with previously.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredDjs.map((dj, i) => (
          <Card key={i} className="bg-brand-dark-alt border border-white/5 rounded-[32px] overflow-hidden group shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div className="flex animate-marquee h-full" style={{ width: `${dj.images.length * 100}%` }}>
                {[...dj.images, ...dj.images].map((imgUrl, idx) => (
                  <div key={idx} className="relative h-full w-full flex-shrink-0">
                    <Image src={imgUrl} alt={`${dj.name} ${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-alt via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8">
                <Badge className="bg-brand-gold text-brand-green font-headline text-lg tracking-widest px-4 py-1">
                  {dj.name}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};