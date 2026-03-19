
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ambassadorRoles = [
  { perk: "Free entry + 1 guest", duty: "Share invites via WhatsApp" },
  { perk: "VIP access at events", duty: "Post 2+ IG Stories on day" },
  { perk: "Exclusive merch", duty: "Bring 3+ new attendees" },
  { perk: "Early reveals", duty: "Represent brand values" },
];

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          KWAL wants a large and loyal community. Firefly builds both—an identity people adopt, a culture they participate in, and an infrastructure that scales from 50 founding members to thousands without losing intimacy.
        </p>
      </div>

      {/* 5A: Community Identity & Culture */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          5A: Identity & Culture
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 font-body text-sm md:text-base text-brand-green/70">
            <p>
              People don’t just attend Savanna Sundays—they identify as “Savanna Sundays people.” The identity is earned through shared experiences and cultural fluency.
            </p>
            <ul className="space-y-0">
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Shared language:</strong> Organic inside references.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Tonal Register:</strong> Dry wit becomes the register.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Cultural rituals:</strong> Traditions like drink rituals.</li>
            </ul>
          </div>

          {/* Flywheel Visual */}
          <div className="flex flex-col items-center py-4 md:py-0">
            <div className="section-label mb-6 md:mb-8">The Growth Flywheel</div>
            <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center">
              <svg className="absolute w-full h-full animate-spin [animation-duration:30s]">
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="8 8" opacity="0.3" />
              </svg>
              
              <div className="relative z-10 bg-brand-green w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl border border-brand-gold/30">
                <span className="font-headline text-brand-gold text-center leading-none text-[10px] md:text-xs">THE<br/>CORE</span>
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
                  className="absolute bg-white border border-brand-green/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-md"
                  style={{
                    transform: `rotate(${node.angle}deg) translateY(-100px) rotate(-${node.angle}deg)`
                  }}
                >
                  <span className="font-body font-bold text-[7px] md:text-[8px] tracking-widest uppercase text-brand-green">{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5B: Ambassador Program */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          5B: Ambassador Program
        </h3>

        <div className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-4 md:py-6 text-xs md:text-sm">Perks</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm text-right">Responsibilities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ambassadorRoles.map((row, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-body text-xs md:text-sm py-4 md:py-5 text-brand-green/80">
                    {row.perk}
                  </TableCell>
                  <TableCell className="font-body text-xs md:text-sm py-4 md:py-5 text-brand-teal font-bold text-right">
                    {row.duty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Ambassador Tiers Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6">
          <Card className="p-6 md:p-8 border border-brand-gold/20 rounded-[20px] md:rounded-[24px] bg-white text-center">
            <h6 className="font-headline text-xl md:text-2xl mb-2 md:mb-4 text-brand-green">Bronze</h6>
            <Badge className="bg-brand-gold/10 text-brand-gold border-none text-[10px]">Founding</Badge>
          </Card>
          
          <Card className="p-6 md:p-8 border-2 border-brand-gold rounded-[20px] md:rounded-[24px] bg-white text-center relative overflow-hidden shadow-xl md:scale-105 z-10">
            <h6 className="font-headline text-xl md:text-2xl mb-2 md:mb-4 text-brand-green">Silver</h6>
            <Badge className="bg-brand-green text-white text-[10px]">Active</Badge>
          </Card>

          <Card className="p-6 md:p-8 border-none rounded-[20px] md:rounded-[24px] bg-brand-green text-white text-center">
            <h6 className="font-headline text-xl md:text-2xl mb-2 md:mb-4 text-brand-gold">Gold</h6>
            <Badge className="bg-brand-gold text-brand-green text-[10px]">Elite</Badge>
          </Card>
        </div>
      </div>

      {/* 5D: Digital Community */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          5D: Digital Infrastructure
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-3">
            <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase">WhatsApp Community</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/60">Segmented groups for announcements, general chat, and ambassador coordination.</p>
          </div>
          <div className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-3">
            <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase">Email & SMS CRM</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/60">Built through ticketing and Wi-Fi portals for monthly newsletters and urgent launch alerts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
