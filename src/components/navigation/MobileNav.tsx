"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'the-gap', label: 'The Opportunity', num: '01' },
  { id: 'the-engine', label: 'The Venue Network', num: '02' },
  { id: 'the-ritual', label: 'The Ritual', num: '03' },
  { id: 'the-numbers', label: 'The Investment', num: '04' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-brand-gold text-brand-green rounded-2xl shadow-2xl active:scale-90 transition-all z-[110] border border-brand-gold/20"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={cn(
        "fixed inset-0 bg-brand-green z-[105] transition-all duration-700 flex flex-col p-10 pt-24",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="relative z-10 space-y-1 mb-12">
          <p className="font-body text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold opacity-40">Strategic Deck</p>
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
                      {section.label}
                    </span>
                  </div>
                  <ChevronRight className="text-brand-gold opacity-40" size={24} />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
