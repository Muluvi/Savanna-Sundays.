'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Send, 
  Clock, 
  Zap, 
  Layers,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: "STEP 1", label: "Preparation", body: "Firefly prepares pack (Monday–Friday)", icon: <Package size={18} /> },
  { id: 2, title: "STEP 2", label: "Distribution", body: "Pack distributed to influencers (Saturday)", icon: <Send size={18} /> },
  { id: 3, title: "STEP 3", label: "NOON SUNDAY", body: "Coordinated drop at NOON SUNDAY", icon: <Clock size={20} />, highlight: true },
  { id: 4, title: "STEP 4", label: "Live Activation", body: "Live activation content (2PM–9PM)", icon: <Zap size={18} /> },
  { id: 5, title: "STEP 5", label: "Continuity", body: "Post-production content through the week", icon: <Layers size={18} /> },
];

export const InfluencerPacksSection = () => {
  return (
    <div className="space-y-12 pt-12 border-t border-white/5">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-brand-gold" size={24} />
          <div className="section-label mb-0">03D: Influencer Pack Drops</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tight leading-none">
                INFLUENCER PACK DROPS
              </h4>
              <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold leading-none">
                Coordinated. Branded. Every Sunday at noon.
              </p>
            </div>
            
            <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
              Every week, Firefly prepares an Influencer Pack — a ready-to-post content kit distributed to all The Savanna Vybe Squad influencers before Sunday. This isn’t random posting — it’s a synchronised content drop that maximises reach and signals that something is happening.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Branded IG Story templates",
                "Approved caption templates",
                "Key brand messaging",
                "Venue & DJ details",
                "HD product shots"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={16} />
                  <span className="font-body text-[10px] text-brand-cream/60 uppercase tracking-widest font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-white/[0.03] border border-brand-gold/20 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
              <Zap size={120} />
            </div>
            <div className="relative z-10 space-y-4">
              <h5 className="font-headline text-3xl text-white uppercase tracking-tight">The Content Kit</h5>
              <p className="font-body text-brand-cream/70 text-sm leading-relaxed">
                The pack creates a coordinated wave of Savanna visibility across Nairobi’s social feeds. By synchronising the drop at noon, we dominate the digital landscape before the physical event even begins.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Horizontal Flow */}
      <div className="space-y-8">
        <div className="section-label text-center mb-0 opacity-40">The Synchronisation Sequence</div>
        
        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-[1000px] py-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden md:block" />
            
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 relative z-10 p-6 rounded-[32px] flex flex-col items-center text-center gap-4 transition-all duration-700 border",
                  step.highlight 
                    ? "bg-brand-gold border-brand-gold text-brand-green scale-110 shadow-[0_0_50px_rgba(244,197,66,0.3)]" 
                    : "bg-white/5 border-white/10 text-brand-cream"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  step.highlight ? "bg-brand-green/20 text-brand-green" : "bg-brand-gold/10 text-brand-gold"
                )}>
                  {step.icon}
                </div>

                <div className="space-y-1">
                  <span className={cn(
                    "font-body text-[8px] uppercase font-bold tracking-[3px] opacity-60",
                    step.highlight ? "text-brand-green" : "text-brand-gold"
                  )}>
                    {step.title}
                  </span>
                  <h5 className={cn(
                    "font-headline text-xl uppercase leading-none",
                    step.highlight ? "text-brand-green" : "text-brand-gold"
                  )}>
                    {step.label}
                  </h5>
                  <p className={cn(
                    "font-body text-[10px] leading-tight font-bold uppercase tracking-widest px-2",
                    step.highlight ? "text-brand-green/80" : "text-brand-cream/40"
                  )}>
                    {step.body}
                  </p>
                </div>

                {step.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-green text-brand-gold border-none font-headline text-[10px] tracking-widest px-4">
                      ANCHOR MOMENT
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
