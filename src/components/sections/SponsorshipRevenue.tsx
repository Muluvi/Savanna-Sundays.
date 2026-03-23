"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Beer, Smartphone, Users } from 'lucide-react';

const weeklyBudget = [
  { item: "MC", cost: "40,000" },
  { item: "DJ 1", cost: "50,000" },
  { item: "DJ 2", cost: "50,000" },
  { item: "Influencer 1", cost: "20,000" },
  { item: "Influencer 2", cost: "20,000" },
  { item: "Influencer 3", cost: "20,000" },
  { item: "Influencer 4", cost: "20,000" },
  { item: "Influencer 5", cost: "20,000" },
  { item: "Venue", cost: "50,000" },
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <p className="font-body text-lg md:text-xl text-brand-text-muted leading-relaxed">
          Transparent costs. Clear value. Every Sunday.
        </p>
      </div>

      <div className="space-y-8">
        <div className="section-label">Weekly Activation Budget</div>
        <div className="bg-brand-dark rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-4 px-8 text-sm md:text-base uppercase">Item</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-8 text-sm md:text-base uppercase">KSh</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {weeklyBudget.map((row, i) => (
                <TableRow key={i} className={`border-white/5 transition-colors ${i % 2 === 0 ? 'bg-brand-dark' : 'bg-brand-dark-alt'}`}>
                  <TableCell className="font-body font-bold text-sm py-4 px-8 text-brand-cream">
                    {row.item}
                  </TableCell>
                  <TableCell className="font-headline text-xl text-brand-cream text-right px-8">
                    {row.cost}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-brand-dark border-t-2 border-brand-gold">
                <TableCell className="font-headline text-2xl py-6 px-8 text-brand-gold">
                  Weekly Total
                </TableCell>
                <TableCell className="font-headline text-3xl text-brand-gold text-right px-8">
                  290,000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { amount: "KSh 1,160,000", label: "Weekly Activations ×4", sub: "KSh 290,000 × 4 Sundays" },
          { amount: "KSh 165,000", label: "Content Production", sub: "4 DJ sets · 16 Reels · 28 photos" },
          { amount: "KSh 212,400", label: "Agency Fee", sub: "16% of total monthly budget — Firefly Management" },
        ].map((card, i) => (
          <Card key={i} className="p-8 bg-brand-green border-none rounded-[24px] space-y-2 shadow-2xl hover:-translate-y-1 transition-transform">
            <div className="font-headline text-4xl text-brand-gold leading-none">
              {card.amount}
            </div>
            <div className="space-y-1">
              <h5 className="font-body font-bold text-sm text-brand-cream uppercase tracking-wider">{card.label}</h5>
              <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-widest font-bold">{card.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center py-12 border-y border-white/5">
        <div className="space-y-2">
          <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-[4px] font-bold">Consolidated Investment</p>
          <h3 className="font-headline text-6xl md:text-8xl text-brand-gold leading-none tracking-tighter">
            Monthly Total: KSh 1,537,400
          </h3>
        </div>
      </div>

      <div className="space-y-8">
        <p className="font-body text-lg text-brand-cream text-center md:text-left font-bold uppercase tracking-wider">
          For KSh 1,537,400/month, KWAL receives:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Beer className="text-brand-gold" size={32} />, 
              text: "4 full brand activations — full squad, full venue transformation, 2PM to 9PM" 
            },
            { 
              icon: <Smartphone className="text-brand-gold" size={32} />, 
              text: "48 pieces of content — 4 YouTube DJ sets, 16 Reels, 28 photos — branded and distributed" 
            },
            { 
              icon: <Users className="text-brand-gold" size={32} />, 
              text: "A growing Nairobi community that identifies Savanna with the best Sundays in the city" 
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="font-body text-sm text-brand-text-muted leading-relaxed font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
