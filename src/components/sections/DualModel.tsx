"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
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
  { id: "venue-muze", name: "Muze", location: "Westlands" },
  { id: "venue-alchemist", name: "The Alchemist", location: "Westlands" },
  { id: "venue-black-samurai", name: "Black Samurai", location: "Westlands" },
  { id: "venue-koda", name: "KODA", location: "Kilimani" },
  { id: "venue-masshouse", name: "Masshouse", location: "Industrial Area" },
];

const squadRoles = [
  {
    role: "2 DJs",
    icon: <Music className="w-8 h-8" />,
    title: "The Vibe Anchor",
    body: "Proven Nairobi talent with massive digital reach. Multi-cam recorded for the Sunday Mix Series."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-8 h-8" />,
    title: "The Ground Voice",
    body: "A crowd-pulling ambassador running crowd interactions and real-time engagement."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-8 h-8" />,
    title: "Digital Amplifiers",
    body: "Nairobi’s top lifestyle voices capturing and sharing the ritual with their audiences."
  },
  {
    role: "Content Crew",
    icon: <Camera className="w-8 h-8" />,
    title: "The Asset Engine",
    body: "Videographer, photographer, and social operator generating narrative assets."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8 bg-brand-green border-none rounded-[32px] shadow-2xl space-y-4">
          <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">THE SQUAD</h4>
          <p className="font-body text-brand-cream text-sm leading-relaxed opacity-90">
            Two DJs, one MC, five influencers, and a content crew deployed to one venue to create the primary Sunday narrative.
          </p>
        </Card>
        
        <Card className="p-8 bg-brand-dark-alt border-none rounded-[32px] shadow-2xl space-y-4">
          <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">THE NETWORK</h4>
          <p className="font-body text-brand-cream text-sm leading-relaxed opacity-90">
            Savanna branding and bar presence across multiple premium venues simultaneously every single Sunday.
          </p>
        </Card>
      </div>

      <div className="py-12 bg-brand-dark-alt border-y border-white/5 overflow-hidden group shadow-inner">
        <div className="flex w-fit animate-marquee space-x-24 px-12">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-24 shrink-0">
              {venueData.map((v) => {
                const img = PlaceHolderImages.find(p => p.id === v.id);
                return (
                  <div key={`${listIdx}-${v.id}`} className="flex items-center gap-6">
                    {img && (
                      <div className="relative h-16 w-32">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {squadRoles.map((role, i) => (
          <Card key={i} className="p-6 bg-brand-dark-alt border-none border-t-2 border-brand-gold rounded-2xl space-y-3 shadow-xl">
            <div className="text-brand-gold mb-2">{role.icon}</div>
            <h5 className="font-headline text-xl text-brand-gold uppercase leading-none">{role.role}</h5>
            <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-wider">
              {role.body}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};