"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Heart, Share2, ShieldCheck, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ambassadorRoles = [
  { perk: "Free entry + 1 guest", duty: "WhatsApp Network Invites" },
  { perk: "VIP access at events", duty: "IG/TikTok Native Posting" },
  { perk: "Exclusive merch", duty: "Bring 3+ New Attendees" },
  { perk: "Early reveals", duty: "Brand Value Advocacy" },
];

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Strategic Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="section-label">05A: The Identity Moat</div>
          <h3 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase leading-tight">
            Building a culture, <br/>not just a crowd.
          </h3>
          <p className="font-body text-lg text-brand-cream/70 leading-relaxed">
            KWAL needs a loyal community. We build an identity people adopt—transforming passive attendees into cultural advocates through shared rituals and digital ownership.
          </p>
        </div>
        
        <Card className="p-10 bg-brand-green text-brand-cream border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
            <Users size={160} />
          </div>
          <div className="relative z-10 space-y-6">
             <div className="flex gap-4">
                <Badge className="bg-brand-gold text-brand-green text-[10px] uppercase font-bold px-4 py-1">Identity</Badge>
                <Badge className="bg-brand-teal text-white text-[10px] uppercase font-bold px-4 py-1">Ritual</Badge>
             </div>
             <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-snug">
               "People don't just attend; they belong."
             </p>
          </div>
        </Card>
      </div>

      {/* 5B: Ambassador Matrix */}
      <div className="space-y-10">
        <div className="section-label">05B: High-Yield Ambassador Program</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-dark-alt rounded-[40px] overflow-hidden border border-brand-gold/10 shadow-2xl">
            <Table>
              <TableHeader className="bg-brand-gold">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-brand-green font-headline tracking-widest py-8 px-10 text-lg uppercase">Exclusive Perk</TableHead>
                  <TableHead className="text-brand-green font-headline tracking-widest text-right px-10 text-lg uppercase">Advocacy Duty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ambassadorRoles.map((row, i) => (
                  <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-white/5">
                    <TableCell className="font-body font-bold text-lg py-6 px-10 text-brand-cream/80">
                      {row.perk}
                    </TableCell>
                    <TableCell className="font-body text-[11px] text-brand-gold font-bold uppercase tracking-[3px] text-right px-10">
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
               <Card key={i} className="p-8 bg-brand-dark border border-brand-gold/10 rounded-[24px] flex items-center justify-between group hover:border-brand-gold transition-all shadow-xl">
                  <div className="flex items-center gap-6">
                    <div className={`w-1 h-16 rounded-full ${t.color}`} />
                    <div className="space-y-1">
                      <h4 className="font-headline text-3xl text-brand-gold uppercase leading-none">{t.tier}</h4>
                      <p className="font-body text-[10px] text-brand-cream/40 font-bold uppercase tracking-[3px]">{t.count}</p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-brand-cream/50 max-w-[140px] text-right leading-relaxed">{t.desc}</p>
               </Card>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};