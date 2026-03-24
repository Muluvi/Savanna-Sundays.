"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Heart, Share2, ShieldCheck, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const CommunityGrowthSection = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Strategic Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="section-label">05A: The Identity Moat</div>
          <h3 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase leading-tight">
            Building a culture, <br/>not just a crowd.
          </h3>
          <p className="font-body text-lg text-brand-cream/70 leading-relaxed">
            KWAL needs a loyal community. We build an identity people adopt—transforming passive attendees into cultural advocates through shared rituals and digital ownership.
          </p>
        </div>
        
        <Card className="p-10 bg-brand-green text-brand-cream border-none rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
            <Users size={160} />
          </div>
          <div className="relative z-10 space-y-6">
             <div className="flex gap-4">
                <Badge className="bg-brand-gold text-brand-green text-[10px] uppercase font-bold px-4 py-1">Identity</Badge>
                <Badge className="bg-brand-teal text-white text-[10px] uppercase font-bold px-4 py-1">Ritual</Badge>
             </div>
             <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-snug">
               "People don't just attend; they belong."
             </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
