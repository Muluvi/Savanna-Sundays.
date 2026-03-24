
'use client';

import React from 'react';

const featuredDjs = [
  { 
    name: "IV", 
    role: "Open-format specialist", 
    desc: "A staple in the Nairobi premium circuit, known for seamless transitions across Afro-beats and Hip-hop."
  },
  { 
    name: "MGM", 
    role: "House & afro-tech lead", 
    desc: "A master of energy control, MGM has anchored some of the city's most significant lifestyle activations."
  },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl space-y-4">
        <div className="section-label">03C: Sonic Architecture</div>
        <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">Elite Talent</h3>
        <p className="font-body text-brand-cream/80 text-lg md:text-xl leading-relaxed">
          The following artists represent the caliber of elite talent Firefly and KWAL have collaborated with previously. These illustrate the benchmark of quality we will deploy for Savanna Sundays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-[3px] w-12 bg-brand-gold" />
              <div className="space-y-1">
                <h4 className="font-headline text-4xl md:text-6xl text-brand-gold tracking-widest">{dj.name}</h4>
                <p className="font-body text-[10px] text-brand-gold/60 uppercase tracking-[4px] font-bold">{dj.role}</p>
              </div>
            </div>
            
            <p className="font-body text-brand-cream/80 text-base md:text-lg italic leading-relaxed pl-6 border-l-2 border-brand-gold/20">
              {dj.desc}
            </p>
          </div>
        ))}
      </div>
      
      <p className="font-body text-[10px] text-brand-gold/40 italic text-center uppercase tracking-[3px] font-bold pt-12 border-t border-white/5">
        Elite talent is vetted and booked based on performance data and strategic alignment.
      </p>
    </div>
  );
};
