
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { BrushStroke } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { Play, AudioLines, Share2, ArrowRight } from 'lucide-react';

const platformsLeft = [
  { name: "Instagram", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png", role: "Reels & Live" },
  { name: "TikTok", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png", role: "Clips & Live" },
  { name: "Facebook", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765889247/AZsnL4dMdfGc81To27QzCg-AZsnL4dMtdFVyuKofEOY6Q_20251216_154319_0000_nq9hvp.png", role: "Event Pages" },
  { name: "X", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png", role: "Moment Recap" },
];

const platformsRight = [
  { name: "YouTube", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764351543/YouTube_Icon_18_lal2zf.jpg", role: "Full DJ Sets" },
  { name: "Spotify", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764344747/Spotify_Primary_Logo_RGB_Green_hpueq3.png", role: "Playlists" },
  { name: "SoundCloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765721100/686243c90161ea53ca36dd68_01-primary-white-transparent-p-1600_y4btv4.png", role: "Long Mixes" },
  { name: "Mixcloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1767368053/6e028600-2341-4632-9e46-78fffdae5809_20260102_183329_0000_araocz.png", role: "DJ Mixes" },
];

export const ContentSocialSection = () => {
  return (
    <div className="space-y-24">
      {/* Platform Ecosystem */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Column 1 */}
          <div className="space-y-8">
            <div className="relative inline-block mb-4">
              <BrushStroke className="w-full h-8 opacity-40 -translate-y-1" color="#F4C542" />
              <h5 className="font-headline text-3xl text-brand-green relative z-10 px-4">REAL-TIME CAPTURE</h5>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platformsLeft.map((p, i) => (
                <Card key={i} className="p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-gold transition-colors">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <Image src={p.logo} alt={p.name} width={36} height={36} className={`object-contain ${p.name === 'X' ? 'brightness-0' : ''}`} />
                  </div>
                  <span className="font-body font-bold text-[10px] uppercase tracking-widest text-brand-green/40 group-hover:text-brand-gold transition-colors">{p.role}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <div className="relative inline-block mb-4">
              <BrushStroke className="w-full h-8 opacity-40 -translate-y-1" color="#2D8C7F" />
              <h5 className="font-headline text-3xl text-brand-green relative z-10 px-4">BETWEEN SUNDAYS</h5>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platformsRight.map((p, i) => (
                <Card key={i} className="p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-teal transition-colors">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <Image src={p.logo} alt={p.name} width={36} height={36} className="object-contain" />
                  </div>
                  <span className="font-body font-bold text-[10px] uppercase tracking-widest text-brand-green/40 group-hover:text-brand-teal transition-colors">{p.role}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Connector */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 border-t-2 border-dashed border-brand-gold/30 pointer-events-none" />
      </div>

      {/* DJ Set Pipeline */}
      <div className="py-12 bg-brand-green rounded-[30px] p-10 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h5 className="font-headline text-3xl mb-12 text-center tracking-widest uppercase">The Music Content Pipeline</h5>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: "Live Set", icon: <Play size={18} /> },
              { label: "Audio Capture", icon: <AudioLines size={18} /> },
              { label: "Post-Prod", icon: <Share2 size={18} /> },
              { label: "Upload", icon: <ArrowRight size={18} /> },
              { label: "Short clips", icon: <Play size={18} /> },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-white/5">
                    {step.icon}
                  </div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest text-white/50">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="hidden md:block text-brand-gold/40" size={16} />
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center gap-6 pt-8 border-t border-white/5">
            {['spotify', 'youtube', 'soundcloud', 'apple', 'mixcloud'].map((p) => (
              <div key={p} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center grayscale opacity-50">
                <div className="w-4 h-4 bg-white rounded-full opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="space-y-6">
        <div className="section-label">30-Day Content Matrix</div>
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {[...Array(35)].map((_, i) => {
            const types = ['gold', 'teal', 'green', 'yellow'];
            const type = types[i % 4];
            const colors = {
              gold: 'bg-brand-gold/20 border-brand-gold/10',
              teal: 'bg-brand-teal/20 border-brand-teal/10',
              green: 'bg-brand-green/20 border-brand-green/10',
              yellow: 'bg-brand-light-yellow/40 border-brand-light-yellow/20',
            };
            return (
              <div key={i} className={`aspect-square rounded-md border ${colors[type as keyof typeof colors]} flex items-center justify-center overflow-hidden`}>
                <div className="w-2 h-2 rounded-full bg-black/5" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
