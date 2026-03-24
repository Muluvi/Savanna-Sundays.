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
  { label: "Branded Venues", desc: "Visual dominance.", icon: <ShieldCheck size={18} /> },
  { label: "Squad Activation", desc: "Live talent.", icon: <Zap size={18} /> },
  { label: "Music Harvest", desc: "YouTube sets.", icon: <Music size={18} /> },
  { label: "Social Content", desc: "Optimised Reels.", icon: <Video size={18} /> },
  { label: "HD Photography", desc: "Lifestyle assets.", icon: <Camera size={18} /> },
  { label: "Data Capture", desc: "CRM entry.", icon: <QrCode size={18} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold opacity-40" size={20} />
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/60 text-base leading-relaxed max-w-2xl">
          Transparent fixed-rate model covering talent, production, and data infrastructure.
        </p>
      </div>

      <div className="overflow-hidden glass-tile rounded-[24px] border-none bg-white/[0.02]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-3 px-6 text-sm uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-6 text-sm uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-body font-bold text-[11px] py-3 px-6 text-brand-cream/50 uppercase tracking-widest">{row.item}</TableCell>
                <TableCell className="font-headline text-xl text-brand-cream text-right px-6">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold/90 text-brand-green backdrop-blur-md">
              <TableCell className="font-headline text-2xl md:text-4xl py-4 px-6 uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-3xl md:text-5xl text-right px-6 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-6 pt-4">
        <div className="text-center">
          <div className="section-label mb-0">Strategic deliverables</div>
          <h4 className="font-headline text-2xl md:text-5xl text-brand-gold uppercase tracking-tighter">The Weekly Payload</h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group glass-tile p-5 rounded-[24px] flex flex-col items-center text-center gap-2 hover:border-brand-gold/40 shadow-xl border-none bg-white/[0.02]"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <p className="font-headline text-base text-white uppercase tracking-tight leading-none group-hover:text-brand-gold transition-colors">{item.label}</p>
                <p className="font-body text-brand-cream/40 text-[8px] leading-tight font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};