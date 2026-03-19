
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, CheckCircle2, Calendar, Zap, Rocket, Bell, Play, Ticket, Mail, Clock } from 'lucide-react';

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
        
        <div className="space-y-12">
          <p className="font-body text-base text-brand-green/70 max-w-3xl">
            Every owned edition follows a rigid two-week countdown sequence designed to build cumulative momentum and drive ticket conversions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">14</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 14: Date Anchor</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Date-only announcement with no venue or lineup reveal. 
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Anchors the date in social calendars before alternatives appear.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">10</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 10: Spatial Reveal</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Venue announcement using cinematic walkthrough content.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Materialization. Audience visualizes themselves in the space.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">07</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 07: Sonic Hook</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                First DJ reveal with a high-energy teaser audio clip.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Connects visual expectations to sound, building desire.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">05</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 05: Frequency Stagger</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Morning and evening DJ reveals to maximize feed visibility.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Frequency. Dominates the feed during peak leisure hours.
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xl">03</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 03: Conversion Peak</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Full lineup reveal + Ticket launch + Ambassador blast.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Commitment. Translates hype into immediate action.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">02</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 02: Proof of Vibe</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                FOMO content from previous editions. "Remember this?"
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Social Validation. Reminds the audience of the quality level.
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">01</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 01: Final Push</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Polls, countdowns, and "Last Tickets" urgency messaging.
              </p>
              <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-3">
                Intent: Urgency. Captures the procrastinators and laggards.
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xl">00</div>
                <h4 className="font-headline text-xl text-brand-gold uppercase">Day 00: Live Harvest</h4>
              </div>
              <p className="font-body text-sm text-white/70">
                Real-time content from setup to peak energy.
              </p>
              <div className="font-serif italic text-sm text-brand-gold border-l-2 border-brand-gold pl-3">
                Intent: Presence. Turns the event into a 7-hour advertisement.
              </div>
            </Card>
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

      {/* 6E: Ticketing Models & Strategic Intent */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6E: Ticketing Models & Strategic Intent
        </h3>
        
        <p className="font-body text-base text-brand-green/70 max-w-3xl leading-relaxed">
          We deploy three distinct entry models depending on the specific edition's goal—whether we are focused on market penetration, data capture, or direct revenue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-6 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-brand-green uppercase">1. RSVP-Gated Free Entry</h4>
              <Badge className="bg-brand-teal text-white">Data Focus</Badge>
            </div>
            <div className="space-y-4 font-body text-sm text-brand-green/70">
              <p><strong>When to use:</strong> Neighborhood launches, community recruitment phases, or Monday-afternoon "thank you" editions.</p>
              <p><strong>Strategic Why:</strong> Maximizes the top-of-funnel reach. We trade entry for 100% data capture (email + phone), allowing us to retarget these attendees for future paid editions.</p>
            </div>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-6 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Ticket size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-brand-green uppercase">2. Fully Ticketed (Paid)</h4>
              <Badge className="bg-brand-gold text-brand-green">Exclusivity Focus</Badge>
            </div>
            <div className="space-y-4 font-body text-sm text-brand-green/70">
              <p><strong>When to use:</strong> High-demand venues (Rooftops), major headliner sets, or holiday milestone editions.</p>
              <p><strong>Strategic Why:</strong> Filters for a highly intentional, premium audience. Revenue offsets high production costs while reinforcing the event as an "earned" experience.</p>
            </div>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-6 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-brand-green uppercase">3. Hybrid (Early Bird Free)</h4>
              <Badge className="bg-brand-green text-white">Crowd Density Focus</Badge>
            </div>
            <div className="space-y-4 font-body text-sm text-brand-green/70">
              <p><strong>When to use:</strong> Standard owned editions where we need early crowd density for content capture.</p>
              <p><strong>Strategic Why:</strong> "Free entry before 4PM" incentivizes early arrival, ensuring the venue looks "packed" for the golden-hour content window, while late arrivals pay full price.</p>
            </div>
          </Card>
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
