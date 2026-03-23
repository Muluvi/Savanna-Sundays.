"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', label: '00 — HERO' },
  { id: 'the-gap', label: '01 — THE GAP' },
  { id: 'the-concept', label: '02 — THE CONCEPT' },
  { id: 'the-experience', label: '03 — THE EXPERIENCE' },
  { id: 'the-content-engine', label: '04 — THE CONTENT ENGINE' },
  { id: 'building-the-crowd', label: '05 — BUILDING THE CROWD' },
  { id: 'the-numbers', label: '06 — THE NUMBERS' },
  { id: 'the-partnership', label: '07 — THE PARTNERSHIP' },
  { id: 'lead-capture', label: '09 — NEXT STEPS' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-[100] px-4 py-4 flex justify-between items-center pointer-events-none">
      <div className="glass-card p-3 pointer-events-auto">
        <div className="text-brand-gold font-headline text-lg leading-none">SS</div>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-gold text-brand-green p-3 rounded-xl shadow-lg pointer-events-auto active:scale-95 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={cn(
        "fixed inset-0 bg-brand-green/95 backdrop-blur-xl z-[-1] transition-all duration-500 p-8 flex flex-col justify-center items-center pointer-events-auto",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="w-full">
          <ul className="space-y-4">
            {sections.map((section, i) => (
              <li key={section.id} 
                className={cn(
                  "transition-all duration-500",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full text-center py-4 text-3xl font-headline text-brand-gold hover:text-brand-cream hover:scale-110 transition-all"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
