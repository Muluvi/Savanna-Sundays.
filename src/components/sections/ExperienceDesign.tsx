
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, GlassWater, MapPin, Sparkles, Trophy, Camera, Utensils, Beer, DoorOpen, QrCode } from 'lucide-react';

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Experience design is the process of earning brand equity through physical interaction. We treat Savanna Sundays as an experience system, not just entertainment. Every touchpoint—from the arrival greeting to the signature serve—is engineered to create a specific memory, produce a high-value digital asset, and deepen community connection. Our goal is to give attendees something remarkable to talk about.
        </p>
      </div>

      {/* 8A: The Experience Philosophy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8A: The Experience Philosophy
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              In a fragmented social landscape, brand equity is won or lost on-site. We move beyond "hosting an event" to managing an ecosystem of high-value interactions.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Conversational Currency:</strong> We design moments that are specifically intended to be described to friends the next day.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Content-First Zoning:</strong> Every area of the venue is evaluated for its background quality and lighting potential.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Emotional Anchoring:</strong> Connecting the crispness of Savanna to positive social milestones.</li>
            </ul>
          </div>

          <div className="bg-brand-cream/50 p-8 rounded-[32px] border border-brand-green/5 flex flex-col justify-center">
            <h4 className="font-headline text-xl text-brand-green mb-4">Impact on Recall</h4>
            <div className="font-serif italic text-lg text-brand-teal leading-relaxed border-l-2 border-brand-teal pl-6 py-2">
              "An event is temporary; an experience system is permanent. By engineering the connection between the brand and the moment, we ensure Savanna owns the memory."
            </div>
          </div>
        </div>
      </div>

      {/* 8B: The Arrival Experience */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8B: The Arrival Experience (2:00–2:30 PM)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The first 30 seconds of an attendee’s journey determine their emotional state for the next 7 hours. We move away from the 'hostile security' model of standard nightlife toward a personalized, high-aesthetic hospitality experience that onboards members into the Savanna community immediately.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "Arrival isn't a logistics hurdle; it's the brand's first handshake. If the entry feels premium, the drink tastes better."
            </div>
            <p className="text-sm">
              The arrival sequence sets the tone for the entire day—transitioning guests from the chaos of the city into the 'Savanna Sundays state of mind' through sensory cues and frictionless onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <DoorOpen size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Branded Entry Portal</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">A timber-framed archway with backlit gold acrylic establishing the 'Wood + Gold' premium aesthetic from street-view.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GlassWater size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">The 'First Crisp' Station</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Immediate welcome serve: a chilled Savanna Dry or 0.0 with a signature lemon wedge, served from a bespoke wooden ice cart.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Onboarding Card</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">A physical 'First-Timer' card with a smart QR code triggering immediate WhatsApp enrollment and providing Wi-Fi credentials.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 8C: Venue Zone Map */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8C: On-Site Spatial Strategy
        </h3>
        <div className="bg-brand-green/5 rounded-[40px] p-8 border border-brand-green/5 relative overflow-hidden">
          <svg viewBox="0 0 800 500" className="w-full h-auto drop-shadow-2xl">
            {/* Background Grid */}
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F4D3A" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#grid-pattern)" rx="20" />

            {/* Zones */}
            {/* Dance Floor */}
            <path d="M150,150 L450,150 L450,450 L150,450 Z" fill="#F4C542" opacity="0.15" stroke="#F4C542" strokeWidth="2" strokeDasharray="5,5" />
            <text x="300" y="300" textAnchor="middle" className="font-headline text-2xl fill-brand-gold">DANCE FLOOR</text>

            {/* Chill Zone */}
            <circle cx="650" cy="120" r="90" fill="#2D8C7F" opacity="0.15" stroke="#2D8C7F" strokeWidth="2" strokeDasharray="5,5" />
            <text x="650" y="120" textAnchor="middle" className="font-headline text-xl fill-brand-teal">CHILL ZONE</text>

            {/* VIP Lounge */}
            <rect x="550" y="280" width="200" height="180" rx="10" fill="#1F4D3A" opacity="0.2" stroke="#1F4D3A" strokeWidth="2" strokeDasharray="5,5" />
            <text x="650" y="370" textAnchor="middle" className="font-headline text-xl fill-brand-green">VIP LOUNGE</text>

            {/* Food Court */}
            <rect x="50" y="50" width="150" height="120" rx="10" fill="#FEF3C7" opacity="0.5" stroke="#F4C542" strokeWidth="1" />
            <text x="125" y="115" textAnchor="middle" className="font-headline text-lg fill-brand-gold">FOOD COURT</text>

            {/* Markers */}
            <circle cx="300" cy="300" r="8" fill="#F4C542" className="animate-pulse" />
            <circle cx="650" cy="120" r="8" fill="#2D8C7F" className="animate-pulse" />
            <circle cx="650" cy="370" r="8" fill="#1F4D3A" className="animate-pulse" />
            
            {/* Icons */}
            <foreignObject x="288" y="260" width="24" height="24">
              <Sparkles className="text-brand-gold" size={24} />
            </foreignObject>
            <foreignObject x="638" y="80" width="24" height="24">
              <Camera className="text-brand-teal" size={24} />
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* 8D: Attendee Journey */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8D: The Attendee Journey
        </h3>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 py-8">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 hidden md:block" />
          {[
            { label: "Discovery", icon: <Sparkles size={18} /> },
            { label: "RSVP", icon: <CheckCircle2 size={18} /> },
            { label: "Arrival", icon: <MapPin size={18} /> },
            { label: "Experience", icon: <Beer size={18} /> },
            { label: "Share", icon: <Camera size={18} /> },
            { label: "Return", icon: <Trophy size={18} /> },
          ].map((step, i, arr) => (
            <div key={i} className="relative z-10 w-full md:w-auto">
              <Card className="p-5 flex flex-col items-center gap-3 bg-white border border-brand-green/5 rounded-2xl w-full md:w-32 hover:border-brand-gold transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="font-headline text-xs tracking-widest text-brand-green uppercase text-center">{step.label}</span>
              </Card>
              {i < arr.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <ArrowRight className="text-brand-gold rotate-90" size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 8E & 8F: Savanna 0.0 & Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
        <Card className="p-8 bg-white border-l-4 border-brand-teal rounded-[24px] shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
              <GlassWater size={24} />
            </div>
            <div>
              <h4 className="font-headline text-3xl text-brand-green">8E: SAVANNA 0.0 INTEGRATION</h4>
              <Badge className="bg-brand-teal text-white border-none mt-1">Non-Alcoholic Track</Badge>
            </div>
          </div>
          <p className="font-body text-brand-green/60 leading-relaxed text-sm">
            A dedicated experience track for the mindful consumer. We ensure the Savanna 0.0 crispness is as celebrated as the original, with specific branded glassware and dedicated non-alc mixology stations that maintain the premium aesthetic.
          </p>
        </Card>

        <div className="space-y-6">
          <h4 className="font-headline text-xl text-brand-green uppercase tracking-wider mb-2">8F: Interactive Activations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Spin-the-Wheel", icon: <Sparkles />, color: "bg-brand-light-yellow/40" },
              { title: "Blind Tasting", icon: <Beer />, color: "bg-brand-light-yellow/40" },
              { title: "Social Challenge", icon: <Camera />, color: "bg-brand-light-yellow/40" },
            ].map((game, i) => (
              <Card key={i} className={`p-6 ${game.color} border border-brand-gold/20 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:scale-105 transition-transform`}>
                <div className="text-brand-gold">{game.icon}</div>
                <span className="font-headline text-xs text-brand-green uppercase tracking-wider">{game.title}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
