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
    icon: <Music size={20} />,
    body: "Proven talent with massive reach."
  },
  {
    role: "1 MC",
    icon: <Mic2 size={20} />,
    body: "Ambassador running interactions."
  },
  {
    role: "5 Influencers",
    icon: <Users size={20} />,
    body: "Lifestyle voices sharing the ritual."
  },
  {
    role: "Content crew",
    icon: <Camera size={20} />,
    body: "Videographers generating narrative assets."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-brand-gold" />
            <h4 className="font-headline text-2xl text-brand-gold uppercase">The Squad</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-sm leading-relaxed">
            Proven talent deployed to rotating host venues to create the primary Sunday narrative.
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-brand-teal" />
            <h4 className="font-headline text-2xl text-brand-gold uppercase">The Network</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-sm leading-relaxed">
            Visual dominance and bar presence across multiple premium venues simultaneously.
          </p>
        </div>
      </div>

      {/* High-Impact Unboxed Venue Marquee - 2x Size */}
      <div className="py-12 md:py-16 overflow-hidden bg-white/[0.01] rounded-[32px]">
        <div className="flex w-fit animate-marquee space-x-24 px-6 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-32 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center">
                    {img && (
                      <div className="relative h-72 md:h-96 w-[500px] md:w-[680px] hover:scale-105 transition-transform duration-700">
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
      
      <p className="font-body text-[10px] text-brand-gold/60 italic text-center uppercase tracking-[4px] font-bold">
        Firefly has active relationships with these venues and more.
      </p>

      {/* Typographic Roles - Compact Hierarchy */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-3 group">
            <div className="text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-500">
              {role.icon}
            </div>
            <div className="space-y-1">
              <h5 className="font-headline text-xl text-brand-gold uppercase leading-none">{role.role}</h5>
              <p className="font-body text-brand-cream/60 text-[10px] leading-tight font-bold uppercase tracking-widest">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};