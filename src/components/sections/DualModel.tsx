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
    title: "Two DJs. Two sets. One vibe.",
    body: "Established Nairobi DJs with 5,000+ Instagram followings. DJ 1 runs the warm-up set. DJ 2 owns peak time. Both sets are multi-camera recorded for YouTube with board-feed audio."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-8 h-8" />,
    title: "The voice of Savanna on the ground.",
    body: "A crowd-pulling MC who doubles as brand ambassador. Runs crowd interactions, shout-outs, drink call-outs, competition announcements, and real-time engagement moments."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-8 h-8" />,
    title: "Five faces. Five audiences. Every Sunday.",
    body: "Selection criteria: Nairobi-based, 10K–50K followers, active in lifestyle/nightlife niches. Rotated monthly to keep content fresh and expand reach."
  },
  {
    role: "Content Crew",
    icon: <Camera className="w-8 h-8" />,
    title: "Three people. One job. Make Savanna look incredible.",
    body: "Videographer, photographer, and a social media operator. Real-time Stories and live posting to Savanna channels."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-3xl">
        <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-tight border-l-4 border-brand-gold pl-8">
          “Multiple venues. One squad. Every Sunday.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-10 bg-brand-green border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">THE SAVANNA SQUAD</h4>
            <p className="font-body text-brand-cream text-base leading-relaxed opacity-90">
              The full Savanna Squad deploys to one venue. Two DJs. One MC. Five influencers. A three-person content crew. By doors-open, the venue is unmistakably Savanna.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Card>
        
        <Card className="p-10 bg-brand-dark-alt border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">MULTI-VENUE PRESENCE</h4>
            <p className="font-body text-brand-cream text-base leading-relaxed opacity-90">
              Savanna Sundays doesn’t stop at one venue. Every Sunday, 2–3 premium venues carry full Savanna branding, bar wraps, table dressing, and glassware.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Card>
      </div>

      <div className="pt-8 space-y-12">
        <div className="section-label text-center">Active Partner Network</div>
        
        <div className="relative py-16 bg-brand-dark-alt border-y border-white/5 overflow-hidden group shadow-inner">
          {/* HD Infinite Marquee - Full Color, Full Size */}
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] space-x-24" style={{ animationDuration: '20s' }}>
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-24 shrink-0 px-12">
                {venueData.map((v) => {
                  const img = PlaceHolderImages.find(p => p.id === v.id);
                  return (
                    <div key={`${listIdx}-${v.id}`} className="flex flex-col items-center gap-6 group/venue">
                      {img && (
                        <div className="relative h-24 w-48 transition-transform duration-500 group-hover/venue:scale-110">
                          <Image 
                            src={img.imageUrl} 
                            alt={v.name} 
                            fill 
                            className="object-contain filter drop-shadow-2xl"
                            priority={listIdx === 0}
                          />
                        </div>
                      )}
                      <div className="space-y-1 text-center opacity-0 group-hover/venue:opacity-100 transition-opacity duration-300">
                        <span className="font-headline text-xl text-brand-gold uppercase tracking-widest">{v.name}</span>
                        <p className="font-body text-[10px] text-brand-cream/40 uppercase tracking-[2px] font-bold">{v.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Masking Gradient for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark-alt to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark-alt to-transparent z-10" />
        </div>
        
        <p className="font-body text-[11px] text-brand-text-muted italic text-center uppercase tracking-[3px] font-bold opacity-60">
          Firefly has active relationships with these venues and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        {squadRoles.map((role, i) => (
          <Card 
            key={i} 
            className="p-8 bg-brand-dark-alt border-none border-l-4 border-brand-gold rounded-[32px] space-y-4 shadow-2xl transition-all hover:scale-[1.02] duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="text-brand-gold bg-brand-gold/10 p-4 rounded-2xl">
                {role.icon}
              </div>
              <span className="font-headline text-brand-gold text-lg tracking-[4px] uppercase font-bold">
                {role.role}
              </span>
            </div>
            <h4 className="font-headline text-2xl text-brand-cream uppercase tracking-tight">
              {role.title}
            </h4>
            <p className="font-body text-brand-cream/70 text-base leading-relaxed">
              {role.body}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
