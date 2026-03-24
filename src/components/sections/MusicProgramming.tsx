'use client';

import React from 'react';
import Image from 'next/image';

const featuredDjs = [
  { 
    name: "IV", 
    role: "Open-format specialist", 
    images: [
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766339918/IMG_8587_hmlmat.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766339917/IMG_8157_honjsc.jpg",
      "https://res.cloudinary.com/da5j0zjok/image/upload/v1766184996/IMG_8290_jqoh3y.jpg"
    ],
    desc: "A staple in the Nairobi premium circuit, known for seamless transitions across Afro-beats and Hip-hop."
  },
  { 
    name: "MGM", 
    role: "House & afro-tech lead", 
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
    <div className="space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="section-label">03C: Sonic architecture</div>
        <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">Elite talent</h3>
        <p className="font-body text-brand-cream/80 text-lg md:text-xl leading-relaxed">
          The following artists represent the caliber of elite talent Firefly and KWAL have collaborated with previously. These illustrate the benchmark of quality we will deploy for Savanna Sundays.
        </p>
      </div>

      {/* Unboxed HD Talent Showcase */}
      <div className="space-y-24">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-12 bg-brand-gold" />
              <h4 className="font-headline text-4xl md:text-6xl text-brand-gold tracking-widest">{dj.name}</h4>
              <span className="font-body text-xs text-white/40 uppercase tracking-[5px] font-bold">{dj.role}</span>
            </div>
            
            {/* Full Bleed HD Gallery */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
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
            
            <p className="max-w-2xl font-body text-brand-cream/70 text-sm md:text-lg uppercase tracking-[2px] font-bold leading-relaxed">
              {dj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
