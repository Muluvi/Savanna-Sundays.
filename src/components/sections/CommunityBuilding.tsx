
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, UserPlus, MessageCircle, Twitter, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ambassadorRoles = [
  { perk: "Guaranteed free entry + 1 guest at all owned editions", duty: "Share event invites via WhatsApp to 10+ contacts per edition" },
  { perk: "VIP access at owned and sponsored events", duty: "Post 2+ Instagram Stories on event day tagging @SavannaSundays" },
  { perk: "Exclusive Savanna Sundays merch (not available to public)", duty: "Bring 3+ new attendees per edition from personal network" },
  { perk: "Early lineup and venue reveals before announcement", duty: "Represent Savanna's brand values on-site (stylish, welcoming)" },
  { perk: "Backstage/DJ booth access at select editions", duty: "Provide post-event feedback to community management team" },
  { perk: "Featured in community spotlight content", duty: "Attend quarterly ambassador meetup/briefing" },
];

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          KWAL wants a large and loyal community. Size without loyalty is just a mailing list; loyalty without scale is a private club. Firefly builds both—an identity people adopt, a culture they participate in, and an infrastructure that scales from 50 founding members to thousands without losing intimacy.
        </p>
      </div>

      {/* 5A: Community Identity & Culture */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          5A: Community Identity & Culture
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The Nairobi adaptation of the #SiyavannaSA model: not a hashtag campaign, but a community identity. People don't just attend Savanna Sundays—they identify as "Savanna Sundays people." The identity is earned through repeated attendance, shared experiences, and cultural fluency.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Shared language:</strong> inside references to memorable moments and community-specific vocabulary that signals belonging.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Dry Wit Register:</strong> modeling the Savanna tone in comment sections and WhatsApp groups to cultivate a shared warmth.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Cultural Rituals:</strong> traditions like signature drink rituals or golden-hour group photographs that build a shared story.</li>
            </ul>
          </div>

          {/* Flywheel Visual */}
          <div className="flex flex-col items-center">
            <div className="section-label mb-8">The Growth Flywheel</div>
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">
              <svg className="absolute w-full h-full animate-spin [animation-duration:30s]">
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#F4C542" strokeWidth="1" strokeDasharray="8 8" opacity="0.3" />
              </svg>
              
              <div className="relative z-10 bg-brand-green w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border border-brand-gold/30">
                <span className="font-headline text-brand-gold text-center leading-none text-xs">THE<br/>CORE</span>
              </div>

              {[
                { label: "Attendee", angle: 0 },
                { label: "Repeat", angle: 60 },
                { label: "Member", angle: 120 },
                { label: "Ambassador", angle: 180 },
                { label: "Promoter", angle: 240 },
                { label: "Advocate", angle: 300 },
              ].map((node, i) => (
                <div 
                  key={i} 
                  className="absolute bg-white border border-brand-green/5 px-3 py-1.5 rounded-full shadow-md"
                  style={{
                    transform: `rotate(${node.angle}deg) translateY(-${130}px) rotate(-${node.angle}deg)`
                  }}
                >
                  <span className="font-body font-bold text-[8px] tracking-widest uppercase text-brand-green">{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5B: Ambassador & Street Team Program */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          5B: Ambassador & Street Team Program
        </h3>

        <div className="space-y-8">
          <h4 className="font-headline text-xl text-brand-green border-l-[3px] border-brand-gold/30 pl-4 uppercase">Superfan Identification</h4>
          <p className="font-body text-base text-brand-green/70 max-w-3xl leading-relaxed">
            Firefly identifies potential ambassadors through three data sources: repeat attendance (3+ editions attended), social media engagement (frequently tagging, commenting, sharing Savanna Sundays content), and on-site energy. Candidates are approached personally—never through mass forms.
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="font-headline text-xl text-brand-green border-l-[3px] border-brand-gold/30 pl-4 uppercase">Ambassador Perks & Responsibilities</h4>
          <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-6 text-sm">Perks (What Ambassadors Get)</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-sm">Responsibilities (What They Do)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ambassadorRoles.map((row, i) => (
                  <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                    <TableCell className="font-body text-sm py-5 text-brand-green/80 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      {row.perk}
                    </TableCell>
                    <TableCell className="font-body text-sm py-5 text-brand-teal font-medium">
                      {row.duty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Ambassador Tiers Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <Card className="p-8 border border-brand-gold/20 rounded-[24px] bg-white text-center hover:shadow-md transition-all">
            <h6 className="font-headline text-2xl mb-4 text-brand-green">Bronze Tier</h6>
            <ul className="space-y-3 font-body text-sm text-brand-green/60 mb-6">
              <li>Priority RSVP access</li>
              <li>Branded welcome drink</li>
              <li>Digital community access</li>
            </ul>
            <Badge className="bg-brand-gold/10 text-brand-gold border-none">Founding Member</Badge>
          </Card>
          
          <Card className="p-8 border-2 border-brand-gold rounded-[24px] bg-white text-center relative overflow-hidden shadow-xl md:scale-105 z-10">
             <div className="absolute top-0 right-0 p-2"><Badge className="bg-brand-gold text-brand-green text-[10px]">Most Popular</Badge></div>
            <h6 className="font-headline text-2xl mb-4 text-brand-green">Silver Tier</h6>
            <ul className="space-y-3 font-body text-sm text-brand-green/60 mb-6">
              <li>Exclusive Lineup Previews</li>
              <li>Reserved table seating</li>
              <li>Limited Edition Merch</li>
            </ul>
            <Badge className="bg-brand-green text-white">High Impact</Badge>
          </Card>

          <Card className="p-8 border-none rounded-[24px] bg-brand-green text-white text-center shadow-xl">
            <h6 className="font-headline text-2xl mb-4 text-brand-gold">Gold Elite</h6>
            <ul className="space-y-3 font-body text-sm text-white/60 mb-6">
              <li>VIP Table Service</li>
              <li>All-Access Backstage</li>
              <li>Annual Gala Invitation</li>
            </ul>
            <Badge className="bg-brand-gold text-brand-green">Super-Advocate</Badge>
          </Card>
        </div>

        {/* Growth Tactics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            { icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png", title: "Instagram Strategy", text: "Leveraging high-fidelity Reels to drive organic discovery through the community." },
            { icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png", title: "Viral Loop Strategy", text: "Viral clip strategy using sound-led trends and community-driven content hooks." },
            { icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765889247/AZsnL4dMdfGc81To27QzCg-AZsnL4dMtdFVyuKofEOY6Q_20251216_154319_0000_nq9hvp.png", title: "Facebook Events", text: "Building persistent databases through interest-based event pages and groups." },
            { icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png", title: "Real-time Hype", text: "Using X for lightning-fast lineup reveals and real-time interaction with the culture." },
          ].map((tactic, i) => (
            <div key={i} className="flex gap-4 items-start p-6 bg-white border border-brand-green/5 rounded-2xl hover:bg-brand-cream/50 transition-colors">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                <Image src={tactic.icon} alt={tactic.title} width={24} height={24} className={`object-contain ${tactic.title === 'Real-time Hype' ? 'brightness-0' : ''}`} />
              </div>
              <div>
                <h6 className="font-headline text-xl text-brand-green mb-1">{tactic.title}</h6>
                <p className="font-body text-sm text-brand-green/60 leading-relaxed">{tactic.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
