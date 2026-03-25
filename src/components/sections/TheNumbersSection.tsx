'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ReceiptText, 
  ShieldCheck, 
  Zap, 
  Camera,
  QrCode,
  Music,
  Video
} from 'lucide-react';

const lineItems = [
  { item: "DJ 1 opens with warm-up (Bongo, R&B, Afrobeats)", cost: "50,000" },
  { item: "DJ 2 takes peak time (High-energy Bongo, amapiano)", cost: "50,000" },
  { item: "MC / Brand Host — The Savanna Voice", cost: "40,000" },
  { item: "Influencer Pool (5 PAX)", cost: "100,000" },
  { item: "Content Production Crew", cost: "41,250" },
  { item: "Strategic Logistics", cost: "54,918" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance.", icon: <ShieldCheck size={20} /> },
  { label: "Squad Activation", desc: "Live talent.", icon: <Zap size={20} /> },
  { label: "Music Harvest", desc: "YouTube sets.", icon: <Music size={20} /> },
  { label: "Social Content", desc: "Optimized Reels.", icon: <Video size={20} /> },
  { label: "HD Photography", desc: "Lifestyle assets.", icon: <Camera size={20} /> },
  { label: "Data Capture", desc: "CRM entry.", icon: <QrCode size={20} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold" size={24} />
          <h4 className="font-headline text-4xl text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="section-subtitle">
          Transparent fixed-rate model covering talent, production, and data infrastructure city-wide.
        </p>
      </div>

      <div className="glass-tile rounded-[24px] overflow-hidden">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-4 px-8 text-sm uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-sm uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-body font-bold text-[11px] py-4 px-8 text-brand-cream/80 uppercase tracking-widest">{row.item}</TableCell>
                <TableCell className="font-headline text-2xl text-brand-gold text-right px-8">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold/10 border-none">
              <TableCell className="font-headline text-3xl py-6 px-8 text-brand-gold uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-4xl text-brand-gold text-right px-8 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-4">
        {checklistItems.map((item, i) => (
          <div key={i} className="glass-tile p-6 rounded-3xl flex flex-col items-center text-center gap-3 group hover:border-brand-gold/40">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="space-y-0.5">
              <p className="font-headline text-lg text-white uppercase leading-none">{item.label}</p>
              <p className="font-body text-[8px] text-brand-gold/50 font-bold uppercase tracking-widest">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
