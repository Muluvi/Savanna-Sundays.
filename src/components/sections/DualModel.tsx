
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserCheck, 
  Trophy, 
  Star, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Activity,
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BrushStroke } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const venueData = [
  { name: "Muze", area: "Westlands", capacity: "400", type: "Owned", imageId: "venue-muze" },
  { name: "The Alchemist", area: "Westlands", capacity: "600", type: "Sponsor", imageId: "venue-alchemist" },
  { name: "KODA", area: "Kilimani", capacity: "350", type: "Owned", imageId: "venue-koda" },
  { name: "Black Samurai", area: "Westlands", capacity: "500", type: "Sponsor", imageId: "venue-black-samurai" },
  { name: "Masshouse", area: "Industrial Area", capacity: "1200", type: "Sponsor", imageId: "venue-masshouse" },
  { name: "Muze", area: "Westlands", capacity: "400", type: "Owned", imageId: "venue-muze" },
  { name: "The Alchemist", area: "Westlands", capacity: "600", type: "Sponsor", imageId: "venue-alchemist" },
  { name: "KODA", area: "Kilimani", capacity: "350", type: "Owned", imageId: "venue-koda" },
];

const matrixCriteria = [
  { label: "Audience Fit", score: 95, icon: <UserCheck className="w-4 h-4" /> },
  { label: "Visual Quality", score: 90, icon: <Trophy className="w-4 h-4" /> },
  { label: "Content Yield", score: 88, icon: <Zap className="w-4 h-4" /> },
  { label: "Credibility", score: 92, icon: <Star className="w-4 h-4" /> },
  { label: "Exclusivity", score: 85, icon: <ShieldCheck className="w-4 h-4" /> },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="max-w-3xl animate-fade-in-up">
        <p className="font-serif italic text-lg md:text-xl text-brand-green/60 leading-relaxed">
          One engine builds the brand. The other covers the city. Together, they make Savanna synonymous with Sunday.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-4 bg-white border-l-4 border-brand-gold rounded-[24px] flex flex-col justify-between group hover:shadow-lg transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-2xl text-brand-green uppercase">OWNED EDITIONS</h4>
              <p className="font-body text-brand-green/70 text-xs leading-relaxed">
                Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge className="bg-brand-gold text-brand-green text-[9px] uppercase tracking-widest border-none font-bold">Brand Focus</Badge>
          </div>
        </Card>
        
        <Card className="p-4 bg-white border-l-4 border-brand-teal rounded-[24px] flex flex-col justify-between group hover:shadow-lg transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-2xl text-brand-green uppercase">TITLE SPONSORSHIP</h4>
              <p className="font-body text-brand-green/70 text-xs leading-relaxed">
                Strategic reach mapping. Scaling Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge className="bg-brand-teal text-white text-[9px] uppercase tracking-widest border-none font-bold">Mass Reach</Badge>
          </div>
        </Card>
      </div>

      <div className="relative py-6 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-40 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-2xl md:text-4xl text-brand-green/90 leading-tight px-4">
            "We saturate the landscape without saturating the budget."
          </h3>
        </div>
      </div>

      <div className="animate-fade-in-up [animation-delay:600ms]">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1 h-auto grid grid-cols-3 mb-6 rounded-xl">
            <TabsTrigger value="network" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Venue Network</TabsTrigger>
            <TabsTrigger value="scorecard" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Curation Matrix</TabsTrigger>
            <TabsTrigger value="calendar" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Sunday Sprint</TabsTrigger>
          </TabsList>

          <TabsContent value="network" className="mt-0 overflow-hidden">
            <div className="relative w-full">
              {/* Marquee Animation Container */}
              <div className="flex animate-marquee whitespace-nowrap gap-4">
                {[...venueData, ...venueData].map((venue, i) => {
                  const img = venue.imageId ? PlaceHolderImages.find(p => p.id === venue.imageId) : null;
                  return (
                    <div key={i} className="inline-block min-w-[300px] md:min-w-[400px]">
                      <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-brand-green/5 bg-brand-cream/10">
                        {img ? (
                          <Image 
                            src={img.imageUrl} 
                            alt={venue.name} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority={i < 4}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-brand-green">
                            <span className="font-headline text-4xl text-brand-gold">{venue.name.charAt(0)}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-0 left-0 p-5 w-full">
                          <Badge className={cn(
                            "mb-2 text-[8px] uppercase tracking-widest border-none",
                            venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white'
                          )}>
                            {venue.type}
                          </Badge>
                          <h5 className="font-headline text-2xl text-white leading-none mb-1">{venue.name}</h5>
                          <div className="flex items-center gap-2 text-white/60">
                            <MapPin size={10} className="text-brand-gold" />
                            <span className="font-body text-[10px] uppercase tracking-widest font-bold">{venue.area}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Fade masks for the edges */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />
            </div>
          </TabsContent>

          <TabsContent value="scorecard">
            <div className="bg-white rounded-[32px] p-6 md:p-8 border border-brand-green/5 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4">
                {matrixCriteria.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-4 p-4 rounded-2xl bg-brand-cream/30 group hover:bg-white transition-all hover:shadow-lg border border-transparent hover:border-brand-gold/20">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Radial Gauge SVG */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-green/5" />
                        <circle 
                          cx="32" 
                          cy="32" 
                          r="28" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeDasharray={2 * Math.PI * 28} 
                          strokeDashoffset={2 * Math.PI * 28 * (1 - item.score / 100)} 
                          className="text-brand-gold transition-all duration-1000 group-hover:text-brand-teal" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-brand-green">{item.icon}</div>
                    </div>
                    <div className="space-y-1">
                      <h6 className="font-headline text-base text-brand-green uppercase leading-none">{item.label}</h6>
                      <div className="font-headline text-xl text-brand-gold leading-none">{item.score}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-md">
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {[...Array(28)].map((_, i) => {
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = isSunday && ((i + 1) === 7 || (i + 1) === 21);
                  const isSponsor = isSunday && ((i + 1) === 14 || (i + 1) === 28);
                  return (
                    <div key={i} className={cn(
                      "aspect-square rounded-md flex items-center justify-center text-[9px] font-bold shadow-sm border border-transparent",
                      isOwned ? "bg-brand-green text-brand-gold border-brand-gold/30" : 
                      isSponsor ? "bg-brand-teal text-white" : 
                      "bg-brand-cream/40 text-brand-green/10"
                    )}>
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
