'use client';

import React from 'react';
import { Music, Mic2, Users, Camera, Instagram } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface DJProfile {
  name: string;
  role: string;
  handle: string;
  imageUrl?: string;
}

const residentDJs: DJProfile[] = [
  { 
    name: "DJ MOONS", 
    role: "Resident DJ — Savanna Vybe Squad", 
    handle: "@dj_moons", // Placeholder handle
    imageUrl: undefined 
  },
  { 
    name: "DJ MAIN PATT", 
    role: "Resident DJ — Savanna Vybe Squad", 
    handle: "@djmainpatt", // Placeholder handle
    imageUrl: undefined 
  },
  { 
    name: "SAMEER", 
    role: "Resident DJ — Savanna Vybe Squad", 
    handle: "@sameer_official", // Placeholder handle
    imageUrl: undefined 
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

const DJCard = ({ dj }: { dj: DJProfile }) => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  
  return (
    <div className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-500 hover:scale-105"
         style={{ backgroundColor: '#1A1208' }}>
      {/* Subtle Gold Glow on Hover */}
      <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(244,197,66,0.15)] pointer-events-none" />
      
      {/* Circular Photo Frame */}
      <div className="relative w-32 h-32 rounded-full border-2 border-brand-gold overflow-hidden mb-6 bg-brand-green/20">
        {dj.imageUrl ? (
          <Image src={dj.imageUrl} alt={dj.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 opacity-20">
             {savannaLogo && <Image src={savannaLogo.imageUrl} alt="Savanna" width={60} height={60} className="object-contain" />}
          </div>
        )}
      </div>

      <div className="text-center space-y-1 relative z-10">
        <h4 className="font-headline text-3xl text-brand-gold tracking-widest uppercase leading-none">
          {dj.name}
        </h4>
        <p className="font-body text-[10px] text-brand-cream uppercase tracking-[2px] font-bold opacity-80">
          {dj.role}
        </p>
        <div className="flex items-center justify-center gap-2 pt-2 text-[#CD7F32] group-hover:text-brand-gold transition-colors">
          <Instagram size={14} />
          <span className="font-body text-[11px] font-bold tracking-widest">{dj.handle}</span>
        </div>
      </div>
    </div>
  );
};

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16">
      {/* Header Context */}
      <div className="max-w-4xl space-y-6">
        <div className="section-label">03C: Sonic Architecture</div>
        <h3 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase leading-none tracking-tighter">
          THE SAVANNA VYBE SQUAD
        </h3>
        <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold leading-none">
          The faces of Savanna Sundays. Every Sunday. Every venue.
        </p>
        <p className="font-body text-brand-cream/80 text-base md:text-lg leading-relaxed">
          The Savanna Vybe Squad is the engine behind every activation. A tight crew of resident DJs, influencers, and content creators who are already running this movement. This isn’t a concept — it’s a collective effort that’s already live. Now it’s scaling to new venues, new crowds, and a bigger footprint.
        </p>
      </div>

      {/* RESIDENT DJs SUB-SECTION */}
      <div className="space-y-10 pt-4">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-brand-gold/30" />
          <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-[5px]">RESIDENT DJs</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {residentDJs.map((dj, i) => (
            <DJCard key={i} dj={dj} />
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="font-body text-brand-cream/60 text-sm italic leading-relaxed pl-6 border-l-2 border-brand-gold/20">
            The resident DJs are the sound of Savanna Sundays. They play across both mainstream and premium venues, delivering all-rounded sets with a bias to Bongo music.
          </p>
        </div>
      </div>

      {/* SQUAD ROLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/5">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-4 group">
            <div className="text-brand-gold transition-transform group-hover:scale-110 duration-500">
              {role.icon}
            </div>
            <div className="space-y-2">
              <h5 className="font-headline text-3xl text-brand-gold uppercase leading-none tracking-tight">
                {role.role}
              </h5>
              <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 text-center">
        <p className="font-body text-[9px] text-brand-gold/30 uppercase tracking-[3px] font-bold">
          Elite talent is vetted and booked based on performance data and strategic alignment.
        </p>
      </div>
    </div>
  );
};
