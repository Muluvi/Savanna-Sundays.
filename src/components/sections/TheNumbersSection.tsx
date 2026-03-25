
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
  { item: "DJ Talent (Warm-up + Peak)", cost: "100,000" },
  { item: "MC / Brand Host", cost: "40,000" },
  { id: "influencer", item: "Influencer Pool (5 PAX)", cost: "100,000" },
  { item: "Content Production Crew", cost: "41,250" },
  { item: "Strategic Logistics", cost: "54,918" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance.", icon: <ShieldCheck size={24} /> },
  { label: "Squad Activation", desc: "Live talent.", icon: <Zap size={24} /> },
  { label: "Music Harvest", desc: "YouTube sets.", icon: <Music size={24} /> },
  { label: "Social Content", desc: "Optimised Reels.", icon: <Video size={24} /> },
  { label: "HD Photography", desc: "Lifestyle assets.", icon: <Camera size={24} /> },
  { label: "Data Capture", desc: "CRM entry.", icon: <QrCode size={24} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold" size={28} />
          <h4 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-base leading-relaxed max-w-xl">
          Transparent fixed-rate model covering talent, production, and data infrastructure.
        </p>
      </div>

      <div className="overflow-hidden glass-tile rounded-[24px] border-brand-gold/20 bg-white/[0.04] shadow-2xl">
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
                <TableCell className="font-body font-bold text-[11px] py-4 px-8 text-brand-cream uppercase tracking-widest">{row.item}</TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-8">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold text-brand-green border-none">
              <TableCell className="font-headline text-2xl md:text-4xl py-6 px-8 uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-3xl md:text-5xl text-right px-8 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-6 pt-4">
        <div className="text-center space-y-1">
          <div className="section-label mb-0 opacity-100 text-brand-gold">Strategic deliverables</div>
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter leading-none">The Weekly Payload</h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group glass-tile p-6 rounded-[32px] flex flex-col items-center text-center gap-3 hover:border-brand-gold/60 shadow-xl bg-white/[0.05] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="font-headline text-xl text-brand-cream uppercase tracking-tight leading-none group-hover:text-brand-gold transition-colors">{item.label}</p>
                <p className="font-body text-brand-gold/70 text-[10px] leading-tight font-bold uppercase tracking-[2px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
