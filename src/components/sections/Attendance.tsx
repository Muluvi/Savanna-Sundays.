
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Timer, ArrowRight, TrendingUp, Users, Volume2 } from 'lucide-react';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-24">
      {/* Timeline */}
      <div className="relative pt-12">
        <div className="section-label mb-8">2-Week Launch Countdown</div>
        <div className="h-2 w-full bg-brand-green/10 rounded-full relative">
          <div className="absolute h-full w-2/3 bg-brand-gold rounded-full" />
          {[0, 25, 50, 75, 100].map((step) => (
            <div 
              key={step} 
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-brand-cream transition-colors ${step <= 66 ? 'bg-brand-gold' : 'bg-brand-green/20'}`}
              style={{ left: `${step}%` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="text-[9px] font-bold uppercase tracking-widest text-brand-green/40">Teasers</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-brand-green/40">Phase 1 Tickets</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">Artist reveal</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-brand-green/20">Final Call</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-brand-green/20">EVENT DAY</div>
        </div>
      </div>

      {/* Ticket Table */}
      <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
        <Table>
          <TableHeader className="bg-brand-green">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-white font-headline tracking-widest py-6">Tier</TableHead>
              <TableHead className="text-white font-headline tracking-widest">Price (KSh)</TableHead>
              <TableHead className="text-white font-headline tracking-widest">Includes</TableHead>
              <TableHead className="text-white font-headline tracking-widest">Availability</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-body font-bold py-6">Early Bird</TableCell>
              <TableCell className="font-headline text-xl">1,500</TableCell>
              <TableCell className="text-sm opacity-60">General Access + 1 Complimentary Savanna</TableCell>
              <TableCell><Badge className="bg-brand-green/10 text-brand-green border-none">Sold Out</Badge></TableCell>
            </TableRow>
            <TableRow className="bg-brand-light-yellow/10">
              <TableCell className="font-body font-bold py-6">Advance</TableCell>
              <TableCell className="font-headline text-xl">2,500</TableCell>
              <TableCell className="text-sm opacity-60">General Access + 1 Complimentary Savanna</TableCell>
              <TableCell><Badge className="bg-brand-gold text-brand-green border-none">Available</Badge></TableCell>
            </TableRow>
            <TableRow className="border-l-4 border-brand-gold bg-brand-gold/5">
              <TableCell className="font-body font-bold py-6 text-brand-gold">VIP Access</TableCell>
              <TableCell className="font-headline text-xl text-brand-gold">5,000</TableCell>
              <TableCell className="text-sm opacity-80">VIP Lounge, Fast Track Entry, Dedicated Bar</TableCell>
              <TableCell><Badge className="bg-brand-gold text-brand-green border-none animate-pulse">Selling Fast</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Stats Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center group p-8 bg-brand-cream rounded-3xl border border-brand-green/5 hover:bg-white transition-colors">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold mb-6 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <h5 className="font-headline text-5xl text-brand-gold mb-2 leading-none">800+</h5>
          <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">Expected Attendance</span>
        </div>
        
        <div className="text-center group p-8 bg-brand-cream rounded-3xl border border-brand-green/5 hover:bg-white transition-colors">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal mb-6 group-hover:scale-110 transition-transform">
            <Volume2 size={24} />
          </div>
          <h5 className="font-headline text-5xl text-brand-gold mb-2 leading-none">2,000+</h5>
          <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">Savanna Units Sold</span>
        </div>

        <div className="text-center group p-8 bg-brand-cream rounded-3xl border border-brand-green/5 hover:bg-white transition-colors">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 text-brand-green mb-6 group-hover:scale-110 transition-transform">
            <TrendingUp size={24} />
          </div>
          <h5 className="font-headline text-5xl text-brand-gold mb-2 leading-none">1M+</h5>
          <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">Monthly Impressions</span>
        </div>
      </div>
    </div>
  );
};
