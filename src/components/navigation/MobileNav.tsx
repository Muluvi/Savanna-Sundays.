"use client";

import React, { useState, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'the-gap', label: '01 — The Opportunity', num: '01' },
  { id: 'the-engine', label: '02 — The Venue Network', num: '02' },
  { id: 'the-ritual', label: '03 — The Ritual', num: '03' },
  { id: 'the-numbers', label: '04 — The Investment', num: '04' },
  { id: 'growth-plan', label: '05 — The Roadmap', num: '05' },
  { id: 'infrastructure', label: '06 — Infrastructure', num: '06' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef<number>(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    // Horizontal swipe-left distance exceeds 60px
    if (distance > 60) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-brand-gold text-brand-green rounded-2xl shadow-2xl active:scale-90 transition-all z-[110] border border-brand-gold/20"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "fixed inset-0 z-[105] transition-all duration-700 flex flex-col p-10 pt-24",
          "bg-[#0E1A10]/88 backdrop-blur-[24px] backdrop-saturate-[1.4]",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        {/* Subtle drag handle pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-brand-gold opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-1 mb-12">
          <p className="font-body text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold opacity-40">Strategic Proposal</p>
          <h3 className="font-headline text-[var(--text-4xl)] text-white uppercase tracking-tighter">Navigation</h3>
        </div>

        <nav className="relative z-10 flex-1 overflow-y-auto scrollbar-hide">
          <ul className="space-y-6">
            {sections.map((section, i) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full flex items-center justify-between group py-4 border-b border-white/5"
                >
                  <div className="flex items-center gap-8">
                    <span className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] text-brand-gold/40">{section.num}</span>
                    <span className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-white tracking-wide uppercase group-hover:text-brand-gold transition-colors">
                      {section.label.replace(/^\d+\s—\s/, '')}
                    </span>
                  </div>
                  <ChevronRight className="text-brand-gold opacity-40" size={24} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
          <p className="font-headline text-[var(--text-xl)] text-brand-gold tracking-widest uppercase opacity-60">Firefly Management</p>
          <p className="font-body text-[var(--text-xs)] text-white/20 uppercase tracking-[2px] leading-relaxed">
            Confidential Strategic Document. <br/>All session data recorded.
          </p>
        </div>
      </div>
    </>
  );
};
