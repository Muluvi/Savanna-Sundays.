"use client";

import React from 'react';
import { Music, Mic2, Users, Camera, Instagram } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const squadMembers = [
  { name: "DJ MOONS", role: "Resident DJ", handle: "@dj_moons", imageUrl: undefined, description: "Master of the Bongo-led open format." },
  { name: "DJ MAIN PATT", role: "Resident DJ", handle: "@djmainpatt", imageUrl: undefined, description: "Specializing in high-energy transitions." },
  { name: "SAMEER", role: "Resident DJ", handle: "@sameer_official", imageUrl: undefined, description: "Curator of 'Sonic Architecture'." },
  { name: "[MC Name TBC]", role: "MC — THE VOICE", handle: "@handle", imageUrl: undefined, description: "The voice of Savanna on the ground." },
];

const SquadMemberCard = ({ name, role, handle, imageUrl, description }: any) => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  return (
    <div className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-500 hover:scale-105 border border-brand-gold/10 hover:border-brand-gold/30 shadow-2xl bg-[#1A1208]">
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
        <h4 className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] text-brand-gold tracking-widest uppercase leading-none">{name}</h4>
        <p className="font-body text-[var(--text-xs)] text-brand-cream uppercase tracking-[2px] font-bold opacity-80">{role}</p>
        <div className="flex items-center justify-center gap-2 pt-2 text-[#CD7F32] group-hover:text-brand-gold">
          <Instagram size={14} />
          <span className="font-body text-[var(--text-sm)] font-bold tracking-widest">{handle}</span>
        </div>
        {description && <p className="font-body text-[var(--text-sm)] text-brand-cream/70 leading-relaxed mt-4">{description}</p>}
      </div>
    </div>
  );
};

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-4xl space-y-6">
        <div className="section-label">03A Sonic Architecture</div>
        <h3 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter">THE SAVANNA VYBE SQUAD</h3>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">The engine behind every activation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {squadMembers.map((member, i) => <SquadMemberCard key={i} {...member} />)}
      </div>
    </div>
  );
};
