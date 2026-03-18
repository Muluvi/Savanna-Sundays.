
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, UserPlus, MessageCircle, Twitter } from 'lucide-react';
import Image from 'next/image';

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-24">
      {/* Flywheel */}
      <div className="py-12 flex flex-col items-center">
        <div className="section-label mb-16">The Growth Flywheel</div>
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
          <svg className="absolute w-full h-full animate-spin [animation-duration:20s]">
            <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#F4C542" strokeWidth="2" strokeDasharray="10 10" />
          </svg>
          
          <div className="relative z-10 bg-brand-green w-24 h-24 rounded-full flex items-center justify-center shadow-2xl">
            <span className="font-headline text-brand-gold text-center leading-none">THE<br/>CORE</span>
          </div>

          {[
            { label: "Attendee", angle: 0 },
            { label: "Repeat", angle: 60 },
            { label: "Member", angle: 120 },
            { label: "Ambassador", angle: 180 },
            { label: "Promoter", angle: 240 },
            { label: "Advocate", angle: 300 },
          ].map((node, i) => (
            <div 
              key={i} 
              className="absolute bg-white border border-brand-gold/30 px-4 py-2 rounded-full shadow-lg"
              style={{
                transform: `rotate(${node.angle}deg) translateY(-${150}px) rotate(-${node.angle}deg)`
              }}
            >
              <span className="font-body font-bold text-[9px] tracking-widest uppercase text-brand-green">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ambassador Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-8 border border-brand-gold/20 rounded-[24px] bg-white text-center hover:scale-105 transition-transform">
          <h6 className="font-headline text-2xl mb-4">Bronze Tier</h6>
          <ul className="space-y-3 font-body text-sm text-brand-green/60 mb-6">
            <li>Priority RSVP access</li>
            <li>Branded welcome drink</li>
            <li>Digital community access</li>
          </ul>
          <Badge className="bg-brand-gold text-brand-green">Early Adopter</Badge>
        </Card>
        
        <Card className="p-8 border-2 border-brand-gold rounded-[24px] bg-white text-center relative overflow-hidden scale-110 z-10 shadow-xl">
           <div className="absolute top-0 right-0 p-2"><Badge className="bg-brand-gold text-brand-green">Popular</Badge></div>
          <h6 className="font-headline text-2xl mb-4">Silver Tier</h6>
          <ul className="space-y-3 font-body text-sm text-brand-green/60 mb-6">
            <li>Exclusive Lineup Previews</li>
            <li>Reserved table seating</li>
            <li>Limited Edition Merch</li>
          </ul>
          <Badge className="bg-brand-green text-white">The regular</Badge>
        </Card>

        <Card className="p-8 border-4 border-brand-gold rounded-[24px] bg-brand-green text-white text-center hover:scale-105 transition-transform">
          <h6 className="font-headline text-2xl mb-4 text-brand-gold">Gold Elite</h6>
          <ul className="space-y-3 font-body text-sm text-white/60 mb-6">
            <li>VIP Table Service</li>
            <li>All-Access Backstage</li>
            <li>Annual Gala Invitation</li>
          </ul>
          <Badge className="bg-brand-gold text-brand-green">Ambassador</Badge>
        </Card>
      </div>

      {/* Growth Tactics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png" alt="IG" width={24} height={24} />, title: "Instagram Strategy", text: "Leveraging high-fidelity Reels to drive organic discovery among lifestyle seekers." },
          { icon: <div className="p-1 bg-black rounded"><Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png" alt="TT" width={24} height={8} className="brightness-0 invert" /></div>, title: "Viral Loop Strategy", text: "Encouraging UGC through sound-led trends and on-site capture stations." },
          { icon: <MessageCircle className="text-[#1877F2]" size={24} />, title: "Facebook Events", title2: "Facebook Communities", text: "Building legacy databases through interest-based event grouping." },
          { icon: <Twitter className="text-black" size={24} />, title: "Real-time Hype", text: "Using X for lightning-fast lineup reveals and real-time interaction." },
        ].map((tactic, i) => (
          <div key={i} className="flex gap-4 items-start p-6 bg-white border border-brand-green/5 rounded-2xl hover:bg-brand-cream transition-colors">
            <div className="shrink-0">{tactic.icon}</div>
            <div>
              <h6 className="font-headline text-xl text-brand-green mb-1">{tactic.title}</h6>
              <p className="font-body text-sm text-brand-green/60">{tactic.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
