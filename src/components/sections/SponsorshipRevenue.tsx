"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from 'lucide-react';

const lineItems = [
  { item: "DJ 1 (Warm-Up Set)", cost: "50,000" },
  { item: "DJ 2 (Peak Time Set)", cost: "50,000" },
  { item: "MC", cost: "40,000" },
  { item: "Influencers (5 × KSh 20,000)", cost: "100,000" },
  { item: "Content Generation & Production", cost: "41,250" },
  { item: "Miscellaneous", cost: "8,550" },
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h4 className="font-body text-xl md:text-2xl text-brand-green font-bold uppercase tracking-wider">
          Weekly investment per Savanna Sunday
        </h4>
        <p className="font-body text-brand-green/60 text-sm md:text-base leading-relaxed">
          A transparent breakdown of the operational and strategic costs required to execute a high-fidelity Savanna Sundays activation.
        </p>
      </div>

      <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/10 shadow-2xl">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-6 px-8 text-sm md:text-base uppercase">
                Weekly Activation Cost
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
                Weekly Subtotal
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
                Weekly Total
              </TableCell>
              <TableCell className="font-headline text-3xl md:text-5xl text-brand-gold text-right px-8 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Card className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl flex items-start gap-4">
        <Info className="text-brand-gold shrink-0 mt-0.5" size={20} />
        <p className="font-body text-xs md:text-sm text-brand-green/70 leading-relaxed italic">
          Firefly Management receives 16% of the total weekly activation cost as standard agency fee across all Savanna Sunday activations. This covers strategic planning, talent booking, content direction, and data management.
        </p>
      </Card>

      <div className="pt-8 text-center md:text-left">
        <p className="font-body text-[10px] text-brand-green/40 uppercase tracking-[3px] font-bold">
          Note: Venue logistics and branding production (hardware) are managed separately based on site requirements.
        </p>
      </div>
    </div>
  );
};
