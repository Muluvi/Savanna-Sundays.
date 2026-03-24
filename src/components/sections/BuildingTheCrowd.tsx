
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
    icon: <Zap className="text-brand-gold" size={16} /> 
  },
  { 
    title: "Streak Rewards", 
    body: "Attend 4 Sundays for exclusive perks.", 
    icon: <Target className="text-brand-gold" size={16} /> 
  },
  { 
    title: "Venue Polls", 
    body: "Mid-week voting on the next host.", 
    icon: <RefreshCcw className="text-brand-gold" size={16} /> 
  },
];

export const BuildingTheCrowd = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-lg md:text-xl text-brand-gold leading-tight">
          Every Sunday builds on the last. The content compounds.
        </p>
      </div>

      {/* Ultra-Compact Engagement Mechanics Tactical Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {engagementMechanics.map((m, i) => (
          <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group transition-all">
            <div className="p-2 rounded-lg bg-brand-gold/10 group-hover:scale-110 transition-transform shrink-0">
              {m.icon}
            </div>
            <div className="space-y-0.5">
              <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{m.title}</h5>
              <p className="font-body text-[9px] text-brand-cream/50 leading-tight uppercase font-bold tracking-wider">
                {m.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[3px] font-bold">
          Loyalty is celebrated through consistent physical presence.
        </p>
      </div>
    </div>
  );
};
