"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info, TrendingUp, Calendar, Landmark, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const lineItems = [
  { item: "DJ 1 (Warm-Up Set)", cost: "50,000" },
  { item: "DJ 2 (Peak Time Set)", cost: "50,000" },
  { item: "MC", cost: "40,000" },
  { item: "Influencers (5 × KSh 20,000)", cost: "100,000" },
  { item: "Content Generation & Production", cost: "41,250" },
  { item: "Miscellaneous (Branding/Logistics)", cost: "8,550" },
];

const projections = [
  {
    title: "MONTH 1–3 (2 venues/Sunday)",
    weekly: "KSh 336,168",
    weeklySub: "Total Activation (1 Squad + 1 Partner)",
    monthly: "KSh 1,344,672",
    icon: <Calendar className="text-brand-gold" size={24} />
  },
  {
    title: "MONTH 4+ (scaling to 3 venues)",
    weekly: "KSh 336,168",
    weeklySub: "Total Activation (1 Squad + 2 Partners)",
    monthly: "KSh 1,344,672",
    icon: <TrendingUp className="text-brand-gold" size={24} />
  },
  {
    title: "QUARTERLY INVESTMENT",
    weekly: "Q1 (Month 1–3)",
    weeklySub: "Fixed Strategic Spend",
    monthly: "KSh 4,034,016",
    icon: <Landmark className="text-brand-gold" size={24} />
  }
];

const checklistItems = [
  "2–3 branded venues across Nairobi every Sunday",
  "1 full squad activation with live DJs, MC, and influencers",
  "1 broadcast-quality DJ set for YouTube",
  "4 algorithm-optimised Reels for Instagram and TikTok",
  "Unlimited edited, colour-graded photos",
  "20+ influencer Stories and Reels",
  "QR-driven competitions at every venue (built by Firefly)",
  "A growing, owned community around Savanna Sundays",
  "Full brand presence on every surface, every Sunday"
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4 max-w-2xl">
        <h4 className="font-body text-xl md:text-2xl text-brand-green font-bold uppercase tracking-wider">
          Weekly investment per Savanna Sunday Activation
        </h4>
        <p className="font-body text-brand-green/60 text-sm md:text-base leading-relaxed">
          A transparent breakdown of the operational and strategic costs. This fixed weekly rate covers the entire activation across all participating venues.
        </p>
      </div>

      <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/10 shadow-2xl">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-6 px-8 text-sm md:text-base uppercase">
                Sunday Activation Item
              </TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-sm md:text-base uppercase">
                KSh
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow 
                key={i} 
                className={`border-brand-green/5 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#FDF8EC]'}`}
              >
                <TableCell className="font-body font-bold text-xs md:text-sm py-5 px-8 text-brand-green">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-lg md:text-xl text-brand-green text-right px-8">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            {/* Subtotal */}
            <TableRow className="bg-white border-t-2 border-brand-green/10">
              <TableCell className="font-headline text-lg md:text-xl py-6 px-8 text-brand-green/60">
                Activation Subtotal
              </TableCell>
              <TableCell className="font-headline text-2xl text-brand-green/60 text-right px-8">
                289,800
              </TableCell>
            </TableRow>

            {/* Agency Fee - Highlighted in Green */}
            <TableRow className="bg-brand-green text-white">
              <TableCell className="font-body font-bold text-xs md:text-sm py-6 px-8">
                Firefly Management Agency Fee (16%)
              </TableCell>
              <TableCell className="font-headline text-2xl text-brand-gold text-right px-8">
                46,368
              </TableCell>
            </TableRow>

            {/* Total - Bold Gold */}
            <TableRow className="bg-white border-t-4 border-brand-gold">
              <TableCell className="font-headline text-2xl md:text-4xl py-8 px-8 text-brand-gold uppercase tracking-tighter">
                Weekly Total Activation
              </TableCell>
              <TableCell className="font-headline text-3xl md:text-5xl text-brand-gold text-right px-8 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-8">
        <div className="section-label">Investment Projections (Fixed Rate)</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projections.map((p, i) => (
            <Card key={i} className="p-8 bg-[#FDF8EC] border-2 border-brand-gold rounded-[32px] space-y-6 shadow-xl flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-2">
                  {p.icon}
                </div>
                <h5 className="font-headline text-xl text-brand-green uppercase leading-tight tracking-tight">
                  {p.title}
                </h5>
                <div className="space-y-1">
                  <p className="font-body text-[10px] text-brand-green/40 uppercase tracking-[2px] font-bold">Weekly Rate</p>
                  <p className="font-headline text-3xl text-brand-green leading-none">{p.weekly}</p>
                  <p className="font-body text-[10px] text-brand-green/60 italic">{p.weeklySub}</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-brand-gold/20">
                <p className="font-body text-[10px] text-brand-gold uppercase tracking-[2px] font-bold mb-1">Monthly Investment</p>
                <p className="font-headline text-4xl text-brand-gold tracking-tighter leading-none">
                  {p.monthly}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-brand-dark-alt border border-white/10 rounded-[32px] flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
            <Info size={24} />
          </div>
          <div className="space-y-2">
            <p className="font-body text-xs md:text-sm text-brand-cream leading-relaxed italic">
              "Every Sunday activation costs KSh 336,168 in total. This figure covers the full squad deployment, talent, multi-platform content production, and management. Venue branding materials for both squad and partner venues are included. The rate remains fixed as we scale the partner venue network."
            </p>
            <p className="font-body text-[10px] text-brand-gold uppercase tracking-[2px] font-bold">
              Firefly Management receives a fixed 16% agency fee included in the total activation cost.
            </p>
          </div>
        </Card>
      </div>

      {/* WHAT KWAL GETS EVERY WEEK */}
      <div className="pt-24 space-y-12">
        <div className="text-center space-y-4">
          <div className="section-label">THE EXECUTIVE SUMMARY</div>
          <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            WHAT KWAL GETS EVERY WEEK
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 px-4 max-w-6xl mx-auto">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "flex items-start gap-6 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards opacity-0"
              )}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-300">
                <CheckCircle2 size={28} />
              </div>
              <p className="font-body text-brand-cream/90 text-lg md:text-xl leading-snug uppercase font-bold tracking-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
