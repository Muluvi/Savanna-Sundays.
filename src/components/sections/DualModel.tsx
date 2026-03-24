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
    icon: <Music size={18} />,
    body: "Proven talent with massive reach."
  },
  {
    role: "1 MC",
    icon: <Mic2 size={18} />,
    body: "Ambassador running interactions."
  },
  {
    role: "5 Influencers",
    icon: <Users size={18} />,
    body: "Lifestyle voices sharing the ritual."
  },
  {
    role: "Content crew",
    icon: <Camera size={18} />,
    body: "Videographers generating narrative assets."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-4 bg-brand-gold" />
            <h4 className="font-headline text-xl text-brand-gold uppercase">The Squad</h4>
          </div>
          <p className="font-body text-brand-cream/50 text-xs leading-relaxed">
            Proven talent deployed to rotating host venues to create the primary Sunday narrative.
          </p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-4 bg-brand-teal" />
            <h4 className="font-headline text-xl text-brand-gold uppercase">The Network</h4>
          </div>
          <p className="font-body text-brand-cream/50 text-xs leading-relaxed">
            Visual dominance and bar presence across multiple premium venues simultaneously.
          </p>
        </div>
      </div>

      {/* High-Fidelity Unboxed Venue Marquee - Massive OLED Icons */}
      <div className="py-8 overflow-hidden bg-white/[0.005]">
        <div className="flex w-fit animate-marquee space-x-16 px-4 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-20 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center">
                    {img && (
                      <div className="relative h-48 w-96 hover:scale-110 transition-transform duration-700">
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
      
      <p className="font-body text-[7px] text-brand-gold/20 italic text-center uppercase tracking-[3px] font-bold">
        Firefly has active relationships with these venues and more.
      </p>

      {/* Typographic Roles - Compact Hierarchy */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-2 group">
            <div className="text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-500">
              {role.icon}
            </div>
            <div className="space-y-0.5">
              <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{role.role}</h5>
              <p className="font-body text-brand-cream/40 text-[8px] leading-tight font-bold uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};