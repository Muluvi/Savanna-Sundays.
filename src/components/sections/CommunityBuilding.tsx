
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Heart, Share2, ShieldCheck, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BrushStroke } from '@/components/brand/VisualElements';

const ambassadorRoles = [
  { perk: "Free entry + 1 guest", duty: "WhatsApp Network Invites" },
  { perk: "VIP access at events", duty: "IG/TikTok Native Posting" },
  { perk: "Exclusive merch", duty: "Bring 3+ New Attendees" },
  { perk: "Early reveals", duty: "Brand Value Advocacy" },
];

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">05A: The Identity Moat</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Building a culture, <br/>not just a crowd.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            KWAL needs a loyal community. We build an identity people adopt—transforming passive attendees into cultural advocates through shared rituals and digital ownership.
          </p>
        </div>
        
        <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Users size={120} />
          </div>
          <div className="relative z-10 space-y-4">
             <div className="flex gap-2">
                <Badge className="bg-brand-gold text-brand-green text-[8px] uppercase font-bold">Identity</Badge>
                <Badge className="bg-brand-teal text-white text-[8px] uppercase font-bold">Ritual</Badge>
             </div>
             <p className="font-serif italic text-xl md:text-2xl text-brand-gold">
               "People don't just attend; they belong."
             </p>
          </div>
        </Card>
      </div>

      {/* The Growth Flywheel Visual */}
      <div className="py-12 flex flex-col items-center animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label text-center mb-16">The Community Flywheel</div>
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
          {/* Pulsing Core */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-green shadow-2xl flex items-center justify-center z-20 border border-brand-gold/30">
            <div className="text-center font-headline text-brand-gold leading-none">
              <span className="text-[10px] tracking-widest block mb-1 opacity-50">THE</span>
              <span className="text-xl md:text-2xl">VIBE</span>
            </div>
          </div>

          {/* Rotating Orbit */}
          <div className="absolute inset-0 animate-spin [animation-duration:40s] pointer-events-none">
            <svg className="w-full h-full opacity-10">
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="12 12" />
            </svg>
            
            {[
              { label: "Attendee", angle: 0, icon: <Users size={12} /> },
              { label: "Member", angle: 72, icon: <Heart size={12} /> },
              { label: "Ambassador", angle: 144, icon: <ShieldCheck size={12} /> },
              { label: "Advocate", angle: 216, icon: <Zap size={12} /> },
              { label: "Recruiter", angle: 288, icon: <Share2 size={12} /> },
            ].map((node, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${node.angle}deg) translateY(-42%) rotate(-${node.angle}deg)` }}
              >
                <div className="bg-white border border-brand-green/5 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-brand-gold">{node.icon}</span>
                  <span className="font-body font-bold text-[8px] tracking-[2px] text-brand-green uppercase">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5B: Ambassador Matrix */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">05B: High-Yield Ambassador Program</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/5 shadow-xl">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-6 px-8 text-xs md:text-sm">Exclusive Perk</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm text-right px-8">Advocacy Duty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ambassadorRoles.map((row, i) => (
                  <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5">
                    <TableCell className="font-body font-bold text-xs md:text-sm py-5 px-8 text-brand-green/80">
                      {row.perk}
                    </TableCell>
                    <TableCell className="font-body text-[10px] text-brand-teal font-bold uppercase tracking-widest text-right px-8">
                      {row.duty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="grid grid-cols-1 gap-4">
             {[
               { tier: "Gold Elite", count: "10 PAX", desc: "Top-tier recruiters & tastemakers.", color: "bg-brand-gold" },
               { tier: "Silver Active", count: "40 PAX", desc: "Consistent vibe-shapers.", color: "bg-brand-teal" },
               { tier: "Bronze Found", count: "50 PAX", desc: "Initial culture builders.", color: "bg-brand-green" },
             ].map((t, i) => (
               <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center justify-between group hover:border-brand-gold transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-12 rounded-full ${t.color}`} />
                    <div className="space-y-1">
                      <h4 className="font-headline text-lg text-brand-green uppercase">{t.tier}</h4>
                      <p className="font-body text-[10px] text-brand-green/40 font-bold uppercase tracking-widest">{t.count}</p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-brand-green/50 max-w-[120px] text-right">{t.desc}</p>
               </Card>
             ))}
          </div>
        </div>
      </div>

      {/* 5D: Digital Ecosystem */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">05C: The Digital Infrastructure</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card className="p-6 md:p-8 bg-brand-cream/50 border border-brand-green/5 rounded-[24px] flex items-start gap-6 group hover:bg-white transition-all">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-xl text-brand-green uppercase">WhatsApp Priority Channel</h4>
              <p className="font-body text-xs md:text-sm text-brand-green/60 leading-relaxed">
                Direct access to announcements, secret RSVPs, and community polls. High-retention engagement platform.
              </p>
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-brand-cream/50 border border-brand-green/5 rounded-[24px] flex items-start gap-6 group hover:bg-white transition-all">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-xl text-brand-green uppercase">CRM Data Harvesting</h4>
              <p className="font-body text-xs md:text-sm text-brand-green/60 leading-relaxed">
                Conversion mapping from ticketing and on-site Wi-Fi portals into a proprietary CRM for lifetime value tracking.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
