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
    icon: <Music className="w-10 h-10" />,
    body: "Proven Nairobi talent with massive digital reach. Multi-cam recorded for the Sunday Mix Series."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-10 h-10" />,
    body: "A crowd-pulling ambassador running crowd interactions and real-time engagement."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-10 h-10" />,
    body: "Nairobi’s top lifestyle voices capturing and sharing the ritual with their audiences."
  },
  {
    role: "Content crew",
    icon: <Camera className="w-10 h-10" />,
    body: "Videographer, photographer, and social operator generating narrative assets."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-brand-gold" />
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">The Squad</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-xl leading-relaxed">
            Proven talent deployed to one rotating host venue to create the primary Sunday narrative and content.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-brand-teal" />
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">The Network</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-xl leading-relaxed">
            Savanna visual dominance and bar presence across multiple premium venues simultaneously every Sunday.
          </p>
        </div>
      </div>

      {/* Unboxed HD Venue Marquee - Logos upsized as requested */}
      <div className="py-16 overflow-hidden">
        <div className="flex w-fit animate-marquee space-x-32 px-4">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-40 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center">
                    {img && (
                      <div className="relative h-28 w-64 hover:scale-110 transition-transform duration-500">
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
      
      <p className="font-body text-xs text-brand-gold/40 italic text-center uppercase tracking-[4px]">
        Firefly has active relationships with these venues and more.
      </p>

      {/* Clean Typographic Roles - No boxes, Bebas Neue headlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-6 group">
            <div className="text-brand-gold group-hover:scale-110 transition-transform origin-left duration-500">
              {role.icon}
            </div>
            <div className="space-y-3">
              <h5 className="font-headline text-5xl text-brand-gold uppercase leading-none tracking-tight">{role.role}</h5>
              <p className="font-body text-brand-cream/70 text-sm leading-relaxed uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
