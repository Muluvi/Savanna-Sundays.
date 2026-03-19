
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, CheckCircle2, Calendar } from 'lucide-react';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Engineering attendance is a repeatable system of demand management. We treat every Sunday as a high-stakes launch, using a precise 14-day sequence that transforms passive awareness into urgent action. We don’t just fill rooms; we build queues that validate the brand’s premium status.
        </p>
      </div>

      {/* 6A: The 14-Day Hype Cycle */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6A: The 14-Day Hype Cycle
        </h3>
        
        <div className="space-y-8">
          <p className="font-body text-base text-brand-green/70 max-w-3xl">
            Every owned edition follows a rigid two-week countdown sequence designed to build cumulative momentum and drive ticket conversions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">14</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 14: The Date Anchor</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Date-only announcement with no venue or lineup reveal. 
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Psychological Intent: Awareness & Curiosity. Anchors the date in the user's social calendar before they commit to alternatives.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">10</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 10: The Spatial Reveal</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Venue announcement using cinematic walkthrough content.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Psychological Intent: Materialization. Let the audience visualize themselves in the space, shifting the event from abstract to real.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">07</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 07: The Sonic Hook</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                First DJ reveal accompanied by a high-energy audio teaser.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Psychological Intent: Desire & Anticipation. Connects visual expectations to sound, moving the user toward ticket purchase.
              </div>
            </Card>
          </div>

          <div className="relative pt-12 pb-8">
            <div className="section-label mb-8">2-Week Launch Countdown Timeline</div>
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
        </div>
      </div>

      {/* 6B: Strategic Scarcity Mechanics */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6B: Strategic Scarcity Mechanics
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Scarcity is the primary driver of premium perception. We manage it through three layers of psychological friction:
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Tiered Ticketing:</strong> Moving from Early Bird to Advance prices creates a psychological nudge to commit early.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Capped Capacity:</strong> We strictly cap ticket sales at 80% of fire-safety capacity. A 'Sold Out' badge is more valuable than overcrowding.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Priority Access:</strong> The WhatsApp Community gets a 24-hour head start on tickets, rewarding loyalty and driving sign-ups.</li>
            </ul>
          </div>

          <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-6">Tier</TableHead>
                  <TableHead className="text-white font-headline tracking-widest">Price (KSh)</TableHead>
                  <TableHead className="text-white font-headline tracking-widest">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-body font-bold py-6">Early Bird</TableCell>
                  <TableCell className="font-headline text-xl text-right pr-8">1,500</TableCell>
                  <TableCell><Badge className="bg-brand-green/10 text-brand-green border-none">Sold Out</Badge></TableCell>
                </TableRow>
                <TableRow className="bg-brand-light-yellow/10">
                  <TableCell className="font-body font-bold py-6">Advance</TableCell>
                  <TableCell className="font-headline text-xl text-right pr-8">2,500</TableCell>
                  <TableCell><Badge className="bg-brand-gold text-brand-green border-none">Available</Badge></TableCell>
                </TableRow>
                <TableRow className="border-l-4 border-brand-gold bg-brand-gold/5">
                  <TableCell className="font-body font-bold py-6 text-brand-gold">VIP Access</TableCell>
                  <TableCell className="font-headline text-xl text-brand-gold text-right pr-8">5,000</TableCell>
                  <TableCell><Badge className="bg-brand-gold text-brand-green border-none animate-pulse">Selling Fast</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* 6C: Referral-Driven Distribution */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6C: Referral-Driven Distribution
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-base text-brand-green/70">
          <div className="space-y-4">
            <p>Social proof is the most effective sales tool. We leverage the ambassador network to turn attendance into a viral loop:</p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Ambassador Recruitment:</strong> Each ambassador is incentivized to bring 3+ new faces per edition.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Social Pods:</strong> Bundled ticket offers for groups of 4 or 6 ensure entire friendship circles attend together.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>UGC acts as our primary recruitment advertisement for the next edition:</p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Visual Testimony:</strong> High-fi photos of attendees validated by the community drive peer-to-peer desire.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Archive Depth:</strong> A growing library of 'proof of vibe' makes every Sunday look like an institution.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6D: Venue Capacity Perception */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6D: Venue Capacity Perception
        </h3>

        <div className="space-y-8">
          <p className="font-body text-base text-brand-green/70 max-w-3xl">
            An event’s energy depends on crowd density. We manage this through 'Adaptive Zoning' and intentional staging:
          </p>
          <div className="font-serif italic text-xl md:text-2xl text-brand-green border-l-[3px] border-brand-gold pl-6 py-2">
            "Every edition acts as visual proof of demand. If Nairobi doesn't see a crowd on their feed, they don't believe the vibe."
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 font-body text-base text-brand-green/70">
            <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Staged Density:</strong> Modular furniture keeps active areas tight during early hours, expanding as peak energy builds.</li>
            <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Visual Validation:</strong> Photography is briefed to capture 'packed' frames—tight shots that communicate high demand.</li>
          </ul>
        </div>
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
