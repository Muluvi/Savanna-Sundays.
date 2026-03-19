
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClipboardCheck, ShieldCheck, Clock, Users, ArrowRight, Zap, Heart, CheckCircle2 } from 'lucide-react';

const staff = [
  { role: "Brand Ambassadors", count: "12", costume: "Yellow Savanna Polos", notes: "Product knowledge focus" },
  { role: "Mixologists", count: "8", costume: "Black/Teal Branded Aprons", notes: "Fast service training" },
  { role: "Security Detail", count: "15", costume: "Discrete Black Tactical", notes: "VIP focus & crowd control" },
  { role: "Cleaning Crew", count: "6", costume: "High-vis (Backstage)", notes: "Zero-waste goal" },
];

export const EventProductionSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Execution excellence is where strategy meets reality. At Firefly, we operate with a dual-mindset: <strong>Broadcast-Level Precision</strong> meeting <strong>House-Party Warmth</strong>. We treat every Sunday as a high-stakes live broadcast—where timing, technical redundancy, and operational flow are non-negotiable—while ensuring the attendee feels the effortless intimacy of a private gathering. This balance is the hallmark of Savanna Sundays’ operational standard.
        </p>
      </div>

      {/* 11A: The Execution Philosophy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11A: The Execution Philosophy
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              We move beyond "event management" to high-fidelity experience production. Our methodology ensures that the complexity of the operation never interrupts the simplicity of the vibe.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Broadcast Precision:</strong> Rigorous technical checks, secondary power redundancies, and 15-minute "Call Sheets" for all key staff.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>House-Party Warmth:</strong> A service culture that prioritizes names over numbers, eye-contact over checklists, and proactive hospitality.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>The Invisible Hand:</strong> Management that is omnipresent in impact but invisible in presence, ensuring the 'Savanna Crispness' is felt everywhere.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-8 bg-brand-gold/10 border-2 border-brand-gold rounded-[32px] space-y-4">
              <div className="flex items-center gap-4">
                <Zap className="text-brand-gold" size={32} />
                <h4 className="font-headline text-2xl text-brand-green uppercase">Broadcast Precision</h4>
              </div>
              <p className="font-serif italic text-base text-brand-green leading-relaxed">
                "We treat the dancefloor as a set and the event as a live show. Every light cue and transition is mapped to ensure the content harvest is flawless."
              </p>
            </Card>

            <Card className="p-8 bg-brand-teal/10 border-2 border-brand-teal rounded-[32px] space-y-4">
              <div className="flex items-center gap-4">
                <Heart className="text-brand-teal" size={32} />
                <h4 className="font-headline text-2xl text-brand-green uppercase">House-Party Warmth</h4>
              </div>
              <p className="font-serif italic text-base text-brand-green leading-relaxed">
                "We remove the corporate wall. If the guest feels like they are in a branded venue, we've failed. If they feel like they are in their best friend's backyard, we've won."
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Run of Show Timeline */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11B: The Production Pulse (Run of Show)
        </h3>
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
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11C: The Human Infrastructure (Staffing Matrix)
        </h3>
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
    </div>
  );
};
