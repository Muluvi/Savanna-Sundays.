'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Landmark, CheckCircle2, Sparkles, ReceiptText, ShieldCheck, Zap, Heart } from 'lucide-react';

const lineItems = [
  { item: "DJ 1 (Warm-up set)", cost: "50,000" },
  { item: "DJ 2 (Peak time set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer content pool (5 PAX)", cost: "100,000" },
  { item: "Content generation & production", cost: "41,250" },
  { item: "Logistics & brand materials", cost: "8,550" },
];

const projections = [
  {
    title: "Phase 1 ignition",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 1 Partner venue",
    monthly: "KSh 1,344,672",
    icon: <Calendar className="text-brand-gold" size={28} />
  },
  {
    title: "Phase 2 expansion",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 2 Partner venues",
    monthly: "KSh 1,344,672",
    icon: <TrendingUp className="text-brand-gold" size={28} />
  },
  {
    title: "Quarterly projection",
    weekly: "Months 1–3",
    weeklySub: "Fixed strategic spend",
    monthly: "KSh 4,034,016",
    icon: <Landmark className="text-brand-gold" size={28} />
  }
];

const checklistItems = [
  { label: "2–3 branded venues every Sunday", desc: "Visual dominance at all network locations.", icon: <ShieldCheck size={28} /> },
  { label: "1 full squad activation", desc: "Live DJs, MC, and influencer reach.", icon: <Zap size={28} /> },
  { label: "1 broadcast-quality DJ set", desc: "Mastered for YouTube and socials.", icon: <Heart size={28} /> },
  { label: "4 algorithm-optimised Reels", desc: "Tailored for Instagram and TikTok discovery.", icon: <Zap size={28} /> },
  { label: "Unlimited HD photography", desc: "High-end lifestyle assets harvested weekly.", icon: <Sparkles size={28} /> },
  { label: "QR-driven competitions", desc: "Direct data capture and CRM growth for KWAL.", icon: <ReceiptText size={28} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-20">
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-6">
          <ReceiptText className="text-brand-gold" size={48} />
          <h4 className="font-headline text-5xl md:text-9xl text-brand-gold uppercase tracking-tighter">
            The strategic investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-xl md:text-2xl leading-relaxed">
          The activation follows a transparent fixed-rate model covering the entire ecosystem of content, talent, and data across Nairobi.
        </p>
      </div>

      <div className="overflow-hidden border-t border-white/10 bg-white/[0.02] backdrop-blur-3xl rounded-[48px]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-8 px-12 text-2xl uppercase">
                Tactical breakdown
              </TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-12 text-2xl uppercase">
                KSh
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-body font-bold text-lg py-6 px-12 text-brand-cream/80">{row.item}</TableCell>
                <TableCell className="font-headline text-4xl text-brand-cream text-right px-12">{row.cost}</TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-white/5 border-t-2 border-white/10">
              <TableCell className="font-headline text-2xl py-8 px-12 text-brand-gold/60">Activation subtotal</TableCell>
              <TableCell className="font-headline text-5xl text-brand-gold/60 text-right px-12">289,800</TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold/5">
              <TableCell className="font-body font-bold text-xl py-8 px-12 text-brand-gold">Firefly agency fee (16%)</TableCell>
              <TableCell className="font-headline text-5xl text-brand-gold text-right px-12">46,368</TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-5xl md:text-8xl py-12 px-12 uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-6xl md:text-9xl text-right px-12 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projections.map((p, i) => (
          <div key={i} className="p-12 border border-brand-gold/10 rounded-[56px] space-y-10 flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-700 bg-brand-gold/5">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h5 className="font-headline text-4xl text-brand-gold uppercase tracking-tight">{p.title}</h5>
              <div className="space-y-2">
                <p className="font-headline text-5xl text-white">{p.weekly}</p>
                <p className="font-body text-xs text-white/40 font-bold uppercase tracking-[5px]">{p.weeklySub}</p>
              </div>
            </div>
            
            <div className="pt-10 border-t border-white/10">
              <p className="font-body text-xs text-brand-gold uppercase tracking-[5px] font-bold mb-2">Monthly budget</p>
              <p className="font-headline text-6xl text-brand-gold tracking-tighter leading-none">{p.monthly}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-16 pt-24">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="text-brand-gold" size={40} />
            <span className="section-label mb-0">Strategic deliverables</span>
          </div>
          <h4 className="font-headline text-6xl md:text-9xl text-brand-gold uppercase tracking-tighter">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-start gap-8 p-12 rounded-[56px] bg-brand-gold/5 border border-brand-gold/10 group hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500">
              <div className="shrink-0 w-14 h-14 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-3">
                <p className="font-headline text-3xl text-brand-gold uppercase tracking-tight leading-tight">{item.label}</p>
                <p className="font-body text-brand-cream/60 text-sm leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
