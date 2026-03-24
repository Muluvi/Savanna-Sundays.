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
  { item: "DJ 1 (Warm-up set)", cost: "50,000" },
  { item: "DJ 2 (Peak time set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer pool (5 PAX)", cost: "100,000" },
  { item: "Content production", cost: "41,250" },
  { item: "Logistics & materials", cost: "8,550" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance.", icon: <ShieldCheck size={20} /> },
  { label: "Squad Activation", desc: "Live talent & hype.", icon: <Zap size={20} /> },
  { label: "Music Harvest", desc: "YouTube DJ sets.", icon: <Music size={20} /> },
  { label: "Social Content", desc: "Optimised Reels.", icon: <Video size={20} /> },
  { label: "HD Photography", desc: "Lifestyle assets.", icon: <Camera size={20} /> },
  { label: "Data Capture", desc: "CRM competition.", icon: <QrCode size={20} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-3 max-w-4xl">
        <div className="flex items-center gap-4">
          <ReceiptText className="text-brand-gold opacity-60" size={24} />
          <h4 className="font-headline text-4xl md:text-7xl text-brand-gold uppercase tracking-tighter">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/70 text-lg leading-relaxed">
          Transparent fixed-rate model covering talent, production, and data infrastructure.
        </p>
      </div>

      <div className="overflow-hidden border border-white/10 glass-tile rounded-[32px] border-none">
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
                <TableCell className="font-body font-bold text-sm py-4 px-8 text-brand-cream/60">{row.item}</TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-8">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold/90 text-brand-green backdrop-blur-md">
              <TableCell className="font-headline text-3xl md:text-5xl py-6 px-8 uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-4xl md:text-6xl text-right px-8 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-8 pt-6">
        <div className="text-center">
          <div className="section-label mb-1">Strategic deliverables</div>
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter">The Weekly Payload</h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group glass-tile p-5 rounded-[24px] flex flex-col items-center text-center gap-3 hover:border-brand-gold/40 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="font-headline text-lg text-white uppercase tracking-tight leading-none">{item.label}</p>
                <p className="font-body text-brand-cream/40 text-[8px] leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};