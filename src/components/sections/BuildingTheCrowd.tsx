'use client';

import React from 'react';
import { 
  Zap,
  Target,
  RefreshCcw
} from 'lucide-react';

const engagementMechanics = [
  { 
    title: "The DJ Reveal", 
    body: "Mid-week sound clip tease. speculating speculation.", 
    icon: <Zap className="text-brand-gold" size={18} /> 
  },
  { 
    title: "Streak Rewards", 
    body: "Attend 4 Sundays for exclusive perks.", 
    icon: <Target className="text-brand-gold" size={18} /> 
  },
  { 
    title: "Venue Polls", 
    body: "Mid-week voting on the next host.", 
    icon: <RefreshCcw className="text-brand-gold" size={18} /> 
  },
];

export const BuildingTheCrowd = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-tight">
          Every Sunday builds on the last. The content compounds.
        </p>
      </div>

      {/* Ultra-Compact Engagement Mechanics Tactical Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {engagementMechanics.map((m, i) => (
          <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 group transition-all hover:bg-white/10">
            <div className="p-3 rounded-lg bg-brand-gold/10 group-hover:scale-110 transition-transform shrink-0">
              {m.icon}
            </div>
            <div className="space-y-1">
              <h5 className="font-headline text-2xl text-brand-gold uppercase leading-none">{m.title}</h5>
              <p className="font-body text-[10px] text-brand-cream/60 leading-tight uppercase tracking-wider">
                {m.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8 border-t border-white/5">
        <p className="font-body text-xs text-brand-gold/30 italic uppercase tracking-[4px]">
          Loyalty is celebrated through consistent physical presence.
        </p>
      </div>
    </div>
  );
};
