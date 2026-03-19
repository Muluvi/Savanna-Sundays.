
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, CheckCircle2, Calendar, Zap, Rocket, Bell, Play, Ticket, Mail, Clock, Smartphone, Share2, Award, Gift } from 'lucide-react';

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
            <p className="text-sm leading-relaxed">
              By gamifying the invitation process, we achieve exponential growth: 1 guest recruits 3, those 3 recruit 9, and the community scales organically without increasing paid media spend.
            </p>
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
                  <p className="font-body text-sm text-brand-green/80"><strong>Unique Code Generation:</strong> Every ticket purchase generates a personalized referral link synced to the buyer's WhatsApp number.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-headline text-xs shrink-0 mt-1">2</div>
                  <p className="font-body text-sm text-brand-green/80"><strong>Automated Tracking:</strong> As friends use the code, the original buyer receives real-time progress notifications.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-headline text-xs shrink-0 mt-1">3</div>
                  <p className="font-body text-sm text-brand-green/80"><strong>Status Upgrade:</strong> Upon the 3rd successful referral, the buyer's ticket is automatically upgraded to VIP, granting table access and priority entry.</p>
                </div>
              </div>
              <div className="pt-4 border-t border-brand-gold/20 flex flex-wrap gap-2">
                <Badge className="bg-brand-green text-white">1 Referral: Free Drink</Badge>
                <Badge className="bg-brand-teal text-white">3 Referrals: VIP Upgrade</Badge>
                <Badge className="bg-brand-gold text-brand-green">5+ Referrals: Merch Bundle</Badge>
              </div>
            </div>
          </Card>
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

      {/* 6F: Ticketing Infrastructure & Payment Flow */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6F: Ticketing Infrastructure & Payment Flow
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-6 font-body text-base text-brand-green/70">
             <p>
               In Kenya, the transition from discovery to purchase must be frictionless. We mandate **M-Pesa integration** as the primary payment rail. Any barrier—be it a complex signup or a non-mobile payment method—results in a 40-60% drop-off in the Nairobi market.
             </p>
             <h4 className="font-headline text-xl text-brand-green">Why Mobile Payments?</h4>
             <p className="text-sm leading-relaxed">
               Nairobi is a mobile-first economy. M-Pesa isn't just a convenience; it's the cultural standard for trust and speed. By utilizing native M-Pesa STK push prompts, we capture the "impulse buy" during the peak hype cycle (Days 3-1).
             </p>
             <div className="bg-brand-gold/10 p-4 rounded-xl border-l-4 border-brand-gold">
               <p className="text-xs font-bold text-brand-green uppercase tracking-wider">Market Insight</p>
               <p className="text-sm italic">"80%+ of our target audience (23-35) uses M-Pesa as their primary transacting tool for leisure and entertainment."</p>
             </div>
           </div>

           <div className="space-y-6">
             <h4 className="font-headline text-xl text-brand-green">Recommended Platform Partners</h4>
             <div className="grid grid-cols-1 gap-4">
               {[
                 { name: "TicketSasa", description: "The industry standard for mass-market events in Kenya. Strong database reach." },
                 { name: "Hustlesasa", description: "Creator-focused, ultra-fast mobile checkout. Ideal for 'RSVP-Gated' and 'Hybrid' models." },
                 { name: "Tokea Africa", description: "Excellent data analytics and scanning infrastructure for high-capacity venue management." },
               ].map((platform, i) => (
                 <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl flex items-center gap-4 group hover:border-brand-gold transition-colors">
                   <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                     <Smartphone size={20} />
                   </div>
                   <div>
                     <span className="font-headline text-lg text-brand-green block leading-none mb-1">{platform.name}</span>
                     <p className="font-body text-xs text-brand-green/60">{platform.description}</p>
                   </div>
                 </Card>
               ))}
             </div>
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
