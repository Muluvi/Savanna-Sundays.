
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, GlassWater, MapPin, Sparkles, Trophy, Camera, Utensils, Beer, DoorOpen, QrCode, Clock, Smartphone, Info, Soup, ChefHat } from 'lucide-react';

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
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <DoorOpen size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Branded Entry Portal</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">A timber-framed archway establish the 'Wood + Gold' premium aesthetic from street-view.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GlassWater size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">The 'First Crisp' Station</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Immediate welcome serve: chilled Savanna Dry or 0.0 with a signature lemon wedge.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Onboarding Card</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">A physical card with a smart QR code triggering immediate WhatsApp enrollment.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 8C: The Bar Experience & Discovery-Driven Consumption */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8C: The Bar Experience & Discovery-Driven Consumption
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The bar is the primary site of revenue and brand trial. We engineer this space for discovery, ensuring that every interaction increases the attendee's knowledge of the Savanna range while maintaining the frictionless speed required for high-energy Sundays.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "We don't just sell drinks; we curate choices. By making the full range visible and easy to buy, we drive multi-product trial."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider">The 3-Minute Service Mandate</p>
            <p className="text-xs italic leading-relaxed">
              We monitor throughput to ensure no guest waits longer than 3 minutes. Speed is a premium attribute.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Variant Discovery Hub</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Back-lit bottle display featuring Dry, Light, Angry Lemon, and 0.0 with clear, witty tasting notes for each.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">"Sunday Specials" (Exclusive Serves)</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Signature cider cocktails and 0.0 mocktails exclusive to Savanna Sundays, served in branded high-aesthetic glassware.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Native M-Pesa POS Rails</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">Native STK push integration at every service point. Frictionless 'Tap & Go' or QR payment flow to eliminate cash-handling delays.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 8D: The Culinary Layer & Vendor Curation */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8D: The Culinary Layer & Vendor Curation
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Food is not a separate service; it is a critical sensory layer of the Savanna experience. We curate 3–5 rotating vendors who match Nairobi's premium lifestyle tastes, ensuring high visual appeal and flavor profiles that specifically complement the crispness of Savanna.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "We don't host food stalls; we curate a culinary experience. If the food doesn't look as premium as the cider, it doesn't serve the brand."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider">The Pairing Strategy</p>
            <p className="text-xs italic leading-relaxed">
              Each vendor is required to offer at least one "Savanna Sunday Special"—a signature dish designed to pair perfectly with chilled Savanna Dry or Light.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ChefHat size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Curation over Capacity</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Selection based on quality, plating aesthetic, and speed of service. Vendors rotate to keep the community experience fresh across editions.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Utensils size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">The Visual Plating Standard</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Mandatory vendor brief on branding and plating. Food must be 'camera-ready' to drive high-value UGC from diners.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Soup size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Integrated Menu Items</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">Strategic collaborations for Savanna-infused sauces or pairings, anchoring the brand directly in the attendee's culinary memory.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 8E: Venue Zone Map */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8E: On-Site Spatial Strategy
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
            <path d="M150,150 L450,150 L450,450 L150,450 Z" fill="#F4C542" opacity="0.15" stroke="#F4C542" strokeWidth="2" strokeDasharray="5,5" />
            <text x="300" y="300" textAnchor="middle" className="font-headline text-2xl fill-brand-gold">DANCE FLOOR</text>

            <circle cx="650" cy="120" r="90" fill="#2D8C7F" opacity="0.15" stroke="#2D8C7F" strokeWidth="2" strokeDasharray="5,5" />
            <text x="650" y="120" textAnchor="middle" className="font-headline text-xl fill-brand-teal">CHILL ZONE</text>

            <rect x="550" y="280" width="200" height="180" rx="10" fill="#1F4D3A" opacity="0.2" stroke="#1F4D3A" strokeWidth="2" strokeDasharray="5,5" />
            <text x="650" y="370" textAnchor="middle" className="font-headline text-xl fill-brand-green">VIP LOUNGE</text>

            <rect x="50" y="50" width="150" height="120" rx="10" fill="#FEF3C7" opacity="0.5" stroke="#F4C542" strokeWidth="1" />
            <text x="125" y="115" textAnchor="middle" className="font-headline text-lg fill-brand-gold">FOOD COURT</text>
          </svg>
        </div>
      </div>

      {/* 8F: Attendee Journey */}
      <div className="space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8F: The Attendee Journey
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

      {/* 8G & 8H: Savanna 0.0 & Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
        <Card className="p-8 bg-white border-l-4 border-brand-teal rounded-[24px] shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
              <GlassWater size={24} />
            </div>
            <div>
              <h4 className="font-headline text-3xl text-brand-green uppercase">8G: SAVANNA 0.0 INTEGRATION</h4>
              <Badge className="bg-brand-teal text-white border-none mt-1">Non-Alcoholic Track</Badge>
            </div>
          </div>
          <p className="font-body text-brand-green/60 leading-relaxed text-sm">
            A dedicated experience track for the mindful consumer. We ensure the Savanna 0.0 crispness is as celebrated as the original, with specific branded glassware and stations.
          </p>
        </Card>

        <div className="space-y-6">
          <h4 className="font-headline text-xl text-brand-green uppercase tracking-wider mb-2">8H: Interactive Activations</h4>
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
