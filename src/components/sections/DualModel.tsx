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
import { cn } from '@/lib/utils';

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
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-8 bg-brand-green border-l-4 border-brand-gold space-y-3">
          <h4 className="font-headline text-2xl text-brand-gold uppercase tracking-tight">The squad</h4>
          <p className="font-body text-brand-cream text-sm leading-relaxed opacity-90">
            Two DJs, one MC, five influencers, and a content crew deployed to one venue to create the primary Sunday narrative.
          </p>
        </div>
        
        <div className="p-8 bg-white/5 border-l-4 border-brand-teal space-y-3">
          <h4 className="font-headline text-2xl text-brand-gold uppercase tracking-tight">The network</h4>
          <p className="font-body text-brand-cream text-sm leading-relaxed opacity-90">
            Savanna branding and bar presence across multiple premium venues simultaneously every single Sunday.
          </p>
        </div>
      </div>

      <div className="py-8 border-y border-white/5 overflow-hidden group">
        <div className="flex w-fit animate-marquee space-x-20 px-12">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-20 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center gap-6">
                    {img && (
                      <div className="relative h-14 w-28 grayscale-0 group-hover:scale-105 transition-transform">
                        <Image src={img.imageUrl} alt={v.name} fill className="object-contain" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      <p className="font-body text-[10px] text-brand-text-muted italic text-center uppercase tracking-[3px] font-bold opacity-60">
        Firefly has active relationships with these venues and more.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {squadRoles.map((role, i) => (
          <div key={i} className="p-6 bg-white/5 border-t-2 border-brand-gold space-y-2 hover:bg-white/10 transition-colors">
            <div className="text-brand-gold mb-1">{role.icon}</div>
            <h5 className="font-headline text-xl text-brand-gold uppercase leading-none">{role.role}</h5>
            <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-wider">
              {role.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
