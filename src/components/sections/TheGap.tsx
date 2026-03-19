"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, MessageSquare, AlertTriangle, XCircle } from 'lucide-react';

export const TheGap = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* 01A: Opportunity Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">300,000+</div>
            <div className="font-body text-[10px] uppercase tracking-[3px] opacity-40 mt-1 font-bold">Weekly Decision Makers</div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 text-brand-cream group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <div>
            <div className="font-headline text-3xl leading-none">WhatsApp First</div>
            <div className="font-body text-[10px] uppercase tracking-[3px] opacity-40 mt-1 font-bold">Primary Social Engine</div>
          </div>
        </Card>
      </div>

      {/* 01B: Strategic Subheading */}
      <div className="max-w-3xl animate-fade-in-up [animation-delay:200ms]">
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-brand-cream/60 leading-relaxed">
          Every Sunday, Nairobi's most valuable consumers choose where to go, what to drink, and what to post. No brand owns that moment.
        </p>
      </div>

      {/* 01C: The Problem Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:400ms]">
        <Card className="bg-white/5 border-l-4 border-red-500/50 p-8 group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
            <AlertTriangle size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-4 text-brand-cream uppercase tracking-tight">The Fragmentation Problem</h4>
          <p className="font-body text-brand-cream/50 text-sm leading-relaxed">
            Dozens of Sunday day parties across Nairobi. Interchangeable. Forgettable. None owned by a brand.
          </p>
        </Card>
        
        <Card className="bg-white/5 border-l-4 border-brand-gold/50 p-8 group hover:bg-white/10 transition-all">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6">
            <XCircle size={24} />
          </div>
          <h4 className="font-headline text-2xl mb-4 text-brand-cream uppercase tracking-tight">Savanna's Current Position</h4>
          <p className="font-body text-brand-cream/50 text-sm leading-relaxed">
            Savanna is distributed in Kenya. Available in stores and bars. But it has no cultural identity in this market. No experiential presence. No community. No moments.
          </p>
        </Card>
      </div>

      <div className="h-12" />
    </div>
  );
};
