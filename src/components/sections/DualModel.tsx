'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Music, 
  Mic2, 
  Users, 
  Camera 
} from 'lucide-react';

const venueData = [
  { id: "venue-muze", name: "Muze" },
  { id: "venue-alchemist", name: "The Alchemist" },
  { id: "venue-black-samurai", name: "Black Samurai" },
  { id: "venue-koda", name: "KODA" },
  { id: "venue-masshouse", name: "Masshouse" },
];

const squadRoles = [
  {
    role: "2 DJs",
    icon: <Music className="w-8 h-8" />,
    body: "Proven talent with massive reach. Multi-cam recorded for the Sunday Mix Series."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-8 h-8" />,
    body: "A crowd-pulling ambassador running interactions and real-time engagement."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-8 h-8" />,
    body: "Nairobi’s lifestyle voices capturing and sharing the ritual with their audiences."
  },
  {
    role: "Content crew",
    icon: <Camera className="w-8 h-8" />,
    body: "Videographers and social operators generating weekly narrative assets."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-gold" />
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">The Squad</h4>
          </div>
          <p className="font-body text-brand-cream/70 text-lg leading-relaxed">
            Proven talent deployed to rotating host venues to create the primary Sunday narrative.
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-teal" />
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">The Network</h4>
          </div>
          <p className="font-body text-brand-cream/70 text-lg leading-relaxed">
            Visual dominance and bar presence across multiple premium venues simultaneously.
          </p>
        </div>
      </div>

      {/* Unboxed HD Venue Marquee - Optimized for 4K OLED */}
      <div className="py-12 overflow-hidden">
        <div className="flex w-fit animate-marquee space-x-32 px-4 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-40 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center">
                    {img && (
                      <div className="relative h-24 w-60 hover:scale-110 transition-transform duration-700">
                        <Image 
                          src={img.imageUrl} 
                          alt={v.name} 
                          fill 
                          className="object-contain" 
                          priority={listIdx === 0}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      <p className="font-body text-[9px] text-brand-gold/30 italic text-center uppercase tracking-[4px]">
        Firefly has active relationships with these venues and more.
      </p>

      {/* Glossy Typographic Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-4 group">
            <div className="text-brand-gold group-hover:scale-110 transition-transform origin-left duration-500 opacity-60">
              {role.icon}
            </div>
            <div className="space-y-2">
              <h5 className="font-headline text-4xl text-brand-gold uppercase leading-none tracking-tight">{role.role}</h5>
              <p className="font-body text-brand-cream/60 text-[11px] leading-relaxed uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};