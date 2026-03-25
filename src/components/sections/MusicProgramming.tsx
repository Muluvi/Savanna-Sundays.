'use client';

import React from 'react';
import { Music, Mic2, Users, Camera } from 'lucide-react';

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

const squadRoles = [
  {
    role: "2 DJs",
    icon: <Music className="w-8 h-8" />,
    body: "Proven Nairobi talent with massive digital reach. Multi-cam recorded for the Sunday Mix Series."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-8 h-8" />,
    body: "A crowd-pulling ambassador running crowd interactions and real-time engagement."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-8 h-8" />,
    body: "Nairobi’s top lifestyle voices capturing and sharing the ritual with their audiences."
  },
  {
    role: "Content crew",
    icon: <Camera className="w-8 h-8" />,
    body: "Videographer, photographer, and social operator generating narrative assets."
  }
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-4xl space-y-4">
        <div className="section-label">03C: Sonic Architecture</div>
        <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">THE SAVANNA VYBE SQUAD</h3>
        <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold leading-none">
          The faces of Savanna Sundays. Every Sunday. Every venue.
        </p>
        <p className="font-body text-brand-cream/80 text-base md:text-lg leading-relaxed">
          The Savanna Vybe Squad is the engine behind every activation. A tight crew of resident DJs, influencers, and content creators who are already running this movement. This isn’t a concept — it’s a collective effort that’s already live. Now it’s scaling to new venues, new crowds, and a bigger footprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {featuredDjs.map((dj, i) => (
          <div key={i} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-brand-gold" />
              <div className="space-y-1">
                <h4 className="font-headline text-4xl md:text-6xl text-brand-gold tracking-widest">{dj.name}</h4>
                <p className="font-body text-[9px] text-brand-gold/60 uppercase tracking-[4px] font-bold">{dj.role}</p>
              </div>
            </div>
            <p className="font-body text-brand-cream/70 text-sm italic leading-relaxed pl-4 border-l border-white/10">
              {dj.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-4">
            <div className="text-brand-gold">{role.icon}</div>
            <div className="space-y-2">
              <h5 className="font-headline text-3xl text-brand-gold uppercase leading-none tracking-tight">{role.role}</h5>
              <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="font-body text-[9px] text-brand-gold/30 uppercase tracking-[3px] font-bold">
          Elite talent is vetted and booked based on performance data and strategic alignment.
        </p>
      </div>
    </div>
  );
};
