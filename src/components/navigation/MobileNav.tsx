"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', label: '00 — START' },
  { id: 'the-gap', label: '01 — THE GAP' },
  { id: 'the-concept', label: '02 — CONCEPT' },
  { id: 'the-experience', label: '03 — EXPERIENCE' },
  { id: 'the-content-engine', label: '04 — CONTENT' },
  { id: 'the-demand-machine', label: '05 — MACHINE' },
  { id: 'the-numbers', label: '06 — NUMBERS' },
  { id: 'the-partnership', label: '07 — PARTNER' },
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
      <div className="bg-brand-green/90 backdrop-blur-sm p-3 rounded-xl pointer-events-auto">
        <div className="text-brand-gold font-headline text-lg leading-none">SS</div>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-gold text-brand-green p-3 rounded-xl shadow-lg pointer-events-auto active:scale-95"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-brand-green z-[-1] transition-all duration-500 p-8 flex flex-col justify-center items-center pointer-events-auto",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="w-full">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full text-center py-4 text-2xl font-headline text-brand-gold hover:text-brand-cream transition-colors"
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
