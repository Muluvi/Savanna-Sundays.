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
    body: "Established Nairobi DJs with 5,000+ Instagram followings. Crowd-pullers who play across genres — Afro house, amapiano, deep house, and whatever the room needs. DJ 1 runs the warm-up set. DJ 2 owns peak time. Both sets are multi-camera recorded for YouTube with board-feed audio."
  },
  {
    role: "1 MC",
    icon: <Mic2 className="w-8 h-8" />,
    title: "The voice of Savanna on the ground.",
    body: "A crowd-pulling MC who doubles as brand ambassador. Runs crowd interactions, shout-outs, drink call-outs, competition announcements, and real-time engagement moments. The MC keeps energy high, drives brand mentions naturally, and creates content-worthy moments throughout the session."
  },
  {
    role: "5 Influencers",
    icon: <Users className="w-8 h-8" />,
    title: "Five faces. Five audiences. Every Sunday.",
    body: "Selection criteria: Nairobi-based, 10K–50K followers, active in lifestyle/nightlife/food/fashion niches, strong Stories engagement rate (3%+ minimum), and authentic connection to social/going-out culture. Rotated monthly to keep content fresh and expand reach.\n\nDeliverables: Minimum 3 Instagram Stories, 1 Instagram Reel or TikTok per Sunday. All posts tag @SavannaCider_EA and the venue. Combined weekly reach: 50K–250K impressions."
  },
  {
    role: "Content Crew",
    icon: <Camera className="w-8 h-8" />,
    title: "Three people. One job. Make Savanna look incredible.",
    body: "Videographer (multi-cam DJ sets + crowd energy footage), photographer (unlimited edited shots, colour-graded in Savanna's warm gold palette), and a social media operator (real-time Stories and live posting to Savanna channels)."
  }
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-3xl">
        <p className="font-body text-lg md:text-xl text-brand-cream leading-relaxed border-l-4 border-brand-gold pl-8">
          “Multiple venues. One squad. Every Sunday.”
        </p>
      </div>

      {/* Main Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: THE SAVANNA SQUAD */}
        <Card className="p-10 bg-brand-green border-none border-t-[3px] border-brand-gold rounded-[32px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-6">
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">THE SAVANNA SQUAD</h4>
            <p className="font-body text-brand-cream text-sm md:text-base leading-relaxed opacity-90">
              Every Sunday, the full Savanna Squad deploys to one venue. Two DJs. One MC. Five influencers. A three-person content crew. Bar wraps go up, signage goes in, the backdrop drops. By the time the first guest walks in, the venue is unmistakably Savanna. From doors-open to wind-down, the squad runs the experience — music, crowd energy, competitions, and content capture. By Monday, footage is in post-production.
            </p>
          </div>
        </Card>
        
        {/* Card 2: MULTI-VENUE PRESENCE */}
        <Card className="p-10 bg-brand-dark-alt border-none rounded-[32px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-6">
            <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">MULTI-VENUE PRESENCE</h4>
            <p className="font-body text-brand-cream text-sm md:text-base leading-relaxed opacity-90">
              Savanna Sundays doesn’t stop at one venue. Every Sunday, 2–3 premium venues across Nairobi carry full Savanna branding — bar wraps, table dressing, signage, branded glassware, and QR engagement points. The squad activates one. The brand shows up at all of them. First 3 Sundays: 2 venues. From the 4th Sunday: 3. As the programme grows, so does the footprint.
            </p>
          </div>
        </Card>
      </div>

      {/* THE SQUAD Section */}
      <div className="space-y-8 pt-8">
        <div className="section-label">02B: THE SQUAD</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {squadRoles.map((role, i) => (
            <Card 
              key={i} 
              className="p-8 bg-[#F8F5E6] border-none border-l-4 border-brand-gold rounded-[24px] space-y-4 shadow-xl transition-all hover:shadow-2xl hover:border-l-8"
            >
              <div className="flex items-center gap-4">
                <div className="text-brand-gold bg-brand-green/5 p-3 rounded-2xl">
                  {role.icon}
                </div>
                <span className="font-headline text-brand-green text-sm tracking-[4px] uppercase font-bold">
                  {role.role}
                </span>
              </div>
              <h4 className="font-headline text-2xl text-brand-green uppercase leading-tight tracking-tight">
                {role.title}
              </h4>
              <p className="font-body text-brand-green/80 text-sm leading-relaxed whitespace-pre-line">
                {role.body}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Deployment & Expansion Note */}
      <div className="max-w-4xl mx-auto space-y-6 p-10 bg-white/5 rounded-[40px] border border-white/5 relative overflow-hidden group">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="space-y-2">
            <h5 className="font-body font-bold text-xs text-brand-text-muted uppercase tracking-[3px]">Future Expansion</h5>
            <p className="font-body text-sm md:text-base text-brand-cream/80 leading-relaxed">
              As the Sunday community grows, Savanna Sundays becomes a platform for larger moments — festivals, concerts, seasonal events. The infrastructure scales.
            </p>
          </div>
          <div className="hidden md:block w-[1px] h-12 bg-white/10" />
          <div className="space-y-1">
            <p className="font-body text-xs md:text-sm text-brand-text-muted italic">
              Firefly recommends the squad venue each week based on crowd potential and content opportunities.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Venue Logo Grid */}
      <div className="pt-8 space-y-12">
        <div className="section-label text-center">Active Partner Network</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {venueData.map((v) => {
            const img = PlaceHolderImages.find(p => p.id === v.id);
            return (
              <Card 
                key={v.id} 
                className="p-8 bg-brand-dark-alt/50 border border-white/5 hover:border-brand-gold/50 transition-all duration-500 group flex flex-col items-center text-center space-y-6 rounded-[24px]"
              >
                {img && (
                  <div className="relative h-20 w-full flex items-center justify-center">
                    <Image 
                      src={img.imageUrl} 
                      alt={v.name} 
                      width={120}
                      height={80}
                      className="object-contain filter grayscale brightness-200 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{v.name}</h5>
                  <p className="font-body text-[11px] text-brand-text-muted uppercase tracking-wider font-bold">{v.location}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Infinite Marquee */}
        <div className="relative py-12 border-y border-white/5 overflow-hidden group">
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] space-x-12" style={{ animationDuration: '25s' }}>
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-12 shrink-0">
                {venueData.map((v) => {
                  const img = PlaceHolderImages.find(p => p.id === v.id);
                  return (
                    <div key={`${listIdx}-${v.id}`} className="flex items-center gap-6">
                      {img && (
                        <div className="relative h-10 w-24">
                          <Image 
                            src={img.imageUrl} 
                            alt={v.name} 
                            fill 
                            className="object-contain filter grayscale brightness-200 opacity-60"
                          />
                        </div>
                      )}
                      <span className="font-body text-sm text-brand-cream uppercase tracking-widest whitespace-nowrap">
                        {v.name}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-brand-gold" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Masking Gradient */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
        </div>

        <p className="font-body text-[11px] text-brand-text-muted italic text-center uppercase tracking-[2px] font-bold opacity-60">
          Firefly has active relationships with these venues and more. The network grows with the programme.
        </p>
      </div>
    </div>
  );
};