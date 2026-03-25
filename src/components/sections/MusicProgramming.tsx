
"use client";

import React from 'react';
import { Music, Mic2, Users, Camera, Instagram } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface SquadMember {
  name: string;
  role: string;
  handle: string;
  imageUrl?: string;
  description?: string;
}

const squadMembers: SquadMember[] = [
  { name: "DJ MOONS", role: "Resident DJ", handle: "@dj_moons", description: "Master of the Bongo-led open format." },
  { name: "DJ MAIN PATT", role: "Resident DJ", handle: "@djmainpatt", description: "Specializing in high-energy transitions." },
  { name: "SAMEER", role: "Resident DJ", handle: "@sameer_official", description: "Curator of 'Sonic Architecture'." },
  { name: "[MC Name TBC]", role: "MC — THE VOICE", handle: "@handle", description: "The voice of Savanna on the ground." },
];

/**
 * Helper to generate initials for avatar fallbacks.
 * Handles bracketed placeholders like "[MC Name TBC]" by returning "MC".
 */
const getInitials = (name: string) => {
  if (name.includes('[MC')) return "MC";
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
};

const SquadMemberCard = ({ name, role, handle, imageUrl, description }: SquadMember) => {
  const initials = getInitials(name);
  
  return (
    <div className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-500 hover:scale-105 border border-brand-gold/10 hover:border-brand-gold/30 shadow-2xl bg-[#1A1208]">
      {/* 120x120 Circular Avatar Container */}
      <div className="relative w-[120px] h-[120px] rounded-full border-2 border-brand-gold overflow-hidden mb-6 shrink-0 shadow-[0_0_20px_rgba(244,197,66,0.2)]">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-brand-green flex items-center justify-center">
            <span className="font-headline text-[36px] text-brand-gold tracking-widest leading-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="text-center space-y-3 relative z-10 w-full flex flex-col items-center">
        <h4 className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-gold tracking-widest uppercase leading-none">
          {name}
        </h4>
        
        {/* Styled Role Badge (Pill) */}
        <div className="bg-brand-gold/15 border border-brand-gold/30 rounded-full px-4 py-1.5 shadow-lg">
          <p className="font-body text-[10px] text-brand-gold uppercase tracking-[2px] font-bold leading-none">
            {role}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 pt-1 text-[#CD7F32] group-hover:text-brand-gold transition-colors">
          <Instagram size={14} />
          <span className="font-body text-[var(--text-sm)] font-bold tracking-widest">{handle}</span>
        </div>

        {description && (
          <p className="font-body text-[var(--text-sm)] text-brand-cream/60 leading-relaxed mt-4 max-w-[200px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-4xl space-y-6">
        <div className="section-label">03A — Sonic Architecture</div>
        <h3 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter">THE SAVANNA VYBE SQUAD</h3>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
          The engine behind every activation. Proven talent, local resonance, and city-wide influence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {squadMembers.map((member, i) => (
          <SquadMemberCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
};
