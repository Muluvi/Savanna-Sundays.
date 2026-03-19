
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, DollarSign, PieChart, ArrowRight, Target, Users, Gem, RefreshCcw, Landmark, Music, HardHat, Camera, Sparkles, UserPlus } from 'lucide-react';

const tiers = [
  { name: "Title Sponsor", price: "5,000,000+", touchpoints: "Exclusive Naming, Main Stage, Digital Takeover", exclusivity: "Full Category", border: "4px" },
  { name: "Presenting Partner", price: "2,500,000", touchpoints: "Zone Ownership, Co-branded Content", exclusivity: "Limited", border: "3px" },
  { name: "Category Sponsor", price: "1,200,000", touchpoints: "Product Placement, 1x Activation Hub", exclusivity: "Non-Exclusive", border: "2px" },
  { name: "Activation Partner", price: "500,000", touchpoints: "Pop-up Station, Sampling Rights", exclusivity: "Open", border: "1px" },
];

const costs = [
  { category: "Venue & Exclusivity", range: "150,000 – 450,000", icon: <Landmark size={18} />, notes: "Location, security clearance, and layout prep." },
  { category: "Talent (DJs & MCs)", range: "300,000 – 800,000", icon: <Music size={18} />, notes: "Network DJs, Vocal Guides, and Headliner support." },
  { category: "AV & Stage Production", range: "400,000 – 1,200,000", icon: <HardHat size={18} />, notes: "Pro-sound, amber lighting, and modular staging." },
  { category: "Staff & Ambassadors", range: "100,000 – 250,000", icon: <UserPlus size={18} />, notes: "Security detail, bar crew, and brand ambassadors." },
  { category: "Content Harvest", range: "80,000 – 200,000", icon: <Camera size={18} />, notes: "Photo, cinematic video, drone, and social shooter." },
  { category: "Activations & Decor", range: "150,000 – 500,000", icon: <Sparkles size={18} />, notes: "Photo-booths, branded furniture, and interactive hubs." },
];

export const SponsorshipRevenueSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Savanna Sundays is engineered as a high-performance revenue engine. We move beyond the "cost-center" model of traditional event marketing to create a multi-layered profit platform. By diversifying income across ticketing, tiered sponsorships, premium VIP table sales, and strategic cross-brand integrations, we ensure that every edition is not only self-sustaining but generates significant ROI for KWAL. We don't just host guests; we manage a commercial ecosystem.
        </p>
      </div>

      {/* 9A: The Revenue Pillar Model */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          9A: The Revenue Pillar Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">1. Ticketing</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">Tiered demand management (Early Bird to Advance) ensures early cash flow and baseline production coverage.</p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">2. Sponsorships</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">Monetizing the "Audience Attention" through category-exclusive partnerships and title-sponsor rights.</p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
              <Gem size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">3. VIP Sales</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">High-margin table service and premium bottle packages catering to Nairobi's high-net-worth social elite.</p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <RefreshCcw size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">4. Cross-Brand</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">Integrating KWAL's wider portfolio and strategic lifestyle partners to maximize per-attendee spend.</p>
          </Card>
        </div>
      </div>

      {/* 9B: Production Cost Framework */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          9B: The Production Cost Framework
        </h3>
        <p className="font-body text-base text-brand-green/70 max-w-3xl leading-relaxed">
          Operational excellence requires transparent investment. We scale production based on the specific edition type (Owned vs. Sponsored) and expected capacity, adhering to these indicative cost ranges:
        </p>

        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 text-sm">Category</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm text-right">Range (KSh)</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm">Strategic Intent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costs.map((cost, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-xl py-6 flex items-center gap-4 text-brand-green">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                      {cost.icon}
                    </div>
                    {cost.category}
                  </TableCell>
                  <TableCell className="font-body font-bold text-lg text-brand-teal text-right">
                    {cost.range}
                  </TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60 italic">
                    {cost.notes}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="font-serif italic text-sm text-brand-teal border-l-2 border-brand-teal pl-6 py-2 bg-brand-teal/5 rounded-r-xl">
          *Costs are indicative and scale with venue capacity and headliner complexity. Firefly manages all procurement for maximum efficiency.
        </div>
      </div>

      {/* 9.3 — Commercial Partnership Matrix */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          9C: Commercial Partnership Matrix
        </h3>
        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-gold">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-brand-green font-headline tracking-widest py-6 text-xl">Tier</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl text-right">Investment (KSh)</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl">Touchpoints</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl">Exclusivity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiers.map((tier, i) => (
                <TableRow key={i} className="group hover:bg-brand-cream/50 transition-colors">
                  <TableCell className="font-headline text-2xl py-8 text-brand-green flex items-center gap-4">
                    <div className="h-10 bg-brand-gold" style={{ width: tier.border }} />
                    {tier.name}
                  </TableCell>
                  <TableCell className="font-body font-bold text-xl text-brand-green text-right">
                    {tier.price}
                  </TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60 max-w-xs">
                    {tier.touchpoints}
                  </TableCell>
                  <TableCell className="font-body text-sm font-bold text-brand-teal uppercase tracking-widest">
                    {tier.exclusivity}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-brand-green">
                <TableCell className="font-headline text-2xl text-brand-gold py-6 pl-10">TOTAL POTENTIAL</TableCell>
                <TableCell className="font-body font-bold text-2xl text-brand-gold text-right pr-10">10,000,000+ / EDITION</TableCell>
                <TableCell colSpan={2} />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Revenue Mix & ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
        <div className="space-y-8">
          <div className="section-label">Revenue Mix Proportion</div>
          <div className="flex h-16 w-full rounded-2xl overflow-hidden shadow-inner border border-brand-green/5">
            <div className="h-full w-[40%] bg-brand-gold flex items-center justify-center font-headline text-brand-green text-xs md:text-sm">40% Tickets</div>
            <div className="h-full w-[30%] bg-brand-teal flex items-center justify-center font-headline text-white text-xs md:text-sm">30% Sponsors</div>
            <div className="h-full w-[20%] bg-brand-green flex items-center justify-center font-headline text-brand-gold text-xs md:text-sm">20% Sales</div>
            <div className="h-full w-[10%] bg-brand-light-yellow flex items-center justify-center font-headline text-brand-green text-xs md:text-sm">10% Fees</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-8 bg-brand-cream border border-brand-green/5 text-center flex flex-col gap-2">
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">Before Firefly</span>
            <span className="font-headline text-2xl text-brand-green/30 line-through">Organic Growth</span>
            <span className="text-[10px] text-brand-green/40 font-bold uppercase tracking-tighter">Fragmented Data</span>
          </Card>
          <Card className="p-8 bg-white border-2 border-brand-gold text-center flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2"><TrendingUp size={12} className="text-brand-gold" /></div>
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-gold uppercase">After Firefly</span>
            <span className="font-headline text-2xl text-brand-green">Unified Engine</span>
            <span className="text-[10px] text-brand-teal font-bold uppercase tracking-tighter">100% Retained Audience</span>
          </Card>
        </div>
      </div>
    </div>
  );
};
