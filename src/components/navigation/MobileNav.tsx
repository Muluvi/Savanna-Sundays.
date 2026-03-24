"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'the-gap', label: 'The Sunday Opportunity', num: '01' },
  { id: 'the-engine', label: 'How It Works', num: '02' },
  { id: 'the-ritual', label: 'The Savanna Experience', num: '03' },
  { id: 'the-harvest', label: 'The Content Engine', num: '04' },
  { id: 'the-community', label: 'The Growth Flywheel', num: '05' },
  { id: 'the-numbers', label: 'The Numbers', num: '06' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 20; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
        "fixed inset-0 bg-brand-green z-[105] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col p-10 pt-24",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 space-y-1 mb-8">
          <p className="font-body text-[10px] tracking-[4px] text-brand-gold uppercase font-bold opacity-40">Strategic Deck</p>
          <h3 className="font-headline text-4xl text-white uppercase tracking-tighter">Navigation</h3>
        </div>

        <nav className="relative z-10 flex-1 overflow-y-auto scrollbar-hide">
          <ul className="space-y-4">
            {sections.map((section, i) => (
              <li 
                key={section.id} 
                className={cn(
                  "transition-all duration-700 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full flex items-center justify-between group py-3 border-b border-white/5"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-headline text-lg text-brand-gold/40">{section.num}</span>
                    <span className="font-headline text-3xl text-white tracking-wide uppercase group-hover:text-brand-gold transition-colors">
                      {section.label}
                    </span>
                  </div>
                  <ChevronRight className="text-brand-gold opacity-40" size={18} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cn(
          "relative z-10 pt-8 border-t border-white/10 mt-auto transition-all duration-1000 delay-500",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Sparkles className="text-brand-gold opacity-30" size={18} />
            </div>
            <div>
              <p className="font-body text-[9px] text-white/50 font-bold uppercase tracking-widest leading-none">Firefly Management</p>
              <p className="font-body text-[8px] text-brand-gold/40 uppercase tracking-[2px] mt-1">Strategic Proposal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
