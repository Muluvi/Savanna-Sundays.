"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReceiptText, ShieldCheck, Zap, Music, Video, Camera, QrCode } from 'lucide-react';

const lineItems = [
  { item: "DJ 1 opens with warm-up (Bongo, R&B, Afrobeats)", cost: "50,000" },
  { item: "DJ 2 takes peak time (High-energy Bongo, amapiano)", cost: "50,000" },
  { item: "MC / Brand Host — The Savanna Voice", cost: "40,000" },
  { item: "Influencer Pool (5 PAX)", cost: "100,000" },
  { item: "Content Production Crew", cost: "41,250" },
  { item: "Strategic Logistics", cost: "54,918" },
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold" size={24} />
          <h4 className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)]">
          Transparent fixed-rate model city-wide.
        </p>
      </div>

      <div className="glass-tile rounded-[24px] overflow-hidden">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-4 px-8 text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow key={i} className="border-white/5">
                <TableCell className="font-body font-bold text-[var(--text-xs)] py-4 px-8 text-brand-cream/80 uppercase tracking-widest">{row.item}</TableCell>
                <TableCell className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-gold text-right px-8">{row.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-brand-gold/10 border-none">
              <TableCell className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] py-6 px-8 text-brand-gold uppercase tracking-tighter">Weekly total</TableCell>
              <TableCell className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold text-right px-8 tracking-tighter">336,168</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
