'use client';

import React from 'react';
import { Music, Mic2, Users, Camera, Instagram, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * THE SAVANNA VYBE SQUAD TALENT DATA
 * Brian/Gemini: Paste real photos, handles, and bios here.
 */
const squadMembers = [
  { 
    name: "DJ MOONS", 
    role: "Resident DJ", 
    handle: "@dj_moons", 
    imageUrl: undefined, 
    description: "Master of the Bongo-led open format, driving the energy at both mainstream and premium venues." 
  },
  { 
    name: "DJ MAIN PATT", 
    role: "Resident DJ", 
    handle: "@djmainpatt", 
    imageUrl: undefined, 
    description: "The heartbeat of the Savanna Vybe Squad, specializing in high-energy Bongo and Amapiano transitions." 
  },
  { 
    name: "SAMEER", 
    role: "Resident DJ", 
    handle: "@sameer_official", 
    imageUrl: undefined, 
    description: "Curator of the 'Sonic Architecture', blending Bongo foundations with global Afrobeats." 
  },
  { 
    name: "[MC Name TBC]", 
    role: "MC — THE SAVANNA VOICE", 
    handle: "@handle", 
    imageUrl: undefined, 
    description: "The voice of Savanna on the ground. A crowd-puller in their own right — running crowd interactions, brand shout-outs, and real-time engagement moments." 
  },
];

interface SquadMemberProps {
  name: string;
  role: string;
  handle: string;
  imageUrl?: string;
  description?: string;
}

/**
 * Reusable Profile Card Component
 * Optimized for DJs, MCs, and Influencers.
 */
const SquadMemberCard = ({ name, role, handle, imageUrl, description }: SquadMemberProps) => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  
  return (
    <div className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-500 hover:scale-105 border border-brand-gold/10 hover:border-brand-gold/30 shadow-2xl"
         style={{ backgroundColor: '#1A1208' }}>
      <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(244,197,66,0.15)] pointer-events-none" />
      
      {/* 100px Circular Image Frame with 2px Gold Border */}
      <div className="relative w-[100px] h-[100px] rounded-full border-2 border-brand-gold overflow-hidden mb-6 bg-brand-green/20 shrink-0">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 opacity-20">
             {savannaLogo && <Image src={savannaLogo.imageUrl} alt="Savanna" width={50} height={50} className="object-contain" />}
          </div>
        )}
      </div>

      <div className="text-center space-y-1 relative z-10 w-full">
        {/* Name: Bebas Neue 20px Gold */}
        <h4 className="font-headline text-[20px] text-brand-gold tracking-widest uppercase leading-none">
          {name || "[Name TBC]"}
        </h4>
        
        {/* Role: Source Sans 3 12px Cream */}
        <p className="font-body text-[12px] text-brand-cream uppercase tracking-[2px] font-bold opacity-80">
          {role}
        </p>
        
        {/* Handle: Source Sans 3 14px Muted Bronze with Instagram Icon */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[#CD7F32] group-hover:text-brand-gold transition-colors">
          <Instagram size={14} />
          <span className="font-body text-[14px] font-bold tracking-widest">{handle || "@handle"}</span>
        </div>

        {/* Description: Source Sans 3 14px Cream */}
        {description && (
          <p className="font-body text-[14px] text-brand-cream/70 leading-relaxed mt-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const squadRoles = [
  {
    role: "2 DJs",
    icon: <Music className="w-8 h-8" />,
    body: "Delivering all-rounded sets spanning Bongo, Afrobeats, amapiano, and whatever the room needs — with a consistent Bongo foundation."
  },
  {
    role: "MC — THE SAVANNA VOICE",
    icon: <Mic2 className="w-8 h-8" />,
    body: "The MC is the voice of Savanna on the ground. A crowd-puller in their own right — running crowd interactions, brand shout-outs, competition call-outs, and venue hype."
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

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-4xl space-y-6">
        <div className="section-label">03A: Sonic Architecture</div>
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

      <div className="space-y-10 pt-4">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-brand-gold/30" />
          <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-[5px]">TALENT PROFILES</h4>
        </div>

        {/* Dynamic Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {squadMembers.map((member, i) => (
            <SquadMemberCard 
              key={i} 
              name={member.name}
              role={member.role}
              handle={member.handle}
              imageUrl={member.imageUrl}
              description={member.description}
            />
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="font-body text-brand-cream/60 text-sm italic leading-relaxed pl-6 border-l-2 border-brand-gold/20">
            The resident DJs are the sound of Savanna Sundays. They play across both mainstream and premium venues, delivering all-rounded sets with a bias to Bongo music.
          </p>
        </div>
      </div>

      {/* Strategic Role Breakdown */}
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
