
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClipboardCheck, ShieldCheck, Clock, Users, ArrowRight, Zap, Heart, CheckCircle2, Calendar, HardHat, Radio, Target, Construction, Timer, Camera, Sparkles, Volume2, Disc, Headphones, Lightbulb, Settings, UserPlus, Info } from 'lucide-react';

const staff = [
  { role: "Brand Ambassadors", count: "12", costume: "Yellow Savanna Polos", investment: "120k – 180k", notes: "Product knowledge & VIP engagement focus" },
  { role: "Mixologists", count: "8", costume: "Black/Teal Branded Aprons", investment: "80k – 150k", notes: "Speed-of-service and variant mastery" },
  { role: "Security Detail", count: "15", costume: "Discrete Black Tactical", investment: "150k – 250k", notes: "Crowd-pulse monitoring & entrance control" },
  { role: "Production Crew", count: "10", costume: "Branded Staff Tees", investment: "100k – 200k", notes: "Technical support, AV, and site strike" },
  { role: "Cleaning Detail", count: "6", costume: "High-vis (Discrete)", investment: "40k – 80k", notes: "Constant clearing for 100% aesthetic uptime" },
];

const productionTimeline = [
  { day: "T-14", task: "Venue Recon & Permits", detail: "Final site-visit to lock layout vs capacity. Clearing MCSK and county permits." },
  { day: "T-10", task: "Technical Specs Locked", detail: "Finalizing AV requirements, secondary power (generator), and staging modules." },
  { day: "T-07", task: "Talent & Staff Sync", detail: "Distribution of 'Savanna Sonic' briefs to DJs and 'Crisp Personality' briefs to BAs." },
  { day: "T-03", task: "Logistics Load-Dispatch", detail: "Moving branded furniture and physical assets into central Nairobi storage." },
  { day: "T-01", task: "Dry Load-In", detail: "Installing non-technical decor, signage, and branded bar fascias at the venue." },
];

const setupProtocol = [
  { time: "06:00 AM", task: "Technical Load-In", detail: "Rigging sound systems and amber lighting arrays. Power stability testing." },
  { time: "09:00 AM", task: "Aesthetic Audit", detail: "Detailed brand installation. Ensuring every surface is 'Camera Ready'." },
  { time: "11:00 AM", task: "Product Chilling", detail: "Delivery of ice and variants. Ensuring Dry and 0.0 reach optimal serve temp." },
  { time: "01:00 PM", task: "Full Walkthrough", detail: "Final BA briefing, mic checks, and 'vibe-check' dress rehearsal." },
  { time: "09:30 PM", task: "The Strike (Breakdown)", detail: "Rapid site-clearing and inventory reconciliation within 120 minutes of close." },
];

const runOfShow = [
  { time: "02:00 PM", milestone: "Doors Open / Arrival", intent: "The 'First Crisp' moment. Activation hubs (QR onboarding) active." },
  { time: "04:30 PM", milestone: "Golden Hour Activation", intent: "Primary content harvest. Content team moves to 'Peak Positioning'." },
  { time: "06:00 PM", milestone: "Sunset Transition", intent: "Lighting shift to Amber Peak. Headliner arrival. High-energy clip capture." },
  { time: "07:30 PM", milestone: "The High Peak", intent: "Maximum crowd density. Merchandise drops and special 'Savanna Moments' trigger." },
  { time: "08:30 PM", milestone: "Resolution Phase", intent: "Music cool-down. Exit keepsakes distributed. CRM feedback prompts triggered." },
  { time: "09:00 PM", milestone: "Event Close", intent: "Safe departure protocol. Site clearing initiates." },
];

export const EventProductionSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Execution excellence is where strategy meets reality. At Firefly, we operate with a dual-mindset: <strong>Broadcast-Level Precision</strong> meeting <strong>House-Party Warmth</strong>. We treat every Sunday as a high-stakes live broadcast—where timing, technical redundancy, and operational flow are non-negotiable—while ensuring the attendee feels the effortless intimacy of a private gathering.
        </p>
      </div>

      {/* 11A: The Execution Philosophy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11A: The Execution Philosophy
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              We move beyond "event management" to high-fidelity experience production. Our methodology ensures that the complexity of the operation never interrupts the simplicity of the vibe.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Broadcast Precision:</strong> Rigorous technical checks, secondary power redundancies, and 15-minute "Call Sheets" for all staff.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>House-Party Warmth:</strong> A service culture that prioritizes names over numbers and proactive hospitality.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>The Invisible Hand:</strong> Management that is omnipresent in impact but invisible in presence.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-8 bg-brand-gold/10 border-2 border-brand-gold rounded-[32px] space-y-4">
              <div className="flex items-center gap-4">
                <Zap className="text-brand-gold" size={32} />
                <h4 className="font-headline text-2xl text-brand-green uppercase">Broadcast Precision</h4>
              </div>
              <p className="font-serif italic text-base text-brand-green leading-relaxed">
                "We treat the dancefloor as a set and the event as a live show. Every light cue is mapped to ensure the content harvest is flawless."
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* 11B: The Savanna AV Technical Standard */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11B: The Savanna AV Technical Standard
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              The sonic and visual layer of Savanna Sundays must match the 'crisp' brand promise. We move away from generic club sound toward a broadcast-ready audio and lighting environment that prioritizes clarity, analog warmth, and cinematic texture.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "We don't just provide sound; we provide a soundstage. Quality is the non-negotiable floor upon which the experience is built."
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Volume2 size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">High-Fidelity PA Specs</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">Pro-grade active line arrays (L-Acoustics/RCF) tuned for mid-range clarity and rich analog sub-frequencies.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Disc size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">Standard DJ Monitoring</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">Mandatory Pioneer CDJ-3000s + DJM-A9 Mixer setup. Booth monitors pole-mounted at ear-level.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Radio size={24} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">Direct Audio Capture</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">Mandatory board-feed XLR out to digital Tascam recorders for broadcast-quality mix series.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 11C: The Human Infrastructure (Staffing Matrix) */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11C: The Human Infrastructure (Staffing Matrix)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Operational coverage is achieved through a tiered staffing model that ensures every zone of the venue is managed by a specialist. We move beyond 'generic event help' to a team of 50+ trained professionals who represent the brand's 'Crisp' personality at every touchpoint.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-4 border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "We don't just fill roles; we deploy ambassadors. Every staff member is a visual and tonal representative of the Savanna lifestyle."
            </div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-4">Operational Coverage Philosophy</p>
            <p className="text-xs italic leading-relaxed">
              Staff ratios are maintained at 1 per 15 attendees to ensure zero wait times and constant aesthetic management.
            </p>
          </div>

          <Card className="p-8 bg-brand-green text-white rounded-[30px] flex flex-col gap-8 shadow-xl">
            <h5 className="font-headline text-2xl text-brand-gold border-b border-white/10 pb-4">COMPLIANCE & SAFETY</h5>
            <ul className="space-y-6">
              {[
                "NACADA Product Guidelines Compliance",
                "MCSK / Music Copyright Permits",
                "Fire Safety & Emergency Exits Inspection",
                "Public Health & Catering Licenses",
                "Private Security Certification (Discrete)",
                "KRA / Tax Compliance on Point-of-Sale",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center group">
                  <div className="w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                    <ClipboardCheck size={16} />
                  </div>
                  <span className="font-body text-sm font-light text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 text-sm">Role</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm text-center">Count</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm text-right">Inv. Range (KSh)</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm">Costume / Aesthetic</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-sm">Primary Duty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((s, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-lg py-6 text-brand-green flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    {s.role}
                  </TableCell>
                  <TableCell className="font-body font-bold text-center text-brand-teal">{s.count}</TableCell>
                  <TableCell className="font-body font-bold text-right text-brand-green/60">{s.investment}</TableCell>
                  <TableCell className="font-body text-xs text-brand-green/60 italic">{s.costume}</TableCell>
                  <TableCell className="font-body text-xs text-brand-green/60">{s.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 11D: The 14-Day Production Countdown */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11D: The 14-Day Production Countdown
        </h3>
        
        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6">Milestone</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Task</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productionTimeline.map((row, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-xl py-6 text-brand-teal">{row.day}</TableCell>
                  <TableCell className="font-body font-bold text-brand-green">{row.task}</TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60">{row.detail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 11E: Technical Load-In & Strike Protocol */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11E: Technical Load-In & Strike Protocol
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              On-site operations are governed by a strict "T-Minus" clock. We prioritize technical stability and aesthetic perfection early in the day.
            </p>
          </div>

          <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
            <Table>
              <TableHeader className="bg-brand-teal">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-6">Time</TableHead>
                  <TableHead className="text-white font-headline tracking-widest">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {setupProtocol.map((row, i) => (
                  <TableRow key={i} className="group hover:bg-brand-teal/5 transition-colors">
                    <TableCell className="font-headline text-lg py-6 text-brand-teal">{row.time}</TableCell>
                    <TableCell className="py-6">
                      <div className="font-body font-bold text-brand-green">{row.task}</div>
                      <div className="font-body text-xs text-brand-green/50 italic">{row.detail}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* 11G: The 'Run of Show' */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11G: The 'Run of Show' (Timing Precision)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              During the live window (2 PM – 9 PM), we manage the experience with minute-by-minute precision.
            </p>
          </div>

          <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-6">Event Time</TableHead>
                  <TableHead className="text-white font-headline tracking-widest">Milestone & Intent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {runOfShow.map((row, i) => (
                  <TableRow key={i} className="group hover:bg-brand-cream/50 transition-colors">
                    <TableCell className="font-headline text-lg py-6 text-brand-gold">{row.time}</TableCell>
                    <TableCell className="py-6">
                      <div className="font-body font-bold text-brand-green">{row.milestone}</div>
                      <div className="font-body text-xs text-brand-green/60">{row.intent}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* 11F: The Unified Command Structure */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11F: The Unified Command Structure
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Radio size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">Central Producer</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">The single point of accountability. Manages the 'Run of Show' clock.</p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[24px] space-y-4 hover:border-brand-gold transition-colors group">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">Department Leads</h4>
            <p className="font-body text-xs text-brand-green/60 leading-relaxed">Dedicated leads for AV, F&B, Security, and Content.</p>
          </Card>

          <Card className="p-8 bg-brand-green text-white border-none rounded-[24px] space-y-4 shadow-xl group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-gold uppercase">Crisis Protocol</h4>
            <p className="font-body text-xs text-white/70 leading-relaxed">Pre-defined responses for technical failure or capacity surges.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
