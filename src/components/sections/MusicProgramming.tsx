"use client";

import React from 'react';
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
        <div className="max-w-2xl space-y-4">
          <div className="section-label">03C: Sonic Architecture</div>
          <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">Elite Talent</h3>
          <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
            Benchmark examples of elite talent Firefly and KWAL have collaborated with previously. These illustrate the caliber of talent we will deploy.
          </p>
        </div>
      </div>

      <div className="space-y-20">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-brand-gold" />
              <h4 className="font-headline text-4xl text-brand-gold tracking-widest">{dj.name}</h4>
              <span className="font-body text-[10px] text-white/40 uppercase tracking-[4px] font-bold">{dj.role}</span>
            </div>
            
            <div className="relative overflow-hidden w-full h-[60vh] md:h-[80vh]">
              <div className="flex h-full animate-marquee" style={{ width: `${dj.images.length * 100}%` }}>
                {[...dj.images, ...dj.images].map((imgUrl, idx) => (
                  <div key={idx} className="relative h-full w-full flex-shrink-0">
                    <Image 
                      src={imgUrl} 
                      alt={dj.name} 
                      fill 
                      className="object-cover" 
                      sizes="100vw"
                      priority={i === 0 && idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <p className="max-w-xl font-body text-brand-cream/60 text-sm uppercase tracking-[2px] font-bold leading-relaxed">
              {dj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};