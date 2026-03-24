"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Beer, Smartphone, Users, MapPin } from 'lucide-react';

const squadBudget = [
  { item: "MC", cost: "40,000" },
  { item: "DJ 1", cost: "50,000" },
  { item: "DJ 2", cost: "50,000" },
  { item: "Influencer Squad (5 PAX)", cost: "100,000" },
  { item: "Anchor Venue Permit/Ops", cost: "50,000" },
];

const brandingBudget = [
  { item: "Satellite Branding Kit (Wraps/Signage)", cost: "25,000" },
  { item: "On-site Brand Rep (Satellite)", cost: "10,000" },
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <p className="font-body text-lg md:text-xl text-brand-text-muted leading-relaxed">
          One Squad. Nine Venues Per Month. Transparent ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="section-label">Anchor Venue Budget (Squad Deployed)</div>
          <div className="bg-brand-dark rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-4 px-8 text-sm uppercase">Item</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-right px-8 text-sm uppercase">KSh</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {squadBudget.map((row, i) => (
                  <TableRow key={i} className={`border-white/5 transition-colors ${i % 2 === 0 ? 'bg-brand-dark' : 'bg-brand-dark-alt'}`}>
                    <TableCell className="font-body font-bold text-xs py-4 px-8 text-brand-cream">{row.item}</TableCell>
                    <TableCell className="font-headline text-lg text-brand-cream text-right px-8">{row.cost}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-brand-dark border-t-2 border-brand-gold">
                  <TableCell className="font-headline text-xl py-6 px-8 text-brand-gold">Unit Total</TableCell>
                  <TableCell className="font-headline text-2xl text-brand-gold text-right px-8">290,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="section-label">Satellite Venue Budget (Branding Only)</div>
          <div className="bg-brand-dark rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-4 px-8 text-sm uppercase">Item</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-right px-8 text-sm uppercase">KSh</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brandingBudget.map((row, i) => (
                  <TableRow key={i} className={`border-white/5 transition-colors ${i % 2 === 0 ? 'bg-brand-dark' : 'bg-brand-dark-alt'}`}>
                    <TableCell className="font-body font-bold text-xs py-4 px-8 text-brand-cream">{row.item}</TableCell>
                    <TableCell className="font-headline text-lg text-brand-cream text-right px-8">{row.cost}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-brand-dark border-t-2 border-brand-teal">
                  <TableCell className="font-headline text-xl py-6 px-8 text-brand-teal">Unit Total</TableCell>
                  <TableCell className="font-headline text-2xl text-brand-teal text-right px-8">35,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-body text-[10px] text-[#B8A98A] italic">
            *Satellites leverage the market buzz created by the Anchor venue while maintaining visual dominance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { amount: "KSh 1,160,000", label: "Squad-Led Anchors (×4)", sub: "4 primary Sundays per month" },
          { amount: "KSh 175,000", label: "Branded Satellites (×5)", sub: "3 in Weeks 1-3, 2 in Week 4" },
          { amount: "KSh 165,000", label: "Content Production", sub: "4 DJ sets · 16 Reels · 28 photos" },
        ].map((card, i) => (
          <Card key={i} className="p-8 bg-brand-green border-none rounded-[24px] space-y-2 shadow-2xl hover:-translate-y-1 transition-all">
            <div className="font-headline text-3xl text-brand-gold leading-none">{card.amount}</div>
            <div className="space-y-1">
              <h5 className="font-body font-bold text-xs text-brand-cream uppercase tracking-wider">{card.label}</h5>
              <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-widest font-bold">{card.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center py-12 border-y border-white/5 bg-white/5 rounded-[40px]">
        <div className="space-y-2">
          <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-[4px] font-bold">Consolidated Investment</p>
          <h3 className="font-headline text-6xl md:text-8xl text-brand-gold leading-none tracking-tighter">
            Total: KSh 1,750,000
          </h3>
          <p className="font-body text-[11px] text-brand-text-muted uppercase tracking-[2px] font-bold opacity-60">Includes Firefly Management Agency Fee (16.5%)</p>
        </div>
      </div>

      <div className="space-y-8">
        <p className="font-body text-lg text-brand-cream text-center md:text-left font-bold uppercase tracking-wider">
          The Network Advantage:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              icon: <MapPin className="text-brand-gold" size={32} />, 
              text: "9 Venues Managed — 4 full squads, 5 standard branding takeovers" 
            },
            { 
              icon: <Beer className="text-brand-gold" size={32} />, 
              text: "Complete Sunday Market Dominance across Nairobi's top 5 social hubs" 
            },
            { 
              icon: <Smartphone className="text-brand-gold" size={32} />, 
              text: "48 pieces of content — 4 YouTube DJ sets, 16 Reels, 28 photos" 
            },
            { 
              icon: <Users className="text-brand-gold" size={32} />, 
              text: "A unified Sunday community that moves from digital discovery to physical attendance" 
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="font-body text-[11px] text-brand-text-muted leading-relaxed font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
