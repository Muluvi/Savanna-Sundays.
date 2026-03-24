
'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  Calendar, 
  Landmark, 
  ReceiptText, 
  ShieldCheck, 
  Zap, 
  Heart,
  Sparkles,
  Camera,
  QrCode
} from 'lucide-react';

const lineItems = [
  { item: "DJ 1 (Warm-up set)", cost: "50,000" },
  { item: "DJ 2 (Peak time set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer pool (5 PAX)", cost: "100,000" },
  { item: "Content production", cost: "41,250" },
  { item: "Logistics & materials", cost: "8,550" },
];

const checklistItems = [
  { label: "2-3 Branded Venues", desc: "Visual dominance at all network locations.", icon: <ShieldCheck size={20} /> },
  { label: "Full Squad Activation", desc: "Live DJs, MC, and influencer reach.", icon: <Zap size={20} /> },
  { label: "Broadcast-Quality Set", desc: "Mastered for YouTube and socials.", icon: <Heart size={20} /> },
  { label: "4 Algorithm Reels", desc: "Optimised for Instagram and TikTok.", icon: <Sparkles size={20} /> },
  { label: "HD Photography", desc: "Lifestyle assets harvested weekly.", icon: <Camera size={20} /> },
  { label: "QR Competitions", desc: "Direct data capture for KWAL.", icon: <QrCode size={20} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-4">
          <ReceiptText className="text-brand-gold" size={28} />
          <h4 className="font-headline text-4xl md:text-7xl text-brand-gold uppercase tracking-tighter">
            The Investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-lg md:text-xl leading-relaxed">
          Transparent fixed-rate model covering the entire ecosystem of content, talent, and data across Nairobi.
        </p>
      </div>

      <div className="overflow-hidden border border-white/10 bg-white/[0.02] rounded-[32px]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-4 px-8 text-lg uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-lg uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-body font-bold text-sm py-4 px-8 text-brand-cream/80">{row.item}</TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-8">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-3xl md:text-5xl py-6 px-8 uppercase tracking-tighter">Weekly Total</TableCell>
              <TableCell className="font-headline text-4xl md:text-6xl text-right px-8 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <div className="section-label mb-0">Strategic Deliverables</div>
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-[24px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gold text-brand-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="font-headline text-xl text-brand-gold uppercase tracking-tight leading-tight">{item.label}</p>
                <p className="font-body text-brand-cream/50 text-[9px] leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
