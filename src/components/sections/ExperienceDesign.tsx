"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  DoorOpen, 
  Sun, 
  Zap, 
  Moon
} from 'lucide-react';

const timelineStages = [
  {
    time: "2:00 PM",
    label: "Doors Open",
    body: "Squad set up. DJ opens golden hour. Brand is live before the first guest arrives.",
    icon: <DoorOpen size={20} />,
  },
  {
    time: "3:00 – 5:00 PM",
    label: "Golden Hour",
    body: "DJ 1 builds the mood. Influencers live on Stories. Content crew capturing crowd and brand moments.",
    icon: <Sun size={20} />,
  },
  {
    time: "5:00 – 8:00 PM",
    label: "Peak Time",
    body: "DJ 2 takes over. MC runs crowd interactions. Primary content window — footage for Reels and YouTube.",
    icon: <Zap size={20} />,
    active: true,
  },
  {
    time: "8:00 – 9:00 PM",
    label: "Wind Down",
    body: "Session closes. Final content captured. Post-production begins Monday.",
    icon: <Moon size={20} />,
  },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="section-label">03B: Activation Timeline</div>
        
        <div className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 pt-4">
          {/* Mobile connecting line would go here, but for now we focus on cards */}
          {timelineStages.map((stage, i) => (
            <Card 
              key={i} 
              className={`p-6 border-none rounded-[24px] space-y-4 transition-all duration-500 shadow-lg relative ${
                stage.active ? 'bg-brand-green border-brand-gold border-t-2' : 'bg-[#221A0A]'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  stage.active ? 'bg-brand-gold text-brand-green' : 'bg-white/5 text-brand-gold'
                }`}>
                  {stage.icon}
                </div>
                <span className="font-headline text-sm text-brand-gold/60">{stage.time}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className={`font-headline text-xl uppercase ${stage.active ? 'text-brand-gold' : 'text-white'}`}>
                  {stage.label}
                </h4>
                <p className="font-body text-[11px] text-[#B8A98A] leading-relaxed">
                  {stage.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
