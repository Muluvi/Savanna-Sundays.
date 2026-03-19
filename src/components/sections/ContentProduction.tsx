
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { BrushStroke } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { Play, AudioLines, Share2, ArrowRight, Camera, Video, Smartphone, Mic2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const ContentSocialSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro Card */}
      <Card className="p-6 md:p-10 border-none bg-brand-green text-white rounded-[32px] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
          <Camera size={120} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="font-body font-bold text-[10px] tracking-[4px] uppercase text-brand-gold mb-4 block">The Deliverable</span>
          <h3 className="font-headline text-3xl md:text-5xl mb-6 leading-tight uppercase">Every event is a content harvest.</h3>
          <p className="font-body text-sm md:text-lg text-white/70 leading-relaxed italic font-serif">
            "The event is the harvest. Content is the crop. Community is the soil."
          </p>
        </div>
      </Card>

      {/* 04A: The Content Squad */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">04A: The Production Unit</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Lead Stills", icon: <Camera />, desc: "Editorial fashion & product." },
            { label: "Cinema Unit", icon: <Video />, desc: "Gimbal-native cinematic recap." },
            { label: "Social Shooter", icon: <Smartphone />, desc: "Vertical IG/TikTok native." },
            { label: "Sonic Eng", icon: <Mic2 />, desc: "Direct mixer-feed capture." },
          ].map((role, i) => (
            <Card key={i} className="p-5 bg-white border border-brand-green/5 rounded-2xl space-y-3 hover:border-brand-gold transition-all shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">{role.icon}</div>
              <h4 className="font-headline text-lg text-brand-green uppercase leading-none">{role.label}</h4>
              <p className="font-body text-[10px] text-brand-green/50 leading-tight">{role.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Proportional Pull Quote */}
      <div className="relative py-12 flex flex-col items-center justify-center">
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-3xl md:text-5xl text-brand-green/80 leading-relaxed px-4">
            "If it wasn't captured, it didn't happen."
          </h3>
        </div>
      </div>

      {/* 04B: Sonic Pipeline Visual */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">04B: The Sonic Pipeline</div>
        <div className="bg-brand-cream/50 border border-brand-green/5 rounded-[32px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block -translate-y-6" />
            
            {[
              { label: "Capture", icon: <AudioLines />, sub: "Direct Board Feed" },
              { label: "Polish", icon: <Play />, sub: "Post-Production" },
              { label: "Distribute", icon: <Share2 />, sub: "YT / Mixcloud" },
              { label: "Loop", icon: <ArrowRight />, sub: "Social Extraction" },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border border-brand-green/5 shadow-md flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-xl text-brand-green uppercase">{step.label}</h5>
                  <p className="font-body text-[10px] tracking-widest text-brand-green/40 font-bold uppercase">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04C: Extraction Table */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">04C: 30-Day Extraction Strategy</div>
        <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 px-8 text-sm">Timeframe</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm">Asset Type</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm text-right px-8">Channel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { time: "Day 1–3", type: "Viral Recaps & Golden Hour Reels", plat: "IG / TikTok" },
                { time: "Day 4–10", type: "Full Mixes & Community Portraits", plat: "YouTube / X" },
                { time: "Day 11–20", type: "Product Focus & Lifestyle Cuts", plat: "Meta / Web" },
                { time: "Day 21–30", type: "Next Sunday Teasers", plat: "Email / WA" },
              ].map((row, i) => (
                <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5">
                  <TableCell className="font-headline text-xl py-6 px-8 text-brand-teal">{row.time}</TableCell>
                  <TableCell className="font-body font-bold text-sm text-brand-green/70">{row.type}</TableCell>
                  <TableCell className="font-body text-[10px] text-brand-green/40 font-bold uppercase tracking-widest text-right px-8">{row.plat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
