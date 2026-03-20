
"use client";

import React from 'react';
import { RefreshCcw, Layers, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const insightCards = [
  {
    icon: <RefreshCcw className="text-brand-gold" size={24} />,
    title: "THE REPETITION TRAP",
    body: "Nairobi's Sunday activations operate on a compressed weekly cycle — venue booked, DJ confirmed, flyer posted, event executed, content forgotten. This cadence repeats without strategic escalation, narrative progression, or audience deepening. Each edition starts from zero. No event builds systematically on the equity of the one before it. This creates a structural ceiling on the value any single activation can generate — and a structural opportunity for any operator that introduces compounding mechanics into the cycle."
  },
  {
    icon: <Layers className="text-brand-gold" size={24} />,
    title: "THE CONTENT DEFICIT",
    body: "Sunday events in Nairobi produce enormous volumes of social media content — but virtually none of it compounds. Event photography is posted, engaged with for 24-48 hours, and then buried in algorithmic decay. No Sunday activation in the city currently operates a content strategy that extracts sustained value from a single event across a 30-day cycle. The content is treated as a byproduct of the event rather than as the primary asset. This means the most commercially valuable output of every Sunday — shareable, brand-associated visual content — is being systematically wasted."
  },
  {
    icon: <Shield className="text-brand-gold" size={24} />,
    title: "THE OWNERSHIP VACUUM",
    body: "No beverage brand in the Kenyan market currently holds a proprietary association with Sunday as a social occasion. Premium brands activate across the weekly calendar without day-specific positioning, treating Sunday the same as Friday or Saturday — a missed distinction, given that Sunday's audience composition, social behaviour, and content dynamics are fundamentally different. This is a category-level white space. The first brand to claim it will set the terms of engagement. Late entrants will find themselves competing on territory that has already been defined."
  }
];

export const TheGap = () => {
  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Strategic Narrative */}
      <div className="max-w-4xl space-y-4">
        <p className="font-body text-[#F0EBE0] text-base md:text-lg leading-[1.7]">
          Sunday in Nairobi is not merely a day off — it is the city's most concentrated brand-building occasion. 
          Every week, the 21-to-35 professional demographic makes a tightly clustered set of lifestyle decisions: 
          which venue to spend the afternoon at, which drinks to order, which people to be seen with, and which 
          moments to capture and share across social platforms. These are not passive consumption choices. 
          They are identity-signalling acts — each one a public declaration of taste, social positioning, and 
          cultural fluency. They unfold in WhatsApp group chats, manifest at venues across the city between 
          midday and sundown, and are broadcast to wider networks through Instagram Stories and TikTok posts 
          within hours. For any premium beverage brand, this weekly cycle represents an extraordinarily dense 
          and recurring window of influence — a moment when brand association, venue presence, and social 
          visibility converge at scale.
        </p>

        <p className="font-body text-[#F0EBE0] text-base md:text-lg leading-[1.7]">
          The current landscape serving this occasion, however, is structurally incapable of delivering that brand value. 
          Nairobi's Sunday social scene is populated by dozens of independent activations — rooftop brunches, 
          garden day parties, poolside sessions, outdoor DJ events — operating without coordination, without 
          shared visual identity, and without brand-level recognition beyond their immediate attendee circles. 
          Each event generates a burst of social content that dissipates within 48 hours, building no cumulative 
          equity for any venue, any organiser, or any beverage partner. The audience moves fluidly between these 
          activations week to week, driven by novelty rather than loyalty. For a consumer, this means variety 
          without meaning. For a brand, it means visibility without ownership — presence at a Sunday event 
          this week carries no guarantee of recall, association, or preference by the following Sunday.
        </p>

        <p className="font-body text-[#F0EBE0] text-base md:text-lg leading-[1.7]">
          This condition will not persist indefinitely. Fragmented social occasions in high-value urban markets 
          tend to consolidate around branded properties once a single operator introduces the infrastructure 
          to systematise the experience — consistent production quality, a recognisable visual identity, a 
          content ecosystem that sustains attention between events, and a community architecture that converts 
          casual attendees into committed participants. The Sunday occasion in Nairobi has reached the scale 
          and cultural significance where that consolidation is structurally inevitable. The question is not 
          whether a premium brand will come to own this occasion, but which brand will move first — and 
          whether the brand that does so will have designed the architecture to hold that position once 
          others respond.
        </p>
      </div>

      {/* Strategic Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insightCards.map((card, i) => (
          <div 
            key={i} 
            className="glass-card p-6 flex flex-col gap-4 hover:border-brand-gold/50 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <div className="space-y-3">
              <h4 className="font-headline text-2xl text-white tracking-tight leading-none group-hover:text-brand-gold transition-colors">
                {card.title}
              </h4>
              <p className="font-body text-[13px] md:text-sm text-[#F0EBE0]/70 leading-relaxed">
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footprint Comparison Section */}
      <div className="pt-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.2fr] items-start gap-8 md:gap-0 relative">
          {/* Left Panel: Distribution */}
          <div className="md:pr-12 space-y-4 opacity-0 animate-in fade-in duration-1000 fill-mode-forwards [animation-delay:500ms]">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
              <h4 className="font-headline text-xl text-brand-teal tracking-widest uppercase">Distribution Footprint</h4>
            </div>
            <p className="font-body text-[#F0EBE0]/60 text-sm leading-relaxed max-w-md">
              Savanna Premium Cider is produced at KWAL&apos;s Tatu City facility and distributed nationally through KWAL&apos;s retail and on-trade network. The product is available, accessible, and operationally established in the Kenyan market.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-full bg-brand-gold/20 self-stretch" />

          {/* Right Panel: Cultural */}
          <div className="md:pl-12 space-y-5 p-8 rounded-3xl bg-white/5 border border-brand-gold/10 shadow-[0_0_40px_rgba(244,197,66,0.03)] opacity-0 animate-in fade-in duration-1000 fill-mode-forwards [animation-delay:900ms]">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full border border-brand-gold" />
              <h4 className="font-headline text-xl text-brand-gold tracking-widest uppercase">Cultural Footprint</h4>
            </div>
            <p className="font-body text-[#F0EBE0] text-sm md:text-base leading-relaxed">
              Savanna&apos;s presence in Kenya&apos;s experiential landscape is, at present, negligible. The brand is not associated with any recurring social occasion, any lifestyle community, any content property, or any cultural moment that consumers organise their social lives around. In a premium beverage market that is increasingly shaped by experiential association — where consumers choose brands they have experienced, not merely brands they have seen — this absence is the most significant unrealised asset in Savanna&apos;s Kenyan portfolio.
            </p>
          </div>
        </div>

        {/* Strategic Pull Quote */}
        <div className="text-center pt-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards [animation-delay:1200ms]">
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-10" />
          <p className="font-serif italic text-2xl md:text-4xl text-brand-gold max-w-4xl mx-auto leading-tight tracking-tight">
            &ldquo;Distribution puts Savanna on the shelf. <br className="hidden md:block" /> Cultural ownership puts Savanna in the conversation.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
