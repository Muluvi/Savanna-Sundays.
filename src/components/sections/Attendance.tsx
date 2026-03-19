
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, CheckCircle2, Ticket, Mail, Clock, Smartphone, Share2, Award, Link as LinkIcon, LineChart, QrCode, MessageSquare, XCircle, Zap, DoorOpen, Hourglass, Signal, Sun, Camera } from 'lucide-react';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Engineering attendance is a repeatable system of demand management. We treat every Sunday as a high-stakes launch, using a precise 14-day sequence that transforms passive awareness into urgent action. We don’t just fill rooms; we build queues that validate the brand’s premium status through psychological triggers and viral loops.
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
              <h5 className="font-headline text-brand-green text-sm">Lineup + RSVP + Ambassadors</h5>
              <p className="font-body text-sm text-brand-green/70">
                Commitment. Translates hype into immediate ticket action.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">02</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 02: Proof of Vibe</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                FOMO content from previous editions. Social Validation.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-xl">01</div>
                <h4 className="font-headline text-xl text-brand-green uppercase">Day 01: Final Push</h4>
              </div>
              <p className="font-body text-sm text-brand-green/70">
                Polls, countdowns, and urgency messaging captures laggards.
              </p>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xl">00</div>
                <h4 className="font-headline text-xl text-brand-gold uppercase">Day 00: Live Harvest</h4>
              </div>
              <p className="font-body text-sm text-white/70">
                Real-time content turns the event into a 7-hour advertisement.
              </p>
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
              Scarcity is the primary driver of premium perception. We manage it through tiered pricing and capped capacity to ensure the brand remains aspirational.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Tiered Ticketing:</strong> Moving from Early Bird to Advance prices creates a psychological nudge.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Capped Capacity:</strong> We strictly cap ticket sales at 80% of fire-safety capacity to avoid overcrowding.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Priority Access:</strong> The WhatsApp Community gets a 24-hour head start on tickets.</li>
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

      {/* 6C: Viral Growth & Referral Loops */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6C: Viral Growth & Referral Loops
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Social proof is the most effective sales tool. We transform every ticket holder into a micro-promoter through an automated referral engine that leverages Nairobi's dense WhatsApp culture.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2">
              "When a friend invites a friend, the barrier to entry vanishes. We reward this trust with immediate status."
            </div>
          </div>

          <Card className="p-8 bg-brand-gold/10 border-2 border-brand-gold rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Share2 size={120} className="text-brand-gold" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center">
                  <Award size={24} />
                </div>
                <h4 className="font-headline text-3xl text-brand-green">"BRING 3, GET VIP"</h4>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-headline text-xs shrink-0 mt-1">1</div>
                  <p className="font-body text-sm text-brand-green/80">Every ticket generates a unique referral link synced to WhatsApp.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-headline text-xs shrink-0 mt-1">2</div>
                  <p className="font-body text-sm text-brand-green/80">Original buyer receives real-time notifications as friends join.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-headline text-xs shrink-0 mt-1">3</div>
                  <p className="font-body text-sm text-brand-green/80">3rd referral triggers an automatic VIP status upgrade.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 6D: Venue Capacity Perception & Density Strategy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6D: Venue Capacity Perception & Density Strategy
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              An event’s energy depends on crowd density, not just absolute numbers. We treat venue selection as a psychological choice: a smaller venue that is 75% full creates a "sell-out" atmosphere, whereas a larger venue at 40% capacity creates a "failed" atmosphere, even with the same number of attendees.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "Every edition acts as visual proof of demand. If Nairobi doesn't see a crowd on their feed, they don't believe the vibe."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-4">The Rule of Density: Target 60–75% Capacity</p>
            <p className="text-xs italic leading-relaxed">
              This range is the "Goldilocks Zone": enough people to create high energy and great photography, but enough space for premium service and comfortable movement.
            </p>
          </div>

          <div className="space-y-6">
            <div className="section-label">Case Study: Perception of 400 Pax</div>
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 bg-white border-2 border-brand-gold rounded-2xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-headline text-xl text-brand-green uppercase">SCENARIO A: 500 CAPACITY</h4>
                    <Badge className="bg-brand-gold text-brand-green">80% Full · The Win</Badge>
                  </div>
                  <CheckCircle2 className="text-brand-gold" size={32} />
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-brand-green/5">
                  <div className="flex-1 h-3 bg-brand-green/5 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-brand-gold" />
                  </div>
                  <span className="font-headline text-lg text-brand-green">Packed</span>
                </div>
                <p className="font-body text-xs text-brand-green/60 mt-2">
                  Result: Energy is high, bars are busy, and social media content looks like a "Sold Out" success. Drives high FOMO.
                </p>
              </Card>

              <Card className="p-6 bg-white border border-brand-green/10 rounded-2xl relative opacity-60 grayscale group">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-headline text-xl text-brand-green uppercase">SCENARIO B: 1,000 CAPACITY</h4>
                    <Badge variant="outline" className="text-brand-green/40 border-brand-green/20">40% Full · The Risk</Badge>
                  </div>
                  <XCircle className="text-brand-green/20" size={32} />
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-brand-green/5">
                  <div className="flex-1 h-3 bg-brand-green/5 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-brand-green/20" />
                  </div>
                  <span className="font-headline text-lg text-brand-green/20">Sparse</span>
                </div>
                <p className="font-body text-xs text-brand-green/40 mt-2">
                  Result: Despite having 400 people, the room feels empty. Content captures "gaps" instead of energy. Dilutes brand premium.
                </p>
              </Card>
            </div>
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
              <p><strong>When to use:</strong> Neighborhood launches, community recruitment phases.</p>
              <p><strong>Strategic Why:</strong> Maximizes reach. We trade entry for 100% data capture (email + phone).</p>
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
              <p><strong>When to use:</strong> High-demand venues (Rooftops), major headliner sets.</p>
              <p><strong>Strategic Why:</strong> Filters for a highly intentional, premium audience. Offsets high costs.</p>
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
              <p><strong>Strategic Why:</strong> "Free before 4PM" incentivizes early arrival for golden-hour content.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 6F: Ticketing Infrastructure & Payment Flow */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6F: Ticketing Infrastructure & Payment Flow
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-6 font-body text-base text-brand-green/70">
             <p>
               In Kenya, the transition from discovery to purchase must be frictionless. We mandate **M-Pesa integration** as the primary payment rail.
             </p>
             <h4 className="font-headline text-xl text-brand-green">Why Mobile Payments?</h4>
             <p className="text-sm leading-relaxed">
               Nairobi is a mobile-first economy. By utilizing native M-Pesa STK push prompts, we capture the "impulse buy" during peak hype.
             </p>
           </div>

           <div className="space-y-6">
             <h4 className="font-headline text-xl text-brand-green">Recommended Partners</h4>
             <div className="grid grid-cols-1 gap-4">
               {["TicketSasa", "Hustlesasa", "Tokea Africa"].map((name, i) => (
                 <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl flex items-center gap-4 hover:border-brand-gold transition-colors">
                   <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                     <Smartphone size={20} />
                   </div>
                   <span className="font-headline text-lg text-brand-green block leading-none">{name}</span>
                 </Card>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* 6G: Ambassador-Based Ticket Distribution */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6G: Ambassador-Based Ticket Distribution
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Every founding ambassador is a node in our decentralized marketing network. We empower them with the tools to fill the room organically.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Ticket size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">2 Complimentary Tickets</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Personal tickets to bring high-influence guests into the core circle.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LinkIcon size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Unique Tracking Links</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Monitor the "Network Effect" in real-time through personalized IDs.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LineChart size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">ROI Attribution</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Attribute every attendee back to the specific ambassador who influenced them.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 6H: WhatsApp-Optimized Digital Invites */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6H: WhatsApp-Optimized Digital Invites
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              WhatsApp is the primary discovery engine in Nairobi. We move beyond generic flyers to "thumb-stopping" assets.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xs shrink-0 mt-1">1</div>
                <p className="text-sm"><strong>Minimal Text:</strong> Only 4 key data points allowed: Date, Venue, Lineup, QR.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xs shrink-0 mt-1">2</div>
                <p className="text-sm"><strong>Bold Visual Anchor:</strong> recognizable lifestyle image even in a tiny thumbnail.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-xs shrink-0 mt-1">3</div>
                <p className="text-sm"><strong>Anti-Crop Dimensions:</strong> 1:1 or 4:5 ratios ensuring no info is cut by UI.</p>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            {/* WhatsApp Invite Mockup */}
            <div className="relative w-[320px] aspect-[4/5] bg-brand-green rounded-[40px] p-6 shadow-2xl overflow-hidden border-8 border-brand-ink/20 group">
               <div className="relative h-full flex flex-col justify-between z-10">
                 <h5 className="font-headline text-5xl text-white leading-[0.85]">SAVANNA<br/><span className="text-brand-gold">SUNDAYS</span></h5>
                 <div className="flex items-center gap-4 bg-brand-gold p-4 rounded-2xl">
                    <QrCode className="text-brand-green" size={48} />
                    <span className="font-headline text-brand-green text-sm leading-none">SCAN TO RSVP</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6I: Post-Event FOMO Content Strategy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6I: Post-Event FOMO Content Strategy
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The event doesn’t end when the music stops. The 24-hour window following an edition is critical for anchoring "regret" in non-attendees and "pride" in attendees.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2">
              "We don't just show what happened; we show what was missed. Regret drives early commitment."
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <Clock className="text-brand-gold shrink-0" size={24} />
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">10AM Highlight Reel</h4>
                <p className="font-body text-sm text-brand-green/70">A high-octane 30-second edit delivered the morning after.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <Users className="text-brand-teal shrink-0" size={24} />
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Crowd-Energy Clips</h4>
                <p className="font-body text-sm text-brand-green/70">Raw vertical proof of demand and peak atmosphere.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <TrendingUp className="text-brand-gold shrink-0" size={24} />
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">"You Had To Be There"</h4>
                <p className="font-body text-sm text-white/70">Anchors the psychological triggers of experience scarcity.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 6J: Controlled Entry & Queue Management */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6J: Controlled Entry & Queue Management
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Perception of demand is often more important than actual numbers. We manage entry flow to ensure that Savanna Sundays always looks like the most sought-after destination in the city.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "A visible line is an 8-hour live advertisement. It validates the brand's prestige to every passerby."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-4">The Logic of the Line</p>
            <p className="text-xs italic leading-relaxed">
              Visible lines create immediate social proof. In Nairobi's competitive Sunday landscape, a queue signals exclusivity and high-quality entertainment before a guest even hears the first beat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <DoorOpen size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Open Entry Early</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Zero-friction inflow from 2PM to 4PM to ensure the floor is 'camera-ready' for Golden Hour content.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Hourglass size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Peak Pulse Queueing</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Strategic 'holding' of entry once 60% capacity is reached to create a visible external queue during peak hours.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Signal size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Visible Demand Signal</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">Transforming the wait time into a status symbol that anchors Savanna's position as Nairobi's top Sunday choice.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 6K: The Golden Hour Arrival Window */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6K: The Golden Hour Arrival Window
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The most critical period for any edition is the window between **4:30 PM and 6:00 PM**. This is not just a scheduling choice; it is a strategic branding decision where physical attendance peak perfectly intersects with the "Golden Hour" lighting.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2">
              "Visual branding is captured in the light. If the crowd doesn't peak when the light is perfect, the brand loses its most valuable asset."
            </div>
            <p className="text-sm">
              We engineer arrival times so that the venue reaches 70% capacity exactly as the sun begins to set, ensuring all captured content radiates the warm, premium energy of Savanna Gold.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">4:30–6:00 PM Peak</h4>
                <p className="font-body text-sm text-brand-green/70">Targeting maximum occupancy during Nairobi's most photogenic lighting transition.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sun size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Atmospheric Glow</h4>
                <p className="font-body text-sm text-brand-green/70">Natural warm tones eliminate the need for artificial lighting, reinforcing the 'crisp' brand aesthetic.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Camera size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Content Optimization</h4>
                <p className="font-body text-sm text-white/70">All key 'brand moments' and ambassador shots are scheduled within this 90-minute high-value window.</p>
              </div>
            </Card>
          </div>
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
