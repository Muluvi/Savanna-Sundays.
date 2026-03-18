
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassWater, Mic2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-24">
      {/* Masonry Mood Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        <div className="md:col-span-2 rounded-[24px] p-8 flex flex-col justify-end text-brand-green relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #F4C542 0%, #E8A820 55%, #2D8C7F 100%)' }}>
          <div className="relative z-10">
            <h5 className="font-headline text-4xl mb-2">Golden Hour Energy</h5>
            <p className="font-body text-brand-green/60">Premium, vibrant, and unmistakably Savanna.</p>
          </div>
        </div>
        <div className="rounded-[24px] p-8 flex flex-col justify-center items-center text-center text-white" style={{ background: 'linear-gradient(130deg, #1F4D3A 0%, #2D8C7F 100%)' }}>
          <h5 className="font-headline text-3xl mb-2 uppercase">Premium Lounge</h5>
          <div className="w-12 h-1 bg-brand-gold mx-auto" />
        </div>
        <div className="rounded-[24px] p-8 flex flex-col justify-end bg-brand-cream border border-brand-green/10" style={{ background: 'radial-gradient(ellipse at top, #F4C542, #F8F5E6 80%)' }}>
           <h5 className="font-headline text-3xl text-brand-green">Fresh & Crisp</h5>
        </div>
        <div className="md:col-span-2 bg-brand-green rounded-[24px] p-8 flex items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                <span className="font-headline text-2xl text-brand-gold">01</span>
              </div>
              <span className="font-body font-bold text-[10px] text-white/40 tracking-[3px] uppercase">Witty</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                <span className="font-headline text-2xl text-brand-gold">02</span>
              </div>
              <span className="font-body font-bold text-[10px] text-white/40 tracking-[3px] uppercase">Playful</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                <span className="font-headline text-2xl text-brand-gold">03</span>
              </div>
              <span className="font-body font-bold text-[10px] text-white/40 tracking-[3px] uppercase">Sharp</span>
            </div>
        </div>
      </div>

      {/* Staff Roles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-8 text-center bg-white rounded-[24px]">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <GlassWater className="text-brand-gold" size={28} />
          </div>
          <h6 className="font-headline text-2xl text-brand-green mb-2">The Mixologist</h6>
          <p className="font-body text-brand-green/50 text-[14px]">Branded yellow aprons and precision serving.</p>
        </Card>
        <Card className="p-8 text-center bg-white rounded-[24px]">
          <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mic2 className="text-brand-teal" size={28} />
          </div>
          <h6 className="font-headline text-2xl text-brand-green mb-2">The Vibe Host</h6>
          <p className="font-body text-brand-green/50 text-[14px]">Cultural connectors ensuring seamless energy flow.</p>
        </Card>
        <Card className="p-8 text-center bg-white rounded-[24px]">
          <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-brand-green" size={28} />
          </div>
          <h6 className="font-headline text-2xl text-brand-green mb-2">Elite Security</h6>
          <p className="font-body text-brand-green/50 text-[14px]">Unobtrusive but vigilant safety protocols.</p>
        </Card>
      </div>

      {/* Mockups */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="section-label">Digital Presence</div>
          <h4 className="font-headline text-4xl text-brand-green">Always On. Always Trending.</h4>
          <p className="font-body text-lg text-brand-green/70">
            Our social strategy leverages the aesthetics of Sunday culture to create FOMO in real-time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-brand-gold text-brand-green px-4 py-2 rounded-full font-bold">Witty</Badge>
            <Badge className="bg-brand-green text-white px-4 py-2 rounded-full font-bold">Confident</Badge>
            <Badge className="bg-brand-teal text-white px-4 py-2 rounded-full font-bold">Culturally Sharp</Badge>
            <Badge variant="outline" className="border-brand-green text-brand-green px-4 py-2 rounded-full font-bold">Never Corporate</Badge>
          </div>
        </div>
        <div className="flex gap-4">
          <Card className="w-[180px] aspect-[9/16] bg-brand-ink rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group">
            <Image 
              src="https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png" 
              alt="IG" 
              width={40} 
              height={40} 
              className="absolute top-4 right-4 z-10 opacity-50" 
            />
            <div className="w-full h-full bg-brand-gold/10 flex items-end p-4">
              <span className="font-headline text-brand-gold text-xl leading-none">IG REELS</span>
            </div>
          </Card>
          <Card className="w-[180px] aspect-[9/16] bg-brand-ink rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group">
            <Image 
              src="https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png" 
              alt="TikTok" 
              width={60} 
              height={20} 
              className="absolute top-4 right-4 z-10 brightness-0 invert opacity-50" 
            />
            <div className="w-full h-full bg-brand-teal/10 flex items-end p-4">
              <span className="font-headline text-brand-teal text-xl leading-none">TIKTOK LIVES</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
