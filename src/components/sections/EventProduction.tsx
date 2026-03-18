
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClipboardCheck, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

const staff = [
  { role: "Brand Ambassadors", count: "12", costume: "Yellow Savanna Polos", notes: "Product knowledge focus" },
  { role: "Mixologists", count: "8", costume: "Black/Teal Branded Aprons", notes: "Fast service training" },
  { role: "Security Detail", count: "15", costume: "Discrete Black Tactical", notes: "VIP focus & crowd control" },
  { role: "Cleaning Crew", count: "6", costume: "High-vis (Backstage)", notes: "Zero-waste goal" },
];

export const EventProductionSection = () => {
  return (
    <div className="space-y-24">
      {/* Run of Show Timeline */}
      <div className="space-y-8">
        <div className="section-label">11.1 — The Production Pulse</div>
        <div className="relative pt-12">
          <div className="h-4 w-full bg-brand-green/5 rounded-full relative overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-brand-teal to-brand-gold" />
             <div className="absolute top-1/2 left-[65%] -translate-y-1/2 w-5 h-5 bg-brand-gold rounded-full border-4 border-white animate-pulse" />
          </div>
          <div className="grid grid-cols-6 gap-2 mt-8">
            {["2PM", "3PM", "4PM", "5PM", "7PM", "9PM"].map((time, i) => (
              <div key={i} className="text-center group">
                <span className="font-headline text-lg text-brand-green mb-2 block">{time}</span>
                <div className="p-3 bg-white border border-brand-green/5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-brand-green/40 group-hover:border-brand-gold transition-colors">
                  {i === 0 ? "Doors Open" : i === 1 ? "Warm-up" : i === 2 ? "Peak energy" : i === 3 ? "Headline" : i === 4 ? "Golden Hour" : "Close"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staffing Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6">Role</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-center">Count</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Costume</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((s, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-lg py-6">{s.role}</TableCell>
                  <TableCell className="font-body font-bold text-center text-brand-teal">{s.count}</TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60">{s.costume}</TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60">{s.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Compliance Checklist */}
        <Card className="p-8 bg-brand-green text-white rounded-[30px] flex flex-col gap-8 shadow-xl">
          <h5 className="font-headline text-2xl text-brand-gold border-b border-white/10 pb-4">COMPLIANCE PROTOCOL</h5>
          <ul className="space-y-6">
            {[
              "NACADA Product Guidelines",
              "MCSK / Music Copyright Permits",
              "Fire Safety & Inspection",
              "Public Health & Catering Licenses",
              "Private Security Certification",
              "KRA / Tax Compliance on Sales",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                  <ClipboardCheck size={16} />
                </div>
                <span className="font-body text-sm font-light text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};
