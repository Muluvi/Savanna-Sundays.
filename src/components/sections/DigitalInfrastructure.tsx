
"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QrCode, Wifi, CreditCard, Activity, Smartphone, Share2, Database, BarChart3, CheckCircle2, Ticket, Users, Layers, MousePointerClick, MessageSquare, BellRing, Utensils, Globe, Vote } from 'lucide-react';
import Image from 'next/image';

const platforms = [
  { name: "Instagram", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png" },
  { name: "TikTok", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png" },
  { name: "YouTube", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764351543/YouTube_Icon_18_lal2zf.jpg" },
  { name: "Spotify", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764344747/Spotify_Primary_Logo_RGB_Green_hpueq3.png" },
  { name: "X", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png" },
];

export const DigitalInfrastructureSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          We treat digital infrastructure as an intelligence system, not just a technical requirement. At Savanna Sundays, every physical interaction—from a ticket scan to a bar order—is a discrete data point that feeds into a continuous optimization loop. This allows KWAL to move beyond "estimated reach" to precise consumer understanding, turning the activation into a high-fidelity market research instrument.
        </p>
      </div>

      {/* 10A: The Data Intelligence Framework */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10A: The Data Intelligence Framework
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Our infrastructure is designed to bridge the gap between physical experience and digital CRM. We don't just host people; we map their journey.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>100% Data Capture:</strong> RSVP-gating ensures we own the email and phone number of every attendee.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Behavioral Tracking:</strong> Analyzing arrival times, beverage preferences, and dwell zones to optimize future editions.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Attribution Loops:</strong> Linking social media engagement directly to on-site attendance through unique tracking IDs.</li>
            </ul>
          </div>

          <div className="bg-brand-cream/50 p-8 rounded-[32px] border border-brand-green/5 flex flex-col justify-center">
            <h4 className="font-headline text-xl text-brand-green mb-4">The Optimization Loop</h4>
            <div className="font-serif italic text-lg text-brand-teal leading-relaxed border-l-2 border-brand-teal pl-6 py-2">
              "Data is the foundation of institutionalization. By treating every event as a learning cycle, we ensure that Savanna's marketing spend becomes more efficient with every Sunday."
            </div>
          </div>
        </div>
      </div>

      {/* 10B: The Ticketing & Data Architecture */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10B: The Ticketing & Data Architecture
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              In Kenya, unstructured data is a wasted asset. We utilize **TicketSasa** as our primary ticketing partner to ensure that every attendee is converted into a structured CRM entry. This moves beyond "vanity metrics" (likes and follows) to actionable first-party data.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "We don't just count heads; we build a database. Structured data allows KWAL to retarget with 100% precision across future Sunday cycles."
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Ticket size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Primary Partner: TicketSasa</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Kenya's most reliable ticketing rail, providing native M-Pesa integration and robust real-time reporting APIs.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Mandatory Data Fields</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Collection of Name, Email, Phone, and Primary Neighborhood (Kilimani, Karen, etc.) at the point of RSVP.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 10C: The RSVP Conversion Engine */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10C: The RSVP Conversion Engine (Landing Page)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The transition from social media discovery to physical commitment happens on the **Savanna Sundays RSVP Landing Page**. We design this experience to be ultra-fast, mobile-native, and psychologically rewarding.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "Every field is a friction point. We optimize for 'Instant Gratification'—trading 30 seconds of user time for a premium, digital-first welcome."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-4">Conversion Tracking Logic</p>
            <p className="text-xs italic leading-relaxed">
              By deploying Meta and TikTok pixels alongside unique UTM parameters for every ambassador, we map exactly which content pieces drive the highest conversion ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MousePointerClick size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Smart Data Capture</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Frictionless 3-field entry (Name, Phone, Area). Syncs instantly to the master community database.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BellRing size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Automated Confirmations</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Instant SMS 'Welcome' followed by a rich-media WhatsApp push containing the digital ticket and entry rules.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">WhatsApp Onboarding</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">The final confirmation step triggers a prompt to join the neighborhood-specific WhatsApp sub-group.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 10D: The Dynamic QR Tracking System */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10D: The Dynamic QR Tracking System
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              We move beyond generic entry tickets to a **Unique QR Identity System**. Every RSVP generates a dynamic, non-transferable code that serves as the attendee's digital passport for the duration of the event.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "A QR code isn't just a key; it's a sensor. By tracking scans at entry, VIP zones, and activation hubs, we map the physical movement of the crowd in real-time."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-4">The Forecasting Advantage</p>
            <p className="text-xs italic leading-relaxed">
              Because we track 'RSVP-to-Scan' ratios across different neighborhoods and ambassador links, we can forecast exact attendance volumes with 90% accuracy 48 hours before doors open.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Unique Identity Mapping</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Every code is tied to a specific phone number and email, preventing ticket fraud and ensuring data integrity.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Real-Time Inflow Metrics</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Live monitoring of entry speed allows us to adjust security staffing and bar readiness on the fly.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Behavioral Heat-Mapping</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">Tracking which activation zones attract the highest unique scans to determine sponsor ROI and future layout optimizations.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 10E: The QR Ecosystem (On-Site Engagement) */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10E: The QR Ecosystem (On-Site Engagement)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The QR code is the attendee's primary interface with the brand on-site. We transform a simple scan into a multi-layered interaction engine that enhances the guest experience while providing KWAL with granular preference data.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "We move beyond static signage. The QR code turns every surface into a digital touchpoint—allowing for frictionless service and real-time community participation."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider">Driving High-Value Interaction</p>
            <p className="text-xs italic leading-relaxed">
              By removing the friction of manual searching or queuing for information, we increase the frequency of digital interactions per attendee by an estimated **3.5x**.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Utensils size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">Digital Menus & Ordering</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Dynamic menu access showing real-time variant availability, pricing, and signature serves. Reduces bar congestion and increases order frequency.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-2">One-Tap Social Hub</h4>
                <p className="font-body text-sm text-brand-green/70 leading-relaxed">Instant links to follow Savanna on IG/TikTok and a 'Tap to Tag' button that pre-loads #SavannaSundays into their social apps.</p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Vote size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-gold uppercase mb-2">Real-Time Pulse Polls</h4>
                <p className="font-body text-sm text-white/70 leading-relaxed">Interactive polls asking for feedback on DJs or venue preferences. Engagement results are mapped directly to individual CRM profiles.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Platform Integration Stack */}
      <div className="py-12 flex flex-col items-center">
        <div className="section-label mb-16">The Digital Hub Ecosystem</div>
        <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center">
          <div className="w-56 h-56 rounded-full border-4 border-brand-gold border-dashed flex items-center justify-center animate-spin [animation-duration:40s]">
            <div className="absolute inset-0 bg-brand-gold/5 rounded-full" />
          </div>
          
          <div className="absolute z-10 w-40 h-40 rounded-full bg-brand-green shadow-2xl flex flex-col items-center justify-center text-center p-6 border-2 border-brand-gold">
             <Database className="text-brand-gold mb-2" size={24} />
             <span className="font-headline text-brand-gold leading-none text-xl">SAVANNA<br/>DIGITAL HUB</span>
          </div>

          {mounted && platforms.map((p, i) => {
            const angle = (i * (360 / platforms.length)) * (Math.PI / 180);
            const x = Math.cos(angle) * 160;
            const y = Math.sin(angle) * 160;
            return (
              <div 
                key={i} 
                className="absolute w-16 h-16 rounded-full bg-white border-2 border-brand-teal p-3 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <Image src={p.icon} alt={p.name} width={32} height={32} className={`object-contain ${p.name === 'X' ? 'brightness-0' : ''}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { icon: <Smartphone />, label: "M-Pesa API" },
          { icon: <QrCode />, label: "Smart QR" },
          { icon: <Wifi />, label: "Branded Wi-Fi" },
          { icon: <CreditCard />, label: "NFC Payment" },
          { icon: <Activity />, label: "Live Analytics" },
        ].map((tech, i) => (
          <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl flex flex-col items-center gap-4 text-center group hover:border-brand-teal transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <span className="font-headline text-xs tracking-widest text-brand-green uppercase">{tech.label}</span>
          </Card>
        ))}
      </div>

      {/* Analytics Dashboard Mockup */}
      <div className="space-y-8">
        <div className="section-label">Real-Time Impact Dashboard</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "Attendance", value: "847", sub: "Capacity: 1,000", progress: 85 },
            { metric: "Social Reach", value: "1.2M", sub: "+12% from last Sun", progress: 72 },
            { metric: "Bottles Sold", value: "2,400", sub: "Avg 2.8/person", progress: 92 },
            { metric: "New Community", value: "312", sub: "Retained Members", progress: 65 },
            { metric: "UGC Posts", value: "89", sub: "Shared with #SavannaSundays", progress: 78 },
            { metric: "DJ Set Views", value: "45K", sub: "Across All Platforms", progress: 55 },
            { metric: "Sponsor ROI", value: "340%", sub: "Measured Impressions", progress: 88 },
            { metric: "Content Assets", value: "127", sub: "High-Fi Photos & Reels", progress: 95 },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-3 hover:shadow-md transition-shadow">
              <span className="font-body font-bold text-[10px] tracking-widest text-brand-teal uppercase">{item.metric}</span>
              <div className="font-headline text-4xl text-brand-gold leading-none">{item.value}</div>
              <p className="font-body text-xs text-brand-green/40">{item.sub}</p>
              <Progress value={item.progress} className="h-1 bg-brand-green/5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
