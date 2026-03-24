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

export const DualActivationModel = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-brand-gold" />
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">The squad</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
            Two DJs, one MC, five influencers, and a content crew deployed to one venue to create the primary Sunday narrative.
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-brand-teal" />
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">The network</h4>
          </div>
          <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
            Savanna branding and bar presence across multiple premium venues simultaneously every single Sunday.
          </p>
        </div>
      </div>

      {/* Unboxed HD Venue Marquee */}
      <div className="py-12 overflow-hidden border-y border-white/5">
        <div className="flex w-fit animate-marquee space-x-24 px-12">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-24 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center gap-6">
                    {img && (
                      <div className="relative h-20 w-40 hover:scale-110 transition-transform">
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
      
      <p className="font-body text-[10px] text-brand-text-muted italic text-center uppercase tracking-[4px] font-bold opacity-60">
        Firefly has active relationships with these venues and more.
      </p>

      {/* Open Typographic Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {squadRoles.map((role, i) => (
          <div key={i} className="space-y-4 group">
            <div className="text-brand-gold mb-1 group-hover:scale-110 transition-transform origin-left">
              {role.icon}
            </div>
            <div className="space-y-2">
              <h5 className="font-headline text-4xl text-brand-gold uppercase leading-none">{role.role}</h5>
              <p className="font-body text-brand-cream/60 text-sm leading-relaxed font-bold uppercase tracking-wider">
                {role.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
