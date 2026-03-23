"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Instagram, 
  Camera, 
  QrCode, 
  Users, 
  Trophy, 
  MessageSquare, 
  Share2, 
  ArrowRight,
  RefreshCcw,
  Zap,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

const flywheelNodes = [
  { label: "CONTENT", sub: "YouTube sets. Reels. Photography.", angle: 0 },
  { label: "VISIBILITY", sub: "Algorithm reach. Shares. Discovery.", angle: 90 },
  { label: "COMMUNITY", sub: "Followers become fans. Fans become regulars.", angle: 180 },
  { label: "ATTENDANCE", sub: "Online audience shows up. Venue fills.", angle: 270 },
];

const mechanics = [
  {
    title: "The YouTube Competition Loop",
    body: "QR codes in every DJ set video drive viewers to a weekly giveaway — six-packs, merch. Winners collect at the next Sunday's venue. The online audience becomes a physical guest.",
    icon: <Youtube className="w-6 h-6" />
  },
  {
    title: "Spot Yourself",
    body: "Crowd captured in Reels. People tag @SavannaSundays when they find themselves — entering a weekly draw. Every tag is organic reach.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Comment to Win",
    body: "Weekly Reel competition: 'Comment your favourite DJ moment.' Best comment wins. Drives algorithm visibility and genuine engagement.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Scan at the Venue",
    body: "QR codes at venue touchpoints unlock exclusive content, DJ vote polls, and on-site competition entry. Physical and digital merge.",
    icon: <QrCode className="w-6 h-6" />
  },
  {
    title: "The Winner Experience",
    body: "Winners get a moment — squad sets up their table, MC gives a shoutout, influencers capture it. The winner becomes content. People attend to be seen.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "UGC Repost Engine",
    body: "Best crowd-shot content reposted on official channels with full credit. Being featured becomes aspirational. Every attendee is a brand ambassador.",
    icon: <Share2 className="w-6 h-6" />
  }
];

const extraMechanics = [
  { title: "The DJ Reveal", body: "Next Sunday's DJ teased mid-week — sound clip, no full reveal. Drives speculation and attendance from music fans.", icon: <Zap size={18} /> },
  { title: "Sunday Streak Rewards", body: "Attend 4 Sundays in a row — earn a reward. Attend 8 — get an exclusive influencer moment. Loyalty is celebrated.", icon: <Target size={18} /> },
  { title: "Venue Prediction Poll", body: "Mid-week poll: which venue should host next Sunday? Crowd votes. Audience ownership drives attendance.", icon: <RefreshCcw size={18} /> },
];

export const BuildingTheCrowd = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
          "Content doesn't just document the Sunday. It drives the next one."
        </p>
        <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
          Great content creates online visibility. Visibility builds community. Community drives attendance. Attendance creates better content. Every week, the flywheel spins faster.
        </p>
      </div>

      {/* Flywheel Diagram */}
      <div className="py-12 flex flex-col items-center animate-fade-in-up">
        <div className="section-label text-center mb-16">The Sunday Flywheel</div>
        
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
          {/* Core */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-gold shadow-[0_0_40px_rgba(244,197,66,0.3)] flex items-center justify-center z-20">
            <div className="text-center font-headline text-brand-green leading-none">
              <span className="text-[10px] tracking-widest block mb-1">THE</span>
              <span className="text-lg md:text-xl">MOMENTUM</span>
            </div>
          </div>

          {/* Orbit with Arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10 animate-spin-slow">
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#F4C542" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
            
            {flywheelNodes.map((node, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${node.angle}deg) translateY(-42%) rotate(-${node.angle}deg)` }}
              >
                <div className="bg-brand-gold border border-brand-green/30 px-4 py-2 rounded-full shadow-2xl flex flex-col items-center">
                  <span className="font-headline text-brand-green text-sm tracking-widest">{node.label}</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 text-center">
                  <p className="font-body text-[8px] uppercase tracking-widest text-brand-gold font-bold">{node.sub}</p>
                </div>
              </div>
            ))}

            {/* Connecting Arrows (simplified visual) */}
            <div className="absolute inset-0 animate-spin-slow">
              {[0, 90, 180, 270].map((angle, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `rotate(${angle + 45}deg) translateY(-42%)` }}
                >
                  <ArrowRight className="text-brand-gold/40 w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mechanic Grid */}
      <div className="space-y-8">
        <div className="section-label">Conversion Mechanics</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanics.map((m, i) => (
            <Card 
              key={i} 
              className="p-8 bg-brand-green border-none border-t-[3px] border-brand-gold rounded-[24px] space-y-4 shadow-xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-brand-gold mb-2">{m.icon}</div>
              <h4 className="font-headline text-2xl text-brand-gold uppercase tracking-tight">{m.title}</h4>
              <p className="font-body text-[#F8F5E6] text-xs leading-relaxed opacity-80">{m.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Mechanics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        {extraMechanics.map((m, i) => (
          <Card key={i} className="p-6 bg-[#221A0A] border border-white/5 rounded-2xl flex flex-col gap-3 group hover:border-brand-gold/30 transition-colors">
            <div className="text-brand-gold">{m.icon}</div>
            <div className="space-y-1">
              <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{m.title}</h5>
              <p className="font-body text-[10px] text-[#B8A98A] leading-relaxed uppercase font-bold tracking-wider">{m.body}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Boiler Room Box */}
      <div className="pt-12">
        <div className="p-10 bg-brand-green border-l-8 border-brand-gold rounded-[40px] shadow-2xl space-y-4">
          <div className="flex items-center gap-4 mb-2">
             <div className="px-3 py-1 bg-brand-gold text-brand-green font-headline text-xs tracking-widest rounded">THE REFERENCE</div>
          </div>
          <p className="font-serif italic text-lg md:text-xl text-[#F8F5E6] leading-relaxed">
            "This is the Boiler Room model, applied to Nairobi. Boiler Room built a global brand by filming club nights and uploading them. Online viewers became physical pilgrims. Savanna Sundays applies the same engine — content builds a community that shows up every Sunday."
          </p>
        </div>
      </div>
    </div>
  );
};
