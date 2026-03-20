
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, MessageSquare, AlertTriangle, XCircle } from 'lucide-react';

export const TheGap = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
        <Card className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-brand-cream group hover:bg-white/10 hover:border-brand-gold/30 transition-all cursor-default">
          <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Users size={20} />
          </div>
          <div>
            <div className="font-headline text-2xl leading-none group-hover:text-brand-gold transition-colors">300,000+</div>
            <div className="font-body text-[9px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">Weekly Decision Makers</div>
          </div>
        </Card>
        
        <Card className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-brand-cream group hover:bg-white/10 hover:border-brand-teal/30 transition-all cursor-default">
          <div className="w-10 h-10 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare size={20} />
          </div>
          <div>
            <div className="font-headline text-2xl leading-none group-hover:text-brand-teal transition-colors">WhatsApp First</div>
            <div className="font-body text-[9px] uppercase tracking-[2px] opacity-40 mt-1 font-bold">Primary Social Engine</div>
          </div>
        </Card>
      </div>

      <div className="max-w-3xl animate-fade-in-up [animation-delay:200ms]">
        <p className="font-serif italic text-lg md:text-xl text-brand-cream/60 leading-relaxed">
          Every Sunday, Nairobi's most valuable consumers choose where to go, what to drink, and what to post. No brand owns that moment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:400ms]">
        <Card className="bg-white/5 border-l-4 border-red-500/50 p-6 group hover:bg-red-500/5 transition-all cursor-default border border-white/5">
          <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:animate-pulse">
            <AlertTriangle size={20} />
          </div>
          <h4 className="font-headline text-xl mb-2 text-brand-cream uppercase tracking-tight group-hover:text-red-400 transition-colors">The Fragmentation Problem</h4>
          <p className="font-body text-brand-cream/50 text-xs leading-relaxed">
            Dozens of Sunday day parties across Nairobi. Interchangeable. Forgettable. None owned by a brand.
          </p>
        </Card>
        
        <Card className="bg-white/5 border-l-4 border-brand-gold/50 p-6 group hover:bg-brand-gold/5 transition-all cursor-default border border-white/5">
          <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-4 group-hover:animate-pulse">
            <XCircle size={20} />
          </div>
          <h4 className="font-headline text-xl mb-2 text-brand-cream uppercase tracking-tight group-hover:text-brand-gold transition-colors">Savanna's Current Position</h4>
          <p className="font-body text-brand-cream/50 text-xs leading-relaxed">
            Savanna has distribution, but no cultural identity in this market. No experiential presence. No community. No moments.
          </p>
        </Card>
      </div>
    </div>
  );
};
